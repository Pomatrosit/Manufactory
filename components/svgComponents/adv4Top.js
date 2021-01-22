const Adv4Top = () => {
  return (
    <>
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4268 7.57766V6.77529C14.4268 4.13677 16.5635 2 19.2021 2H24.7862C27.4226 2 29.5615 4.13677 29.5615 6.77529L29.5637 7.57766" stroke="#200E32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.9941 32.1217V29.3232" stroke="#200E32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 14.1947V21.6929C6.1481 24.4287 11.118 26.3449 16.5724 27.104C17.2256 24.7229 19.3732 22.9775 21.9836 22.9775C24.5529 22.9775 26.7437 24.7229 27.3536 27.1256C32.8296 26.3665 37.819 24.4504 41.9887 21.6929V14.1947C41.9887 10.5311 39.041 7.58112 35.3773 7.58112H8.63307C4.96942 7.58112 2 10.5311 2 14.1947Z" stroke="#200E32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <style jsx>{`
        svg{
          animation:animation 3.5s linear infinite;
        }

        @keyframes animation{
          0%{transform:translateY(0px)}
          10%{transform:translateY(-2px)}
          20%{transform:translateY(0px)}
          100%{transform:translateY(0px)}
        }
        `}</style>
    </>
  )
}

export default Adv4Top
