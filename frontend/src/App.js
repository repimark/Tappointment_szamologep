import "./App.css";
import { useState } from "react";
import ResultBar from "./Components/ResultBar";
import axios from "axios";
import ButtonsBlock from "./Components/ButtonsBlock";
import { Navbar, Container } from "react-bootstrap";

function App() {
  const [result, setResult] = useState("");
  const [count, setCount] = useState({ firstNumber: "", muvelet: "" });

  /**
   * 
   * @param {Button} e A mentés és kiolvasás gombok műveleteit valósítja meg.
   */
  const apiEventHandler = async (e) => {
    if (e.name === "load") {
      const getResp = await axios.get("http://localhost:5500/number", {
        mode: "cors",
      });
      setResult(getResp.data.number);
    } else {
      const postResp = await axios.post(
        "http://localhost:5500/number",
        { number: result },
        { mode: "cors" }
      );
      alert(postResp.data.message);
    }
  };

  /**
   * 
   * @param {Button} e Műveletek gomb működése.  
   */
  const numberEventHandler = (e) => {
    console.log(e.name);
    setResult(`${result}${e.name}`);
  };

  /**
   * 
   * @param {Button} e Szám gombok működése.  
   */
  const countEventHandler = (e) => {
    if (e.name === "=") {
      switch (count.muvelet) {
        case "+":
          let plusResult = parseFloat(count.firstNumber) + parseFloat(result);
          setResult(plusResult);
          return;
        case "-":
          let minusResult = parseFloat(count.firstNumber) - parseFloat(result);
          setResult(minusResult);
          return;
        case "*":
          let multipleResult =
            parseFloat(count.firstNumber) * parseFloat(result);
          setResult(multipleResult);
          return;
        case "/":
          let divideResult = parseFloat(count.firstNumber) / parseFloat(result);
          setResult(divideResult);
          return;
        case "c":
          setResult("");
          return;
        default:
          return null;
      }
    } else {
      setCount({ firstNumber: result, muvelet: e.name });
      setResult("");
    }
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Számológép Feladat</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <div
          style={{
            width: "50%",
            margin: "auto",
            paddingTop: "20px",
            backgroundColor: "#f1f2f6",
            padding: "10px",
          }}
        >
          <ResultBar result={result}></ResultBar>
          <ButtonsBlock
            numberFunction={numberEventHandler}
            countFunction={countEventHandler}
            apiFunction={apiEventHandler}
          ></ButtonsBlock>
        </div>
      </Container>
    </div>
  );
}

export default App;
