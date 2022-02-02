export function Card({ title, children, classNames }) {
  return (
    <div className={"card " + classNames}>
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}