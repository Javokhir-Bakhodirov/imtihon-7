import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/loading/Loading";

const Home = lazy(() => import("./home/Home"));
const Auth = lazy(() => import("./auth/Auth"));
const Profile = lazy(() => import("./Profile/Profile"));
const SignIn = lazy(() => import("./auth/signIn/SignIn"));
const SignUp = lazy(() => import("./auth/signUp/SignUp"));
const Private = lazy(() => import("./private/Private"));
const Products = lazy(() => import("./products/Products"));
const Users = lazy(() => import("./users/Users"));
const Details = lazy(() => import("./details/Details"));
const Cart = lazy(() => import("./cart/Cart"));

const RouteController = () => {
    return useRoutes([
        {
            path: "/",
            element: (
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            ),
        },
        {
            path: "/profile",
            element: (
                <Suspense fallback={<Loading />}>
                    <Private />
                </Suspense>
            ),
            children: [
                {
                    path: "/profile/",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <Profile />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/auth",
            element: (
                <Suspense fallback={<Loading />}>
                    <Auth />
                </Suspense>
            ),
            children: [
                {
                    path: "/auth/signin",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <SignIn />
                        </Suspense>
                    ),
                },
                {
                    path: "/auth/signup",
                    element: (
                        <Suspense fallback={<Loading />}>
                            <SignUp />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/products",
            element: (
                <Suspense fallback={<Loading />}>
                    <Products />
                </Suspense>
            ),
        },
        {
            path: "/users",
            element: (
                <Suspense fallback={<Loading />}>
                    <Users />
                </Suspense>
            ),
        },

        {
            path: "/users/:id",
            element: (
                <Suspense fallback={<Loading />}>
                    <Details />
                </Suspense>
            ),
        },

        {
            path: "/cart",
            element: (
                <Suspense fallback={<Loading />}>
                    <Cart />
                </Suspense>
            ),
        },
    ]);
};

export default RouteController;
