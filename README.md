## Gatsby JS example of new "File System Route API"

We use in this project, the open API : https://jsonplaceholder.typicode.com/

### Static routes

You have the static route for posts generated with the name of file. Like a classic gatsby page. it use the graphQL query for get the data.

```
/posts/{restApiPosts.id}/{restApiPosts.title}.jsx
```

### Dynamic routes

You have the dynamic route for the authors.

```
/user/[id].jsx
```

The dynamic route load the user informations like a normal React component. It not use the graphQL system from Gatsby.
The page generated at build is empty. It's populated dynamically with the id passed in params.
