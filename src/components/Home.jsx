import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {

componentDidMount(){
}

  render() {
    return (
    <div>
      <Grid>
<div className="mainContainer">
<Row className="show-grid text-center">
<Col xs={12} sm={12} md={12} lg={12} >

            <Image src="assets/3girls.jpg"  className="home-header-image"/>

            </Col>

</Row>



        <h2 className="text-center">Find the class for you </h2><br/>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/baby-lessons">
            <Image src="assets/babyandme.jpg" circle className="jiggle-pic"/>
            </Link>

            <h3>Baby And Me</h3>
            <p className="textAlignment">Experience and share progressive comfort and exploration with your child.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/private-lessons">
            <Image src="assets/private.jpg" circle className="jiggle-pic"/>
            </Link>

            <h3>Private Lessons</h3>
            <p className="textAlignment">Progress faster and better with personalized 1-on-1 lessons.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">

          <Link to="/group-lessons">
            <Image src="assets/group.jpg" circle className="jiggle-pic"/>
            </Link>
            <h3>Group Lessons</h3>
            <p className="textAlignment">Learn with others in a shared lesson environment.</p>
          </Col>
        </Row>




        <Jumbotron>
        <h4>Why Swim • Who We Are • Our Philosophy • Why We're Different</h4>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>


                <Row className="show-grid text-center">
                <Col xs={12} sm={6}>

                <div className = "imgSideText">
                <Image src="/assets/girl3.jpg" rounded className="profile-pic" responsive/>

                </div>
                              </Col>

                   <Col xs={12} sm={6} className ="person-wrapper" >
                   <div className = "imgSideText">
                   <h2 className>WHY EVERYONE CAN SWIM</h2>
                   <big>
                   <p>Through experience, we've come to meet many swimmers from all different walks of life.</p>
                   <p>
We believe <b>everyone can swim</b>, because we've personally helped many students, both fearful and bold, reach their swim goals.
</p>
<p>
All students respond to the water differently; and so does our approach. As an instructor works with the class, the class structure continues to mold to reach the student's goals and needs.
</p>
<p>
One of our main goals is to show our students what hard work can accomplish and what being a part of a team is all about.
</p></big>

                   </div>

                      </Col>
                </Row>


                <br/>

                <Row className="show-grid text-center">
                <Col xs={12} sm={6}>

                <h2>WHAT TO EXPECT</h2>
            <big> <p>
</p>
                <p>
Our first lesson consists of a small water test, to gauge the student's current swim level.</p>
<p>
We evaluate weak points and help strengthen those issues, by practicing different body positions and exercises.
</p>
<p>
Beginner classes are generally more playful. As a student gains comfort, the playfulness transitions to more directional queues to prepare for the more advanced classes.
</p> </big>
                             </Col>

                   <Col xs={12} sm={6} >
                   <Image src="/assets/kid1.jpg" alt="" rounded className="profile-pic" responsive/>


                      </Col>
                </Row>


                <br/>



                                <Row className="show-grid text-center">
                                <Col xs={12} sm={6} className = "person-wrapper">

                                <div className = "imgSideText">
                                <Image src="/assets/pool3.jpg" alt="" rounded className="profile-pic" responsive/>

                                </div>                </Col>

                                   <Col xs={12} sm={6} className ="person-wrapper" >
                                   <div className = "imgSideText">
                                   <h2 className>WHERE WE'RE LOCATED</h2>
                                   <p>Our services are currently available only in New York City.</p>
<p>If you have a residential pool, feel free to <Link to="/contact">contact us</Link> for our availability.</p>

                                   </div>





                                      </Col>
                                </Row>






<br/><br/>


<Row className="show-grid text-center">
<Col xs={12} sm={12} md={12} lg={12} >


<Image src="assets/logo-bottom-image.jpg"  className="home-header-image"/>

</Col>
                    </Row>




<div className="contactButton">
    <Link to="/contact">
    <Button bsStyle="primary">Register Online</Button>
    </Link>
</div>
<br/>
</div>




      </Grid>



                  <div class="study1">
                    <div class="transparent-dark">

                    <div className="addressSide">
                                        <p>Open Swim, Inc.</p>
                                        <p>52-51 84th street Elmhurst</p>
                                        <p>Queens, New York</p>
                                        <p>Phone: (917) 268- 4888 </p>
                                        <p>Text: (917) 268- 4888</p>
                                        <p>info@openswim.nyc</p>

                                        </div>

                      <div className="socialMediaSide">
                  <Link to="/facebook"><p>Facebook</p></Link>
                  <Link to="/instagram"><p>Instagram</p></Link>
                  <Link to="/twitter"><p>Twitter</p></Link>
                  </div>
                    </div>
                  </div>




</div>






    )
  }
}
