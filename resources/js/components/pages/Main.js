import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;
import Remote from './Remote'
import Setting from './Setting'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Main = () => {

  return (
    <Router>
      <Layout style={{height: '100%'}}>
        <Header className="header">
          <p style={{color:"white"}}>Header</p>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1"><Link to="/">遠端管理檔案</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/setting">權限設定</Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/setting">
                  <Setting/>
                </Route>
                <Route path="/">
                  <Remote />
                </Route>
                
              </Switch>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
    
  );
  
}

export default Main;