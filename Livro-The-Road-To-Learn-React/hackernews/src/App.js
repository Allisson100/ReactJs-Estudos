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

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      list,
    }

  }

  render() {
    return (

      <div className="App">
        {this.state.list.map(e => 
  
            <div key={e.objectID}>
              <span>
                <a href={e.url}>{e.title}</a>
              </span><br/>
  
              <span>{e.author}</span><br/>
              <span>{e.num_comment}</span><br/>
              <span>{e.points}</span><br/>
            </div>
          )
        }
      </div>
      
    );
  }
}

export default App;
