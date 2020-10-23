import flask
from flask import request
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def hello_world():
    response = flask.jsonify({'some': 'data'})
    return response

@app.route('/analyze', methods=['GET', 'POST'])
def analyze_data():
    if request.method == 'POST':
        f = request.files['file']
        f.save()
        return "fish"