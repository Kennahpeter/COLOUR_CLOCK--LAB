
import { useState, useEffect } from "react";
import { format } from "date-fns";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const time = format(now, "hh:mm:ss a");          
  const date = format(now, "EEEE, MMMM do, yyyy");

  const hue = now.getSeconds() * 6;
  const color = `hsl(${hue}, 65%, 42%)`;

  return (
    <div className="clock" style={{ backgroundColor: color }}>
      <h2 className="time">{time}</h2>
      <p className="date">{date}</p>
    </div>
  );
}

export default Clock;
