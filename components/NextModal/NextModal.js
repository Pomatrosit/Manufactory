import style from "./NextModal.module.css";
import {useEffect, useRef} from "react";
import {setScrollAvailable, setScrollUnavailable} from "../../utils";

const NextModal = ({children, css, setModalOpen}) => {

  const modalRef = useRef();

  const getBodyScrollTop = () => {
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
  }

  const close = () => {
    setScrollAvailable();
    setModalOpen(false);
  }

  useEffect(() => {
    setScrollUnavailable();
  },[]);

  return(
      <div className={style.overlay} onClick ={close}>
       <div onClick ={e => e.stopPropagation()}
             className={style.modal}
             style={{maxWidth:css.maxWidth || "100%"}}
             ref={modalRef}
           >

           <div className={style.modal__content} style={{padding:css.padding || "0"}}>
             {children}
           </div>

        </div>
      </div>
  )
}

export default NextModal;
