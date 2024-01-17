import React from 'react'
import ThreeDModel from './Threed'
import yt from '../assets/images/youtube.png'
import git from '../assets/images/github.png'
import gmail from '../assets/images/gmail.png'
import tg from '../assets/images/paper.png'



const Get_in_touch = () => {
	
  return (
	<section className="fifth" id='contact'>
		
		<div className="container">
		
		
		<div className="fifth_title">
		get in touch
		</div>
		<div className="link-wrapper">
			
			<div className="first-link-get">
				<div className="get-block">
					<a href="https://youtube.com/@Codium123"><img src={yt} alt="" className="source" /></a>
				</div>
				<div className="get-block">
					<a href="mailto:mickel.migel@gmail.com"><img src={gmail} alt="" className="source" /></a>
				</div>
			</div>
			<div className="second-link-get">
			<div className="get-block">
					<a href="https://github.com/Nicheye"><img src={git} alt="" className="source" /></a>
				</div>
			
				
			</div>
			<div className="third-link-get">
			<div className="get-block">
					<a href="https://t.me/@Qwerty124752"><img src={tg} alt="" className="source" /></a>
				</div>
			</div>
			
			
		</div>
		</div>
		<ThreeDModel/>
		
	</section>
  )
}

export default Get_in_touch