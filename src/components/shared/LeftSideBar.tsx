import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { INavLink } from '@/types';
import { Loader } from '.';
import { sidebarLinks } from '@/constants';

let isLoading: string;

const LeftSideBar = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <nav className='leftsidebar border-r-[1px] border-gray-700'>
        <div className='flex flex-col gap-11'>
          <Link to="/" className='flex gap-3 items-center'>
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width={135}
              height={36}
            />
          </Link>

          {isLoading ? (
            <>
              <div className='h-14'>
                <Loader />
              </div>
            </>
          ): (
            <>
              <Link to={`/profile/`} className='flex gap-3 items-center'>
                <img 
                  src={"/assets/icons/profile-placeholder.svg"}
                  className='h-14 w-14 rounded-full border-[3px] border-emerald-500'
                />
                <div className="flex flex-col">
                  <p className="body-bold">TestUser</p>
                  <p className="small-regular text-light-3">@gpt4</p>
                </div>
              </Link>
            </>
          )}

          <ul className='flex flex-col gap-6'>
            {sidebarLinks.map((link: INavLink) => {
              const isActive = pathname === link.route;

              return (
                <>
                  <li key={link.label} className={`leftsibar-link group rounded-3xl transition-all duration-150 ease-in-out ${
                    isActive && "bg-primary-500"
                  }`}>
                    <NavLink
                      to={link.route}
                      className="flex gap-4 items-center p-4">
                        <img
                          src={link.imgURL}
                          alt={link.label}
                          className={`group-hover:invert-white transition-all duration-150 ease-in-out ${
                            isActive && "invert-white"
                          }`}
                        />
                        {link.label}
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LeftSideBar;