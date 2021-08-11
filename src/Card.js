import React from "react";

const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5'>
      <img alt="foto" src="https://robohash.org/test?200x200" />
      <div>
        <h1> Jane Doe </h1> <p> jane @example.com </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Card;
