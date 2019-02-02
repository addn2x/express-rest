



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

function getRepository(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repository');
            resolve(['Repo 1', 'Repo 2', 'Repo 3']);
        }, 2000);
    });
}

function getCommits(repository) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commit');
            resolve('My commit');
        }, 2000);
    });
}

/*
getUser(1)
    .then((user) => {
        console.log(`${user.id} - ${user.name}`);
        getRepository(user)
        .then((repository) => {
            console.log(`${repository}`);
            getCommits(repository)
            .then((commit) => {
                console.log(`${commit}`);
            });
        });
    });
*/


async function display() {
    const user = await getUser(1);
    const repository = await getRepository(user);
    const commit = await getCommits(repository);
    console.log(`${user.id} - ${user.name} - ${repository} - ${commit}`);
}

display();
