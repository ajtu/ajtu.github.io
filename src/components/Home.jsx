import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {


  render() {
    return (
      <Grid>
<div className="container">

        <div class="row" id="box-search">
            <div class="thumbnail text-center">
                <img src="/assets/pool1.jpg" alt="" responsive/>
                <div class="caption">
                    <h1 className="whiteText">Open Swim believes that everyone can swim.</h1>
                </div>
            </div>
            </div>



        <h3 className="text-center">Find the class for you </h3>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/baby-lessons">
            <Image src="assets/babyandme.jpg" circle className="profile-pic"/>
            </Link>

            <h3>Baby And Me</h3>
            <p className="textAlignment">Experience and share progressive comfort and exploration with your child.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/private-lessons">
            <Image src="assets/private.jpeg" circle className="profile-pic"/>
            </Link>

            <h3>Private Lessons</h3>
            <p className="textAlignment">Progress faster and better with personalized 1-on-1 lessons.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/group-lessons">
            <Image src="assets/group.jpeg" circle className="profile-pic"/>
            </Link>
            <h3>Group Lessons</h3>
            <p className="textAlignment">Learn with others in a shared lesson environment.</p>
          </Col>
        </Row>


        <div class="row" id="box-search">
            <div class="thumbnail text-center">
                <img src="/assets/kid1.jpg" alt="" responsive/>
                <div class="caption">
                    <h1 className="whiteText">Swimming for All Ages and Skill Levels!</h1>
                </div>
            </div>
            </div>





            <div class="row" id="box-search">
                <div class="thumbnail text-center">
                    <img src="/assets/kid2.jpg" alt="" responsive/>
                    <div class="caption">
                        <h1 className="whiteText">Positive reinforcement & corrective queues.</h1>
                    </div>
                </div>
                </div>
                <div class="row" id="box-search">
                    <div class="thumbnail text-center">
                        <img src="/assets/girl1.jpg" alt="" responsive/>
                        <div class="caption">
                            <h1 className="whiteText">No weird class structures.</h1>
                        </div>
                    </div>
                    </div>


                    <Jumbotron>
                    <h2>Why Swim • Who We Are • Our Philosophy • Why We're Different</h2>
                      <Link to="/about">
                        <Button bsStyle="primary">Learn More</Button>
                      </Link>
                    </Jumbotron>
        <Jumbotron>
        <h1>Blog</h1>
        <p className = "textAlignment">Blog is currently under construction.</p>
        <p className = "textAlignment">Topics that we intend to cover : </p>
        <h2>How to prepare for my first lesson?</h2>
        <h2>What can I do outside of the pool to improve?</h2>
        <h2>NYC - what are some free or cheap swim programs I can try out?</h2>
        <h2>What's the earliest my child can swim?</h2>
        <h2>what type of goggles should I get for swimming lessons?</h2>
        <h2>My child is scared of the water - what should I do?</h2>
        <h2>Intro to Freestyle/Front Crawl</h2>
        <h2>Intro to BreastStroke</h2>
        <h2>Intro to Backstroke/Back Crawl</h2>
        <h2>Intro to Butterfly</h2>
        <h2>Swimming - How muscle works against you and how fat works for you</h2>
        <h2>A typical swim workout for cardiovascular health and physical fitness</h2>

<h2></h2>
        </Jumbotron>

        </div>
      </Grid>
    )
  }
}
