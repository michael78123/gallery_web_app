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
    images_db = Image()
    row_id = request.json.get("id")
    images_db.upvote_image(row_id)
    data = images_db.get_image(row_id)[0]
    response = {"id":data[0], "url": data[1], "upvote_count": data[2], "downvote_count": data[3]}
    return jsonify(response)

@app.route('/downvote', methods=["POST"])
def downvote_image():
    images_db = Image()
    row_id = request.json.get("id")
    images_db.downvote_image(row_id)
    data = images_db.get_image(row_id)[0]
    response = {"id":data[0], "url": data[1], "upvote_count": data[2], "downvote_count": data[3]}
    return jsonify(response)




if __name__ == '__main__':
	app.run(debug=True)