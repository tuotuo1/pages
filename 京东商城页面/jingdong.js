//最上面部分，shortcut

<script src="jquery-1.12.0.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
        $(".briicon").mouseover(function(){ 
            $(".moreproduce").show();
        });
        $(".briicon").mouseout(function(){
            $(".moreproduce").hide();
        });
        $(".setting").mouseover(function(){
            $(".setting-submenu").show();
        })
        $(".setting").mouseout(function(){
            $(".setting-submenu").hide();
        })
    });
    </script>









//选项列表
    window.onload = function(){
        var Lis = document.getElementsByTagName("li");
        for(i=0;i<Lis.length;i++){
            Lis[i].onmouseover = function(){
                this.className = "lihover";
                /*优化
                var h0 = (this.i-1)*30 + 42;
                var y = this.getElementsByTagName("div")[0].offsetHeight;
                var h = this.getElementsByTagName("div")[0].style.top + y;
                if(h<h0){
                    this.getElementsByTagName("div")[0].style.top = h0 +"px";
                } 
                if(y>550){
                    this.getElementsByTagName("div")[0].style.top = "3px";
                } */         
            }
            Lis[i].onmouseout = function(){
                this.className = "";
            }
        }
    }
        
    