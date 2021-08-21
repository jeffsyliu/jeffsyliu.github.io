import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import badge from "../img/badge.png";
import Books from "./Books";
import "./interests.scss";

const Interests = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="interest">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className="title">
            Interests
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider className="divider" />
        </Grid>
        <Grid item container xs={12} sm={12} spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card
              className="qwiklab"
              onClick={() =>
                openLink(
                  "https://www.qwiklabs.com/public_profiles/301870c9-8600-4df1-828a-17a8dddaf428"
                )
              }
            >
              <CardActionArea>
                <CardMedia
                  className="qwiklab-img"
                  component="img"
                  image={badge}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="qwiklab-desc">
              <Typography gutterBottom variant="h6" component="h2">
                Google Cloud Study Jam
              </Typography>
              I joined the Google Cloud Study Jam, which gives participants a
              30-days free Qwiklabs subscription to learn the Google Cloud
              Platform. It was fascinating. Now, I can develop applications on
              GCP, build it as a container image, and fetch it in a different
              environment from Google Container Registry. After testing, I can
              also config rolling update and auto-scaling to make applications
              as robust as possible. Sometimes, it is necessary to restructure
              code to microservice architecture base on the use case. And many
              other cloud concepts I learned. What's more, I found a bug in a
              lab called "Continuous Delivery with Jenkins in Kubernetes Engine"
              and reported it to Qwiklabs customer service. Qwiklabs Support was
              super responsive and solved the bug quickly. It makes the whole
              learning experience excellent and efficient. I am happy I get ten
              skill badges in the end and will receive a T-shirt and backpack.
              The event opens the door for me. I will keep exploring!
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} spacing={2}>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <div className="books">
              <Typography gutterBottom variant="h6" component="h2">
                Recent Reads
              </Typography>
              <Books />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Interests;
