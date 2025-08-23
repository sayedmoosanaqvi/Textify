import React,{useState} from 'react'



function TextForm(props) {
    const [text,setText] = useState("")
const whenClicked= ()=>{
    let newText=text.toUpperCase();
    setText(newText)
}
const whenloClicked=()=>{
  let newText= text.toLowerCase();
  setText(newText)
}
 const handelOnChange = (event)=>{
        setText(event.target.value)
        
    }

    const handleReversed=()=>{
let reversed=text.split("").reverse().join("");
setText(reversed);

    }
const handelCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert('Copied to Clipboard!','success')
    }


  return (
    <>
    <div >
      <h1 div className={`container text-${props.mode === 'light'?'dark':'light'}`} >Hello User</h1>
      <div>
<textarea  className='form-control' placeholder='Enter text here' rows={12} value={text}  onChange={handelOnChange}>  

</textarea>



      </div>
     <button  disabled={text.length===0}  className='btn btn-primary mt-3 mx-1' onClick={whenClicked}>Convert To UpperCase</button>
     <button disabled={text.length===0}  className='btn btn-danger mt-3 mx-1' onClick={whenloClicked} >Convert To LowerCase</button>
     <button disabled={text.length===0}  className='btn btn-secondary mt-3 mx-1' onClick={handelCopy} >Copy Text</button>
      <button disabled={text.length===0} id='myBox' className='btn btn-warning mt-3 mx-1' onClick={handleReversed}>Click To Reverse</button>
    </div>
<div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
  <h3 className='mt-3'><strong>Text </strong> Summary</h3>
  <p><b>Your Text has {text.split(/\s+/).filter((element) => element.length !== 0).length} words And Length is {text.length} </b></p>
  <p> <b> {0.05* text.split(/\s+/).filter((element) => element.length !== 0).length} Number of Words Readable per second </b> </p>

</div>
<div>

{/* < img src='/Nature.jpg' /> */}


</div>



   </>
  )
}

export default TextForm;
