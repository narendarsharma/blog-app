import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
const Login=()=>{

   const [loginDetail,setloginDetail]=useState({
    username:'',
    password:''  
   })
   const handleChange=(event, field)=>{
      let actualValue=event.target.value
      setloginDetail({
         ...loginDetail,
         [field]:actualValue
      })
   }

   const handleReset=(event)=>{
      setloginDetail({
         username:'',
         password:'',
      });
    };
   const handleFormSubmit=(event)=>{
      event.preventDefault();
      console.log(loginDetail);
// validation
 if(loginDetail.username.trim()==''||loginDetail.password.trim()==''){
   toast.error("Fill all the login details !!")
   return;
 }

 /// submit the data to the serverto generate   token
loginUser(loginDetail).then((data)=>{
   console.log("user login: ");
   console.log(data);

//save the  data to localstorage

doLogin(data,()=>{
   console.log("login details is saved to localstorage")
})

   toast.success("Login Successfully");
}).catch(error=>{
   console.log(error);
   if(error.response.status==400||error.response.status==404){
      toast.error(error.response.data.massage)
   }else{
      toast.error("Somthing going on wrong");

   }
})

   }
    return (
    <Base>
     <Container>

      <Row>
         <Col 
         sm={
            {
               size:6,
               offset:3

            }
         }
         
         >
            <Card style={{ backgroundColor: "#0080ff" }} inverse className="mt-2">

               <CardHeader>
                  <h3>Login Here  !!</h3>

               </CardHeader>
               <CardBody>
                  <Form onSubmit={handleFormSubmit}>
                     {/* email field */}
                     <FormGroup>
                        <Label for="email">
                           Enter Email
                        </Label>
                        <Input
                        id="email"
                        placeholder="Enter Email"
                        type="email"
                        value={loginDetail.username}
                        onChange={(e)=>handleChange(e,'username')}
                        />
                     </FormGroup>
                       {/* password field */}
                       <FormGroup>
                        <Label for="password">
                           Enter password
                        </Label>
                        <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        value={loginDetail.password}
                        onChange={(e)=>handleChange(e,'password')}


                        />
                     </FormGroup>
                     <Container className="text-center">
                        <Button style={{ backgroundColor: "#e67300"}} >
                           Login
                        </Button>
                        <Button onClick={handleReset} className="ms-2" style={{ backgroundColor: "#ffa64d"}}>
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
}

export default Login;