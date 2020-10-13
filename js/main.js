let form = document.querySelector('form');
let form_comments = document.querySelector('#commentsform');
let btn_sbmt = form.querySelector('input[type=submit]');
let mssg = form.querySelector('#mssg');
let likes_btn = document.querySelector('.likes a');
let comments_list = document.querySelector('.comments-list');
let select = document.querySelector('#theme');
let articles = document.querySelectorAll('.article-item');

btn_sbmt.onclick = function (evt) {
    if (mssg.value.length < 10 || mssg.value.length > 200) {
        evt.preventDefault();
        mssg.style.color = "red";
        btn_sbmt.style.borderColor = "rgba(0,0,0,.2)";
        btn_sbmt.disabled = true;
    }
};

mssg.oninput = function () {
    mssg.style.color = "#000";
    btn_sbmt.style.borderColor = "#202117";
    btn_sbmt.disabled = false;
};

if (likes_btn) {
    likes_btn.onclick = function (evt) {
        evt.preventDefault();
        if (likes_btn.classList.contains('added')) {
            likes_btn.textContent--;
        } else {
            likes_btn.textContent++;
        }
        likes_btn.classList.toggle('added');
    };
}

if (form_comments) {
    form_comments.onsubmit = function (evt) {
        evt.preventDefault();
        let elem = document.createElement('li');
        let username = form.querySelector('#username');
        elem.classList.add('comments-item');
        elem.innerHTML = "" +
            "<img src=\"images/user1.png\" alt=\"пользователь\" class=\"userpick border-round\">" +
            "<p class=\"username\"></p>" +
            "<p class=\"user-text\"></p>";
        elem.querySelector('.username').textContent = username.value;
        elem.querySelector('.user-text').textContent = mssg.value;
        comments_list.append(elem);
        form.reset();
    };
}

if (select) {
    let morebtn = document.querySelector('.article-btn');
    select.onchange = function () {
        let i=0;
        for (let article of articles) {
            if (article.dataset.category !== select.value && select.value !== "0") {
                article.classList.add('hidden');
            } else {
                article.classList.remove('hidden');
                i++;
            }
        }
        if (i < 4) {
            morebtn.classList.add('hidden');
        } else {
            morebtn.classList.remove('hidden');
        }
    };
}
