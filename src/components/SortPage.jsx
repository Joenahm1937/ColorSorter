const Alert = () => {
  return (
    <>
      <div className="w-full bg-red-600 flex-1 flex justify-center items-center m-20 text-4xl font-black">
        Please enter a valid number between 0 and 50
      </div>
    </>
  );
};

const Bar = ({ color }) => {
  return (
    <div
      className="h-100 flex-1 mx-0.5 mt-3"
      style={{ backgroundColor: color }}
    ></div>
  );
};

const SortPage = ({ bars, invalid }) => {
  return (
    <div className="w-full bg-white flex-1 flex justify-center">
      {invalid ? (
        <Alert />
      ) : (
        bars.map((bar, i) => (
          <Bar key={i} color={`rgb(${bar[0]},${bar[1]},${bar[2]})`} />
        ))
      )}
    </div>
  );
};

export default SortPage;
