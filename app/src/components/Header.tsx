import React from 'react';
import { Card as AntCard } from 'antd';

interface CardProps {
  text: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ text, imageUrl }) => {
  return (
    <AntCard
      cover={<img src={imageUrl} alt="Card" />}
      style={{ width: 300 }}
    >
      <AntCard.Meta
        title={text}
      />
    </AntCard>
  );
}

export default Card;
