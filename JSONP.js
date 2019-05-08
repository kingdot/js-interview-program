/** Promise封装JSONP
 * {
 *     url: '',
 *     data: {
 *
 *     }
 * }
 * @returns {Promise<any>}
 * @constructor
 */

function JSONP(url, data) {
    return new Promise(((resolve, reject) => {
        let str = url.indexOf('?') > -1 ? '&' : '?';
        let functionName = `JSONP_${Date.now()}`;

        if (data) {
            str = Object.keys(data).reduce((total, key) => {
                return total += `&${key}=${obj[key]}`
            }, `callback=${functionName}`);
        }

        let script = document.createElement("script");
        script.src = url + str;

        // 关键步骤，定义在window上
        // 回调函数内部resolve，并移除节点
        window[functionName] = function(info){
            delete window[functionName];
            document.body.removeChild(script);
            resolve(info);
        };

        script.onerror = function(){
            delete window[functionName];
            document.body.removeChild(script);
            reject('error');
        };
        // 加入dom中
        document.body.appendChild(script);
    }))
}

JSONP('www.baidu.com', {}).then((res)=>console.log(res))