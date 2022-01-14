import React from "react";

function Home() {
  const randomQoute = Math.floor(Math.random() * 10);
  const wisdomArray = [
    "our greatest weakness lies in giving up.the most certain way to succeed is always to try just one more time",
    "work hard in silence, and let the success be the noise",
    "there is no elevator to success. you have to take the stairs",
    "it is not the strongest species that survive, nor the most responsive to change",
    "never regret a day in your life. good days give you happiness and bad days give you experience",
    "it's a good day to have a great day & today is a great doy to be amazing",
    "motivation gets you going, but discipline keeos you growing. thats the law of consistency. it doesnt matter how talented you are, it doesnt matter how many opportunities you recieve. if you want to grow, consistency is key",
    "be the change you want to see in the world \n - Mahatma Gandhi",
    "being happy should be your number one goal in life",
    "there was never a night or a problem that could defeat sunrise or hope",
  ];
  return (
    <div>
      <h1>{wisdomArray[randomQoute]}</h1>
      <h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I5UBikauIQM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </h1>
    </div>
  );
}

export default Home;
