import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import logo from '../../assets/youtube-logo.png';

const Header = ({ toggleSidebar }) => {
  return (
    <div className={'header'}>
      <FaBars onClick={toggleSidebar} className={'header-menu'} size={26} />
      <img className={'header-logo'} src={logo} alt='' />
      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className='header-icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src='https://lh3.googleusercontent.com/ogw/ADea4I4LFEoIdQoRXuV3rgzAyvCnPBeDbjStw5-M4XdSHg=s32-c-mo'
          alt='avatar'
        />
      </div>
    </div>
  );
};

export default Header;
