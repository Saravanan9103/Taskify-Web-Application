# Taskify

A Full Stack Todo Application built using React TypeScript and Django REST Framework.

## Features

* Create Tasks
* Read Tasks
* Update Tasks
* Delete Tasks
* REST API Integration
* Responsive UI
* Axios API Calls

## Tech Stack

Frontend

* React TSX
* Axios
* Lucide React

Backend

* Django
* Django REST Framework

Database

* SQLite

## Installation

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend:
http://127.0.0.1:8000

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:
http://localhost:5173

## API Endpoints

GET /api/tasks/

POST /api/tasks/create/

PUT /api/tasks/update/<id>/

DELETE /api/tasks/delete/<id>/

## Author
Saravanan S
