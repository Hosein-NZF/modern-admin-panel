export interface UserType {
    id: number;
    username: string;
    fullName: string;
    email: string;
    age: number;
    country: string;
}

const users: UserType[] = [
    {
        id: 1,
        username: 'user1',
        fullName: 'John Doe',
        email: 'user1@example.com',
        age: 25,
        country: 'USA'
    },
    {
        id: 2,
        username: 'user2',
        fullName: 'Jane Smith',
        email: 'user2@example.com',
        age: 30,
        country: 'Canada'
    },
    {
        id: 3,
        username: 'user3',
        fullName: 'Alice Johnson',
        email: 'user3@example.com',
        age: 28,
        country: 'UK'
    },
];

export default users;