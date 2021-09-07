import react from 'react'
import {Form,Button} from 'react-bootstrap'
class Update extends react.Component {
    render() {
        return (
            <div>
          <Form onSubmit={(event)=>this.props.updateinStorage(event)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name item</Form.Label>
    <Form.Control type="text" name="nameItem" defaultValue={this.props.updateItem.name} placeholder="nameItem" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>imgUrl</Form.Label>
    <Form.Control type="text" name="imgItem" defaultValue={this.props.updateItem.img} placeholder="imgUrl" />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={this.props.handlerClose}>
    close
  </Button>
</Form>
            </div>
        )
    }
}

export default Update
