interface SeedProduct {
    name: string
    price: number,
    quantity: string
    user: string[],
    createdAt: Date,
    updatedAt: Date
}

interface ProductData {
    products: SeedProduct[];
}

export const SEED_PRODUCT: ProductData =  {
    products: [
        {
            name: "Coca-Cola",
            price: 2,
            quantity: "500ml",
            user: null,
            createdAt: new Date("2023-03-24T18:23:45.135Z"),
            updatedAt: null
        },
        {
            name: "Pepsi",
            price: 2.2,
            quantity: "500ml",
            user: null,
            createdAt: new Date("2023-03-24T18:24:30.522Z"),
            updatedAt: null
        },
        {
            name: "Fanta",
            price: 2.1,
            quantity: "500ml",
            user: null,
            createdAt: new Date("2023-03-24T18:25:10.981Z"),
            updatedAt: null
        },
        {
            name: "Leche",
            price: 2.5,
            quantity: "1 Litro",
            user: null,
            createdAt: new Date("2023-03-24T18:25:45.319Z"),
            updatedAt: null
        },
        {
            name: "Arroz",
            price: 1.8,
            quantity: "1 kg",
            user: null,
            createdAt: new Date("2023-03-24T18:26:10.424Z"),
            updatedAt: null
        },
        {
            name: "Azúcar",
            price: 1.2,
            quantity: "1 kg",
            user: null,
            createdAt: new Date("2023-03-24T18:26:45.981Z"),
            updatedAt: null
        },
        {
            name: "Café",
            price: 4.5,
            quantity: "250g",
            user: null,
            createdAt: new Date("2023-03-24T18:27:30.983Z"),
            updatedAt: null
        },
        {
            name: "Aceite de Oliva",
            price: 8.7,
            quantity: "1 Litro",
            user: null,
            createdAt: new Date("2023-03-24T18:28:15.423Z"),
            updatedAt: null
        },
        {
            name: "Pasta",
            price: 1.5,
            quantity: "500g",
            user: null,
            createdAt: new Date("2023-03-24T18:28:52.752Z"),
            updatedAt: null
        },
        {
            name: "Atún enlatado",
            price: 2.3,
            quantity: "300g",
            user: null,
            createdAt: new Date("2023-03-24T18:29:30.422Z"),
            updatedAt: null
        },
        {
            name: "iPhone 13 Pro Max",
            price: 1099,
            quantity: "10 unidades",
            user: null,
            createdAt: new Date("2022-03-10T12:00:00.000Z"),
            updatedAt: null
        },
        {
            name: "Samsung Galaxy S21",
            price: 899,
            quantity: "7 unidades",
            user: null,
            createdAt: new Date("2022-03-11T15:30:00.000Z"),
            updatedAt: null
        },
        {
            name: "Sony WH-1000XM4",
            price: 349,
            quantity: "15 unidades",
            user: null,
            createdAt: new Date("2022-03-12T10:20:00.000Z"),
            updatedAt: null
        },
        {
            name: "PlayStation 5",
            price: 499,
            quantity: "5 unidades",
            user: null,
            createdAt: new Date("2022-03-13T14:40:00.000Z"),
            updatedAt: null
        },
        {
            name: "Nintendo Switch OLED",
            price: 349,
            quantity: "12 unidades",
            user: null,
            createdAt: new Date("2022-03-14T11:50:00.000Z"),
            updatedAt: null
        },
        {
            name: "MacBook Pro 16-inch",
            price: 2399,
            quantity: "4 unidades",
            user: null,
            createdAt: new Date("2022-03-15T09:15:00.000Z"),
            updatedAt: null
        },
        {
            name: "Canon EOS R5",
            price: 3899,
            quantity: "3 unidades",
            user: null,
            createdAt: new Date("2022-03-16T16:25:00.000Z"),
            updatedAt: null
        },
        {
            name: "LG CX OLED TV",
            price: 1999,
            quantity: "8 unidades",
            user: null,
            createdAt: new Date("2022-03-17T13:30:00.000Z"),
            updatedAt: null
        },
        {
            name: "Logitech G Pro X Mechanical Gaming Keyboard",
            price: 129,
            quantity: "20 unidades",
            user: null,
            createdAt: new Date("2022-03-18T11:10:00.000Z"),
            updatedAt: null
        },
        {
            name: "Bose QuietComfort Earbuds",
            price: 279,
            quantity: "18 unidades",
            user: null,
            createdAt: new Date("2022-03-19T14:20:00.000Z"),
            updatedAt: null
        }
    ]
        
}