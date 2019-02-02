console.log();

console.log('Before');
getUser(1, pUser);
console.log('After');

function pUser(user) {
    console.log(user);
    getRepo(user, pRepo);
}

function pRepo(repository) {
    console.log(repository);
    getCommits(repository, pCommits);
}

function pCommits(commits) {
    console.log(commits);
}


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