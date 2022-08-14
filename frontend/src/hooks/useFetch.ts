import axios from "axios";
import { useState, useEffect } from "react";
import { Movies } from "../interfaces/MoviesOnProdEntities";
// import * as dotenv from "dotenv";
// dotenv.config();

export const useFetch = (path: string) => {
  const [films, setFilms] = useState<Movies[]>([]);
  const url = `http://localhost:3000/${path}`;

  useEffect(() => {
    const getAll = () => {
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          if (response.status === 200) setFilms([...data]);
        })
        .catch((error) => console.log(error));
    };
    getAll();
  }, [url]);
  console.log(films);

  return films;
};
