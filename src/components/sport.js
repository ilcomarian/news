import React, { Component } from "react";
class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = { article: undefined, sports: undefined, isLoaded: false };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e2003c86ce924ed39297bf09a964959d`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, sports: json });
      });
  }

  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          {this.state.sports.articles.map((item, i) =>
            item.urlToImage ? (
              <li key={i}>
                <h1>{item.author}</h1>
                <img
                  src={item.urlToImage}
                  alt="Smiley face"
                  height="400"
                  width="600"
                />
                <p> {item.publishedAt}</p>
                <br />
                <p> {item.description}</p>
                <br />
              </li>
            ) : (
              <div />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Sports;
