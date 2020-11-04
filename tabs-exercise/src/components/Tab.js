import React from 'react';

export const Tab = ({ content, onTabClick, active }) => (
     <div className="tab">

          {content.map((item, index) => (
               <button key={item.tabName} className={active === index ? "tablinks active" : "tab"} onClick={() => onTabClick(index, item)}>{item.tabName}</button>
          ))}
          
     </div>
)