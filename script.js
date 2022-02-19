//导航
window.onload = function () {
    ico_more = document.getElementById("ico_more");
    list = document.getElementById("nav_list");
    pos_itrstory = document.getElementById("interactstory");
    pos_game = document.getElementById("game");
    pos_article = document.getElementById("article");
}

function more() {
    if (list.style.height != "15rem") {
        list.style.height = "15rem";
        // ico_more.style.opacity = "90%";
        ico_more.id = "ico_more_on";
    } else {
        list.style.height = "0";
        // ico_more.style.opacity = "60%";
        ico_more.id = "ico_more";
    }
}

function goitrstory() {
    window.scrollTo({
        top: pos_itrstory.offsetTop,
        behavior: 'smooth',
    })
}

function gogame() {
    window.scrollTo({
        top: pos_game.offsetTop,
        behavior: 'smooth',
    })
}

function goarticle() {
    window.scrollTo({
        top: pos_article.offsetTop,
        behavior: 'smooth',
    })
}

function gotop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function gobottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    })
}
//复制百度网盘验证码
function copy(id) {
    document.getElementById(id).select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}

//点击展开视频
function togglevideo(id) {
    box = document.getElementById("box_" + id);
    video = document.getElementById("video_" + id);
    btn = document.getElementById("videobtn_" + id);


    // 第一次载入0会变成空字符串，因此用这个判断/////////////////////////把这个写到csdn上去
    if (video.style.width != "100%") { //视频展开
        //修改gamebox宽
        box.className = "gamebox_unfold";
        //box.style.width = "100%";
        //修改视频大小
        video.style.width = "100%";
        //修改按键样式
        btn.setAttribute("class", "videobtn openvideobtn");
    } else { //视频关闭
        //恢复gamebox宽
        box.className = "gamebox";

        //修改视频大小
        video.style.width = "0%";

        //修改按键样式
        btn.setAttribute("class", "videobtn");

    }

    setTimeout(function () {
        window.scrollTo({
            top: box.offsetTop - 32,
            behavior: 'smooth',
        })
        // box.scrollIntoView();
    }, 500);
}