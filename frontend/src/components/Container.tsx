import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Container = () => {
  const [path, setPath] = useState('first');

  const allMovies = useFetch(`movies/${path}`);

  const renderByPage = (index: string) => {
    setPath(index);
  }

  return (
    <main className="page">

      <div className="bt-space">
        <nav>Show by lists of 10</nav>
        <button
          className="bt-pagination"
          onClick={() => renderByPage('first')}
        >
          page 1
        </button>

        <button
          className="bt-pagination"
          onClick={() => renderByPage('second')}
        >
          page 2
        </button>

        <button
          className="bt-pagination"
          onClick={() => renderByPage('third')}
        >
          page 3
        </button>

        <button
          className="bt-pagination"
          onClick={() => renderByPage('')}
        >
          show all
        </button>
      </div>

      {
        (allMovies.map((film: any, index) => {
         return (
           <section key={film.id} className="container">
             <img
              className="banner"
              src={ film.banner }
              alt={ film.banner }
            />
              <p className="title-card">{film.title}</p>
            </section>
          )
        }))
      }
    </main>
  );
}