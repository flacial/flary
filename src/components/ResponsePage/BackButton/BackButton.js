import tw from 'tailwind-styled-components'

export const BackButton = tw.button`
    bg-gradient-to-b
    from-green-400
    to-green-700
    text-white
    font-bold
    py-2
    px-4
    rounded-full
    shadow-2xl
    hover:bg-gradient-to-b
    hover:from-green-600
    hover:to-green-800
    focus:outline-none
    focus:ring-4 focus:ring-green-100
`