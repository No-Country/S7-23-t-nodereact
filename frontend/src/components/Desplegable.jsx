import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Alimentacion', href: '#'},
  { name: 'Comunidad', href: '#'},
  { name: 'Criptomonedas', href: '#'},
  { name: 'Crowfunding', href: '#'},
  { name: 'Deporte', href: '#'},
  { name: 'Diseño', href: '#'},
  { name: 'Educacion', href: '#'},
  { name: 'Redes Sociales', href: '#'},
  { name: 'Viajes', href: '#'},
  { name: 'Videojuegos', href: '#'},
]

export default function Despegable() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
        <span className='text-white font-bold  text-[#000000] manroper font-Manrope hover:text-color-accent'>DESCUBRIR</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-48 max-w-max -translate-x-1/2 px-4">
  <div className="w-full flex-auto overflow-hidden rounded-lg  bg-font-text text-xs leading-5 shadow-text ">
    <div className="p-0  space-y-0">
      {solutions.map((item) => (
        <div key={item.name} className="relative flex space-y-0 space-x-0 rounded-lg pr-3 hover:bg-gray-50">
          <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          </div>
          <div>
            <a href={item.href} className="font-medium text-gray-900 text-xs">
              {item.name}
              <span className="absolute inset-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</Popover.Panel>
      </Transition>
    </Popover>
  )
}