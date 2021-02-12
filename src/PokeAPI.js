import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokeAPI = () => {
    const [pokeData, setPokeData] = useState([]); // <-- holds the team
    const [pokemon, setPokemon] = useState(""); // <-- dynamic endpoint manipulator
    const [isSearching, setIsSearching] = useState(false);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; 

    useEffect(() => {
        // if (!isSearching) {
        //     return true;
        // } --> getting rid of "isSearching" helps
        axios.get(url)
        .then((res) => {
            console.log(pokeData);
            setPokeData(res.data);
            setIsSearching(false);
        })
        .catch(err => console.log(err))
    }, [isSearching]) 

    return (
        <div>
            <input
                type="text"
                placeholder="Pokemon's NAME/Pokedex No."
                onChange={(e) => {
                    setPokemon(e.target.value)
                }}
                value={pokemon}
                
            />
            <button onClick={() => setIsSearching(true)}>Search</button>
            {/* {pokeData.map((data) => {
                return (
                    <>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    </>
                )
            })} */}
        </div>
    )
}

const ShowData = ({name, types}) => {
    return (
        <>
            <h1>{name}</h1>
            <p>Type: {types} </p>
        </>
    );
}

export default PokeAPI

// https://pokeapi.co/api/v2/pokemon/${pokemon}/
//`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`