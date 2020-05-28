const React = require('react');
const Layout = require(`./Layout.jsx`)

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const {data} = this.props;
        return (
            <Layout>
                <div className="show-container">
                    <div>
                        <h1 className="show-character-name">{data.name}</h1>
                        <p className="show-db-id">Database-ID: {data.id}</p>
                        <img className="show-character-img"src={data.img} alt={data.name}/>
                    </div>

                    <div>
                        <p className="show-character-bio">{data.bio}</p>
                        </div>

                    <div>
                        <a href="/characters">Return to Character Database</a>
                    </div>
                    <div>
                        <a className="show-edit-link" href={`/characters/edit/${data._id}`}>Edit {data.name}.</a>
                    </div>
                    <form action={`/characters/${data._id}?_method=DELETE`} method="post">
                        <input type="submit" value="Delete"/>
                    </form>
                    
                </div>
            </Layout>
        )
    }
}

module.exports = Show;