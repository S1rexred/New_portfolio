import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Main_Projects = () => {
  const [best_projects,SetbestProjects] =useState([])
  
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
		  SetbestProjects(data.main)
		  console.log(data.main)
		
      } catch (e) {
        console.log('no data');
      }
    };

    fetchData();
	
  }, []);
  try{
	return(
		
		<section className="third" id='portfolio'>
			<div className="container">

			
		<div className="process_title">Projects</div>
		<div className="third-sec-layot">
			<div className="third-left">
				<div className="top-left-third-card">
					<div className="third-title">
						{best_projects[0].title}
					</div>
					<div className="third-descr">
					{best_projects[0].short_descr}
					</div>
					<Link to={`/detail/${best_projects[0].id}`} className="main-detail-link">read more</Link>
				</div>

				<div className="third-bottom">
				<div className="third-title second">
						{best_projects[1].title}
					</div>
					<div className="third-descr">
					{best_projects[1].short_descr}
				</div>
				<Link to={`/detail/${best_projects[1].id}`} className="main-detail-link">read more</Link>
			</div>
			</div>
			
			<div className="third-right">
					<div className="third-main-title">{best_projects[2].title}</div>
					<img src={best_projects[2].image} alt="" className=" third-main-img" />
					<div className="third-main-descr">
					{best_projects[2].short_descr}
					</div>
					<Link to={`/detail/${best_projects[2].id}`} className="main-detail-link">read more</Link>

			</div>
		</div>
		<Link to='/all' className="see-all-link">see all projects &#x2192; </Link>
		</div>
		</section>
	)
  }catch(e){

  return (
	<section className="third">
		
	</section>
	
  )
}
}

export default Main_Projects