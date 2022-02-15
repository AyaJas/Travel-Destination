import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import './TourDetails.css'



function TourDetails(props) {
    let { id } = useParams();

    const [disInfo, setInfo] = useState(false);
    const handleSee = () => { setInfo(!disInfo) }

    let newTour = props.data.filter(myTour => {

        console.log(props);
        if (myTour.id == id)
            return myTour;

    })

    return (
        <div className="Tour-card">
            <Link to='/' className="nav">  Home </Link>
            <h2 className="h2"> Tour's Name : {newTour[0].name}</h2>
            <img className="Tour-img" src={newTour[0].image} alt={newTour[0].name} />
            <h2> Tour's Price : {newTour[0].price}</h2>
            {
                disInfo &&
                <>
                    <p>{newTour[0].info}</p>
                    <button onClick={handleSee}>
                        Less
                    </button>

                </>
            }

            {

                !disInfo &&
                <>
                    <p> {newTour[0].info.substring(0, 150)}</p>
                    <button onClick={handleSee}>
                        More
                    </button>

                </>
            }

        </div>

    );


}
export default TourDetails;