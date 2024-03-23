import unittest
import json
from api import app
from db import Image

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_get_images(self):
        response = self.app.get('/images')
        response_json = response.json
        self.assertEqual(response.status_code, 200)
        self.assertTrue(len(response_json["images"]) != 0)

    def test_upvote_image(self):
        data = {"id": 1}
        image_db = Image()
        cur_upvote_count = image_db.get_image(1)[0][2]

        response = self.app.post('/upvote', json=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["upvote_count"], cur_upvote_count + 1)

    def test_downvote_image(self):
        data = {"id": 1}
        image_db = Image()
        cur_downvote_count = image_db.get_image(1)[0][3]

        response = self.app.post('/downvote', json=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["downvote_count"], cur_downvote_count + 1)

if __name__ == '__main__':
    unittest.main()
