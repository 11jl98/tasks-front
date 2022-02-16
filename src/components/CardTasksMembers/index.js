export function CardMembers({ children, classNames, labels,handle }) {
  return (
    <div onClick={handle} className={"card " + classNames}>
      <div className="card-body">
        {children}
      </div>

      <div className="card-footer" style={{backgroundColor:"#fff"}}>
        <div className="overflow-auto">
          {labels?.length === 0 && <span className="badge bg-secondary">Aguardando</span>}
          {labels?.map((label) =>
            <span key={label.id} className={`badge ${label.color}`} style={{marginRight:10}}>{label.name}</span>
          )}
        </div>
      </div>
    </div>
  )
}