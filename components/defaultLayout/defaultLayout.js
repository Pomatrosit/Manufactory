import {connect} from "react-redux";
import {setModalOpen} from "../../store/actions/modalAction";
import Modal from "../NextModal/NextModal";
import Form from "../NextForm/NextForm";
import Footer from "../footer/footer";

const DefaultLayout = ({children, isModalOpen, setModalOpen}) => {

  return(
    <>
      {children}
      <Footer />

      { isModalOpen &&
        <Modal css={{padding:"0px", maxWidth:"360px"}}
               setModalOpen={setModalOpen}
        >

          <Form title="Оставьте заявку на обратный звонок"
                css={{padding:"40px", maxWidth:"100%"}}
          />

        </Modal>
      }
    </>
  )
}

const mapStateToProps = state => {
  return{
    isModalOpen:state.modal.isModalOpen
  }
}

const mapDispatchToProps = {
    setModalOpen
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
