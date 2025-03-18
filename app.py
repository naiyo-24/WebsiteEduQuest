from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)

# Mail settings
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'deyr45560@gmail.com'  # Your Gmail address
app.config['MAIL_PASSWORD'] = 'vqgx bobf eovi idsa'         # Your 16-character app password

mail = Mail(app)

# Add route for serving static files
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/send-feedback', methods=['POST'])
def send_feedback():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        msg = Message(
            subject='New Feedback from EduQuest247',
            sender=app.config['MAIL_USERNAME'],
            recipients=[app.config['MAIL_USERNAME']]
        )
        
        msg.body = f"""
        New feedback received from EduQuest247:
        
        From: {name}
        Email: {email}
        
        Message:
        {message}
        """

        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Feedback sent successfully'})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
