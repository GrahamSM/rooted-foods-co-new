import React, { Component } from 'react';
import styles from './main_title.scss';
import { Link } from "react-router";


const MainTitle = () => {
  const title = '#getrooted';
  return (
    <div className = 'main_title'>
      <Link to='/'>{title}</Link>
    </div>
  );
};

export default MainTitle;
