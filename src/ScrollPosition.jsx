import { useState, useLayoutEffect } from "react";

export default function ScrollPosition() {
  const [pos, setPos] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => setPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <p>Scroll Y: {pos}px</p>;
}
