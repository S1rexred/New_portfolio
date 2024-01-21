import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Page_detail = () => {
  var {id}=useParams();
  const [details,setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
		const { data } = await axios.get(
			`https://michaelshpilevsky.pythonanywhere.com/${id}`,
			{
			  headers: {
				'Content-Type': 'application/json',
			  },
			  withCredentials: true,
			}
		  );
		  setDetails(data)
		  console.log(data)
		
      } catch (e) {
        console.log('no data');
      }
    };

    fetchData();
	
	  
  }, []);
  return (
	<section className="third">
		<div className="container">
			<div className="page-detail">
				<div className="detail-title">{details.title}</div>

				<img src={details.image} alt="" className="img-fluid" />

				<div className="detail-descr">{details.full_descr}</div>

				<div className="detail-video">
				<iframe width="100%" height="100%" src={details.yt_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<a href={details.git_link} className="git-link">github link</a>
			</div>

		</div>
	</section>
  )
}

export default Page_detail