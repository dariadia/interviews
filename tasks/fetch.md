### Task 1
Fetch users from [API](https://jsonplaceholder.typicode.com/users). Console log the data structured as follows: user.id: user.username

### Task 2
This always returns `undefined` whereas it should return data.

```
const getData = () => {
	let result

	fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
		result = response
	)

	return result
}
```

### Task 3
Fetch all users from [API](https://jsonplaceholder.typicode.com/users). Sort them by email (DESC order). Console log the resulting output.

### Task 4
Get users from [API](https://api.github.com/users). For each odd acquired user fetch their "repos_url" (a collection). Render an HTML list follows: username + repos collection.

Bonus: highlight the user with the most repos
Bonus 2: add sort button. Sort by username
