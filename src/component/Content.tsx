import React from 'react';
import './Content.css'

interface Props {
  children: React.ReactNode;
}

function Content(props: Props) {  
  return (
      <div className="content">
        {props.children}
      </div>
    );
}
export default Content;
