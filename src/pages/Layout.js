import React, { Fragment } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import routes from '../routes';

const { Header, Content, Footer } = Layout;

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      // Render more <Route>s with the same paths as
      // above, but different components this time.
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

const Document = () => {
  return (
    <Fragment>
      <Layout>
        <Header>
          <div className="Title">
            <h1 style={{ color: 'white' }}>weather X</h1>
          </div>
        </Header>
        <Content style={{ padding: '0 25px', paddingTop: 10 }}>
          <div style={{ flex: 1, padding: '5px', minHeight: '768px' }}>
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          weather X ©2018 Created by Simon
          <span role="img" aria-label="Smile">
            🙂
          </span>
        </Footer>
      </Layout>
    </Fragment>
  );
};

export default withRouter(Document);
