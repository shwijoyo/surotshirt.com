from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import sys
import html

hostName = "localhost"
serverPort = 8001

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        f = open("template.xml", "r")
        fr = f.read();
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes(fr, "utf-8"))

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
