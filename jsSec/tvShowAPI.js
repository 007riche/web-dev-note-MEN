const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchTerm = searchForm.elements.query.value;
    // console.log(searchTerm)
    const images = document.querySelectorAll('img');
    console.log(images)
    if (images.length)
        for (let i = 0; i < images.length; i++) {
            // console.log(images[i])
            images[i].remove()
        }
    const configAPI = { params: { q: searchTerm } }
    const response = await axios.get(` https://api.tvmaze.com/search/shows`, configAPI)
    // console.log(response.data[0].show.image.medium)
    // const newImg = document.createElement('img')
    // newImg.src = response.data[0].show.image.medium
    // document.body.append(newImg)

    loopImages(response.data)
    searchForm.elements.query.value = "";
})

const loopImages = (apiResults) => {

    for (let result of apiResults) {
        // console.log(result);
        if (result.show.image) {
            const newImg = document.createElement('img')
            newImg.src = result.show.image.medium
            document.body.append(newImg)
        }

    }
}