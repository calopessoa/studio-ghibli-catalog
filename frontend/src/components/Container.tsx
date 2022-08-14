import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ReactPaginate from 'react-paginate';
import { ContainerProps } from "../interfaces/ContainerProps";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems && currentItems.map((film: any) => (
        <p>{film.title}</p>
      ))}
    </>
  )
}

export const Container= ({ itemsPerPage }: ContainerProps) => {
  // const [page, setPage] = useState(1);
  const movies = useFetch('movies');
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
 


  useEffect(() => {
    const endOffSet = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffSet}`);
    setCurrentItems(movies.slice(itemOffset, endOffSet));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event: any) => {
    const newOfSet = event.selected * itemsPerPage % movies.length;
    setItemOffset(newOfSet);
  }

  return (
    <>
      <Items
        currentItems={currentItems}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )

  // const elementsPerPage = 10;
  // const totalElements = movies.length;
  // const numberOfPages = Math.ceil(totalElements / elementsPerPage);

  // return (
  //   <main className="page">
  //     <>
  //       <button>Next page</button>
  //       <button>Previous page</button>
  //     </>

  //     {/* {
  //       (movies.map((film: any, index) => {
  //         while (index < 10)
  //        { return (
  //           <section className="container">
  //            <img
  //             className="banner"
  //             src={ film.banner }
  //             alt={ film.banner }
  //           />
  //             <p key={film.id} className="title-card">{film.title}</p>
  //           </section>
  //         )
  //         }
  //         return '';
  //       }))
  //     } */}
  //   </main>
  // );
}