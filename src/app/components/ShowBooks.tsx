import React from 'react'
import FetchBook from './FetchBook'
const ShowBooks = () => {
    const fetchbook = FetchBook()
  return (
    <div>
      {fetchbook}
    </div>
  )
}

export default ShowBooks
