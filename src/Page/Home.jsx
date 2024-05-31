import Banner from '../Components/Banner';
import AboutUs from '../Components/AboutUs';
import Branding from '../Components/Branding';
import Restaurant from '../Components/Restaurant';
import ContactUs from '../Components/ContactUs';

const Home = () => {
    return (
      <div className="overflow-x-hidden">
        <div>
          <Banner/>
          <AboutUs/>
          <Branding/>
          <Restaurant/>
          <ContactUs/>
        </div>
      </div>
    );
}

export default Home