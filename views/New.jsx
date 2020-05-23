const React = require('react');
const Layout = require(`./Layout.jsx`)

class New extends React.Component {
    render() {
      return (
          <Layout>
                <div>
                    <h1>Add Character Here:</h1>
                        <nav>
                            <a href="/characters">Return to Character Database</a>
                        </nav>
                    <form action="/characters" method="POST">
                        Name: <input type="text" name="name" placeholder="NPC Name Here"/><br/>
                        Bio: <textarea type="text" name="bio" placeholder="Biography Here"/><br/>
                        Img: <input type="text" name="img" placeholder="IMG URL"/><br/>
                        <input type="submit" name="" value="Add To Database"/>
                    </form>
                </div>);
          </Layout>
    }
  }
  
  module.exports = New;