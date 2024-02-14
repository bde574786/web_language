from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'index page'

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login/post', methods=['POST'])
def login_post():
    print(request.form)
    return 'Form data received'
    
if __name__ == '__main__':
    app.run(debug=True)