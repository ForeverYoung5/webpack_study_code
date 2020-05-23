async function getComponent(){
    const _ = await import(/*webpackChunkName:"lodash"*/ 'lodash')
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello','jerry'],'-')
    return element
}

getComponent().then((element)=>{
    document.body.appendChild(element);
})