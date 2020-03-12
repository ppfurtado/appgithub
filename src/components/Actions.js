import React from "react";
import { Button } from "../style";

const Actions = ({ getRepos, getStarred }) => (
  <div className="action">
    <Button onClick={getRepos}> Ver Repositórios </Button>
    <Button onClick={getStarred}> Ver favoritos </Button>
  </div>
);

export default Actions;
