import Footer from "../footer/footer";
import {connect} from "react-redux";
import {setModalOpen} from "../../store/actions/modalAction";
import Modal from "../NextModal/NextModal";

const DefaultLayout = ({children, isModalOpen, setModalOpen}) => {

  return(
    <>
      {children}
      <Footer />

      { isModalOpen &&
        <Modal css={{padding:"20px", maxWidth:"400px"}}
               setModalOpen={setModalOpen}
               >

         <div style={{fontSize:20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sint fugiat reiciendis,
         necessitatibus cumque, assumenda laudantium inventore modi, a voluptatem, aspernatur est.
         Reprehenderit aut, nam suscipit ratione totam recusandae inventore!</div>

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
