import React, { useEffect, useState } from 'react'

export default function Shop(props) {
    
    const userId = props.match.params.id
    console.log(userId)
    useEffect(() => {
        fetchUser();
    }, [])

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const array = await data.json();
            setUser(array);
        } catch(err) {
            console.log(err);
        }
    }
    console.log(user)

    return (
        <div>
            {user.map((user, index) => (
                <div key={index}>
                <br/>
                <p>{`No. ${index}`}</p>
                <h4>{user.title}</h4>
                <p>{user.body}</p>
                <hr/>
                <br/>
                </div>
            ))}
        </div>
    )
}
