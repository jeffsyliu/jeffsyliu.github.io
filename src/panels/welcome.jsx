import React from "react";
import Typography from "@material-ui/core/Typography";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="cover">
      <Typography variant="h4" gutterBottom className="quote">
        The limits of my language mean the limits of my world.
      </Typography>
      <Typography variant="h6" gutterBottom className="quote">
        —Ludwig Wittgenstein(1922)
      </Typography>
    </div>
  );
};

export default Welcome;
