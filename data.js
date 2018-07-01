
$(function(){
	//JSON data for side-1 ,2 and 4
	var json = $.parseJSON(`{
		"Wonder Woman": {
			"img":"img/ww.jpg",
			"time":"18:18",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["17:18","18:18"],
			"lastSeen":"online",
			"about":"What one does when faced with the truth is more difficult than you’d think.",
			"phone":"9999999991"
		},
	
		"Thor": {
			"img":"img/thor.jpg",
			"time":"17:17",
			"msgs":["lorem1","lorem2","lorem3"],
			"msgTimes":["14:17","17:16","17:17"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999992"
		},
		"Black Widow": {
			"img":"img/bw.jpg",
			"time":"16:16",
			"msgs":["lorem1","lorem2","lorem3"],
			"msgTimes":["6:17","16:05","16:16"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999993"
		},
		"Captian Marvel": {
			"img":"img/capmarvel.jpg",
			"time":"15:15",
			"msgs":["lorem1","lorem2","lorem3"],
			"msgTimes":["10:17","12:01","15:15"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999994"
		},
		"Flash": {
			"img":"img/flash.jpg",
			"time":"14:14",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["6:52","14:14"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999995"
		},
		"Hulk": {
			"img":"img/hulk.jpg",
			"time":"13:13",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["08:19","13:13"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999996"
		},
	
		"Iron Man": {
			"img":"img/ironman.jpg",
			"time":"12:12",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["9:37","12:12"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999997"
		},
		"Loki": {
			"img":"img/loki.jpg",
			"time":"11:11",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["9:27","11:11"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999998"
		},
		"Spider Man": {
			"img":"img/spider.jpg",
			"time":"10:10",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["2:13","10:10"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"999999999"
		},
		"Thanos": {
			"img":"img/thanos.jpg",
			"time":"09:09",
			"msgs":["lorem1","lorem2"],
			"msgTimes":["03:54","09:09"],
			"lastSeen":"online",
			"about":"hey! I'm using ComicWap",
			"phone":"9999999910"
		}
	}
	`); //JSON data ends here. 
	/* ---------------------------------------------------------------------------------------------------------------------------------*/
	// looping through JSON data to display the contents of side 2
			$.each(json,function(key,value){
				$(".sideBar,.compose-sideBar").append(`
					<div class="row sideBar-body">
					<div class="col-sm-3 col-3 sideBar-avatar">
					<div class="avatar-icon">
					<img src="${value.img}" class="img-fluid">
					</div>
					</div>
					<div class="col-sm-9 col-9 sideBar-main">
					<div class="row">
					<div class="col-sm-9 col-9 sideBar-name">
					<span class="name-meta">${key}
					</span>
					</div>
					<div class="col-3 float-right sideBar-time">
					<div class="row" style="height:unset;"><span class="time-meta">${value.time}
					<br>
					<span class="badge badge-pill badge-success"></span>
					</span>
					</div>
					
					</div>
					</div>
					</div>
					</div>
					</div>
					`);
				var convo = conver(value.msgs,value.msgTimes);
				$(".app-one").append(
					`
					<div class="col-sm-8 conversation">
					<div class="row heading">
					<div class="col-sm-1 col-1 heading-avatar">
					<div class="heading-avatar-icon">
					<img src="${value.img}" class="img-fluid">
					</div>
					</div>
					<div class="col-sm-9 col-9 heading-name">
					<a class="heading-name-meta">${key}
					</a>
					<span class="heading-online">${value.lastSeen}</span>
					</div>
					<div class="col-sm-1 col-1  heading-dot">
					<i class="fa fa-ellipsis-v fa-1x aria-hidden="true" style="font-size:20px"></i>
					</div>
					<div class="col-1 heading-dot">
					<i class="fas fa-arrow-alt-circle-left fa-1x aria-hidden="true" style="font-size:20px"></i>
					</div>
					</div>
					<div class="row message">
					${convo}
					</div>
					<div class="row reply">
					<div class="col-sm-1 col-1 reply-emojis">
					<i class="far fa-smile fa-1x fa-2x"></i>
					</div>
					<div class="col-sm-9 col-9 reply-main">
					<textarea class="form-control" rows="1" id="comment"></textarea>
					</div>
					<div class="col-sm-1 col-1 reply-recording">
					<i class="fa fa-microphone fa-1x fa-2x" aria-hidden="true"></i>
					</div>
					<div class="col-sm-1 col-1 reply-send float-right">
					<i class="fab fa-telegram-plane fa-1x fa-2x" aria-hidden="true"></i>
					</div>
					</div>
					</div>
					`
					);
				
			});
			//looping through JSON data to display the contents of side 2 ends
/*------------------------------------------------------------------------------------------------------*/
			// looping through JSON data to display the contents of side 4
			$.each(json,function(key,value){
				$(".app-one").append(
					`
					<div class="col-sm-4 side-four" style="display:none;">
					<div class="row heading">
					<div class="col-sm-10 col-10 heading-name">
					<div class="heading-name-meta"> 
					<i class="fas fa-times"></i> &nbsp;
					Contact Info
					</div>
					</div>
					</div>
					<div class="row box">
					<div class="col-sm-12">
					<img src="${value.img}" alt="image" width="200" height="200" class="img-fluid rounded-circle mx-auto d-block mt-2">
					<h5>${key}</h5>
					<small class="text-muted font-weight-light">${value.lastSeen}</small>
					</div>
					</div>
					<div class="row box">
					<div>
					<span class="text-success">Media, Links and Docs</span>
					<i class="fas fa-arrow-right float-right mt-1" style="cursor: pointer;"></i>
					</div>
					<div class="media mt-2 pb-2">
					<img src="http://via.placeholder.com/100x100" alt="image" class="img-fluid">
					<img src="http://via.placeholder.com/100x100" alt="image" class="img-fluid">
					<img src="http://via.placeholder.com/100x100" alt="image" class="img-fluid">
					<img src="http://via.placeholder.com/100x100" alt="image" class="img-fluid">
					</div>
					</div>
					<div class="row box">
					<span>Mute
					<input type="checkbox" id="mute" class="float-right mt-1">
					</span>
					<hr>
					<span>
					Starred Messages
					<i class="fas fa-arrow-right float-right mt-1" style="cursor: pointer;"></i>
					</span>
					</div>
					<div class="row box">
					<div>
					<span class="text-success">About and phone number</span>
					<div class="mt-2">
					<span>${value.about}</span>
					<hr>
					<span>${value.phone}</span>
					</div>
					</div>
					</div>
					<div class="row box  cr">
					<span><i class="fas fa-ban mr50"></i>Block Contact</span>
					</div>
					<div class="row box cr">
					<span class="text-danger">
					<i class="fas fa-thumbs-down mr50"></i>
					Report Spam
					</span>
					</div>
					<div class="row box cr">
					<span class="text-danger">
					<i class="fas fa-trash mr50"></i>
					Delete Chat
					</span>
					</div>
					</div> 
					`
					)
			});
			clickEvents();
			// looping through JSON data to display the contents of side 4 ends
});
/* -------------------------------------------------------------------------------------------------------*/
//function to bind times to each message.
function conver(msgs,times){
	let convo = '';
	for(let i=0;i<msgs.length;i++) {
		if(i%3!==0) {
			convo = convo + `
			<div class="row message-body">
			<div class="col-sm-12 col-12 message-main-receiver">
			<div class="receiver">
			<div class="message-text">
			${msgs[i]}
			</div>
			<span class="message-time float-right">
			${times[i]}
			</span>
			</div>
			</div>
			</div>
			`;
		} else {
			convo = convo + `
			<div class="row message-body">
			<div class="col-sm-12 message-main-sender">
			<div class="sender">
			<div class="message-text">
			${msgs[i]}
			</div>
			<span class="message-time float-right">
			${times[i]}
			</span>
			</div>
			</div>
			</div>
			`
		}
	}
	return convo;
} 
//binding function ends here
/*--------------------------------------------------------------------------------------------------------*/
//On click events
function clickEvents() {
	let sideBar = $('.sideBar-body');
	let convo = $('.conversation');
	let badges = $(".badge-success");
	//for loop to display the contents of the chat
	for (var i = 0; i < sideBar.length; i++) {
		$(sideBar[i]).on('click',function (event) {
			let index = $(this).index();//gets the selected index
			$(badges[index]).hide(); //to hide the bages of unread messages
			for (var j = 0; j < convo.length; j++) {
				if (j == index) {
					$(convo[j]).show();//shows  the selected conversation

				} else {
					$(convo[j]).hide();//hides the rest
				}
			}
		});
		//for loop to display unread messages badge
		for(let i=1;i<5;i=i+2)
		{
			$(badges[i]).html("2");

		}//end of for loop
	} //end of for loop
//selectors 
	let headAvatar = $(".heading-avatar");
	let headName = $(".heading-name");
	let s4 = $(".side-four");
	let conversation = $('.conversation');
	let close = $(".fa-times");	
	let smile = $(".fa-smile");
	let mic = $(".fa-microphone");
	let tel = $(".fa-telegram-plane");
	//for loop to display profile details
	for(var i=0;i<headAvatar.length;i++) {
		$(headAvatar[i]).on('click', function(e) {
			let index = $.inArray(this, headAvatar);
			$(smile[index]).removeClass("fa-2x");
			$(mic[index]).removeClass("fa-2x");
			$(tel[index]).removeClass("fa-2x");
			$(headAvatar[index]).addClass("col-sm-2");
			$(headAvatar[index]).removeClass("col-sm-1");
			$(headName[index]).addClass("col-sm-8");
			$(headName).removeClass("col-sm-9");
			$(s4[index]).animate({right:'0%'});
			//for loop to select the profile and show that particular profile and hide the rest
			for(var j=0;j<s4.length;j++) {
				if(j == index) {
					$(s4[index]).show();//to show the selected profile
				} else {
					$(s4[j]).hide();//hiide the rest
				}
			}
			$(conversation[index]).removeClass('col-sm-8');
			$(conversation[index]).addClass('col-sm-4');
		});
		//on click event to animate side 4
		$(close[i]).on('click',function(){
			let index = $.inArray(this, close);
			$(smile[index]).addClass("fa-2x");
			$(mic[index]).addClass("fa-2x");
			$(tel[index]).addClass("fa-2x");
			$(headAvatar[index]).addClass("col-sm-1");
			$(headAvatar[index]).removeClass("col-sm-2");
			$(headName[index]).addClass("col-sm-9");
			$(s4[index]).animate({right:'-=100%'});
			setTimeout(() => {
				$(conversation[index]).removeClass('col-sm-4');
			$(conversation[index]).addClass('col-sm-8');
			}, 300);
			
		});		
	}
}
