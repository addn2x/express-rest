console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');


function getUser(id) {
    setTimeout(() => {
        console.log('Please wait');
        return {
            id: 1, 
            name: 'John' 
        };
    }, 2000);
}