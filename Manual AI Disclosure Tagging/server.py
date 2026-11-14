#!/usr/bin/env python3
"""
Local server for Manual AI Disclosure Tagging.
Serves the web app and allows reading/saving CSV files directly in this folder.
Zero external dependencies (Python 3 standard library only).
"""

import argparse
import http.server
import json
import os
import socketserver
import urllib.parse
import webbrowser
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DEFAULT_CSV = "steam_games_ai_disclosure_sample_300.csv"


def safe_csv_path(filename: str) -> Path | None:
    """Resolve a CSV filename strictly within BASE_DIR."""
    if not filename:
        return None
    name = os.path.basename(filename.strip())
    if not name.lower().endswith(".csv"):
        return None
    candidate = (BASE_DIR / name).resolve()
    if candidate.parent != BASE_DIR:
        return None
    return candidate


class TaggerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _send_json(self, status: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)

        if parsed.path == "/api/health":
            csvs = sorted(p.name for p in BASE_DIR.glob("*.csv"))
            self._send_json(200, {
                "ok": True,
                "defaultFile": DEFAULT_CSV if (BASE_DIR / DEFAULT_CSV).exists() else (csvs[0] if csvs else None),
                "files": csvs,
            })
            return

        if parsed.path == "/api/csv":
            qs = urllib.parse.parse_qs(parsed.query)
            requested = qs.get("file", [DEFAULT_CSV])[0]
            target = safe_csv_path(requested)
            if not target or not target.exists():
                self._send_json(404, {"ok": False, "error": f"CSV not found: {requested}"})
                return
            data = target.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "text/csv; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.send_header("X-CSV-Filename", target.name)
            self.end_headers()
            self.wfile.write(data)
            return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/api/save":
            self._send_json(404, {"ok": False, "error": "Unknown endpoint"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self._send_json(400, {"ok": False, "error": "Invalid Content-Length"})
            return

        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode("utf-8"))
        except Exception:
            self._send_json(400, {"ok": False, "error": "Invalid JSON body"})
            return

        filename = payload.get("filename", DEFAULT_CSV)
        content = payload.get("content")
        if not isinstance(content, str):
            self._send_json(400, {"ok": False, "error": "Missing CSV content"})
            return

        target = safe_csv_path(filename)
        if not target:
            self._send_json(400, {"ok": False, "error": "Invalid CSV filename"})
            return

        tmp = target.with_suffix(".csv.tmp")
        tmp.write_bytes(content.encode("utf-8"))
        tmp.replace(target)
        self._send_json(200, {"ok": True, "filename": target.name, "bytes": len(content.encode("utf-8"))})


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


def main():
    parser = argparse.ArgumentParser(description="Manual AI Disclosure Tagger Server")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()

    port = args.port
    server = None
    for offset in range(10):
        try:
            server = ReusableTCPServer(("127.0.0.1", port + offset), TaggerHandler)
            port = port + offset
            break
        except OSError:
            continue

    if server is None:
        raise RuntimeError("Could not bind to any port in range 8765-8774")

    url = f"http://127.0.0.1:{port}/"
    print(f"Manual AI Disclosure Tagger running at {url}")
    print(f"Serving folder: {BASE_DIR}")
    print("Press Ctrl+C to stop.")
    if not args.no_browser:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
