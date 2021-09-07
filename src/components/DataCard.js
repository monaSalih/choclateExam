import React from 'react'
import {Card,Button} from 'react-bootstrap'
 class DataCard extends React.Component {
    render() {
        return (
            <div>
               <Card style={{ width: '18rem',height:'18rem',marginBottom:'15rem' }}>
  <Card.Img variant="top" src={this.props.item.img} />
  <Card.Body>
    <Card.Title>{this.props.item.name}</Card.Title>
        <Button variant="primary" onClick={()=>{this.props.addItemToDataBase(this.props.item)}}>Favorate</Button>
  </Card.Body>
</Card> 
            </div>
        )
    }
}

export default DataCard
