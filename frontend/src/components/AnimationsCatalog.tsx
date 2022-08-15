import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const AnimationsCatalog = () => {
  const [path, setPath] = useState('first');

  const allMovies = useFetch(`movies/${path}`);

  const renderByPage = (index: string) => {
    setPath(index);
  }

  const formatDescription = (text) => {
    const arrText = text.split('').slice(0, 60);
    const newText = arrText.join('') + '...';
    return newText;
  }

  return (
    <main>
      <nav className="bt-space">
        <h3>Show by lists of 10</h3>
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
      </nav>

      <div className="deck-box">
      {
        (allMovies.map((film: any, index) => {
         return (
           <section key={film.id} className="card">
             <span>
               <p>Director{film.director}</p>
               <p>Producer{film.producer}</p>
             </span>

             <img
              className="banner"
              src={ film.banner }
              alt={ film.banner }
            />
             <h4 className="title-card">{film.title}</h4>

             <article className="card-description">{formatDescription(film.description)}</article>
            </section>
          )
        }))
        }
      </div>
    </main>
  );
}