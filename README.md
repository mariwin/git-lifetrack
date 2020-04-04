# Lifetrack Test

Configuration for PHP development API server and React frontend development environment with Babel & Webpack

### Install 🔧

#### Step 1. Clone project from GitHub:
```sh
git clone git@github.com/mariwin/git-lifetrack.git

or via Sourcetree

https://github.com/mariwin/git-lifetrack.git
```

### Step 2. Run make for building docker container (contains php server)
```sh
make build
```

### Step 2. OR: Run for starting docker already build container
```sh
make run
```

#### Step 3. Update React dependencies
```sh
make update
```

#### Step 4. Run Webpack & Babel:
```sh
make start
```