import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';
import FormEditor from './components/FormEditor/FormEditor';
import { ItemsContextProvider } from './provider/ItemsProvider';

import './App.scss';

function App() {
  return (
    <ItemsContextProvider>
      <div className='App'>
        <header>
          <Header />
        </header>
        <section className='section-container'>
          <div className='fields-list'>
            <ItemsList />
          </div>
          <div className='form-editor'>
            <FormEditor />
          </div>
        </section>
      </div>
    </ItemsContextProvider>
  );
}

export default App;
