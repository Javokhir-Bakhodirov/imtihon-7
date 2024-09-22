import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { SiWebauthn } from "react-icons/si";
import { MdShoppingBasket } from "react-icons/md";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import Theme from "../theme/Theme";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className=" fixed top-0 left-0 w-full flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 z-40">
            <div className="max-w-screen-2xl w-full mx-auto px-2 pt-5  flex items-center justify-between md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <Link to="/">
                        <MdShoppingBasket className="text-zinc-50 w-[30px] h-[30px]" />
                    </Link>
                </h1>

                <div className="relative md:justify-self-center">
                    <label className="btn btn-neutral p-2 swap swap-rotate relative md:hidden">
                        <input
                            onChange={() => setOpen(open => !open)}
                            type="checkbox"
                            checked={open}
                        />

                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>

                    <ul
                        className={` justify-self-center  menu bg-base-200 absolute md:static md:flex md:menu-horizontal  right-0 p-2 rounded-box gap-1 transform transition-all duration-300 ease-in-out ${
                            open
                                ? "opacity-100 translate-y-0 visible"
                                : "opacity-0 -translate-y-3 invisible"
                        } md:opacity-100 md:translate-y-0 md:visible`}>
                        <li>
                            <NavLink to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Home
                            </NavLink>
                        </li>

                        {localStorage.getItem("token") ? (
                            <li className="md:hidden">
                                <Link to="/profile">
                                    <CgProfile className="text-currentColor w-5 h-5" />{" "}
                                    Profile
                                </Link>{" "}
                            </li>
                        ) : (
                            <li className=" md:hidden max-w-[119px] ">
                                <Link
                                    to="/auth/signup"
                                    className="btn btn-ghost btn-sm">
                                    Sign Up
                                </Link>

                                <Link
                                    to="/auth/signin"
                                    className="btn btn-primary btn-sm">
                                    Sign In
                                </Link>
                            </li>
                        )}

                        <li>
                            <NavLink to="/products">
                                <SiMarketo className="text-currentColor w-5 h-5" />{" "}
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <AiOutlineShoppingCart className="text-currentColor w-5 h-5" />
                                Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users">
                                <FaUsers className="text-currentColor w-5 h-5" />
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div
                    className="max-md:hidden flex items-center  md:justify-self-end"
                    to="/profile">
                    {localStorage.getItem("token") ? (
                        <Link to="/profile">
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <CgProfile className="w-[35px] h-[35px] " />
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className="flex items-center ">
                            <Link to="/auth/signup" className="">
                                <button className="btn btn-ghost btn-sm">
                                    Sign Up
                                </button>
                            </Link>
                            <div>/</div>
                            <Link to="/auth/signin" className="m">
                                <button className="btn btn-primary btn-sm">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Nav;
