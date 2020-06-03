import React from 'react';
import styles from './Content.module.css'

interface Props {
  children: React.ReactNode;
}

function Content(props: Props) {  
  return (
      <div className={styles.content}>
        {props.children}
      </div>
    );
}
export default Content;
