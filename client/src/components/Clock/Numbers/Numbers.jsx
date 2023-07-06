import "./Numbers.css";

const Numbers = () => {

  let num = Array.from({ length: 12 }).map((_, index) => {
    index = index + 1;
    return index;
  });

  return (
    <div className="outer-clock-face">
      {num.map((index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              zIndex: `${index % 3 === 0 ? 1 : 0}`,
              left: `${
                index % 3 === 0 ? "calc(50% - 2.5px)" : "calc(50% - 1.5px)"
              }`,
              bottom: "50%",
              transformOrigin: "bottom center",
              backgroundColor: `${index % 3 === 0 ? "#000000" : "#808080"}`,
              width: `${index % 3 === 0 ? 5 : 3}px`,
              // height: `${index % 3 === 0 ? 12 : 10}%`,
              height: `95%`,
              transform: `rotate(${(index / 12) * 360}deg)`,
            }}
          ></div>
        );
      })}

      {/* <div id="radius"></div> */}
      <div className="inner-clock-face-big"></div>
      <div className="inner-clock-face-small"></div>
    </div>
  );
};

export default Numbers;
