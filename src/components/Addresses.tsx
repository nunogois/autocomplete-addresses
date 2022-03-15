import Address from './Address'

interface AddressesProps {
  addresses: Address[]
  loading?: boolean
  error?: string
  search?: string
}

function Addresses({
  addresses,
  loading = false,
  error = '',
  search = ''
}: AddressesProps) {
  if (loading) return <p className='pt-4 font-semibold'>Loading...</p>
  if (error) return <p className='pt-4 font-semibold'>Error: {error}</p>
  if (search?.length >= 3 && !addresses?.length)
    return (
      <p className='pt-4 font-semibold'>No addresses found for: {search}.</p>
    )

  return (
    <>
      {addresses?.map((address, i) => (
        <Address key={i} {...address} last={i === addresses.length - 1} />
      ))}
    </>
  )
}

export default Addresses
