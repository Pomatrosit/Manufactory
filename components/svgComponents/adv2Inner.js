const Adv2Inner = () => {
  return (
    <>
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.90546 19.319L19.7744 3.47849C21.7514 1.50717 24.9558 1.50717 26.9328 3.47849L29.5171 6.05816C31.4941 8.0316 31.4941 11.2324 29.5171 13.2037L13.5717 29.1205C12.7074 29.9832 11.5352 30.4686 10.3121 30.4686H2.35742L2.55703 22.4562C2.58676 21.2776 3.0688 20.1542 3.90546 19.319Z" stroke="#200E32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3633 5.92592L27.0592 15.6045" stroke="#200E32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    <style jsx>{`
      svg{
        position:absolute;
        top:-10px;
        left:10px;
        animation:animation 3.5s linear infinite;
      }

      @keyframes animation{
        0%{transform:translateX(0px)}
        45%{transform:translateX(10px)}
        50%{transform:translateX(0px) translateY(10px)}
        100%{transform:translateX(10px) translateY(10px)}
      }
      `}</style>
    </>
  )
}

export default Adv2Inner
