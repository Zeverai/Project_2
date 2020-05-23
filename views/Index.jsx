const React = require('react');
const Layout = require(`./Layout.jsx`)

class Index extends React.Component {
    render() {
        const {data} = this.props
        return (
            <Layout>
                <div>

                    <div className="index-header">
                        <h1>Path of Exile</h1>
                    </div>
                    
                    <h2>Character Database</h2>

                    <nav>
                        <a href="/characters/new">Click Here to Add Character to Database</a>
                    </nav>

                    <div className = "character-card-container">
                        {data.map((data, i)=> {
                            return (
                                <div className="character-card" key="index"> 
                                    <h3>{data.name}</h3>
                                        <div>
                                            <a href={`/characters/${data._id}`}><img src={data.img} alt={data.name} className="character-display-image"/></a>
                                        </div>
                                    
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