const form = document.querySelector("#member");
const btnSubmit = document. querySelector("input[type=submit]");


btnSubmit.addEventListener("click", (e) => {
    if(!isTxt('userid', 5)) e.preventDefault();
    if(!isTxt('comments', 20)) e.preventDefault();
    if(!isEmail('email')) e.preventDefault();
});

function isTxt(name, len){
    var input = form.querySelector(`[name=${name}]`);
    var txt = input.value;

    if(txt.length > len){
        let errMsgs = input.closest("td").querySelector("p");
        if(errMsg.length > 0)  input.closest("td").querySelector("p").remove();

        return true;
    } else {
        let errMsgs = input.closest("td").querySelector("p");
        if(errMsg.length > 0)  input.closest("td").querySelector("p").remove();

        var errMsg = document.createElement("p");
        errMsg.append(`텍스트를 ${len}글자 이상 입력하세요.`);
        input.closest("td").append(errMsg);
        return false;
    }
}

function isEmail(name){
    var input = form.querySelector(`[name=${name}]`);
    var txt = input.value;

    if(txt.length > 0){
        return true;
    } else {
        var errMsgs = input.closest("td").querySelector("p");
        if(errMsg.length > 0) input.closest("td").querySelector("p").remove();

        var errMsg = document.createElement("p");
        errMsg.append("이메일 주소를 입력해주세요.");
        input.closest("td").append(errMsg);
        return false;
    }
}