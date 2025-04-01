export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)',
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-200px)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    }
  )

  document.documentElement.animate(
    [
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        scale: 0.9,
        transform: 'translateY(50px)',
      },
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        scale: 1,
        transform: 'translateY(0px)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    }
  )
}
