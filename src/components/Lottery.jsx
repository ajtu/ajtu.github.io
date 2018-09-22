import React, { Component } from 'react'
import { Grid, Col, Row, Image, Button, Collapse, Well } from 'react-bootstrap';
import './Lottery.css';
import { Link } from 'react-router-dom';


export default class Lottery extends Component {
constructor(props, context) {
  super(props, context);

  this.state = {
    open1: false
  };
}
render() {
  return (


  <div className="mainDiv">
  <h2>Trial Lesson</h2>
  <p>Before you commit to anything, give us a try!</p>
    <div>
    <Grid>
    <Row className="show-grid">
  <Col xs={12} md={12}>

      <Button onClick={() => this.setState({ open1: !this.state.open1 })}>
      <h4><Image src="assets/icons8-clock-64.png"/>$50 for 30 minutes.</h4>
      </Button>
      <Collapse in={this.state.open1}>
        <div>
        <br/>
          <Well>
Take a 30 minute lesson. Meet our awesome staff and choose the right class for you.
          </Well>
        </div>
      </Collapse>
      </Col>

      </Row>

      <br/>

      <Row className="show-grid">
    <Col xs={12} md={12}>



      <Button onClick={() => this.setState({ open2: !this.state.open2 })}>
      <h4> <Image src="assets/icons8-detective-64.png"/>Assessment After Lesson</h4>
      </Button>
      <Collapse in={this.state.open2}>
        <div>
        <br/>

          <Well>
       After the lesson, we give an assessment of the student's current skills and short-term goals.

          </Well>
        </div>
      </Collapse>
</Col>
</Row>
<br/>


<Row className="show-grid">
<Col xs={12} md={12}>


      <Button onClick={() => this.setState({ open3: !this.state.open3 })}>
      <h4><Image src="assets/icons8-swimming-40.png"/>    How to Improve Outside of Class</h4>
      </Button>
      <Collapse in={this.state.open3}>
        <div>
        <br/>

          <Well>
        To further strengthen skills learned in class, we provide the student exercises to practice on their own. (if applicable)
          </Well>
        </div>
      </Collapse>

      </Col>
      </Row>

      </Grid>
    </div>
<br/>


    <Link to="/contact">
    <Button className="lottery-button"><p>Register Now!</p></Button>
  </Link>

  <br/>
  <br/>
  <br/>


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



  );
}
}
