import { useEffect, useRef } from 'react'

import images from '../../constants/images'

import { Filter } from './Filter'
import { ThemeToggler } from './ThemeToggler'

import { HeaderStyle, Container, Logo, Nav } from './style'



function Header({ notFilter }) {

  const acordeon = useRef()

  useEffect(() => {
    const acordeonItems = acordeon.current.childNodes

    acordeonItems.forEach((item) => item.childNodes[0].addEventListener('click', () => {
      const acordenActive = document.querySelector('.active')
      item.childNodes[0].classList.add('active')
      if (acordenActive) acordenActive.classList.remove('active')
    }))
  }, [])

  return (
    <HeaderStyle>
      <Container>
        <Logo>
          <img className='logo__img' src={images.logo} alt="logo-pokémon" />
          <img className='logo__current-pokemon' src={images.currentPokemon[4]} alt="current-pokemon" />
        </Logo>
        <Nav ref={acordeon} >
          {notFilter ? <></> : <Filter />}
          <ThemeToggler />
        </Nav>
      </Container>
    </HeaderStyle>
  )
}

export { Header }