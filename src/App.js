import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Layout,
  Header,
  Textfield,
  HeaderRow,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header waterfall>
              <HeaderRow title="Title">
                <Textfield
                  value=""
                  onChange={() => {}}
                  label="Search2"
                  expandable
                  expandableIcon="search"
                />
              </HeaderRow>
              <HeaderRow>
                <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                </Navigation>
              </HeaderRow>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
