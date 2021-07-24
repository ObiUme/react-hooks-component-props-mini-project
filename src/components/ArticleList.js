import Article from "./Article"

function ArticleList({data}){
     console.log(data)
    let articles = data.map(articleObj => {
        return (
        <Article 
            key={articleObj.id} 
            title={articleObj.title} 
            date={articleObj.date} 
            preview={articleObj.preview} 
            minutes={articleObj.minutes}/>)
    })

    return (
        <main>{articles}</main>

    )
}

export default ArticleList;