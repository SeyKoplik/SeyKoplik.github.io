import React, { useState } from 'react';
import projects from './Projects.json';
import "./styles.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectCarousel() {
  const items = projects
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carouselItem"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.demo_img}
      >
        <div className="buttonDiv">
          <Button className="carouselRepoButton">
            <a href={item.repo_url} target="_blank">Code Repository</a>
          </Button>
          {' '}
          <Button className="carouselDeployButton"><a href={item.deployed_url} target="_blank">Live Deploy</a>
          </Button>
        </div>

        <img className="carouselIMG" src={item.demo_img} alt={item.title} />

        <CarouselCaption className="carouselCaption" captionHeader={item.title} captionText={item.description} />

      </CarouselItem>
    );
  });

  return (
    <div id="projects">
      <ScrollAnimation animateIn='bounceInRight'>
        <h1 className="projectBanner">Projects && Activities</h1>
      </ScrollAnimation>

      <Carousel
        className="carouselMain"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default ProjectCarousel