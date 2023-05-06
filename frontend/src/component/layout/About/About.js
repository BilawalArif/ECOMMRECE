import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/bil__a__wal";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/doqnmq5wz/image/upload/v1681723022/avatars/btdiuyoxabfkbm7tq0hu.jpg"
              alt="Founder"
            />
            <Typography>Bilawal Arif</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Bilawal. Only with the
              purpose to learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/BilawalArif"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/bil__a__wal" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
