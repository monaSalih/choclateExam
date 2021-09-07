import React from 'react';
import axios from 'axios'
import {Row} from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import DataCard from './DataCard';



class AllDataAPI extends React.Component {
    constructor(props){
        super (props);
            this.state={
                dataRenderFromApi:[],
                showData:false,
                authUser:{}
        }
    }
    ////////////////////////////////componentDidMount
    componentDidMount=async()=>{
        const url=axios.get(`${process.env.REACT_APP_SERVER}handlerData`)
        this.setState({
            dataRenderFromApi:url.data,
            showData:true
        })
    }
///////////////////////add to dataBase
addItemToDataBase=async(item)=>{
const {user}=this.props.auth0

axios.put(`${process.env.REACT_APP_SERVER}favortITem?email=${user.email}`,item)
}

    render() {
        return (
            <div>
                <Row>
                {this.state.showData && 
                this.state.dataRenderFromApi.map(item=>{
                    <DataCard item={item} addItemToDataBase={this.addItemToDataBase}/> 
                })}
               </Row>

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
