import './Footer.css'

function Footer({sampleProps, byName}) { 
    /* You can also use "props" as an argument in the function above:
     * function Footer(props) { 
     *      const {sampleProps, byName} = props
     * }
     * 
     * or use the props parameter directly in JSX:
     * <p>{props.sampleProps} was created by {props.byName}
     */

    return (
        <div className="footer">
            I'm a Footer with props: {sampleProps} and {byName}
        </div>
    )
}

export default Footer