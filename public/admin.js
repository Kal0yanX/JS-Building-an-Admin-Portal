
// Your Code Here
async function main() {
    let response = await fetch ('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(createBook)
}