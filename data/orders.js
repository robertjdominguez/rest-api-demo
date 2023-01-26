// all of our orders

const orders = [
  {
    id: 1,
    userId: 2,
    createdAt: '3:14pm',
    items: [
      {
        id: 1,
        quantity: 2,
      },
      {
        id: 2,
        quantity: 1,
      },
      {
        id: 3,
        quantity: 3,
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    createdAt: '3:20pm',
    items: [
      {
        id: 2,
        quantity: 2,
      },
      {
        id: 3,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    createdAt: '3:22pm',
    items: [
      {
        id: 1,
        quantity: 1,
      },
    ],
  },
];

module.exports = orders;
