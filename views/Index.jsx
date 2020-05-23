const React = require('react');
const Layout = require(`./Layout.jsx`)

class Index extends React.Component {
    render() {
        const {data} = this.props
        return (
            <Layout>
                <div>
                    <div className = "character-card-container">
                        {data.map((data, i)=> {
                            return (
                                <div className="character-card" key="index"> 
                                    <h3>{data.name}</h3>
                                    <div>
                                        <img src={data.img} alt=""/>
                                    </div>
                                    <p>{data.bio}</p>
                                </div>
                            )}
                        )}
                    
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Index;