
async function start() {
    const user = await getUser(1);
    const repository = await getRepository(user);
    const commit = await getCommits(repository);
    console.log(`${user.name} -> ${repository} -> ${commit}`);
}

start();

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`get user`);
            resolve({
                id: id,
                name: 'John'
            });
        }, 2000);
    });
}

function getRepository(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`get repository`);
            resolve(['repo 1', 'repo 2', 'repo 3']);
        }, 2000);
    });
}

function getCommits(repository) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`get commits`);
            resolve('my commits');
        }, 2000);
    });
}