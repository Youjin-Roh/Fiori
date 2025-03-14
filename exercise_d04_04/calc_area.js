// 면적 계산 함수
function calculateArea(length, width) {
  return length * width;
}

// 매개변수를 받아서 면적을 게산해주는 함수
function calculate() {}

document.getElementById("calcB").addEventListener("click", function () {
  // 입력값 가져오기
  //value 는 string 값을 반환함 -> const로 형변환 
  const length = parseFloat(document.getElementById("num1").value);
  const width = parseFloat(document.getElementById("num2").value);

  // 면적 계산
  const area = calculateArea(length, width);

  // element.innerText;
  // 이 속성은 element 안의 text 값들만을 가져옴

  if (isNaN(area)) {
    document.getElementById("result").innerText = `계산된 면적 : 없음`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `계산된 면적 : ${area} 제곱미터`;
  }
});
