import Business from "./Business";
import tempData from "./tempData.json"
import './mainStyle.css'


function BusinessList() {
    return ( 
        <main>
        <div>
        {tempData.property.map((item, i) => (
            <Business key={i} type={item.type} price={item.price} id={item.id} />
        ))}
        </div>
        </main>
     );
}

export default BusinessList;