console.log('Before');
const user = getUser(1, (user) => {
    console.log('User ', user);
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database....');
        callback(
            {
                id: id,
                name: 'John'
            }
        );
    }, 2000);
}
