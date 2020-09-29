import { useLocation } from '@reach/router'
import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState, Fragment } from 'react'

import NavigationDown from '../../assets/layout/nav/navDown.svg'
import NavigationUp from '../../assets/layout/nav/navUp.svg'

import useCloseOnScroll from './useCloseOnScroll'
import useSublinkMatch, { NavlinkProps } from './useSublinkMatch'

const DesktopNavlinks: React.FC<NavlinkProps> = ({
  text,
  location,
  sublinks = [],
}) => {
  const [showSubLinks, setShowSublinks] = useState(false)
  const { pathname } = useLocation()
  const sublinkMatch = useSublinkMatch(location, sublinks)

  useCloseOnScroll(() => {
    setShowSublinks(false)
  })

  if (sublinks.length > 0) {
    return (
      <Fragment>
        <span
          onMouseOver={() => setShowSublinks(true)}
          onClick={() => setShowSublinks(false)}
          className={classNames(
            'cursor-pointer inline-block mr-10 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0',
            {
              'border-b-2 border-orange-500': sublinkMatch,
            },
          )}
        >
          {text}
          {!showSubLinks && <NavigationDown className="inline ml-2" />}
          {showSubLinks && <NavigationUp className="inline ml-2" />}
        </span>
        {showSubLinks && (
          <ul className="absolute mt-4 -ml-32 border-t border-blue-800 w-78 bg-blue-dark-900">
            {sublinks.map((sublink, idx) => {
              return (
                <li
                  key={sublink.text}
                  className={classNames(
                    {
                      'mt-10': idx === 0,
                    },
                    {
                      'mb-6': idx !== sublinks.length - 1,
                    },
                    {
                      'mb-10': idx === sublinks.length - 1,
                    },
                  )}
                >
                  <Link
                    onClick={() => setShowSublinks(false)}
                    to={sublink.location || '/'}
                    partiallyActive
                    className="flex focus:text-orange-500 hover:text-orange-500"
                  >
                    {sublink.icon && (
                      <sublink.icon className="w-12 ml-20 mr-1" />
                    )}
                    <span
                      className={classNames('m-auto ml-4 mr-0', {
                        'border-b-2 border-orange-500':
                          sublink.location &&
                          pathname.includes(sublink.location || ''),
                      })}
                    >
                      {sublink.text}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </Fragment>
    )
  }
  if (text !== 'Docs') {
    return (
      <Link
        to={location || '/'}
        className="inline-block mr-10 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
        activeClassName="border-b-2 border-orange-500"
        partiallyActive
      >
        {text}
      </Link>
    )
  }

  return (
    <a
      href={location}
      className="inline-block mr-10 xl:mr-18 focus:text-orange-500 hover:text-orange-500 last:mr-0"
    >
      {text}
    </a>
  )
}

export default DesktopNavlinks
