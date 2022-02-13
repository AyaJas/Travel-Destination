import './Tours.css';

function Tour (props){
 
    return (

        <>
        
        {props.data.map(tour => {
        return(
            <div>
                <h2> Tour's Name : {tour.name}</h2>
                <img src = {tour.image} alt = {tour.name}/>
            </div>
        );
         })}   
        </>

    );



}

export default Tour;