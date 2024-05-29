import { useEffect, useState } from "react";
function Typewriter({ text, typingspeed = 100, deleteSpeed = 50 }) {
  const [displayedtext, setdisplayedtext] = useState("");
  const [isDeleting, setisDeleting] = useState(false);
  const [index, setindex] = useState(0);
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedtext.length < text[index].length) {
          setdisplayedtext(
            (prev) => prev + text[index].charAt(displayedtext.length)
          );
        } else {
          setisDeleting(true);
        }
      } else {
        if (displayedtext.length > 0) {
          setdisplayedtext((prev) => prev.slice(0, -1));
        } else {
          setisDeleting(false);
          setindex((prev) => (prev + 1) % text.length);
        }
      }
    };
    handleTyping();
    const handleDeleting = () => {
      const timeout = setTimeout(
        handleTyping,
        isDeleting ? deleteSpeed : typingspeed
      );
      return () => clearTimeout(timeout);
    };
    if (isDeleting) {
      handleDeleting();
    }
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingspeed
    );
  });
  return (
    <div className="typewritingeffect">
      text
      <span className="caret">|</span>
    </div>
  );
}
export default Typewriter;
