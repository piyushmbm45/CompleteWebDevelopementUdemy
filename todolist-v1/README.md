








- EJS - embedded javascript 


- the problem is that when render post request browser gives that newListItem is not defined

- bcz we are in home route('/') and render list we defined only one variable kindOfDay whereas our list.ejs file also have one more variable newListItem

- so we need to define newListItem in Home route


- best thing is adding same list.ejs file to work route
- by defining key : value of button as logic