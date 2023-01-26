import './Styles/App.css';
import Header from './Components/Header/Header';
import ControlLine from './Components/ControlLine/ControlLine';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <ControlLine />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
