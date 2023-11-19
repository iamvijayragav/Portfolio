import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HorizontalScroll.css';
import Card from './Card';

const HorizontalScroll = () => {
  const data = [
    {

      id:1,
      name: 'Vijayaragavan B',
      title: 'Lyceum Hub',
      position: 'Software Developer',
      content: 'Developed a website which displays the list and information about the AnnaUniversity affiliated colleges in Tamil Nadu through map. The user need tocontact details regarding administration and all',
  }, {
      id:2,
      name: 'Vijayaragavan B',
      title: 'Portfolio Using React',
      position: 'Developed by me',
      content: 'Dedicated React developer with a passion for creating seamless user experiences. My portfolio showcases innovative projects, blending creativity with technical expertise. Let\'s build something extraordinary together!'
    }, {
      id: 3,
      name: 'Vijayaragavan B',
      title: 'ViMoMa the Virtual Assistant',
      position: 'Developed by me',
      content: 'ViMoMa, the Virtual Assistant, revolutionizes productivity with seamless automation. Tailored for efficiency, ViMoMa simplifies tasks, streamlines workflows, and enhances user experience. Experience the future of assistance.'
    }
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10068,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="horizontal-scroll-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="scroll-item">
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              name={item.name}
              position={item.position}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroll;
