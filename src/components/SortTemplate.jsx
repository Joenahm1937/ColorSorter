import { useState, useEffect } from "react";
import SortPage from "../components/SortPage";
import { trupleGenerator } from "../helpers/algorithms";
import Fields from "./Fields";

const SortTemplate = ({ algo }) => {
  const maxBars = 200;
  const [sortReady, setSortReady] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [numBars, setNumBars] = useState();
  const [criteria, setCriteria] = useState();
  const [speed, setSpeed] = useState();
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [bars, setBars] = useState([]);
  const [index, setIndex] = useState({ i: 0, j: 0 });

  useEffect(() => {
    if (end) {
      return;
    }
    if (numBars && !play && !end) {
      setBars(trupleGenerator(numBars));
    }
    if (play) {
      if (index.i === numBars - 1) {
        console.log("sorted");
        setEnd(true);
      } else {
        const timer = setInterval(() => {
          var copy = [...bars];
          setBars(copy);
          if (index.j === numBars - index.i - 1) {
            setIndex({ i: index.i + 1, j: 0 });
          } else {
            if (copy[index.j][0] > copy[index.j + 1][0]) {
              var temp = copy[index.j];
              copy[index.j] = copy[index.j + 1];
              copy[index.j + 1] = temp;
            }
            setIndex({ i: index.i, j: index.j + 1 });
          }
        }, 100);
        return () => clearInterval(timer);
      }
    }
  }, [play, numBars, index]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
      <h1 className="font-black flex justify-center items-center">
        <div className="pr-6 text-7xl uppercase ">{`${algo} Sort`}</div>
        <Fields
          sortReady={sortReady}
          setSortReady={setSortReady}
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
