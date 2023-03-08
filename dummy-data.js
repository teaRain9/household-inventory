const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Adel Hosseini',
    userName: 'adel',
    isSignedIn: true,
  },
  {
    id: 'u2',
    name: 'Roujyar Darvish',
    userName: 'roujyar',
    isSignedIn: false,
  },
]

const DUMMY_SHOPS = [
  {
    id: 's1',
    name: 'Costco',
  },
  {
    id: 's2',
    name: 'Walmart',
  },
  {
    id: 's3',
    name: 'City Market',
  },
  {
    id: 's4',
    name: 'Super Store',
  },
  {
    id: 's5',
    name: 'Meat Shop',
  },

]

const DUMMY_ITEMS = [
  {
    id: 'i1',
    name: 'Hot Sauce',
    shoppingCenter: [
      DUMMY_SHOPS[0],
      DUMMY_SHOPS[1],
    ],
    pool: 'shopping-list',
    user: DUMMY_USERS[0].userName,
    isUrgent: false,
  },
  {
    id: 'i2',
    name: 'chicken breast',
    shoppingCenter: [
      DUMMY_SHOPS[0],
      DUMMY_SHOPS[4],
    ],
    pool: 'in-stock',
    user: DUMMY_USERS[0].userName,
    isUrgent: true,

  },
  {
    id: 'i3',
    name: 'ground beef',
    shoppingCenter: [
      DUMMY_SHOPS[1],
      DUMMY_SHOPS[4],
    ],
    pool: 'shopping-list',
    user: DUMMY_USERS[1].userName,
    isUrgent: true,
  },
  {
    id: 'i4',
    name: 'potato',
    shoppingCenter: [
      DUMMY_SHOPS[0],
      DUMMY_SHOPS[3],
    ],
    pool: 'shopping-list',
    user: DUMMY_USERS[0].userName,
    isUrgent: true,
  },
  {
    id: 'i5',
    name: 'tomato',
    shoppingCenter: [
      DUMMY_SHOPS[1],
      DUMMY_SHOPS[2],
    ],
    pool: 'shopping-list',
    user: DUMMY_USERS[1].userName,
    isUrgent: false,
  },
  {
    id: 'i6',
    name: 'bazooka',
    shoppingCenter: [
      DUMMY_SHOPS[0],
    ],
    pool: 'unassigned',
    user: DUMMY_USERS[0].userName,
    isUrgent: false,
  },
  {
    id: 'i7',
    name: 'grenade',
    shoppingCenter: [
      DUMMY_SHOPS[0],
    ],
    pool: 'unassigned',
    user: DUMMY_USERS[1].userName,
    isUrgent: false,
  },
  {
    id: 'i8',
    name: 'rice',
    shoppingCenter: [
      DUMMY_SHOPS[1],
      DUMMY_SHOPS[4],
    ],
    pool: 'in-stock',
    user: DUMMY_USERS[1].userName,
    isUrgent: false,
  },
]

export function getAllItems() {
  return DUMMY_ITEMS;
}

export function getItemsByPool(pool) {
  return DUMMY_ITEMS.filter((item) => item.pool == pool)
}

export function getUrgentItems() {
  return DUMMY_ITEMS.filter((item) => item.isUrgent)
}

export function getFilteredItems(dataFilter) {
  const { shop } = dataFilter;
  let filteredItems = DUMMY_ITEMS.filter(items => {
    return items.shoppingCenter.includes(shop)
  })
  return filteredItems;
}

export function getItemById(id) {
  return DUMMY_ITEMS.find((item) => item.id === id);
}