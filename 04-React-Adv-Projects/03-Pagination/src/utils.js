const paginate = (followers) => {
    const itemsPerPage = 5;
    const numOfPages = Math.ceil(followers.length / itemsPerPage);

    // length: 10 => create a new array containing 10 elements, starting from 0, 1, 2, ... to 9
    // for each element, it is a slice of the followers array
    const newFollowers = Array.from({ length: numOfPages }, (_, index) => {
        // each page's start index
        const start = index * itemsPerPage;
        // slice the original array
        return followers.slice(start, start + itemsPerPage);
    });

    // console.log(newFollowers);
    return newFollowers;
}

export default paginate
