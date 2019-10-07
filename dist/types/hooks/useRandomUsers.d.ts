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
declare type Gender = "male" | "female" | "any";
declare type Nationality = "AU" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FI" | "FR" | "GB" | "IE" | "IR" | "NO" | "NL" | "NZ" | "TR" | "US";
interface RandomUserOptions {
    results: number;
    gender: Gender;
    apiVersion: string;
    passwords?: string;
    seed?: string;
    format?: "json" | "pretty" | "csv" | "yaml" | "xml";
    nationalities?: Nationality[];
}
declare const useRandomUsers: ({ results, gender, format, apiVersion, passwords, seed, nationalities, }: RandomUserOptions) => RandomUser[];
export default useRandomUsers;
//# sourceMappingURL=useRandomUsers.d.ts.map