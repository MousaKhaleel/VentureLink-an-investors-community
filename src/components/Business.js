import { Link } from 'react-router-dom';
import "./mainStyle.css"
import "./businessStyle.css"

function Business(temp) {
    const id=temp.id
    return ( 
        <span className='link'>
      <Link to={`/Businessdetails/${id}`}>
      <div className="businessesPreviewContainer">
        <div>
          <h2>{temp.type}</h2>
          <hr/>
          <br/>
          <p>Price: {temp.price}</p>
        </div>
      </div>
      </Link>
      </span>
     );
}

export default Business;