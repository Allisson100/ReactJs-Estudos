import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react'
import Button from './components/Button';
import Label from './components/Label';


function App() {

  let [text, setText] = useState('Click Me!!')

  function changeText() {
    if (text === 'Click Me!!') {

      setText('Clicado')
    } else {
      setText('Click Me!!')
    }
  }

  useEffect(() => {

    return () => {

      console.log('Saiu da página');
    }
  }, [text])

  const resultado = useMemo(() => {
    console.log("hehehe");
    return 14451451619841981 * 1651564165156156165
  }, [])

  const func = useCallback(() => {
    
  },[])

  return (

    <div className="App">
      <Label text={resultado}/>
      <Button onClick={changeText}>{text}</Button>
    </div>    
  );
}

export default App;
