import React, { Component } from "react";

import { Modal } from "./Styles";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Aux from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
      };
    }
    state = {};

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({
          error: null,
        });
        return req;
      });
      axios.interceptors.response.use(null, (error) => {
        this.setState({
          error,
        });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null,
      });
    };

    render() {
      return (
        <Aux>
          <Backdrop
            show={this.state.error}
            clicked={this.errorConfirmedHandler}
          />
          <Modal show={this.state.error}>
            <i className="fas fa-exclamation-circle"></i> Unexpected error:{" "}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
