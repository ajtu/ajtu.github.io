import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/girl-butterfly.jpeg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
          <h3>Why Swim?</h3>

          <p>There are many reasons to swim.</p>
          <p>Swimming provides good cardiovascular training and physical exercise without being tough on your joints.</p>
          <p>Water therapy and swimming provide your body with natural buoyancy, so you can swim and exercise longer without strenuous effort or joint pain. It's a great low-impact sport that can keep you healthy.</p>
          <p>Swimming provides supplemental development for a child's mental and physical developmental state. By understanding how and why their bodies move in a structured, engaged, learning environment, many students tend to excel even outside of swim class.</p>
          <p>Swimming is a life-long journey.</p>
          <p>After learning to swim enough, a student can make bigger decisions, like joining a swim team, water polo team, getting a lifeguard certification, or maybe you just wanted to get comfortable enough to swim on vacation!</p>

          <h3>Who We Are</h3>
          <p>The founders of Open Swim have worked in both the public and private sectors of swimming in New York City for over 10 years.</p>
          <p>From a massive, strict class structure of 25 students : 1 instructor, to personalized fun group lessons with less than 5 students, the founders have achieved significant rates of progression in every single one of their students.</p>
          <p>Our instructors are each  dedicated to helping our students achieve their goals as swimmers. </p>
          <p>With constant engagement and corrective queues, our students progress with speed and ease.</p>
                      <h3>Our Philosophy</h3>
                      <p>We believe that everyone should swim.</p>
                      <p>There's no question about it.</p>
                      <p>Our lessons focus on defined building blocks. The main ones are comfort, technique, strength, and endurance. Our goals are clear for both the instructor and student.</p>
                      <p>Simply put, we felt like naming students sea animals and having obscure class names didn't help anyone.</p>
                      <p>By getting confusing jargon out of the way and making clear goals, we can focus on what really matters; <b>progression.</b></p>
                      <p>Once a student learns all four strokes, they are periodically assessed and documented twice a semester.</p>
                      <p>We keep our students engaged the entire lesson. Lessons are always intense and challenging, and we always the bring out the absolute best in our students.</p>


          <h3>Why We're Different</h3>
<p>We are one of the few swim schools that advocates trying other schools before ours.</p>
<p> In our experience, one of our clients said it best, "it seems as if everyone wants to get the student to swim, and then once they're moving through the water, the progression stops."</p>
<p>Why is this?</p>
<p>Because it pays to keep a student mediocre. There is big money in getting a student just comfortable. Slow progression and development plateau offers high rewards as long as the client is kept happy.</p>
<p>Truth is, we don't want to keep our students for too long. We want you to move on to bigger and better things.</p>



          </Col>
        </Grid>
      </div>
    )
  }
}
