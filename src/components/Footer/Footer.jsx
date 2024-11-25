import React from 'react';

const OPEN_HOUR = 12;
const CLOSE_HOUR = 22;

function Footer() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR

  function handleOrder() {
    alert('Handle ordering in the future.')
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {CLOSE_HOUR}:00. Come visit us or order online.</p>
          <button className="btn" onClick={handleOrder}>Order</button>
        </div>
      )
    : (
        <div className="order">
          <p>It's {hour}:{minutes} We're closed! Coming back tomorrow at {OPEN_HOUR}:00.</p>
        </div>
      )}
    </footer>
  )
}

export { Footer };
