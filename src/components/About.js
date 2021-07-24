

function About({data}){
    return (
        <aside>
            <img src={data.image ? data.image :"https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{data.about}</p>
        </aside>
    )
}

export default About;