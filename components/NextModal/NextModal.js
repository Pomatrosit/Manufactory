import style from "./NextModal.module.css";

const NextModal = ({children, css, setModalOpen}) => {

  return(
      <div className={style.overlay} onClick ={() => setModalOpen(false)}>
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
