import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";

const TabPanel = (props) => {
  const { children, index} = props;

  return (
    <Grid 
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      item
      xs={12}
    >
      {children}
    </Grid>
  );
};

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
