import React from 'react';
import ContentScreen from './ContentScreen'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from './News'
import Topbar from './Topbar'

interface Props {
}

function Normal(props : Props) {
  return (
    <div>
        <Topbar/>
        <ContentScreen>
            <News/>
        </ContentScreen>
    </div>
  );
}

export default Normal;
