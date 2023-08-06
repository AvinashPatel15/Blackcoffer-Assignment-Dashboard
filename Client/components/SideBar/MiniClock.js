import React, { useState, useEffect } from "react";

const MiniClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="flex flex-col items-center p-4 border rounded-[15px] shadow-sm">
      <div
        className="text-2xl font-semibold"
        dangerouslySetInnerHTML={{ __html: formattedTime }}
      />
      <div className="mt-2">{formattedDate}</div>
    </div>
  );
};

export default MiniClock;
