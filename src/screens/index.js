// PUBLIC
import About from "./public/About"
import Landing from "./public/Landing"
import SwapScreen from "./public/SwapScreen"


// AUTH
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import ResetPassword from "./auth/forgot-password/ResetPassword"
import ForgotPassword from "./auth/forgot-password/ForgotPassword"
import SignupStepOne from "./auth/signup/Signup.StepOne"
import SignupStepTwo from "./auth/signup/Signup.StepTwo"
import SignupStepThree from "./auth/signup/Signup.StepThree"
import SignupStepFour from "./auth/signup/Signup.StepFour"
import SignupStepFive from "./auth/signup/Signup.StepFive"
import SignupVerifyBVN from "./auth/signup/Signup.VerifyBVN"
import SignupVerifyEmail from "./auth/signup/Signup.VerifyEmail"


// DASHBOARD
import Swap from "./dashboard/Swap"
import Home from "./dashboard/Home"
import Cards from "./dashboard/Cards"
import Settings from "./dashboard/Settings"
import Dashboard from "./dashboard/Dashboard"
import Payments from "./dashboard/subscreens/pay/Payments"


// UTILS
import NotFound from "./utils/NotFound"
import PrivateRoute from "./utils/PrivateRoute"
import LoadingToRedirect from "./utils/LoadingToRedirect"


export {
    // PUBLIC
    About,
    Landing,
    SwapScreen,


    // AUTH
    Login,
    Signup,
    ResetPassword,
    ForgotPassword,
    SignupStepOne,
    SignupStepTwo,
    SignupStepThree,
    SignupStepFour,
    SignupStepFive,
    SignupVerifyBVN,
    SignupVerifyEmail,


    // DASHBOARD
    Swap,
    Home,
    Cards,
    Payments,
    Settings,
    Dashboard,
    

    // UTILS
    NotFound,
    PrivateRoute,
    LoadingToRedirect,
}