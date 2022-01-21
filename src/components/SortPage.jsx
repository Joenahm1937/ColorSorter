import React from "react";

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

const Video = () => {
  return (
    <video autoPlay muted loop className="object-cover">
      <source
        src="https://www.youtube.com/watch?v=JrYhY9n3FhQ&ab_channel=AnthonyLopresti"
        type="video/mp4"
      />
    </video>
  );
};

const SortPage = ({ bars, invalid }) => {
  return (
    <div className="w-full bg-white flex-1 flex justify-center">
      {invalid ? (
        <Alert />
      ) : bars.length ? (
        bars.map((bar, i) => (
          <Bar key={i} color={`rgb(${bar[0]},${bar[1]},${bar[2]})`} />
        ))
      ) : (
        <Video />
      )}
    </div>
  );
};

export default SortPage;

// .video-container {
//   height: 300px;
//   width: 300px;
//   position: relative;
// }

// .video-container video {
// width: 100%;
// height: 100%;
// position: absolute;
// object-fit: cover;
// z-index: 0;
// }

// /* Just styling the content of the div, the *magic* in the previous rules */
// .video-container .caption {
// z-index: 1;
// position: relative;
// text-align: center;
// color: #dc0000;
// padding: 10px;
// }
