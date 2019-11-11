import React, { useState } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import { connect } from 'react-redux';

const items = [
  {
    src: '1',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '2',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '3',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
  ,
  {
    src: '4',
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const SliderPlanets = ({planets}) => {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

   

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

const mapStateToProps = state => {

  return ({
      lang: state.lang,
      currentCharacter: state.currentCharacter
  })
};


export default connect(mapStateToProps)(SliderPlanets);


