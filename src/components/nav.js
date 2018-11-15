import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Header,
  Textfield,
  HeaderRow,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
import Routes from "./routes";
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
                  <Link to="/">Home</Link>
                  <Link to="/sports">Sports</Link>
                </Navigation>
              </HeaderRow>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/sports">Sports</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content">
                <Routes />
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default NavBar;
