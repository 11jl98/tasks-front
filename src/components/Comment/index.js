import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import './style.css'

export function Comment({ name = '', dateComment = '', source = '', styles = {} }) {
  return (
    <div className="modal-body" style={{ ...styles, border: 'none', borderLeft: '2px solid #dbdcdc', height: 'auto' }}>
      <div style={{ ...styles, border: 'none', borderLeft: '2px solid #dbdcdc', height: 'auto' }}>
        <div className="d-flex justify-content-between" >
          <span style={{ color: '#2a2e34', marginLeft: 5 }} >
            Atualizado por <a href="/">Matheus</a>
            <span style={{ marginLeft: 5,color:'#666' }}>({dateComment})</span>
          </span>

        </div>
        <div style={{ margin: 10 }}>
          <MDEditor.Markdown source={source} />
        </div>
      </div>
    </div>
  )
}