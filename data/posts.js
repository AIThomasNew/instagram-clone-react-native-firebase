import { USERS } from './users'
export const POSTS = [
  {
    imageUrl:
      'https://n1s1.starhit.ru/b7/1f/17/b71f1782b68024023e6ffbecbb9c3e93/368x460_0_af73000fee063afed9e94cd5ea95fa11@1080x1350_0xac120003_427074741649170393.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Snoop Dog',
        comments: 'WTF??',
      },
      {
        user: 'Slim Shady',
        comments: 'OMG',
      },
    ],
  },
  {
    imageUrl:
      'https://n1s1.starhit.ru/b7/1f/17/b71f1782b68024023e6ffbecbb9c3e93/368x460_0_af73000fee063afed9e94cd5ea95fa11@1080x1350_0xac120003_427074741649170393.jpg',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Snoop Dog',
        comments: 'WTF??',
      },
      {
        user: 'Slim Shady',
        comments: 'OMG',
      },
    ],
  },
]
