//  stack memory (Primitive), Heap memory (Non-primitive)
let myName="Ashay";

let anotherName=myName;
console.log(myName);
console.log(anotherName);
// hence this is store is stack one by one
// first myName value is stored
// then anotherName value is on top


let user={
    email:"abcd@gmail.com",
    upi:"user@ybl"
}
let userTwo= user;
userTwo.email="ashay@gmail.com"
console.log(user.email);
console.log(userTwo.email);

// here in heap user 1 points the pointer to user object values.
// userTwo = user means userTwo also points to the same value without duplicating value
// if any changes in userTwo, user1 also get updated