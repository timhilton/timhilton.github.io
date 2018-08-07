import React, { PureComponent } from "react";
import Heading from "../elements/Heading";

export default class Skills extends PureComponent {
    render(){
      return (
          <div className="component-wrap">
                <Heading title="Skills"/>
                <div className="skills-list">
                    <h5>Web Development & Deployment</h5>
                    <p>React - Redux - Ruby on Rails - Sinatra - Angular - Express - Node - Nunjucks - MySQL - SQLite3 - PostgreSQL - MongoDB - DynamoDB - AWS - ngrok - Heroku - Bootstrap - Gulp - Grunt - Sass/SCSS - D3 - Wordpress -iOS - xCode</p>

                    <h5>Languages</h5>
                    <p>Ruby - Javascript - PHP - HTML - CSS - Swift</p>

                    <h5>Testing</h5>
                    <p>Mocha - Chai - Jest</p>

                    <h5>Agile & Development Tools</h5>
                    <p>Atlassian Jira / Bamboo - Trello - Git - Github - Gitlab</p>

                    <h5>Graphic Design</h5>
                    <p>Photoshop - Illustrator - InDesign - Lightroom</p>

                    <h5>Audio Production</h5>
                    <p>ProTools - Logic Pro</p>

                    <h5>Electronics / Internet of Things</h5>
                    <p>Arduino - Alexa - Google Assistant</p>

                    <h5>Photography</h5>
                    <p>Nikon D3400 - Parrot MamboFly</p>
                </div>
          </div>
        )
    }
}
