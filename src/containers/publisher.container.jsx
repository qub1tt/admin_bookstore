import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/book.action";
import Publisher from "../components/publisher/publisher";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import { Navigate } from "react-router-dom";
class PublisherContainer extends Component {
  constructor() {
    super();
    this.state = {
      redirectToLogin: false,
    };
  }
  async componentWillMount() {
    this.props.bookActions.getPublisher();
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
    if (nextProps.page !== this.props.page) {
      this.props.bookActions.getPublisher();
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
        <Publisher
          publisher={this.props.publisher}
          isadd={this.props.isadd}
          addPublisher={(name) => this.props.bookActions.addPublisher(name)}
          updatePublisher={(id, name) =>
            this.props.bookActions.updatePublisher(id, name)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.bookActions.publisherBackPage()}
          nextPage={() => this.props.bookActions.publisherNextPage()}
          setPage={(page) => this.props.bookActions.publisherSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  publisher: state.bookReducers.publisher.data,
  isadd: state.bookReducers.publisher.isadd,
  isupdate: state.bookReducers.publisher.isupdate,
  totalpage: state.bookReducers.publisher.totalpage,
  page: state.bookReducers.publisher.page,
  islogin: state.userReducers.user.islogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PublisherContainer);
