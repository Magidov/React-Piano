import KEYS from "./Keys";
import { Frequency } from "react-frequency";

const Piano = () => {
  const Notes = () => {
    <Frequency hz={KEYS.hz} type="center" gain={1} oscillator="sine" />;
  };

  return (
    <div className="container">
      {KEYS.map(({ key, type, hz }) => (
        <div key={key} className={`${key} ${type}`} onClick={() => Notes(hz)}>
          {key}
        </div>
      ))}
    </div>
  );
};

export default Piano;
