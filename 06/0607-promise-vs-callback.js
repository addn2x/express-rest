console.log();

console.log('Callback before');
getUser(1, (user) => {
    console.log(`User -> ${user.name}`);
    getRepository(user, (repository) => {
        console.log(`Repository -> ${repository}`);
        getCommits(repository, (commits) => {
            console.log(`Commits -> ${commits}`);
        });
    });
});
console.log('Callback after');
console.log();
console.log();
console.log();
console.log('Promise before');

getUserPromise(1)
    .then((user) => { 
        console.log(`User promise -> ${user.name}`);
        getRepositoryPromise(user)
            .then((repo) => { 
            console.log(`Repositories promise -> ${repo}`);
            getCommitsPromise(repo) 
                .then((commits) => {
                    console.log(`Commits promise -> ${commits}`);
                });       
        });
    });

console.log('Promise after');
console.log();
console.log();
console.log();

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

function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user promise');
            resolve(
                {
                    id: id,
                    name: 'John'
                }
            );
        }, 3000);
    });
}

function getRepository(user, callback) {
    setTimeout(() => {
        console.log('Getting repository...');
        callback(['repo 1', 'repo 2', 'repo 3']);
    }, 2000);
}

function getRepositoryPromise(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repository promise');
            resolve(['repo1', 'repo2', 'repo3']);
        } , 3000);
    });
}

function getCommits(repository, callback) {
    setTimeout(() => {
        console.log('Getting commits...');
        callback('My commits');
    }, 2000);
}

function getCommitsPromise(commits) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commits promise');
            resolve('My commits promise'); 
        }, 3000);
    });
}