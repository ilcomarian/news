import React, { Component } from "react";
import {
  Layout,
  Header,
  Textfield,
  HeaderRow,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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

export default NavBar;
