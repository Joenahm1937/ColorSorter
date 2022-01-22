import { useState, useEffect } from "react";
import SortPage from "../components/SortPage";
import { trupleGenerator } from "../helpers/algorithms";
import Fields from "./Fields";

const SortTemplate = ({ algo }) => {
  const maxBars = 200;
  const [invalid, setInvalid] = useState(false);
  const [numBars, setNumBars] = useState();
  const [criteria, setCriteria] = useState();
  const [speed, setSpeed] = useState();
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [bars, setBars] = useState([]);
  const [index, setIndex] = useState({ i: 0, j: 0 });

  var colorsMap = { Red: 0, Green: 1, Blue: 2, Height: 3 };
  var speedsMap = { slow: 1000, mild: 500, fast: 50, vfast: 20, extreme: 5 };

  useEffect(() => {
    if (end) {
      return;
    }
    if (numBars && !play && !end) {
      setBars(trupleGenerator(numBars));
    }
    if (play) {
      if (index.i === numBars - 1) {
        setEnd(true);
      } else {
        const timer = setInterval(() => {
          var copy = [...bars];
          setBars(copy);
          if (index.j === numBars - index.i - 1) {
            setIndex({ i: index.i + 1, j: 0 });
          } else {
            if (
              copy[index.j][colorsMap[criteria]] >
              copy[index.j + 1][colorsMap[criteria]]
            ) {
              var temp = copy[index.j];
              copy[index.j] = copy[index.j + 1];
              copy[index.j + 1] = temp;
            }
            setIndex({ i: index.i, j: index.j + 1 });
          }
        }, speedsMap[speed]);
        return () => clearInterval(timer);
      }
    }
  }, [play, numBars, index]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
      <h1 className="font-black flex justify-center items-center">
        <div className="pr-6 text-7xl uppercase ">{`${algo} Sort`}</div>
        {!end ? (
          <Fields
            numBars={numBars}
            maxBars={maxBars}
            setNumBars={setNumBars}
            setInvalid={setInvalid}
            play={play}
            setPlay={setPlay}
            criteria={criteria}
            setCriteria={setCriteria}
            speed={speed}
            setSpeed={setSpeed}
          />
        ) : (
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              setBars([]);
              setNumBars(null);
              setPlay(false);
              setEnd(false);
              setSpeed(null);
              setCriteria(null);
              setIndex({ i: 0, j: 0 });
            }}
          >
            Restart
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        )}
      </h1>
      <SortPage invalid={invalid} bars={bars} />
      <div className="h-1/3 font-black flex justify-center items-center">
        <div className="pr-6 bg-yellow-200 m-3">Video Here</div>
        <div className="pr-6 bg-yellow-200 m-3">Description Here</div>
      </div>
    </div>
  );
};

export default SortTemplate;
