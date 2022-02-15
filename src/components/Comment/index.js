import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import './style.css'

export function Comment({ name = '', dateComment = '', source = '', styles = {} }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="modal-body" style={{ ...styles, border: 'none', borderLeft: '2px solid #dbdcdc', height:'auto'}}>
      <div className="card" style={{ ...styles, border: 'none', borderLeft: '2px solid #dbdcdc', height:'auto'}}>
        <div className="d-flex justify-content-between" style={{ backgroundColor: '#ddf4ff', padding: 4 }}>
          <a style={{ textDecoration: 'none', color: '#2a2e34' }} >{name}</a>
          {visible && (
            <span onClick={() => setVisible(false)}>
              <i className="">Fechar</i>
            </span>
          )}

          {!visible && (
            <span onClick={() => setVisible(true)}>
              <i className="">Abrir</i>
            </span>
          )}
        </div>
        {visible && (
          <div className="card-body">
            <MDEditor.Markdown source={source} />
          </div>
        )}

        <div className="card-footer">
          <span >{dateComment}</span>
        </div>
      </div>
    </div>
  )
}