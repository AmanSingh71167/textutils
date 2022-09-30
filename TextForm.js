import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }

    const handleClearClick = ()=>{ 
        let newText = text.toLowerCase();
        setText('')
        props.showAlert("Text've been cleared","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value) // with this line now we can add new text to the field.
    }
// -------------------------------------------------------------------------------------------------------------------
    const handleCopy = ()=>{
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text've been copied","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All the extra spaces have'en removed","success");
    }
// -------------------------------------------------------------------------------------------------------------------
    const [text, setText] = useState('');
    // const [text, setText] = useState();  // text = "new text" // this is wrong way to change the state.
                                         // setText("new text"); this is correct way to change the state.

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'#042743'}} */}
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#5a5757':'white',
            color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>  
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text your summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words &nbsp; {text.trim().length } characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>
        </div>
        </>
      )
}


TextForm.defaultProps = {
    heading: 'Enter the Text' 
}
