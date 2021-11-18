import React from "react";

const ResultBar = ({ result }) => {
  return (
    <>
      <div className="">
        <input type="text" className="form-control" value={result} />
      </div>
    </>
  );
};

export default ResultBar;
