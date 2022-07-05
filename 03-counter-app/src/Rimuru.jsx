const Rimuru = {
  nombre: "Rimuru",
  apellido: "Tempest",
};

const getSaludo = () => {
  return `Hola ${Rimuru.nombre} ${Rimuru.apellido}, bienvenido!`;
};

const RimuruFunction = () => {
  return (
    <>
      <h1>Rimuru</h1>
      <h2> {Rimuru.apellido} </h2>
      <h3> {getSaludo()} </h3>
      <code>{JSON.stringify(Rimuru)}</code>
    </>
  );
};

export default RimuruFunction;
