
---

# Django Menu Items App

This is a simple Django project to demonstrate how to create a web app that serves menu items using Django views and templates.

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/renaissance0ne/BALD_SF.git
cd BALD_SF
```

### 2. Set Up a Virtual Environment

```bash
python -m venv venv
```

### 3. Activate the Virtual Environment

- On Windows:

  ```bash
  venv\Scripts\activate
  ```

- On macOS/Linux:

  ```bash
  source venv/bin/activate
  ```

### 4. Install Dependencies

```bash
pip install django
```

### 5. Create a Django Project

```bash
django-admin startproject menuItems
cd menuItems
```

### 6. Create a Django App

```bash
python manage.py startapp app_name
```

> Replace `app_name` with your actual app name.

### 7. Configure Your App

- Add `'app_name'` to `INSTALLED_APPS` in `menuItems/settings.py`.

### 8. Set Up URLs

- In your app folder (`app_name`), create a file named `urls.py` and define your URL patterns.
- In `menuItems/urls.py`, include your app’s URLs and connect the home view:

```python
from django.contrib import admin
from django.urls import path, include
from app_name import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app_name.urls')),
]
```

### 9. Create Views

- In `app_name/views.py`, define your views. For example:

```python
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')
```

### 10. Add Templates

- Create a folder named `templates` in your app directory.
- Place your HTML files (e.g., `home.html`) in the `templates` folder.

---

## ▶️ Running the Project

Run the following commands:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Then open your browser and navigate to `http://127.0.0.1:8000/`.
