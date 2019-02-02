
console.log('Before');
getUser(1, (user) => {
    console.log(`Id: ${user.id} Name: ${user.name}`);
    getRepository(user, (repository) => {
        console.log(`Repositories: ${repository}`);
        getCommits(repository, (commits) => {
            console.log(`Commits: ${commits}`);
        });
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user');
        callback({
            id: id,
            name: 'John'
        });
    }, 2000);
}

function getRepository(user, callback) {
    setTimeout(() => {
        console.log('Getting repository');
        callback(['repo 1', 'repo 2', 'repo 3']);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        console.log('Getting commits');
        callback('My commits');
    }, 2000);
}