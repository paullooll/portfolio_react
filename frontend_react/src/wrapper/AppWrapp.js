import React from 'react'
import { NavDots, SocialMedia } from '../components'

const AppWrapp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
            <p className="p-text">2025 AQUINO</p>
            <p className="p-text">All rights reserved</p>
        </div>
      </div>

      <NavDots active={idName} />
    </div>
  );
};

export default AppWrapp
