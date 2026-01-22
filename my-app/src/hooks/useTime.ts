import { useEffect, useState } from "react";

type TimeType = "day" | "hour";

const useTime = <T extends string>(type: TimeType): T => {
  const [time, setTime] = useState<T>("" as T);

  useEffect(() => {
    const now = new Date();

    if (type === "day") {
      const dayName = now.toLocaleDateString("en-US", {
        weekday: "long",
      });
      setTime(dayName as T);
    }

    if (type === "hour") {
      const hour = now.getHours().toString();
      setTime(hour as T);
    }
  }, [type]);

  return time;
};

export default useTime;
