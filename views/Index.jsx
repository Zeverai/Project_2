const React = require('react');
const Layout = require(`./Layout.jsx`)

class Index extends React.Component {
    render() {
        const {data} = this.props
        return (
            <Layout>
                <div>
                    <div >
                        <img className="title_image" src="https://earlyaxes.co.za/wp-content/uploads/2017/09/path-of-exile-banner.png" alt="hero_image"/>
                    </div>
                    <div className="index-header">
                        <h1 className="index_title_text">Quick Reference Character Cards</h1>
                    </div>
                    

                    <nav className="add_link">
                        <a className="add_link_text" href="/characters/new">Click Here to Add Character to Database</a>
                    </nav>

                    <div className = "character-card-container">
                        {data.map((data, i)=> {
                            return (
                                

                                <div className="character-card" key="index"> 
                                    <h3 className="npc_card_name">{data.name}</h3>
                                        <div>
                                            <a href={`/characters/${data._id}`}><img src={data.img} alt={data.name} className="character-display-image"/></a>
                                        </div>
                                    
                                </div>
                            )}
                        )}
                    </div>

                    <div className="footer-div">
                            <h1 className="footer-title">Thanks for using our page! Useful resources down below.</h1>

                            <div className="footer-div-grid">
                                <a href="https://www.grindinggear.com/">Grinding Gear Games </a> <br/>
                                <a href="https://www.pathofexile.com/"> Path of Exile</a> <br/>
                            </div>
                    </div>




                </div>
            </Layout>
        )
    };
};

module.exports = Index;