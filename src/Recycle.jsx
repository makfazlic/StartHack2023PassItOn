import React, { useState } from 'react'
import  { AiOutlineLoading3Quarters } from 'react-icons/ai'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: '150cm x 120cm x 50cm Waredrobe',
      href: '#',
      price: 'CHF 10.00',
      color: '60 kg',
      size: 'Wood',
      imageSrc: 'https://static.vecteezy.com/system/resources/previews/002/746/189/large_2x/bulky-waste-flat-color-icon-bulky-refuse-large-waste-types-household-appliances-furniture-too-big-for-usual-bin-collection-cartoon-style-clip-art-for-mobile-app-isolated-rgb-illustration-vector.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
    },
    // More products...
  ]
  
  export default function Example() {

    const [weight, setWeight] = useState(false)
    return (
      <div className="bg-white flex items-center justify-center h-screen">
        {/* Background color split screen for large screens */}
        <div className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
        <div className="fixed top-0 right-0 hidden h-full w-1/2 bg-red-900 lg:block" aria-hidden="true" />
  
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
          <h1 className="sr-only">Checkout</h1>
  
          <section
            aria-labelledby="summary-heading"
            className="bg-red-900 py-12 text-red-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
          >
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>
  
              <dl>
                <dt className="text-sm font-medium">Amount due</dt>
                <dd className="mt-1 text-3xl font-bold tracking-tight text-white">{ !weight ? <AiOutlineLoading3Quarters className='animate-spin inline-block mr-2 h-6' /> : <></>}{ weight ?  "CHF 10.00" :  "Add info to calculate load" } </dd>
              </dl>
  
              <ul role="list" className="divide-y divide-white divide-opacity-10 text-sm font-medium">
                {products.map((product) => (
                  <li key={product.id} className="flex items-start space-x-4 py-6">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white">Bulky object recycling service</h3>
                      <p>{ weight ?  product.name :  "Processing..." }</p>
                        <p>{ weight ?  product.color :  "Processing..." }</p>
                      <p>{ weight ?  product.size :  "Processing..." }</p>
                    </div>
                    <p className="flex-none text-base font-medium text-white">{ weight ?  product.price :  "Processing..." }</p>
                  </li>
                ))}
              </ul>
  
              <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd>{ weight ?  "CHF 10.00" :  "Processing..." }</dd>
                </div>
  
                <div className="flex items-center justify-between">
                  <dt>Shipping</dt>
                  <dd>{ weight ?  "CHF 0.00" :  "Processing..." }</dd>
                </div>
  
                <div className="flex items-center justify-between">
                  <dt>Taxes</dt>
                  <dd>{ weight ?  "CHF 0.00" :  "Processing..." }</dd>
                </div>
  
                <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">{ weight ?  "CHF 10.00" :  "Processing..." }</dd>
                </div>
              </dl>
            </div>
          </section>
  
          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Payment and shipping details
            </h2>
  
            <form>
              <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                <div>
                  <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                    Contact information
                  </h3>
  
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900 mt-5">
                    About the object
                  </h3>
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Material
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Width
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                 
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Height
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Depth
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Weight
                    </label>
                    <div className="mt-1">
                      <input
                        id="email-address"
                        name="email-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        onChange={
                            (e) => {
                                    setWeight(true)
                                
                            }
                        }
                      />
                    </div>
                  </div>
                </div>
  
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Payment details</h3>
  
                  <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4">
                    <div className="col-span-3 sm:col-span-4">
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                        Card number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          autoComplete="cc-number"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="col-span-2 sm:col-span-3">
                      <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                        Expiration date (MM/YY)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          autoComplete="cc-exp"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="cvc"
                          id="cvc"
                          autoComplete="csc"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Your address</h3>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                  
                  </div>
                </div>
  
  
                <div className="mt-5 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
  }
  