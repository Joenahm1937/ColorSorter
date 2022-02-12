import { useState, useEffect } from "react";
import SortPage from "../components/SortPage";
import {
  trupleGenerator,
  mergeAnimate,
  quickAnimate,
} from "../helpers/algorithms";
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
  const [animations, setAnimations] = useState();

  var colorsMap = { Red: 0, Green: 1, Blue: 2, Height: 3 };
  var speedsMap = { slow: 1000, mild: 500, fast: 50, vfast: 20, extreme: 5 };

  useEffect(() => {
    if (end) {
      return;
    }
    if (numBars && !bars.length && !play && !end && !index.j) {
      setBars(trupleGenerator(numBars));
    }
    if (algo === "bubble") {
      if (play) {
        if (index.i === numBars - 1) {
          setEnd(true);
        } else {
          const timer = setInterval(() => {
            var copy = [...bars];
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
                setBars(copy);
              }
              setIndex({ i: index.i, j: index.j + 1 });
            }
          }, speedsMap[speed]);
          return () => clearInterval(timer);
        }
      }
    } else if (algo === "merge") {
      if (bars.length && !speed) {
        setAnimations(mergeAnimate([...bars], colorsMap[criteria]));
      }
      if (play) {
        if (index.i === animations.length) {
          setEnd(true);
        } else {
          const timer = setInterval(() => {
            var copy = [...bars];
            copy[animations[index.i][0]] = animations[index.i][1];
            setBars(copy);
            setIndex({ i: index.i + 1, j: 0 });
          }, speedsMap[speed]);
          return () => clearInterval(timer);
        }
      }
    } else if (algo === "quick") {
      if (bars.length && !speed) {
        setAnimations(quickAnimate([...bars], colorsMap[criteria]));
      }
      if (play) {
        if (index.i >= animations.length) {
          setEnd(true);
        } else {
          const timer = setInterval(() => {
            var copy = [...bars];
            copy[animations[index.i][0]] = animations[index.i][1];
            copy[animations[index.i + 1][0]] = animations[index.i + 1][1];
            setBars(copy);
            setIndex({ i: index.i + 2, j: 0 });
          }, speedsMap[speed]);
          return () => clearInterval(timer);
        }
      }
    }
  }, [play, numBars, index, criteria]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
      <h1 className="font-black flex justify-center items-center">
        <div className="pr-6 text-7xl uppercase ">{`${algo} Sort`}</div>
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
          end={end}
          setBars={setBars}
          setEnd={setEnd}
          setIndex={setIndex}
        />
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
