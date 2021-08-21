import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SkillItem from "./SkillItem";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className="title">
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider className="divider" />
        </Grid>
        <Grid item container xs={12} sm={12}>
          <Grid item xs={12} className="skillTitle">
            <Typography variant="h5">Programming Languages</Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} className="skillDetail">
            <SkillItem skill="Java" level={5}></SkillItem>
            <SkillItem skill="JavaScript(ES6)" level={5}></SkillItem>
            <SkillItem skill="HTML" level={4}></SkillItem>
            <SkillItem skill="CSS" level={4}></SkillItem>
            <SkillItem skill="Sass" level={4}></SkillItem>
            <SkillItem skill="SQL" level={4}></SkillItem>
            <SkillItem skill="GraphQL" level={4}></SkillItem>
            <SkillItem skill="Shell Script" level={3}></SkillItem>
            <SkillItem skill="Python" level={3}></SkillItem>
            <SkillItem skill="PHP" level={3}></SkillItem>
            <SkillItem skill="TypeScript" level={3}></SkillItem>
          </Grid>
          <Grid item xs={12} className="skillTitle">
            <Typography variant="h5">Framework or Library</Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} className="skillDetail">
            <SkillItem skill="Spring & Spring Boot" level={5}></SkillItem>
            <SkillItem skill="React" level={5}></SkillItem>
            <SkillItem skill="Redux" level={5}></SkillItem>
            <SkillItem skill="ANTLR" level={4}></SkillItem>
            <SkillItem skill="Apollo Server & Client" level={4}></SkillItem>
            <SkillItem skill="Ant Design" level={4}></SkillItem>
            <SkillItem skill="Bootstrap" level={3}></SkillItem>
            <SkillItem skill="Node.js" level={3}></SkillItem>
            <SkillItem skill="Solr" level={3}></SkillItem>
          </Grid>
          <Grid item xs={12} className="skillTitle">
            <Typography variant="h5">Tools</Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} className="skillDetail">
            <SkillItem skill="IntelliJ" level={5}></SkillItem>
            <SkillItem skill="VSCode" level={5}></SkillItem>
            <SkillItem skill="Git" level={5}></SkillItem>
            <SkillItem skill="Maven" level={4}></SkillItem>
            <SkillItem skill="Gradle" level={4}></SkillItem>
            <SkillItem skill="Windows" level={4}></SkillItem>
            <SkillItem skill="Unix-based OS" level={4}></SkillItem>
            <SkillItem skill="Tomcat" level={3}></SkillItem>
            <SkillItem skill="Azure" level={3}></SkillItem>
            <SkillItem skill="GCP" level={3}></SkillItem>
            <SkillItem skill="Docker" level={3}></SkillItem>
          </Grid>
          <Grid item xs={12} className="skillTitle">
            <Typography variant="h5">Languages</Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} className="skillDetail">
            <SkillItem skill="Mandarin Chinese(native)" level={5}></SkillItem>
            <SkillItem skill="English(TOEFL 100up)" level={4}></SkillItem>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
