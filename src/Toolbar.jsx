// Toolbar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'TOOL';

const Text = () => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { id: 'text' },
  });

  return <div ref={drag}>Text</div>;
};

const Image = () => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { id: 'image' },
  });

  return <div ref={drag}>Image</div>;
};

const Toolbar = () => {
  return (
    <div className='flex gap-5' style={{minWidth:"20vw"}} >
      <Text />
      <Image />
    </div>
  );
};

export default Toolbar;
