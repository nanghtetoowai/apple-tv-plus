"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { FirstRowCard } from "./carouselCards/FirstRowCard";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPauseCircle,
  FaPlayCircle,
} from "react-icons/fa";
import { SecondRowCard } from "./carouselCards/SecondRowCard";

export default class MovieCarousel extends Component {
  state = {
    autoPlay: true,
  };
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;

      return (
        <FaChevronRight
          className={className}
          style={{
            ...style,
            display: "block",
            position: "absolute",
            right: "10%",
            color: "#EBEDEF",
            width: 50,
            height: 50,
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <FaChevronLeft
          className={className}
          style={{
            ...style,
            display: "block",
            position: "absolute",
            left: "10%",
            color: "#EBEDEF",
            zIndex: 9,
            width: 50,
            height: 50,
          }}
          onClick={onClick}
        />
      );
    }

    function HiddenSampleNextArrow(props) {
      const { className, style, onClick } = props;

      return (
        <FaChevronRight
          className={className}
          style={{
            ...style,
            display: "none",
          }}
          onClick={onClick}
        />
      );
    }

    function HiddenSamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <FaChevronLeft
          className={className}
          style={{
            ...style,
            display: "none",
          }}
          onClick={onClick}
        />
      );
    }

    const settings = {
      className: "center scale-90 hover:scale-100",
      centerMode: true,
      infinite: true,
      centerPadding: "340px",
      autoplay: this.state.autoPlay,
      slidesToShow: 1,
      speed: 2800,
      autoplaySpeed: 2800,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    const settings2 = {
      infinite: true,
      slidesToShow: 4,
      autoplay: this.state.autoPlay,
      play: this.state.autoPlay,
      speed: 2000,
      autoplaySpeed: 1000,
      pauseOnHover:true,
      nextArrow: <HiddenSampleNextArrow className="hidden" />,
      prevArrow: <HiddenSamplePrevArrow className="hidden" />,
    };

    const settings3 = {
      infinite: true,
      slidesToShow: 4,
      autoplay: this.state.autoPlay,
      play: this.state.autoPlay,
      speed: 2500,
      autoplaySpeed: 800,
      pauseOnHover:true,
      nextArrow: <HiddenSampleNextArrow className="hidden" />,
      prevArrow: <HiddenSamplePrevArrow className="hidden" />,
    };

    const play = () => {
      this.setState({
        autoPlay: true,
      });
    };

    const pause = () => {
      this.setState({
        autoPlay: false,
      });
    };

    return (
      <div className="py-10 px-0 bg-black">
        <Slider {...settings}>
          <FirstRowCard
            link="https://www.apple.com/tv-pr/shows-and-films/s/sharper/images/show-home-graphic-header/key-art-02/ATV_Sharper_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1676046067551"
            category="Drama"
            title="A New Gold Rush begins"
          />
          <FirstRowCard
            link="https://tv.selectra.com/sites/tv.selectra.com/files/styles/content_750_width/public/nowandthen_1.png?itok=TLCMe28q"
            category="Drama"
            title="Now & Then"
          />
          <FirstRowCard
            link="https://www.androidauthority.com/wp-content/uploads/2021/07/Wolfwalkers-Apple-TV-Plus.jpg"
            category="Drama"
            title="A New Gold Rush begins"
          />
          <FirstRowCard
            link="https://www.igeeksblog.com/wp-content/uploads/2022/08/The-Morning-Show-for-Apple-TV.jpg"
            category="Drama"
            title="AA"
          />
          <FirstRowCard
            link="https://www.apple.com/tv-pr/articles/2022/03/apple-original-films-to-premiere-exhilarating-slate-of-new-films-from-award-winning-storytellers-in-2022-and-beyond/images/carousel/carousel-07/030822_Apple_Original_Films_Premiere_New_Films_in_2022_Killers_of_the_Flower_Moon_big_image_post.jpg.large.jpg"
            category="Drama"
            title="BB"
          />
        </Slider>

        <div className="mt-10">
          <Slider {...settings2}>
            <SecondRowCard
              link="https://www.apple.com/tv-pr/shows-and-films/s/sharper/images/show-home-graphic-header/key-art-02/ATV_Sharper_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1676046067551"
              category="Drama"
              title="A New Gold Rush begins"
            />
            <SecondRowCard
              link="https://tv.selectra.com/sites/tv.selectra.com/files/styles/content_750_width/public/nowandthen_1.png?itok=TLCMe28q"
              category="Drama"
              title="Now & Then"
            />
            <SecondRowCard
              link="https://www.androidauthority.com/wp-content/uploads/2021/07/Wolfwalkers-Apple-TV-Plus.jpg"
              category="Drama"
              title="A New Gold Rush begins"
            />
            <SecondRowCard
              link="https://www.igeeksblog.com/wp-content/uploads/2022/08/The-Morning-Show-for-Apple-TV.jpg"
              category="Drama"
              title="AA"
            />
            <SecondRowCard
              link="https://www.apple.com/tv-pr/articles/2022/03/apple-original-films-to-premiere-exhilarating-slate-of-new-films-from-award-winning-storytellers-in-2022-and-beyond/images/carousel/carousel-07/030822_Apple_Original_Films_Premiere_New_Films_in_2022_Killers_of_the_Flower_Moon_big_image_post.jpg.large.jpg"
              category="Drama"
              title="BB"
            />
          </Slider>
        </div>

        <div className="mt-10">
          <Slider {...settings3}>
            <SecondRowCard
              link="https://www.apple.com/tv-pr/shows-and-films/s/sharper/images/show-home-graphic-header/key-art-02/ATV_Sharper_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1676046067551"
              category="Drama"
              title="A New Gold Rush begins"
            />
            <SecondRowCard
              link="https://tv.selectra.com/sites/tv.selectra.com/files/styles/content_750_width/public/nowandthen_1.png?itok=TLCMe28q"
              category="Drama"
              title="Now & Then"
            />
            <SecondRowCard
              link="https://www.androidauthority.com/wp-content/uploads/2021/07/Wolfwalkers-Apple-TV-Plus.jpg"
              category="Drama"
              title="A New Gold Rush begins"
            />
            <SecondRowCard
              link="https://www.igeeksblog.com/wp-content/uploads/2022/08/The-Morning-Show-for-Apple-TV.jpg"
              category="Drama"
              title="AA"
            />
            <SecondRowCard
              link="https://www.apple.com/tv-pr/articles/2022/03/apple-original-films-to-premiere-exhilarating-slate-of-new-films-from-award-winning-storytellers-in-2022-and-beyond/images/carousel/carousel-07/030822_Apple_Original_Films_Premiere_New_Films_in_2022_Killers_of_the_Flower_Moon_big_image_post.jpg.large.jpg"
              category="Drama"
              title="BB"
            />
          </Slider>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex justify-center w-4/5">
            <button className="flex items-center border border-white rounded-full py-2 px-3">
              See full lineup <FaChevronRight />
            </button>
          </div>
          <div className="flex justify-center">
            {this.state.autoPlay ? (
              <FaPauseCircle
                size={40}
                className="flex text-white items-center hover:cursor-pointer"
                onClick={() => pause()}
              />
            ) : (
              <FaPlayCircle
                size={40}
                className="flex text-white items-center hover:cursor-pointer"
                onClick={() => play()}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
