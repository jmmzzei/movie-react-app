import React, { FC } from "react";
import { Header } from "./elements/Header";
import { Home } from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "@reach/router";
import { Movie } from "./Movie";
import { NotFound } from "./NotFound";

const App: FC<{}> = () => (
  <React.Fragment>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
