import React, { useState, useEffect } from "react";
import List from "./List";
import ListDetails from "./ListDetails";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  //the useEffect is a React Hooks that allow us to fetch data from API automatically after each refeshing of DOM
  useEffect(() => {
    async function getData() {
      const getdata = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(getdata.data);
    }
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Route exact path="/" component={() => <List freshdata={data} />} />
      <Route path="/list/:userId" render={(props) => <ListDetails data={data} {...props}/>}/>
    </BrowserRouter>
  );
}

export default App;
