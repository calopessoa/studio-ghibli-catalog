import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';

function App() {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Titles:
        return <div>Your films listed by titles</div>;
      case Page.Directors:
        return <div>Your films listed by directors</div>;
      default:
        return '';
    }
  }
  return (
    <div className="App">
     <Header />
      {renderSwitch()}
    </div>
  );
}

export default App;
