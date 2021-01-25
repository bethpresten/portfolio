// import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
    // <>
    //   <Navbar />
    //   <div className="row">
    //     <div className="col">
    //       <h1 className="text-center">Hello World</h1>
    //       <p>Hoth watto jango darth darth. Leia moff lars leia sidious. Darth ewok gamorrean wampa fett. Anakin sith darth darth antilles maul antilles organa qui-gon. Secura darth organa twi'lek yoda hutt coruscant. Anakin darth wicket moff darth c-3po. Darth maul calrissian tatooine skywalker antilles ben ewok. Darth wampa dooku kessel ewok organa yoda skywalker. Leia dooku jawa solo antilles. Hoth windu antilles moff ackbar. Secura calamari alderaan skywalker organa dooku skywalker yavin. Dagobah qui-gon zabrak wedge mara windu boba luke.</p>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-sm-4">
    //       <Card title="LinkedIn" link="http://www.linkedin.com/in/bethpresten" image="" description="This is my LinkedIn profile" alt="this is my alt text." />
    //     </div>
    //     <div className="col-sm-4">
    //       <Card title="Github" linke />
    //     </div>
    //     <div className="col-sm-4">
    //       <Card title="Resume" />
    //     </div>
    //   </div>
    //   {/* <div><Footer /></div> */}


    // </>
  );
}

export default App;
