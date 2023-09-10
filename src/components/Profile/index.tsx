import { InfoContainer, ProfileContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useProfile } from '../../Hooks/useProfile'

import { memo } from 'react'

function ProfileComponent() {
  const user = useProfile()

  return (
    <ProfileContainer>
      <img src={user.userPhoto} alt="" />
      <InfoContainer>
        <header>
          <h2>{user.name}</h2>
          <a href={user.url} target="_blank" rel="noreferrer">
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
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>{user.company}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserFriends}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>{user.followers}</span> seguidores
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}

export const Profile = memo(ProfileComponent)
