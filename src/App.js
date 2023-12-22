import styles from './App.module.css';
import Task from './components/Task';
import Nav from './components/Nav';
import TextArea from './components/TextArea';
import Output from './components/Output';
import { useEffect, useState } from "react";

function App() {

  let [flag, setFlag] = useState(true);
  // let navWidth = 250;

  const handleClick = (event) => {
    setFlag(() => {
      flag = !flag;
    });
    console.log(flag);
  }

  useEffect(() => {

  }, [flag]);

  return (
    <div className={styles.App}>
      <header>
        <Task />
      </header>
      <main>
        <div className={styles.mainleft} style={flag ? {width: `250px`} : {width: `50px`}} >
          <Nav handleClick={handleClick} flag={flag}/>
        </div>
        <div className={styles.mainright} style={flag ? {width: `calc(100vw - 250px)`} : {width: `calc(100vw - 50px)`}}>
          <TextArea />
          <Output />
        </div>
      </main>
    </div>
  );
}

export default App;
