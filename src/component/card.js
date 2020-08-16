import React from "react";
import img1 from "../images/ExpenseTrackerProject.PNG";
import img2 from "../images/Covid-19Project.PNG";
import img3 from "../images/ReactAnimationTrends.PNG";
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Grid } from "@material-ui/core";
import styled from "styled-components";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Link = styled.a`
  text-decoration: none;
`;
const H4heaader = styled.h4`
font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 700;
font-size: 18px;
Margin: 0;
`;
const Ptech = styled.p`
font-size: 14px;
line-height: 1.75;
color: #777777;
Margin: 0;
`;

export const CardPortfolio = () => {
  const classes = useStyles();

  return (
    <section id="portfolio" class="bg-light-gray">
         <Grid container justify="center" spacing={3}>
          <div>
            <h2 class="section-heading">Portfolio</h2>
            <h3 class="section-subheading text-muted">Some of my latest work.</h3>
          </div>
        </Grid>
            <AnimatedOnScroll animationIn="bounceInRight">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={img1}
                  title="Contemplative Reptile"
                />
                <CardContent height="50">
                  <div class="portfolio-caption">
                    <H4heaader>Expense Tracker</H4heaader>
                    <Ptech>React.js</Ptech>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ left: 90 }}>
                  <Link
                className="hover-2"
                target="#"
                href="http://expensetrackerreactbootcamp-projec1.surge.sh"
              >
                View Project
              </Link>
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={img2}
                  title="Contemplative Reptile"
                />
                <CardContent height="50">
                  <div class="portfolio-caption">
                    <H4heaader>Covid-19 Tracker</H4heaader>
                    <Ptech>React.js, Chart.js, Rust Api</Ptech>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ left: 90 }}>
                <Link
                className="hover-2"
                target="#"
                href="http://covid-19trackerreactbootcamp-projec2.surge.sh"
              >
                View Project
              </Link>
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={img3}
                  title="Contemplative Reptile"
                />
                <CardContent height="50">
                  <div class="portfolio-caption">
                    <H4heaader>React Animation Trends</H4heaader>
                    <Ptech>React.js, AnimationApi.js</Ptech>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ left: 90 }}>
                <Link
                className="hover-2"
                target="#"
                href="http://bootcamp2020react-projec4b.surge.sh"
              >
                View Project
              </Link>
        </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </AnimatedOnScroll>
    </section>
  );
}