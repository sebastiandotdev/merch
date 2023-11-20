import supabase from './supabase'

const navbarMerch = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Catalog',
    href: '/catalog',
  },
  {
    id: 3,
    label: 'Contact',
    href: '/contact-us',
  },
]

const getMerchs = async () => {
  try {
    const { data } = await supabase.from('merch').select('*')

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export { navbarMerch, getMerchs }
