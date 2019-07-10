


function getMovie() {
    let movie=document.getElementById('text').value;
    let year=document.getElementById('year').value;
    let a='http://www.omdbapi.com/?t='+movie+'&year='+year+'&apikey=81855d4c&';
    // let a='http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=81855d4c&';
    console.log(a);

   let fs=fetch(a);
    fs.then((data)=>{
        data.json().then((data)=>{
            let title=data.Title;
            let genre=data.Genre;
            let year=data.Year;
             let rating=data.imdbRating;
             let cast=data.Actors;
             let desc=data.Plot;
            console.log(data)
            document.getElementById('movie').innerText=title;
            document.getElementById('genre').innerText=genre;
            document.getElementById('yea').innerText=year;
            document.getElementById('imdb').innerHTML=rating;
            document.getElementById('cast').innerHTML=cast;
            document.getElementById('description').innerHTML=desc;



            // document.getElementById('description').innerHTML=data;
        })
    })
    
}
