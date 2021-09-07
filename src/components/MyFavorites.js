import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import RenderFav from './RnderFav'
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import Update from './Update.js';

class MyFavorites extends React.Component {
  constructor(props){
   super(props)
   this.state={
storeDatadataBase:[],
getFromDataBase:[],
updateObj:{},
showForm:false,
closeFunction:true
   }
  }
  ////////////////////////////////componentDidMount
  componentDidMount=async()=>{
    const {user}=this.props.auth0
    const dbChoclate=axios.get(`${process.env.REACT_APP_SERVER}getfavortITem?email=${user.email}`)
    this.setState({
      storeDatadataBase:dbChoclate.data
    })
  }
  /////////////////////delet
deletFromStorage=async(item)=>{
  const {user}=this.props.auth0
  const id=this.state.storeDatadataBase[item]._id
const urlDelet=axios.delet(`${process.env.REACT_APP_SERVER}deleteSelectItem/${id}`)
this.setState({
  storeDatadataBase:urlDelet.data
})
}

  ///////////////////////updateFunction
  updateItem=async(item)=>{
    const item2=this.state.storeDatadataBase[item]
    this.setState({
      updateObj:item2,
      showForm:true,
    })
  }
    updateinStorage=async(event)=>{
      event.preventDefualt()
      const {user}=this.props.auth0
        const itemid=this.state.storeDatadataBase._id
        let newUpdate={
          name:event.target.nameItem.value,
          img:event.target.imgItem.value
        }
        const updateUrl=axios.put(`${process.env.REACT_APP_SERVER}updateSelectItem/email=${itemid}`,newUpdate)
        const dbChoclate=axios.get(`${process.env.REACT_APP_SERVER}getfavortITem?email=${user.email}`)
        this.setState({
          storeDatadataBase:dbChoclate.data
        })
  }
  handlerClose=()=>{
    this.setState({
      closeFunction:false
    })
  }
  //////////////////////////
  render() {
    return(
      <>
      {this.state.storeDatadataBase.map((storeData,idx)=>{
        <RenderFav storeData={storeData}
        idx={idx}
        deletFromStorage={this.deletFromStorage}
        updateinStorage={this.updateinStorage}
        />
      })}
      {this.state.showForm&&
       <Update 
       handlerClose={this.handlerClose}
       updateItem={this.updateItem}
       updateinStorage={this.updateinStorage}/>
      }
     
       
      </>
    )
  }
}

export default withAuth0(MyFavorites);

