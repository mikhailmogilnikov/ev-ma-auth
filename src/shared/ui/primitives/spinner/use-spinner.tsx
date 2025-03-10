import { spinnerTv } from "./classnames";
import { SpinnerProps } from "./spinner";

export const useSpinner = (props: SpinnerProps) => {
  const { className, color, segments = 10, ...spinnerProps } = props;

  const { base, item } = spinnerTv({ color });

  const segmentsArray = [...Array(segments).keys()];
  const deg = 360 / segmentsArray.length;
  const animationTime = 1.2 / segmentsArray.length;

  const buildSpinnerSegments = () => {
    return segmentsArray.map((segment) => {
      const rotation = (deg * segment).toString();
      const animationDelay = (1.2 - segment * animationTime).toString();

      return (
        <div
          key={segment}
          className={item()}
          style={{
            transform: `rotate(${rotation}deg) translateY(-120%)`,
            animationDelay: `-${animationDelay}s`,
          }}
        />
      );
    });
  };

  const buildSpinnerProps = () => {
    return {
      className: base({ className }),
      children: buildSpinnerSegments(),
      ...spinnerProps,
    };
  };

  return { buildSpinnerProps };
};
