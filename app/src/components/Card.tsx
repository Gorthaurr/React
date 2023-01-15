import { Card } from 'antd';
import {FC} from 'react'

interface Props {
  title: string;
  content: string;
}

const MyCard: FC<Props> = ({title, content}) => {
  return (
    <Card title={title} style={{ width: 300 }}>
      <p>{content}</p>
    </Card>
  );
}

export default MyCard;