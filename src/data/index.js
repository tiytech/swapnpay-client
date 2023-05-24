import { Blog1, Blog2, Blog3, FlagNGN, FlagUSA, IconAccessBank, IconBank, IconBUSD, IconCard, IconCardBlack, IconCardDark, IconCredit, IconCrypto, IconDebit, IconEcoBank, IconElectricity, IconFcmbBank, IconFirstBank, IconGTBank, IconHome, IconHomeDark, IconKeyStoneBank, IconLearning, IconMenu, IconMenuDark, IconPhone, IconProfile1, IconScan, IconScanDark, IconSchool, IconSchoolDark, IconSwap, IconSwapDark, IconSwapSuccess, IconTV, IconUbaBank, IconUSDC, IconUSDT } from "../assets"


export const blogItems = [
    {
        'image': Blog1,
        'author': 'Medium',
        'date': '12 Feb 2021',
        'title': 'Pay for School',
        'intro': 'Easily Pay your School tuition or secure your admission abroad by making payment on our platform.',
    },
    {
        'image': Blog2,
        'author': 'Philip Daniel',
        'date': '12 Mar 2021',
        'title': 'How to swap your currency',
        'intro': 'Easily Pay your School tuition or secure your admission abroad by making payment on our platform.',
    },
    {
        'image': Blog3,
        'author': 'Fintech Insider',
        'date': '12 Nov 2021',
        'title': 'Recieve crypto with ease',
        'intro': 'Easily Pay your School tuition or secure your admission abroad by making payment on our platform.',
    },
]


export const appUseItems = [
    {
        'icon': IconLearning,
        'title': 'Pay School Tuition',
        'description': 'Easily Pay your School tuition or secure your admission abroad by making payment on our platform.',
    },
    {
        'icon': IconLearning,
        'title': 'Buy stuffs online',
        'description': 'Easily buy stuffs on any online store with our virtual debit card.',
    },
    {
        'icon': IconLearning,
        'title': 'Receive international currencies',
        'description': 'Receive pounds, euros and dollars on swapnpay.',
    },
]


export const appCountries = [
    {
        'icon': FlagNGN,
        'title': 'NGN',
    },
    {
        'icon': FlagUSA,
        'title': 'USA',
    },
]


export const appCurrencies = [
    {
        'icon': FlagNGN,
        'title': 'NGN',
    },
    {
        'icon': FlagUSA,
        'title': 'USD',
    },
]

export const appTransactionsTypes = [
    {
        'type': 'AIRTIME',
        'icon': IconPhone,
        'title': 'Buy Airtime',
        'intro': 'Easily buy airtime',
    },
    {
        'type': 'DATA',
        'icon': IconPhone,
        'title': 'Buy Data',
        'intro': 'Easily buy data plan',
    },
    {
        'type': 'CABLE',
        'icon': IconTV,
        'title': 'Cable Subscription',
        'intro': 'Subscribe for TV cable',
    },
    {
        'type': 'ELECTRICITY',
        'icon': IconElectricity,
        'title': 'Electricity Payment',
        'intro': 'Subscribe for electrity',
    },
    // {
    //     'type': 'OTHERS',
    //     'icon': '',
    //     'title': '',
    //     'intro': '',
    // },
]

export const appTransactions = [
    {
        'type': 'DEBIT',
        'icon': IconDebit,
        'title': 'Money Sent',
        'recipient': 'DANIEL MOSES',
        'amount': '-$500',
        'date': '12/08/2022',
    },
    {
        'type': 'CREDIT',
        'icon': IconCredit,
        'title': 'Money Received',
        'recipient': 'DANIEL MOSES',
        'amount': '+$500',
        'date': '12/08/2022',
    },
    {
        'type': 'SWAP',
        'icon': IconSwapSuccess,
        'title': 'Swap',
        'recipient': 'Dollar to Naira',
        'amount': '+$500',
        'date': '30/01/2023',
    },
    {
        'type': 'DEBIT',
        'icon': IconDebit,
        'title': 'Money Sent',
        'recipient': 'DANIEL MOSES',
        'amount': '-$500',
        'date': '12/08/2022',
    },
    {
        'type': 'CREDIT',
        'icon': IconCredit,
        'title': 'Money Received',
        'recipient': 'DANIEL MOSES',
        'amount': '+$500',
        'date': '12/08/2022',
    },
    {
        'type': 'SWAP',
        'icon': IconSwapSuccess,
        'title': 'Swap',
        'recipient': 'Dollar to Naira',
        'amount': '+$500',
        'date': '30/01/2023',
    },
]

export const appReceiveTypes = [
    {
        'type': 'USERNAME',
        'icon': IconProfile1,
        'title': 'Recieve with @Username',
        'intro': 'Receive from another SwapnPay User',
    },
    {
        'type': 'CRYPTO',
        'icon': IconCrypto,
        'title': 'With Crypto',
        'intro': 'Fund your wallet with stable coins',
    },
    {
        'type': 'TRANSFER',
        'icon': IconBank,
        'title': 'Bank Transfer',
        'intro': 'Fund with your SwapnPay bank account',
    },
    {
        'type': 'CARD',
        'icon': IconCardBlack,
        'title': 'Card',
        'intro': 'Deposit with card',
    },
]

