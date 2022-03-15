import { useEffect, useState } from 'react'
import Addresses from './components/Addresses'

function App() {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (search.length >= 3) {
      setLoading(true)
      fetch(
        `${
          import.meta.env.VITE_API ?? 'http://localhost:5000'
        }/search/${search}`
      )
        .then(res => res.json())
        .then(setAddresses)
        .catch(e => setError(e.message))
        .finally(() => setLoading(false))
    } else {
      setAddresses([])
    }
  }, [search])

  return (
    <div className='flex flex-col items-center'>
      <a
        href='https://github.com/nunogois/autocomplete-addresses'
        target='_blank'
      >
        <h1 className='font-bold text-lg my-4'>autocomplete-addresses</h1>
      </a>
      <input
        className='border border-gray-400 rounded-lg p-2 w-72 max-w-full'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Search addresses...'
      />
      <Addresses
        addresses={addresses}
        loading={loading}
        error={error}
        search={search}
      />
    </div>
  )
}

export default App
