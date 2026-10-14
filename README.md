# RAILABeadere Flask Website

A responsive bilingual (English/Tetum) Flask website using the navy, gold and white brand identity.

## Included
- `app.py` — Flask routes for homepage, About, Contact and service detail pages.
- `templates/` — Jinja HTML templates.
- `static/css/styles.css` — responsive design and image-led service cards.
- `static/js/script.js` — language switcher and mobile menu.
- `static/images/logo.svg` — original RB monogram.
- `data/services.json` — service names and descriptions for easy editing.
- `requirements.txt` — Flask and Gunicorn dependencies.

## Run in VS Code on Windows
Open this folder in Visual Studio Code, then open Terminal > New Terminal and run:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000` in your browser.

If PowerShell blocks activation, you can run the virtual environment's Python directly:
```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py
```

## Publish with GitHub + Render
1. Create a new GitHub repository, e.g. `railabeadere-website`.
2. Push this project folder to the repository.
3. In Render, create a **Web Service** and connect the repository.
4. Build command: `pip install -r requirements.txt`
5. Start command: `gunicorn app:app`
6. Deploy and test the Render URL.

## Before launch
- Confirm actual bus schedule and fares, catering menu and prices, RAILA KOS room rates/location, EDTL Pulsa steps, and shopping/delivery terms.
- Replace stock photos with company photos if available.
- Review Tetum translations with a fluent local speaker.
- This is an inquiry website: buttons open WhatsApp/email. It does not accept payments or persist booking requests.
- External photos and Google Fonts need internet access.


## Recent image update
- Homepage hero background now uses the bus photo used by the transport service card.
- EDTL Pulsa service card now points to an alternate electricity-related photo URL.


## Homepage section order
The homepage now displays the Hero banner, About RAILABeadere, Contact / How can we help you, and then Our Services.


## Homepage layout update
- About RAILABeadere and the 'How can we help you?' introduction are now side by side near the top.
- WhatsApp, email and service area contact cards are moved below the services list and displayed horizontally on wide screens.
- Contact cards stack vertically on smaller screens for readability.


## Final homepage layout adjustment
- Removed the duplicate 'How can we help you?' introduction from the top.
- Centered the About RAILABeadere section.
- Placed 'How can we help you?' above the horizontal contact cards in the lower contact section, immediately after Our Services.


## One-screen desktop layout
- Removed duplicate 'How can we help you?' introduction.
- Tightened desktop section spacing, card imagery and footer height so the homepage can fit on a typical desktop screen where practical. Mobile layouts intentionally remain scrollable for accessibility.


## EDTL Pulsa image
The EDTL Pulsa service now uses the locally stored `static/images/edtl-electric-meter.png` image, so the service image no longer depends on an external photo URL.
