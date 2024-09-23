import FooterComponent from "./components/footer/FooterComponent";
import Nav from "./components/Nav/Nav";
import RouteController from "./routes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);
    return (
        <>
            {pathname.includes("/auth") ? null : <Nav />}
            <RouteController />
            {pathname.includes("/auth") ? null : <FooterComponent />}
        </>
    );
}

export default App;
