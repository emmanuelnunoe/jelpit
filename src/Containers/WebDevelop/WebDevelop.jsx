import React from 'react';
import SectionLeft from '../SectionLeft/SectionLeft';
const WebDevelop = () => {
  const webDetails = [
    {
      title: 'Desarrollo web',
      Description: '',
      img=''
    },
  ];

  return (
    <div>
      <SectionLeft
        title={webDetails.title}
        Description={webDetails.Description}
        img={webDetails.img}
      ></SectionLeft>
    </div>
  );
};

export default WebDevelop;
