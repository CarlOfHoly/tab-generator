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

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

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
    if db.session.query(User).filter_by(username='carl').count() < 1:
        db.session.add(User(
            username = 'carl',
            password = guard.hash_password('carl'),
            roles = 'admin'
        ))
    db.session.commit()

@app.route('/api/login', methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'jwt' : guard.encode_jwt_token(user)}
    return ret, 200

@app.route('/api/refresh', methods=['POST'])
def refresh():
    print("refresh requested")
    old_token = request.det_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'jwt' : new_token}
    return ret, 200

@app.route('/api/protected')
@flask_praetorian.auth_required 
def protected():
    return {"message": f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}


