#!/usr/bin/env python3
"""Simple webhook receiver for portfolio auto-deploy."""

import http.server
import socketserver
import subprocess
import os
import json
from urllib.parse import parse_qs

PORT = 9000
WEBROOT = "/var/www/portfolio"
REPO_DIR = "/home/ubuntu/portfolio"
LOGFILE = "/home/ubuntu/portfolio/deploy.log"
SECRET = "secretPortfolioDeploy123"

class DeployHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        if not self.path.startswith("/deploy"):
            self.send_error(404)
            return

        query = parse_qs(self.path.split("?")[1] if "?" in self.path else "")
        query_secret = query.get("secret", [""])[0]

        if query_secret != SECRET:
            self.send_error(403, "Forbidden")
            return

        try:
            result = subprocess.run(
                [REPO_DIR + "/deploy.sh"],
                capture_output=True,
                text=True,
                timeout=300
            )
            with open(LOGFILE, "a") as f:
                f.write("[stdout]\n" + result.stdout + "\n[stderr]\n" + result.stderr + "\n")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {"status": "ok" if result.returncode == 0 else "error", "returncode": result.returncode}
            if result.returncode != 0:
                resp["error"] = result.stderr[-500:]
            self.wfile.write(json.dumps(resp).encode())
        except Exception as e:
            with open(LOGFILE, "a") as f:
                f.write("[EXCEPTION] " + str(e) + "\n")
            self.send_error(500, str(e))

    def do_GET(self):
        if self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"ok")
        else:
            self.send_error(404)

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), DeployHandler) as httpd:
        print("Webhook receiver listening on port " + str(PORT))
        httpd.serve_forever()
