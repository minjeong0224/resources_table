$(function(){
    // 로그인
    
    let loginButton=$(".login_button");
    let popupLogin=$("#popup_login");
    loginButton.click(function(){
        popupLogin.addClass("active");
        loginButton.addClass("active");
    });
    $(".login_button").click(function(){
        container.removeClass("active");
        loginButton.removeClass("active");
    });
    // $(document).mouseup(function(e){
    //     e.preventDefault();
    //     let container = $("#popup_login");
    //     if (!container.is(e.target) && container.has(e.target).length === 0){
    //         container.removeClass("active");
    //         loginButton.removeClass("active");
    //     }
    // });
    $("#login_submit").click(function(){
        popupLogin.removeClass("active");
        $("#table_section").addClass("active");
        loginButton.addClass    ("active");
    });

    // 등록
    $("#button_admin").click(function(){
        $("#popup_register").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });
    $(".popup_register_close").click(function(){
        $("#popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    }); 

    // 수정버튼(등록) 눌렀을 때
    $(".popup_register_button_re").click(function(){   
        console.log("click");
        $("#popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });
    $(".popup_register_button_re").click(function(){
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_info").addClass("active");
        $("#click_button").addClass("active");
    });
    $("#alert_popup_info_cancle_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });
    $("#alert_popup_accept_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });
    

    // 아이디
    $(".button_id").click(function(){
        $("#popup_reform").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });
    $(".popup_reform_close").click(function(){
        $("#popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });
    
    // 수정버튼(아이디) 눌렀을 때
    $(".popup_reform_button_re").click(function(){   
        console.log("click");
        $("#popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });
    $(".popup_reform_button_re").click(function(){
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_error").addClass("active");
        $("#click_button").addClass("active");
    });
    $("#alert_popup_error").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_error").removeClass("active");
        $("#click_button").removeClass("active");
    });

    // 페이지네이션
    $(".pagination ul li").hover(function(){
        $(".pagination ul li.on").removeClass("on");
        $(this).addClass("on");
        $(".pagination ul li.active").removeClass("on");
    });
    $(".pagination ul li").click(function() {
        $(".pagination ul li.active").removeClass("active");
        $(this).addClass("active");
        $(".pagination ul li.on").removeClass("on");
    });
}); 
