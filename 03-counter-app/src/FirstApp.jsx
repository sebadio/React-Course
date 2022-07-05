import PropTypes from "prop-types";

function App({ title }) {
  return <h1> {title} </h1>;
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
