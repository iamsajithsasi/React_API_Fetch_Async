import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

export default function About() {
    useEffect(() => {
        fetchitems();
      }, []);
      const [item, setItem] = useState([]);
      
      const fetchitems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
    
        const array = await data.json();
        setItem(array);
      }
      console.log(item);
    return (
        <div className="nameList">
            <h1>List of names</h1>
            {item.map((data, index) => (
                <>
                <Link to={`/shop/${index}`} key={index}>
                    <span>{data.name}</span> 
                </Link>
                </>
            ))}
        </div>
    )
}