import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Grid from "@material-ui/core/Grid";
import profile from "./profile.jpg";

function htmlProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    position: "fixed",
    height: "100%",
    width: "25vw",
    left: 0,
    top: 0,
    float: "left",
    backgroundColor: "#5f6d7e",
    color: "white",
  },
  tab: {
    maxWidth: "25vw",
  },
  tabPanels: {},
  img: {
    width: "15vw",
    borderRadius: "25%",
    margin: "auto",
    border: "4px solid white",
  },
}));

const VerticalTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickTab = (i) => {
    const ele = document.getElementById(`vertical-tabpanel-${i}`);
    ele.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Tabs
            orientation="vertical"
            indicatorColor="primary"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <img src={profile} alt="Avatar" className={classes.img} />
            <Tab
              label="Item One"
              className={classes.tab}
              {...htmlProps(0)}
              onClick={() => handleClickTab(0)}
            />
            <Tab
              label="Item Two"
              className={classes.tab}
              {...htmlProps(1)}
              onClick={() => handleClickTab(1)}
            />
            <Tab
              label="Item Three"
              className={classes.tab}
              {...htmlProps(2)}
              onClick={() => handleClickTab(2)}
            />
            <Tab
              label="Item Four"
              className={classes.tab}
              {...htmlProps(3)}
              onClick={() => handleClickTab(3)}
            />
            <Tab
              label="Item Five"
              className={classes.tab}
              {...htmlProps(4)}
              onClick={() => handleClickTab(4)}
            />
          </Tabs>
        </Grid>
        <Grid item xs={9}>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default VerticalTabs;
