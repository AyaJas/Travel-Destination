import './Tours.css';
import Tour from '../tours/tour/Tour';
import { Link } from 'react-router-dom';


function Tours(props) {

    return (
        <>
            {props.data.map((tour, idx) => {
                return (
                    <div key={idx} className="Tour-Divt">
                        <Link to = {`/city/${tour.id}`}><Tour myTour={tour} myKey={idx} /></Link>
                    </div>
                );
            })}
        </>
    );

}

export default Tours;