import os
import flask
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging 

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO')

UPLOAD_FOLDER='./algorithms'
ALLOWED_EXTENSIONS = set(['txt'])

app = flask.Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = os.urandom(24)
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

@app.route('/upload', methods=['Post'])
def uploadFile():
    target=os.path.join(UPLOAD_FOLDER, 'uploads')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("uploading file")
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    return "Successfully uploaded file"