import React from "react";
import { connect } from "react-redux";
import getBookList from "../actions/getBookList";

const mapStateToProps = state => ({
  bookList: state.bookList,
});

const mapDispatchToProps = dispatch => ({
  getBookList: () => getBookList()(dispatch)
});

class BookList extends React.Component {
  componentDidMount() {
    const { getBookList } = this.props;
    getBookList && getBookList();
  }

  renderBookList = () => {
    const { bookList } = this.props;

    return bookList.loading || 'empty';
  };

  render() {
    const { bookList } = this.props;
    console.log("===>", bookList);
    return (
      <div>
        <div>{"Test"}</div>
        {/* {bookList.map((book) => {
                    return (
                        <div>  
                            <div>book.book_name</div>
                            <hr />
                        </div>
                    )
                })} */}
        <div>
          <div>{this.renderBookList()}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
