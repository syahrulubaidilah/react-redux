import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as librariesActions from 'redux/modules/libraries';
import { LibraryList } from 'components';

@connect(
  state => ({
    libraries: state.libraries.data,
    getList: PropTypes.func.isRequired
  }),
  { ...librariesActions })
export default class Library extends Component {
  static propTypes = {
    libraries: PropTypes.object.isRequired,
    getList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { libraries } = this.props;
    console.log(libraries);
    return (
      <div className="container">
        <div className="row">
          <h3>Blog Posts</h3>
          <Helmet title="Home" />
          {libraries && libraries.map(library => <LibraryList library={library} />)}
        </div>
      </div>
    );
  }
}
