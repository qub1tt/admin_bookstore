import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/book.action";
import Author from "../components/author/author";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import { Navigate } from "react-router-dom"; // Import Navigate

class AuthorContainer extends Component {
  constructor() {
    super();
    this.state = {
      redirectToLogin: false,
    };
  }
  async componentWillMount() {
    this.props.bookActions.getAuthor();
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
      this.props.bookActions.getAuthor();
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
        <Author
          author={this.props.author}
          isadd={this.props.isadd}
          addAuthor={(name) => this.props.bookActions.addAuthor(name)}
          updateAuthor={(id, name) =>
            this.props.bookActions.updateAuthor(id, name)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.bookActions.authorBackPage()}
          nextPage={() => this.props.bookActions.authorNextPage()}
          setPage={(page) => this.props.bookActions.authorSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  author: state.bookReducers.author.data,
  isadd: state.bookReducers.author.isadd,
  isupdate: state.bookReducers.author.isupdate,
  islogin: state.userReducers.user.islogin,
  totalpage: state.bookReducers.author.totalpage,
  page: state.bookReducers.author.page,
});

const mapDispatchToProps = (dispatch) => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthorContainer);
