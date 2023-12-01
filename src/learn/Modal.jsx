import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({ openModal, setOpenModal, contentId, setContentId, content }) {
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-xl sm:p-6">
                <div aria-hidden="true" className="flex justify-center">
                  <div className="overflow-hidden relative rounded-lg bg-gray-200 w-1/2">
                    <div className="h-6 text-center rounded-lg bg-indigo-600" style={{ width: `${(contentId/4) * 100}%` }}>
                    </div>
                    <div className={`absolute left-1/2 top-1/2 text-xs -translate-x-1/2 -translate-y-1/2 ${contentId > 2 ? 'text-white' : 'text-black'}`}>{contentId} of 4</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  {content}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
