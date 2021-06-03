import { useEffect, useState } from "react";



const useFetch = (url, options) => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    useEffect(()=> {

        const getFetch = async () => {

            try {
                const res = await fetch(url, options);
                const data = await res.json();
                setResponse(data);
                
            } catch (error) {
                setError(error);
            }
        }

        getFetch();

    }, []);

    return { response, error };
};

export { useFetch };