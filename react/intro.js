import React from 'react'

const BOOK_COVER =
  'https://assets1.bmstatic.com/assets/books-covers/7d/b0/ipad-d0d6de195c76541415502647fbc18288.jpg'

class Book extends React.Component {
  state = {
    title: 'Hello World',
    uuid: 'TIOjNAwF',
    isRead: false,
  }
  getData = () => {
    <div>
      <img src={BOOK_COVER()} alt="" />
      {this.state.title}
    </div>
  }
  toggleRead = () => this.setState({ isRead: !this.state.isRead })
  render = () => (
    <div>
      {this.getData}
      <button onClick={this.toggleRead()}>I've read this</button>
    </div>
  )
}
