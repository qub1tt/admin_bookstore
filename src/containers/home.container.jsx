import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../actions/home.action";
import Home from "../components/home/home";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import { Navigate } from "react-router-dom"; // Import Navigate
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogin: false,
    };
  }

  async componentWillMount() {
    this.props.homeActions.getTopProduct();
    let res = await this.props.userActions.auth();
    if (res === false) this.setState({ redirectToLogin: true });
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.setState({ redirectToLogin: true });
    }
  }
  render() {
    if (this.state.redirectToLogin) {
      return <Navigate to="/login" />;
    }
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Home top_product={this.props.top_product} />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  top_product: state.homeReducers.home.top_product,
  islogin: state.userReducers.user.islogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
