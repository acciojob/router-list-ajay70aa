
import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './data';

function ItemDetail() {
  const { id } = useParams();
  const item = items.find(i => i.id === id);

  if (!item) return <h1>Item not found</h1>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
