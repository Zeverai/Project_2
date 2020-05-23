const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>Add Character Here:</h1>
              <form action="/characters" method="POST">
                  Name: <input type="text" name="name" placeholder="NPC Name Here"/><br/>
                  Bio: <input type="text" name="bio" placeholder="Biography Here"/><br/>
                  Img: <input type="text" name="img" placeholder="IMG URL"/><br/>
                  <input type="submit" name="" value="Add To Database"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;