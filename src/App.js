import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Material from './Components/Material';
import Services from './Components/Services';
import Careers from './Components/Careers';
import Vendors from './Components/Vendors';
import Contact from './Components/Contact';
import { Switch, Route, Redirect} from 'react-router-dom';
import Trolleys from './Components/Material/Trolleys';
import Pallet from './Components/Material/Pallet';
import Ladders from './Components/Material/Ladders';
import Industrial from './Components/Material/Industrial';
import Gratings from './Components/Material/Gratings';
import Handrails from './Components/Material/Handrails';
import Engineering from './Components/Material/Engineering';
import Conveyors from './Components/Material/Conveyors';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/material" component={Material} />
        <Route exact path="/services" component={Services} /> 
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/vendors" component={Vendors} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/material/trolleys/" component={Trolleys} />
        <Route exact path="/material/pallet/" component={Pallet} />
        <Route exact path="/material/ladders/" component={Ladders} />
        <Route exact path="/material/industrial" component={Industrial} />
        <Route exact path="/material/gratings/" component={Gratings} />
        <Route exact path="/material/handrails/" component={Handrails} />
        <Route exact path="/material/engineering/" component={Engineering} />
        <Route exact path="/material/conveyors/" component={Conveyors} />
        <Redirect to="/" />
    </Switch>
    <Footer />
</>
  );
}

export default App;
