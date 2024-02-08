import React from 'react';

type Props ={
  title: string,
  text: string
}

const TextDes = ({ title, text } : Props) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default TextDes;