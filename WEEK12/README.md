
---

### ✅ Step 1: Make sure Python is installed
Check by running:

```bash
python --version
```
or

```bash
python3 --version
```

If Python is not installed, [download and install Python](https://www.python.org/downloads/). Make sure to check the box that says **"Add Python to PATH"** during installation on Windows.

---

### ✅ Step 2: Navigate to your project directory

Open a terminal or command prompt and go to the folder where you want your Django project:

```bash
cd path/to/your/project
```

---

### ✅ Step 3: Create a virtual environment

```bash
python -m venv venv
```
or, if your system uses `python3`:

```bash
python3 -m venv venv
```

This creates a folder called `venv` containing the isolated environment.

---

### ✅ Step 4: Activate the virtual environment

- **On Windows**:
  ```bash
  venv\Scripts\activate
  ```

- **On macOS/Linux**:
  ```bash
  source venv/bin/activate
  ```

You should now see something like `(venv)` at the beginning of your terminal prompt.

---

### ✅ Step 5: Upgrade pip (optional but recommended)

```bash
pip install --upgrade pip
```

---

### ✅ Step 6: Install Django

```bash
pip install django
```

---

### ✅ Step 7: Verify Django installation

```bash
django-admin --version
```

You should see a version number if it was installed correctly.

---

