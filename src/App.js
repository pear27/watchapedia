import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieHome from "./routes/MovieHome";
import TVHome from "./routes/TVHome";
import Detail from "./routes/MovieDetail";
import TVDetail from "./routes/TVDetail";
import Search from "./routes/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/search/:title">
          <Search />
        </Route>
        <Route path="/tv/:id">
          <TVDetail />
        </Route>
        <Route path="/tv">
          <TVHome />
        </Route>
        <Route path="/">
          <MovieHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
