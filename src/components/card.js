import React from "react";
import { Card, CardTitle, CardActions, CardMenu } from "react-mdl";

export const cardLayout = (item, i) =>
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

      <CardActions border>
        <h5>{item.title}</h5>
      </CardActions>
      <CardMenu style={{ color: "#fff" }} />
    </Card>
  );
