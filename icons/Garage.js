import * as React from "react"

function Garage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 58 58"
      {...props}
    >
      <title>{"019 - Garage"}</title>
      <g fillRule="nonzero" fill="none">
        <path
          fill="#E57E25"
          d="M54 21.51V52H4V18L28.863 2.889l25.137 15 .107 3.695z"
        />
        <path
          fill="#F29C1F"
          d="M51.902 21.51V52H6V18L28.825 2.889l23.077 15L52 19z"
        />
        <path
          d="M54.107 21.584L29 6 3.893 21.584a2.549 2.549 0 11-2.688-4.332L29 0l27.795 17.252a2.55 2.55 0 01-2.688 4.332z"
          fill="#D25627"
        />
        <path fill="#95A5A5" d="M8 35h42v4H8z" />
        <path fill="#BDC3C7" d="M8 31h42v4H8z" />
        <path fill="#95A5A5" d="M8 27h42v4H8z" />
        <path
          d="M50 25v2H8v-2a2.006 2.006 0 012-2h38a2.006 2.006 0 012 2z"
          fill="#BDC3C7"
        />
        <path fill="#35495E" d="M8 43h42v9.482H8z" />
        <path
          d="M29 47a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1z"
          fill="#95A5A5"
        />
        <path fill="#BDC3C7" d="M8 39h42v4H8z" />
        <rect fill="#3F5C6C" y={52} width={58} height={6} rx={2} />
      </g>
    </svg>
  )
}

export default Garage
