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
    <div className='flex justify-center items-center md:items-start gap-5 bg-blue-600 h-[15vh] md:h-screen w-full md:w-[20vh]'  >
      <div className='bg-orange-400 py-2 px-8 rounded-md cursor-move'>
      <Text />
      </div>
      <div className='bg-orange-400 py-2 px-8 rounded-md cursor-move'>
      <Image />
      </div>
    </div>
  );
};

export default Toolbar;
