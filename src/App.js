import "./App.css";
import Search from "./component/search/Search";
import Address from "./component/address/Address";
import Map from "./component/map/Map";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header-text">IP Address Tracker</div>
        <div className="app__header-search">
          <Search />
        </div>
        <div className="app__header-address">
          <Address />
        </div>
      </div>
      <div className="app__map">
        <Map />
      </div>
    </div>
  );
}

export default App;
