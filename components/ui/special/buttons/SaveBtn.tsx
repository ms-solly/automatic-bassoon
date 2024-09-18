import { useState } from 'react';
import { CiSaveDown1 } from 'react-icons/ci';
import { Button } from '../../button';


const SaveButton = () => {
    const [saved, setSaved] = useState(false);
  
    const toggleSave = () => {
      setSaved((prev) => !prev);
    };
  
    return (
      <Button
        onClick={toggleSave}
        className={`relative px-4 py-2 ${
          saved ? 'bg-neon-yellow text-black' : 'bg-black text-neon-yellow'
        } border-2 border-neon-yellow rounded-lg overflow-hidden transition-transform transform-gpu active:scale-95 hover:bg-neon-yellow hover:text-black hover:border-black`}
      >
        <CiSaveDown1 className="inline-block mr-2" />
        {saved ? 'Saved' : 'Save'}
        <span className="absolute inset-0 bg-neon-yellow opacity-30 blur-sm -z-10 transition-transform transform scale-125"></span>
      </Button>
    );
  };
  
  export default SaveButton;