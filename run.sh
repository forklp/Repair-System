#! /bin/bash
cd frontend
npm run dev &
cd ../backend
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
exit 0