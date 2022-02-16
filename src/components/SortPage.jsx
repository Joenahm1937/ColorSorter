const Alert = () => {
  return (
    <>
      <div className="w-full bg-red-600 flex-1 flex justify-center items-center m-20 text-4xl font-black">
        Please enter a valid number between 0 and 50
      </div>
    </>
  );
};

const Bar = ({ color, height, bar }) => {
  const shadow = 1;
  return (
    <div
      className="flex-1 mx-0.5 mt-3"
      style={{
        backgroundColor: color,
        height: `${height}%`,
        boxShadow: `
        1px -1px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.1}), \
        2px -2px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.2}), \
        3px -3px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.3}), \
        4px -4px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.4}), \
        5px -5px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.5}), \
        6px -6px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.6}), \
        7px -7px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.7}), \
        8px -8px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.8}), \
        9px -9px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 0.9}), \
        10px -10px 0px rgb(${bar[0]},${bar[1]},${bar[2]}, ${shadow - 1})`,
        margin: "6px",
        // border: "solid",
      }}
    ></div>
  );
};

const SortPage = ({ bars, invalid }) => {
  return (
    <div className="w-full bg-white flex-1 flex justify-center items-end">
      {invalid ? (
        <Alert />
      ) : (
        bars.map((bar, i) => (
          <Bar
            bar={bar}
            key={i}
            color={`rgb(${bar[0]},${bar[1]},${bar[2]})`}
            height={bar[3]}
          />
        ))
      )}
    </div>
  );
};

export default SortPage;
