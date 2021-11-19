import React from "react";
import { Button } from "react-bootstrap";

const ButtonsBlock = ({ numberFunction, countFunction, apiFunction }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <Button
            variant="outline-info"
            name="1"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            1{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="2"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            2{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="3"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            3
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-dark"
            name="+"
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            +{" "}
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            variant="outline-info"
            name="4"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            4{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="5"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            5{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="6"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            6{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-dark"
            name="-"
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            -{" "}
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            variant="outline-info"
            name="7"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            7{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="8"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            8{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="9"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {""}
            9{""}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-dark"
            name="*"
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            *{" "}
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            variant="outline-warning"
            name="."
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            .{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-info"
            name="0"
            onClick={(e) => numberFunction(e.target)}
            size="lg"
          >
            {" "}
            0{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-danger"
            name="c"
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            C{" "}
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-dark"
            name="/"
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            /{" "}
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            variant="outline-info"
            name="save"
            onClick={(e) => apiFunction(e.target)}
            size="sm"
          >
            Mentés memóriába
          </Button>
        </div>
        <div className="col"></div>
        <div className="col">
          <Button
            variant="outline-info"
            name="load"
            onClick={(e) => apiFunction(e.target)}
            size="sm"
          >
            Betöltés memóriából
          </Button>
        </div>
        <div className="col">
          <Button
            variant="outline-success"
            name="="
            onClick={(e) => countFunction(e.target)}
            size="lg"
          >
            {" "}
            ={" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default ButtonsBlock;
