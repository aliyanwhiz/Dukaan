import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import  { Typography } from 'antd'

const { Title } = Typography;

const HomePage: React.FC = () => {


  return (
    <DefaultLayout>
      <Title style={{textAlign: 'center'}}>Home</Title>
    </DefaultLayout>
  );
};

export default HomePage;