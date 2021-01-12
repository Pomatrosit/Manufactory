import Footer from "../footer/footer";

const DefaultLayout = ({children}) => {
  return(
    <>
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
