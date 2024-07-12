import React, { useEffect } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

function NavButton({ title, customFunc, icon, color, dotColor }) {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button
        type='button'
        onClick={customFunc}
        style={{ color }}
        className='relative rounded-full p-3 text-xl hover:bg-light-gray'
      >
        <span
          style={{ background: dotColor }}
          className='absolute right-2 top-2 inline-flex h-2 w-2 rounded-full'
        />
        {icon}
      </button>
    </TooltipComponent>
  );
}

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    currentColor,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    screenSize <= 700 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <div className='relative flex justify-between p-2 md:mx-6'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleClick('chat')}
          color={currentColor}
          dotColor='#03C9D7'
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          customFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor='#03C9D7'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray'
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} className='h-8 w-8 rounded-full' />
            <p>
              <span className='text-14 text-gray-400'>Hi, </span>{' '}
              <span className='ml-1 text-14 font-bold text-gray-400'> Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-14 text-gray-400' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}
