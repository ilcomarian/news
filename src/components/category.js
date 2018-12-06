import React, { Component } from "react";
import { ProgressBar } from "react-mdl";
import { result } from "./location";
import { cardLayout } from "./card.js";
import { general } from "./general";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [],
      sports: [],
      isLoaded: false,
      business: [],
      entertainment: [],
      science: [],
      technology: []
    };
  }
  func() {
    return general("general");
  }

  componentDidMount() {
    let articles = [];
    let country = result();

    // ======================Category==================================================
    //=========================== general================================================

    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            articles.push(item);
          }
        });
        this.setState({ isLoaded: true, general: articles });
      });
    let sport = [];
    // ==============================================Sport========================================
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            sport.push(item);
          }
        });
        this.setState({ sports: sport });
      });
    let business = [];
    // =======================================business====================================================
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            business.push(item);
          }
        });
        this.setState({ business: business });
      });
    let entertainment = [];
    // ===============================================entertainment====================================================
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            entertainment.push(item);
          }
        });
        this.setState({ entertainment: entertainment });
      });
    let science = [];
    // ==========================================science=============================================
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            science.push(item);
          }
        });
        this.setState({ science: science });
      });
    let technology = [];
    // ============================================technology=============================================
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            technology.push(item);
          }
        });
        this.setState({ technology: technology });
      });
  }

  render() {
    let { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ProgressBar progress={44} />
        </div>
      );
    }
    let currentLocation = this.props.location.pathname.split("/").join("");
    console.log(this.state.science);
    if (currentLocation === "sports") {
      return (
        <div className="cards-div">
          {this.state.sports.map((item, i) => cardLayout(item, i))}
        </div>
      );
    }
    if (currentLocation === "business") {
      return (
        <div className="cards-div">
          {this.state.business.map((item, i) => cardLayout(item, i))}
        </div>
      );
    }
    if (currentLocation === "entertainment") {
      return (
        <div className="cards-div">
          {this.state.entertainment.map((item, i) => cardLayout(item, i))}
        </div>
      );
    }
    if (currentLocation === "science") {
      return (
        <div className="cards-div">
          {this.state.science.map((item, i) => cardLayout(item, i))}
        </div>
      );
    }
    if (currentLocation === "technology") {
      return (
        <div className="cards-div">
          {this.state.technology.map((item, i) => cardLayout(item, i))}
        </div>
      );
    } else {
      return (
        <div className="cards-div">
          {this.state.general.map((item, i) => cardLayout(item, i))}
        </div>
      );
    }
  }
}

export default Home;
