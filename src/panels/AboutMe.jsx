import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./aboutMe.css";

const KeyValueInfo = ({ infoKey, value }) => {
  return (
    <div className="keyValInfo">
      <Typography
        variant="h6"
        gutterBottom
        display="inline"
        style={{ marginRight: "12px" }}
      >
        {infoKey}:
      </Typography>
      <Typography variant="subtitle1" gutterBottom display="inline">
        {value}
      </Typography>
    </div>
  );
};

const Edu = () => (
  <div>
    Master's Degree <HyperLink url="https://www.ntu.edu.tw/" text="@NTU" />
    <br />
    Bachelor's Degree <HyperLink url="https://www.ncu.edu.tw/" text="@NCU" />
  </div>
);

const Pos = () => (
  <div>
    Architect/Software Engineer{" "}
    <HyperLink
      url="https://www.deltaww.com/zh-tw/index"
      text="@Delta Electronics"
    />
    <br />
    Software Engineer{" "}
    <HyperLink url="https://www.nexf.org/" text="@NEX Foundation" />
  </div>
);

const HyperLink = ({ url, text }) => (
  <Link target="_blank" rel="noreferrer" href={url}>
    {text}
  </Link>
);

const AboutMe = () => {
  return (
    <div className="aboutme">
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={12} sm={12}>
          <Typography variant="h4" className="title">
            About Me
          </Typography>
        </Grid>
        <Grid xs={12} sm={12}>
          <Divider className="divider" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="info">
            <KeyValueInfo infoKey="Name" value="Liu, Sheng Yang (Jeff)" />
            <KeyValueInfo infoKey="Location" value="Taipei, Taiwan" />
            <KeyValueInfo infoKey="Education" value={<Edu />} />
            <KeyValueInfo infoKey="Current Position" value={<Pos />} />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className="desc">
            <Typography variant="h6" className="title">
              A Little Bit about Myself
            </Typography>
            I work as a web developer with both experiences in front-end and
            back-end. My responsibility is to design a flexible architecture of
            our system so that we can add features with ease and integrate it
            with other systems without worrying about breaking existing
            functions. To achieve this, I should have a big picture of the
            system, evaluate a design carefully with my teammates and implement
            it with solid programming skills. I am also a volunteer at NEX
            foundation, a nonprofit startup aiming to help connect Taiwanese
            talents internationally. Volunteers are from different countries and
            backgrounds, so we have to cooperate remotely and possess good
            communication skills. In NEX, I build a forum on which people can
            share information about careers, the international job market, and
            study abroad. I love dealing with intriguing challenges and enjoy
            the sense of achievement after solving them. I compare myself not to
            how far I've come but how far I still wish to go! If you're
            interested in me, feel free to contact me.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
