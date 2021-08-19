//复制百度网盘验证码
function copy(id) {
    document.getElementById(id).select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}


//点击展开视频
function togglevideo(id) {
    v = document.getElementById(id);
    b = document.getElementById("btn_" + id);


    // 第一次载入0会变成空字符串，因此用这个判断/////////////////////////把这个写到csdn上去
    if (v.style.width != "100%") { //视频展开
        v.style.width = "100%";

        //修改按键样式
        b.setAttribute("class", "videobtn openvideobtn");
    } else { //视频关闭
        v.style.width = "0%";

        //修改按键样式
        b.setAttribute("class", "videobtn");
    }
}