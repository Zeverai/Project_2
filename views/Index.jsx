const React = require('react');
const Layout = require(`./Layout.jsx`)

class Index extends React.Component {
    render() {
        const {data} = this.props
        return (
            <Layout>
                <div>

                    <div className="index-header">
                    <h1>Path of Exile - Character Database</h1>
                    </div>

                    <nav>
                        <a href="/characters/new">Click Here to Add Character to Database</a>
                    </nav>

                    <div className = "character-card-container">
                        {data.map((data, i)=> {
                            return (
                                <div className="character-card" key="index"> 
                                    <h3>{data.name}</h3>
                                        <div>
                                            <a href={`/characters/${data._id}`}><img src={data.img} alt={data.name}/></a>
                                        </div>
                                    <p>{data.bio}</p>
                                    <p></p>
                                </div>
                            )}
                        )}
                    </div>




                </div>
            </Layout>
        )
    };
};

module.exports = Index;