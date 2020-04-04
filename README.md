# React Start ⚡️

Configuration for Node development API server and React frontend development environment with Babel & Webpack

### Install 🔧

#### 1. Clone project from GitHub:
```sh
git clone git@github.com:mc17uulm/react-start.git
```

### 2. Run make for building docker container (contains php server)
```sh
make build
```

### 2. OR: Run for starting docker already build container
```sh
make run
```

#### 3. Update React dependencies
```sh
make update
```

#### 4. Run Webpack & Babel:
```sh
make start
```

### Edit ✏️

**Working on backend server:**

Backend server is running on apache & PHP and expects requests on ```http://localhost/```. Changes can be made in ```backend/```.

**Editing frontend:**

Entry point for the React application is ```src/js/App.jsx```. Development is compiling script to ```http://localhost/public/main.js``` for syncing with PHP backend application