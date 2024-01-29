import { Row, Col, InputGroup, Container, FormControl, Button, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"; 
import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState("")
  const [list,setList] = useState([])

  const updateInput = (value) => {
    setUserInput(value)
  }
  const addItem = () => {
    if(userInput.trim !== ""){
      const newItem = {
        id:Math.random(),
        value: userInput.trim()
      }
      setList((prevList)=> [...prevList, newItem]);
      setUserInput("")
    }
  }
  const deleteItem = (key) => {
    const updatedList = list.filter((item)=> item.id !== key)
    setList(updatedList)
  }
  const editItem = (index) => {
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
      const updatedList = [...list];
      updatedList[index].value = editedTodo.trim();
      setList(updatedList);
    }
  };
  return (
    <Container>
      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", fontWeight: "bolder" }}>Todo List</Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder='add item ..'
              size="lg"
              value={userInput}
              onChange={(e)=>updateInput(e.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup>
              <Button
                variant="dark"
                className="mt-2"
                onClick={()=> addItem()}
              >
                ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 5, offset: 4 }}>
        <ListGroup>
          {list.map((item,index)=> (
            <div key={index}>
              <ListGroup.Item variant='dark' action style={{display:"flex",justifyContent:"space-between"}}>
                {item.value}
                <span>
                  <Button style={{marginRight: "10px"}} variant='light'onClick={()=>deleteItem(item.id)}>
                    Delete
                  </Button>
                  <Button variant='light'onClick={()=>editItem(index)}>
                    Edit
                  </Button>
                </span>
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
