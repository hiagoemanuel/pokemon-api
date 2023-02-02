import { useEffect, useRef } from 'react'
import { headerAcordeon } from '../../services/headerAcordeon'
import images from '../../constants/images'
import { Filter } from './Filter'
import { ThemeToggler } from './ThemeToggler'
import { HeaderStyle, Container, Logo, Nav } from './style'

export let chosenPokemon

function Header({ notFilter }) {
  chosenPokemon = useRef()
  const acordeon = useRef()

  useEffect(() => {
    const acordeonItems = acordeon.current.childNodes
    acordeonItems.forEach((item) => item.firstChild.addEventListener('click', () => headerAcordeon(item)))
  }, [])
  
  return (
    <HeaderStyle>
      <Container>
        <Logo>
          <img className='logo__img' src={images.logo} alt="logo-pokémon" />
          <img className='logo__current-pokemon' ref={chosenPokemon} alt="current-pokemon" />
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