import React from 'react'

import { Card } from 'antd';

const { Meta } = Card;

interface props{
  items : {
    _id:string,
    name:string,
    category:string,
    price:number,
    image:string
  }
}


const ItemList:React.FC<props> = ({items}) => {
  
  return (
    <div className="carddeck">    
      <Card hoverable key={items._id} style={{ width: 240, margin: '20px' }} cover={<img alt="example" src={items.image} />} >
        <Meta title={items.name} description={items.category} />
      </Card>
    </div>
  )
}

export default ItemList