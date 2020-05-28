const React = require('react');
const Layout = require(`./Layout.jsx`)

class Edit extends React.Component {
    render() {
        const {data} = this.props
      return (
        <Layout>
            <div className="edit-container">
                <h1 className="edit-header-text">Add Character to Database Using the Form Below</h1>
                    <a className="return-link-edit-new" href="/characters">Return to Character Database</a>
                    
                        <form className="edit-form" action={`/characters/edit/${data._id}?_method=put`} method="POST">
                            Name: <br/>
                            <input type="text" name="name" defaultValue={data.name} size="40"/><br/>
                            Bio: <br/>
                            <textarea type="text" name="bio" defaultValue={data.bio} rows="20" cols="70"/><br/>
                            Image: <br/>
                            <input type="text" name="img" defaultValue={data.img} size="40"/><br/>
                            <input className="update-button" type="submit" name="" defaultValue="Update Character"/>
                        </form>
            </div>
        </Layout>
      )}
    }
  
  module.exports = Edit;