import React, {Component} from "react"
import 'semantic-ui-css/semantic.min.css'
import Layout from "../../components/Layout"
import {Form, Button,Input,Message} from "semantic-ui-react"
import factory from "../../Ethereum/factory"
import web3 from "../../Ethereum/web3"
import {Router} from "../../routes";

class CampaignNew extends Component{
    state={
        minimumContribution:"",
        errorMessage:"",
        loading:false
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        
        const accounts = await web3.eth.requestAccounts();

        this.setState({loading:true,errorMessage:""});

        try{
            await factory.methods.createCampaign(this.state.minimumContribution)
        .send({
            from:accounts[0]
        });
        Router.pushRoute("/");
        } catch(err){
            this.setState({errorMessage:err.message});
        }
        
        this.setState({loading:false});

    };

    render(){
        return(
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event=>this.setState({minimumContribution:event.target.value})}
                        ></Input>
                    </Form.Field>
                    <Message error header="Opps!" content={this.state.errorMessage}/>
                    <Button loading={this.state.loading} primary>Create!!!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;