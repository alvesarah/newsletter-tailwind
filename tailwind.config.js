tailwind.config = {
  theme: {
    extend: {
      colors: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0'
        },
      },
      fontFamily: {
        inter: ['Inter']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.31s ease-in-out infinite',
      }
    }
  },
}