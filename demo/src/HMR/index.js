// **************css******************
import './style.css';

var btn = document.createElement('button');
btn.innerHTML = '添加';
document.body.appendChild(btn);

btn.onclick = function(){
    var div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}
// *****************js*******************
import counter from './counter';
import number from './number'
counter()
number();

if(module.hot){ //判断是否开启HMR
    module.hot.accept('./number.js',function(){ //监听number.js文件变化
        var node = document.getElementById("number");
            document.body.removeChild(node);
            number();
    })
}