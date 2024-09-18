import { MdEnergySavingsLeaf } from 'react-icons/md';
import { Button } from '../../button'; 
import { useState } from 'react';

const LeafButton = () => {
    const [leafed, setLeafed] = useState(false);
  
    const toggleLeaf = () => {
      setLeafed((prev) => !prev);
    };
  
    return (
      <Button
        onClick={toggleLeaf}
        className={`relative px-4 py-2 ${
          leafed ? 'bg-neon-green text-black' : 'bg-black text-neon-green'
        } border-2 border-neon-green rounded-lg overflow-hidden transition-transform transform-gpu active:scale-95 hover:bg-neon-green hover:text-black hover:border-black`}
      >
        <MdEnergySavingsLeaf className="inline-block mr-2" />
        {leafed ? 'Leafed' : 'Leaf'}
        <span className="absolute inset-0 bg-neon-green opacity-30 blur-sm -z-10 transition-transform transform scale-125"></span>
      </Button>
    );
  };
  
  export default LeafButton;