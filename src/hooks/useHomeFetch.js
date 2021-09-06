
import { useState, useEffect, useRef} from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log("Search: ");
    console.log(searchTerm);

    const fetchMovies = async(page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            setState((prev) => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
            console.log('fetched');

            setLoading(false);
        }catch(error){
            setError(true);
        }
    }

//initial and search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //Load more
    useEffect(() => {
        console.log("Effect ");
        if(!isLoadingMore){
            return;
        }
        console.log("Fetch movies");
        fetchMovies(state.page + 1, searchTerm);
        console.log("loading false");
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
