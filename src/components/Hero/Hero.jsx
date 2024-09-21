import React from "react";
import { heroArr } from "../../db";
import Container from "../../utils/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        autoplay: true,
    };
    return (
        <section className="hero-section bg-base-200 py-8 pt-[50px]">
            <Container>
                <div className="">
                    <Slider {...settings}>
                        {heroArr.map(hero => {
                            return (
                                <div key={hero.id} className="w-full flex ">
                                    <div className="flex justify-between max-sm:flex max-sm:flex-col-reverse max-sm:px-2 sm:flex sm:flex-col-reverse md:pt-[110px] md:px-7 lg:flex-row items-center lg:justify-between gap-6 sm:px-2">
                                        <div className="hero-text max-w-lg text-center lg:text-left space-y-4 max-sm ">
                                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold max-sm:text-2xl">
                                                {hero.title}
                                            </h1>
                                            <p className="text-lg sm:text-2xl lg:text-3xl ">
                                                {hero.description}
                                            </p>
                                            <button className="btn btn-primary ">
                                                Order Now
                                            </button>
                                        </div>

                                        <div className="hero-img flex-1 max-w-full sm:max-w-md lg:max-w-lg">
                                            <img
                                                className="w-full h-auto "
                                                src={hero.image}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
