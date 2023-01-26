import { Card } from 'antd';
import {FC} from 'react'

interface Props {
  title: string;
  content: string;
  onClick?: () => void;
}

const MyCard: FC<Props> = ({title, content, onClick}) => {
  return (
    <Card title={title} style={{ width: 300, textAlign: 'center', margin: '10px'  }} onClick={onClick}>
      <p>{content}</p>
    </Card>
  );
}

export default MyCard;