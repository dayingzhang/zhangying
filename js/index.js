/**
 * Created by lenovo on 2017/3/13.
 */
$(function(){
    $('#dowebok').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': false,
        resize:true,
        loopBottom:true,
        css3:true,
        afterLoad:function(link,index){
            console.log(index);
            /*��Ӧ��ҳ��Ķ���*/
            /*����ǰҳ����� ��ǰ��ʽ*/
            /*fullpage ���ػ������Ⱦҳ��*/
            setTimeout(function(){
                $('.section').removeClass('now').eq(index-1).addClass('now');
            },200);
        }
    });

    var divArr=$('#dowebok .container .row div');
    var ulArr=$('#dowebok .container .row ul');
        for(var i=0;i<divArr.length;i++){
            divArr[i].index = i
            divArr[i].onmousemove=function(){
                for(var j=0;j<ulArr.length;j++){
                    ulArr[j].className=""
                }
                if(this.index<3){
                    ulArr[this.index].className="show";
                    ulArr[this.index].style.transform='translate(0,0)'
                }else{
                    ulArr[this.index].className="show";
                    ulArr[this.index].style.transform='translate(-90%,0)'
                }

            }
        };

    for(var i=0;i<divArr.length;i++){
        divArr[i].index = i
        divArr[i].onmouseout=function(){
                ulArr[this.index].className=''
        }
    }
    //$('#dowebok .container .row div').on('mousemove',function () {
    //    $(this).find("ul").show().css({transform:'translate(0,0)'})
    //    //$(this).siblings().find("ul").hide()
    //})
    //$('#dowebok .container .row div').on('mouseout',function () {
    //    $(this).find("ul").hide()
    //    //$(this).siblings().find("ul").hide()
    //})

//    tab��
    var box1 = $('.threeP .lunbo .box')[0];

    //���ú���
    fn(box1);
    //��װ������ִ��tab���󶨵ķ���
    function fn(box){
        var liArr = box.getElementsByTagName("li");
        console.log(liArr)
        var spArr = box.getElementsByTagName("span");
        for(var i=0;i<liArr.length;i++){
            liArr[i].index = i;
            liArr[i].onmouseover = function () {
                for(var j=0;j<liArr.length;j++){
                    liArr[j].className = "";
                    spArr[j].className = "";
                }
                this.className = "current";
                spArr[this.index].className = "show";
            }
        }
    }

});
