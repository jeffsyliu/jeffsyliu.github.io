import React, { useState } from "react";
import PublicIcon from "@material-ui/icons/Public";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Welcome from "./panels/Welcome";
import AboutMe from "./panels/AboutMe";
import TabPanel from "./TabPanel";
import profile from "./img/profile.jpg";
import HideOnScroll from "./HideOnScroll";
import Project from "./panels/Project";
import Skills from "./panels/Skills";
import Interests from "./panels/Interests";
import Contact from "./panels/Contact";

const drawerWidth = 240;

function htmlProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  profile: {
    width: "120px",
    borderRadius: "25%",
    margin: "4vw auto 0vw",
    border: "4px solid white",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    height: "0",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function MainPage(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickTab = (i) => {
    const ele = document.getElementById(`vertical-tabpanel-${i}`);
    ele.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#5f6d7e", height: "100%" }}>
      <div className={classes.toolbar} />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid>
          <img src={profile} alt="Avatar" className={classes.profile} />
        </Grid>
        <Grid>
          <Typography variant="h4" gutterBottom style={{ color: "white" }}>
            Jeff SY Liu
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab
          label={
            <div style={{ color: "white" }}>
              <PublicIcon style={{ verticalAlign: "middle" }} /> About Me
            </div>
          }
          className={classes.tab}
          {...htmlProps("aboutMe")}
          onClick={() => handleClickTab("aboutMe")}
        />
        <Tab
          label={
            <div style={{ color: "white" }}>
              <KeyboardIcon style={{ verticalAlign: "middle" }} /> Projects
            </div>
          }
          className={classes.tab}
          {...htmlProps("projects")}
          onClick={() => handleClickTab("projects")}
        />
        <Tab
          label={
            <div style={{ color: "white" }}>
              <EmojiEventsIcon style={{ verticalAlign: "middle" }} /> Skills
            </div>
          }
          className={classes.tab}
          {...htmlProps("skills")}
          onClick={() => handleClickTab("skills")}
        />
        <Tab
          label={
            <div style={{ color: "white" }}>
              <DirectionsBikeIcon style={{ verticalAlign: "middle" }} />{" "}
              Interest
            </div>
          }
          className={classes.tab}
          {...htmlProps("interests")}
          onClick={() => handleClickTab("interests")}
        />
        <Tab
          label={
            <div style={{ color: "white" }}>
              <ContactMailIcon style={{ verticalAlign: "middle" }} /> Contact
            </div>
          }
          className={classes.tab}
          {...htmlProps("contact")}
          onClick={() => handleClickTab("contact")}
        />
      </Tabs>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp implementation="css">
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Welcome, I'm Jeff Liu
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Hidden smUp implementation="css">
          <div className={classes.toolbar} />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Welcome />
        </Hidden>
        <Grid container direction="column" alignItems="center">
          <TabPanel value={value} index={"aboutMe"}>
            <AboutMe />
          </TabPanel>
          <TabPanel value={value} index={"projects"}>
            <Project />
          </TabPanel>
          <TabPanel value={value} index={"skills"}>
            <Skills />
          </TabPanel>
          <TabPanel value={value} index={"interests"}>
            <Interests />
          </TabPanel>
          <TabPanel value={value} index={"contact"}>
            <Contact />
          </TabPanel>
        </Grid>
      </main>
    </div>
  );
}

export default MainPage;
