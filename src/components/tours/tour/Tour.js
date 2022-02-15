import './Tour.css';

function Tour(props) 
{

    return (
        <>
        <h2 className = "h2-deco"> Tour's Name : {props.myTour.name}</h2>
        <img className="Tour-imgt" src={props.myTour.image} alt={props.myTour.name} />
        </>

    );

}

export default Tour;