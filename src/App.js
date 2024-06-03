import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.post('https://reqres.in/api/users', 
    {
      "id": "123",
      "name": "Martin",
      "job": "Developer"
  }
  )
  .then(res => console.log(res))
  .catch(err=> console.log(err))
  }, [])
  return (
    <div className="App">
      <h2>Axios Library in React JS</h2>
      {/*
        data.map((d,i)=>{
          return <p key = {i}>{d.email}</p>
        })
      */}
    </div>
  );
}

export default App;
