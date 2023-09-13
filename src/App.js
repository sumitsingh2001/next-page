import './App.css';
import Layout from './Pages/Layout';
import Practice from './components/practices';
import ReduxPrComp from './components/practices/red';
import AppProvider from './context';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Layout />
      </AppProvider>
      {/* <Practice /> */}
    </div>
  );
}

export default App;
