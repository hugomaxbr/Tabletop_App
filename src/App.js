import React, { useState } from 'react';
import NavbarLateral from './components/NavbarLateral';
import NavItemLateral from './components/NavItemLateral';
import array from './services/info';
// import { ReactComponent as CriticalRole } from './icons/critical-role-brands.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { CSSTransition } from 'react-transition-group';
import Mapa from './img/neverwinter.jpg'
import { ReactComponent as CR } from './icons/CR.svg'
import { ReactComponent as Atack } from './icons/atack.svg'
import { ReactComponent as Spellscroll } from './icons/magic.svg'

function App() {
  return (

    <main>
      <NavbarLateral>
        <NavItemLateral icon={<CR />} name="D20"> </NavItemLateral>
        <NavItemLateral icon={<Atack />} name="Atack"> </NavItemLateral>
      </NavbarLateral>
      <Navbar>
        {/** <NavItem icon= { <CriticalRole/>}></NavItem> */}
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<Spellscroll />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>

        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>

      <img src={Mapa} className='Mapa' alt="neverwinter"></img>


    </main>

  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main'); //settings, animals
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem> My profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings" >

            Spells
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Menu secundário */}
      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secundary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
          ></DropdownItem>
          {array.map((spell) => 
            (<DropdownItem>{spell.name}</DropdownItem>)
          )}
        </div>
      </CSSTransition>
    </div>
  );

}

export default App;
