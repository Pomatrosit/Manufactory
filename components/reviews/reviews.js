import style from "./reviews.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import ReviewItem from "./reviewItem";
import {useRef, useEffect} from "react";

const Reviews = () => {

  const trackRef = useRef();
  const wrapperRef = useRef();
  const pacmanRef = useRef();
  const pacmanWrapRef = useRef();
  const packmanAfterRef = useRef();
  const packmanBeforeRef = useRef();
  const point1 = useRef();const point2 = useRef();const point3 = useRef();
  const point4 = useRef();const point5 = useRef();const point6 = useRef();
  const point7 = useRef();const point8 = useRef();const point9 = useRef();
  const point10 = useRef();const point11 = useRef();const point12 = useRef();
  const pointsArray = [point1, point2, point3,point4, point5, point6,point7, point8, point9,point10, point11, point12];

  let startPos;let trackTransform; let maxTrackTransform;
  let startPacmanPos;let pacmanTransform; let maxPacmanTransform;
  let pacmanIsActive=false;

  const startCalculations = () => {
    const length = trackRef.current.children.length;
    trackRef.current.style.width = `${376*length + (length - 1)*50}px`;
    trackRef.current.style.transform="translateX(0px)";
    pacmanRef.current.style.transform = "translateX(0px)";
    maxTrackTransform = wrapperRef.current.offsetWidth - trackRef.current.offsetWidth;
    maxPacmanTransform = wrapperRef.current.offsetWidth - 70;
  }

  useEffect(() => {
    startCalculations();
    window.addEventListener("resize", startCalculations);
  }, []);

  const eating = translate => {
    pointsArray.forEach(point => {
      if (point.current.offsetLeft <= translate + 20) point.current.style.opacity = "0";
      else point.current.style.opacity = "1";
    });
  }

  const setPacmanActive = () => {
    pacmanWrapRef.current.style.animation = "pacman-active 1s ease forwards";
    packmanAfterRef.current.style.animation = "pacman-after-active 0.7s ease infinite";
    packmanBeforeRef.current.style.animation = "pacman-before-active 0.7s ease infinite";
    pacmanIsActive=true;
  }

  const setPacmanUnactive = () => {
    packmanAfterRef.current.style.animation = "none";
    packmanBeforeRef.current.style.animation = "none";
    pacmanWrapRef.current.style.animation = "pacman-unactive 1s ease forwards";
    pacmanIsActive=false;
  }

  const onPacmanMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      if (!pacmanIsActive) pacmanWrapRef.current.style.animation = "pacman-hover 1s linear forwards";
    }
  }

  const onPacmanMouseLeave = () => {
    if (!pacmanIsActive) pacmanWrapRef.current.style.animation = "pacman-unhover 1s linear";
  }

  const mouseMoveHandler = e => {
    const delta = e.pageX - startPos + trackTransform;
    if (delta<=0 && delta >=maxTrackTransform){
      trackRef.current.style.transform = `translateX(${delta}px)`;
      const percentDelta = delta/maxTrackTransform;
      pacmanRef.current.style.transform = `translateX(${percentDelta*maxPacmanTransform}px)`;
      eating(percentDelta*maxPacmanTransform);
    }
  }

  const touchMoveHandler = e => {
    const delta = e.changedTouches[0].pageX - startPos + trackTransform;
    if (delta<=0 && delta >=maxTrackTransform){
      trackRef.current.style.transform = `translateX(${delta}px)`;
      const percentDelta = delta/maxTrackTransform;
      pacmanRef.current.style.transform = `translateX(${percentDelta*maxPacmanTransform}px)`;
      eating(percentDelta*maxPacmanTransform);
    }
  }

  const trackTouchStartHandler = e => {
    document.addEventListener("touchmove", touchMoveHandler);
    startPos = e.changedTouches[0].pageX;
    trackTransform = + trackRef.current.style.transform.replace("translateX(", "").replace("px)","");
    setPacmanActive();
  }

  const trackTouchEndHandler = e => {
    document.removeEventListener("touchmove", mouseMoveHandler);
    setPacmanUnactive();
  }

  const trackMouseDownHandler = e => {
    document.addEventListener("mousemove", mouseMoveHandler);
    startPos = e.pageX;
    trackTransform = + trackRef.current.style.transform.replace("translateX(", "").replace("px)","");
    setPacmanActive();
  }

  const trackMouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    setPacmanUnactive();
  }

  const pacmanMouseMoveHandler = e => {
    const delta = e.pageX - startPacmanPos + pacmanTransform;
    if (delta>=-10 && delta <= maxPacmanTransform){
      pacmanRef.current.style.transform = `translateX(${delta}px)`;
      const percentDelta = delta/maxPacmanTransform;
      trackRef.current.style.transform = `translateX(${percentDelta*maxTrackTransform}px)`;
      eating(delta);
    }
  }

  const pacmanTouchMoveHandler = e => {
    const delta = e.changedTouches[0].pageX - startPacmanPos + pacmanTransform;
    if (delta>=-10 && delta <= maxPacmanTransform){
      pacmanRef.current.style.transform = `translateX(${delta}px)`;
      const percentDelta = delta/maxPacmanTransform;
      trackRef.current.style.transform = `translateX(${percentDelta*maxTrackTransform}px)`;
      eating(delta);
    }
  }

  const pacmanMouseDownHandler = e => {
    document.addEventListener("mousemove", pacmanMouseMoveHandler);
    startPacmanPos = e.pageX;
    pacmanTransform = + pacmanRef.current.style.transform.replace("translateX(", "").replace("px)","");
    setPacmanActive();
  }

  const pacmanMouseUpHandler = () => {
    document.removeEventListener("mousemove", pacmanMouseMoveHandler);
    setPacmanUnactive();
  }

  const pacmanTouchStartHandler = e => {
    document.addEventListener("touchmove", pacmanTouchMoveHandler);
    startPacmanPos = e.changedTouches[0].pageX;
    pacmanTransform = + pacmanRef.current.style.transform.replace("translateX(", "").replace("px)","");
    setPacmanActive();
  }

  const pacmanTouchEndHandler = e => {
    document.removeEventListener("touchmove", pacmanTouchMoveHandler);
    setPacmanUnactive();
  }


  return(
    <section className={style.reviews}
      onMouseUp={() => {trackMouseUpHandler(); pacmanMouseUpHandler()}}
      onTouchEnd={() => {trackTouchEndHandler(); pacmanTouchEndHandler()}}
    >
      <div className="app-wrapper" ref={wrapperRef}>

        <div className={style.reviews__top}>
          <h3 className="section__subtitle">Отзывы</h3>
          <h2 className="section__title">Нам доверяют</h2>\
          <DecorativeSquare color="purple" top="0" left="0"/>
          <DecorativeSquare color="purple" top="40px" left="40px"/>
          <DecorativeSquare color="purple" top="-40px" left="-40px"/>
          <DecorativeSquare color="yellow" top="0" left="-40px"/>
        </div>

        <div className={style.reviews__track}
             ref={trackRef}
             onMouseDown={trackMouseDownHandler}
             onTouchStart={trackTouchStartHandler}
        >
          <ReviewItem width={376}/>
          <ReviewItem width={376}/>
          <ReviewItem width={376}/>
          <ReviewItem width={376}/>


        </div>

        <div className={style.pacman_line}>

          <div className={style.pacman}
               ref={pacmanRef}
               onMouseDown={pacmanMouseDownHandler}
               onTouchStart={pacmanTouchStartHandler}
          >
            <div className={style.pacman__wrap} ref={pacmanWrapRef}>
                <div className={style.pacman__after}
                     ref={packmanAfterRef}
                     onMouseEnter={onPacmanMouseEnter}
                     onMouseLeave={onPacmanMouseLeave}>
                </div>
                <div className={style.pacman__before}
                     ref={packmanBeforeRef}
                     onMouseEnter={onPacmanMouseEnter}
                     onMouseLeave={onPacmanMouseLeave}>
                </div>
            </div>
          </div>

          <div className={style.pacman__square} ref={point1}></div>
          <div className={style.pacman__square} ref={point2}></div>
          <div className={style.pacman__square} ref={point3}></div>
          <div className={style.pacman__square} ref={point4}></div>
          <div className={style.pacman__square} ref={point5}></div>
          <div className={style.pacman__square} ref={point6}></div>
          <div className={style.pacman__square} ref={point7}></div>
          <div className={style.pacman__square} ref={point8}></div>
          <div className={style.pacman__square} ref={point9}></div>
          <div className={style.pacman__square} ref={point10}></div>
          <div className={style.pacman__square} ref={point11}></div>
          <div className={style.pacman__square} ref={point12}></div>
        </div>

      </div>
      <img className={style.bgImage} src="/img/girl.png" alt="girl"/>
    </section>
  )
}

export default Reviews;
