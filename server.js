var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  'article-one' : {
    
    title: 'Article one| Karan che',
    heading: 'article-one',
    date: 'mar 10,2017',
    content: `
       <P> 
        This is the content for article one... cool to working on this.        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.

        </P>
         <P> 
        This is the content for article one... cool to working on this.        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.

        </P>
         <P> 
        This is the content for article one... cool to working on this.        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.
        This is the content for article one... cool to working on this.

        </P>`
},
  'article-two' : {
        title: 'Article two| Karan che',
        heading: 'article-two',
        date: 'mar 15,2017',
        content:`
        <P> 
            This is the content for article two... cool to working on this.
        </p>`
        },
  'article-three':{
    title: 'Article Three| Karan che',
        heading: 'article-three',
        date: 'mar 20,2017',
        content:`
        <P> 
            This is the content for article three... cool to working on this.
        </p>`
    
},
};
function createTemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;

var htmlTemplate= `

<html>
<head>
        <link href="/ui/style.css" rel="stylesheet" />

    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    </head>
<body>
    <div class="container">
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
     </div>
    <div>
       ${content}
    </div>
    </div>
</body>


</html>


`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res){
    //articleName==articleone
    //articles[articleName]== {} content of article one
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
