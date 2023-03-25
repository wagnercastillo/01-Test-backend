interface SeedUsers {
  name: string,
  lastName: string,
  email: string,
  createdAt: Date
}

interface UserData {
  users: SeedUsers[];
}

export const SEED_USER: UserData = {
  users: [
    {
      name: "Juan",
      lastName: "García",
      email: "juangarcia@gmail.com",
      createdAt: new Date("2023-03-25T18:23:45.135Z")
    },
    {
      name: "María",
      lastName: "López",
      email: "marialopez@gmail.com",
      createdAt: new Date("2023-03-25T17:23:45.135Z")
    },
    {
      name: "Pedro",
      lastName: "González",
      email: "pedrogonzalez@gmail.com",
      createdAt: new Date("2023-03-25T16:23:45.135Z")
    },
    {
      name: "Ana",
      lastName: "Martínez",
      email: "anamartinez@gmail.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Luis",
      lastName: "Pérez",
      email: "luisperez@gmail.com",
      createdAt: new Date("2023-03-25T14:23:45.135Z")
    },
    {
      name: "Jessica",
      lastName: "González",
      email: "jessica.gonzalez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Santiago",
      lastName: "Martínez",
      email: "santiago.martinez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Ana",
      lastName: "López",
      email: "ana.lopez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Juan",
      lastName: "Ramírez",
      email: "juan.ramirez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "María",
      lastName: "García",
      email: "maria.garcia@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Pedro",
      lastName: "Vargas",
      email: "pedro.vargas@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Karla",
      lastName: "Fernández",
      email: "karla.fernandez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Alejandro",
      lastName: "Pérez",
      email: "alejandro.perez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Mónica",
      lastName: "Rojas",
      email: "monica.rojas@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    },
    {
      name: "Lucas",
      lastName: "Gutiérrez",
      email: "lucas.gutierrez@example.com",
      createdAt: new Date("2023-03-25T15:23:45.135Z")
    }
  ]
}