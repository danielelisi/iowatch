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
            
            $(".store_div").show();
        }
    });
    
    $("#brightness_control").on("input", function(){
        $("#brightness_layer").css({
            opacity: ($(this).val() / 100) * -0.5 + 0.5
        });
        
        $("#brightness_percent").html($(this).val() + "%");
    });
    
    $("#brightness_control").on("mousedown", function(){
        $("#brightness_checkbox").prop("checked", false);
    });
    
    api_key = "4604402aa90e7d71ebe94769b942ede8"
    $(document).ready(function(){
        $.ajax({
            url:"https://api.openweathermap.org/data/2.5/weather?id=6173331&units=metric&appid=" + api_key,
            dataType:"json",
            success:function(resp){
                console.log(resp);
                    var temperature = resp.main.temp
                    
                    $("#weather_icon").html("<img src=w_icons/" + resp.weather[0].icon + ".png>");
                    $("#weather_temp").html(Math.round(temperature) + "° C");
            }
        });
    });
    
    var i = 0

    $("#notification_bar").click(function() {
        /* if ( $(this).height() != 585){ */
            $( this ).stop().animate({ height: 560 }, 1000 );
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
        
            $("#screen_body").css("opacity","0");

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
    
        $("#screen_body").delay(1000).animate({opacity: 1.0}, 100);
    });
    
    $("#running_toggle").click(function(){
        $("#running_on").toggle();
        $("#running_off").toggle();
    });
    
    $("#sound_toggle").click(function(){
        $("#sound_on").toggle();
        $("#sound_off").toggle();
    });
    
    $("#wifi_toggle").click(function(){
        $("#wifi_on").toggle();
        $("#wifi_off").toggle();
    });
    
    $("#sync_toggle").click(function(){
        $("#sync_on").toggle();
        $("#sync_off").toggle();
    });
    
    $("#location_toggle").click(function(){
        $("#location_on").toggle();
        $("#location_off").toggle();
    });
    
    $("#bt_toggle").click(function(){
        $("#bluetooth_on").toggle();
        $("#bluetooth_off").toggle();
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
        
        if (i == "heartrate_screen"){
            $("#t_heartrate_screen").hide();
            
            $("#tracking_menu").show();
            
            i = "tracking";
            console.log(i);
        }
        
        if (i == "exercise_screen"){
            $("#t_exercise_screen").hide();
            
            $("#tracking_menu").show();
            
            i = "tracking";
            console.log(i);
        }
        
        if (i == "gc_screen"){
            $("#t_gc_screen").hide();
            
            $("#tracking_menu").show();
            
            i = "tracking";
            console.log(i);
        }
        
        if (i == "tasks_screen"){
            $("#t_tasks_screen").hide();
            
            $("#tracking_menu").show();
            
            i = "tracking";
            console.log(i);
        }
        
        if (i == "steps_screen"){
            $("#t_steps_screen").hide();
            
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
    
    $("#steps").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_steps_screen").show();
        
        i = "steps_screen";
    });
    
    $("#tasks").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_tasks_screen").show();
        
        i = "tasks_screen";
    });
    
    $("#gc").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_gc_screen").show();
        
        i = "gc_screen";
    });
    
    $("#exercise").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_exercise_screen").show();
        
        i = "exercise_screen";
    });
    
    $("#heartrate").click(function(){
        $("#tracking_menu").hide();
        
        $("#t_heartrate_screen").show();
        
        i = "heartrate_screen";
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
    
    var messages1 = ["Initiating...",
                     "Sending...",
                     "Receiving...",
                     "Finalizing...",
                     "Complete!"].reverse();
    
    var messages2 = ["Initiating...",
                     "Sending...",
                     "Receiving...",
                     "Finalizing...",
                     "Complete!"].reverse();

    var messages3 = ["Initiating...",
                   "Sending...",
                   "Receiving...",
                   "Finalizing...",
                   "Complete!"].reverse();

    var messages4 = ["Initiating...",
                   "Sending...",
                   "Receiving...",
                   "Finalizing...",
                   "Complete!"].reverse();
    
    $("#dismiss").click(function(){
        $("#tapped_screen").hide();
        
        $("#insufficient_fund_screen").hide();
        
        $("#screen_body").show();
    });
    
    $("#dismiss2").click(function(){
        $("#tapped_screen").hide();
        
        $("#insufficient_fund_screen").hide();
        
        $("#screen_body").show();
    });
    
    function nextMsgStarbucks(){
        if (messages1.length == 0){
            $("#loading_screen").delay(500).hide();
            
            $("#tapped_screen").delay(500).show();
            
            $("#store_icon").html("<img src='demo_img/starbucks_store_icon2.png'>");
        
            $("#purchase_div").html("Transaction of $1.97 complete!");

            $("#purchase_note").html("<li>Reloaded $1.97 to Starbucks card.</li><li>Completed transaction with starbucks card.</li>");

            $("#benefits_div").html("<li>You collected 30 stars.</li>");
        } else {
            $("#loading_status").html(messages1.pop()).fadeIn(300).delay(500).fadeOut(300, nextMsgStarbucks);
        }
    };
    
    $("#starbucks_store").click(function(){
        $("#screen_body").hide();
        
        $("#tapped_screen").show();
        
        $("#store_icon").html("<img src='demo_img/starbucks_store_icon2.png'>");
        
        $("#purchase_div").html("Transaction of $1.97 complete!");

        $("#purchase_note").html("<li>Reloaded $1.97 to Starbucks card.</li><li>Completed transaction with starbucks card.</li>");

        $("#benefits_div").html("<li>You collected 30 stars.</li>");
    });
    
    function nextMsgEsso(){
        if (messages2.length == 0){
            $("#loading_screen").delay(500).hide();
            
            $("#tapped_screen").delay(500).show();
            
            $("#store_icon").html("<img src='demo_img/esso_store_icon2.png'>");
        
            $("#purchase_div").html("Transaction of $40.00 complete!");

            $("#purchase_note").html("<li>Paid with Esso Extra Mastercard.</li>");

            $("#benefits_div").html("<li>You collected 400 Esso Points.</li><li>You collected 40 Air Miles.</li><li>You saved $0.02/litre.</li>");
        } else {
            $("#loading_status").html(messages2.pop()).fadeIn(300).delay(500).fadeOut(300, nextMsgEsso);
        }
    };
    
    $("#esso_store").click(function(){
        $("#screen_body").hide();
        
        $("#tapped_screen").show();
        
        $("#store_icon").html("<img src='demo_img/esso_store_icon2.png'>");
        
        $("#purchase_div").html("Transaction of $40.00 complete!");

        $("#purchase_note").html("<li>Paid with Esso Extra Mastercard.</li>");

        $("#benefits_div").html("<li>You collected 400 Esso Points.</li><li>You collected 40 Air Miles.</li><li>You saved $0.02/litre.</li>");
        
        nextMsgEsso();
    });
    
    function nextMsgShoppers(){
        if (messages3.length == 0){
            $("#loading_screen").delay(500).hide();
            
            $("#tapped_screen").delay(500).show();
            
            $("#store_icon").html("<img src='demo_img/shoppers_store_icon2.png'>");
        
            $("#purchase_div").html("Transaction of $125.29 complete!");

            $("#purchase_note").html("<li>Paid with Esso Extra Mastercard.</li>");

            $("#benefits_div").html("<li>You collected 1250 Shoppers Optimum Points.</li><li>You qualified for 20x Points Event.</li><li>You collected an additional 23,750 Shoppers Optimum Points.</li><li>You collected 125 Air Miles from Esso Extra Mastercard.</li><li>You collected 125 Air Miles.</li>");
        } else {
            $("#loading_status").html(messages3.pop()).fadeIn(300).delay(500).fadeOut(300, nextMsgShoppers);
        }
    };
    
    $("#shoppers_store").click(function(){
        $("#screen_body").hide();
        
        $("#tapped_screen").show();
        
        $("#store_icon").html("<img src='demo_img/shoppers_store_icon2.png'>");
        
        $("#purchase_div").html("Transaction of $125.29 complete!");

        $("#purchase_note").html("<li>Paid with Esso Extra Mastercard.</li>");

        $("#benefits_div").html("<li>You collected 1250 Shoppers Optimum Points.</li><li>You qualified for 20x Points Event.</li><li>You collected an additional 23,750 Shoppers Optimum Points.</li><li>You collected 125 Air Miles from Esso Extra Mastercard.</li><li>You collected 125 Air Miles.</li>");
        
        nextMsgShoppers();
    });
    
    function nextMsgTranslink(){
        if (messages4.length == 0){
            $("#loading_screen").delay(500).hide();
            
            $("#tapped_screen").delay(500).show();
            
            $("#store_icon").html("<img src='demo_img/translink_store_icon2.png'>");
            
            $("#purchase_div").html("Your compass card was reloaded!");
            
            $("#purchase_note").html("<li>Reloaded: $2.75</li><li>1 Zone Adult Fare.</li><li>Enjoy your ride!</li>");
        } else {
            $("#loading_status").html(messages4.pop()).fadeIn(100).delay(300).fadeOut(100, nextMsgTranslink);
        }
    };
    
    $("#reload").click(function(){
        $("#insufficient_fund_screen").hide();
        
        $("#loading_screen").show();
        
        nextMsgTranslink();
    });
    
    var starbucksDollar = $("#starbucks_dollar").html();
    
    $("#starbucks_reload").click(function(){
        $(this).attr("class", "img_rotate");
        
        function increment(){
            $("#starbucks_dollar").html(parseInt(starbucksDollar, 10) + 20);
            
            starbucksDollar = $("#starbucks_dollar").html();
        }
        
        setTimeout(increment, 2200);
    });
    
    $("#starbucks_reload").on("mouseup", function(){
        $(this).delay(2500).attr("class", "");
    });
    
    var compassDollar = parseInt($("#compass_dollar").html(), 10);
    
    var autoReload = $('input[name="autoreload"]:checked').length;
    
    console.log(compassDollar);
    console.log(autoReload);
    
    $("#translink_store").click(function(){
        $("#screen_body").hide();
        
        if (compassDollar >= 2.75){
            $("#compass_dollar").html((parseFloat(Math.round((compassDollar - 2.75) * 100) / 100).toFixed(2)));
            
            compassDollar = $("#compass_dollar").html();
        
            console.log(compassDollar);
            
            $("#tapped_screen").show();
            
            $("#store_icon").html("<img src='demo_img/translink_store_icon2.png'>");
            
            $("#purchase_div").html("1 Zone Adult Fare");
            
            $("#purchase_note").html("$2.75 deducted");
        } else if (compassDollar < 2.75 && $("input[name='autoreload']:checked").length == 0){
            $("#tapped_screen").hide();
            
            $("#insufficient_fund_screen").show();
            
            $("#alert_icon").html("<img src='demo_img/alert_icon.png'>");
        
            $(".alert_message").html("Insufficient Funds!");
        } else if (compassDollar < 2.75 && $("input[name='autoreload']:checked").length > 0){
            $("#loading_screen").show();
            
            $("#compass_dollar").html(parseFloat(Math.round((compassDollar + 20.00) * 100) / 100).toFixed(2));

            compassDollar = parseInt($("#compass_dollar").html(), 10);
            console.log(compassDollar);
            
            nextMsgTranslink();
        }
        
        $("#benefits_div").empty();
    });
    
    $("#compass_reload").click(function(){
        $(this).attr("class", "img_rotate");
        
        function increment(){
            $("#compass_dollar").html(parseFloat(Math.round((compassDollar + 20.00) * 100) / 100).toFixed(2));
            
            compassDollar = parseInt($("#compass_dollar").html(), 10);
            console.log(compassDollar);
        }
        
        setTimeout(increment, 2200);
    });
    
    $("#compass_reload").on("mouseup", function(){
        $(this).delay(2500).attr("class", "");
    });   
});

