import { useState } from "react";
import "./App.css";
import Search from "./component/search/Search";
import Address from "./component/address/Address";
import Map from "./component/map/Map";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header-text">IP Address Tracker</div>
        <div className="app__header-search">
          <Search search={search} setSearch={setSearch} />
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
