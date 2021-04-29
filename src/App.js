import { Routes } from './routes';
import GlobalStyle from './styles/style'; 
import ProffysContextProvider from './contexts/useProffysContext';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProffysContextProvider>
        <Routes />
      </ProffysContextProvider>
    </div>
  );
}

export default App;
