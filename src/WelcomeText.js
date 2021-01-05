import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ProfilePic from "./images/ProfilePic1.jpg";
import { Element } from 'react-scroll';


function WelcomeText() {

    return (
        <Element id="about">
            <Container className="aboutDiv">
                <Row className="aboutRow">
                    <Col sm="3"> <img
                        className="profIMG"
                        src={ProfilePic}
                        alt="ProfilePic" />
                    </Col>
                    <Col lg="auto" className="aboutText">
                        <br />
                        <p>Always learning. Always doing. Always thinking.</p>
                        <p>
                            Hello, I'm a Full Stack Web Developer based in Philadelphia, PA
                    </p>
                        <p>
                            I like building functional and clean web applications.
                    </p>
                        <p>
                            I also like to cook a lot. I was a chef for 10 years after all.
                    </p>
                    </Col>
                </Row>
                <Row className="aboutExpanded">
                    <p>Seychelle Koplik is a web development and coding bootcamp student based in Philadelphia, PA. Born in the Philippines, raised in Chicago, and now living in Philadelphia. Formerly a Chef with highly adaptable creative skills and passionate drive. Seychelle departed the fast-paced and intensely hot kitchens with a decade long experience and varying progressive skills within the culinary industry.</p>
                    <p>Striving for career success in the ever demanding field of Information Technology. Eager to learn and absorb new frontier of technology. Yearning to be able to provide elegant, sleek, understandable coding.</p>
                    <p>Hopeful that some day she would be able to deliver the kind of service to provide clients with the highest of expectations for whatever web development needs that may arise. Seeking to beautify, inform, and enhance user experience via design and technology.</p>
                    <p>When not studying to become the best coder and developer that she can be, Seychelle likes to still hone her culinary skills and very much still enjoy cooking. Dinner parties, when it was still the norm before the pandemic was one of the things she enjoyed hosting for friends and family. Lately, making pizza from scratch has been a source of joy and coming up with new pizza topping combinations has been a delight!</p>
                </Row>
            </Container>
        </Element>
    );
}

export default WelcomeText