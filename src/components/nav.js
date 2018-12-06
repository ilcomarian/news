import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Layout,
  Header,
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
            <Header style={{ backgroundColor: "white" }}>
              <HeaderRow title="NEWS" style={{ color: "black" }}>
                <Navigation>
                  <NavLink
                    exact
                    to="/"
                    style={{ color: "black" }}
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Top Stories</h6>
                  </NavLink>
                  <NavLink
                    to="/sports"
                    style={{ color: "black" }}
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Sports</h6>
                  </NavLink>
                  <NavLink
                    to="/business"
                    style={{ color: "black" }}
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Business</h6>
                  </NavLink>
                  <NavLink
                    style={{ color: "black" }}
                    to="/entertainment"
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Entertainment</h6>
                  </NavLink>
                  <NavLink
                    to="/science"
                    style={{ color: "black" }}
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Science</h6>
                  </NavLink>
                  <NavLink
                    style={{ color: "black" }}
                    to="/technology"
                    activeStyle={{ color: "grey" }}
                  >
                    <h6>Technology</h6>
                  </NavLink>
                </Navigation>
              </HeaderRow>
            </Header>
            <Drawer title="News">
              <Navigation>
                <NavLink exact to="/" activeStyle={{ color: "aquamarine" }}>
                  Top Stories
                </NavLink>
                <NavLink to="/sports" activeStyle={{ color: "aquamarine" }}>
                  Sports
                </NavLink>
                <NavLink to="/business" activeStyle={{ color: "aquamarine" }}>
                  Business
                </NavLink>
                <NavLink
                  to="/entertainment"
                  activeStyle={{ color: "aquamarine" }}
                >
                  Entertainment
                </NavLink>
                <NavLink to="/science" activeStyle={{ color: "aquamarine" }}>
                  Science
                </NavLink>
                <NavLink to="/technology" activeStyle={{ color: "aquamarine" }}>
                  Technology
                </NavLink>
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
