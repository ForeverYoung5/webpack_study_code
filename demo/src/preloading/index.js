// document.addEventListener('click',()=>{
//     var element = document.createElement('div');
//     element.innerHTML = 'hello jerry';
//     document.body.appendChild(element)
// })

document.addEventListener('click',()=>{
    import(/*webpackPrefetch:true */ './handleClick').then(({default:func})=>{
        func();
    })
 })