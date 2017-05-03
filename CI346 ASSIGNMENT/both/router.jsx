

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/register" content={Register} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/login" content={Login} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/changePassword" content={ChangePassword} layout={MainLayout} triggersEnter={isNotLoggedIn} />
  </Router>
);

// Checks if user is logged in
function isLoggedIn(context, doRedirect) {
	if(User.isLoggedIn()) {
		doRedirect('/');
	}
}

// Checks if user is logged in
function isNotLoggedIn(context, doRedirect) {
  if(!User.isLoggedIn()) {
    doRedirect('/');
  }
}

FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound/> });
  }
};
