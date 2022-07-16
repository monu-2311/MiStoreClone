
import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/NavBar.js';
import Offer from './components/Offer.js';
import Heading from './components/Heading.js';
import StarProduct from "./components/StarProduct.js"
 import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOpt from "./components/NavOpt.js"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Slider from './components/Slider';
import data from '../src/data/data.json'
function App() {
  return (
    <Router>
      <PreNavbar/>
      <NavBar />
            
     <NavOpt miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/> 
    
    
      <Slider start={data.banner.start} />

      <Offer offers = {data.offer}/>

      <Heading  text="START PRODUCTS"/>
      
      <StarProduct starProduct={data.starProduct} />

      <Heading text="HOT ACCESSORIES" />

      <HotAccessoriesMenu />
      
      <Routes>
        <Route  path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}/>
        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}/>
      </Routes>

       <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
    </Router>
     
  );
}

export default App;
