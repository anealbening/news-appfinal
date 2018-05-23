
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=08d25b5b634d405187c93540c61ee6f1';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
        
        // Parse JSON response
    var results = JSON.parse(response);
    
    // Get items array from docs object
    var items = results.docs;
    
    // Get first item
    var item = items[0];
    
    // Get the web_url object within the first item
    var web_url = item.web_url;
    
    // Get the snippet object within the first item
    var snippet = item.snippet;
    
        

    })