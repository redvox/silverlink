class Foo { // this is ES6 syntax!
  constructor(msg) {
    this.msg = msg;
  }
  speak() {
    console.log(this.msg);
  }
}

class ReplyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    render(){
        return(
        <button onClick={() => alert('click')}>Reply</button>
        )
    }
}

class MessageThread extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            posts: []
        }
    }

    componentDidMount() {
        this.setState(
            {posts: getPosts(this.state.title)}
        );
//            fetchPosts().then(response => {
//      this.setState({
//        posts: response.posts
//      });
    }

    render(){
        return(
            <div>{this.state.title}</div>,
            <div className="chat">
            <ul>
            {this.state.posts.map((c) =>
                <Post key={c.id.toString()} text={c.text} author={c.author} avatar_link={c.avatar_link}/>
            )}
            </ul>
            <button onClick={() => this.setState({text: "changed"})}>Reply</button>
            </div>
        )
    }
}

class Post extends React.Component {
    render() {
        return(
            <li className="you">
                <a className="user" href="#"><img alt="" src={this.props.avatar_link} /></a>
                <div className="date">
                  <i>{this.props.author}:</i> 2 minutes ago
                </div>
                <div className="message">
                    {this.props.text}
                </div>
            </li>
            )
    }
}

ReactDOM.render(
  <MessageThread title={"general"} />,
  document.getElementById('container')
);

var f = new Foo('Hi there, console!');
f.speak();

function getPosts(thread) {
  return [
    {id: 1, you: false, author: "Jens", text: "Hi", timestamp: "0001", avatar_link: "https://api.adorable.io/avatars/110/jens"},
    {id: 2, you: true, author: "Stefan", text: "Hey", timestamp: "0002", avatar_link: "https://api.adorable.io/avatars/110/stefan"},
    {id: 3, you: false, author: "Jens", text: "Wie gehts?", timestamp: "0002", avatar_link: "https://api.adorable.io/avatars/110/jens"},
  ]
}