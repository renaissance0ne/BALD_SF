
---

# Angular Lab Setup Guide (Codealong Version)

## 🧭 Getting Started

Follow these steps to set up your Angular project for **WEEK 10 Lab**.

### 1️⃣ Navigate to the Week Directory

```bash
cd WEEK10
```

### 2️⃣ Install Angular CLI (Globally)

```bash
npm install -g @angular/cli
```

### 3️⃣ (Optional) Verify Angular CLI Installation

```bash
ng --version
```

### 4️⃣ Create a New Angular Project

```bash
ng new your_app_name --standalone=false --routing
```

- Choose **CSS** when prompted for stylesheet format.
- Enable **Server-Side Rendering (SSR)** → `Yes`
- Enable **Server Routing and App Engine API** → `Yes`

### 5️⃣ Navigate to Your App Directory

```bash
cd your_app_name
```

### 6️⃣ Generate Core Components

#### For Command Prompt:
```bash
ng g c home && ng g c login && ng g c register 
```

#### For PowerShell:
```bash
ng g c home; ng g c login; ng g c register;
```

### 7️⃣ Run the Project

```bash
ng serve
```

Make sure everything is running correctly in the browser.

### 8️⃣ Modify Files as per Lab Record

Update the following files based on your lab record instructions:

- `src/index.html`
- `src/app/app-routing.module.ts`
- `src/app/app.component.html`
- `src/app/app.module.ts`
- `src/app/app.module.server.ts`
- `src/app/profile/profile.component.html`
- `src/app/profile/profile.component.ts`


---
