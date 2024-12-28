const user={
    username:"Ashay",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`)     //here this will read the username from its parent scope that is user ={ }.
    }
}
user.welcomeMessage();
user.username="sam";        //this will update form current username
user.welcomeMessage();
