interface AddressProps extends Address {
  last: boolean
}

function Address({ street, postNumber, city, last }: AddressProps) {
  return (
    <div className={'border-gray-400 p-2 w-72' + (!last ? ' border-b' : '')}>
      <p className='text-gray-700'>
        <span className='font-bold'>Street: </span>
        {street}
      </p>
      <p className='text-gray-700'>
        <span className='font-bold'>Post Nr: </span>
        {postNumber}
      </p>
      <p className='text-gray-700'>
        <span className='font-bold'>City: </span>
        {city}
      </p>
    </div>
  )
}

export default Address
