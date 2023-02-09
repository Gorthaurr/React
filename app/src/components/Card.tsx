import { Card } from 'antd';
import {FC} from 'react'

interface Props {
  id?: number;
  title: string;
  content: string;
  price?: number
  onClick?: React.MouseEventHandler<HTMLDivElement> 
}

const MyCard: FC<Props> = ({title, content, price, onClick}) => {
  return (
    <Card title={title} style={{ width: 300, textAlign: 'center', marginLeft: '100px'}} onClick={onClick}>
      <p>{content}</p>
      <p>{price}</p>
    </Card>
  );
}

export default MyCard;