import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getQuotes = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setState({
      ...state,
      data: data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getQuotes();
  }, [url]);

  return state;
};
