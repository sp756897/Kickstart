import web3 from "./web3"
import CampaignFactory from "./build/campaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x2f69665Cbee1976A3F812912A0B2c1b3d5399817");

export default instance;
