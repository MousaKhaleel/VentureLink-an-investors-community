import { useEffect, useState } from "react";
import BusinessList from "./BusinessList";
import "./mainStyle.css"

function AllBusiness() {

    const[buisnesses,setBuisnesses]=useState(null);
    const[loading,setLoading]=useState(true);

    return ( 
        <div className="allBusinessesCont">
        <main>
        {/* {loading && <h2 style={{textAlign:'center',height:'60vh'}}>Loading...</h2>} */}
        {buisnesses && <h1>All Businesses</h1>}
        <hr/>
        {buisnesses && <BusinessList buisnesses={buisnesses}/>}
        </main>
        </div>
     );
}

export default AllBusiness;