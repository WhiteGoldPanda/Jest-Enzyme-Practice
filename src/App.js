import React,  { Component }from 'react';
import Header from './component/header/index';
import ReusedButton from './component/button';
import ListItem from './component/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';
import Headline from './component/headline';

const tempArr = [{
  fName: 'BOB',
  lName: 'BOBBY',
  email: 'BOBBY@YAHOO.COM',
  age:  22,
  onlineStatus: true
}]
class App extends Component {

  constructor(props){
    super(props);
    this.fetch=this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
  }

render() {
  const { posts } = this.props;

  const configButton = {
    buttonText: 'GetPosts',
    emitEvent: this.fetch
  }

  return (
    <div className="App">
     <Header/>
     <section className='main'>
       <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      <ReusedButton {...configButton} />
       {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
     </section>
    </div>
  );
}
}

const mapStateToProps = state => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
