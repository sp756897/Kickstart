import React,{Component} from "react"
import 'semantic-ui-css/semantic.min.css'
import {Card} from "semantic-ui-react"
import Layout from "../../components/Layout"
import Campaign from "../../Ethereum/campaign"
import web3 from "../../Ethereum/web3"

class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution : summary[0],
            balance : summary[1],
            requestsCount : summary[2],
            approversCount : summary[3],
            manager : summary[4]
        }
    }

    renderCards = () =>{

        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
            header: manager,
            meta: "Address of Manager",
            description: "Manager created this campaign and creates requests",
            style: {overflowWrap:"break-word"},
            },
            {
                header: balance,
                meta: "Balance",
                description: "Balance"  
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution",
                description: "Minimum Contribution"
            },
            {
                header: approversCount,
                meta: "Count of Approvers",
                description: "Count of Approvers"
            },
            {
                header: requestsCount,
                meta: "Count of Requests",
                description: "Count of Requests"
            }
        ];

        return <Card.Group items={items} />
    };

    render(){
        return(
            <Layout>
                <h3>Campaign Show</h3>
                {this.renderCards()}
            </Layout>
        )
    }
}

export default CampaignShow;