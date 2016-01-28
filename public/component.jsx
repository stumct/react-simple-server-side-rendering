var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react-dom') : window.ReactDOM

class Widget extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount(){
    this.setState({name:'CLIENT2'})
  }
  render(){
    console.log('render')
    const name = this.state.name ? this.state.name : this.props.name;
    return (
      <h1>Hello World: {name}</h1>
    )
  }
}

if (isNode) {
  module.exports = Widget
} else {
  ReactDOM.render(<Widget name="SERVER"/>, document.getElementById('react-root'))
}
