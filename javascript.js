$(document).ready(function(){
	$("#top").load("top_content.html");

    $("#footer").load("footer.html");

    $("#home_screen").hide();

    $("#thumb").draggable();
    $("#drop_area").droppable({
        drop:function(event){
            $("#thumb").remove();
            
            $("#drop_area").remove();
            
            $("#screen").remove();
            
            $("#home_screen").show();
        }
    });
    
    var i = 0

    $("#notification_bar").click(function() {
        /* if ( $(this).height() != 585){ */
            $( this ).animate({ height: 560 }, 1000 );
            $("#notification_expand").fadeIn(1000, function(){
                $(this).show();
            });

            $("#notification").fadeOut(600, function(){
                $(this).hide();
            });

            $("#connections").fadeOut(600, function(){
                $(this).hide();
            });

            $("#collapse").fadeIn(300, function(){
                $(this).show();
            });
        
            $("#screen_body").hide();

            $("#popup_payment_selection").hide();
    });
    
    $("#collapse").click(function(){
        $("#notification_bar").animate({ height: 30}, 1000);

        $("#notification_expand").fadeOut(600, function(){
            $(this).hide();
        });

        $("#notification").fadeIn(1000, function(){
            $(this).show();
        });

        $("#connections").fadeIn(1000, function(){
            $(this).show();
        });

        $("#collapse").fadeOut(300, function(){
            $(this).hide();
        });
        
        $("#screen_body").delay(1000).fadeOut(100, function(){
            $(this).show();
        });
    });
    
    $("#running_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#sound_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#wifi_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#sync_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#location_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#bt_toggle").click(function(){
        $(this).find("img").toggle();
    });
    
    $("#message_back_button").click(function(){
        if (i == "message_menu"){
            $("#message_screen").fadeOut(300, function(){
                $(this).hide;
            });
            
            $("#main").fadeIn(300, function(){
                $(this).show;
            });
            
            i = "home";
            console.log(i);
        }
        
        if (i == "inbox"){
            $("#message_menu").show();
            
            $("#inbox_screen").hide();
            
            i = "message_menu";
            console.log(i);
        }
        
        if (i == "inbox_message"){
            $("#inbox_screen").show();
            
            $("#message_open").hide();
            
            i = "inbox";
            console.log(i);
        }
        
        if (i == "outbox"){
            $("#outbox_screen").hide();
            
            $("#message_menu").show();
            
            i = "message_menu";
            console.log(i);
        }
        
        if (i == "outbox_message"){
            $("#message_open").hide();
            
            $("#outbox_screen").show();
            
            i = "outbox";
            console.log(i);
        }
        
        if (i == "archive_screen"){
            $("#archive_screen").hide();
            
            $("#message_menu").show();
            
            i = "message_menu";
            console.log(i);
        }
        
        if (i == "trash_bin"){
            $("#trash_bin").hide();
            
            $("#message_menu").show();
            
            i = "message_menu";
            console.log(i);
        }
        
        if (i == "reply_screen_inbox"){
            $("#reply_screen").hide();
            
            $("#inbox_message").show();
            
            $("#message_open_menu").show();
            
            i = "inbox_message";
            console.log(i);
        }
        
        if (i == "reply_screen_outbox"){
            $("#reply_screen").hide();
            
            $("#outbox_message").show();
            
            $("#message_open_menu").show();
            
            i = "outbox_message";
            console.log(i);
        }
        
        if (i == "tracking"){
            $("#tracking").hide();
            
            $("#main").show();
            
            i = "home";
            console.log(i);
        }
    });
    
    $("#message_home_button").click(function(){
        if ((i == "message_menu") || (i == "inbox") || (i == "inbox_message") || (i == "outbox") || (i == "outbox_message") || (i == "archive_screen") || (i == "trash_bin") || (i == "reply_screen_inbox") || (i == "reply_screen_outbox")){
            $("#message_screen").fadeOut(300, function(){
                $(this).hide;
            });
            
            $("#message_menu").hide();
            
            $("#message_body").children().hide();
            
            $("#main").fadeIn(300, function(){
                $(this).show;
            });
        }
        
        i = "home";
        console.log(i);
    });
    
    $("#tracking_back_button").click(function(){
        if (i == "tracking"){
            $("#tracking_screen").hide();
            
            $("#main").show();
            
            i = "home";
            console.log(i);
        }
        
        if (i == "financial_screen"){
            $("#t_financial_screen").hide();
            
            $("#tracking_menu").show();
            
            i = "tracking";
            console.log(i);
        }
    });
    
    $("#tracking_home_button").click(function(){
        $("#tracking_screen").hide();
        
        $("#tracking_body").children().hide();
            
        $("#main").show();
        
        i = "home";
        console.log(i);
    });
    
    $("#financial").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_financial_screen").show();
        
        i = "financial_screen";
        console.log(i);
    });
    
    $("#tracking").click(function(){
        $("#main").hide();
        
        $("#tracking_screen").show();
        
        $("#tracking_menu").show();
        
        $("#popup_payment_selection").hide();
        
        i = "tracking";
        console.log(i);
    });
    
    $("#message").click(function(){
        $("#message_screen").fadeIn(300, function(){
            $(this).show;
        });
        
        $("#message_menu").show();
        
        $("#main").hide();
        
        i = "message_menu";
        console.log(i);
    });
    
    $("#inbox").click(function(){
        $("#message_menu").hide();
        
        $("#inbox_screen").show();
        
        i = "inbox";
        console.log(i);
    });
    
    $(".new_message").click(function(){
        $("#message_open").show();
        
        $("#inbox_message").show();
        
        $("#outbox_message").hide();
        
        $("#inbox_screen").hide();
        
        i = "inbox_message";
        console.log(i);
    })
    
    $("#outbox").click(function(){
        $("#message_menu").hide();
        
        $("#outbox_screen").show();
        
        i = "outbox";
        console.log(i);
    });
    
    $(".sent").click(function(){
        $("#outbox_screen").hide();
        
        $("#inbox_message").hide();
        
        $("#message_open").show();
        
        $("#outbox_message").show();
        
        i = "outbox_message";
        console.log(i);
    })
    
    $("#archive").click(function(){
        $("#message_menu").hide();
        
        $("#archive_screen").show();
        
        i = "archive_screen";
        console.log(i);
    });
    
    $("#trash").click(function(){
        $("#message_menu").hide();
        
        $("#trash_bin").show();
        
        i = "trash_bin";
        console.log(i);
    })
    
    $("#reply_button").click(function(){
        if (i == "inbox_message"){
            $("#inbox_message").hide();
            
            $("#reply_screen").show();
            
            i = "reply_screen_inbox";
            console.log(i);
        }
        
        if (i == "outbox_message"){
            $("#outbox_message").hide();
            
            $("#reply_screen").show();
            
            i = "reply_screen_outbox";
            console.log(i);
        }
        
        $("#message_open_menu").hide();
    });
    
    var mon = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var mm = mon[today.getMonth()];
    var d = today.getDate();
    var yyyy = today.getFullYear();
    var ampm = "AM";
    
    if (h > 12){
        h = h - 12;
        ampm = "PM";
    } if (h == 0){
        h = 12;
    } if (m < 10){
        m = "0"+m;
    }
    
    var timeDateDiv = document.getElementById("timedate");
    
    timeDateDiv.innerHTML = h + ":" + m + " " + ampm + "<br><span>" + mm + " " + d + ", " + yyyy + "</span>";
    
    var popUpPaymentDiv = document.getElementById("popup_payment_selection");
    var mainPaymentDiv = document.getElementById("main_payment");
    var messageDiv = document.getElementById("message_screen");
    
    var messageIcon = document.getElementById("message");
    
    var mastercard = document.getElementById("mc");
    var visa = document.getElementById("visa");
    var interac = document.getElementById("interac");
    var discover = document.getElementById("discover");
    var ax = document.getElementById("ax");
    var autoCC = document.getElementById("auto_cc");
    
    mainPaymentDiv.onclick = function(){
        popUpPaymentDiv.style.display = "inline";
    }
    
    mastercard.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var mcImg = document.createElement("img");
        mcImg.src = "demo_img/main_mc.png";
        mainPaymentDiv.appendChild(mcImg);
    }
    
    visa.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var visaImg = document.createElement("img");
        visaImg.src = "demo_img/main_visa.png";
        mainPaymentDiv.appendChild(visaImg);
    }
    
    interac.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var interacImg = document.createElement("img");
        interacImg.src = "demo_img/main_interac.png";
        mainPaymentDiv.appendChild(interacImg);
    }
    
    discover.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var discoverImg = document.createElement("img");
        discoverImg.src = "demo_img/main_discover.png";
        mainPaymentDiv.appendChild(discoverImg);
    }
    
    ax.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var axImg = document.createElement("img");
        axImg.src = "demo_img/main_ax.png";
        mainPaymentDiv.appendChild(axImg);
    }
    
    autoCC.onclick = function(){
        popUpPaymentDiv.style.display = "none";
        mainPaymentDiv.innerHTML = "";
        var ccImg = document.createElement("img");
        ccImg.src = "demo_img/main_cc.png";
        mainPaymentDiv.appendChild(ccImg);
    }
    
    var archiveButton = document.getElementById("archive_button");
    var deleteButton = document.getElementById("delete_button");
    var messageStatus = document.getElementById("message_status");
    
    archiveButton.onclick = function(){
        messageStatus.innerHTML = "Message Archived!";
        messageStatus.style.opacity = "1.0";
        messageStatus.style.bottom = "20%";
        
        setTimeout(function(){
            messageStatus.style.opacity = "0";
            }, 2500
        );
        
        setTimeout(function(){
            messageStatus.style.bottom = "1%";
            }, 4000
        );
    }
    
    deleteButton.onclick = function(){
        messageStatus.innerHTML = "Message Sent to Trash Bin!";
        messageStatus.style.opacity = "1.0";
        messageStatus.style.bottom = "20%";
        
        setTimeout(function(){
            messageStatus.style.opacity = "0";
            }, 3000
        );
        
        setTimeout(function(){
            messageStatus.style.bottom = "1%";
            }, 4500
        );
    }
    
    var dispPic = document.getElementById("mainpic");
    var smPic1 = document.getElementById("galpic1");
    var smPic2 = document.getElementById("galpic2");
    var smPic3 = document.getElementById("galpic3");
    var smPic4 = document.getElementById("galpic4");
    var smPic5 = document.getElementById("galpic5");
    var smPic6 = document.getElementById("galpic6");
    
    smPic1.onclick = function(){
    }
});