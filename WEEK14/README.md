

---

# Django REST API Setup Guide

This guide walks you through setting up a Django project with Django REST Framework.

---

## 🚀 Getting Started

### 1. Create a Virtual Environment
```bash
python -m venv venv
```

### 2. Activate the Virtual Environment

- **Windows:**
  ```bash
  venv\Scripts\activate
  ```
- **Linux/macOS:**
  ```bash
  source venv/bin/activate
  ```

### 3. Install Dependencies
```bash
pip install django djangorestframework
```

### 4. Create a Django Project
```bash
django-admin startproject fetchapi
cd fetchapi
```

### 5. Create a Django App
```bash
python manage.py startapp navia
```

---

## ⚙️ Project Configuration

### 6. Add Your App to `INSTALLED_APPS`

Open `fetchapi/settings.py` and add `'navia'` to the `INSTALLED_APPS` list:
```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'navia',
]
```

### 7. Define URLs

- In `navia/urls.py`, create the file if it doesn't exist:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('navia.urls')),
]
```

---

## 🧱 Create Models

- Define your models in `navia/models.py`:
```python
from django.db import models

class StudentModel(models.Model):
    name = models.CharField(max_length=50)
    dept = models.CharField(max_length=50)
    roll = models.IntegerField()
```

- Register the model in `navia/admin.py`:
```python
from django.contrib import admin
from .models import StudentModel

admin.site.register(StudentModel)
```

---

## 🛠 Run Migrations and Start Server

```bash
python manage.py makemigrations
python manage.py migrate
```

### 1. Create a Superuser
```bash
python manage.py createsuperuser
```

> **Note:** Remember your username and password.

### 2. Start the Development Server
```bash
python manage.py runserver
```

---

## 🔗 Access Admin Panel

Visit [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) and log in using your superuser credentials.

---

