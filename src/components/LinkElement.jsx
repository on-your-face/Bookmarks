import React from 'react';

function LinkElement({ href, children, className = '', ...props }) {
   return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`link-element ${className}`} {...props}>
         {children}
      </a>
   );
}

export default LinkElement;
