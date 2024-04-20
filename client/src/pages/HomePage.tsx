import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import axios from 'axios';
import { Table } from 'antd';

const HomePage: React.FC = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items/get-item");
        setAllData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Define the columns for your table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name', 
      key: '_id',
    },
    {
      title: 'Category', 
      dataIndex: 'category',
      key: '_id',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: '_id', 
    },
  ];

  return (
    <DefaultLayout>
      <Table dataSource={allData} columns={columns} size="small"  />
    </DefaultLayout>
  );
};

export default HomePage;