import { InfoContainer, ProfileContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/StealthWorm.png" alt="" />
      <InfoContainer>
        <header>
          <h2>Thierry P. Santos</h2>
          <a
            href="https://github.com/StealthWorm"
            target="_blank"
            rel="noreferrer"
          >
            <strong>github</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          deserunt ratione quae, quaerat eius esse quasi atque magni ullam iusto
          perspiciatis tenetur repudiandae consequuntur? Vero sint beatae
          dolorem a provident!
        </main>
        <footer>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>StealthWorm</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>Bsoft</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserFriends}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>32</span> seguidores
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
