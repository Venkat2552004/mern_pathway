const {MongoClient} = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);

connectToDB = async() => {
    await client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
};

async function addUser(user){
    await connectToDB();
    const db =  client.db('lowcode');
    const users =  db.collection('users');
    if(await users.findOne({githubId: user.githubId})){
        console.log('User already exists');
        return;
    }
    await users.insertOne(user)
        .then((result) => {
            console.log(`User added and the id is ${result.insertedId}`);
        })
}

async function getUserByGitHubId(id){
    await connectToDB();
    const db =  client.db('lowcode');
    const users =  db.collection('users');
    console.log(await users.findOne({githubId: id}));
    
}

addUser({
    "githubId" : '999999',
    "username" : 'Mahesh2004',
    "displayName" : 'Venkata Mahesh',
})
.catch(err => {
    console.error('Error adding user', err);
});

getUserByGitHubId('999999')
    .catch(err => {
        console.error('Error getting user', err);
    });

client.close();