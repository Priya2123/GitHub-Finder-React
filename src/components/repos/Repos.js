import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

//destructuring props ({repos})
export default function Repos({ repos }) {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
}
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
