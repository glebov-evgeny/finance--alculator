function Intro(props){
    const {
        data
    } = props;

const elements = data.map((item)=>{
    return(
        <p className="intro__title" key={item.name}>{item.name}, {item.time}</p>
    )
});

    return(
        <div className="intro">
            {elements}
        </div>
    )
}
export default Intro;
