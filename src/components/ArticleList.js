import Article from "./Article";

function ArticleList({list}) {
   const listArray = list.map((post)=> {
       return  (
       <Article date = {post.date} title = {post.title} preview = {post.preview} minutes = {post.minutes}/>
   )
})
    
    return (
        <main>
            {listArray}
        </main>
        )
}

export default ArticleList;
