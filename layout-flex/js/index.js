window.addEventListener('load',function(){
    var back=document.querySelector('.backtop');
    var nav=document.querySelector('nav');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>=nav.offsetTop){
            back.style.display='block';
        }
        else{
            back.style.display='none';
        }
    })
    back.addEventListener('click',function(){
        window.scroll(0,0);
    })
    //动态生成小圆圈
    var focus=document.querySelector('.focus');
    var ulNum=focus.querySelector('ul');
    var olNum=focus.querySelector('.circle');
    for(var a=0;a<ulNum.children.length;a++){
        var li=document.createElement('li');
        li.setAttribute('index',a);
        olNum.appendChild(li);
    }
    //深拷贝第一张图片
    var firstPic=ulNum.children[0].cloneNode(true);
    ulNum.appendChild(firstPic);
    //自动轮播
    //获取focus的宽度
    var focusValue=focus.offsetWidth;
    var ulcliNum=0;
    var circleNum=0;
    var timer=null;
    function automove(){
        if(ulcliNum==ulNum.children.length-1){
            ulNum.style.left=0;
            ulcliNum=0;
        }
        ulcliNum++;
        circleNum++;
        animate(ulNum,-ulcliNum*focusValue);
        if(circleNum==olNum.children.length){
            circleNum=0;
        }
        circleChange();
    }
    //样式改变
    function circleChange(){
        for(var cir=0;cir<olNum.children.length;cir++){
            olNum.children[cir].className='';
        }
        olNum.children[circleNum].className='current';
    }
    focus.onmouseenter=function(){
        clearInterval(timer);
    }
    focus.onmouseout=function(){
        timer=setInterval(automove,2000);
    }
    timer=setInterval(automove,2000);
})