import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActorCreators} from 'redux';
import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book} addToCart={this.props.addToCart.bind(this)}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBookById(this.props.params.id);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
    addToCart: item => dispatch(bookActions.addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
