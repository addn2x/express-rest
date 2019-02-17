// console.log();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUser');
            resolve({
                id: id,
                name: 'John'
            });
        }, 2000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getRepo');
            resolve(['Repo 1', 'Repo 2', 'Repo 3']);
        }, 2000);
    });
}

function getCommit(repository) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getCommit');
            resolve('my commit');
        }, 2000);
    });
}

// Promise
getUser(1)
    .then((user) => {
        console.log(`${user.id} - ${user.name}`);
        getRepo(user)
            .then((repository) => {
                console.log(`${repository}`);
                getCommit(repository[0])
                    .then((commit) => {
                        console.log(`${commit}`);
                    });
            });
    });

// Async/await
async function display() {
    const user = await getUser(1);
    const repo = await getRepo(user.name);
    const commit = await getCommit(repo[0]);
    console.log(`${user.id} - ${user.name} - ${repo} - ${commit}`);
}

setTimeout(() => {
    display();
}, 6000);