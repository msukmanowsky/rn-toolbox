import { useState, useEffect } from "react";
import queryString from "query-string";
const useRandomUsers = ({ results = 10, gender = "any", format = "json", apiVersion = "1.3", passwords, seed, nationalities, }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const query = queryString.stringify({
            gender,
            passwords,
            format,
            nationalities,
            results,
            seed,
        });
        fetch(`https://randomuser.me/api/${apiVersion}/?${query}`)
            .then(response => response.json())
            .then(response => {
            const users = response.results;
            setUsers(users);
        });
    }, []);
    return users;
};
export default useRandomUsers;
