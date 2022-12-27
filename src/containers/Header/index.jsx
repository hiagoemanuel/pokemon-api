import { useRef } from 'react'

import images from '../../constants/images'

import { Filter } from './components/Filter'
import { ThemeToggler } from './components/ThemeToggler'

import { HeaderStyle, Container, Logo, Menu, MenuItem } from './style'

function Header({ notFilter }) {
  const filter = useRef()
  const theme = useRef()

  let collapseIsOpen = false

  function collapse(reference) {
    if (reference.current.style.display === 'none') {
      switch (reference) {
        case filter:
          if (collapseIsOpen) theme.current.style.display = 'none'
          collapseIsOpen = false
          break
        case theme:
          if (collapseIsOpen) filter.current.style.display = 'none'
          collapseIsOpen = false
          break
        default:
      }
    }
    if (collapseIsOpen) {
      reference.current.style.display = 'none'
      collapseIsOpen = false
    } else {
      reference.current.style.display = 'block'
      collapseIsOpen = true
    }
  }

  return (
    <HeaderStyle>
      <Container>
        <Logo>
          <img className='logo__img' src={images.logo} alt="logo-pokémon" />
          <img className='logo__current-pokemon' src={images.currentPokemon[4]} alt="current-pokemon" />
        </Logo>
        <Menu>
          {notFilter ? <></> :
            <MenuItem onClick={() => collapse(filter)}>
              <Filter reference={filter} />
            </MenuItem>
          }
          <MenuItem onClick={() => collapse(theme)}>
            <ThemeToggler reference={theme} />
          </MenuItem>
        </Menu>
      </Container>
    </HeaderStyle>
  )
}

export { Header }