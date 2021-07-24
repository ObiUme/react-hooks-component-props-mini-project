

function Header({data}){

    console.log(data)
    return (
        <header>
            <h1>{data.name}</h1>
        </header>   
    )

}

export default Header;