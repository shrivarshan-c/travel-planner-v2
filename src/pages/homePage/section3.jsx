import { Carousel, Slider, SliderContainer } from '../../components/uilayouts/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import './section3.css';
import { destinations } from '../../constants/destination';
import { useNavigate } from "react-router-dom";
import background from '../../assets/hero3.jpg';
function Section3() {
  const navigate = useNavigate();
  const OPTIONS = { loop: true };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-20 section3 ">

      {/* Background Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-[83vh] opacity-[0.08] p-10 bg-cover bg-center rounded-b-[40px] rounded-t-4xl"
        style={{ backgroundImage: `url(${background})`}}
      ></div>

<div className="section3-title  flex gap-2 text-center text-5xl font-light bg-gradient-to-b from-white/90 to-white/60 bg-clip-text text-transparent  w-full">
 <span> Uncover the hidden  </span>
  <span className="ml-2 p-2 inline-block bg-green-500/60 text-white px-3 py-1 rotate-[-2deg] rounded-md shadow-md">
  gems of our country
</span>


</div>



      <Carousel
        options={OPTIONS}
        plugins={[
          AutoScroll({
            speed: 2,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            startDelay: 100,
          }),
        ]}
        className="relative z-10 w-4/5 mx-auto"
      >
        <SliderContainer className="gap-4 h-[600px] md:text-3xl text-md">

          {destinations.map((des, index) => (
            <Slider
              key={index}
              className="w-[30%] bg-transparent rounded-xl h-full relative overflow-hidden cursor-pointer"
              onClick={() => navigate(`/destination/${des.id}`)}
            >
              <div className="carousal">
                <img src={des.img} alt={des.name} className="w-full h-full object-cover" />

                <div className="info">
                  <p className="title">{des.name}</p>

                  {/* Explore Button */}
                  <button className="button">
                    <svg
                      className="button-cosm"
                      fill="#000"
                      width="128"
                      height="128"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M243.07324,157.43945c-1.2334-1.47949-23.18847-27.34619-60.46972-41.05859-1.67579-17.97412-8.25293-34.36328-18.93653-46.87158C149.41309,52.8208,128.78027,44,104,44,54.51074,44,22.10059,88.57715,20.74512,90.4751a3.99987,3.99987,0,0,0,6.50781,4.65234C27.5625,94.6958,58.68359,52,104,52c22.36816,0,40.89648,7.85107,53.584,22.70508,8.915,10.437,14.65625,23.9541,16.65528,38.894A133.54185,133.54185,0,0,0,136,108c-25.10742,0-46.09473,6.48486-60.69434,18.75391-12.65234,10.63379-19.91015,25.39355-19.91015,40.49463a43.61545,43.61545,0,0,0,12.69336,31.21923C76.98438,207.3208,89.40234,212,104,212c23.98047,0,44.37305-9.4668,58.97461-27.37744,12.74512-15.6333,20.05566-37.145,20.05566-59.01953,0-.1128-.001-.22559-.001-.33838,33.62988,13.48486,53.62207,36.96631,53.89746,37.2959a4.00015,4.00015,0,0,0,6.14648-5.1211ZM104,204c-27.89746,0-40.60449-19.05078-40.60449-36.75146C63.39551,142.56592,86.11621,116,136,116a124.37834,124.37834,0,0,1,38.97266,6.32617q.05712,1.63038.05761,3.27686C175.03027,177.07129,139.29785,204,104,204Z"></path>
                    </svg>

                    <svg className="highlight" viewBox="0 0 144.75 77.18" preserveAspectRatio="none">
                      <g transform="translate(-171.5,-126.1)">
                        <g fill="none" strokeWidth="17" strokeLinecap="round" strokeMiterlimit="10">
                          <path d="M180.0,169.45c0,0 12.65,-25.55 24.24,-25.66c6.39,-0.06 -5.89,46.12 4.90,50.63c10.22,4.26 24.14,-52.38 37.86,-59.80c3.31,-1.79 -5.35,45.88 -0.78,58.34c5.19,14.18 33.36,-58.38 36.43,-56.91c4.67,2.23 -0.06,44.42 5.22,47.53c6.04,3.55 19.87,-20.77 19.87,-20.77"/>
                        </g>
                      </g>
                    </svg>

                    Explore
                  </button>

                </div>
              </div>
            </Slider>
          ))}
        </SliderContainer>
      </Carousel>


      <svg height="0" width="0">
        <filter id="handDrawnNoise">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1"></feTurbulence>
          <feDisplacementMap in2="noise" in="SourceGraphic" scale="3"></feDisplacementMap>
        </filter>
        <filter id="handDrawnNoise2">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" seed="1010"></feTurbulence>
          <feDisplacementMap in2="noise" in="SourceGraphic" scale="3"></feDisplacementMap>
        </filter>
      </svg>

    </section>
  );
}

export default Section3;
