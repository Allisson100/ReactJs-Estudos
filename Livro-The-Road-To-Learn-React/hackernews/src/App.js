import './App.css';

function App() {

  var nome = prompt('Qual seu nome?')
  var sobrenome = prompt('Qual seu sobrenome?')

  return (
  
    <div className="App">
      <h2>Olá {nome} {sobrenome}</h2> 
    </div>
  );
}

export default App;
