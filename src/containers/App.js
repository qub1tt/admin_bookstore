import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./home.container";
import BookContainer from "./book.container";
import CategoryContainer from "./category.container";
import AuthorContainer from "./author.container";
import PublisherContainer from "./publisher.container";
import UserContainer from "./user.container";
import LoginContainer from "./login.container";
import StatisticalContainer from "./statistical.container";
import BillContainer from "./bill.container";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/bookmanager" element={<BookContainer />} />
          <Route path="/categorymanager" element={<CategoryContainer />} />
          <Route path="/authormanager" element={<AuthorContainer />} />
          <Route path="/publishermanager" element={<PublisherContainer />} />
          <Route path="/usermanager" element={<UserContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/statistical" element={<StatisticalContainer />} />
          <Route path="/billmanager" element={<BillContainer />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
