import React from 'react'
import axios from 'axios';


interface UserResponse {
  message: string;
}


const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postUser = async () => {
      try {
        const response = await axios.post("http://localhost:4000/users", {
          name: "홍길떵이"
        });
        const result = response.data;


        setData(result);
      } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch data');
      }
    }
    console.log("Fetching data...");
    postUser();
    console.log(data);
  }, [])
  return (
    <div>About</div>
  )
}

export default About;