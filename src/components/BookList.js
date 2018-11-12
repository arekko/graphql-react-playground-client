import React, { Component } from "react";
import { getBooksQuery } from "../queries/queries";
import { graphql } from "react-apollo";
import BookDetail from "./BookDetail";



class BookList extends Component {

  state = {
    selected: null
  }

  showBooks() {
    const data = this.props.data;

    if (data.loading) {
      return <div>Data loading ...</div>;
    } else {
      console.log(data.books);
      return data.books.map(book => {
        return <li key={book.id} onClick={(e) => this.setState({ selected: book.id})}>{book.name}</li>;
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div >
        <ul id="book-list">{this.showBooks()}</ul>
        <BookDetail bookId={this.state.selected}/>
        </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
