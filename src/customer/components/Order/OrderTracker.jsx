import { StepLabel, Stepper, Step } from "@mui/material";
import React from "react";
import { color } from "../Product/FilterData";

const steps = [
  "Place",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
