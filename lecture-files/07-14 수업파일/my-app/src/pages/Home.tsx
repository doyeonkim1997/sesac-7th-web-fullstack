import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users");
        console.log(res);
        setData(res.data as String)
      } catch (e) {
        console.log(e)
        throw new Error('Failed to fetch data');
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div>Home</div>
      <p>home page</p>
    </>
  );
}

export default Home;