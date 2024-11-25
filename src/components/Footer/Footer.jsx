import React from 'react';

function Footer() {
  return (
    <footer>
      {new Date().toLocaleTimeString()}.
      We'are currently  open!
    </footer>
  )
}

export { Footer };
