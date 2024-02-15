from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL 설정
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'asd123'
app.config['MYSQL_DB'] = 'web_db'

mysql = MySQL(app)

@app.route('/')
def index():
    return 'index page'

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login/post', methods=['POST'])
def login_post():
    data = request.json
    
    id = data['id']
    password = data['password']

    query = f"SELECT * FROM user WHERE id='{id}' AND password='{password}'"

    cursor = mysql.connection.cursor()
    cursor.execute(query)
    
    result = cursor.fetchall()
    
    if result:
        return jsonify(data)
    return jsonify({})
        
    
if __name__ == '__main__':
    app.run(debug=True)