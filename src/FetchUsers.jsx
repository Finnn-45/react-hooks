import { useState, useEffect } from "react";

    export default function FetchUsers() {
        const [users, setUsers] = useState([]);
        
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
        }, []);

       return ( 
        <section>
            <div>
                <h1>FetchUsers</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>

                    </section>
    );
    }
