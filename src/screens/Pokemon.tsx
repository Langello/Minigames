import { useState } from "react";
import Navbar from "./Navbar";

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran♀",
    "nidorina",
    "nidoqueen",
    "nidoran♂",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetch'd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr. mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"
  ];
  
  const MATCH = Math.floor(Math.random() * POKEMONS.length);

  type Form = HTMLFormElement & {
    pokemon: HTMLInputElement;
  }

export default function Pokemon (){
    const [hasWon, toggleWon] = useState(false);

    function handleSubmit (event: React.FormEvent<Form>) {
        event.preventDefault();

        const {pokemon} = event.currentTarget;

        if (pokemon.value.toLowerCase() == POKEMONS[MATCH]){
            toggleWon(true);
            alert("You won!");
        } else{
            alert("Wrong answer!");
        }
    }

    return (
        <><Navbar />
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
        }}>
            <img
                id="imgPokemon"
                height={412}
                style={{
                    imageRendering: "pixelated",
                    filter: hasWon ? "" : "brightness(0) invert(1)",
                }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
                alt="Pokemon"
                width={412} />
            {hasWon ? (
                <button onClick={() => location.reload()} style={{ display: "block" }}>
                    Play again
                </button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <p style={{ fontSize: 28, textAlign: 'center' }}>What is this pokemon called?</p>
                    <input autoFocus name="pokemon" type="text" />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div></>
    )
}