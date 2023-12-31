// // Website.js
// import React, { useState } from 'react';
// import { useDrop } from 'react-dnd';

// const Website = () => {
//   const [elements, setElements] = useState([]);

//   const [, drop] = useDrop({
//     accept: 'TOOL',
//     drop: (item) => {
//       setElements((prevElements) => [...prevElements, { type: item.id, content: '' }]);
//     },
//   });

//   const handleSave = () => {
//     console.log('Saved Elements:', elements);
//   };

//   return (
//     <div>
//       <div className='relative bg-purple-600 flex justify-center items-center' ref={drop} style={{ border: '1px solid #ccc', minHeight: '100vh', minWidth:'70vw' }}>
//        <button className='right-4 top-4 bg-green-400 py-2 px-5 rounded-md text-white font-semibold absolute' onClick={handleSave}>Save</button>
//         {elements.map((element, index) => (
//           <div key={index}>
//             {element.type === 'text' ? (
//               <input
//                 type="text"
//                 value={element.content}
//                 onChange={(e) => {
//                   const updatedElements = [...elements];
//                   updatedElements[index].content = e.target.value;
//                   setElements(updatedElements);
//                 }}
//               />
//             ) : (
//               <img src={element.content} alt="Image" />
//             )}
//           </div>
//         ))}
//       </div>
     
//     </div>
//   );
// };

// export default Website;

// Website.js
// Website.js
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';

const Website = () => {
  const [elements, setElements] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    // Load saved elements from local storage on mount
    const savedElements = JSON.parse(localStorage.getItem('websiteElements')) || [];
    setElements(savedElements);
  }, []);

  const [, drop] = useDrop({
    accept: 'TOOL',
    drop: (item) => {
      setElements((prevElements) => [...prevElements, { type: item.id, content: '' }]);
    },
  });

  const handleTextChange = (index, newText) => {
    const updatedElements = [...elements];
    updatedElements[index].content = newText;
    setElements(updatedElements);
  };

  const handleImageChange = (index, newImage) => {
    const updatedElements = [...elements];
    updatedElements[index].content = newImage;
    setElements(updatedElements);
  };

  const handleImagePreview = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSave = () => {
    console.log('Saved Elements:', elements);
    localStorage.setItem('websiteElements', JSON.stringify(elements));
  };
  return (
    <div>
      <div className='relative bg-purple-600 flex flex-col gap-5  justify-center items-center' ref={drop} style={{ border: '1px solid #ccc', minHeight: '100vh', minWidth:'70vw' }}>
       <button className='right-4 top-4 bg-green-400 py-2 px-5 rounded-md text-white font-semibold absolute' onClick={handleSave}>Save</button>
       {elements.map((element, index) => (
          <div key={index}>
            {element.type === 'text' ? (
              <input
                type="text"
                value={element.content}
                onChange={(e) => handleTextChange(index, e.target.value)}
                className='py-2 px-3 rounded-md'
                placeholder='Enter your text... '
              />
            ) : (
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    const reader = new FileReader();
                    const file = e.target.files[0];
                    reader.onloadend = () => {
                      handleImageChange(index, reader.result);
                      handleImagePreview(index);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                {selectedImageIndex === index && (
                  <img src={element.content} alt="Image Preview" style={{ maxWidth: '100px' }} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Website;
