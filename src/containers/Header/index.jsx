import images from '../../constants/images'

import { HeaderStyle, Container, Logo, Menu, MenuItem } from './style'

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Logo>
          <img className='logo__img' src={images.logo} alt="logo-pokémon" />
          <img className='logo__current-pokemon' src={images.currentPokemon.pikachu} alt="current-pokemon" />
        </Logo>
          <Menu>
            <MenuItem>
              <img src={images.filterIcon} alt="filter" />
            </MenuItem>
            <MenuItem>
              <img src={images.bushIcon} alt="change-theme" />
            </MenuItem>
          </Menu>
      </Container>
    </HeaderStyle>
  )
}

export { Header }