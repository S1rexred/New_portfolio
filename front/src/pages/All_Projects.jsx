import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const All_Projects = () => {
	
	const [all,setAll] =useState([])
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  
		  const { data } = await axios.get(
			  `https://michaelshpilevsky.pythonanywhere.com`,
			  {
				headers: {
				  'Content-Type': 'application/json',
				},
				withCredentials: true,
			  }
			);
			setAll(data.all)
			console.log(data.all)
		  
		} catch (e) {
		  console.log('no data');
		}
	  };
  
	  fetchData();
	  
	}, []);


  return (
	<section className="fourth"  >
		<div className="container" >
			
		
		<div className="all-cards-wrapper">
			{all.map((card)=>{
				return(
					<div className="all-card">
						<div className="all-card-title">
							{card.title}
						</div>
						<div className="all-card-descr">{card.short_descr}</div>

						<Link className="all_detail_link" to={`/detail/${card.id}`}>details &#x2192;</Link>
					</div>
				)
			}
			
			)}
		</div>
		</div>
	</section>
  )
}

export default All_Projects