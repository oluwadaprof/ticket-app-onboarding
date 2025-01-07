const onboarding_screens = [
    {
        id: 1,
        image: require('../assets/images/splash_1.png'),
        title: "Search your trip easily",
        desc: "🔍 Discover your next adventure with ease! 🌍 Find the best routes and options tailored just for you."
    },
    {
        id: 2,
        image: require('../assets/images/splash_2.png'),
        title: "Explore destinations and promotions",
        desc: "✈️ Uncover amazing deals and hidden gems! 💰 Your dream vacation is just a click away."
    },
    {
        id: 3,
        image: require('../assets/images/splash_3.png'),
        title: "Manage your trips",
        desc: "📅 Keep all your travel plans organized! 🧳 Effortlessly track your itineraries and bookings."
    }
]

const login = "LOGIN"
const register = "REGISTER"
const forgot_password = "FORGOT_PASSWORD"

export default {
    onboarding_screens,
    login,
    register,
    forgot_password
}