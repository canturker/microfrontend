import { BrowserHistory } from "history";
import React, { useLayoutEffect } from "react";
import { Router } from "react-router-dom";

type IProps = {
  basename?: string;
  history: BrowserHistory;
};
const CustomRouter: React.FC<IProps> = ({ basename, children, history }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
