import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import {
  COMMENTS,
  SWIPERCONTAINER,
  SWIPERWRAPPER,
  SWIPERP,
  SWIPERPDIV,
  SWIPERPSPAN,
  SWIPERPSPANIMG,
  SWIPERPSPANUSERNAME,
  COMMENTSH3,
  PREVBUTTON,
  NEXRBUTTON,
  SLIDERBUTTONS
} from "./styled-components/custom-styled";
import user1 from "../imgs/userImage/user2.jfif";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const CommentsSlider = () => {
  const slideRef = useRef(null);

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const swiper= new Swiper(
      slideRef.current, {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        nav: true,
        autoplay: {
          delay: 3000,
        },

        navigation: {
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current
        }  

         
    
      });



      prevButtonRef.current.addEventListener('click',
      swiper.slidePrev
    )
    nextButtonRef.current.addEventListener('click',
    swiper.slideNext
  )

  const heandlePrevButtonClick=()=>{
 swiper.slidePrev();
  }

  
  const heandleNextButtonClick=()=>{
    swiper.slideNext();
     }



     prevButtonRef.current.addEventListener('click', heandlePrevButtonClick)
     nextButtonRef.current.addEventListener('click',heandleNextButtonClick)

  }, []) ;


  return (
    <section >
      <div>
        <COMMENTSH3>مشتریان ما چه میگویند ؟</COMMENTSH3>
      </div>
      <COMMENTS>
        <SWIPERCONTAINER ref={slideRef} className="swiper-container" >
          <SWIPERWRAPPER className="swiper-wrapper">
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
            <div className="swiper-slide">
              <SWIPERP>
                هتلی نوساز و بسیار زیبا است که هنوز همه قسمت های آن از جمله
                بازارچه و فروشگاههای آن راه اندازی نشده است کارکنان‌ هتل بسیار
                خوش برخورد و مهربان هستند رستوران سنتی آن زیبا است و کیفیت قابل
                قبولی دارد تنها ایراد هتل فاصله زیاد آن با مرکز شهر است.
              </SWIPERP>
              <SWIPERPDIV>
                <SWIPERPSPAN >
                  <SWIPERPSPANIMG
                    src={user1}
                    alt="user"
                    title="user"
                  />
                </SWIPERPSPAN>
                <SWIPERPSPANUSERNAME >مبینا خانزاده</SWIPERPSPANUSERNAME>
              </SWIPERPDIV>
            </div>
        
          </SWIPERWRAPPER>
        </SWIPERCONTAINER>

        <SLIDERBUTTONS>
        <PREVBUTTON ref={prevButtonRef} ><FaArrowLeft/></PREVBUTTON>
        <NEXRBUTTON ref={nextButtonRef}><FaArrowRight/></NEXRBUTTON>
        </SLIDERBUTTONS>
      </COMMENTS>
    </section>
  );
};

export default CommentsSlider;
