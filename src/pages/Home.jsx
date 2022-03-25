import React from 'react'
import UserResults from '../components/UserResults'
import UserSearch from '../components/UserSearch'

function Home() {
  return (
    <main>
      <h1 className="text-1xl">
        <UserSearch />
        <UserResults />
      </h1>
    </main>
  )
}

export default Home
