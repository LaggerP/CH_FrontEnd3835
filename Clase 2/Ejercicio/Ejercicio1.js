/*
 Crear una función constructora llamada User que tenga las siguientes propiedades privadas: userId(Integer), username(string), name(string), surnam(string) y posts(array).Asimismo debe contar con un metodo publico para obterner todos los posts del usuario.
 */
class User {
    constructor(_userId, _username, _name, _surname, _post){
        this.userId = _userId;
        this.username = _username;
        this.name = _name;
        this.surname = _surname;
        this.post = [];
    }
    getPost(){
       return this.post;
    }
    addPost(newPost){
        this.post.push(newPost);
    }
    getUserAndPost(){
        return `${this.username} (${this.post.length})}`;
    }
}

const newUser = new User(1, "newUser", "Pablo", "Lagger");
newUser.addPost("Post Post Post");
newUser.addPost("Post2 Post2 Post2");

console.log(newUser.getPost());
console.log(newUser.getUserAndPost());



