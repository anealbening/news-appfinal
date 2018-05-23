function createNode(element)
{
    return document.createElement(element);
};

function append(parent,el)
{
    
    return parent.appendChild(el);
};

const ul = document.getElementById("news");

const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08d25b5b634d405187c93540c61ee6f1";

fetch(url)
.then(resp => resp.json())
.then(function(data){
    let articles = data.articles;
    console.dir(articles)
    debugger;

    return articles.map(function(news){
        console.dir(news)
        debugger;
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');

        img.src=news.urlToImage.medium;

        span.innerHTML='${news.name}';

        append(li,img);
        append(li,span);
        append(ul,li);
    });
})
.catch(function(error) {

}
);