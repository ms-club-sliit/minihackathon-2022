import {Eligibility, Header, Timeline} from "./views";
import {Navbar} from "./components";
import TeamView from "./views/TeamView";

function App() {
    return (
        <>
            <Navbar/>
            <Header/>
            <Eligibility/>
            <Timeline/>
            <TeamView/>
            {/*<Gallery/>*/}
            {/*<Sponsors/>*/}
            {/*<Footer/>*/}
        </>
    );
}

export default App;
