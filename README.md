# gallery_web_app

This repository offers a web gallery application powered by a Python Flask server and a React frontend. Upon launching the application, users can vote on images within the gallery, with the vote count being dynamically updated. Data is stored persistently in a Python SQLite database.

The primary modifications for the React Application are located within the client/src directory. App.jsx serves as the main application file, while Vote.jsx and Image.jsx function as custom components.

In the Flask Server, api.py serves as the entry point to initiate the application. test_api.py functions as the entry point for testing the REST API. Additionally, db.py encapsulates helper functions for creating and interacting with the database.


## Setting and Running Python Flask Server

### make sure you're in the server folder

```
python3 -m venv venv
```

```
source venv/bin/activate
```

Install the requirements:

```
pip install -r requirements.txt
```

Run the server:

```
python api.py
```

This will start the local server on port 5000.


## Running React App
Set up React frontend, please follow the following instructions:

### make sure you're in client folder

```
npm install
```

```
npm run dev
```

Once everything is set up, could go to http://localhost:5173/ to visit the react app

## Running Unittest for Rest API
make sure you're in server folder

```
python -m unittest test_api.py
```

