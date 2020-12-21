
const titleSorter = (a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    let comparison = 0;
    if (titleA > titleB) {
        comparison = 1;
    } else if (titleA < titleB){
        comparison = -1;
    }
    return comparison
}

export default (titleSorter)