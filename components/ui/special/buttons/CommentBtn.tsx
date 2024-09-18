import { GiScrollQuill } from "react-icons/gi";
import { Button } from "../../button";

const CommentButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="relative px-4 py-2 bg-black text-neon-yellow border-2 border-neon-yellow rounded-lg overflow-hidden transition-transform transform-gpu active:scale-95 hover:bg-neon-yellow hover:text-black hover:border-black"
    >
      <GiScrollQuill className="inline-block mr-2" />
      Comment
      <span className="absolute inset-0 bg-neon-yellow opacity-30 blur-sm -z-10 transition-transform transform scale-125"></span>
    </Button>
  );
};

export default CommentButton;
