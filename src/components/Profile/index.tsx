import { InfoContainer, ProfileContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  login: string
  url: string
  followers: number
  bio: string
  company: string
  userPhoto: string
}

export function Profile() {
  const [user, setUser] = useState<User>()

  async function fetchUserProfile() {
    const response = await api.get('users/StealthWorm')

    const userData: User = {
      id: response.data.id,
      name: response.data.name,
      login: response.data.login,
      url: response.data.html_url,
      followers: response.data.followers,
      bio: response.data.bio,
      company: response.data.company,
      userPhoto: `${response.data.html_url}.png`,
    }

    setUser(userData)
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.userPhoto} alt="" />
      <InfoContainer>
        <header>
          <h2>{user?.name}</h2>
          <a href={user?.url} target="_blank" rel="noreferrer">
            <strong>github</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>{user?.bio}</main>
        <footer>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>{user?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>{user?.company}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserFriends}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>{user?.followers}</span> seguidores
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
