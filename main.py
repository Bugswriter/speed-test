from flask import Flask, request, Response, render_template
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
	return render_template("home.html")

@app.route('/speed-test', methods=['POST'])
def speed_test():
    try:
        bytes_to_generate = int(request.json.get('bytes'))
    except ValueError:
        return "Invalid input", 400
    
    junk_data = os.urandom(bytes_to_generate)
    
    return Response(junk_data, content_type='application/octet-stream')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
