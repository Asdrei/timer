from flask import Flask, render_template, url_for
import json

app = Flask(__name__)

@app.route('/')
def index():
    f = open('static/countries/list.json')
    countries = json.loads(f.read())['countries']
    return render_template('index.html', countries=countries)

@app.route('/<country>')
def country(country=None):
    f = open('static/countries/list.json')
    countries = json.loads(f.read())['countries']
    return render_template('country.html', active=country, countries=countries)

if __name__ == '__main__':
    app.run()