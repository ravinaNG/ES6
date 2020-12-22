//Contrary to the 'var' the 'let' and 'const' keywords support the declaration of local scope iside block statement

if(true){
    //this 'if' condition block doesn't create a scope
    
    //name is in the global scope because of the 'var' keyword
    var name = 'Hammad';

    //likes is in the local scope because of the 'let' keyword
    let likes = 'Coding';

    //skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript and PHP' 
}

console.log(name); //logs 'Hammad'
console.log(likes); //Uncaught ReferenceError: likes is not defined
console.log(skills); //Uncaugth ReferenceError: skills is not defined


//Global scope lives as long as your application lives. Local scope lives as long as your functions are calles and execute.
