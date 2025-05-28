'use client';

import { useState } from 'react';

export default function DragDropList() {
  const [items, setItems] = useState(['🍎 Apple', '🍌 Banana', '🍇 Grape', '🍊 Orange']);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index); 
    console.log('index in handleDragStart is : ',index)
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 필수!
  };

  const handleDrop = (index: number) => {
      console.log('index in handleDrop is  : ',index)
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...items];
    const [movedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, movedItem);

    setItems(newItems);
    setDraggedIndex(null);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Drag & Drop 정렬</h1>
      {items.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          className="p-3 mb-2 bg-white border rounded shadow cursor-move hover:bg-gray-50"
        >
          {item}
        </div>
      ))}
      <div draggable  >this for test!</div>
    </div>
  );
}
