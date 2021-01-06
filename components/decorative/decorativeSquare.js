const DecorativeSquare = ({color, top, left, right}) => {

  const background = color === "purple" ? "#684289" : "#ECB960";

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
          position:absolute;
          width:40px;
          height:40px;
        }
        `}</style>
    </>
  )
}

export default DecorativeSquare;
