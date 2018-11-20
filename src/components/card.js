import React from "react";
import { Card, CardTitle, CardActions, CardMenu } from "react-mdl";

export const cardLayout = (item, i) =>
  i < 2 ? (
    <a
      target="_blank"
      style={{
        width: "49%",
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
        color: "black"
      }}
      href={item.url}
    >
      <Card shadow={2} style={{ width: "80%" }} className="card" key={i}>
        <CardTitle
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            height: "25vw",

            background: `url(${item.urlToImage}) center / cover`,
            backgroundSize: "100% 100%"
          }}
        >
          <h3>{item.description}</h3>
        </CardTitle>

        <CardActions border>
          <h5>{item.title}</h5>
        </CardActions>
        <CardMenu style={{ color: "#fff" }} />
      </Card>
    </a>
  ) : (
    <a
      target="_blank"
      style={{
        width: "30%",
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
        color: "black"
      }}
      href={item.url}
    >
      <Card shadow={2} style={{ width: "92%" }} className="card" key={i}>
        <CardTitle
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            width: "100%",
            height: "20vw",
            objectFit: "cover",
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
    </a>
  );
