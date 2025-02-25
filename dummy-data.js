const DUMMY_POSTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Everyone can learn to code! Yes, everyone! In this event, we ar going to learn code easily.',
    location: 'SomeStreet 25, 12345 San Somewhere',
    date: '2021-05-12',
    image: '/image/coding-event.jpg',
    isFeatured: false
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: 'Everyone can learn to code! Yes, everyone! In this event, we ar going to learn code easily.',
    location: 'SomeStreet 25, 12345 San Somewhere',
    date: '2025-05-30',
    image: '/image/networking-event.jpg',
    isFeatured: true
  },
{
  id: 'e3',
  title: 'Networking for extroverts',
  description: 'Everyone can learn to code! Yes, everyone! In this event, we ar going to learn code easily.',
  location: 'SomeStreet 25, 12345 San Somewhere',
  date: '2025-04-30',
  image: '/image/e-networking-event.jpg',
  isFeatured: true
},
]


export const getFeaturedPosts = () => DUMMY_POSTS.filter(e => e.isFeatured)

export const getAllPosts = () => DUMMY_POSTS

export const getFIlteredPosts = (dateFilter) => {
  const {year, month} = dateFilter

  let filteredPosts = DUMMY_POSTS.filter((e) => {
    const eventDate = new Date(e.date)
    return eventDate.getFullYear() == year && eventDate.getMonth() == month -1
  })

  return filteredPosts
}

export const getEventById = (id) => DUMMY_POSTS.find(e => e.id == id) 