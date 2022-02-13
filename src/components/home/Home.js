import Header from '../header/Header'
import Footer from '../footer/Footer'
import Tours from '../tours/Tours'
import myData from '../../data/db.json'

function Home() {
  return (
    <>
    
      <Header fName ="AYA"  lName = "JAS" color = "blue" />
      <Tours data = {myData}/>
      <Footer />
      
    </>
  );
}

export default Home;
