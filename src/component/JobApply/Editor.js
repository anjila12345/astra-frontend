import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Editor() {
    const [text, setText] = useState('')

    return(
        <div className="editor">
            <div className="editor-section"> 
                <CKEditor editor={ClassicEditor} data={text} onChange={(event, editor) => {
                    const data = editor.getData()
                    setText(data)
                }}
                />
            </div>
            <div>
                <h2>content</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Editor;