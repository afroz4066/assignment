import React from "react";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
const News = () => {
  return (
    <>
      <h1 className="text-4xl md:text-4xl font-bold md:ml-20 text-black text-center p-2">
        Social Media Posts
      </h1>
      <hr />
      <div className="flex justify-center gap-10 flex-col md:flex-row">
        <div
          style={{
            border: "1px solid grey",
            padding: "10px",
            display: "inline-block",
            borderRadius: 10,
          }}
        >
          <img
            src={twitter}
            alt="twitter image"
            style={{ height: 400, width: 500 }}
          />
        </div>
        <div
          style={{
            border: "1px solid grey",
            padding: "10px",
            display: "inline-block",
            borderRadius: 10,
          }}
        >
          <img
            src={facebook}
            alt="twitter image"
            style={{
              height: 400,
              width: 450,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default News;
