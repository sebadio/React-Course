const persona = {
  nombre: "Rimuru",
  apellido: "Tempest",
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  edad: "2",
  direccion: {
    region: "Jura Tempest",
    ciudad: "Ciudad de Rimuru",
  },
  ocupacion: "Demon Lord",
  saludo: function () {
    return `Hola soy ${this.nombreCompleto()}!, no soy un slime malo!`;
  },
};

console.log(persona.saludo());
console.table(persona);

// Clonamos un objeto en vez de asignarlo de nuevo
const persona2 = { ...persona };
console.log(persona2);

// persona2 = persona ==/== persona2 ={...persona}
