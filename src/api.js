const API_URL = 'https://dummyjson.com'

export const getUsers = async () => {
    const responce = await fetch(`${API_URL}/users`);
    const {users} = await responce.json();
    return users;
}

export const getUsersId = async (id) => {
    const responce = await fetch(`${API_URL}/users/${id}`);
    const data = await responce.json();
    return data;
}

export const login = async (credentials) => {
    return fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      }).then((res) => res.json());
}