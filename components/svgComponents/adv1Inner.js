const Adv1Inner = () => {
  return (
    <>
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.33496 12.1307L8.59025 4.00072L15.7255 9.60561L21.8469 1.7052" stroke="#72558B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <style jsx>{`
        svg{
          position:absolute;
          top:16px;
          left:10px;
          animation:animation 3s linear infinite;
        }

        @keyframes animation{
          0%{opacity:0}
          50%{opacity:1}
          100%{opacity:0}
        }
      `}</style>
    </>
  )
}

export default Adv1Inner
