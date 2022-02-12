export function FormProject({ children, classNames }) {

  return (
    <>
      <div className={classNames + " w-100"}>
        {children}
      </div>
    </>
  )
}