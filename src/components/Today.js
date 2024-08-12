import React from "react";

function Today() {
  const handleOnClick = () => {
    console.log("pressed");
  };

  return (
    <div className="Today">
      <button onClick={handleOnClick}>Button 1</button>
    </div>
  );
}

export default Today;
