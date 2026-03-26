import { useState, useEffect } from "react";

const phrases = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Building Saarthi – OS assistant",
  "Innovating with AgroSense AI",
  "Computer Science Student @ GEHU",
];

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="animate-glow-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
