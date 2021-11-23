const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

// btnSubmit 버튼을 click했을 때
btnSubmit.addEventListener("click", (e) => {
    if(!isTxt('userid', 5)) e.preventDefault(); // userid 인증처리
    if(!isTxt('comments', 20)) e.preventDefault(); // comments 인증처리
    if(!isEmail('email')) e.preventDefault();
    if(!isCheck('gender')) e.preventDefault();
    if(!isCheck('hobby')) e.preventDefault();
});


// 인증 함수의 리턴값이 false 라면 e.preventDefault();
// 인증 함수의 리턴값이 true 라면 해당 조건문이 무시되어 전송

// 인증함수 ---------------------------------------------------
// 만약 조건을 만족한다면 return true;
// 만약 조건을 만족하지 않는다면 return false;

// text input 인증처리 함수
function isTxt(name, len) {

    // 만약 글자수 입력을 받은게 없다면 5로 지정
    if(len === undefined) len = 5;
    // 해당 name값의 input 요소 찾음
    let input = form.querySelector(`[name=${name}]`);
    // 해당 input의 value 값 구함
    let txt = input.value;

    // 만약 글자수가 len값 이상이거나 텍스트 입력받은 내용이 있다면
    if(txt.length >= len && txt !== ""){
        // 이미 생성된 에러메시지가 있는지 확인해서
        const errMsgs = input.closest("td").querySelectorAll("p");
        //p요소가 있으면 제거하고
        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();
        // true값을 반환해서 인증통과
        return true;
    } else {
        // 조건을 만족하지 않는다면 에러 메시지 생성
        // 이미 생성된 에러메시지가 있는지 확인
        const errMsgs = input.closest("td").querySelectorAll("p");
        // p요소가 있다면 제거하고
        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        // 다시 에러 메세지 p태그 생성 후에 메시지를 담아 td 제일 뒤쪽에 삽입
        const errMsg = document.createElement("p");

        errMsgs.append(`입력항목을 ${len}글자 이상 입력하세요.`);

        input.closest("td").append(errMsg);
        // false값을 반환해서 인증 막음
        return false;
    }
}

// email 인증함수 정의
// @ 유무 체크
function isEmail(name) {
    // 이미 생성되어 있는 에러메시지가 있는지 확인 후 삭제
    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(/@/.test(txt)){
        return true;
    } else {
        // 이미 생성되어 있는 에러메시지가 있는지 확인 후 삭제
        const errMsgs = input.closest("td").querySelector("p");
        if(errMsgs.length>0) input.closest("td").querySelector("p").remove();

        // 에러메시지 생성후 출력
        const errMsg = document.createElement("p");
        errMsg.append(`@를 포함한 전체 이메일 주소를 입력하세요.`);
        input.closest("td").append(errMsg);
        return false;
    }
}

// check 인증함수
// 체크가 되어있는지 확인
function isCheck(name) {
    // input 요소가 복수개이므로 배열로 받음
    let inputs = form.querySelectorAll(`[name=${name}]`);
    // 일단 변수 isChecked 를 false 로 지정
    let isChecked = false;

    // input 요소 갯수만큼 반복을 돌면서 하나라도 체크되어있는게 있으면
    for(let el of inputs) {
        // isChecked 를 true 로 변경
        if(el.checked) isChecked = true;
    }

    // isChecked 값이 true 라면
    if(isChecked) {
        return true;
    } else {
        // isChecked 값이 false 라면
        // 이미 생성되어 있는 에러메시지가 있다면 제거하고
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove();

        // 에러메시지 새로 생성하여 출력
        const errMsg = document.createElement("p");
        errMsg.apped("필수입력항목을 체크하세요.");
        inputs[0].closest("td").append(errMsg);
        return false;
    }
}