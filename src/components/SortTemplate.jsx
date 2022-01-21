import { useState } from "react";
import SortPage from "../components/SortPage";
import { trupleGenerator } from "../helpers/algorithms";

const StartIcon = () => (
  <svg
    className="w-12 h-12 bg-blue-400 rounded-full cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AddIcon = ({ setBars, setSortReady, maxBars, setInvalid }) => (
  <svg
    className="w-12 h-12 bg-red-400 rounded-full cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => {
      var num = document.getElementById("numBars").value;
      if (parseInt(num) && num >= 0 && num <= maxBars) {
        setInvalid(false);
        setBars(trupleGenerator(parseInt(num)));
        setSortReady(true);
      } else {
        setInvalid(true);
      }
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SortTemplate = ({ algo }) => {
  const maxBars = 100;
  const [bars, setBars] = useState([]);
  const [sortReady, setSortReady] = useState(false);
  const [invalid, setInvalid] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
      <h1 className="font-black flex justify-center items-center">
        <div className="pr-6 text-7xl uppercase ">{`${algo} Sort`}</div>
        <div className="flex flex-col m-4">
          <label>Enter Number of bars:</label>
          <input
            type="text"
            id="numBars"
            name="numBars"
            min="1"
            max="50"
            placeholder={`Max: ${maxBars}`}
          />
        </div>
        <div className="w-20 h-20 flex items-center">
          {sortReady ? (
            <StartIcon />
          ) : (
            <AddIcon
              setBars={setBars}
              setSortReady={setSortReady}
              maxBars={maxBars}
              setInvalid={setInvalid}
            />
          )}
        </div>
      </h1>
      <SortPage bars={bars} invalid={invalid} setInvalid={setInvalid} />
      <div className="h-1/3 font-black flex justify-center items-center">
        <div className="pr-6 bg-yellow-200 m-3">Video Here</div>
        <div className="pr-6 bg-yellow-200 m-3">Description Here</div>
      </div>
    </div>
  );
};

export default SortTemplate;
