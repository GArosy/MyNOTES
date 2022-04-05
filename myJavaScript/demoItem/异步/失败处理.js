// 
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== 'number') {
                throw "一参必须为数字！";
            }
            // 成功回调，执行sucess函数
            success(value * 2);
        } catch(reason) {
            // 失败回调，执行failure函数
            failure(reason);
        }
    }, 1000);
}

const successCallback = (x) => console.log(`成功：执行结果为${x}`);
const failureCallback = (reason) => console.log(`失败：${reason}`);

double(3, successCallback, failureCallback);
double("a", successCallback, failureCallback);

// 成功：执行结果为6
// 失败：一参必须为数字！