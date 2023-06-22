import React from 'react'

const LayoutAuth = (props) => {
  return (
    <div class="flex justify-between min-h-screen font-sans">
    <div class="hidden relative w-1/2 bg-center bg-cover lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1657575097460-10451a12ecd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
      <div
        class="bg-white/50 backdrop-blur-sm absolute inset-0 w-full h-full"
      ></div>
      <div class="flex absolute bottom-20 justify-center w-full">
        <div class="max-w-md text-center">
          <span class="text-3xl font-bold leading-loose text-gray-900">
            Control Bussiness
          </span>
          <p class="font-light leading-7 text-gray-500">
            Dotra is the most comprehensive field service &amp; asset managament
            platform with combining flexibility.
          </p>
        </div>
      </div>
    </div>
    <div class="flex-1 mx-auto max-w-2xl">
        {props.children}
    </div>
  </div>
  )
}

export default LayoutAuth