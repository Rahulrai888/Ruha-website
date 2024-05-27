import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              AboutUs
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Partner
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" items xs={12}>
          <Typography varient="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography varient="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography varient="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>
            {"  "}
            from{"  "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
