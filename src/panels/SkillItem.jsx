import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const SkillItem = ({ skill, level }) => {
  return (
    <Grid item container alignItems="center" xs={12} sm={6}>
      <Grid item xs={6}>
        <Typography variant="subtitle1" display="inline">
          {skill}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating
          defaultValue={level}
          precision={0.5}
          readOnly
          className="rating"
        />
      </Grid>
    </Grid>
  );
};

export default SkillItem;
