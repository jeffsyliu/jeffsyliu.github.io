import React, { useState } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import howGoogleWorks from "../img/how-google-works.jpg";
import thinkAgain from "../img/think-again.jpg";
import factfulness from "../img/factfulness.jpg";
import measure from "../img/okr.jpg";
import measureLife from "../img/how-will-you-measure-life.jpg";

const allBooks = [
  {
    label: "How Google Works",
    imgPath: howGoogleWorks,
  },
  {
    label: "Think Again",
    imgPath: thinkAgain,
  },
  {
    label: "Factfulness",
    imgPath: factfulness,
  },
  {
    label: "Measure What Matters",
    imgPath: measure,
  },
  {
    label: "How Will You Measure Your Life",
    imgPath: measureLife,
  },
];

const Books = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = allBooks.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        backgroundColor: "white",
      }}
    >
      <Paper square elevation={0}>
        <Typography align="center" variant="h6">
          {allBooks[activeStep].label}
        </Typography>
      </Paper>
      <img
        style={{
          width: "100%",
          height: "250px",
          objectFit: "contain",
          margin: "auto",
        }}
        src={allBooks[activeStep].imgPath}
        alt={allBooks[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        variant="dots"
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Books;
