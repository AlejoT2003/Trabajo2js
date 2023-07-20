const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const idpares = pizzas.filter((pizzas) =>{
  return pizzas.id % 2 === 0;
})
console.log(idpares)
idpares.forEach((pizzas) =>{
  const { nombre } = pizzas;
  console.log(`La ${nombre} tiene id par`);
})
pizzas.forEach((pizzas) =>{
  console.log(`La ${pizzas.nombre} tiene un valor de ${pizzas.precio}`)
})
const preciomenorA = (precio) => {
  return pizzas.some((pizzas) =>{
    return pizzas.precio < precio
  })
  ? console.log(`Hay pizzas con un precio menor a ${precio}`)
  : console.log(`No hay pizzas con un precio menor a ${precio}`);
}
preciomenorA(600)
pizzas.forEach((pizzas) => {
  console.log(`La ${pizzas.nombre} tiene ${pizzas.ingredientes}`)
})