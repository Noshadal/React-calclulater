import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function handleClear() {
    setInput('');
    setResult(null);
  }

  function handleEvaluate() {

      setResult(eval(input)); 
      setInput(''); 
    }
  

  return (
    <>

    <div className='display'>
      <h1>{result !== null ? result : input}</h1>
      <div className='main'>
        <button className='btn' onClick={() => handleClick('1')}>1</button>
        <button className='btn' onClick={() => handleClick('2')}>2</button>
        <button className='btn' onClick={() => handleClick('3')}>3</button>
        <button className='btn new' onClick={() => handleClick('+')}>+</button>
        <button className='btn' onClick={() => handleClick('4')}>4</button>
        <button className='btn' onClick={() => handleClick('5')}>5</button>
        <button className='btn' onClick={() => handleClick('6')}>6</button>
        <button className='btn new' onClick={() => handleClick('-')}>-</button>
        <button className='btn' onClick={() => handleClick('7')}>7</button>
        <button className='btn' onClick={() => handleClick('8')}>8</button>
        <button className='btn' onClick={() => handleClick('9')}>9</button>
        <button className='btn new' onClick={handleEvaluate}>=</button>
        <button className='btn' onClick={() => handleClick('0')}>0</button>
        <button className='btn new' onClick={() => handleClick('*')}>*</button>
        <button className='btn new' onClick={() => handleClick('/')}>/</button>
        <button className='btn new' onClick={handleClear}>del</button>
      </div>
    </div>
    </>
  );
}

export default App;
