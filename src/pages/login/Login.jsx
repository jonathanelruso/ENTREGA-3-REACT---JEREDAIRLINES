import Footer from "../../components/global-components/footer/Footer";
import Header from "../../components/global-components/header/Header";
import LoginForm from "../../components/login-components/login-form/LoginForm";

function Login () {
    return (
        <>
             <Header logo_image={"./logo/white-logo.png"} shrinkOnScroll ={false}/>
             <LoginForm/>
             <Footer/>  
        </>
       
        
        
    )
}

export default Login;