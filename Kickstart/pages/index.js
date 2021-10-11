import React,{Component} from "react"
import Factory from "../Ethereum/factory"
import {Card,Button} from "semantic-ui-react" 
import Layout from "../components/Layout"
import 'semantic-ui-css/semantic.min.css'
import {Link} from "../routes"

class App extends Component{

    static async getInitialProps(){
        const campaigns = await Factory.methods.getdeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address =>{
            return{
                header:address,
                description:(
                <Link route={'/campaigns/'+address}>
                <a>View Campaigns</a>
                </Link>),
                fluid: true
            }
        });
        return <Card.Group items = {items} />;
    }

    

    render(){
        return(
            <Layout>
                <div>
                <h1>Open Campaigns</h1>
                <Link route="/campaigns/new">
                    <a>
                    <Button
                        content="Create Campaign"
                        icon="add"
                        primary
                        floated="right"
                        />
                    </a>
                </Link>
                    {this.renderCampaigns()}
                    </div>
                    </Layout>
        )
    }
}

export default App;

