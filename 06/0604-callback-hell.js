console.log();

console.log('Before');
getUser(1, (user) => {
    console.log(user);
    getRepo(user, (repo) => {
        console.log(repo);
        getCommits(repo, (commits) => {
            console.log(commits);
        });
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user...');
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
        console.log('Getting repositories...');
        callback(
            ['repository 1', 'repository 2', 'repository 3']
        );
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting commits...');
        callback(
            'Commit 1'
        );
    }, 2000);
}