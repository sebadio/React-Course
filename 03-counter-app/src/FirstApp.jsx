import PropTypes from "prop-types";

function App({ title, subTitle }) {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <h2> {subTitle} </h2>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay sub-titulo",
};

export default App;
