import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 0.9,
    boxShadow: "0px 0px 8px black",
    transition: {
      yoyo: Infinity,
      duration: 0.8,
    },
  },
};

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <motion.div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <motion.input
          variants={buttonVariants}
          whileHover="hover"
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/* if showClear is true (that means  user.length>0) then only we want the clear button */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </motion.div>
  );
};

export default Search;
