import "./App.css";
import { useState } from "react";
import ResultBar from "./Components/ResultBar";
import axios from "axios";
import ButtonsBlock from "./Components/ButtonsBlock";
import { Navbar, Container } from "react-bootstrap";

function App() {
  const [result, setResult] = useState("");
  const [count, setCount] = useState({ firstNumber: "", muvelet: "" });

  const apiEventHandler = (e) => {
    if (e.value === "load") {
      const headers = {
        "Access-Control-Allow-Origin": "*",
      };
      axios
        .get("http://localhost:5500/number", { mode: "cors" })
        .then((resp) => setResult(resp.data.number));
    } else {
      axios
        .post(
          "http://localhost:5500/number",
          { number: result },
          { mode: "cors" }
        )
        .then((resp) => alert(resp.message));
    }
  };

  const numberEventHandler = (e) => {
    setResult(`${result}${e.value}`);
  };
  const countEventHandler = (e) => {
    if (e.value === "=") {
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
      setCount({ firstNumber: result, muvelet: e.value });
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
            width: "50%",
            
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
