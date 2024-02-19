# Projet Cleancode 
(Pair programming with Noé PIGEAU and Alexandre HARDY)

BACKEND: build with Express and Sequelize

folders:
  - models: all models are listed here for each entity
  - services: functions for models to interact with db group by entity
  - controllers: function to handle action group by entity
  - routes: all routes are listed here group by entity

FRONTEND: build with React

folders:
  - components: all components are here
  - services: functions to interact with backend group by entity

## 1 - setup backend

### Init database

go to backend directory:
```
cd backend
```

then, create file .env et copy content from .env.example into it

install dependencies:
``` 
npm install 
```

start docker compose for postgres:
``` 
docker compose up -d 
```

Setup database:
``` 
npm run migrate
```

### Start server

``` 
npm run dev 
```

You have to create one user to use the app

Go to requests.http file and run the request ### CREATE USER

## 1 - setup frontend

go to backend directory:
```
cd frontend
```

install dependencies:
``` 
npm install 
```

start frontend
``` 
npm run dev 
```


## More informations

Each question can be only answered one time per day

