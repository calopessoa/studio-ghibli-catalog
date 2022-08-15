import { AnimationsCatalog } from './components/AnimationsCatalog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="main-container">
     <Header />
      <AnimationsCatalog />
      <Footer />
    </div>
  );
}

export default App;

// TO DO
// *** = in progress
// ***** = completed

// ***** paginacao 10 em 10 NO BACKEND
// End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dados.

// documentaçao

// *** estilização (expansao de cards menores em maiores com detalhes)

// ----------------------------------------------------------------------------

// O seu front-end deverá ser feito em React e irá conter:

// Tela com a exibição dos filmes consultado de forma paginada ao back-end da aplicação;

// Botão de atualizar que acessará o end-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados;