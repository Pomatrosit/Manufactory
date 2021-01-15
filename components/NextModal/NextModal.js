import style from "./NextModal.module.css";
import {useEffect} from "react";

const NextModal = ({children, css, setModalOpen}) => {

  const getBodyScrollTop = () => {
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
  }

  const close = () => {
    document.body.style.overflow="auto";
    document.body.style.position="relative";
    document.body.style.top = `0px`;
    window.scrollTo(0, document.body.dataset.scrollY);
    setModalOpen(false);
  }

  useEffect(() => {
    document.body.dataset.scrollY = getBodyScrollTop();
    document.body.style.overflowY="scroll";
    document.body.style.position="fixed";
    document.body.style.top="0";
    document.body.style.right="0";
    document.body.style.left="0";
    document.body.style.bottom="0";
    document.body.style.top = `-${document.body.dataset.scrollY}px`;
  },[]);

  return(
      <div className={style.overlay} onClick ={close}>
       <div onClick ={e => e.stopPropagation()}
             className={style.modal}
             style={{maxWidth:css.maxWidth || "100%"}}
           >

           <div className={style.modal__content} style={{padding:css.padding || "0"}}>
             {children}
           </div>

        </div>
      </div>
  )
}

export default NextModal;
