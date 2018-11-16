import React, { Component } from "react";
import { ProgressBar, Card, CardTitle, CardActions, CardMenu } from "react-mdl";
class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = { article: undefined, topArticle: undefined, isLoaded: false };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json.articles);
        let articles = [];
        json.articles.map(item => {
          if (item.urlToImage && item.description) {
            articles.push(item);
          }
        });
        console.log(articles);
        this.setState({ isLoaded: true, topArticle: articles });
      });
  }

  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <ProgressBar progress={44} />
        </div>
      );
    }
    return (
      <div className="cards-div">
        {this.state.topArticle.map((item, i) =>
          i === 0 ? (
            <Card shadow={2} style={{ width: "80%" }} className="card" key={i}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "40vw",
                  width: "100%",
                  background: `url(${item.urlToImage}) center / cover`
                }}
              >
                <h3>{item.description}</h3>
              </CardTitle>

              {/* <CardText>{item.description}</CardText> */}
              <CardActions border>
                <h5>{item.title}</h5>
              </CardActions>
              <CardMenu style={{ color: "#fff" }} />
            </Card>
          ) : (
            <Card shadow={2} style={{ width: "30%" }} className="card" key={i}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "20vw",
                  background: `url(${item.urlToImage}) center / cover`
                }}
              >
                <p>{item.description}</p>
              </CardTitle>
              {/* <CardText>{item.description}</CardText> */}
              <CardActions border>
                <h5>{item.title}</h5>
              </CardActions>
              <CardMenu style={{ color: "#fff" }} />
            </Card>
          )
        )}
      </div>
    );
  }
}

export default Entertainment;
