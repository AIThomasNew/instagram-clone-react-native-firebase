import { USERS } from './users'
export const POSTS = [
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Snoop Dog',
        comments: 'Wow! Hello People!',
      },
      {
        user: 'Slim Shady',
        comments: 'Hello Doggy!',
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Snoop Dog',
        comments: 'Wow! Hello People!',
      },
      {
        user: 'Slim Shady',
        comments: 'Hello Doggy!',
      },
    ],
  },
]
