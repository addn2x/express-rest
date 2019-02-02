// console.log();

console.log('Before');
getUser(1, (user) => {
    console.log(`User ${user.name}`);
    getRepo(user, (repo) => {
        console.log(`Repo ${repo}`);
    });
});
console.log('After');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from a database...');
        callback(
            {
                id: id,
                name: 'John'
            }
        );
    }, 2000);
}

function getRepo(user, callback) {
    setTimeout(() => {
        console.log('Reading repo from a database...');
        callback(
            ['repo1', 'repo2', 'repo3']
        );
    });
}