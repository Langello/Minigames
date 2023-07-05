import { useEffect, useState } from "react";

const WORDS = [
    'banana',
    'cherry',
    'dragon',
    'flower',
    'guitar',
    'honest',
    'island',
    'jacket',
    'kettle',
    'laptop',
    'marvel',
    'nectar',
    'orchid',
    'pencil',
    'quartz',
    'rocket',
    'shadow',
    'tennis',
    'unique',
    'vision',
    'window',
    'yellow',
    'zodiac',
    'airport',
    'balcony',
    'carpets',
    'delight',
    'elephant',
    'fireman',
    'gallery',
    'harmony',
    'insects',
    'journey',
    'kangaro',
    'lantern',
    'monster',
    'nursery',
    'october',
    'package',
    'quality',
    'rabbit',
    'sailing',
    'tropical',
    'umbrella',
    'velvet',
    'warrior',
    'xylophone',
    'yogurt',
    'zombie',
    'baseball',
    'captain',
    'dolphin',
    'elegant',
    'football',
    'garden',
    'hiking',
    'imagine',
    'justice',
    'kitchen',
    'lioness',
    'mountain',
    'november',
    'opposite',
    'penguin',
    'quicken',
    'rainbow',
    'soldier',
    'thunder',
    'unicorn',
    'village',
    'wander',
    'x-ray',
    'yawning',
    'zeppelin',
    'adventure',
    'beautiful',
    'chocolate',
    'discovery',
    'education',
    'fantastic',
    'generation',
    'happiness',
    'incredible',
    'journey',
    'knowledge',
    'landscape',
    'mysterious',
    'navigation',
    'outstanding',
    'paradise',
    'quotation',
    'radiant',
    'spectacular',
    'terrific',
    'ultimate',
    'valuable',
    'wonderful',
    'xenophobia',
    'yearning',
    'zestful'
];

export default function WordsPerMinute (){
    const [word, setWord] = useState(() => WORDS [(Math.random() * WORDS.length) | 0]);
    const [characterCount, setCharacterCount] = useState (0);
    const [buffer, setBuffer] = useState ("");
    const[time, setTime] = useState(0);

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

    if (buffer == word){
        setWord(WORDS[(Math.random() * WORDS.length) | 0]);
        setCharacterCount((characterCount) => characterCount + word.length);
    }
    setBuffer("");
    }


    useEffect (() => {
        if (time != 0){
            const timeout = setTimeout (() => setTime (time - 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [time]);
    
    return (
        <div style={{margin:'35px',display: "flex", flexDirection:"column", gap: 12, textAlign: "center"}}>
        {Boolean(time) &&  <h1 style={{fontSize: 48}}>{word}</h1>}
        <h2 style={{fontSize: 48}}>Characters typed: {characterCount}</h2>
        <h3 style={{fontSize: 38}}>Remaining time: {time}</h3>
        {time ? (
            <form onSubmit={handleSubmit}>
            <input style={{fontSize: 38}} type="text" autoFocus value={buffer} onChange={(e) => setBuffer (e.target.value)}></input>
        </form>
        ) : (
            <button onClick={() => setTime(60)} style={{fontSize:'35px', margin:'25px auto',width:"200px",}}>Play</button>
        )}
    </div>
    );
}