/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { HiXMark } from 'react-icons/hi2'
import { GoThreeBars } from 'react-icons/go'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { AiOutlineUser, AiFillCaretDown, AiOutlineQuestion } from 'react-icons/ai'
import { BiLeaf } from 'react-icons/bi'
import { BsFillBagFill } from 'react-icons/bs'


import logo_onblack from './PassItOn.png'
import logo_onwhite from './PassItOnBlack.png'
import truck from './truck.gif'

const products = [


    {
      id: 1,
      name: 'HUTTER Products recycling service',
      description:
        'HUTTER Products is a recycling service that collects and recycles used large material, such as furniture, appliances, and construction materials.',
      href: '#',
      price: '10.00',
      status: 'Expecting to be picked up on',
      step: 1,
      date: 'March 26, 2023',
      datetime: '2021-03-24',
      address: ['Mak Fazlic', 'Hafnerstrasse 5', '9000 St. Gallen'],
      email: 'm•••@gmail.com',
      phone: '1•••••••••40',
      imageSrc: truck,
      imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Navigation',
            featured: [
                {
                    name: 'Home',
                    href: '/',
                    imageSrc: 'https://images.unsplash.com/photo-1661604258241-b4310e59fe21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3QlMjBnYWxsZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },

                {
                    name: 'Thrift',
                    href: '/thrift',
                    imageSrc: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
            ]
        },
    ],
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-gray-50 flex justify-between w-full flex-col   h-screen">
            <div>
                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pt-5 pb-2">
                                        <button
                                            type="button"
                                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as="div" className="mt-2">
                                        <div className="border-b border-gray-200">
                                            <Tab.List className="-mb-px flex space-x-8 px-4">
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected ? 'border-red-600 text-red-600' : 'border-transparent text-gray-900',
                                                                'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels as={Fragment}>
                                            {navigation.categories.map((category) => (
                                                <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                                                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative">
                                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                                </div>
                                                                <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                    {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                                    Go here
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </Tab.Group>


                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                                Create an account
                                            </a>
                                        </div>
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                                Sign in
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        {/* Currency selector */}
                                        <form>
                                            <div className="inline-block">
                                                <label htmlFor="mobile-currency" className="sr-only">
                                                    Currency
                                                </label>
                                                <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                                                    <select
                                                        id="mobile-currency"
                                                        name="currency"
                                                        className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                                                    >
                                                        {currencies.map((currency) => (
                                                            <option key={currency}>{currency}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                                        <AiFillCaretDown className="h-5 w-5 text-gray-500" aria-hidden="true" />

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <header className="relative">
                    <nav aria-label="Top">


                        {/* Secondary navigation */}
                        <div className="bg-white shadow-sm">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                        <a href="#">
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                className="h-6 w-auto"
                                                src={logo_onwhite}
                                                alt=""
                                            />
                                        </a>
                                    </div>

                                    <div className="hidden h-full lg:flex">
                                        {/* Flyout menus */}
                                        <Popover.Group className="inset-x-0 bottom-0 px-4">
                                            <div className="flex h-full justify-center space-x-8">
                                                {navigation.categories.map((category) => (
                                                    <Popover key={category.name} className="flex">
                                                        {({ open }) => (
                                                            <>
                                                                <div className="relative flex">
                                                                    <Popover.Button
                                                                        className={classNames(
                                                                            open ? 'text-red-600' : 'text-gray-700 hover:text-gray-800',
                                                                            'relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out'
                                                                        )}
                                                                    >
                                                                        {category.name}
                                                                        <span
                                                                            className={classNames(
                                                                                open ? 'bg-red-600' : '',
                                                                                'absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </Popover.Button>
                                                                </div>

                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-200"
                                                                    enterFrom="opacity-0"
                                                                    enterTo="opacity-100"
                                                                    leave="transition ease-in duration-150"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Popover.Panel className="absolute inset-x-0 top-full z-20 bg-white text-sm text-gray-500">
                                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                                        {/* Fake border when menu is open */}
                                                                        <div
                                                                            className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                                                            aria-hidden="true"
                                                                        >
                                                                            <div
                                                                                className={classNames(
                                                                                    open ? 'bg-gray-200' : 'bg-transparent',
                                                                                    'h-px w-full transition-colors duration-200 ease-out'
                                                                                )}
                                                                            />
                                                                        </div>

                                                                        <div className="relative">
                                                                            <div className="mx-auto max-w-7xl px-8">
                                                                                <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                                    {category.featured.map((item) => (
                                                                                        <div key={item.name} className="group relative">
                                                                                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                                                <img
                                                                                                    src={item.imageSrc}
                                                                                                    alt={item.imageAlt}
                                                                                                    className="object-cover object-center aspect-square w-full h-64"
                                                                                                />
                                                                                            </div>
                                                                                            <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                                {item.name}
                                                                                            </a>
                                                                                            <p aria-hidden="true" className="mt-1">
                                                                                                Go here
                                                                                            </p>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Popover>
                                                ))}


                                            </div>
                                        </Popover.Group>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex flex-1 items-center lg:hidden">
                                        <button
                                            type="button"
                                            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileMenuOpen(true)}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <GoThreeBars className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Search */}
                                        <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <GiMagnifyingGlass className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    </div>

                                    {/* Logo (lg-) */}
                                    <a href="#" className="lg:hidden">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                                            alt=""
                                            className="h-8 w-auto"
                                        />
                                    </a>

                                    <div className="flex flex-1 items-center justify-end">
                                        <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                            Search
                                        </a>

                                        <div className="flex items-center lg:ml-8">
                                            {/* Help */}
                                            <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                                                <span className="sr-only">Help</span>
                                                <AiOutlineQuestion className="h-6 w-6" aria-hidden="true" />
                                            </a>
                                            <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                                Help
                                            </a>

                                            {/* Cart */}
                                            <div className="ml-4 flow-root lg:ml-8">
                                                <a href="#" className="group -m-2 flex items-center p-2">
                                                    <BsFillBagFill
                                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                                    <span className="sr-only">items in cart, view bag</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>


            <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order #54879</h1>
            <a href="#" className="hidden text-sm font-medium text-red-600 hover:text-red-500 sm:block">
              View invoice
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Order placed{' '}
            <time dateTime="2021-03-22" className="font-medium text-gray-900">
              March 24, 2023
            </time>
          </p>
          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500 sm:hidden">
            View invoice
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* Products */}
        <div className="mt-6">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
              >
                <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="aspect-w-1 aspect-h-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">CHF {product.price}</p>
                      <p className="mt-3 text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">Pick-up address</dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block">{product.address[0]}</span>
                          <span className="block">{product.address[1]}</span>
                          <span className="block">{product.address[2]}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Shipping updates</dt>
                        <dd className="mt-3 space-y-3 text-gray-500">
                          <p>{product.email}</p>
                          <p>{product.phone}</p>
                          <button type="button" className="font-medium text-red-600 hover:text-red-500">
                            Edit
                          </button>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                  <h4 className="sr-only">Status</h4>
                  <p className="text-sm font-medium text-gray-900">
                    {product.status} on <time dateTime={product.datetime}>{product.date}</time>
                  </p>
                  <div className="mt-6" aria-hidden="true">
                    <div className="overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-red-600"
                        style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
                      />
                    </div>
                    <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                      <div className="text-red-600">Order placed</div>
                      <div className={classNames(product.step > 0 ? 'text-red-600' : '', 'text-center')}>
                        Processing
                      </div>
                      <div className={classNames(product.step > 1 ? 'text-red-600' : '', 'text-center')}>
                        Data Finalized
                      </div>
                      <div className={classNames(product.step > 2 ? 'text-red-600' : '', 'text-right')}>
                        Product Picked Up
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Billing */}
        <div className="mt-16">
          <h2 className="sr-only">Billing Summary</h2>

          <div className="bg-gray-100 py-6 px-4 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
            <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt className="font-medium text-gray-900">Billing address</dt>
                <dd className="mt-3 text-gray-500">
                  <span className="block">Hafnerstrasse 5</span>
                  <span className="block">9000 St. Gallen</span>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Payment information</dt>
                <dd className="-ml-4 -mt-1 flex flex-wrap">
                  <div className="ml-4 mt-4 flex-shrink-0">
                    <svg aria-hidden="true" width={36} height={24} viewBox="0 0 36 24" className="h-6 w-auto">
                      <rect width={36} height={24} rx={4} fill="#224DBA" />
                      <path
                        d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                        fill="#fff"
                      />
                    </svg>
                    <p className="sr-only">Visa</p>
                  </div>
                  <div className="ml-4 mt-4">
                    <p className="text-gray-900">Ending with 4242</p>
                    <p className="text-gray-600">Expires 02 / 24</p>
                  </div>
                </dd>
              </div>
            </dl>

            <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
              <div className="flex items-center justify-between pb-4">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">CHF 10.00</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-gray-600">Discount</dt>
                <dd className="font-medium text-gray-900">CHF 0.00</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="font-medium text-gray-900">Order total</dt>
                <dd className="font-medium text-red-600">CHF 10.00</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
            
            

            <footer aria-labelledby="footer-heading" className="border-t border-gray-200 bg-white">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>



                <div className="border-t border-gray-100 py-10 text-center">
                    <p className="text-sm text-gray-500">&copy; 2023 Pass It On, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
