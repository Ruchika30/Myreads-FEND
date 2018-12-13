import React from 'react';


class MyShelf extends React.Component {
    render(){
      const shelfbooks = this.props.books;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">


                  {shelfbooks.map(book => (
                    <li key = {book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div 
                            className="book-cover" 
                            style={{ 
                              width: 128, 
                              height: 193,
                              backgroundImage:
                               `url(${book.imageLinks.thumbnail})`
                            }}
                            />
                            
                          <div className="book-shelf-changer">
                            {/* <select value={book.shelf} onChange={e => console.log(e)}> */}
                            <select value={book.shelf} onChange={e => this.props.changeshelf(book, e.target.value) }>
                            
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">book.title</div>
                        <div className="book-authors">book.authors</div>
                      </div>
                    </li>
                    ))}

                  </ol>
                </div>
              </div>
        )
    }
}

export default MyShelf ;
     