import * as React from "react"

function Building(props) {
  return (
    <svg
      height={40}
      viewBox="0 0 512 512"
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M224 0h288v512H224zm0 0" fill="#ff8a65" />
      <path d="M224 192h224v320H224zm0 0" fill="#ff7043" />
      <path d="M192 224h224v288H192zm0 0" fill="#f8e868" />
      <path d="M224 512H0V224l112-80 112 80zm0 0" fill="#aed581" />
      <path d="M64 400h96v112H64zm0 0" fill="#7cb342" />
      <path d="M256 400h96v112h-96zm0 0" fill="#e0c938" />
      <g fill="#fff">
        <path d="M256 336h32v32h-32zm0 0M320 336h32v32h-32zm0 0M256 272h32v32h-32zm0 0M320 272h32v32h-32zm0 0M64 336h32v32H64zm0 0M128 336h32v32h-32zm0 0M64 272h32v32H64zm0 0M128 272h32v32h-32zm0 0M96 208h32v32H96zm0 0M288 80h32v32h-32zm0 0M352 80h32v32h-32zm0 0M416 80h32v32h-32zm0 0M288 144h32v32h-32zm0 0M352 144h32v32h-32zm0 0M416 144h32v32h-32zm0 0" />
      </g>
    </svg>
  )
}

export default Building
