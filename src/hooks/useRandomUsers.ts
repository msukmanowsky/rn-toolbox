import { useState, useEffect } from "react";
import _ from "lodash";
import queryString from "query-string";

interface RandomUser {
  gender: Gender;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: string;
  };
  registered: {
    date: string;
    age: string;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: Nationality;
}
type Gender = "male" | "female" | "any";
type Nationality =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IR"
  | "NO"
  | "NL"
  | "NZ"
  | "TR"
  | "US";
interface RandomUserOptions {
  apiVersion?: string;
  format?: "json" | "pretty" | "csv" | "yaml" | "xml";
  gender?: Gender;
  nationalities?: Nationality[];
  passwords?: string;
  results?: number;
  seed?: string;
}

const useRandomUsers = (options: RandomUserOptions) => {
  const {
    apiVersion = "1.3",
    format = "json",
    gender = "any",
    nationalities,
    passwords,
    results = 10,
    seed,
  } = options;
  const [users, setUsers] = useState<RandomUser[]>([]);
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
        const users = response.results as RandomUser[];
        setUsers(users);
      });
  }, []);

  return users;
};

export default useRandomUsers;
