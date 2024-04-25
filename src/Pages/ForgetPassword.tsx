import ForgetPasswordForm from "../Components/ForgetPassword/ForgetPasswordForm"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const ForgetPassword = () => {
  return (
    <div>
      <Header show={false} >
        <ForgetPasswordForm />
      </Header>
      <Footer />
    </div>
  )
}

export default ForgetPassword
