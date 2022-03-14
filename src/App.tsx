import { useEffect, useState } from 'react'
import Address from './components/Address'

function App() {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length >= 3) {
      fetch(
        `${
          import.meta.env.VITE_API ?? 'http://localhost:5000'
        }/search/${search}`
      )
        .then(res => res.json())
        .then(setAddresses)
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
        className='border border-gray-400 rounded-lg p-2 w-72'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Search addresses...'
      />
      {addresses.length
        ? addresses.map((address, i) => (
            <Address key={i} {...address} last={i === addresses.length - 1} />
          ))
        : search.length >= 3 && (
            <p className='pt-4 font-semibold'>No addresses found.</p>
          )}
    </div>
  )
}

export default App
