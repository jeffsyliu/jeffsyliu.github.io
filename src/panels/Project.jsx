import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./project.css";
import nexLogo from "../img/nex.png";
import temLogo from "../img/taipeiEthereumMeetup.png";
import githubLogo from "../img/github.png";
import leetcodeLogo from "../img/leetcode.png";

const Project = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="project">
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={12} sm={12}>
          <Typography variant="h4" className="title">
            Projects
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <Divider className="divider" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            className="nex"
            onClick={() => openLink("https://www.nexf.org/")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={nexLogo}
                title="NEX Logo"
                className="nex-img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  NEX Volunteer
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Work as software engineer and help build a forum
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            className="tem"
            onClick={() => openLink("https://medium.com/@Cossete")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={temLogo}
                title="Taipei Ethereum Meetup Logo"
                className="tem-img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Taipei Ethereum Meetup Writer
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Share how I build DApp and ERC20 token contract
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            className="personalWebsite"
            onClick={() =>
              openLink("https://github.com/jeffsyliu/jeffsyliu.github.io")
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={githubLogo}
                title="Github image"
                className="github-img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Personal Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Follow the link to find source code
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            className="leetcode"
            onClick={() => openLink("https://leetcode.com/n0v1ce/")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={leetcodeLogo}
                title="Leetcode Logo"
                className="leetcode-img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Leetcode Practice
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Algorithm and data structure are fundamental and vital skills
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
