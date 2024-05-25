import './App.css';
const tg = window.Telegram.WebApp;

import Header from './components/header';

function App() {

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
     <Header />
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
