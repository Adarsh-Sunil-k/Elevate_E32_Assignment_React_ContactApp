import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
// import { faCreativeCommonsBy } from '@fortawesome/free-solid-svg-icons';
import user from './pics/user.png'



function Main() {
    const [tasks, setTasks] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const [email, setEmail] = useState('')

    const emailChangeHandler = (e)=>{
        
        setEmail(e.target.value)
    }

    function addData(event){
        event.preventDefault();
        if(inputValue.trim() !== ('') && email.trim() !== (''))
            {
        setTasks([
            ...tasks,
            {inputValue,email}
        ]);
        setInputValue('')
        setEmail('')
        }
    }

   

    function deleteTask(index){
        let taskContent = [...tasks]

        taskContent.splice(index,1)
        setTasks(taskContent);
    }

  return (
    <div>
          
            <Form className='form-main'> 
                <h4>Add Contact</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" value={email} onChange={emailChangeHandler}/>
                </Form.Group>
      
                <Button variant="primary" type="submit" onClick={addData}>
                Add
                </Button>
            </Form>



        <div className='sec-arange'>

            <ul>
                
                {
                   

                    tasks.map(
                        (task,index)=><li key={index}>

                            

                            <div className='nm-el'>
                                
                                <img src={user} alt='userImage'/>
                               
                                <div className='nm-el-sec'>
                                    <h1>{task.inputValue}</h1>
                                    <h3>{task.email}</h3>
                                </div>
                            
                               
                            </div>

                            
                            {/* {' '} */}
                            <div className='delete-btn' onClick={()=>deleteTask(index)}><FontAwesomeIcon icon={faTrashCan} style={{color: "#f5051d",}} /></div>
                            </li>
                    )

                }
                
            </ul>

        </div>
            
            
    </div>   
         


    
  )
}

export default Main