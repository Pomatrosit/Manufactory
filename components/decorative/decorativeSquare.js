const DecorativeSquare = ({color, top, left, right, bottom, side}) => {

  const background = color === "purple" ? "#684289" :
                     color === "lightpurple" ? "#784A9F" : "#ECB960" ;

  return(
    <>
      <div className="square">
      </div>

      <style jsx>{`
        .square{
          background:${background};
          top:${top || "none"};
          right:${right || "none"};
          left:${left || "none"};
          bottom:${bottom || "none"};
          position:absolute;
          width:${side || "40px"};
          height:${side || "40px"};
        }
        `}</style>
    </>
  )
}

export default DecorativeSquare;
