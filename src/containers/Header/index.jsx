import images from '../../constants/images'

import './index.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className='logo'>
          <img className='logo__img' src={images.logo} alt="logo-pokémon" />
          <img className='logo__current-pokemon' src={images.currentPokemon.pikachu} alt="current-pokemon" />
        </div>
        <div className='menu'>
          <ul className='menu__container'>
            <li className="menu__item">
              <img src={images.filterIcon} alt="filter" />
            </li>
            <li className="menu__item">
              <img src={images.bushIcon} alt="change-theme" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export { Header }