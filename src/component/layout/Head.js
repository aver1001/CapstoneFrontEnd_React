import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import React from 'react';
import { useSelector } from "react-redux";

const { Header } = Layout;

function Head(){
    let Nav = useNavigate();
    const {jwtToken} = useSelector(state => state.jwtToken);

    
    return(
        <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      {jwtToken === null?
      <div>
        <div className="logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['main']}
        onClick = {(e)=>{
          Nav(e.key)
        }}
        items={['Main','Info','Login'].map((name, index) => ({
          key: name,
          label: name,
        }))}
      />

      </div>
      :
      <div>
        <div className="logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['main']}
        onClick = {(e)=>{
          Nav(e.key)
        }}
        items={['Main','Prosess','Download','Info','LogOut','test'].map((name, index) => ({
          key: name,
          label: name,
        }))}
      />

      </div>

      }
      
      
    </Header>

    
  </Layout>

    );
}

export default Head