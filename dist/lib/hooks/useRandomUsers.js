import { useState, useEffect } from "react";
import _ from "lodash";
import queryString from "query-string";
const defaultOptions = {
    results: 10,
    gender: "any",
    format: "json",
    apiVersion: "1.3"
};
const useRandomUsers = (options) => {
    const finalOptions = Object.assign(Object.assign({}, options), defaultOptions);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const query = queryString.stringify(_.pick(finalOptions, [
            "gender",
            "passwords",
            "format",
            "nationalities",
            "results"
        ]));
        fetch(`https://randomuser.me/api/${finalOptions.apiVersion}/?${query}`)
            .then(response => response.json())
            .then(response => {
            const users = response.results;
            setUsers(users);
        });
    });
    return users;
};
export default useRandomUsers;
