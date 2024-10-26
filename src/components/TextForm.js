import React,{useState} from "react";

export default function TextForm(props) {
const handleUpClick=() => {
    //console.log("uppercase is clicked"+text)
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!",'success')
}
const handleLowClick=() => {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!",'success')
}
const handleOnChange=(event) => {
    //console.log("onchange")
    setText(event.target.value);
}

const handleClearClick=() => {
    let newText="";
    setText(newText);
    props.showAlert("Cleared text!",'success')
}


const countVowels=() =>{
    let char=text.split("");
    console.log(char,char.length)
    let count=0;
    for(let i=0; i<=char.length; i++){
    if (char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] === 'o' || char[i] === 'u'){
        count+=1;
    }
}
    CountVowels(count);
    setText(count+" : number of vowels")
}

const handleCopy=()=>{
    let text=document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!",'success')
}
const removeExtraSpaces=()=>{
    let newText = text.split(/\s+/); 
    setText(newText.join(" "))
    props.showAlert("Removed all extra spaces!",'success')
   
}
    const[text,setText]=useState("")   //state
    const[vowels,CountVowels]=useState("Counting vowels..");
    // const[text,setText]=useState("Enter the text here")   //state
    // text="abnmcxd" //wrong way to update text
    // setText("Enter new text here") //Right way to update text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="mb-3  fw-bold">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control rounded" value={text} id="mybox" rows="10" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#131028':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      {/* use disabled to disabled the button if text is not entered in textarea means lenght of text is 0 then it should be true (disabled) */}
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
     
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={countVowels}>Count Vowels </button>
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text </button>
      <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={removeExtraSpaces}>Remove Extra Spaces </button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="mt-3 "> Text Summary</h2>
        <p><span className=" fw-bold">{text.split(" ").filter((element)=>{return element.length!==0}).length}</span> Words and <span className=" fw-bold">{text.length}</span> Characters and <span className=" fw-bold">{vowels}</span>  Vowels</p>
   
        {/* 1 minute to read 125 words so 0.008 minutes to read 1 word 1/125=0.008 minute   */}
        <p><span className=" fw-bold">{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</span> Mintues Read</p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
