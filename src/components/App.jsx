import React from 'react';
import Board from '../containers/Board';
import XStripe from './XStripe';
import YStripe from './YStripe';
import ControlPanel from '../containers/ControlPanel';
import styles from './styles/App.css';
import SandwichShop from '../containers/SandwichShop';

const App = () =>
  <div className={styles.AppRoot}>
    <div className={styles.AppBoard}>
      <XStripe />
      <div className={styles.AppBoardBottom}>
        <YStripe />
        <Board />
      </div>
    </div>
    <div className={styles.AppControlPanel}>
      <ControlPanel />
      <SandwichShop />
    </div>
  </div>;

export default App;

