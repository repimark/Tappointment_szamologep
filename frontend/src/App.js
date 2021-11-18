import './App.css';
import { useState } from 'react';
import ResultBar from './Components/ResultBar';
import axios from 'axios';

function App() {
  const [result, setResult] = useState("");
  const [count, setCount] = useState({ 'firstNumber' : "", 'muvelet': "" })
  
  const apiEventHandler = (e) => {
      if(e.value === "load"){
        const headers = {
          'Access-Control-Allow-Origin': '*'
        }
        //axios.get('http://localhost:5500/number', {headers: headers, mode: 'cors'}).then(resp => console.log(resp));
        const response = fetch('http://localhost:5500/number', {mode: 'cors'});
        
        console.log(response.body)
      }else{
        axios.post('')
      }
  }

  const numberEventHandler = (e) => {
    setResult(`${result}${e.value}`)
  }
  const countEventHandler = (e) => {
    if(e.value === "="){
      switch (count.muvelet){
        case '+':
          let plusResult = parseFloat(count.firstNumber)+parseFloat(result)
          setResult(plusResult)
          return ;
        case '-':
          let minusResult = parseFloat(count.firstNumber)-parseFloat(result)
          setResult(minusResult)
          return ;
        case '*': 
        let multipleResult = parseFloat(count.firstNumber)*parseFloat(result)
          setResult(multipleResult)
          return ;
        case '/': 
        let divideResult = parseFloat(count.firstNumber)/parseFloat(result)
          setResult(divideResult)
          return ;
        case 'c':
          setResult("")
          return;
        default:
          return null; 
      }

    }else{
    setCount({'firstNumber': result, 'muvelet': e.value })
    setResult("")
    }
  }
  return (
    <div className="App">
      <ResultBar result={result}></ResultBar>
      <div className="row">
        <div className="col">
        <button className="btn btn-primary" value="1" onClick={e => numberEventHandler(e.target)}> 1 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="2" onClick={e => numberEventHandler(e.target)}> 2 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="3" onClick={e => numberEventHandler(e.target)}>3</button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="+" onClick={e => countEventHandler(e.target)}> + </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" value="4" onClick={e => numberEventHandler(e.target)}> 4 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="5" onClick={e => numberEventHandler(e.target)}> 5 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="6" onClick={e => numberEventHandler(e.target)}> 6 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="-" onClick={e => countEventHandler(e.target)}> - </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" value="7" onClick={e => numberEventHandler(e.target)}> 7 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="8" onClick={e => numberEventHandler(e.target)}> 8 </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="9" onClick={e => numberEventHandler(e.target)}> 9 </button> 
        </div>
        <div className="col">
        <button className="btn btn-primary" value="*" onClick={e => countEventHandler(e.target)}> * </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <button className="btn btn-primary" value="." onClick={e => numberEventHandler(e.target)}> . </button>  
        </div>
        <div className="col">
        <button className="btn btn-primary" value="0" onClick={e => numberEventHandler(e.target)}> 0 </button>
        </div>
        <div className="col">
        <button className="btn btn-primary" value="c" onClick={e => countEventHandler(e.target)}> C </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="=" onClick={e => countEventHandler(e.target)}> = </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <button className="btn btn-primary" value="save" onClick={e => apiEventHandler(e.target)}>Mentés memóriába</button>
        </div>
        <div className="col">
        <button className="btn btn-primary" value="load" onClick={e => apiEventHandler(e.target)}>Betöltés memóriából</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
