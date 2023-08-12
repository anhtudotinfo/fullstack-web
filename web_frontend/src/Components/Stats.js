import React, {useState, useEffect} from "react";
import { GroupAddRounded, QueryBuilderOutlined, Layers } from "@mui/icons-material";
import { Icon } from "@material-ui/core";
import '../Components/StatsCss.css';


function Counter({ initialValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < initialValue) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 5);
      return () => clearInterval(interval);
    }
  }, [count, initialValue]);

  return <span style={{fontFamily: 'Fira Code'}} className="counter">{count}</span>;
}

export default function Stats() {
    
    return (
<div className="App">
      <div className="counter-section">
        <div className="counter-container">
          <GroupAddRounded style={{transform: 'scale(1.9)', marginBottom: '20px'}}/>
          <h2 style={{fontFamily: 'Fira Code', color: 'wheat'}}>Average logins</h2>
          <Counter initialValue={356} />
        </div>
        <div className="counter-container">
          <Layers style={{transform: 'scale(1.9)', marginBottom: '20px'}}/>
          <h2 style={{fontFamily: 'Fira Code', color: 'wheat'}}>Active plans</h2>
          <Counter initialValue={124} />
        </div>
        <div className="counter-container">
        <QueryBuilderOutlined style={{transform: 'scale(1.9)', marginBottom: '20px'}}/>
          <h2 style={{fontFamily: 'Fira Code', color: 'wheat'}}>Number of hours spent on crypto-hashing</h2>
          <Counter initialValue={1235} />
        </div>
      </div>
    </div>
    )
}

