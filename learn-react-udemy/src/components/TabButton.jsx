export default function TabButton({children, status, ...props}){
    return (
        <li>
            <button className={status ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}