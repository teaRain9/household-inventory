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

const DUMMY_CATEGORIES = [
  {
    id: 'c1',
    name: 'dairy'
  },
  {
    id: 'c2',
    name: 'produce'
  },
  {
    id: 'c3',
    name: 'meat'
  },
  {
    id: 'c4',
    name: 'personal care'
  },
  {
    id: 'c5',
    name: 'household'
  },
  {
    id: 'c6',
    name: 'bakery'
  },
  {
    id: 'c7',
    name: 'bevrages'
  },
  {
    id: 'c8',
    name: 'condiment'
  },
  {
    id: 'c9',
    name: 'pasta'
  },
  {
    id: 'c10',
    name: 'snacks'
  },

]

const DUMMY_ITEMS = [
  {
    id: 'i1',
    name: 'hot sauce',
    shoppingCenter: [
      DUMMY_SHOPS[0],
      DUMMY_SHOPS[1],
    ],
    pool: 'shopping-list',
    category: 'c8',
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
    category: 'c3',
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
    category: 'c3',
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
    category: 'c2',
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
    category: 'c2',
    isUrgent: false,
  },
  {
    id: 'i6',
    name: 'bazooka',
    shoppingCenter: [
      DUMMY_SHOPS[0],
    ],
    pool: 'unassigned',
    category: 'c5',
    isUrgent: false,
  },
  {
    id: 'i7',
    name: 'grenade',
    shoppingCenter: [
      DUMMY_SHOPS[0],
    ],
    pool: 'unassigned',
    category: 'c5',
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
    category: 'c9',
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