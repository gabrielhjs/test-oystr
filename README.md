# Test Oystr

---

# _IpInfo RESTful API_

 This is an API created for the Oystr Backend Developer test. The architecture of this app was developed focused on the scalability of the project.

### [Project running with Docker on Heroku](https://test-oystr.herokuapp.com/)

---

# Technology

- ##### [Nodejs](https://nodejs.org/en/)
- ##### [Docker](https://www.docker.com/)
- ##### [Heroku](https://dashboard.heroku.com/login)
- ##### [Typescript](https://www.typescriptlang.org/)
- ##### [Javascript](https://www.javascript.com/)
- ##### [Express](https://expressjs.com/pt-br/)
- ##### [Axios](https://github.com/axios/axios)

---

# Architecture
### Providers
They are components of the project that access other applications and provide the data obtained.

### Use Cases
They are components that provide the use cases of the application. That is, they receive requests, process and return the requested data if it exists. These components can use provider interfaces to request external data.

---

# .env
Before executing the project, the **.env** file must be created in the root with the following environment variables:
```env
ACCESS_KEY=d33b3844e2a7bfda3309c596a341fea9
APP_URL=http://localhost:3333
PORT=3333
```
---

# Setup
### Download
```bash
git clone https://github.com/gabrielhjs/test-oystr.git
```
### Installation
```bash
cd test-oystr
yarn install
```
### Run Typescript development server
```bash
yarn dev
```
### Transpile to Javascript
```bash
yarn build
```
### Run Javascript server
```bash
yarn start
```
### Build Docker image (requires Docker)
```bash
docker-compose build
```
### Run Docker container (requires Docker)
```bash
docker-compose up -d
```
### Stop Docker container (requires Docker)
```bash
docker-compose down
```

---

# Features
## Get status
Feature that returns the status of the application.

##### Endpoint
```
/status
```

## Get Ip info
Feature that returns the IP information of the server.

##### Endpoint
```
/
```

---

By [**Gabriel Sá**](https://github.com/gabrielhjs) | Backend Developer :D


