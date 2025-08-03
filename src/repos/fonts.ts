import localFonts from 'next/font/local'

export const OrbitronBlackFont = localFonts({
    src: './Orbitron-Black.ttf',
    display: 'swap',
    weight: '400',
    style: 'normal',
    preload: true,
    fallback: [
        'Arial',
        'sans-serif'
    ]
})
