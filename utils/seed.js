const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const userData = [
  {
    username: "nikolajokic15",
    email: "droppingdimes20@aol.com",
  },
  {
    username: "jamalmurray27",
    email: "bluearrow@bubble.com",
  
  },
  {
    username: "yeahm1ke",
    email: "michaelchampionjr@gmail.com",
  },
];

const thoughtData = [
  {
    thoughtText: "I hope it's nice when I get home so I can go in swimming pool",
    username: "nikolajokic15",
    reactions: [
      {
        reactionBody: "You better not throw me in this time",
        username: "jamalmurray27",
      },
      {
        reactionBody: "My jumpshot is wetter than the swimming pool",
        username: "yeahm1ke",
      }
    ]
  },
  {
    thoughtText: "We were ready for this",
    username: "jamalmurray27",
    reactions: [
      {
        reactionBody: "I was just ready to go home, brother",
        username: "nikolajokic15",
      }
    ],
  },
  {
    thoughtText: "On the court, I've never met a shot I don't like",
    username: "yeahm1ke",
    reactions: [
      {
        reactionBody: "Please go get vaccinated",
        username: "jamalmurray27"
      }
    ]
  }];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length > 0 ) {
    await connection.db.dropCollection('users');
  }
  
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length > 0) {
    await connection.db.dropCollection('thoughts');
  }

  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.info('Seeding complete');
  process.exit(0);
});
