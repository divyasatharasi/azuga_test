import React from 'react';
import './App.css';
import data from './data';
import DataTable from 'react-data-table-component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableFetch: true,
      authorName: '',
      articles: []
    };
  }
  handleChange = (event) => {
    if(this.state.disableFetch) this.setState({disableFetch: false})
    this.setState({authorName:event.target.value})
  }
  onFetchClick = () => {
    const articles = data.filter(d => d.authorName === this.state.authorName);
    this.setState({articles});
  }
  render() {
    const columns = [
      {
        name: 'articleId',
        selector: 'articleId',
        sortable: true,
      },
      {
        name: 'title',
        selector: 'title',
        sortable: true,
      },
      {
        name: 'upvotes',
        selector: 'upvotes',
        sortable: true,
      },
      {
        name: 'date',
        selector: 'date',
        sortable: true,
      },
    ];
    return (
      <div className="App">
        <h2>Articles</h2>
        <input type='text' onChange={this.handleChange} value={this.state.authorName} /> <br/>
        <button disabled={this.state.disableFetch} onClick={this.onFetchClick}>Fetch</button>
        {this.state.articles.length > 0 ?
        <DataTable
        title="Articles"
        columns={columns}
        data={this.state.articles}
      /> : 'No details'}
      </div>
    );
  }
}

export default App;
