import { Component } from 'react';
import './App.css';



const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walker',
    num_comment: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Calrk',
    num_comment: 2,
    points: 5,
    objectID: 1
  }
]

// ES5
// function isSearched(searchTerm) {
//   return function(item) {

//     return item.title.toLoweCase().includes(searchTerm.toLowerCase())

//     // some condition which returns treu or false
//   }
// }

//ES6

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      list,
      searchTerm: '',
    }

    this.onDimiss = this.onDimiss.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onDimiss(id) {
    const isNotId = e => e.objectID !== id
    const updatedList = this.state.list.filter(isNotId)
    this.setState({list : updatedList})
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (

      <div className="App">
        <form>
          <input 
            type="text" 
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(e => 
  
            <div key={e.objectID}>
              <span>
                <a href={e.url}>{e.title}</a>
              </span><br/>
  
              <span>{e.author}</span><br/>
              <span>{e.num_comment}</span><br/>
              <span>{e.points}</span><br/>

              <span>
                <button 
                  type='button' 
                  onClick={() => this.onDimiss(e.objectID)}
                >
                  Dimiss
                </button>
              </span>

            </div>
          )
        }
      </div>
      
    );
  }
}

export default App;
