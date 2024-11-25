import React from 'react';

const OPEN_HOUR = 12;
const CLOSE_HOUR = 22;

function Footer() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();


  return (
    <footer className="footer">
      It's {hour}:{minutes.toString().padStart(2, '0')} {(hour >= OPEN_HOUR) && (hour < CLOSE_HOUR) ? "We're open!" : "We're closed!"}
    </footer>
  )
}

export { Footer };
