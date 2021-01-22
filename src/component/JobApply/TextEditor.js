//text editor for apply job post

import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function TextEditor() {

    const [addData, setVal] = useState('');
    const [addedData, showData] = useState(0);

    const handlechange = (e, editor) => {
        const data = editor.getData();
        setVal(data);
    }

    return (
        <div style={{backgroundColor:'yellowgreen'}}>
            <h2>
                <u style={{display:'flex', justifyContent:'center'}}>Apply for Job Post</u>
            </h2>

            <div style={{marginLeft:'25%', width:'700px', display:'inline-block', textAlign:'center'}}>
                <div style={{width:'700px', display:'inline-block', textAlign:'right', marginBottom:'5px'}}>
                    <button style={{backgroundColor:'yellowgreen'}} onClick={()=>showData(!addedData)}>{addedData ? 'Hide Data' : 'Show Data'}</button>

                </div>
                <CKEditor editor={ClassicEditor} data={addedData} onChange= {handlechange}/>
            </div>

            {addedData? ReactHtmlParser(addData): ''}


            <div style={{ display:'flex', justifyContent:'center'}}>
                <button type="button" class="btn btn-success">Submit</button>        
            </div>

        </div>
    )
}

export default TextEditor