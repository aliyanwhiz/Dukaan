import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import axios from 'axios';
import ItemList from '../components/ItemList';
import  { Row , Col , Typography } from 'antd'

const { Title } = Typography;

const ItemsPage:React.FC = () => {
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
  return (
    <DefaultLayout>
      <Title style={{textAlign: 'center'}}>Products</Title>
      <Row>
          {
            allData.map(items => (
              <Col lg={6} xs={24} md={12} sm={6}>
                <ItemList items={items} />
              </Col>
            ))
          }
      </Row>
    </DefaultLayout>
  )
}

export default ItemsPage