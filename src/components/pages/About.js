import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>This is the About Page</h1>
      <p>App to search GitHub users</p>
      <p>Version: 1.0.0</p>
      <br />
      <br />
      <p>
        The GitHub open source community gives you access to millions of open
        source projects. There you can get involved with a project or start one
        of your very own. Working on open source software is an awesome way to
        learn new skills and collaborate with bright programmers from whom you
        can learn a lot.
      </p>
      <br />
      <p>
        Developers are building the future on GitHub every day, explore their
        work and find inspiration for your work @
        <a href="https://github.com/">Github</a>
      </p>
    </Fragment>
  );
};

export default About;
