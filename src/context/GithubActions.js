import axios from 'axios'

const url = process.env.REACT_APP_GITHUB_URL
const token = process.env.REACT_APP_GITHUB_TOKEN

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
