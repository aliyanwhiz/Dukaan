import React, {useEffect, useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'


const HomePage:React.FC = () => {
  
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/items/get-item");
        setAllData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <DefaultLayout>
      <h1>Homepage</h1>
    </DefaultLayout>
  )
}

export default HomePage