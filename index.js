let pageNo = localStorage.getItem('pageNo') || 1;
const orderList = document.getElementById('list');
const pageTitle = document.getElementById('pageTitle');

function getGitIsuues(page) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

    fetch(url).then((response) => response.json())
        .then(data => {
            // console.log(data);
            orderList.innerHTML = '';
            data.forEach(issue => {
                let listItem = document.createElement('li');
                listItem.textContent = issue.title;
                orderList.appendChild(listItem);
                pageTitle.innerHTML = `Page number ${page}`;

            });
        }).catch(e => console.error(e));
    
    localStorage.setItem('pageNo', page);
}

getGitIsuues(pageNo);

function load_Prev() {
    if (pageNo > 1) {
        pageNo--;
        getGitIsuues(pageNo);
    }
}

function load_Next() {
    pageNo++;
    getGitIsuues(pageNo);
}
