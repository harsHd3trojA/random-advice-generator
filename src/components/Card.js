import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice"); // replace with your API endpoint
      const result = await response.json();
      console.log("res--", result.slip.advice);
      setData(result.slip.advice);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAdvice = () => {
    fetchData();
  };
  return (
    <div className="flex justify-center items-center h-screen max-md:px-4">
      <div className="container max-w-[768px] bg-gray-100 rounded-xl pt-20 pb-10 shadow-lg">
        <div className=" flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-medium text-center">{data}</h1>
          <button
            onClick={getAdvice}
            className="bg-white py-2 px-8 text-blue-500 ring-1 ring-blue-500 rounded-full mt-16"
          >
            Give Me Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
