// 할일을 담을 배열 선언
var aTodo = [];

//사용자한테 입력받음
let res = prompt("1. 할일 입력 2. 할일 삭제 3. 종료");

while (true) {
  // 3이면 종료
  if (res == 3) {
    break;
  }
  if (res == 2) {
    // 2일때 할일 삭제, 재입력 받기
    var sIdx = prompt("삭제할 할 일의 번호를 입력하세요(0부터 시작)");

    // 인덱스를 정수로 형변환 
    var iIdx = parseInt(sIdx);
    aTodo.splice(iIdx, 1);

    res = prompt("1. 할일 입력 2. 할일 삭제 3. 종료");

  } else {
    // 1일 때 할일 추가
    lst = prompt("1. 할일을 입력하세요.");
    aTodo.push(lst);

    res = prompt("1. 할일 입력 2. 할일 삭제 3. 종료");

  }
}
console.log("최종 할일 목록 : ", aTodo);
