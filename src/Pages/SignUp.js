import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
import {toast} from "react-toastify";
const SignUp = () => {

 const [data,setData]=useState({
  name:'',
  email:'',
  password:'',
  about:''
  
  })
  const [error,setError]=useState({
    errors:{},
    isError:false
  })


  useEffect(()=>{
//  console.log(data)
  },[data])
  const  handelChange=(event,property)=>{
    //dynammic setting the value
    setData({...data,[property]:event.target.value})
  }
//reseting the form 
  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:''
    })

  }

  // submitting the form
const submitForm=(event)=>{
  event.preventDefault()
  // if(error.isError){
  //   toast.error("Form Data is invalid ")
  //   return;
  // }

  //data validation
//console.log(data);
  //calling server api for sending data

  signUp(data).then((response)=>{
    console.log(response);
    console.log("Success log");
    toast.success("Successfully registered !! user id "+response.id)
    setData({
      name:'',
      email:'',
      password:'',
      about:''
    })
 
  }).catch((error)=>{
    console.log(error);
    console.log("Error");
    //toast.success("Fill the correct details!!")
    setError({
      errors:error,
      isError:true
    })
  })
;
}

  return (
    <Base>
      <Container>
        <Row className="mt-4" Outline="false">
        {/* for data displaying {JSON.stringify(data)} */}
            <Col sm={{ size: 6, offset: 3 }}>
          {/* Removed unused 'col' component */}
          <Card  style={{ backgroundColor: "#0080ff" }} inverse>
            <CardHeader >
              <h3>Fill information to Register!!</h3>
            </CardHeader>

            <CardBody >
              {/* Creating a form */}
              <Form onSubmit={submitForm}>
                {/* name field */}
                <FormGroup > 
                  <Label for="name"  >Enter Name</Label>
                  <Input 
                  type="text" 
                  placeholder="Enter Name"
                   id="name"
                   onChange={(e)=>handelChange(e,'name')}
                   value={data.name}
                   invalid={error.errors?.response?.data?.name ?true : false } />
                   <FormFeedback>
                    {error.errors?.response?.data?.name}
                   </FormFeedback>
                </FormGroup>

                {/* email field */}
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input 
                  type="email" 
                  placeholder="Enter Email" 
                  id="email" 
                  onChange={(e)=>handelChange(e,'email')}
                  value={data.email}  
                   invalid={error.errors?.response?.data?.email ?true : false } />
                  <FormFeedback>
                   {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>
                {/* password field */}
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input 
                  type="password" 
                  placeholder="Enter password" 
                  id="password" 
                  onChange={(e)=>handelChange(e,'password')}
                  value={data.password} 
                  invalid={error.errors?.response?.data?.password ?true : false } />
                  <FormFeedback>
                   {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>
                {/* about field */}
                <FormGroup>
                  <Label for="about">Enter About</Label>
                  <Input type="textarea" 
                  placeholder="Enter about" 
                  id="about" 
                  style={{ height: "100px" }}
                  onChange={(e)=>handelChange(e,'about')} 
                  value={data.about} 
                  invalid={error.errors?.response?.data?.about ?true : false } />
                  <FormFeedback>
                   {error.errors?.response?.data?.about}
                  </FormFeedback>
                </FormGroup>
                <Container className="text-center">
                  <Button   style={{ backgroundColor: "#e67300"}}>Register</Button>
                  <Button onClick={resetData} style={{ backgroundColor: "#ffa64d"}} type="reset" className="ms-2">
                    Reset
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default SignUp;
