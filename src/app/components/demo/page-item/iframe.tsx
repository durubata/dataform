import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { setTimeout } from 'timers'

export const IFrame = ({  children, page, className }) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode =  contentRef?.contentWindow?.document?.body

   useEffect(() => {
    // setTimeout(() => {
        // const script = document.createElement("script");
        // script.src = "https://cdn.tailwindcss.com"; 
        // contentRef?.contentWindow?.document?.head.appendChild(script);
    // }, 1000);
  },[mountNode])


  return (
    <iframe className={className} ref={setContentRef} src={window.location.origin+ '/phone?page=' + page}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}