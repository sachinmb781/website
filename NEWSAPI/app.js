const SportsApi =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c18d79d9844c4faf94a711ac433ef4ff";
window
  .fetch(SportsApi)
  .then(data =>
    data
      .json()
      .then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = "";
        for (let x of sportsData) {
          output += `
                      
                      <h1 class="titleh1"><a href="${x.url}" target="_blank">${x.title}</a></h1>
                      <p>${x.description}</p>
                      <img src="${x.urlToImage}"/>
                      <p>${x.publishedAt}</p>  `;
          document.getElementById("left").innerHTML = output;
        }
      })
      .catch(err => console.log(err))
  )
  .catch(err => console.log(err));

//   time javascript here
setInterval(() => {
  var time = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = `${time}`;
}, 1000);
///////////////////////////Entertainment///////////////////////////////////////////////////////////////////////////

const EntertainmentApi =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c18d79d9844c4faf94a711ac433ef4ff";
window
  .fetch(EntertainmentApi)
  .then(data =>
    data
      .json()
      .then(Entertainmentnews => {
        // console.log(Entertainmentnews);
        let EntData = Entertainmentnews.articles;
        let output = "";
        for (let y of EntData) {
          output += `
                      
                      <h1 class="titleh1"><a href="${y.url}" target="_blank">${y.title}</a></h1>
                      <p>${y.description}</p>
                      <img src="${y.urlToImage}"/>
                      <p>${y.publishedAt}</p>  `;
          document.getElementById("right").innerHTML = output;
        }
      })
      .catch(err => console.log(err))
  )
  .catch(err => console.log(err));

///////////////////////////////////Top Headlines////////////////////////////////////////////////////////
const topApi =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=c18d79d9844c4faf94a711ac433ef4ff";
window
  .fetch(topApi)
  .then(data =>
    data
      .json()
      .then(topNews => {
        // console.log(topNews);
        let topNews1 = topNews.articles;
        let output = "";
        for (let z of topNews1) {
          output += ` <h1 class="titleh1"><a href="${z.url}" target="_blank">${z.title}</a></h1>
            <p>${z.description}</p>
            <img src="${z.urlToImage}"/>
            <p>${z.publishedAt}</p>`;
          document.getElementById("middle").innerHTML = output;
        }
      })
      .catch(err => console.log(err))
  )
  .catch(err => console.log(err));
