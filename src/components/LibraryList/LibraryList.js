/* eslint linebreak-style: ["error", "windows"]*/
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LibraryList = ({ library }) => (
  <div>
    <div className="media well">
      <div className="media-body">
        <h4 className="media-heading">
          <strong>
            <Link to={`library/${library.slug}`}>{library.name}</Link>
          </strong>
        </h4>
        {library.type} <br />
        {library.isbn} <br />
        {library.start_date} <br />
        {library.end_date} <br />
        {library.description} <br />
        {library.member} <br />
        <br />
      </div>
    </div>
  </div>
);

LibraryList.propTypes = {
  library: PropTypes.object.isRequired
};

export default LibraryList;
