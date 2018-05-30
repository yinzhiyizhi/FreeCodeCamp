var calc="";
var ans="";
var clear=false;

$(document).ready(function(){
    $("button").click(function(){
        var text=$(this).attr("value");
        if(parseInt(text,10)==text){
            if(clear===false){
                calc+=text;
                $(".textbox").val(calc);
            }
            else{
                calc=text;
                $(".textbox").val(calc);
                clear=false;
            }
        }
        else if(text==='.'){
            if(calc.indexOf('.')<0&&clear===false){
                calc+=text;
                $(".textbox").val(calc);
            }
            else{
                calc=text;
                $(".textbox").val(calc);
            }
            clear=false;
        }
        else if(text==='/'||text==='*'||text==='-'||text==='+'){
            calc+=text;
            $(".textbox").val(calc);
            clear=false;
        }
        else if(text==='%'&&clear===false){
            calc*=0.01;
            $(".textbox").val(calc);
        }
        else if(text==='AC'){
            calc="";
            $(".textbox").val(calc);
        }
        else if(text==='CE'){
            calc=calc.slice(0,-1);
            $(".textbox").val(calc);
        }
        else if(text==='='){
            ans=calc=eval(calc);
            $(".textbox").val(ans);
            clear=true;
        }
        else if(text==='Ans'){
            calc=ans;
            $(".textbox").val(calc);
        }
    });
});
