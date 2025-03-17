// Array.fromAsync creates a new, shallow-copied Array instance from an iterable, async iterable, or array-like object
async function fetchData() {
    return await Array.fromAsync(
        [
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json()),
        ]
    )
}

fetchData().then(console.log)