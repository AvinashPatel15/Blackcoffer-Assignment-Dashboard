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
    <div className="flex flex-col gap-2 items-center p-4 rounded-[10px] h-full justify-center bg-[#eef3ee] shadow-md">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-xl font-semibold text-[#518554]">Clock & Date</div>
        <div
          className="text-2xl font-semibold border border-[green] text-[#518554] px-3 py-2 rounded-[10px] "
          dangerouslySetInnerHTML={{ __html: formattedTime }}
        />
      </div>
      <div className="text-gray-600 font-semibold text-lg">{formattedDate}</div>
    </div>
  );
};

export default MiniClock;
