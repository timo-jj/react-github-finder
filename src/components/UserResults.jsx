import React, { useContext } from 'react'
import Spinner from '../assets/spinner.gif'
import UserItem from './UserItem'
import GithubContext from '../context/GithubContext'

function UserResults() {
  const { users, loading } = useContext(GithubContext)

  if (loading) {
    return (
      <div className="w-100 mt-20">
        <img
          src={Spinner}
          alt="Loading logo"
          width={180}
          className="text-center mx-auto"
        />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserResults
