# Projet Cleancode 
(Pair programming with Noé PIGEAU and Alexandre HARDY)

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



