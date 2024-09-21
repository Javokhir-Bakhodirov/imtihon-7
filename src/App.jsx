import FooterComponent from "./components/footer/FooterComponent";
import Nav from "./components/Nav/Nav";
import RouteController from "./routes";
import { useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();
    return (
        <>
            {pathname.includes("/auth") ? null : <Nav />}
            <RouteController />
            {pathname.includes("/auth") ? null : <FooterComponent />}
        </>
    );
}

export default App;
