import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "./contact.scss";
import linkedin from "../img/linkedin.png";
import gmail from "../img/gmail.png";

const Contact = () => {
  return (
    <div className="contact">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className="title">
            Contact Me
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider className="divider" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" className="title">
            Find more about me on LinkedIn, or email me!
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={12}>
          <Grid item xs={12} sm={6} md={6}>
            <div className="linkedin-icon">
              <a href="https://www.linkedin.com/in/jeff-sy-liu/">
                <img src={linkedin} alt="LinkedIn Icon" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="gmail-icon">
              <a href="mailto:liushengyang.jeffliu@gmail.com">
                <img src={gmail} alt="Gmail Icon"></img>
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="caption" className="footer">
            Copyright © 2021 Jeff Liu
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
