import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
     работает
    
    </div>
  );
}

export default App;
