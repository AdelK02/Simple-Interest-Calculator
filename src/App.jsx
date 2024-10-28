import { useState } from 'react'
import './App.css'
import './index.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';



function App() {

  const[principle,setPrinciple]=useState(0)
  const[interest,setInterest]=useState(0)
  const[year,setYear]=useState(0)
  const[simpleInterest,setSimpleInterest]=useState(0)

  const [isInvalidPrinciple,setInvalidPrinciple]=useState(false)
  const [isInvalidInterest,setInvalidInterest]=useState(false)
  const [isInvalidYear,setInvalidYear]=useState(false)


  console.log(principle);
  const validateInput=(tag)=>{
    const {name,value}=tag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='principle'){
        setPrinciple(value)
        setInvalidPrinciple(false)
      }
      else if(name=='interest'){
        setInterest(value)
        setInvalidInterest(false)
      }
      else{
        setYear(value)
        setInvalidYear(false)
      }
    }
    else{
      if(name=='principle'){
        setInvalidPrinciple(true)
      }
      else if(name=='interest'){
        setInvalidInterest(true)
      }
      else{
        setInvalidYear(true)
      }
    }
    
    console.log(tag);
    
    
}
  

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("Button Clicked");

    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)
    }
    else{
      alert("Please Enter Valid Values")
    }
    
  }
  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setYear(0)
    setSimpleInterest(0)

    setInvalidInterest(false)
    setInvalidPrinciple(false)
    setInvalidYear(false)
  }

  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{minHeight:"100vh",width:"100%"}} className='d-flex align-items-center justify-content-center bg-dark p-5'>
      <div style={{width:"600px",minHeight:"90vh"}} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='bg-warning rounded d-flex align-items-center justify-content-center text-light flex-column p-4'>
          <h1>{simpleInterest}</h1>
          <h3>Total Simple Interest</h3>
        </div>
        <form action="">
          <TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="₹Principle Amount" variant="outlined" />
            {
              isInvalidPrinciple &&
              <h1 className='text-danger' style={{fontSize:'15px'}}>Invalid Amount</h1>
            }

          <TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="Rate" variant="outlined" />
          {
              isInvalidInterest &&
              <h1 className='text-danger' style={{fontSize:'15px'}}>Ivalid Interest Rate</h1>
            }
          <TextField name='year' value={year || ""} onChange={e=>validateInput(e.target)} style={{width:"100%"}} className='mt-3' id="outlined-basic" label="Time Period" variant="outlined" />
          {
              isInvalidYear&&
              <h1 className='text-danger' style={{fontSize:'15px'}}>Invalid Year</h1>
            }
          <div>
            <Stack direction="row" spacing={2}>
              <Button disabled={isInvalidInterest || isInvalidPrinciple || isInvalidYear} type='submit' onClick={handleCalculate} className='mt-5 w-100 bg-dark' style={{height:"50px"}} variant="contained">Calculate</Button>
              <Button onClick={handleReset} className='mt-5 w-100' variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
        
     </div>
    </>
  )
}

export default App
