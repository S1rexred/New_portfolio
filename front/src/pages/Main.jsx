import React from 'react'
import square from '../assets/images/about_square.png'
import Process_development from '../components/Process_development'
import Main_Projects from '../components/Main_Projects'
import Get_in_touch from '../components/Get_in_touch'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Main = () => {
	const container = useRef();

	useGSAP(() => {
	  // gsap code here...
	  gsap.to(".about-sq", {x: 0,y:-900,
		duration: 0.6,
		onComplete: () => {
            // Reverse animation to the initial position
            gsap.to(".about-sq", {
                x: 0,
                y: 0,
                duration: 0.3,
            });
        },}); // <-- automatically reverted
		
	}, { scope: container });
	
  return (
	

	<div className="section" ref={container}>

	<section className='first'>
			<div className="container">
			<div className="about_description">
			Im begginer Fullstack developer,currently working on myself .You can find my works here <a href="https://github.com/Nicheye">github.com/Nicheye</a>
			</div>

			<div className="about-sq">
				<img src={square} className='img-fluid' alt="" />
			</div>
			</div>
		</section>
	<Process_development/>
	<Main_Projects/>
	<Get_in_touch/>


	</div>
	

  )
}

export default Main