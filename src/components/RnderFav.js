import React from 'react'
import {Card,Button} from 'react-bootstrap'
class RnderFav extends React.Component {
    render() {
        return (
            <div>
                 <Card style={{ width: '18rem',height:'18rem',marginBottom:'15rem' }}>
  <Card.Img variant="top" src={this.props.storeData.img}  />
  <Card.Body>
    <Card.Title>{this.props.storeData.name}</Card.Title>
        <Button variant="primary" onClick={()=>{this.props.deletFromStorage(this.props.idx)}}>delet</Button>
        <Button variant="primary" onClick={()=>{this.props.updateinStorage(this.props.idx)}}>update</Button>

  </Card.Body>
</Card>  
            </div>
        )
    }
}

export default RnderFav
