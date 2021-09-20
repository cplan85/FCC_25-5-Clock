import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountdownAnimation = (key = 1, timer = 5, animate = true, children) => {
  return (
    <div>
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        onComplete={() => {
          //stopAnimate();
        }}
      >
        {/* {children} */}
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownAnimation;
