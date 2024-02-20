# Projet Cleancode 
(Pair programming with Noé PIGEAU and Alexandre HARDY)

Schema DDD (Domain Driven Development)  
Schema architecture Hexagonal  
See the file "DDD and Hexagonal.png"  

### Precisions on the schema
On the shema DDD we indicated that a questionnaire is composed of question and not card because the questionnaire
is only composed of question the answers are out of subjects

## Project structure

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

### Run tests

``` 
npm run test 
```

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

### We did the first bonus  
The quiz of the day can be answered in several times a day, but each question can be answered only once a day.

