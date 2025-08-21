import React from 'react';
import './Element.scss';

function Element({ children, className = '', ...props }) {
   return (
      <div className={`element ${className}`} {...props}>
         {children}
      </div>
   );
}

export default Element;
