import '../styles/DefaultLayout.css'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import { FaUsersCog } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";
import { GiRolledCloth } from "react-icons/gi";
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

interface Props {
    children: React.ReactNode;
} 

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/bills',
      icon: <IoReceiptSharp />,
      label: <Link to="/bills">Bills</Link>,
    },
    {
      key: '/items',
      icon: <MdOutlineInventory />,
      label: <Link to="/items">Items</Link>,
    },
    {
      key: '/customers',
      icon: <FaUsersCog />,
      label: <Link to="/customers">Customers</Link>,
    },
    {
      key: '/logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
          <div className='logo' >
            {collapsed ? <GiRolledCloth  color='fff' size={30} /> : <h1 className='logotext'>Dukaan</h1>}
          </div>
        </div>
        <Menu
          style={{
              margin:'20px 0px',
              padding:'0px 15px'
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
