<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Imagine Apps

Instrucciones de prueba tecnica:

1) Crear una base de datos en mongo (local) llamada test-imagine y una colección con el nombre de products


2) Insertar los registros en la colección products con el archivo "products.json"


3) Crear un modelo de usuarios y una api en donde se puedan crear. El usuario debe de tener name, lastName, email, createdAt


4) Agregar la api para actualizar productos agregando el usuario y cambiar el modelo para que esto sea válido (No se pueden sobreescribir los demás datos, solo agregar el usuario)


5) Cambiar la api que lista todos los productos para que también aparezca su respectivo usuario. Preferible ejecutar las API en herramientas como postman.

## Pasos para ejecutar en desarrollo 

1. Clonar el repositorio
2. Ejecutar ```npm install```
3. Clonar el archivo __.env.template__ y renombrar la copia a __.env__
4. Llenar las variables de entorno dentro de ```.env```
5. Ejecutar la aplicación en dev:  ``` npm run start:dev```
6. Reconstruir la base de datos con la semilla 
```
localhost:3000/api/seed
```

## Documentación de Postman

 - https://documenter.getpostman.com/view/16566391/2s93RNyEbZ

---

## Peticiones Construidas 

### Crud de Productos

-  Post Product

```
localhost:3000/api/products
```

```
{
    "name": "coca-cola", 
    "price": 50,
    "quantity": "500g"
}
```

-  Get Products

```
localhost:3000/api/products
```

``` 
localhost:3000/api/products?limit=20&offset=10  
```

- Get Product and Update Product by Id or Name

```
localhost:3000/api/products/:Id
```

```
localhost:3000/api/products/:Name
```

- Delete producto by Id 
```
localhost:3000/api/products/:Id
```

### Crud de Usuarios

-  Post User

```
localhost:3000/api/user
```

```
{
    "name": "cristhoper",
    "lastName": "castillo",
    "email": "wagner.castillo@unl.edu.ec"
}       
```

-  Get Users

```
localhost:3000/api/user
```

``` 
localhost:3000/api/user?limit=20&offset=10  
```

- Get User and Update User by Id or Name

```
localhost:3000/api/user/:Id
```

```
localhost:3000/api/user/:Name
```

- Delete User by Id 
```
localhost:3000/api/user/:Id
```