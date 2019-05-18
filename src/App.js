
import React, { Component } from 'react';

import Main from './components/main/main';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './App.css';
import Employees from "./api/characters"
import Jumbotron from './components/jumbotron/jumbotron';
import { FriendCard } from "./components/friendcard/friendcard"

class App extends Component {
  state = {
    clickedImages: [],
    score: 0,
    topScore: 0,
    chars: []
  }

  componentWillMount() {
    this.setState({ chars: Employees })
  }

  handleIncorrect = () => {
    this.setState({ clickedImages: [], score: 0 })

  }

  handleTopScore = () => {
    let { score, topScore } = this.state
    if (score > topScore) {
      this.setState({
        topScore: score

      })
    }
  }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    this.setState({ chars: data })
    return data;
  };

  _handleClick = (e) => {
    if (this.state.clickedImages.includes(e)) {
      this.handleIncorrect()
    } else {
      this.setState({ clickedImages: [...this.state.clickedImages, e], score: this.state.score + 1 }, () => {
        this.handleTopScore()
        this.shuffleData(this.state.chars)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          topScore={this.state.topScore} />
        <Jumbotron />
        {this.state.chars ? this.state.chars.map((person, i) => (
          <div>
            <FriendCard key={i} img={person.img} _handleClick={this._handleClick} name={person.name} />
          </div>
        )) : <h1>Nope</h1>}
      </div>
    );
  }
}

export default App;
