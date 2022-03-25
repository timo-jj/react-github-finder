import axios from 'axios'

const url = 'https://api.github.com'
const token = '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'

const github = axios.create({
  baseURL: url,
  headers: {
    Authorization: `token ${token}`,
  },
})

// Search Users
export const searchUsers = async (user) => {
  const params = new URLSearchParams({
    q: user,
  })

  const response = await github.get(`${url}/search/users?${params}`)

  return response.data.items
}

// Get Single User & Repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    github.get(`${url}/users/${login}`),
    github.get(`${url}/users/${login}/repos?${params}`),
  ])

  return {
    user: user.data,
    repos: repos.data,
  }
}
