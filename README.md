# gallery_web_app


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

