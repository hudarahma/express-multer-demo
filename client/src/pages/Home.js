
import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import { useFetch } from '../hooks/authHooks';


function Home() {
    // const { response, error } = useFetch('http://localhost:3002/api/v1/users', {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: 'jnae@email.com',
    //         password: '$2b$10$G7EMd98mx3gCgsQyKYijTO6gAwMrDNYKuU9nOhs0fBwq1xGk1dgj.',

    //     }),
    //     headers: {
    //         'Content-type': 'application/JSON',
    //     }
    // });
    useEffect(() => {
        
    },[])
    return (
        <div>
            {/* <h1>{console.log(response)}</h1> */}
            <h1>Home</h1>
        </div>
    )
}


// const Home = styled.div`

//     background-color: 'blue';
//     font-weight: ${({weight}) => weight};
// `;


export default Home
