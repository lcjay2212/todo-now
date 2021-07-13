export const USERNAME = `
*[_type == "username"]{
    username,
    _id,
    content
}`;

export const USERNAME_IDS = `
*[_type == "username"]{
    _id,
}`;

export const USERNAME_BY_ID = `
*[_type == "username" && _id == $_id]{
    username,
    _id,
    content
}`;
