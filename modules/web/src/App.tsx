import './App.css'
import React from 'react'
import { Layout, Menu } from 'antd'
import { ActivityTimer } from './submodules'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>{' '}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <ActivityTimer />
      </Content>
      <Footer style={{ textAlign: 'center' }}>PAW ©2020</Footer>
    </Layout>
  )
}

export default App
