function Button(noteProps:{onClick: any, className: string, children: any},) {
    return(
        <button className={noteProps.className} onClick={noteProps.onClick}>{noteProps.children}</button>
    )
}

export default Button;