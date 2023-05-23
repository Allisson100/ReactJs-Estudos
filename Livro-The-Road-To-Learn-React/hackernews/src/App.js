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

    const { searchTerm, list } = this.state

    return (

      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>

        <Table 
          list={list}
          pattern={searchTerm}
          onDimiss={this.onDimiss}
        />
      </div>
      
    );
  }
}

const Search = ({ value, onChange, children }) => 

<form>
  {children} <input 
    type="text" 
    value={value}
    onChange={onChange}
  />
</form>



const Table = ({ list, pattern, onDimiss }) => 

<div className='table'>
  {list.filter(isSearched(pattern)).map(item => 
    
    <div key={item.objectID} className='table-row'>
      <span style={{ width: '40%' }}>
        <a href={item.url}>{item.title}</a>
      </span><br/>

      <span style={{ width: '30%' }}>
        {item.author}
      </span>

      <span style={{ width: '10%' }}>
        {item.num_comment}
      </span>

      <span style={{ width: '10%' }}>
        {item.points}
      </span>

      <span>
        <Button 
          onClick={() => onDimiss(item.objectID)}
          className='button-inline'
        >
          Dimiss
        </Button>
      </span>

    </div>
  )
  }
</div>


function Button (props) {

    const {
      onClick,
      className = '',
      children,
    } = props

    return (  
      <button
        onClick={onClick}
        className={className}
        type='button'
      >
        {children}
      </button>
    )
}

export default App;
