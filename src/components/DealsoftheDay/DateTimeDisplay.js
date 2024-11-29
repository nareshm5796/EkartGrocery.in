import React, { useState, useEffect } from "react";
import './DateTimeDisplay.css'
const DateTimeDisplay = () => {
        const [time, setTime] = useState({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      
        useEffect(() => {
          const updateTime = () => {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const difference = now - startOfYear; // Difference in milliseconds
      
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
      
            setTime({ days, hours, minutes, seconds });
          };
      
          updateTime(); // Initial update
          const interval = setInterval(updateTime, 1000); // Update every second
      
          return () => clearInterval(interval); // Cleanup
        }, []);
        return(<div className="Date-card">
                  <div className="card-item">
                    <span>{time.days}</span>
                    <p>Days</p>
                  </div>
                  <div className="card-item">
                    <span>{time.hours}</span>
                    <p>Hours</p>
                  </div>
                  <div className="card-item">
                    <span>{time.minutes}</span>
                    <p>Mins</p>
                  </div>
                  <div className="card-item">
                    <span>{time.seconds}</span>
                    <p>Sec</p>
                  </div>
                </div>
            );

        
}


export default DateTimeDisplay;        