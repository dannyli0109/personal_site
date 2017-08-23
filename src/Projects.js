import React from 'react'
import './Projects.css'

export default function NavBar(props){

  var projects = [
    {
    name: "TicTacToe",
    websiteUrl: "https://dannyli0109.github.io/TicTacToe/",
    githubUrl: "https://github.com/dannyli0109/TicTacToe"
  },
  {
    name: "Tetris",
    websiteUrl: "https://dannyli0109.github.io/tetris/",
    githubUrl: "https://github.com/dannyli0109/tetris"
  },
  {
    name: "Food Wheel",
    websiteUrl: "https://arcane-wildwood-56545.herokuapp.com/",
    githubUrl: "https://github.com/dannyli0109/food_wheel"
  },
  {
    name: "GeoTrending",
    websiteUrl: "https://geo-trending.herokuapp.com/",
    githubUrl: "https://github.com/dannyli0109/GeoTrending"
  },
  {
    name: "Portfolio",
    websiteUrl: "https://damp-plateau-12975.herokuapp.com/",
    githubUrl: "https://github.com/dannyli0109/portfolio"
  },
  {
    name: "Maze Generator",
    websiteUrl: "https://dannyli0109.github.io/mazeGeneratorHex/",
    githubUrl: "https://github.com/dannyli0109/mazeGeneratorHex"
  },
  {
    name: "Pixelate Image",
    websiteUrl: "https://dannyli0109.github.io/Pixelate-image/",
    githubUrl: "https://github.com/dannyli0109/Pixelate-image"
  }
]

  var rows = [];
  projects.forEach(function(element, index) {
    rows.push((
      <div key={index} className="picture" style={{backgroundImage: "url('/" + element.name + ".png" + "')"}}>
          <div className="overlay">
            <h1 style={{textAlign: "center"}}>{element.name}</h1>
            <a href={element.websiteUrl}>
              <h1><i className="fa fa-columns" aria-hidden="true"></i></h1>
            </a>
            <a href={element.githubUrl}>
              <h1><i className="fa fa-github-square" aria-hidden="true"></i></h1>
            </a>
          </div>
      </div>)
    );
  })

  return (
      <div className="projectOuter">
        <div className="projectContainer">
        {rows}
        </div>
      </div>
  )
}
