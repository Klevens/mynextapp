import React from "react";
import Image from "next/image";
import Calamardo from "../img/Calamardo3.gif";
import Calamardo2 from "../img/Calamardo2.gif";
import Calamardo3 from "../img/CalamardoBroly.jpg";
import Calamardo4 from "../img/CalamardoCabello.jpg";
import Calamardo5 from "../img/CalamardoConCell.jpg";
import Calamardo6 from "../img/CalamardoDragon.jpg";

const yosise = 200;

export default function HomePage() {
  return (
    <div className="Wrapper">
      <Image
        width={yosise}
        height={yosise}
        src={Calamardo2}
        alt="Calamardo Move"
      ></Image>

      <Image
        width={yosise}
        height={yosise}
        src={Calamardo}
        alt="Calamardo Guapo"
      ></Image>

      <Image
        width={yosise}
        height={yosise}
        src={Calamardo6}
        alt="Calamardo Dragon"
      ></Image>
      <Image
        width={yosise}
        height={yosise}
        src={Calamardo3}
        alt="Calamardo Broly"
      ></Image>
      <Image
        width={yosise}
        height={yosise}
        src={Calamardo4}
        alt="Calamardo Cabello"
      ></Image>
      <Image
        width={yosise}
        height={yosise}
        src={Calamardo5}
        alt="Calamardo con Cell"
      ></Image>

      <div className="Clock">
        <iframe
          src="https://free.timeanddate.com/clock/i91qbnhf/n4616/fn7/fs48/ftb/pd2/th2"
          frameborder="0"
          width="304"
          height="69"
        ></iframe>
      </div>

      <div className="Video">
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/H7lEUAjZJuM?autoplay=1&mute=0"
          title="7 Hour - TIMER &amp; ALARM - 1080p - COUNTDOWN"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
