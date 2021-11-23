const form = document.querySelector("#member");
const btnSubmit = document. querySelector("input[type=submit]");


btnSubmit.addEventListener("click", (e) => {
    if(!isTxt('userid')) e.preventDefault();
});

function isTxt(name){
    var input = form.querySelector("input[name=${name}]");
    var txt = input.value;

    if(txt !== ''){
        let errMsgs = input.closest("td").querySelector("p");
        if(errMsg.length > 0)  input.closest("td").querySelector("p").remove();

        return true;
    } else {

        let errMsgs = input.closest("td").querySelector("p");
        if(errMsg.length > 0)  input.closest("td").querySelector("p").remove();

        var errMsg = document.createElement("p");
        errMsg.append("텍스트를 입력하세요.");
        input.closest("td").append(errMsg);
        return false;
    }
}