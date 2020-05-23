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
                <div>
                    <h1>{data.name}</h1>
                    <p>Database-ID: {data.id}</p>
                    <img src={data.img} alt={data.name}/>
                    <p>{data.bio}</p>
                </div>
                <div>
                      <a href={`/characters/edit/${data._id}`}>Edit {data.name}.</a>
                </div>
                <div>
                    <a href="/characters">Return to Character Database</a>
                </div>


            </Layout>
        )
    }
}

module.exports = Show;