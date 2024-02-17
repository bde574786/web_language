from flask import Flask

app = Flask(__name__)

@app.route('/')
def docker_test():
    return 'Docker Test'
    
if __name__ == '__main__':
    app.run()