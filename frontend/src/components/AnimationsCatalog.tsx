import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const AnimationsCatalog = () => {
  const [path, setPath] = useState('first');

  const allMovies = useFetch(`movies/${path}`);

  const renderByPage = (index: string) => {
    setPath(index);
  }

  return (
    <main>
      <nav className="bt-space">
        <h3>Show by lists of 10</h3>
        <button
          className="bt-pagination"
          onClick={() => renderByPage('first')}
        >
          Page 1
        </button>

        <button
          className="bt-pagination"
          onClick={() => renderByPage('second')}
        >
          Page 2
        </button>

        <button
          className="bt-pagination"
          onClick={() => renderByPage('third')}
        >
          Page 3
        </button>

        <button
          data-testid="show-all-btn"
          className="bt-pagination"
          onClick={() => renderByPage('')}
        >
          Show All
        </button>
      </nav>

      <div className="deck-box">
      {
        (allMovies.map((film: any, index) => {
         return (
           <section key={film.id} className="card">

             <img
              className="banner"
              src={ film.banner }
              alt={ film.banner }
             />
             <div className="intro">
               <h4 className="title-card">{film.title}</h4>
               <article className="card-description">{film.description}</article>
               <span className="bigshots">
               <article className="directors-producers">Director: <strong>{film.director}</strong> </article>
               <article className="directors-producers">Producer(s): <strong>{film.producers} </strong></article>
             </span>
             </div>
            </section>
          )
        }))
        }
      </div>
    </main>
  );
}