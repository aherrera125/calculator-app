export default function result_handler(firstNum, secondNum, typeOp) {
    let result;
    switch (typeOp) {
        case "add":
            result = firstNum + secondNum;
            break;
        case "less":
            result = firstNum - secondNum;
            break;
        case "mult":
            result = firstNum * secondNum;
            break;
        case "div":
            result = secondNum > 0 ? firstNum / secondNum : "Connot divide by zero!"
            break;
        default:
            
            break;
    }
    return result;
}