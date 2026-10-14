from flask import Flask, render_template, abort
import json
from pathlib import Path
from urllib.parse import quote

app = Flask(__name__)
BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "data" / "services.json"
WHATSAPP_NUMBER = "67077231502"
COMPANY_EMAIL = "jdejmartins@yahoo.com"

def load_services():
    with DATA_FILE.open("r", encoding="utf-8") as file:
        return json.load(file)

@app.context_processor
def inject_contact():
    return {"whatsapp_number": WHATSAPP_NUMBER, "company_email": COMPANY_EMAIL}

@app.route("/")
def home():
    return render_template("index.html", services=load_services())

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/services/<service_id>")
def service_detail(service_id):
    services = load_services()
    service = services.get(service_id)
    if not service:
        abort(404)
    return render_template("service.html", service=service, service_id=service_id,
                           whatsapp_url=f"https://wa.me/{WHATSAPP_NUMBER}?text={quote(service['message'])}")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404

if __name__ == "__main__":
    app.run(debug=True)
