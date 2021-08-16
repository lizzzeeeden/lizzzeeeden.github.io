window.onload = function () {
    e = document.getElementsByClassName("copycontent");
}

function copy(index) {
    e[index].select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}
