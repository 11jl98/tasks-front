export function CardMembers({ children, classNames, labels,handle }) {
  console.log("aadsdsa",labels)
  return (
    <div onClick={handle} className={"card " + classNames}>
      <div className="card-body">
        {children}
      </div>

      <div className="card-footer" style={{backgroundColor:"#fff"}}>
        <div style={{ float: 'right' }}>
          {labels?.length === 0 && <span className="badge bg-secondary">Aguardando</span>}
          {labels?.map((label) =>
            <span key={label.id} className={`badge ${label.color}`}>{label.name}</span>
          )}
        </div>
      </div>
    </div>
  )
}