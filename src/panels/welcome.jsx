import React from "react";
import Typography from "@material-ui/core/Typography";
import cover from "../img/cover.jpg";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="cover">
      <div className="img">
        <img alt="cover img" src={cover} />
      </div>
      <div className="quote">
        <Typography variant="h4" gutterBottom>
          The limits of my language mean the limits of my world.
        </Typography>
        <Typography variant="h6" gutterBottom>
          —Ludwig Wittgenstein(1922)
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;
