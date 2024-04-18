import React, {useEffect, useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'


const HomePage:React.FC = () => {
  
  const [allData, setallData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const { data } = await axios.get("/api/items/get-item");
        setallData(data);
        console.log(data);
      } catch (error) {
        console.log(error,allData);
      }
    };
  
    getAllData();
  });
  
  return (
    <DefaultLayout>
      <h1>Homepage</h1>
    </DefaultLayout>
  )
}

export default HomePage