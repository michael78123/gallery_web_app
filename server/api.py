from flask import Flask, jsonify, request
from db import Image

app = Flask(__name__)

@app.route('/name')
def index():
    return jsonify({
        "name": "hello",
		'image': "image1.jpg",
    })

@app.route('/images', methods=["GET"])
def get_images():
    images_db = Image()
    image_data = images_db.get_all_images()
    images = []

    for data in image_data:
        images.append({"id":data[0], "url": data[1], "upvote_count": data[2], "downvote_count": data[3]})

    return jsonify({
        "images": images
    })

@app.route('/upvote', methods=["POST"])
def upvote_image():
    row_id = request.json.get("id")
    return jsonify({"row_id": row_id})

@app.route('/downvote', methods=["POST"])
def downvote_image():
    row_id = request.json.get("id")
    return jsonify({"row_id": row_id})


if __name__ == '__main__':
	app.run(debug=True)