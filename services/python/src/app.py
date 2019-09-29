from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def route():
  return { "data" : 'python-service'}

if __name__ == '__main__':
  app.run(debug = False, host = '0.0.0.0')