import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
              <HeaderRow title="NEWS" />
              <HeaderRow>
                <Navigation>
                  <NavLink exact to="/" activeStyle={{ color: "aquamarine" }}>
                    Home
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
                  <NavLink
                    to="/technology"
                    activeStyle={{ color: "aquamarine" }}
                  >
                    Technology
                  </NavLink>
                  {/* <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search2"
                    expandable
                    expandableIcon="search"
                  /> */}
                </Navigation>
              </HeaderRow>
            </Header>
            <Drawer title="News">
              <Navigation>
                <NavLink exact to="/" activeStyle={{ color: "aquamarine" }}>
                  Home
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
