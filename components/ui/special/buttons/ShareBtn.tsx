"use client";
import { useState } from "react";
import { FaMixcloud } from "react-icons/fa";
import { Button } from "../../button";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      {/* Share Button */}
      <Button
        onClick={() => setShowModal(true)}
        className="relative px-4 py-2 bg-black text-neon-pink border-2 border-neon-pink rounded-lg overflow-hidden transition-transform transform-gpu active:scale-95 hover:bg-neon-pink hover:text-black hover:border-black"
      >
        <FaMixcloud className="inline-block mr-2" />
        Share
        <span className="absolute inset-0 bg-neon-pink opacity-30 blur-sm -z-10 transition-transform transform scale-125"></span>
      </Button>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold text-center text-foreground dark:text-white">
              Copy to Clipboard
            </h2>
            <p className="mt-2 text-sm text-center text-muted-foreground dark:text-gray-400">
              {url}
            </p>

            <div className="mt-4 flex justify-center">
              <Button
                onClick={copyToClipboard}
                className={`flex items-center px-4 py-2 rounded-md text-white ${
                  copied ? "bg-green-500" : "bg-neon-pink"
                } transition-colors duration-300`} title="Copy to Clipboard"
              >
                {copied ? (
                  <TbCopyCheckFilled className="text-xl" />
                ) : (
                  <TbCopy className="text-xl" />
                )}
              </Button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-neon-pink hover:text-white hover:bg-neon-pink rounded-full p-2 transition-colors duration-300" title="Close"
            >
              <CgClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
