const Adv4Bottom = () => {
  return (
    <>
      <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.11719 1.5239C2.11719 1.5239 2.42429 5.28271 2.49566 6.46788C2.59082 8.05748 3.20504 9.83308 4.23017 11.0658C5.67703 12.8133 7.38126 13.4297 9.65644 13.434C12.3317 13.4383 31.7854 13.4383 34.4607 13.434C36.7359 13.4297 38.4401 12.8133 39.887 11.0658C40.9121 9.83308 41.5263 8.05748 41.6237 6.46788C41.6929 5.28271 42 1.5239 42 1.5239" stroke="#72558B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <style jsx>{`
        svg{
          position:absolute;
          top:28px;
          left:0;
          animation:animation 3.5s linear infinite;
        }

        @keyframes animation{
          0%{transform:translateY(0px)}
          10%{transform:translateY(2px)}
          20%{transform:translateY(0px)}
          100%{transform:translateY(0px)}
        }
        `}</style>
    </>
  )
}

export default Adv4Bottom
