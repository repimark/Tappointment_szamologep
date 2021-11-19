import React from "react";
import { FormControl, Container } from "react-bootstrap";

const ResultBar = ({ result }) => {
  return (
    <>
        <Container style={{padding: '0px'}}>
            <FormControl type="text" className="form-control" value={result} size="lg"></FormControl>
        </Container>
    </>
  );
};

export default ResultBar;
