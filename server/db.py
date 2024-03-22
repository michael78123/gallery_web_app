import sqlite3

IMAGES = [
    "https://cdn.pixabay.com/photo/2020/10/27/19/11/salinas-5691615_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/06/11/18/27/statue-2393168_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/03/18/36/spikes-4738831_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/06/14/11/23/wanderer-5297457_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/10/29/02/13/jardin-202150_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/07/21/58/woman-438399_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/12/00/40/roller-skating-2740936_1280.jpg",
    "https://cdn.pixabay.com/photo/2012/12/23/03/33/giant-kingfisher-71936_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/06/29/15/08/relax-3506180_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/01/15/45/advertising-1429216_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/06/21/26/display-dummy-1575165_1280.jpg",
]

class Image():
    def _init_table(self):
        connect = sqlite3.connect('image.db')
        cursor = connect.cursor()
        cursor.execute(""" CREATE TABLE images (
            url text,
            upvote_count integer,
            downvote_count integer
        ) """)
        print("Command excuted successfully!")
        connect.commit()
        connect.close()

    def _add_images(self):
        connect = sqlite3.connect('image.db')
        cursor = connect.cursor()
        images = []
        for image in IMAGES:
            images.append((image, 0, 0))
        cursor.executemany("INSERT INTO images VALUES (?,?,?)", images)
        print("Command excuted successfully!")
        connect.commit()
        connect.close()

    def get_all_images(self):
        connect = sqlite3.connect('image.db')
        cursor = connect.cursor()
        cursor.execute("SELECT rowid, * FROM images")
        data = cursor.fetchall()
        connect.commit()
        connect.close()
        return data


# image = Image()
# image._init_table()
# image._add_images()
# image.get_all_images()