export const Task = ({ completed, children, deadline }) => {
    const className = completed ? 'completed' : '';
    return (
        <div className={className}>
            (до {deadline}) {children}
        </div>
    )
}