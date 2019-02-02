/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1); // pending => resolved, fulfilled
        reject(new Error('my error')); // pending => rejected
    }, 2000);

});


p
    .then(result => {
        console.log('My result', result);
    })
    .catch(error => {
        console.log('Error', error.message);
    });
*/

getUser(1)
    .then((user) => {
        getRepositories(user);
        console.log(`User -> ${user.name}`);
    })
    .then((repository) => {
        getCommits(repository);
        setTimeout(() => {
            console.log(`Repositories -> ${repository}`);
        }, 3000);
    })
    .then((commits) => {
        setTimeout(() => {
            console.log(`Commits -> ${commits}`);
        }, 3000);
    });
/*
getUser(1)
    .then((user) => { 
        console.log(`User promise -> ${user.name}`);
        getRepositories(user)
            .then((repo) => { 
            console.log(`Repositories promise -> ${repo}`);
            getCommits(repo) 
                .then((commits) => {
                    console.log(`Commits promise -> ${commits}`);
                });       
        });
    });
*/

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get user ');
            resolve({
                id: id,
                name: 'John'
            });
        }, 2000);
    });
}

function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get repositories ');
            resolve(['repo 1', 'repo 2', 'repo 3']);
        }, 2000);
    });
}

function getCommits(repository) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get commits ');
            resolve('my commits');
        }, 2000);
    });
}