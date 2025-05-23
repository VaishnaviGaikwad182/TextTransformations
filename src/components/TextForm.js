import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () =>{
        // console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = () =>{
        // console.log("LowerCase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);

        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
        setSentenceCount(sentences.length);
        setParagraphCount(paragraphs.length);
    }

    const [text, setText] = useState('');
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);

    return (
        <>
        <div className = 'container' style ={{color: props.mode === 'light' ? 'black':'white'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style ={{backgroundColor: props.mode === 'light' ? 'white':'black', color: props.mode === 'light' ? 'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className = "btn btn-primary mx-2" onClick = {handleUpClick}>UPPERCASE</button>
            <button disabled={text.length===0} className = "btn btn-primary mx-2" onClick = {handleLoClick}>lowercase</button>
            <button disabled={text.length===0} className = "btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className = "btn btn-primary mx-2" onClick = {handleCopy}>Copy Text</button>
        </div>
        <div className='container my-3' style ={{color: props.mode === 'light' ? 'black':'white'}} >
            <h2>Your Text Summary</h2>
            <p><strong>characters:</strong> {text.length}</p>
            <p><strong>Words:</strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p><strong>Sentences:</strong> {sentenceCount}</p>
            <p><strong>Paragraphs:</strong> {paragraphCount}</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <strong>minutes required to read the above content.</strong></p>
        </div>
        </>
    )
}


