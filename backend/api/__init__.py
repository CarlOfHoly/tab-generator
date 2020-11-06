import os
import flask
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging 

import flask_sqlalchemy
import flask_praetorian


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('INIT')

UPLOAD_FOLDER='./algorithms'
ALLOWED_EXTENSIONS = set(['txt', 'wav'])

app = flask.Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = os.urandom(24)
CORS(app)


@app.route('/', methods=['GET'])
def hello_world():
    response = flask.jsonify({'some': 'data'})
    return response

@app.route('/upload', methods=['POST'])
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

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active


guard.init_app(app, User)

app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'database.db')}"
db.init_app(app)

with app.app_context():
    db.create_all()
