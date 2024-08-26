// default export 방식 - 전체에서 단 1개의 파일만 내보낼 때

let result = 0;
const add = (x) => {
    result += x;
    return result;
}

//export default add; // 마지막에 이 파일을 대표하는 구문을 하나 내보내기
export default {result, add};