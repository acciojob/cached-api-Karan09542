
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])

  const memoizeData = useMemo(() => data, [data]);
  return (
    <div>
        {/* Do not remove the main div */}
        {loading && <p>Loading...</p>}
        <ul>
          {memoizeData.map((item) => (<div key={item.id}>
            <li>{item.title}</li>
            <p>{item.body}</p>
            <br/>
          </div>))}
        </ul>
    </div>
  )
}

export default App
