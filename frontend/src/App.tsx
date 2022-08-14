import { Container } from './components/Container';
import { Header } from './components/Header';
// import { Page, usePage } from './contexts/Page';

function App() {
  // const { page } = usePage();

  // const renderSwitch = () => {
  //   switch (page) {
  //     case Page.All:
  //       return <div className='sub-title'>All Studio Ghibli films made so far</div>;
  //     case Page.Directors:
  //       return <div className='sub-title'>Your films listed by directors</div>;
  //     default:
  //       return '';
  //   }
  // }
  return (
    <div className="App">
     <Header />
      {/* {renderSwitch()} */}
      <Container />
    </div>
  );
}

export default App;

// TO DO
// ***** = completed

// ***** paginacao 10 em 10 NO BACKEND
// End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dados.

// documentaçao

// estilização (expansao de cards menores em maiores com detalhes)

// ----------------------------------------------------------------------------

// O seu front-end deverá ser feito em React e irá conter:

// Tela com a exibição dos filmes consultado de forma paginada ao back-end da aplicação;

// Botão de atualizar que acessará o end-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados;