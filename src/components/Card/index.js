import './style.css'

export function Card({ title, children, classNames }) {
  return (
    <div className={"card " + classNames} style={{ border: 'none', backgroundColor: '#fafbfc' }}>
      <div className="card-header shadow-sm  bg-body rounded" style={{ borderTop: '2px solid #dbdcdc' }}>
        {title}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}