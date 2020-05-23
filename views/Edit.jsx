const React = require('react');
const Layout = require(`./Layout.jsx`)

class Edit extends React.Component {
    render() {
        const {data} = this.props
      return (
        <Layout>
            <div>
                <h1>New Fruit page</h1>

                    <form action={`/characters/edit/${data._id}?_method=put`} method="POST">
                        Name: <input type="text" name="name" value={data.name}/><br/>
                        Bio: <textarea type="text" name="bio" value={data.bio}/><br/>
                        Image: <input type="text" name="img" value={data.img}/><br/>
                        <input type="submit" name="" value="Update Character"/>
                    </form>
            </div>
        </Layout>
      )}
    }
  
  module.exports = Edit;