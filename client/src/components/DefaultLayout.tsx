import '../styles/DefaultLayout.css'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { FaUsersCog } from "react-icons/fa";
import {MdOutlineInventory } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";
import { GiRolledCloth } from "react-icons/gi";
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DefaultLayout:React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        >
          <Menu.Item key='/' icon={<UserOutlined />}>
              <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key='/bills' icon={<IoReceiptSharp />}>
              <Link to="/bills">Bills</Link>
          </Menu.Item>
          <Menu.Item key='/items' icon={<MdOutlineInventory />}>
              <Link to="/items">Items</Link>
          </Menu.Item>
          <Menu.Item key='/customers' icon={<FaUsersCog />}>
              <Link to="/customers">Customers</Link>
          </Menu.Item>
          <Menu.Item key='/logout' icon={<LogoutOutlined />}>
              Customers
          </Menu.Item>
        </Menu>
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
            height: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1>Content</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;