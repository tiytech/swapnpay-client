// PUBLIC
import Blog from "./public/Blog"
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


// IMAGES
import IconImage from "../components/images/IconImage"


// UTILS
import NotFound from "./utils/NotFound"
import PrivateRoute from "./utils/PrivateRoute"
import LoadingToRedirect from "./utils/LoadingToRedirect"

// ADMIN PAGES
import AdminDashboard from "./dashboard/admin/AdminDashboard"
import AdminSchoolPayments from "./dashboard/admin/AdminSchoolPayments"
import AdminBalances from "./dashboard/admin/AdminBalances"
import AdminVerification from "./dashboard/admin/AdminVerification"
import AdminTransactions from "./dashboard/admin/AdminTransactions"
import AdminSettings from "./dashboard/admin/AdminSettings"
import AdminManageUsers from "./dashboard/admin/AdminManageUsers"


export {
    // PUBLIC
    Blog,
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


    // IMAGES
    IconImage,


    // UTILS
    NotFound,
    PrivateRoute,
    LoadingToRedirect,


    // ADMIN
    AdminDashboard,
    AdminSchoolPayments,
    AdminBalances,
    AdminVerification,
    AdminTransactions,
    AdminSettings,
    AdminManageUsers
}