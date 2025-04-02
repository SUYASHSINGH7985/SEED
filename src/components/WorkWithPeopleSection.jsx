import React from "react";

const WorkWithPeopleSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-end h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/4682/a108/32e1df4c32a36bd1898fe45bbc37895e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TyGwKXuHq1IQcyHinKG~S2i4f8acWhVdhfuRo05CtjyZaHYt3QNjKAdIax6kX506JbX570yWdJq-PXhWZODG5F~SVDBf~OlXeryA2yKKVYl~m~zhUN0J1~0I6rjoQnk-syEbE1zoJtXLFHoGHWiNG7gVUwAoC9BLvxvSxIHTac~~H7LNooefClZmTMjQvm2LrX-NdOGLaA9knW5OxdbA9EHemnrp34CzOeKBwIUJsPi4xZb3kKwc3uCCuVfjOI06JiB7vEsu7cWe6Im1jTmpPdODdtTYV5Die39EjfaKSAg5uVj7Q9bBRJl0DFqpdfgGL~53ntigXs5twYij5YCfRg__')",
      }}
    >
      {/* Transparent Text (Lower Positioned) */}
      <h2
        className="absolute bottom-10 text-3xl md:text-5xl font-bold text-white text-center px-6 leading-tight"
        style={{
          background: "rgba(255, 255, 255, 0.7)", // Transparent white background
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        And Work With The People, <br /> You Wanna Work With
      </h2>
    </section>
  );
};

export default WorkWithPeopleSection;
