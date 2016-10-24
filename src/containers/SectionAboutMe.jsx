// React.
import React from 'react';

// Load icon data from JSON file.
const iconData = require('json/icons.json');

// Component definition.
export default class SectionAboutMe extends React.Component {

  // Builds a grid of technologies used.
  generateIcons() {

    // Names of the icons to be displayed.
    const iconsUsed = [
      'html5', 'css3', 'javascript', 'jquery', 'bootstrap',
      'materialize', 'material-ui', 'react', 'mustachejs', 'd3', 'atom',
      'git', 'github', 'gulp', 'webpack', 'sass', 'npm', 'nodejs', 'expressjs',
      'debian', 'ubuntu', 'bash', 'mongodb', 'python', 'flask', 'cloud9',
      'heroku'
    ];

    // Using the array of icon names, look up the corresponding icon class name,
    // and icon name, generate an array of <div> containing the icon and name.
    return iconsUsed.map((val, idx, arr) => {

      // Using the current name of the icon from the iconsUsed array,
      // extract the icon class name and icon name.
      const iconClass = iconData[val]['icon'];
      const iconName = iconData[val]['name'];

      return (
        <div className="col-xs-4 col-sm-3 col-lg-2" key={"aboutmeicon-"+iconName}>
          <div className={"icon " + iconClass}></div>
          <div className="icon-name">{iconName}</div>
        </div>
      )

    });

  }

  // Component render.
  render() {
    return (
      <div id="section-aboutme" className="height-100vmin text-center">

        <h1>About Me</h1>

        <p>Hi! My name is Jon and I'm a Full Stack Developer based in Toronto.</p>

        <p>Here are some of the technologies I have used:</p>

        <div className="row">
          {this.generateIcons()}
        </div>

      </div>
    )
  } // End Component render.

}
