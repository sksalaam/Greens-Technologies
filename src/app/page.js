import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Header';
import Banner from './Components/Bannner';
import CurriculumModule from './Components/Curriculam';
import FeaturesBanner from './Components/FeaturesBanner';
import Placements from './Components/Placements';
import Instructor from './Components/Instructor';
import FAQComponent from './Components/FAQComponent';
import FooterComponent from './Components/Footer';



export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CurriculumModule/>
    <FeaturesBanner/>
    <Placements/>
    <Instructor/>
    <FAQComponent/>
    <FooterComponent/>
    </>
  );
}
