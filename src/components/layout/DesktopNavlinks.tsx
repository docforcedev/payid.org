import { useLocation } from '@reach/router'
import classNames from 'classnames'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce'
import React, { useState, useCallback } from 'react'

import NavigationUp from '../../assets/layout/nav/navUp.svg'

import useCloseOnScroll from './useCloseOnScroll'
import useSublinkMatch, { NavlinkProps } from './useSublinkMatch'

const DesktopNavlinks: React.FC<NavlinkProps> = ({
  text,
  location,
  sublinks = [],
  resource = null,
}) => {
  const [showSubLinks, setShowSublinks] = useState(false)
  const { pathname } = useLocation()
  const sublinkMatch = useSublinkMatch(location, sublinks)

  useCloseOnScroll(() => {
    setShowSublinks(false)
  })

  const debouncedSetShowSublinks = useCallback<
    React.Dispatch<React.SetStateAction<boolean>>
  >(
    debounce<React.Dispatch<React.SetStateAction<boolean>>>(
      setShowSublinks,
      150,
    ),
    [setShowSublinks],
  )

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (![32, 13].includes(e.charCode)) {
        return
      }

      e.preventDefault()

      setShowSublinks(!showSubLinks)
    },
    [setShowSublinks, showSubLinks],
  )

  if (sublinks.length > 0) {
    return (
      <button
        className="inline-block mr-7 xl:mr-12 xxl:mr-16"
        aria-haspopup="true"
        aria-expanded={showSubLinks}
        onMouseOver={() =>
          // Debounce to handle case where the mouse is coming from the submenu back to the main link text
          // Otherwise immediately set submenu shown to allow menu to pop up quickly on first hover
          showSubLinks ? debouncedSetShowSublinks(true) : setShowSublinks(true)
        }
        onMouseOut={() => debouncedSetShowSublinks(false)}
        onKeyPress={handleKeyPress}
        onFocus={() =>
          showSubLinks ? debouncedSetShowSublinks(true) : setShowSublinks(true)
        }
        onBlur={() => debouncedSetShowSublinks(false)}
      >
        <span
          className={classNames(
            'inline-block focus:text-orange-500 hover:text-orange-500',
            {
              'border-b-2 border-orange-500': sublinkMatch,
            },
          )}
        >
          {text}
          {!showSubLinks && (
            <NavigationUp className="inline ml-2 transform rotate-180" />
          )}
          {showSubLinks && <NavigationUp className="inline ml-2" />}
        </span>
        {/* box-shadow: 0px 27px 54px rgba(0, 0, 0, 0.2); */}
        {showSubLinks && (
          <div
            className={classNames(
              'cursor-auto pt-10 pb-10 pl-20 absolute mt-6 flex -ml-32 border-t border-blue-800 shadow-2xl bg-blue-dark-900',
              {
                '-ml-32': !resource,
              },
              {
                '-ml-48': !!resource,
              },
            )}
            onMouseOver={() => debouncedSetShowSublinks(true)}
            onBlur={() => debouncedSetShowSublinks(false)}
            onFocus={() => debouncedSetShowSublinks(true)}
          >
            <ul className="mr-24">
              {sublinks.map((sublink, idx) => {
                return (
                  <li
                    key={sublink.text}
                    className={classNames({
                      'mb-6': idx !== sublinks.length - 1,
                    })}
                  >
                    {sublink.location && sublink.location.startsWith('http') ? (
                      <a
                        onClick={() => setShowSublinks(false)}
                        href={sublink.location || '/'}
                        className="flex focus:text-orange-500 hover:text-orange-500"
                      >
                        {sublink.icon && <sublink.icon className="w-12 mr-1" />}
                        <div
                          className={classNames('text-left ml-4 mr-0', {
                            'm-auto': !resource,
                          })}
                        >
                          <span
                            className={classNames({
                              'border-b-2 border-orange-500':
                                sublink.location &&
                                pathname.includes(sublink.location || ''),
                            })}
                          >
                            {sublink.text}
                          </span>
                          {sublink.description && (
                            <div className="mt-2 text-xs">
                              {sublink.description}
                            </div>
                          )}
                        </div>
                      </a>
                    ) : (
                      <Link
                        onClick={() => setShowSublinks(false)}
                        to={sublink.location || '/'}
                        partiallyActive
                        className="flex focus:text-orange-500 hover:text-orange-500"
                      >
                        {sublink.icon && <sublink.icon className="w-12 mr-1" />}
                        <div
                          className={classNames('text-left ml-4 mr-0', {
                            'm-auto': !resource,
                          })}
                        >
                          <span
                            className={classNames({
                              'border-b-2 border-orange-500':
                                sublink.location &&
                                pathname.includes(sublink.location || ''),
                            })}
                          >
                            {sublink.text}
                          </span>
                          {sublink.description && (
                            <div className="mt-2 text-xs">
                              {sublink.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
            {resource && resource.links && resource.links.length > 0 && (
              <div className="mr-16 text-left">
                <span className="text-xs font-bold uppercase">
                  {resource.title}
                </span>
                <ul className="mt-2">
                  {resource.links.map((link) => (
                    <li
                      key={`resource-${link.text}`}
                      className="mb-2 text-xs font-semibold"
                    >
                      {link.external && (
                        <a
                          href={link.location}
                          className="focus:text-orange-500 hover:text-orange-500"
                        >
                          {link.text}
                        </a>
                      )}
                      {!link.external && (
                        <Link
                          to={link.location || '/'}
                          className="focus:text-orange-500 hover:text-orange-500"
                          activeClassName="border-b-2 border-orange-500"
                          partiallyActive
                        >
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </button>
    )
  }
  if (!location?.startsWith('http')) {
    return (
      <Link
        to={location || '/'}
        className="inline-block mr-7 xl:mr-12 xxl:mr-16 focus:text-orange-500 hover:text-orange-500"
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
      className="inline-block mr-7 xl:mr-12 xxl:mr-16 focus:text-orange-500 hover:text-orange-500"
    >
      {text}
    </a>
  )
}

export default DesktopNavlinks