export const appReceiveCryptoTypes = [
    {
        'type': 'USDT',
        'icon': IconUSDT,
        'title': 'USDT',
        'address': '0xdac17f958d2e***',
    },
    {
        'type': 'USDC',
        'icon': IconUSDC,
        'title': 'USDC',
        'address': '0xdac17f958d2e***',
    },
    {
        'type': 'BUSD',
        'icon': IconBUSD,
        'title': 'BUSD',
        'address': '0xdac17f958d2e***',
    },
]

export const appPaymentTypes = [
    {
        'type': 'USERNAME',
        'icon': IconProfile1,
        'title': 'Send with @Username',
        'intro': 'Send to another SwapnPay User',
    },
    {
        'type': 'TRANSFER',
        'icon': IconBank,
        'title': 'Bank Transfer',
        'intro': 'Send to another SwapnPay user via transfer',
    },
    {
        'type': 'SCHOOL',
        'icon': IconSchoolDark,
        'title': 'Pay for School',
        'intro': 'Pay tuition in for foreign tertiary institution',
    },
]

export const appBeneficiaries = [
    {
        'initials': 'RI',
        'name': 'Roy Ibrahim',
    },
    {
        'initials': 'AD',
        'name': 'Abraham Daniel',
    },
    {
        'initials': 'WM',
        'name': 'Will Mike',
    },
    {
        'initials': 'PR',
        'name': 'Pamela Richard',
    },
]

export const appBanks = [
    {
        'icon': IconAccessBank,
        'name': 'Access Bank',
    },
    {
        'icon': IconEcoBank,
        'name': 'Eco Bank',
    },
    {
        'icon': IconFcmbBank,
        'name': 'FCMB',
    },
    {
        'icon': IconFirstBank,
        'name': 'First Bank',
    },
    {
        'icon': IconGTBank,
        'name': 'Guranty Trust Bank',
    },
    {
        'icon': IconKeyStoneBank,
        'name': 'Keystone Bank',
    },
    {
        'icon': IconUbaBank,
        'name': 'United Bank of Africa (UBA)',
    },
]

export const appReferrals = [
    {
        'name': 'William Ibrahim',
        'timeline': 'Joined 2 days ago',
        'auth': 'Signup complete',
    },
    {
        'name': 'Joyce Danladi',
        'timeline': 'Joined 2 days ago',
        'auth': 'Signup ongoing',
    },
    {
        'name': 'Amstrong Daniel',
        'timeline': 'Joined 2 days ago',
        'auth': 'Signup complete',
    },
    {
        'name': 'Kenneth Ofudi',
        'timeline': 'Joined 2 days ago',
        'auth': 'Signup ongoing',
    },
]

export const appVerificationTypes = [
    {
        'title': 'NIN',
        'status': 'VERIFIED'
    },
    // {
    //     'title': 'BVN',
    //     'status': 'UNVERIFIED'
    // },
    {
        'title': 'Voters Card',
        'status': 'UNVERIFIED'
    },
    {
        'title': 'Drivers License',
        'status': 'UNVERIFIED'
    },
    {
        'title': 'International Passport',
        'status': 'UNVERIFIED'
    },
]

export const user__menu__items = [
    {
        title: 'Home',
        icon: IconHome,
        iconDark: IconHomeDark
    },
    // {
    //     title: 'Pay School Tuition',
    //     icon: IconSchool,
    //     iconDark: IconSchoolDark,
    // },
    {
        title: 'Cards',
        icon: IconCard,
        iconDark: IconCardDark,
    },
    {
        title: 'Swap',
        icon: IconSwap,
        iconDark: IconSwapDark,
    },
    {
        title: 'Settings',
        icon: IconMenu,
        iconDark: IconMenuDark,
    },
]

export const admin__menu__items = [
    {
        title: 'Admin Home',
        icon: IconHome,
        iconDark: IconHomeDark
    },
    {
        title: 'School Payments',
        icon: IconSchool,
        iconDark: IconSchoolDark,
    },
    {
        title: 'Balances',
        icon: IconCard,
        iconDark: IconCardDark,
    },
    {
        title: 'Transactions',
        icon: IconSwap,
        iconDark: IconSwapDark,
    },
    {
        title: 'Verification',
        icon: IconScan,
        iconDark: IconScanDark,
    },
    {
        title: 'Admin Settings',
        icon: IconMenu,
        iconDark: IconMenuDark,
    },
]

export const root__modals = {
    showSignupSuccessModal: false,
    showPasswordResetSuccessModal: false,
    showAdminUpdateTransactionFeeModal: false,
    showAdminManageUserModal: false,
    showAdminUpdateReferralFeeModal: false,
    showAdminViewAdmissionLetterModal:false,
    showAdminViewSponsorIdModal:false
}

export const modal__pages = {
    showReciveScreen: false,
    showPaymentScreen: false,
    showBuyDataScreen: false,
    showBuyAirtimeScreen: false,
    showChangePinScreen: false,
    showChangePasswordScreen: false,
    showNinVerififcationScreen: false,
    showBvnVerififcationScreen: false,
    showVoterCardVerififcationScreen: false,
    showDriverCardVerififcationScreen: false,
    showInternationalPassportVerififcationScreen: false,
    showCableSubscriptionScreen: false,
    showElectricityPaymentScreen: false,
}

export const occupations = [
    'Student',
    'Self-Employed',
    'Doctor',
    'Nurse'
]

export const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]
