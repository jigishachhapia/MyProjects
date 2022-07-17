Understand terms with below example:
Action Creators(people filling form) -> Action(form)->dispatch(desk representative) -> Reducers(Departments)-> State(final database)
ACtion contains type and payload.
state data can be modified using action creators and dispatch only. cant do store.data.money -1000;
