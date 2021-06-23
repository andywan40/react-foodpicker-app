import {useState, useEffect} from "react";
import usePersistedState from "./usePersistedState";
// import axios from "axios";

const useFetchCuisine = (url, cuisine) => {
    console.log(url)
    const newDishes = [];
    const totalPages = 1000000;
    const [state, setState] = useState({ newDishes, totalPages, loading: true});

    useEffect( ()=> {
        setState(state => ({ newDishes, totalPages,loading: true}));
        fetch(url)
            .then( data => data.json())
            .then( data => {
                console.log(data);
                const newDishes = data.results;
                const newTotalPages = data.total_pages;
                setState({ newDishes, totalPages: newTotalPages, loading: false}); 
            })
            .catch( e => alert(e));
    }, [url, cuisine]);

    return state;
}

export default useFetchCuisine;