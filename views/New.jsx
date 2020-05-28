const React = require('react');
const Layout = require(`./Layout.jsx`)

class New extends React.Component {
    render() {
      return (
          <Layout>
                <div className="edit-container">
                    <h1 className="edit-header-text">Add New Character Here:</h1>

                        <a className="return-link-edit-new" href="/characters">Return to Character Database</a>

                            <form className="edit-form" action="/characters" method="POST">
                                Name: <br/> 
                                <input type="text" name="name" placeholder="NPC Name Here" size="40"/><br/>
                                Bio: <br/> 
                                <textarea type="text" name="bio" placeholder="Biography Here" rows="20" cols="70"/><br/>
                                Img: <br/> 
                                <input type="text" name="img" placeholder="IMG URL" size="40"/><br/>
                            <input type="submit" name="" value="Add To Database" className="update-button"/>
                    </form>
                </div>);
          </Layout>
      )}
  }
  
  module.exports = New;