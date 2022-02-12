import { useDrag } from 'react-dnd'
import { CardMembers } from '../CardTasksMembers'


export function Dragdrop({ children, title, classNames }) {

    const array = [
        { id: 1, nome: "Joao" },
        { id: 2, nome: "Joao" },
        { id: 3, nome: "Joao" },
        { id: 4, nome: "Joao" },
        { id: 5, nome: "Joao" },
    ]

    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'CARD',
            collect: (monitor) => ({
                opacity: monitor.isDragging()
            })
        }),
        []
    )


    return (
        <div ref={dragRef} style={{ border: opacity ? '1px dashed #dcdcdc' : 'none' }}>
            <CardMembers classNames={classNames}>
                {children}
            </CardMembers>
        </div>
    )
}