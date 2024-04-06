import { useParams } from 'react-router-dom';
import './mainStyle.css'
import tempData from "./tempData.json"

function BusinessDetails() {
    const {id}=useParams()
    function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}
    var content = filterById(tempData['property'], id);
    return ( 
        <main>
        <div className="contentContainer">
        {/* {loading && <h2 className='hl'>loading...</h2>} */}
            <h2>{content.area}</h2>
            <p>{content.address}</p>
        </div>
        </main>
     );
}

export default BusinessDetails;