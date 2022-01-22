const StartIcon = ({ play, setPlay }) => (
  <svg
    className="w-12 h-12 bg-blue-400 rounded-full cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => setPlay(!play)}
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

const FastIcon = ({ setSpeed }) => (
  <svg
    className="w-12 h-12 bg-red-400 rounded-full cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => {
      setSpeed(document.getElementById("speeds").value);
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
    />
  </svg>
);

const ColorIcon = ({ setCriteria }) => (
  <svg
    className="w-12 h-12 bg-green-400 rounded-half cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => {
      setCriteria(document.getElementById("colors").value);
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

const AddIcon = ({ setInvalid, setNumBars, maxBars }) => (
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
        setNumBars(parseInt(num));
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

const Fields = ({
  numBars,
  maxBars,
  setNumBars,
  setInvalid,
  play,
  setPlay,
  criteria,
  setCriteria,
  speed,
  setSpeed,
}) => {
  return (
    <div className="flex flex-row w-80">
      <div className="flex flex-col m-4">
        <label>
          {!numBars
            ? "Enter Number of bars:"
            : !criteria
            ? "Enter Sorting Criteria"
            : !speed
            ? "Enter speed"
            : "Start Sorting"}
        </label>
        {!numBars ? (
          <input
            type="text"
            id="numBars"
            name="numBars"
            placeholder={`Max: ${maxBars}`}
          />
        ) : !criteria ? (
          <select id="colors" name="colors">
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Height">Height</option>
          </select>
        ) : !speed ? (
          <select id="speeds" name="speeds">
            <option value="slow">Slow</option>
            <option value="mild">Mild</option>
            <option value="fast">Fast</option>
            <option value="vfast">Very Fast</option>
            <option value="extreme">Extreme</option>
          </select>
        ) : (
          <svg
            className="w-6 h-6 self-center"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </div>
      <div className="w-20 h-20 flex items-center">
        {!numBars ? (
          <AddIcon
            setNumBars={setNumBars}
            maxBars={maxBars}
            setInvalid={setInvalid}
            setPlay={setPlay}
          />
        ) : !criteria ? (
          <ColorIcon setCriteria={setCriteria} />
        ) : !speed ? (
          <FastIcon setSpeed={setSpeed} />
        ) : (
          <StartIcon play={play} setPlay={setPlay} />
        )}
      </div>
    </div>
  );
};

export default Fields;
