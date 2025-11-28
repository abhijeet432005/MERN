import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Nav-Bar/Navbar";
import ReactLenis from "lenis/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, LoginUser } from "./store/actions/userAction";
import { asyncGetCart } from "./store/actions/cartAction";
import { initCompare } from "./store/actions/compareAction";
import Footer from "./pages/Footer";

// username: carterb
// password: carterbpass

const App = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userSlice.user) || [];

  useEffect(() => {
    if (user.id) {
      dispatch(asyncGetCart(user.id))
    }
  }, [user?.id])

  useEffect(() => {
    dispatch(LoginUser())
    dispatch(initCompare())

  }, [])


  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-[#FFFFFF] cursor-default ${pathname !== '/login' && ""} `}>
      <ReactLenis
        root
        options={{
          // smoothWheel: true,
          // smoothTouch: true,
          lerp: 0.065, // Smooth easing (0.05 - 0.1 recommended)
          // wheelMultiplier: 1.1, // Scroll speed smooth
          // touchMultiplier: 1.4, // Mobile smooth
          // infinite: false,
          // gestureDirection: "vertical",
        }}
      >
        <Navbar />

        <MainRoutes />
        <Footer />
      </ReactLenis>
    </div>
  );
};

export default App;