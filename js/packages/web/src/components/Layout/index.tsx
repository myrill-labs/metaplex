import React from 'react';
import {Layout} from 'antd';

import {AppBar} from '../AppBar';
import {Footer} from '../Footer';
// import Particles from "react-particles-js";

const {Header, Content} = Layout;

export const AppLayout = React.memo((props: any) => {
  return (
    <>
      <Layout id={'main-layout'}>
        <span id={'main-bg'}/>
        <span id={'bg-gradient'}/>
        <span id={'static-header-gradient'}/>
        <span id={'static-end-gradient'}/>
        <AppBar/>
        <Layout id={'width-layout'}>
          <Content
            style={{
              overflow: 'scroll',
              padding: '30px 48px ',
            }}
          >
            {props.children}
          </Content>
        </Layout>
        {/*<Footer/>*/}
      </Layout>
    </>
  );
});
