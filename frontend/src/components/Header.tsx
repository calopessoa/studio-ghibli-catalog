// import { usePage, Page } from '../contexts/Page';

export const Header: React.FC = () => {
  // const { page, setPage } = usePage();

  // const activeButton = (flashButton: Page) => {
  //   return (
  //     <button
  //       className={flashButton === page ? 'active' : ''}
  //       onClick={() => setPage(flashButton)}
  //     >
  //       {flashButton}
  //     </button>
  //   )
  // }

  return (
    <header>
    <h1>
      <div className="title">Studio Ghibli Animation Films Catalog</div>
    </h1>
    {/* <h3>
      <div className='title'>sort by</div>
    </h3>
      <div className='navigation'>
        <div className='internal'>
          {activeButton(Page.All)}
          {activeButton(Page.Directors)}
        </div>
    </div> */}
  </header>
  )
}
