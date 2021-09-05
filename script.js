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
        box.style.width = "100%";
        //修改视频大小
        video.style.width = "100%";
        //修改按键样式
        btn.setAttribute("class", "videobtn openvideobtn");
    } else { //视频关闭
        //修改gamebox宽
        box.style.width = "39%";

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