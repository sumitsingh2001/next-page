import './App.css';
import Layout from './Pages/Layout';
import AppProvider from './context';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Layout />
      </AppProvider>
    </div>
  );
}

export default App;
