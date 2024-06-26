

import React, { useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const EditorComponent=({editorRef}:{editorRef:any})=> {
  
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  useEffect(()=>{},[editorRef.current])

  return (
    <>
      <Editor
        apiKey='wpc83k2awzvzhgdx2i11bpbbr5n1dnsnxil2f744or9y1pin'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        init={{
          height: 500,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}

export default EditorComponent