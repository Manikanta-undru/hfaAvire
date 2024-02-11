'use client';
import { motion, useMotionValueEvent, useScroll, useViewportScroll, useSpring, useAnimate, motionValue, useAnimation, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
import "./styles.sass"
import background from "./assets/images/SL_042620_30310_10 1.svg"
import logo from "./assets/images/logo.svg"
import underlineVector from "./assets/images/underlineVector.svg"
import cup from "./assets/images/cup.svg"
import badge from "./assets/images/badge.svg"
import flower from "./assets/images/flower.svg"
import star from "./assets/images/star.svg"
import curvedLine from "./assets/images/curved-line.svg"
import doctor from "./assets/images/Pexels Photo by Helena Lopes.png"
import enthusiasticWomen from "./assets/images/enthusiastic-woman-cheering-showing-cellphone-screen-smartphone-app-interface-standing-beig-PhotoRoom 1.png"
import centerMobileMock from "./assets/images/light.png"
import leftMobileMock from "./assets/images/smartphone-mockup-front-view.png"
import rightMobileMock from "./assets/images/smartphone-mockup-front-view453.png"
import tooth from "./assets/images/Group (1).svg"
import insurance from "./assets/images/Vector (2).svg"
import nurse from "./assets/images/Vector (1).svg"
import wallet from "./assets/images/Group.svg"
import appleStore from "./assets/images/Apple store.png"
import googlePlay from "./assets/images/play store.png"
import guy from "./assets/images/charming-impressed-smiling-happy-guy-with-beard-holding-smartphone-showing-something-blank-screen-pointing-display-grin-astonished-recommend-good-app-giveaway-white-wall-PhotoRoom 1.png"
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const frameOneRef = useRef<HTMLDivElement>(null);
  const frameThreeRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const womenImgRef = useRef<HTMLImageElement>(null);
  const centerMobileMockRef = useRef<HTMLImageElement>(null);
  const rightMobileMockRef = useRef<HTMLImageElement>(null);
  const leftMobileMockRef = useRef<HTMLImageElement>(null);
  // const mobileMockGroupRef = useRef<HTMLDivElement>(null);
  const [mobileMockGroupRef, animate] = useAnimate();
  const floatingInfoOneRef = useRef<HTMLDivElement>(null);
  const floatingInfoTwoRef = useRef<HTMLDivElement>(null);
  const floatingInfoThreeRef = useRef<HTMLDivElement>(null);
  const floatingInfoFourRef = useRef<HTMLDivElement>(null);
  const floatingInfoBlock = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [frameOneStyles, setFrameOneStyles] = useState({ top: '0%', bottom: '0%' });
  const [frameThreeStyles, setFrameThreeStyles] = useState({ top: '20%', bottom: '0%', translateY: '120%' })
  // const mobileMockGroupStyles = useState({ scale: 0.255, rotate: -5, left: 21.5, top: 2.1 })
  const [mobileMockGroupStyles, setMobileMockGroupStyles] = useState({ scale: 0.255, rotate: -5, left: '21.5%', top: '2.1%' })
  const [floatInfoStyles, setFloatInfoStyles] = useState(
    {
      floatingInfoOne: { translateX: '-100%' },
      floatingInfoTwo: { translateX: '-100%' },
      floatingInfoThree: { translateX: '100%' },
      floatingInfoFour: { translateX: '100%' }
    }
  );
  const [floatInfoBlockStyles, setFloatInfoBlockStyles] = useState({ translateY: '0%'})
  // const frameOneSpring = useSpring
  useMotionValueEvent(scrollYProgress, 'change', async (progress) => {
    const frameOne = frameOneRef.current;
    const circle = circleRef.current;
    const scrollThresholdStart = 1 / 6;
    const scrollThresholdEnd = 2 / 6;
    if (frameOne) {
      const scrollThreshold = 1 / 3;
      const frameOneTop = -100 * (progress / scrollThreshold);
      const frameOneBottom = 100 * (progress / scrollThreshold);
      setFrameOneStyles({ top: `${frameOneTop}%`, bottom: `${frameOneBottom}%` });
    }


    const clampedProgress = Math.max(Math.min(progress, scrollThresholdEnd), scrollThresholdStart);

    if (circle) {
      const scrollPercentage = (clampedProgress - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart);
      const circleBottom = scrollPercentage * 20;
      console.log(scrollPercentage, scrollThresholdStart, scrollThresholdEnd, clampedProgress);
      circle.style.bottom = `${-70 + circleBottom}%`;
      circle.style.background = `linear-gradient(180deg, #FFFFFF 0%, #FF8412 ${scrollPercentage * 30}%,#FF8412 100%)`;
    }
    if (womenImgRef.current) {
      const clampedProgress = Math.max(Math.min(progress, scrollThresholdEnd), 0);
      const scrollPercentage = (clampedProgress - 0) / (scrollThresholdEnd - 0);
      const womenImg = womenImgRef.current;
      womenImg.style.scale = `${1 - scrollPercentage}`;
      womenImg.style.translate = `-50% ${-50 + scrollPercentage * 100}%`;
    }
    if (mobileMockGroupRef.current) {
      const clampedProgress = Math.max(Math.min(progress, scrollThresholdEnd), 0);
      const scrollPercentage = (clampedProgress - 0) / (scrollThresholdEnd - 0);
      const rotate = -5 + (0 - (-5)) * scrollPercentage;
      const scale = 0.255 + (1 - 0.255) * scrollPercentage;
      const left = 21.5 - (21.5 - 0) * scrollPercentage;
      const top = 2.1 - (2.1 - (-16)) * scrollPercentage;
      const mobileMockGroup = mobileMockGroupRef.current;

      // await animate(mobileMockGroup, { scale: scale, rotate: rotate, left: `${left}%`, top: `${top}%` });
      // mobileMockGroup.style.scale = `${scale}`;
      // mobileMockGroup.style.rotate = `${rotate}deg`;
      // mobileMockGroup.style.left = `${left}%`;
      // mobileMockGroup.style.top = `${top}%`;
      setMobileMockGroupStyles({ scale: scale, rotate: rotate, left: `${left}%`, top: `${top}%` })
      // setMobileMockGroupStyles({ scale: scale, rotate: rotate, left: left, top: top })
      if (leftMobileMockRef.current) {
        const leftMobileMock = leftMobileMockRef.current;
        const leftMockLeft = 50 - (50 - 32) * scrollPercentage;
        const leftMockRotate = 15 - (15 - 0) * scrollPercentage;
        leftMobileMock.style.left = `${leftMockLeft}%`;
        leftMobileMock.style.rotate = `${leftMockRotate}deg`;
      }
      if (rightMobileMockRef.current) {
        const rightMobileMock = rightMobileMockRef.current;
        const rightMockLeft = 50 + (68 - 50) * scrollPercentage;
        rightMobileMock.style.left = `${rightMockLeft}%`;
        rightMobileMock.style.rotate = `${-15 + (15 - 0) * scrollPercentage}deg`;
      }
      if (floatingInfoOneRef && floatingInfoTwoRef && floatingInfoThreeRef && floatingInfoFourRef) {
        const floatingInfoOne = floatingInfoOneRef.current;
        const floatingInfoTwo = floatingInfoTwoRef.current;
        const floatingInfoThree = floatingInfoThreeRef.current;
        const floatingInfoFour = floatingInfoFourRef.current;

        if (floatingInfoOne) {
          const floatingInfoOneTranslateX = -100 + (35 - (-100)) * scrollPercentage;
          // floatingInfoOne.style.transform = `translateX(${floatingInfoOneTranslateX}%)`;
          setFloatInfoStyles(prevStyles => ({ ...prevStyles, floatingInfoOne: { translateX: `${floatingInfoOneTranslateX}%` } }))
        }
        if (floatingInfoTwo) {
          const floatingInfoTwoTranslateX = -100 + (60 - (-100)) * scrollPercentage;
          // floatingInfoTwo.style.transform = `translateX(${floatingInfoTwoTranslateX}%)`;
          setFloatInfoStyles(prevStyles => ({ ...prevStyles, floatingInfoTwo: { translateX: `${floatingInfoTwoTranslateX}%` } }))
        }
        if (floatingInfoThree) {
          const floatingInfoThreeTranslateX = 100 - (100 - (-35)) * scrollPercentage;
          // floatingInfoThree.style.transform = `translateX(${floatingInfoThreeTranslateX}%)`;
          setFloatInfoStyles(prevStyles => ({ ...prevStyles, floatingInfoThree: { translateX: `${floatingInfoThreeTranslateX}%` } }))
        }
        if (floatingInfoFour) {
          const floatingInfoFourTranslateX = 100 - (100 - (-60)) * scrollPercentage;
          // floatingInfoFour.style.transform = `translateX(${floatingInfoFourTranslateX}%)`;
          setFloatInfoStyles(prevStyles => ({ ...prevStyles, floatingInfoFour: { translateX: `${floatingInfoFourTranslateX}%` } }))
        }
      }
    }
    if (frameThreeRef.current) {
      const scrollThresholdStart = 2 / 3;
      const scrollThresholdEnd = 3 / 3;
      const clampedProgress = Math.max(Math.min(progress, scrollThresholdEnd), scrollThresholdStart);
      const frameThreeTranslateY = 120 * ((clampedProgress - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart));
      const translateY = 120 - frameThreeTranslateY;
      const floatInfoTranslateY = -100 * ((clampedProgress - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart));
      setFrameThreeStyles(prevStyles => ({ ...prevStyles, translateY: `${translateY}%` }));
      if(floatingInfoBlock.current){
        setFloatInfoBlockStyles({ translateY: `${floatInfoTranslateY}%` })
      }
    }
  });

  return (
    <main className="main">
      <Image src={background} alt="logo" className="background-image" />
      <motion.section className="home-frame-one" ref={frameOneRef} animate={frameOneStyles}>
        <nav className="nav">
          <Image src={logo} alt="Logo" className="nav-logo" />
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-btn">Contact us</li>
          </ul>
        </nav>
        <section className="hero">
          <button className="hero-cta">Coming Soon</button>
          <h1 className="hero-title">Get notified when <br /> we launch</h1>
          <Image src={underlineVector} alt="underline" className="underline" />
          <div className="flex justify-between">
            <section className=" text-text-primary text-[0.4rem] flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-1 ">
                <div className=" bg-primary rounded-full flex justify-center items-center w-6 h-6 ">
                  <Image src={cup} alt="cup" className=" scale-[0.8]" />
                </div>
                <span className="font-extrabold leading-none">1 Lakh<br />Patients</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className=" bg-primary rounded-full flex justify-center items-center w-6 h-6">
                  <Image src={badge} alt="badge" className=" scale-[0.8]" />
                </div>
                <span className="font-extrabold leading-none">60 Clinics</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className=" bg-primary rounded-full flex justify-center items-center w-6 h-6">
                  <Image src={flower} alt="flower" className=" scale-[0.8]" />
                </div>
                <span className="font-extrabold leading-none">50 Cities</span>
              </div>
            </section>
            <section className=" w-1/4 ">
              <div className="flex justify-end">
                <Image src={star} alt="star" className=" scale-[0.8]" />
                <Image src={star} alt="star" className=" scale-[0.8]" />
                <Image src={star} alt="star" className=" scale-[0.8]" />
                <Image src={star} alt="star" className=" scale-[0.8]" />
                <Image src={star} alt="star" className=" scale-[0.8]" />
              </div>
              <p className=" text-text-primary font-normal opacity-50 leading-1 py-1 text-[0.4rem] text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.              </p>
              <div className="flex  justify-end items-center">
                <div className="text-text-primary text-right mr-1">
                  <h4 className=" text-[0.5rem] font-extrabold ">Dr. Vikram Das</h4>
                  <p className=" opacity-50">Dental Specialist</p>
                </div>
                <Image src={doctor} alt="doctor" className="doctor rounded-full w-7 h-7" />
              </div>
            </section>
          </div>
        </section>
      </motion.section>
      <section className="home-frame-two">
        <motion.div className="colored-half-circle " ref={circleRef}  >
          <motion.img src={enthusiasticWomen.src} ref={womenImgRef} className="women-img" />
          <motion.div className="mobile-mock-group" ref={mobileMockGroupRef} animate={mobileMockGroupStyles} transition={{ type: 'spring', duration: 1 }}>
            <motion.img src={leftMobileMock.src} className="mobile-mock left" ref={leftMobileMockRef} />
            <motion.img src={rightMobileMock.src} className="mobile-mock" ref={rightMobileMockRef} />
            <motion.img src={centerMobileMock.src} className="mobile-mock" ref={centerMobileMockRef} />
          </motion.div>
        </motion.div>
        <motion.div className = "floating-info-block" ref={floatingInfoBlock} animate={floatInfoBlockStyles} transition={{ type: 'spring', duration: 1 }}>
          <motion.div ref={floatingInfoOneRef} className="floating-info bg-greenish  shadow-md w-24 h-16 rounded-xl flex items-center justify-end flex-col text-center p-2 py-3" animate={floatInfoStyles.floatingInfoOne} transition={{ type: 'spring', duration: 1 }} >
            <div className="flex items-center justify-center bg-primary w-8 h-8 rounded-full absolute  left-1/2 -translate-x-1/2  -top-0 -translate-y-1/2">
              <Image src={tooth} alt="tooth" className="tooth" />
            </div>
            <h4 className="text-text-primary font-extrabold text-[0.4rem] uppercase mb-[0.1rem]">Quick Booking</h4>
            <p className="text-text-primary font-normal text-[0.25rem] opacity-50">Excepteur eiusmod ad incididunt reprehenderit eu. Dolor anim aliquip quis cillum laboris.</p>
          </motion.div>
          <motion.div ref={floatingInfoTwoRef} className="floating-info bg-greenish  shadow-md w-24 h-16 rounded-xl flex items-center justify-end flex-col text-center p-2 py-3 " animate={floatInfoStyles.floatingInfoTwo} transition={{ type: 'spring', duration: 1 }}>
            <div className="flex items-center justify-center bg-primary w-8 h-8 rounded-full absolute  left-1/2 -translate-x-1/2  -top-0 -translate-y-1/2">
              <Image src={insurance} alt="insurance" className="insurance" />
            </div>
            <h4 className="text-text-primary font-extrabold text-[0.4rem] uppercase mb-[0.1rem]">insurance</h4>
            <p className="text-text-primary font-normal text-[0.25rem] opacity-50">Excepteur eiusmod ad incididunt reprehenderit eu. Dolor anim aliquip quis cillum laboris.</p>
          </motion.div>
          <motion.div ref={floatingInfoThreeRef} className="floating-info bg-greenish  shadow-md w-24 h-16 rounded-xl flex items-center justify-end flex-col text-center p-2 py-3 " animate={floatInfoStyles.floatingInfoThree} transition={{ type: 'spring', duration: 1 }} >
            <div className="flex items-center justify-center bg-primary w-8 h-8 rounded-full absolute  left-1/2 -translate-x-1/2  -top-0 -translate-y-1/2">
              <Image src={nurse} alt="nurse" className="nurse" />
            </div>
            <h4 className="text-text-primary font-extrabold text-[0.4rem] uppercase mb-[0.1rem]">Top doctors</h4>
            <p className="text-text-primary font-normal text-[0.25rem] opacity-50">Excepteur eiusmod ad incididunt reprehenderit eu. Dolor anim aliquip quis cillum laboris.</p>
          </motion.div>
          <motion.div ref={floatingInfoFourRef} className="floating-info bg-greenish  shadow-md w-24 h-16 rounded-xl flex items-center justify-end flex-col text-center p-2 py-3 " animate={floatInfoStyles.floatingInfoFour} transition={{ type: 'spring', duration: 1 }} >
            <div className="flex items-center justify-center bg-primary w-8 h-8 rounded-full absolute  left-1/2 -translate-x-1/2  -top-0 -translate-y-1/2">
              <Image src={wallet} alt="wallet" className="wallet" />
            </div>
            <h4 className="text-text-primary font-extrabold text-[0.4rem] uppercase mb-[0.1rem]">Wallet</h4>
            <p className="text-text-primary font-normal text-[0.25rem] opacity-50">Excepteur eiusmod ad incididunt reprehenderit eu. Dolor anim aliquip quis cillum laboris.</p>
          </motion.div>
        </motion.div>
      </section>
      <motion.section className="home-frame-three relative" ref={frameThreeRef} animate={frameThreeStyles} transition={{ type: 'spring', duration: 1 }}>
        <div className="mt-12 w-[60%]">
          <h2 className="text-[1.2rem] font-extrabold uppercase text-text-secondary mb-1 ">About the <span className="text-text-primary">Company</span></h2>
          <p className="text-[0.4rem] opacity-50 text-text-primary">Dolore ullamco quis sit voluptate sint sit dolore reprehenderit veniam excepteur. Culpa ex anim ut incididunt. Reprehenderit mollit mollit quis ea.Dolore ullamco quis sit voluptate sint sit dolore reprehenderit veniam excepteur. Culpa ex anim ut incididunt. Reprehenderit mollit mollit quis ea.
            Dolore ullamco quis sit voluptate sint sit dolore reprehenderit veniam excepteur. Culpa ex anim ut incididunt. Reprehenderit mollit mollit quis ea.
          </p>
          <h6 className="mt-4 text-text-secondary text-[0.6rem] font-bold mb-1">Available Soon On</h6>
          <div className="flex gap-1 ">
            <Image src={appleStore} alt="apple store" className="w-16" />
            <Image src={googlePlay} alt="google play" className="w-16" />
          </div>
        </div>
        <Image src={guy} alt="guy" className="guy absolute bottom-0 right-4 w-[13rem]" />
      </motion.section>
    </main>
  );
}
