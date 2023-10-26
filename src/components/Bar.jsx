import "./Bar.css";

const Bar = ({ percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: percentage < 60 && "red",
  };

  return (
    <div className="bar-wrapper">
      <div className="bar" style={barStyle}></div>
    </div>
  );
};

export default Bar;
