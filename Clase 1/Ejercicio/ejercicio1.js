/*
 Crear una función constructora llamada User que tenga las siguientes propiedades privadas: userId(Integer), username(string), name(string), surnam(string) y posts(array).Asimismo debe contar con un metodo publico para obterner todos los posts del usuario.
 */

const User = (_userId, _username, _name) => {
    const userId = _userId;
    const username = _username;
    const name = _name;
    const post = [];

    const getPosts = () => post;
    const addPosts = (newPost) => post.push(newPost); 
    // const getNombres = () => username;
    // const getLenghtPosts = () => post.length;
    const getUserAndPost = () => `${username} (${post.length})`;

    return {
        getPosts,
        addPosts,
        getUserAndPost
    };
};


const myUser =  User(1, "LaggerP", "Pablo");
myUser.addPosts('mi primer post');
myUser.addPosts('mi segundo post');
console.log(myUser.getPosts());
console.log(myUser.getUserAndPost());

//lo que esta comentado es otra forma de realizarlo

// const lengthPost = myUser.getLenghtPosts();
// const infoUser = `Nombre usuario: ${nombre} | Post: ${getPost} | Cantidad de posts: ${lengthPost}`;
// console.log(infoUser);j
