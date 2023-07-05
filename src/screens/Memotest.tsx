import { useEffect, useState } from "react";

const IMAGES = [
  "https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ruby-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/java-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2 && selected[0] !== selected[1]) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length == IMAGES.length) {
      alert("You win!");
      location.reload();
    }
  }, [guessed]);

  const handleClick = (image: string) => {
    if (selected.length < 2 && !selected.includes(image)) {
      setSelected((selected) => [...selected, image]);
    }
  };

  return (
    <div className="contenedor">
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
          gap: 24,
        }}
      >
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              onClick={() => handleClick(image)}
              key={image}
              style={{
                cursor: "pointer",
                padding: 12,
                border: "1px solid #666",
                borderRadius: 12,
              }}
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img alt="icon" src={url} />
              ) : (
                <img
                  alt="icon"
                  src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
