import React from "react";

const BannerItem = ({ banner }) => {
  const { id, img, prev, next } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={img} className="w-full rounded-md " alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 top-2/4 left-5">
        <h3 className="text-6xl text-white font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h3>
      </div>
      <div className="absolute flex justify-end transform w-2/5 -translate-y-1/2 top-3/4 left-5">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-2/4 top-3/4 left-5 mt-20">
        <button className="btn bg-orange-400 mr-5 rounded-none rounded-sm">
          Discover More
        </button>
        <button className="btn hover:bg-orange-400 border-orange-400 text-orange-400 btn-outline rounded-none rounded-sm">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform right-5 bottom-2">
        <a href={`#slide${prev}`} className="btn rounded-none mr-2 text-white">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn rounded-none text-white">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
