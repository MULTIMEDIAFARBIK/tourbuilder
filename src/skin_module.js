// Garden Gnome Software - Skin
// Pano2VR 7.1.5/20954
// Filename: MAIN_360ty.ggsk
// Generated 2025-07-07T19:53:16

export default function pano2vrSkin(player,base) {
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_userdata', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_website', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_timer', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_website_1', 2, false, { ignoreInState: 0  });
	player.addVariable('apr6', 2, false, { ignoreInState: 0  });
	player.addVariable('apr7', 2, false, { ignoreInState: 0  });
	player.addVariable('apr8', 2, false, { ignoreInState: 0  });
	player.addVariable('apr9', 2, false, { ignoreInState: 0  });
	player.addVariable('apr10', 2, false, { ignoreInState: 0  });
	player.addVariable('apr11', 2, false, { ignoreInState: 0  });
	player.addVariable('apr12', 2, false, { ignoreInState: 0  });
	player.addVariable('apr13', 2, false, { ignoreInState: 0  });
	player.addVariable('blinken_starten', 2, false, { ignoreInState: 0  });
	player.addVariable('ht_ani', 2, true, { ignoreInState: 0  });
	player.addVariable('UA_ID', 0, "", { ignoreInState: 0  });
	player.addVariable('UA_category', 0, "virtual tour", { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_close_desktop', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_map_close_mobile', 2, true, { ignoreInState: 0  });
	player.addVariable('UA_ID_1', 0, "", { ignoreInState: 0  });
	player.addVariable('UA_category_1', 0, "virtual tour", { ignoreInState: 0  });
	player.addVariable('hotspotFarbe', 0, "#ae8b57", { ignoreInState: 0  });
	player.addVariable('hotspotFarbe_alpha_prozent', 1, 20, { ignoreInState: 0  });
	player.addVariable('smallPanel', 2, false, { ignoreInState: 0  });
	player.addVariable('panelFarbe', 0, "#ae8b57", { ignoreInState: 0  });
	player.addVariable('panelText', 0, "ZUM PRODUKT", { ignoreInState: 0  });
	player.addVariable('wingame', 2, false, { ignoreInState: 0  });
	player.addVariable('wingame_found_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('cloudflare_video_id', 0, "", { ignoreInState: 0  });
	player.addVariable('cloudflare_video_title', 0, "Video", { ignoreInState: 0  });
	player.addVariable('text_color', 0, "#FFFFFF", { ignoreInState: 0  });
	player.addVariable('navbar_headline', 0, "", { ignoreInState: 0  });
	player.addVariable('buchungslink', 0, "", { ignoreInState: 0  });
	player.addVariable('website', 0, "", { ignoreInState: 0  });
	player.addVariable('wetterLink', 0, "", { ignoreInState: 0  });
	player.addVariable('nav_headers', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('patch_group_open', 2, false, { ignoreInState: 0  });
	player.addVariable('patch_group_label_active', 0, "\xd6ffnen", { ignoreInState: 0  });
	player.addVariable('patch_group_label_inactive', 0, "Schlie\xdfen", { ignoreInState: 0  });
	player.addVariable('labelImage_link', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "" } });
	player.addVariable('autorotateNodeChange', 2, true, { ignoreInState: 0  });
	player.addVariable('autoExpanded', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('info_label_image', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "" } });
	player.addVariable('info_label_pdf', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "" } });
	player.addVariable('info_label_video', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "" } });
	player.addVariable('info_label_titel', 0, "Standard Titel", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "Standard Titel" } });
	player.addVariable('info_label_titel_translation', 0, "Default Title", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "Default Title" } });
	player.addVariable('info_label_translation', 0, "Translated Text", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "Translated Text" } });
	player.addVariable('info_label_german', 0, "Standard Text", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "Standard Text" } });
	player.addVariable('info_label_language', 0, "", { ignoreInState: 0  });
	player.addVariable('info_label_current_text', 0, "Default Text", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 1, defaultValue: "Default Text" } });
	player.addVariable('info_label_currently_active', 2, false, { ignoreInState: 0  });
	player.addVariable('last_hovered_hotspot_id', 0, "", { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._patch_group_container=document.createElement('div');
		el.ggId="patch_group_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch_group_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._patch_group_container.onmouseenter=function (e) {
			player.setVariableValue('patch_group_open', true);
			me.elementMouseOver['patch_group_container']=true;
		}
		me._patch_group_container.onmouseleave=function (e) {
			player.setVariableValue('patch_group_open', false);
			me.elementMouseOver['patch_group_container']=false;
		}
		me._patch_group_container.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._patch_group_container);
		me.divSkin.appendChild(me._container_1);
		el=me._cloudflare_container=document.createElement('div');
		el.ggId="Cloudflare Container";
		el.ggDx=0;
		el.ggDy=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80vh;';
		hs+='left : calc(50% - ((80vw + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80vh + 0px) / 2) - 24px);';
		hs+='visibility : hidden;';
		hs+='width : 80vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloudflare_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cloudflare_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\"\" style=\"border: none;\" height=\"100%\" width=\"100%\" allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"><\/iframe>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._cloudflare_container.appendChild(me._text_2);
		el=me._cloudflare_video=document.createElement('div');
		me._cloudflare_video.seekbars = [];
		me._cloudflare_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._cloudflare_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._cloudflare_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._cloudflare_video.hasChildNodes()) {
				me._cloudflare_video.removeChild(me._cloudflare_video.lastChild);
			}
			if (me._cloudflare_video__vid) {
				me._cloudflare_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._cloudflare_video.ggVideoNotLoaded == false && me._cloudflare_video.ggDeactivate && player.isPlaying('cloudflare_video')) { me._cloudflare_video.ggDeactivate(); }
				me._cloudflare_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('cloudflare_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._cloudflare_video.ggVideoNotLoaded = false;
			me._cloudflare_video__vid=document.createElement('video');
			me._cloudflare_video__vid.className='ggskin ggskin_video';
			me._cloudflare_video__vid.setAttribute('width', '100%');
			me._cloudflare_video__vid.setAttribute('height', '100%');
			me._cloudflare_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._cloudflare_video__vid.setAttribute('controlsList', 'nodownload');
			me._cloudflare_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._cloudflare_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._cloudflare_video__vid.setAttribute('autoplay', '');
			me._cloudflare_video__vid.setAttribute('controls', '');
			me._cloudflare_video__source=document.createElement('source');
			me._cloudflare_video__source.setAttribute('src', media);
			me._cloudflare_video__vid.setAttribute('playsinline', 'playsinline');
			me._cloudflare_video__vid.setAttribute('style', ';');
			me._cloudflare_video__vid.style.outline = 'none';
			me._cloudflare_video__vid.appendChild(me._cloudflare_video__source);
			me._cloudflare_video.appendChild(me._cloudflare_video__vid);
			var videoEl = player.registerVideoElement('cloudflare_video', me._cloudflare_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('cloudflare_video', 0.0);
			notifySeekbars();
			me._cloudflare_video.ggVideoSource = media;
		}
		el.ggId="cloudflare_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 6.25%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloudflare_video.ggIsActive=function() {
			if (me._cloudflare_video__vid != null) {
				return (me._cloudflare_video__vid.paused == false && me._cloudflare_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloudflare_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cloudflare_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cloudflare_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cloudflare_video.style.transition='';
				if (me._cloudflare_video.ggCurrentLogicStateVisible == 0) {
					me._cloudflare_video.style.visibility=(Number(me._cloudflare_video.style.opacity)>0||!me._cloudflare_video.style.opacity)?'inherit':'hidden';
					if (me._cloudflare_video.ggVideoNotLoaded) {
						me._cloudflare_video.ggInitMedia(me._cloudflare_video.ggVideoSource);
					}
					me._cloudflare_video.ggVisible=true;
				}
				else {
					me._cloudflare_video.style.visibility="hidden";
					me._cloudflare_video.ggInitMedia('');
					me._cloudflare_video.ggVisible=false;
				}
			}
		}
		me._cloudflare_video.logicBlock_visible();
		me._cloudflare_video.ggUpdatePosition=function (useTransition) {
		}
		me._cloudflare_container.appendChild(me._cloudflare_video);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-align:\"center\";height:\"auto\";';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('cloudflare_video_title', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("<h1 style=\"margin:0;margin-top:6px\">%1<\/h1>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		player.addListener('varchanged_cloudflare_video_title', function() {
			me._text_4.ggUpdateText();
		});
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_video_cf=document.createElement('div');
		els=me._close_video_cf__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeT0iMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMCIgd2lkdGg9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZpZXdCb3g9IjAgMCA1MTEuNzYgNTExLjc2IiBoZWlnaHQ9IjUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxyZWN0IHdpZHRoPSI1MTEuNzYiIGZpbGw9IiNmZmZmZmYiIHNoYXBlPS'+
			'JzcXVhcmUiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzMsMCwwLDAuMzMsMTcxLjQzOTYwMzI3MTQ4NDM3LDE3MS40Mzk2MDMyNzE0ODQzNykiIGhlaWdodD0iNTExLjc2Ii8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni43NjQwNzQ3MDcwMzEyNiw3Ni43NjM4MTE0OTI5MTk5MykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI2U2NDIxNSIgZD0iTTQzNi44OTYsNzQuODY5Yy05OS44NC05OS44MTktMjYyLjIwOC05OS44MTktMzYyLjA0OCwwYy05OS43OTcsOTkuODE5LTk5Ljc5NywyNjIuMjI5LDAsMzYy'+
			'LjA0OCAgICBjNDkuOTIsNDkuODk5LDExNS40NzcsNzQuODM3LDE4MS4wMzUsNzQuODM3czEzMS4wOTMtMjQuOTM5LDE4MS4wMTMtNzQuODM3QzUzNi43MTUsMzM3LjA5OSw1MzYuNzE1LDE3NC42ODgsNDM2Ljg5Niw3NC44Njl6ICAgICBNMzYxLjQ2MSwzMzEuMzE3YzguMzQxLDguMzQxLDguMzQxLDIxLjgyNCwwLDMwLjE2NWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxICAgIGwtNzUuNDEzLTc1LjQzNWwtNzUuMzkyLDc1LjQxM2MtNC4xODEsNC4xNi05LjY0Myw2LjI1MS0xNS4wODMsNi4yNTFjLTUuNDYxLDAtMT'+
			'AuOTIzLTIuMDkxLTE1LjA4My02LjI1MSAgICBjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NWw3NS4zOTItNzUuNDEzbC03NS40MTMtNzUuNDEzYy04LjM0MS04LjM0MS04LjM0MS0yMS44NDUsMC0zMC4xNjUgICAgYzguMzItOC4zNDEsMjEuODI0LTguMzQxLDMwLjE2NSwwbDc1LjQxMyw3NS40MTNsNzUuNDEzLTc1LjQxM2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDAgICAgYzguMzQxLDguMzIsOC4zNDEsMjEuODI0LDAsMzAuMTY1bC03NS40MTMsNzUuNDEzTDM2MS40NjEsMzMxLjMxN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIi'+
			'Lz4KICAgPC9nPgogIDwvZz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_video_cf__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;color:\"#f40000\";';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Close Video_cf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -25px;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_video_cf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_video_cf.onclick=function (e) {
			me._cloudflare_container.style.transition='none';
			me._cloudflare_container.style.visibility='hidden';
			me._cloudflare_container.ggVisible=false;
			player.setVariableValue('cloudflare_video_id', "");
		}
		me._close_video_cf.ggUpdatePosition=function (useTransition) {
		}
		me._text_4.appendChild(me._close_video_cf);
		me._cloudflare_container.appendChild(me._text_4);
		me.divSkin.appendChild(me._cloudflare_container);
		el=me._blinken=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="blinken";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blinken.ggIsActive=function() {
			return (me._blinken.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._blinken.ggTimestamp) / me._blinken.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blinken.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me._blinken.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._blinken);
		el=me._blinken_starten=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3000;
		el.ggId="blinken_starten";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 432px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blinken_starten.ggIsActive=function() {
			return (me._blinken_starten.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._blinken_starten.ggTimestamp) / me._blinken_starten.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blinken_starten.ggActivate=function () {
			player.setVariableValue('blinken_starten', true);
		}
		me._blinken_starten.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._blinken_starten);
		el=me._youtube_container=document.createElement('div');
		el.ggId="YouTube Container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._youtube_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style.transition='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.logicBlock_visible();
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09In'+
			'JvdGF0ZSg0NSAxNiAxNikiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuMTI1cyIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTYgMTYpIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1'+
			'ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgcj0iMCIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4zNzVzIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgMTYgMTYpIiByPSIwIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjYyNXMiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNz'+
			'VzIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgzMTUgMTYgMTYpIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjg3NXMiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNXMiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_youtube.ggVideoNotLoaded == false && me._popup_video_youtube.ggDeactivate && player.isPlaying('popup_video_youtube')) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style.transition='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.logicBlock_visible();
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		el=me._video_popup_close_youtube=document.createElement('div');
		els=me._video_popup_close_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW'+
			'5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40Njct'+
			'MC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS'+
			'45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9r'+
			'ZS13aWR0aD0iMS41Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OT'+
			'IsMCAgIGwzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwICAgQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2ICAg'+
			'YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5ICAgYzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_popup_close_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW'+
			'5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyAgIGMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwt'+
			'My40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEgICBsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44OD'+
			'EsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCAgIEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4x'+
			'Ny0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDQgICBjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxICAgYy0wLjQ2OC0wLjQ2OC'+
			'0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxICAgYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAgICBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCAgIGM0Ljg4Miw0'+
			'Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkgICBDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2ICAgYzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCAgIEMyMS4xNywyNS4xMj'+
			'MsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_close_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -32px;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='color:#f4000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_popup_close_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_youtube.style.transition='';
				if (me._video_popup_close_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_youtube.style.visibility=(Number(me._video_popup_close_youtube.style.opacity)>0||!me._video_popup_close_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_close_youtube.ggVisible=true;
				}
				else {
					me._video_popup_close_youtube.style.visibility="hidden";
					me._video_popup_close_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_close_youtube.logicBlock_visible();
		me._video_popup_close_youtube.onclick=function (e) {
			player.setVariableValue('vis_video_youtube', false);
		}
		me._video_popup_close_youtube.onmouseenter=function (e) {
			me._video_popup_close_youtube__img.style.visibility='hidden';
			me._video_popup_close_youtube__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_close_youtube']=true;
		}
		me._video_popup_close_youtube.onmouseleave=function (e) {
			me._video_popup_close_youtube__img.style.visibility='inherit';
			me._video_popup_close_youtube__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_close_youtube']=false;
		}
		me._video_popup_close_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._video_popup_close_youtube);
		me._youtube_container.appendChild(me._video_popup_youtube);
		me.divSkin.appendChild(me._youtube_container);
		el=me._centered_info_label=document.createElement('div');
		el.ggId="Centered Info Label";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._centered_info_label.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._centered_info_label.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_label_inner=document.createElement('div');
		el.ggId="Info Label Inner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		hs+='display: flex; justify: center; align-items: center;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_label_inner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_label_inner.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_label_content=document.createElement('div');
		els=me._info_label_content__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Info Label Content";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='display: block; align-items: normal;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="display: block; align-items: normal;";
		els.setAttribute('style',hs);
		me._info_label_content.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('info_label_image', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			params.push(player._(String(player.hotspot.id)));
			params.push(player._(String(player.getVariableValue('info_label_video', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			params.push(player._(String(player.getVariableValue('info_label_pdf', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("<div\n    style=\"padding:20px; cursor: default; color: #1f1f1f; background-color: #e2e2e2; border-radius: 18px; white-space: wrap; text-align: start;\">\n    <div style=\"display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;\">\n        <span id=\"infoLabelTitle\" style=\"font-size: 20px; font-weight: 600;\"><\/span>\n        <span style=\"font-size: 18px; cursor: pointer;\">\n            <span id=\"enLang\" style=\"font-weight: normal; margin: 5px\"\n                onclick=\"pano.setVariableValue(\'info_label_language\', \'en\');this.style.fontWeight=\'bold\'; document.getElementById(\'deLang\').style.fontWeight=\'normal\'\">EN<\/span>\n            <span id=\"deLang\" style=\"font-weight: normal; margin: 5px\"\n                onclick=\"pano.setVariableValue(\'info_label_language\', \'de\'); this.style.fontWeight=\'bold\'; document.getElementById(\'enLang\').style.fontWeight=\'normal\'\">DE<\/span>\n        <\/span>\n    <\/div>\n\n    <div style=\"margin-top: 12px;\">\n        <div id=\"imageContainer\"\n            style=\"width: 100%; max-height: 330px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <img src=\"%1\"\n                onload=\"if(\'%1\' == \'\') this.parentElement.style.display=\'none\'; window.runVideoCheck(\'info_has_video\', \'%2\');\"\n                style=\"max-width: 100%; max-height: 310px; border-radius: 16px\">\n        <\/div>\n\n        <div id=\"videoContainer\"\n            style=\"width: 100%; max-height: 430px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <video id=\"videoPlayer\" width=\"100%\" height=\"auto\" style=\"border-radius: 16px; aspect-ratio: 16 \/ 9;\"\n                controls>\n                <source src=\"%3\" type=\"video\/mp4\">\n                <p>Invalid Video Provided<\/p>\n            <\/video>\n        <\/div>\n\n        <div id=\"pdfContainer\"\n            style=\"width: 100%; margin: 0 5px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <iframe src=\"%4\" type=\"application\/pdf\" width=\"100%\"\n                style=\"border-radius: 16px; aspect-ratio: 16 \/ 12;\"\n                onload=\"if(\'%4\' == \'\') this.parentElement.style.display=\'none\';\"><\/iframe>\n        <\/div>\n    <\/div>\n\n    <p id=\"textContainer\" style=\"font-size: 17px; line-height: 1.6; white-space: preserve-breaks; margin-top: 12;\"><\/p>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_label_content.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('varchanged_info_label_image', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('varchanged_info_label_video', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('varchanged_info_label_pdf', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._info_label_content.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._info_label_content.ggUpdateText();
		});
		el.appendChild(els);
		me._info_label_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_label_content.ggUpdatePosition=function (useTransition) {
		}
		me._info_label_inner.appendChild(me._info_label_content);
		me._centered_info_label.appendChild(me._info_label_inner);
		el=me._backdrop=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Backdrop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.35002;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._backdrop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._backdrop.onclick=function (e) {
			player.setVariableValue('info_label_currently_active', false);
		}
		me._backdrop.ggUpdatePosition=function (useTransition) {
		}
		me._centered_info_label.appendChild(me._backdrop);
		me.divSkin.appendChild(me._centered_info_label);
		me.elementMouseOver['patch_group_container']=false;
		me._cloudflare_video.logicBlock_visible();
		me._cloudflare_video.ggVideoSource = 'https://iframe.videodelivery.net/$(*cloudflare_video_id)';
		me._cloudflare_video.ggVideoNotLoaded = true;
		me._video_popup_youtube.logicBlock_visible();
		me._popup_video_youtube.logicBlock_visible();
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		me._video_popup_close_youtube.logicBlock_visible();
		me.elementMouseOver['video_popup_close_youtube']=false;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('Infopoint')) {
				for(var i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
					hotspotTemplates['Infopoint'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Link')) {
				for(var i = 0; i < hotspotTemplates['Link'].length; i++) {
					hotspotTemplates['Link'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch')) {
				for(var i = 0; i < hotspotTemplates['patch'].length; i++) {
					hotspotTemplates['patch'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group')) {
				for(var i = 0; i < hotspotTemplates['patch_group'].length; i++) {
					hotspotTemplates['patch_group'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
					hotspotTemplates['Hotspot L'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone M')) {
				for(var i = 0; i < hotspotTemplates['Drone M'].length; i++) {
					hotspotTemplates['Drone M'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
					hotspotTemplates['Extern Hotspot L'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot S')) {
				for(var i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
					hotspotTemplates['Hotspot S'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone S')) {
				for(var i = 0; i < hotspotTemplates['Drone S'].length; i++) {
					hotspotTemplates['Drone S'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone Extern')) {
				for(var i = 0; i < hotspotTemplates['Drone Extern'].length; i++) {
					hotspotTemplates['Drone Extern'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot ')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
					hotspotTemplates['Extern Hotspot '][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Button')) {
				for(var i = 0; i < hotspotTemplates['Button'].length; i++) {
					hotspotTemplates['Button'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Infopoint')) {
				for(var i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
					hotspotTemplates['Infopoint'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Link')) {
				for(var i = 0; i < hotspotTemplates['Link'].length; i++) {
					hotspotTemplates['Link'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot M')) {
				for(var i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
					hotspotTemplates['Hotspot M'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot Info Button')) {
				for(var i = 0; i < hotspotTemplates['Hotspot Info Button'].length; i++) {
					hotspotTemplates['Hotspot Info Button'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Cloudflare Video')) {
				for(var i = 0; i < hotspotTemplates['Cloudflare Video'].length; i++) {
					hotspotTemplates['Cloudflare Video'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel_small')) {
				for(var i = 0; i < hotspotTemplates['infoLabel_small'].length; i++) {
					hotspotTemplates['infoLabel_small'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch')) {
				for(var i = 0; i < hotspotTemplates['patch'].length; i++) {
					hotspotTemplates['patch'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group_switcher')) {
				for(var i = 0; i < hotspotTemplates['patch_group_switcher'].length; i++) {
					hotspotTemplates['patch_group_switcher'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel')) {
				for(var i = 0; i < hotspotTemplates['infoLabel'].length; i++) {
					hotspotTemplates['infoLabel'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_hs')) {
				for(var i = 0; i < hotspotTemplates['label_hs'].length; i++) {
					hotspotTemplates['label_hs'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_text')) {
				for(var i = 0; i < hotspotTemplates['label_text'].length; i++) {
					hotspotTemplates['label_text'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group')) {
				for(var i = 0; i < hotspotTemplates['patch_group'].length; i++) {
					hotspotTemplates['patch_group'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			player.getPointHotspotIds().forEach((hs) =>{
let hotspot = player.getHotspot(hs);
if(hotspot.skinid === "Cloudflare Video"){
hotspot.div.addEventListener("click",()=>{
player.setVariableValue("cloudflare_video_id",hotspot.description)
player.setVariableValue("cloudflare_video_title",hotspot.title)
})
hotspot.div.addEventListener("touchend",()=>{
player.setVariableValue("cloudflare_video_id",hotspot.description)
player.setVariableValue("cloudflare_video_title",hotspot.title)
})
}
})
			me._cloudflare_video.logicBlock_visible();
			player.setVariableValue('blinken_starten', false);
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me._video_popup_close_youtube.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
					hotspotTemplates['Hotspot L'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone M')) {
				for(var i = 0; i < hotspotTemplates['Drone M'].length; i++) {
					hotspotTemplates['Drone M'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
					hotspotTemplates['Extern Hotspot L'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot S')) {
				for(var i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
					hotspotTemplates['Hotspot S'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone S')) {
				for(var i = 0; i < hotspotTemplates['Drone S'].length; i++) {
					hotspotTemplates['Drone S'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone Extern')) {
				for(var i = 0; i < hotspotTemplates['Drone Extern'].length; i++) {
					hotspotTemplates['Drone Extern'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot ')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
					hotspotTemplates['Extern Hotspot '][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Infopoint')) {
				for(var i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
					hotspotTemplates['Infopoint'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Link')) {
				for(var i = 0; i < hotspotTemplates['Link'].length; i++) {
					hotspotTemplates['Link'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot M')) {
				for(var i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
					hotspotTemplates['Hotspot M'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot Info Button')) {
				for(var i = 0; i < hotspotTemplates['Hotspot Info Button'].length; i++) {
					hotspotTemplates['Hotspot Info Button'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Cloudflare Video')) {
				for(var i = 0; i < hotspotTemplates['Cloudflare Video'].length; i++) {
					hotspotTemplates['Cloudflare Video'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel_small')) {
				for(var i = 0; i < hotspotTemplates['infoLabel_small'].length; i++) {
					hotspotTemplates['infoLabel_small'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch')) {
				for(var i = 0; i < hotspotTemplates['patch'].length; i++) {
					hotspotTemplates['patch'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group_switcher')) {
				for(var i = 0; i < hotspotTemplates['patch_group_switcher'].length; i++) {
					hotspotTemplates['patch_group_switcher'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel')) {
				for(var i = 0; i < hotspotTemplates['infoLabel'].length; i++) {
					hotspotTemplates['infoLabel'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_hs')) {
				for(var i = 0; i < hotspotTemplates['label_hs'].length; i++) {
					hotspotTemplates['label_hs'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_text')) {
				for(var i = 0; i < hotspotTemplates['label_text'].length; i++) {
					hotspotTemplates['label_text'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group')) {
				for(var i = 0; i < hotspotTemplates['patch_group'].length; i++) {
					hotspotTemplates['patch_group'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			function convertHex(hexCode,opacity){
    if(Boolean(hexCode)){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}else{
    return 'rgba(174, 139, 87, 0.2)';
}
}
function parseHotspotColors(parentDiv){
    let hotspots = parentDiv.querySelectorAll(".HS_Farbe");
    let hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    let border_color_index = hs_color.lastIndexOf(",");
    let border_color = hs_color.substring(0,border_color_index) + ",1)";
    hotspots.forEach(function(hotspot){
        hotspot.style.background = hs_color;
        hotspot.style.borderColor = border_color;
        hotspot.style.borderStyle = "solid";
        hotspot.style.borderSize = "2px";
    })
}
function parseHotspotBackgroundColor(parentDiv){
    let hotspots = parentDiv.querySelectorAll(".hs-farbe-background");
    let hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    let hs_color_alphaIndex = hs_color.lastIndexOf(",");
    let hs_color_noAlpha = hs_color.substring(0,hs_color_alphaIndex)+ ")";
    hotspots.forEach(function(hotspot){
        hotspot.style.background = hs_color_noAlpha;
    })
}
function parseChildHotspotColors(parentDiv){
    let hotspots = parentDiv.querySelectorAll(".hs-child-farbe-background");
    let hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    let hs_color_alphaIndex = hs_color.lastIndexOf(",");
    let hs_color_noAlpha = hs_color.substring(0,hs_color_alphaIndex)+ ")";
    hotspots.forEach(function(hs){
        let child = hs.querySelector("div");
        if(child){
            child.style.backgroundColor = hs_color_noAlpha
        }
    })
}
function parseTextColors(parentDiv){
    let hotspots = parentDiv.querySelectorAll(".text-color");
    let text_color = player.getVariableValue("text_color");
    hotspots.forEach(function(hotspot){
        if(hotspot.children.length !== 0){
            for (let child in hotspot.children){
                if(!isNaN(parseInt(child))){
                    hotspot.children[child].style.color = text_color;
                    hotspot.children[child].style.borderColor = text_color;
                }
            }
        }else{
            hotspot.style.color = text_color;
            hotspot.style.borderColor = text_color;
        }
    })
}
var parentDiv = player.$ || player.divSkin.parentElement;
if(Boolean(player.getVariableValue("hotspotFarbe"))){
    parseHotspotColors(parentDiv);
    parseChildHotspotColors(parentDiv);
    parseHotspotBackgroundColor(parentDiv);

    player.addListener("changenode",function(){
        parseHotspotColors(parentDiv);
        parseChildHotspotColors(parentDiv);
        parseHotspotBackgroundColor(parentDiv);
    });
    player.addListener("varchanged_hotspotFarbe",function(){
        parseHotspotColors(parentDiv);
        parseChildHotspotColors(parentDiv);
        parseHotspotBackgroundColor(parentDiv);
    })
}
if(Boolean(player.getVariableValue("text_color"))){
    parseTextColors(parentDiv);
    player.addListener("changenode",function(){parseTextColors(parentDiv)})
    player.addListener("varchanged_text_color",function(){parseTextColors(parentDiv)})
}
			player.getPointHotspotIds().forEach((hs) =>{
let hotspot = player.getHotspot(hs);
if(hotspot.skinid === "Cloudflare Video"){
hotspot.div.addEventListener("click",()=>{
player.setVariableValue("cloudflare_video_id",hotspot.description)
player.setVariableValue("cloudflare_video_title",hotspot.title)
})
hotspot.div.addEventListener("touchend",()=>{
player.setVariableValue("cloudflare_video_id",hotspot.description)
player.setVariableValue("cloudflare_video_title",hotspot.title)
})
}
})
			me._cloudflare_video.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me._video_popup_close_youtube.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('imagesready', function(event) {
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_imagesready();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_sizechanged();
				}
			}
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_autoExpanded', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
					hotspotTemplates['Hotspot L'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone M')) {
				for(var i = 0; i < hotspotTemplates['Drone M'].length; i++) {
					hotspotTemplates['Drone M'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
					hotspotTemplates['Extern Hotspot L'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot S')) {
				for(var i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
					hotspotTemplates['Hotspot S'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone S')) {
				for(var i = 0; i < hotspotTemplates['Drone S'].length; i++) {
					hotspotTemplates['Drone S'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone Extern')) {
				for(var i = 0; i < hotspotTemplates['Drone Extern'].length; i++) {
					hotspotTemplates['Drone Extern'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot ')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
					hotspotTemplates['Extern Hotspot '][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot M')) {
				for(var i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
					hotspotTemplates['Hotspot M'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot Info Button')) {
				for(var i = 0; i < hotspotTemplates['Hotspot Info Button'].length; i++) {
					hotspotTemplates['Hotspot Info Button'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel_small')) {
				for(var i = 0; i < hotspotTemplates['infoLabel_small'].length; i++) {
					hotspotTemplates['infoLabel_small'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel')) {
				for(var i = 0; i < hotspotTemplates['infoLabel'].length; i++) {
					hotspotTemplates['infoLabel'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_hs')) {
				for(var i = 0; i < hotspotTemplates['label_hs'].length; i++) {
					hotspotTemplates['label_hs'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_text')) {
				for(var i = 0; i < hotspotTemplates['label_text'].length; i++) {
					hotspotTemplates['label_text'][i].ggEvent_varchanged_autoExpanded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_autoExpanded();
				}
			}
		});
		player.addListener('varchanged_blinken_starten', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
					hotspotTemplates['Hotspot L'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone M')) {
				for(var i = 0; i < hotspotTemplates['Drone M'].length; i++) {
					hotspotTemplates['Drone M'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
					hotspotTemplates['Extern Hotspot L'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot S')) {
				for(var i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
					hotspotTemplates['Hotspot S'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone S')) {
				for(var i = 0; i < hotspotTemplates['Drone S'].length; i++) {
					hotspotTemplates['Drone S'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone Extern')) {
				for(var i = 0; i < hotspotTemplates['Drone Extern'].length; i++) {
					hotspotTemplates['Drone Extern'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot ')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
					hotspotTemplates['Extern Hotspot '][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot M')) {
				for(var i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
					hotspotTemplates['Hotspot M'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot Info Button')) {
				for(var i = 0; i < hotspotTemplates['Hotspot Info Button'].length; i++) {
					hotspotTemplates['Hotspot Info Button'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Cloudflare Video')) {
				for(var i = 0; i < hotspotTemplates['Cloudflare Video'].length; i++) {
					hotspotTemplates['Cloudflare Video'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel_small')) {
				for(var i = 0; i < hotspotTemplates['infoLabel_small'].length; i++) {
					hotspotTemplates['infoLabel_small'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel')) {
				for(var i = 0; i < hotspotTemplates['infoLabel'].length; i++) {
					hotspotTemplates['infoLabel'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_hs')) {
				for(var i = 0; i < hotspotTemplates['label_hs'].length; i++) {
					hotspotTemplates['label_hs'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_text')) {
				for(var i = 0; i < hotspotTemplates['label_text'].length; i++) {
					hotspotTemplates['label_text'][i].ggEvent_varchanged_blinken_starten();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_blinken_starten();
				}
			}
		});
		player.addListener('varchanged_ht_ani', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
					hotspotTemplates['Hotspot L'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone M')) {
				for(var i = 0; i < hotspotTemplates['Drone M'].length; i++) {
					hotspotTemplates['Drone M'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot L')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
					hotspotTemplates['Extern Hotspot L'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot S')) {
				for(var i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
					hotspotTemplates['Hotspot S'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone S')) {
				for(var i = 0; i < hotspotTemplates['Drone S'].length; i++) {
					hotspotTemplates['Drone S'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Drone Extern')) {
				for(var i = 0; i < hotspotTemplates['Drone Extern'].length; i++) {
					hotspotTemplates['Drone Extern'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Extern Hotspot ')) {
				for(var i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
					hotspotTemplates['Extern Hotspot '][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot M')) {
				for(var i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
					hotspotTemplates['Hotspot M'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Hotspot Info Button')) {
				for(var i = 0; i < hotspotTemplates['Hotspot Info Button'].length; i++) {
					hotspotTemplates['Hotspot Info Button'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Cloudflare Video')) {
				for(var i = 0; i < hotspotTemplates['Cloudflare Video'].length; i++) {
					hotspotTemplates['Cloudflare Video'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel_small')) {
				for(var i = 0; i < hotspotTemplates['infoLabel_small'].length; i++) {
					hotspotTemplates['infoLabel_small'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabel')) {
				for(var i = 0; i < hotspotTemplates['infoLabel'].length; i++) {
					hotspotTemplates['infoLabel'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_hs')) {
				for(var i = 0; i < hotspotTemplates['label_hs'].length; i++) {
					hotspotTemplates['label_hs'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_text')) {
				for(var i = 0; i < hotspotTemplates['label_text'].length; i++) {
					hotspotTemplates['label_text'][i].ggEvent_varchanged_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_ht_ani();
				}
			}
		});
		player.addListener('varchanged_info_label_currently_active', function(event) {
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_varchanged_info_label_currently_active();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_varchanged_info_label_currently_active();
				}
			}
		});
		player.addListener('varchanged_info_label_language', function(event) {
			if (hotspotTemplates.hasOwnProperty('infoLabelVideo')) {
				for(var i = 0; i < hotspotTemplates['infoLabelVideo'].length; i++) {
					hotspotTemplates['infoLabelVideo'][i].ggEvent_varchanged_info_label_language();
				}
			}
			if (hotspotTemplates.hasOwnProperty('infoLabelv2')) {
				for(var i = 0; i < hotspotTemplates['infoLabelv2'].length; i++) {
					hotspotTemplates['infoLabelv2'][i].ggEvent_varchanged_info_label_language();
				}
			}
		});
		player.addListener('varchanged_labelImage_link', function(event) {
			if (hotspotTemplates.hasOwnProperty('label_image_hs')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs'].length; i++) {
					hotspotTemplates['label_image_hs'][i].ggEvent_varchanged_labelImage_link();
				}
			}
			if (hotspotTemplates.hasOwnProperty('label_image_hs_open')) {
				for(var i = 0; i < hotspotTemplates['label_image_hs_open'].length; i++) {
					hotspotTemplates['label_image_hs_open'][i].ggEvent_varchanged_labelImage_link();
				}
			}
		});
		player.addListener('varchanged_open_video_file_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_open_video_file_hotspots();
				}
			}
		});
		player.addListener('varchanged_patch_group_open', function(event) {
			if (hotspotTemplates.hasOwnProperty('patch_group_switcher')) {
				for(var i = 0; i < hotspotTemplates['patch_group_switcher'].length; i++) {
					hotspotTemplates['patch_group_switcher'][i].ggEvent_varchanged_patch_group_open();
				}
			}
			if (hotspotTemplates.hasOwnProperty('patch_group')) {
				for(var i = 0; i < hotspotTemplates['patch_group'].length; i++) {
					hotspotTemplates['patch_group'][i].ggEvent_varchanged_patch_group_open();
				}
			}
		});
		player.addListener('varchanged_smallPanel', function(event) {
			if (hotspotTemplates.hasOwnProperty('Panel')) {
				for(var i = 0; i < hotspotTemplates['Panel'].length; i++) {
					hotspotTemplates['Panel'][i].ggEvent_varchanged_smallPanel();
				}
			}
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('Infopoint')) {
				for(var i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
					hotspotTemplates['Infopoint'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube', function(event) {
			me._cloudflare_video.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._popup_video_youtube.logicBlock_visible();
			me._video_popup_close_youtube.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			if (hotspotTemplates.hasOwnProperty('Button')) {
				for(var i = 0; i < hotspotTemplates['Button'].length; i++) {
					hotspotTemplates['Button'][i].ggEvent_viewerinit();
				}
			}
		});
	};
	function SkinCloner_nodecloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodetext=document.createElement('div');
		els=me._nodetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="NodeText";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hs-child-farbe-background text-color";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 4px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 90%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._nodetext.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._nodetext.ggUpdateText();
		player.addListener('changenode', function() {
			me._nodetext.ggUpdateText();
		});
		el.appendChild(els);
		me._nodetext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodetext.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._nodetext.onmouseenter=function (e) {
			me._nodetext.style.transition='none';
			skin._nodetext.style.opacity='1';
			skin._nodetext.style.visibility=skin._nodetext.ggVisible?'inherit':'hidden';
			me.elementMouseOver['nodetext']=true;
		}
		me._nodetext.onmouseleave=function (e) {
			me._nodetext.style.transition='none';
			skin._nodetext.style.opacity='0.7';
			skin._nodetext.style.visibility=skin._nodetext.ggVisible?'inherit':'hidden';
			me.elementMouseOver['nodetext']=false;
		}
		me._nodetext.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._nodetext);
		me.elementMouseOver['nodetext']=false;
	};
	function SkinCloner_kategorien_bestimmen_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='auto';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._berschriften=document.createElement('div');
		els=me._berschriften__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\xdcberschriften";
		el.ggDx=-5;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text-color";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(191,160,86,0);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 93.3333%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((93.3333% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bolder;';
		hs+='text-align: right;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._berschriften.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._berschriften.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._berschriften.ggUpdateText();
		});
		el.appendChild(els);
		me._berschriften.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._berschriften.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodecloner=document.createElement('div');
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 315;
		el.ggHeight = 37.8;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._nodecloner.ggUpdating == true) return;
			me._nodecloner.ggUpdating = true;
			var el=me._nodecloner;
			var curNumCols = 0;
			curNumCols = me._nodecloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (parentScope.ggTag) filter.push(parentScope.ggTag);
			filter=filter.concat(parentScope._kategorien_bestimmen.ggFilter);
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._nodecloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._nodecloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._nodecloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._nodecloner.getFilteredNodes(tourNodes, filter);
			me._nodecloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._nodecloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._nodecloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._nodecloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_nodecloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._nodecloner.ggNodeCount = me._nodecloner.ggNumFilterPassed;
			me._nodecloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._nodecloner.parentNode && me._nodecloner.parentNode.classList.contains('ggskin_subelement') && me._nodecloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._nodecloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="NodeCloner";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodecloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodecloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._nodecloner.childNodes.length; i++) {
				var child=me._nodecloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._nodecloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*90)/100.0;
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*90)/100.0;
			me._nodecloner.ggUpdate();
		}
		me._berschriften.appendChild(me._nodecloner);
		me.__div.appendChild(me._berschriften);
			me.ggEvent_changenode=function(event) {
				me._nodecloner.ggUpdateConditionNodeChange();
			};
			me.ggEvent_viewerinit=function(event) {
				me._nodecloner.ggUpdate();
			};
	};
	function SkinHotspotClass_patch_group(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._patch_group=document.createElement('div');
		el.ggId="patch_group";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch_group.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._patch_group.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['patch_group']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['patch_group']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group.ggUpdatePosition=function (useTransition) {
		}
		el=me._patch_group_switcher_customimage=document.createElement('div');
		els=me._patch_group_switcher_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._patch_group_switcher_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._patch_group_switcher_customimage.ggSubElement.setAttribute('alt', player._(me._patch_group_switcher_customimage.ggAltText));
			me._patch_group_switcher_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._patch_group_switcher_customimage.ggText_untranslated = img;
			me._patch_group_switcher_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._patch_group_switcher_customimage.ggSubElement.style.width = '0px';
			me._patch_group_switcher_customimage.ggSubElement.style.height = '0px';
			me._patch_group_switcher_customimage.ggSubElement.src='';
			me._patch_group_switcher_customimage.ggSubElement.src=me._patch_group_switcher_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._patch_group_switcher_customimage.ggText != player._(me._patch_group_switcher_customimage.ggText_untranslated)) {
				me._patch_group_switcher_customimage.ggText = player._(me._patch_group_switcher_customimage.ggText_untranslated);
				me._patch_group_switcher_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="patch_group_switcher_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch_group_switcher_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._patch_group_switcher_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._patch_group_switcher_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._patch_group_switcher_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._patch_group_switcher_customimage.style.transition='opacity 0s';
				if (me._patch_group_switcher_customimage.ggCurrentLogicStateVisible == 0) {
					me._patch_group_switcher_customimage.style.visibility="hidden";
					me._patch_group_switcher_customimage.ggSubElement.src='';
					me._patch_group_switcher_customimage.ggVisible=false;
				}
				else {
					me._patch_group_switcher_customimage.style.visibility=(Number(me._patch_group_switcher_customimage.style.opacity)>0||!me._patch_group_switcher_customimage.style.opacity)?'inherit':'hidden';
					me._patch_group_switcher_customimage.ggSubElement.src=me._patch_group_switcher_customimage.ggText;
					me._patch_group_switcher_customimage.ggVisible=true;
				}
			}
		}
		me._patch_group_switcher_customimage.logicBlock_visible();
		me._patch_group_switcher_customimage.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('patch_group_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._patch_group_switcher_customimage.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._patch_group_switcher_customimage.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._patch_group_switcher_customimage.style.transition='opacity 0s';
				if (me._patch_group_switcher_customimage.ggCurrentLogicStateAlpha == 0) {
					me._patch_group_switcher_customimage.style.visibility=me._patch_group_switcher_customimage.ggVisible?'inherit':'hidden';
					me._patch_group_switcher_customimage.ggSubElement.src=me._patch_group_switcher_customimage.ggText;
					me._patch_group_switcher_customimage.style.opacity=1;
				}
				else {
					me._patch_group_switcher_customimage.style.visibility="hidden";
					me._patch_group_switcher_customimage.ggSubElement.src='';
					me._patch_group_switcher_customimage.style.opacity=0;
				}
			}
		}
		me._patch_group_switcher_customimage.logicBlock_alpha();
		me._patch_group_switcher_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._patch_group_switcher_customimage.clientWidth;
			var parentHeight = me._patch_group_switcher_customimage.clientHeight;
			var img = me._patch_group_switcher_customimage__img;
			var aspectRatioDiv = me._patch_group_switcher_customimage.clientWidth / me._patch_group_switcher_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._patch_group_switcher_customimage.ggScrollbars || currentWidth < me._patch_group_switcher_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._patch_group_switcher_customimage.scrollLeft=currentWidth / 2 - me._patch_group_switcher_customimage.clientWidth / 2;
			}
			if (!me._patch_group_switcher_customimage.ggScrollbars || currentHeight < me._patch_group_switcher_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._patch_group_switcher_customimage.scrollTop=currentHeight / 2 - me._patch_group_switcher_customimage.clientHeight / 2;
			}
		}
		me._patch_group.appendChild(me._patch_group_switcher_customimage);
		me.elementMouseOver['patch_group']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._patch_group_switcher_customimage.style.width=hotspot.customimagewidth + 'px';
			me._patch_group_switcher_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._patch_group_switcher_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._patch_group_switcher_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._patch_group_switcher_customimage.logicBlock_visible();
		me._patch_group_switcher_customimage.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._patch_group_switcher_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._patch_group_switcher_customimage.logicBlock_visible();
				me._patch_group_switcher_customimage.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._patch_group_switcher_customimage.logicBlock_visible();
				me._patch_group_switcher_customimage.logicBlock_alpha();
			};
			me.ggEvent_varchanged_patch_group_open=function() {
				me._patch_group_switcher_customimage.logicBlock_alpha();
			};
			me.__div = me._patch_group;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._nodeimage_1_ht.logicBlock_scaling();
			me._nodeimage_1_ht.logicBlock_angle();
			me._nodeimage_1_ht.logicBlock_alpha();
			me._hs_image_i_1_htm.logicBlock_scaling();
			me._hs_image_i_1_htm.logicBlock_bordercolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._nodeimage_1_ht.logicBlock_scaling();
			me._nodeimage_1_ht.logicBlock_angle();
			me._nodeimage_1_ht.logicBlock_alpha();
			me._hs_image_i_1_htm.logicBlock_scaling();
			me._hs_image_i_1_htm.logicBlock_bordercolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_1_ht=document.createElement('div');
		els=me._nodeimage_1_ht__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_ht_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_ht";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_ht.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_ht.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_ht.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_ht.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_ht.ggParameter.sx = 3;
					me._nodeimage_1_ht.ggParameter.sy = 3;
					me._nodeimage_1_ht.style.transform=parameterToTransform(me._nodeimage_1_ht.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_ht);}, 1050);
				}
				else {
					me._nodeimage_1_ht.ggParameter.sx = 0;
					me._nodeimage_1_ht.ggParameter.sy = 0;
					me._nodeimage_1_ht.style.transform=parameterToTransform(me._nodeimage_1_ht.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_ht);}, 1050);
				}
			}
		}
		me._nodeimage_1_ht.logicBlock_scaling();
		me._nodeimage_1_ht.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['ht_node'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_ht.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_ht.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_ht.ggParameter.a = 360;
					me._nodeimage_1_ht.style.transform=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
				else {
					me._nodeimage_1_ht.ggParameter.a = -360;
					me._nodeimage_1_ht.style.transform=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
			}
		}
		me._nodeimage_1_ht.logicBlock_angle();
		me._nodeimage_1_ht.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_ht.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_ht.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_ht.style.visibility=me._nodeimage_1_ht.ggVisible?'inherit':'hidden';
					me._nodeimage_1_ht.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_ht.style.opacity == 0.0) { me._nodeimage_1_ht.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_ht.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_ht.logicBlock_alpha();
		me._nodeimage_1_ht.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._nodeimage_1_ht);
		el=me._hs_image_i_1_htm=document.createElement('div');
		el.ggId="hs_image_i_1_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_htm.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_htm.ggParameter.sx = 0.8;
					me._hs_image_i_1_htm.ggParameter.sy = 0.8;
					me._hs_image_i_1_htm.style.transform=parameterToTransform(me._hs_image_i_1_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_htm);}, 550);
				}
				else {
					me._hs_image_i_1_htm.ggParameter.sx = 0.5;
					me._hs_image_i_1_htm.ggParameter.sy = 0.5;
					me._hs_image_i_1_htm.style.transform=parameterToTransform(me._hs_image_i_1_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_htm);}, 550);
				}
			}
		}
		me._hs_image_i_1_htm.logicBlock_scaling();
		me._hs_image_i_1_htm.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['ht_node'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_htm.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_htm.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_1_htm.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_htm.logicBlock_bordercolor();
		me._hs_image_i_1_htm.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hs_image_i_1_htm);
		el=me._hs_image_animated_1_htm=document.createElement('div');
		el.ggId="hs_image_animated_1_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_htm.ggParameter.sx = 0.8;
					me._hs_image_animated_1_htm.ggParameter.sy = 0.8;
					me._hs_image_animated_1_htm.style.transform=parameterToTransform(me._hs_image_animated_1_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_htm);}, 550);
				}
				else {
					me._hs_image_animated_1_htm.ggParameter.sx = 0.5;
					me._hs_image_animated_1_htm.ggParameter.sy = 0.5;
					me._hs_image_animated_1_htm.style.transform=parameterToTransform(me._hs_image_animated_1_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_htm);}, 550);
				}
			}
		}
		me._hs_image_animated_1_htm.logicBlock_scaling();
		me._hs_image_animated_1_htm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_htm.style.visibility=(Number(me._hs_image_animated_1_htm.style.opacity)>0||!me._hs_image_animated_1_htm.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_htm.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_htm.style.visibility="hidden";
					me._hs_image_animated_1_htm.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_htm.logicBlock_visible();
		me._hs_image_animated_1_htm.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_htm.style.opacity == 0.0) { me._hs_image_animated_1_htm.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_htm.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_htm.style.visibility=me._hs_image_animated_1_htm.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_htm.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_htm.logicBlock_alpha();
		me._hs_image_animated_1_htm.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hs_image_animated_1_htm);
		el=me._hs_image_animated_2_htm=document.createElement('div');
		el.ggId="hs_image_animated_2_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_htm.ggParameter.sx = 0.8;
					me._hs_image_animated_2_htm.ggParameter.sy = 0.8;
					me._hs_image_animated_2_htm.style.transform=parameterToTransform(me._hs_image_animated_2_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_htm);}, 550);
				}
				else {
					me._hs_image_animated_2_htm.ggParameter.sx = 1;
					me._hs_image_animated_2_htm.ggParameter.sy = 1;
					me._hs_image_animated_2_htm.style.transform=parameterToTransform(me._hs_image_animated_2_htm.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_htm);}, 550);
				}
			}
		}
		me._hs_image_animated_2_htm.logicBlock_scaling();
		me._hs_image_animated_2_htm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_htm.style.visibility=(Number(me._hs_image_animated_2_htm.style.opacity)>0||!me._hs_image_animated_2_htm.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_htm.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_htm.style.visibility="hidden";
					me._hs_image_animated_2_htm.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_htm.logicBlock_visible();
		me._hs_image_animated_2_htm.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_htm.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_htm.style.visibility=me._hs_image_animated_2_htm.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_htm.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_htm.style.opacity == 0.0) { me._hs_image_animated_2_htm.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_htm.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_htm.logicBlock_alpha();
		me._hs_image_animated_2_htm.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hs_image_animated_2_htm);
		me.elementMouseOver['ht_node']=false;
		me._nodeimage_1_ht.logicBlock_scaling();
		me._nodeimage_1_ht.logicBlock_angle();
		me._nodeimage_1_ht.logicBlock_alpha();
		me._hs_image_i_1_htm.logicBlock_scaling();
		me._hs_image_i_1_htm.logicBlock_bordercolor();
		me._hs_image_animated_1_htm.logicBlock_scaling();
		me._hs_image_animated_1_htm.logicBlock_visible();
		me._hs_image_animated_1_htm.logicBlock_alpha();
		me._hs_image_animated_2_htm.logicBlock_scaling();
		me._hs_image_animated_2_htm.logicBlock_visible();
		me._hs_image_animated_2_htm.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._nodeimage_1_ht.logicBlock_scaling();
				me._nodeimage_1_ht.logicBlock_angle();
				me._nodeimage_1_ht.logicBlock_alpha();
				me._hs_image_i_1_htm.logicBlock_scaling();
				me._hs_image_i_1_htm.logicBlock_bordercolor();
				me._hs_image_animated_1_htm.logicBlock_scaling();
				me._hs_image_animated_1_htm.logicBlock_visible();
				me._hs_image_animated_1_htm.logicBlock_alpha();
				me._hs_image_animated_2_htm.logicBlock_scaling();
				me._hs_image_animated_2_htm.logicBlock_visible();
				me._hs_image_animated_2_htm.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._nodeimage_1_ht.logicBlock_scaling();
				me._nodeimage_1_ht.logicBlock_angle();
				me._nodeimage_1_ht.logicBlock_alpha();
				me._hs_image_i_1_htm.logicBlock_scaling();
				me._hs_image_i_1_htm.logicBlock_bordercolor();
				me._hs_image_animated_1_htm.logicBlock_scaling();
				me._hs_image_animated_1_htm.logicBlock_visible();
				me._hs_image_animated_1_htm.logicBlock_alpha();
				me._hs_image_animated_2_htm.logicBlock_scaling();
				me._hs_image_animated_2_htm.logicBlock_visible();
				me._hs_image_animated_2_htm.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._nodeimage_1_ht.logicBlock_scaling();
				me._nodeimage_1_ht.logicBlock_angle();
				me._nodeimage_1_ht.logicBlock_alpha();
				me._hs_image_i_1_htm.logicBlock_scaling();
				me._hs_image_i_1_htm.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_htm.logicBlock_visible();
				me._hs_image_animated_2_htm.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_htm.logicBlock_scaling();
				me._hs_image_animated_1_htm.logicBlock_alpha();
				me._hs_image_animated_2_htm.logicBlock_scaling();
				me._hs_image_animated_2_htm.logicBlock_alpha();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_label_text(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._label_text=document.createElement('div');
		el.ggId="label_text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._label_text.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._label_text.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_text.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_text.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['label_text']=true;
			me._hs_image_i_l.logicBlock_scaling();
			me._hs_image_i_l.logicBlock_bordercolor();
			me._nodeimage_1_l.logicBlock_scaling();
			me._nodeimage_1_l.logicBlock_angle();
			me._nodeimage_1_l.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_text.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['label_text']=false;
			me._hs_image_i_l.logicBlock_scaling();
			me._hs_image_i_l.logicBlock_bordercolor();
			me._nodeimage_1_l.logicBlock_scaling();
			me._nodeimage_1_l.logicBlock_angle();
			me._nodeimage_1_l.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l.style.transform=parameterToTransform(me._hs_image_animated_2_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l);}, 550);
				}
				else {
					me._hs_image_animated_2_l.ggParameter.sx = 1;
					me._hs_image_animated_2_l.ggParameter.sy = 1;
					me._hs_image_animated_2_l.style.transform=parameterToTransform(me._hs_image_animated_2_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l);}, 550);
				}
			}
		}
		me._hs_image_animated_2_l.logicBlock_scaling();
		me._hs_image_animated_2_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l.style.visibility=(Number(me._hs_image_animated_2_l.style.opacity)>0||!me._hs_image_animated_2_l.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l.style.visibility="hidden";
					me._hs_image_animated_2_l.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l.logicBlock_visible();
		me._hs_image_animated_2_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l.style.visibility=me._hs_image_animated_2_l.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l.style.opacity == 0.0) { me._hs_image_animated_2_l.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l.logicBlock_alpha();
		me._hs_image_animated_2_l.ggUpdatePosition=function (useTransition) {
		}
		me._label_text.appendChild(me._hs_image_animated_2_l);
		el=me._hs_image_animated_1_l=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l.style.transform=parameterToTransform(me._hs_image_animated_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l);}, 550);
				}
				else {
					me._hs_image_animated_1_l.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l.style.transform=parameterToTransform(me._hs_image_animated_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l);}, 550);
				}
			}
		}
		me._hs_image_animated_1_l.logicBlock_scaling();
		me._hs_image_animated_1_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l.style.visibility=(Number(me._hs_image_animated_1_l.style.opacity)>0||!me._hs_image_animated_1_l.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l.style.visibility="hidden";
					me._hs_image_animated_1_l.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l.logicBlock_visible();
		me._hs_image_animated_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l.style.opacity == 0.0) { me._hs_image_animated_1_l.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l.style.visibility=me._hs_image_animated_1_l.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l.logicBlock_alpha();
		me._hs_image_animated_1_l.ggUpdatePosition=function (useTransition) {
		}
		me._label_text.appendChild(me._hs_image_animated_1_l);
		el=me._hs_image_i_l=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_text'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l.ggParameter.sx = 0.8;
					me._hs_image_i_l.ggParameter.sy = 0.8;
					me._hs_image_i_l.style.transform=parameterToTransform(me._hs_image_i_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l);}, 550);
				}
				else {
					me._hs_image_i_l.ggParameter.sx = 0.5;
					me._hs_image_i_l.ggParameter.sy = 0.5;
					me._hs_image_i_l.style.transform=parameterToTransform(me._hs_image_i_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l);}, 550);
				}
			}
		}
		me._hs_image_i_l.logicBlock_scaling();
		me._hs_image_i_l.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['label_text'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l.logicBlock_bordercolor();
		me._hs_image_i_l.ggUpdatePosition=function (useTransition) {
		}
		me._label_text.appendChild(me._hs_image_i_l);
		el=me._nodeimage_1_l=document.createElement('div');
		els=me._nodeimage_1_l__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_text'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_l.ggParameter.sx = 3;
					me._nodeimage_1_l.ggParameter.sy = 3;
					me._nodeimage_1_l.style.transform=parameterToTransform(me._nodeimage_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l);}, 1050);
				}
				else {
					me._nodeimage_1_l.ggParameter.sx = 0;
					me._nodeimage_1_l.ggParameter.sy = 0;
					me._nodeimage_1_l.style.transform=parameterToTransform(me._nodeimage_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l);}, 1050);
				}
			}
		}
		me._nodeimage_1_l.logicBlock_scaling();
		me._nodeimage_1_l.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_text'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_l.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_l.ggParameter.a = 360;
					me._nodeimage_1_l.style.transform=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
				else {
					me._nodeimage_1_l.ggParameter.a = -360;
					me._nodeimage_1_l.style.transform=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
			}
		}
		me._nodeimage_1_l.logicBlock_angle();
		me._nodeimage_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_text'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_l.style.visibility=me._nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._nodeimage_1_l.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_l.style.opacity == 0.0) { me._nodeimage_1_l.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_l.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_l.logicBlock_alpha();
		me._nodeimage_1_l.ggUpdatePosition=function (useTransition) {
		}
		me._label_text.appendChild(me._nodeimage_1_l);
		el=me._label=document.createElement('div');
		els=me._label__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="label";
		el.ggDx=0;
		el.ggDy=-43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 43px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='font-family: Raleway, Roboto';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #0e5777;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._label.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._label.ggUpdateText();
		player.addListener('changenode', function() {
			me._label.ggUpdateText();
		});
		el.appendChild(els);
		me._label.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._label.ggUpdatePosition=function (useTransition) {
		}
		me._label_text.appendChild(me._label);
		me.elementMouseOver['label_text']=false;
		me._hs_image_animated_2_l.logicBlock_scaling();
		me._hs_image_animated_2_l.logicBlock_visible();
		me._hs_image_animated_2_l.logicBlock_alpha();
		me._hs_image_animated_1_l.logicBlock_scaling();
		me._hs_image_animated_1_l.logicBlock_visible();
		me._hs_image_animated_1_l.logicBlock_alpha();
		me._hs_image_i_l.logicBlock_scaling();
		me._hs_image_i_l.logicBlock_bordercolor();
		me._nodeimage_1_l.logicBlock_scaling();
		me._nodeimage_1_l.logicBlock_angle();
		me._nodeimage_1_l.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_l.logicBlock_scaling();
				me._hs_image_animated_2_l.logicBlock_visible();
				me._hs_image_animated_2_l.logicBlock_alpha();
				me._hs_image_animated_1_l.logicBlock_scaling();
				me._hs_image_animated_1_l.logicBlock_visible();
				me._hs_image_animated_1_l.logicBlock_alpha();
				me._hs_image_i_l.logicBlock_scaling();
				me._hs_image_i_l.logicBlock_bordercolor();
				me._nodeimage_1_l.logicBlock_scaling();
				me._nodeimage_1_l.logicBlock_angle();
				me._nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_l.logicBlock_scaling();
				me._hs_image_animated_2_l.logicBlock_visible();
				me._hs_image_animated_2_l.logicBlock_alpha();
				me._hs_image_animated_1_l.logicBlock_scaling();
				me._hs_image_animated_1_l.logicBlock_visible();
				me._hs_image_animated_1_l.logicBlock_alpha();
				me._hs_image_i_l.logicBlock_scaling();
				me._hs_image_i_l.logicBlock_bordercolor();
				me._nodeimage_1_l.logicBlock_scaling();
				me._nodeimage_1_l.logicBlock_angle();
				me._nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_animated_2_l.logicBlock_scaling();
				me._hs_image_animated_2_l.logicBlock_visible();
				me._hs_image_animated_1_l.logicBlock_scaling();
				me._hs_image_animated_1_l.logicBlock_visible();
				me._hs_image_i_l.logicBlock_scaling();
				me._hs_image_i_l.logicBlock_bordercolor();
				me._nodeimage_1_l.logicBlock_scaling();
				me._nodeimage_1_l.logicBlock_angle();
				me._nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_l.logicBlock_visible();
				me._hs_image_animated_1_l.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_l.logicBlock_scaling();
				me._hs_image_animated_2_l.logicBlock_alpha();
				me._hs_image_animated_1_l.logicBlock_scaling();
				me._hs_image_animated_1_l.logicBlock_alpha();
			};
			me.__div = me._label_text;
	};
	function SkinHotspotClass_infolabelv2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infolabelv2=document.createElement('div');
		el.ggId="infoLabelv2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabelv2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infolabelv2.onclick=function (e) {
			var systemLanguage = navigator.language.startsWith("de") ? 'de' : 'en'
var panoLanguage = player.getVariableValue('info_label_language')
if (systemLanguage === panoLanguage) {
    if (systemLanguage === 'de') {
        document.getElementById('enLang').style.fontWeight = 'normal';
        document.getElementById('deLang').style.fontWeight = 'bold';
        player.setVariableValue('info_label_language', 'en');
        player.setVariableValue('info_label_language', 'de');
    } else {
        document.getElementById('enLang').style.fontWeight = 'bold';
        document.getElementById('deLang').style.fontWeight = 'normal';
        player.setVariableValue('info_label_language', 'de');
        player.setVariableValue('info_label_language', 'en');
    }
}
else {
    if (systemLanguage === 'de') {
        document.getElementById('deLang').style.fontWeight = 'normal';
        document.getElementById('enLang').style.fontWeight = 'bold';
        player.setVariableValue('info_label_language', 'de');
        player.setVariableValue('info_label_language', 'en');
    } else {
        document.getElementById('deLang').style.fontWeight = 'bold';
        document.getElementById('enLang').style.fontWeight = 'normal';
        player.setVariableValue('info_label_language', 'en');
        player.setVariableValue('info_label_language', 'de');
    }
}

var counter = 0;
var interval = setInterval(() => {
    try {
        var hid = player.getVariableValue('last_hovered_hotspot_id')
        var nd = player.getCurrentNode()

        var textTranslated = player.getHotspotPropValue(nd, hid, "info_label_translation")
        var textGerman = player.getHotspotPropValue(nd, hid, "info_label_german")

        var titleTranslated = player.getHotspotPropValue(nd, hid, "info_label_titel_translation")
        var titleGerman = player.getHotspotPropValue(nd, hid, "info_label_titel")

        if (player.getVariableValue('info_label_language') == 'de') {
            document.getElementById('textContainer').innerHTML = textGerman;
            document.getElementById('infoLabelTitle').innerHTML = titleGerman;
        }
        else {
            document.getElementById('textContainer').innerHTML = textTranslated;
            document.getElementById('infoLabelTitle').innerHTML = titleTranslated;
        }
    }
    catch (err) {
        console.log(err)
    }
    (counter === 50) && clearInterval(interval);
    counter++;
}, 10)
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelv2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelv2.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.setVariableValue('last_hovered_hotspot_id', me.hotspot.id);
			me.elementMouseOver['infolabelv2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelv2.onmousedown=function (e) {
			player.setVariableValue('info_label_currently_active', true);
				skin._info_label_content.ggUpdateText=function() {
					var params = [];
					params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_image'))));
					params.push(player._(String(me.hotspot.id)));
					params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_video'))));
					params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_pdf'))));
					var hs = player._("<div\n    style=\"padding:20px; cursor: default; color: #1f1f1f; background-color: #e2e2e2; border-radius: 18px; white-space: wrap; text-align: start;\">\n    <div style=\"display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;\">\n        <span id=\"infoLabelTitle\" style=\"font-size: 20px; font-weight: 600;\"><\/span>\n        <span style=\"font-size: 18px; cursor: pointer;\">\n            <span id=\"enLang\" style=\"font-weight: normal; margin: 5px\"\n                onclick=\"pano.setVariableValue(\'info_label_language\', \'en\');this.style.fontWeight=\'bold\'; document.getElementById(\'deLang\').style.fontWeight=\'normal\'\">EN<\/span>\n            <span id=\"deLang\" style=\"font-weight: normal; margin: 5px\"\n                onclick=\"pano.setVariableValue(\'info_label_language\', \'de\'); this.style.fontWeight=\'bold\'; document.getElementById(\'enLang\').style.fontWeight=\'normal\'\">DE<\/span>\n        <\/span>\n    <\/div>\n\n    <div style=\"margin-top: 12px;\">\n        <div id=\"imageContainer\"\n            style=\"width: 100%; max-height: 330px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <img src=\"%1\"\n                onload=\"if(\'%1\' == \'\') this.parentElement.style.display=\'none\'; window.runVideoCheck(\'info_has_video\', \'%2\');\"\n                style=\"max-width: 100%; max-height: 310px; border-radius: 16px\">\n        <\/div>\n\n        <div id=\"videoContainer\"\n            style=\"width: 100%; max-height: 430px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <video id=\"videoPlayer\" width=\"100%\" height=\"auto\" style=\"border-radius: 16px; aspect-ratio: 16 \/ 9;\"\n                controls>\n                <source src=\"%3\" type=\"video\/mp4\">\n                <p>Invalid Video Provided<\/p>\n            <\/video>\n        <\/div>\n\n        <div id=\"pdfContainer\"\n            style=\"width: 100%; margin: 0 5px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <iframe src=\"%4\" type=\"application\/pdf\" width=\"100%\"\n                style=\"border-radius: 16px; aspect-ratio: 16 \/ 12;\"\n                onload=\"if(\'%4\' == \'\') this.parentElement.style.display=\'none\';\"><\/iframe>\n        <\/div>\n    <\/div>\n\n    <p id=\"textContainer\" style=\"font-size: 17px; line-height: 1.6; white-space: preserve-breaks; margin-top: 12;\"><\/p>\n<\/div>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_label_content.ggUpdateText();
			skin._info_label_content.ggTextDiv.scrollTop = 0;
			//First checking the language, then getting he ID's of all the important label elements, then replacing the inner HTML of them
		}
		me._infolabelv2.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['infolabelv2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelv2.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="hs";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : calc(50% - ((73px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((73px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs.onmouseenter=function (e) {
			me.elementMouseOver['hs']=true;
			me._hs_image_i_1_infolabel.logicBlock_scaling();
			me._hs_image_i_1_infolabel.logicBlock_bordercolor();
		}
		me._hs.onmouseleave=function (e) {
			me.elementMouseOver['hs']=false;
			me._hs_image_i_1_infolabel.logicBlock_scaling();
			me._hs_image_i_1_infolabel.logicBlock_bordercolor();
		}
		me._hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_i_1_infolabel=document.createElement('div');
		el.ggId="hs_image_i_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.352941);';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_infolabel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_infolabel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_infolabel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_infolabel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_infolabel.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_infolabel.ggParameter.sx = 0.8;
					me._hs_image_i_1_infolabel.ggParameter.sy = 0.8;
					me._hs_image_i_1_infolabel.style.transform=parameterToTransform(me._hs_image_i_1_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel);}, 550);
				}
				else {
					me._hs_image_i_1_infolabel.ggParameter.sx = 0.5;
					me._hs_image_i_1_infolabel.ggParameter.sy = 0.5;
					me._hs_image_i_1_infolabel.style.transform=parameterToTransform(me._hs_image_i_1_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel);}, 550);
				}
			}
		}
		me._hs_image_i_1_infolabel.logicBlock_scaling();
		me._hs_image_i_1_infolabel.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_infolabel.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_infolabel.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_infolabel.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_infolabel.style.borderColor="rgba(230,230,230,1)";
				}
				else {
					me._hs_image_i_1_infolabel.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_infolabel.logicBlock_bordercolor();
		me._hs_image_i_1_infolabel.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._hs_image_i_1_infolabel);
		el=me._hs_image_animated_1_infolabel=document.createElement('div');
		el.ggId="hs_image_animated_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_infolabel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_infolabel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_infolabel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_infolabel.ggParameter.sx = 0.8;
					me._hs_image_animated_1_infolabel.ggParameter.sy = 0.8;
					me._hs_image_animated_1_infolabel.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel);}, 550);
				}
				else {
					me._hs_image_animated_1_infolabel.ggParameter.sx = 0.5;
					me._hs_image_animated_1_infolabel.ggParameter.sy = 0.5;
					me._hs_image_animated_1_infolabel.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel);}, 550);
				}
			}
		}
		me._hs_image_animated_1_infolabel.logicBlock_scaling();
		me._hs_image_animated_1_infolabel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_1_infolabel'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_infolabel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_infolabel.style.visibility=(Number(me._hs_image_animated_1_infolabel.style.opacity)>0||!me._hs_image_animated_1_infolabel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_infolabel.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_infolabel.style.visibility="hidden";
					me._hs_image_animated_1_infolabel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_infolabel.logicBlock_visible();
		me._hs_image_animated_1_infolabel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_infolabel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_infolabel.style.opacity == 0.0) { me._hs_image_animated_1_infolabel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_infolabel.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_infolabel.style.visibility=me._hs_image_animated_1_infolabel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_infolabel.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_infolabel.logicBlock_alpha();
		me._hs_image_animated_1_infolabel.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel']=true;
			me._hs_image_animated_1_infolabel.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel']=false;
			me._hs_image_animated_1_infolabel.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._hs_image_animated_1_infolabel);
		el=me._hs_image_animated_2_infolabel=document.createElement('div');
		el.ggId="hs_image_animated_2_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_infolabel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_infolabel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_infolabel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_infolabel.ggParameter.sx = 0.8;
					me._hs_image_animated_2_infolabel.ggParameter.sy = 0.8;
					me._hs_image_animated_2_infolabel.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel);}, 550);
				}
				else {
					me._hs_image_animated_2_infolabel.ggParameter.sx = 1;
					me._hs_image_animated_2_infolabel.ggParameter.sy = 1;
					me._hs_image_animated_2_infolabel.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel);}, 550);
				}
			}
		}
		me._hs_image_animated_2_infolabel.logicBlock_scaling();
		me._hs_image_animated_2_infolabel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_2_infolabel'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_infolabel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_infolabel.style.visibility=(Number(me._hs_image_animated_2_infolabel.style.opacity)>0||!me._hs_image_animated_2_infolabel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_infolabel.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_infolabel.style.visibility="hidden";
					me._hs_image_animated_2_infolabel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_infolabel.logicBlock_visible();
		me._hs_image_animated_2_infolabel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_infolabel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_infolabel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_infolabel.style.visibility=me._hs_image_animated_2_infolabel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_infolabel.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_infolabel.style.opacity == 0.0) { me._hs_image_animated_2_infolabel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_infolabel.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_infolabel.logicBlock_alpha();
		me._hs_image_animated_2_infolabel.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel']=true;
			me._hs_image_animated_2_infolabel.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel']=false;
			me._hs_image_animated_2_infolabel.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._hs_image_animated_2_infolabel);
		el=me._i=document.createElement('div');
		els=me._i__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="i";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 22px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._i.ggUpdateText=function() {
			var params = [];
			var hs = player._("i\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._i.ggUpdateText();
		el.appendChild(els);
		me._i.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._i);
		me._infolabelv2.appendChild(me._hs);
		me.elementMouseOver['infolabelv2']=false;
		me.elementMouseOver['hs']=false;
		me._hs_image_i_1_infolabel.logicBlock_scaling();
		me._hs_image_i_1_infolabel.logicBlock_bordercolor();
		me._hs_image_animated_1_infolabel.logicBlock_scaling();
		me._hs_image_animated_1_infolabel.logicBlock_visible();
		me._hs_image_animated_1_infolabel.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_1_infolabel']=false;
		me._hs_image_animated_2_infolabel.logicBlock_scaling();
		me._hs_image_animated_2_infolabel.logicBlock_visible();
		me._hs_image_animated_2_infolabel.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_2_infolabel']=false;
			me.ggEvent_changenode=function() {
				me._hs_image_i_1_infolabel.logicBlock_scaling();
				me._hs_image_i_1_infolabel.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel.logicBlock_scaling();
				me._hs_image_animated_1_infolabel.logicBlock_visible();
				me._hs_image_animated_1_infolabel.logicBlock_alpha();
				me._hs_image_animated_2_infolabel.logicBlock_scaling();
				me._hs_image_animated_2_infolabel.logicBlock_visible();
				me._hs_image_animated_2_infolabel.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				player.setVariableValue('info_label_language', (navigator.language.startsWith("de") ? 'de' : 'en'));
				me._hs_image_i_1_infolabel.logicBlock_scaling();
				me._hs_image_i_1_infolabel.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel.logicBlock_scaling();
				me._hs_image_animated_1_infolabel.logicBlock_visible();
				me._hs_image_animated_1_infolabel.logicBlock_alpha();
				me._hs_image_animated_2_infolabel.logicBlock_scaling();
				me._hs_image_animated_2_infolabel.logicBlock_visible();
				me._hs_image_animated_2_infolabel.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_infolabel.logicBlock_scaling();
				me._hs_image_i_1_infolabel.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel.logicBlock_visible();
				me._hs_image_animated_2_infolabel.logicBlock_visible();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_infolabel.logicBlock_visible();
				me._hs_image_animated_2_infolabel.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_infolabel.logicBlock_scaling();
				me._hs_image_animated_1_infolabel.logicBlock_alpha();
				me._hs_image_animated_2_infolabel.logicBlock_scaling();
				me._hs_image_animated_2_infolabel.logicBlock_alpha();
			};
			me.ggEvent_varchanged_info_label_currently_active=function() {
				if (
					(
						((player.getVariableValue('info_label_currently_active') == true))
					)
				) {
					var flag=skin._centered_info_label.ggOpacitiyActive;
					if (player.transitionsDisabled) {
						skin._centered_info_label.style.transition='none';
					} else {
						skin._centered_info_label.style.transition='all 250ms ease 0ms';
					}
					if (flag) {
						skin._centered_info_label.style.opacity='0';
						skin._centered_info_label.style.visibility='hidden';
					} else {
						skin._centered_info_label.style.opacity='1';
						skin._centered_info_label.style.visibility=skin._centered_info_label.ggVisible?'inherit':'hidden';
					}
					skin._centered_info_label.ggOpacitiyActive=!flag;
				}
				if (
					(
						((player.getVariableValue('info_label_currently_active') == false))
					)
				) {
					var flag=skin._centered_info_label.ggOpacitiyActive;
					if (player.transitionsDisabled) {
						skin._centered_info_label.style.transition='none';
					} else {
						skin._centered_info_label.style.transition='all 250ms ease 0ms';
					}
					if (flag) {
						skin._centered_info_label.style.opacity='0';
						skin._centered_info_label.style.visibility='hidden';
					} else {
						skin._centered_info_label.style.opacity='0';
						skin._centered_info_label.style.visibility='hidden';
					}
					skin._centered_info_label.ggOpacitiyActive=!flag;
				}
			};
			me.ggEvent_varchanged_info_label_language=function() {
				var panoLanguage = player.getVariableValue('info_label_language')
if (panoLanguage === 'de') {
        document.getElementById('enLang').style.fontWeight = 'normal';
        document.getElementById('deLang').style.fontWeight = 'bold';
    } else {
        document.getElementById('enLang').style.fontWeight = 'bold';
        document.getElementById('deLang').style.fontWeight = 'normal';
 }
			};
			me.__div = me._infolabelv2;
	};
	function SkinHotspotClass_infolabelvideo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infolabelvideo=document.createElement('div');
		el.ggId="infoLabelVideo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabelvideo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infolabelvideo.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelvideo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelvideo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['infolabelvideo']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelvideo.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['infolabelvideo']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabelvideo.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopanelvideohs=document.createElement('div');
		el.ggId="InfoPanelVideoHS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : auto;';
		hs+='left : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopanelvideohs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infopanelvideohs.ggUpdatePosition=function (useTransition) {
		}
		el=me._infotext=document.createElement('div');
		els=me._infotext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="infoText";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : fit-content;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='white-space: normal';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="white-space: normal";
		els.setAttribute('style',hs);
		me._infotext.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_image'))));
			params.push(player._(String(me.hotspot.id)));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_video'))));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_pdf'))));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_current_text'))));
			var hs = player._("<div\n    style=\"cursor: default; display: flex; justify-content: space-between; white-space: normal; align-items: center; padding: 16px; background-color: #2e2e2e; border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 0px;\">\n    <span style=\"font-size: 18px; font-weight: 600; color: rgb(224, 224, 224); padding-right: 15px;\">%1<\/span>\n    <span style=\"cursor: pointer; color: rgb(224, 224, 224); font-size: 16px;\">\n        <span id=\"enLang\" style=\"margin: 5px 10px; font-weight: normal;\"\n            onclick=\"pano.setVariableValue(\'info_label_language\', \'en\'); console.log(\'language set to en\')\">EN<\/span>\n        <span id=\"deLang\" style=\"margin: 5px 10px; font-weight: bold;\"\n            onclick=\"pano.setVariableValue(\'info_label_language\', \'de\'); console.log(\'language set to de\')\">DE<\/span>\n    <\/span>\n<\/div>\n<div\n    style=\"padding:16px; cursor: default; color: #1f1f1f; background-color: #e2e2e2; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;\">\n\n    <div style=\"margin-top: 12px;\">\n        <div id=\"imageContainer\"\n            style=\"width: 100%; margin: 0 5px; max-height: 330px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <img src=\"%2\"\n                onload=\"if(\'%2\' == \'\') this.parentElement.style.display=\'none\'; window.runVideoCheck(\'info_has_video\', \'%3\');\"\n                style=\"max-width: 100%; max-height: 310px; border-radius: 16px\">\n        <\/div>\n\n        <div id=\"videoContainer\"\n            style=\"width: 100%; margin: 0 5px; max-height: 430px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <video id=\"videoPlayer\" width=\"100%\" height=\"auto\" style=\"border-radius: 16px; aspect-ratio: 16 \/ 9;\"\n                controls>\n                <source src=\"%4\" type=\"video\/mp4\">\n                <p>Invalid Video Provided<\/p>\n            <\/video>\n        <\/div>\n\n        <div id=\"pdfContainer\"\n            style=\"width: 100%; margin: 0 5px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <iframe src=\"%5\" type=\"application\/pdf\" width=\"100%\"\n                style=\"border-radius: 16px; aspect-ratio: 16 \/ 12;\"\n                onload=\"if(\'%5\' == \'\') this.parentElement.style.display=\'none\';\"><\/iframe>\n        <\/div>\n    <\/div>\n    <p id=\"textContainer\" style=\"line-height: 1.6; white-space: pre-wrap; margin-top: 12;\">%6\n    <\/p>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._infotext.ggUpdateText();
		player.addListener('changenode', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('varchanged_info_label_image', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('varchanged_info_label_video', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('varchanged_info_label_pdf', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('varchanged_info_label_current_text', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext.ggUpdateText();
		});
		el.appendChild(els);
		me._infotext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infotext.ggUpdatePosition=function (useTransition) {
		}
		me._infopanelvideohs.appendChild(me._infotext);
		me._infolabelvideo.appendChild(me._infopanelvideohs);
		el=me._hs0=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="hs";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : calc(50% - ((73px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((73px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs0.onclick=function (e) {
			player.setVariableValue('info_label_currently_active', true);
		}
		me._hs0.onmouseenter=function (e) {
			me._playbuttonvideo.style.transition='none';
			me._playbuttonvideo.ggParameter.sx=1.1;me._playbuttonvideo.ggParameter.sy=1.1;
			me._playbuttonvideo.style.transform=parameterToTransform(me._playbuttonvideo.ggParameter);
			skin.updateSize(me._playbuttonvideo);
			me.elementMouseOver['hs0']=true;
			me._hs_image_i_1_infolabel0.logicBlock_scaling();
			me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
		}
		me._hs0.onmouseleave=function (e) {
			me.elementMouseOver['hs0']=false;
			me._hs_image_i_1_infolabel0.logicBlock_scaling();
			me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
		}
		me._hs0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_i_1_infolabel0=document.createElement('div');
		el.ggId="hs_image_i_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.352941);';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_infolabel0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_infolabel0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs0'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_infolabel0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_infolabel0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_infolabel0.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_infolabel0.ggParameter.sx = 0.8;
					me._hs_image_i_1_infolabel0.ggParameter.sy = 0.8;
					me._hs_image_i_1_infolabel0.style.transform=parameterToTransform(me._hs_image_i_1_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel0);}, 550);
				}
				else {
					me._hs_image_i_1_infolabel0.ggParameter.sx = 0.5;
					me._hs_image_i_1_infolabel0.ggParameter.sy = 0.5;
					me._hs_image_i_1_infolabel0.style.transform=parameterToTransform(me._hs_image_i_1_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel0);}, 550);
				}
			}
		}
		me._hs_image_i_1_infolabel0.logicBlock_scaling();
		me._hs_image_i_1_infolabel0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hs0'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_infolabel0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_infolabel0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_infolabel0.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel0.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_infolabel0.style.borderColor="rgba(230,230,230,1)";
				}
				else {
					me._hs_image_i_1_infolabel0.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
		me._hs_image_i_1_infolabel0.ggUpdatePosition=function (useTransition) {
		}
		me._hs0.appendChild(me._hs_image_i_1_infolabel0);
		el=me._hs_image_animated_1_infolabel0=document.createElement('div');
		el.ggId="hs_image_animated_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_infolabel0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_infolabel0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_infolabel0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_infolabel0.ggParameter.sx = 0.8;
					me._hs_image_animated_1_infolabel0.ggParameter.sy = 0.8;
					me._hs_image_animated_1_infolabel0.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel0);}, 550);
				}
				else {
					me._hs_image_animated_1_infolabel0.ggParameter.sx = 0.5;
					me._hs_image_animated_1_infolabel0.ggParameter.sy = 0.5;
					me._hs_image_animated_1_infolabel0.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel0);}, 550);
				}
			}
		}
		me._hs_image_animated_1_infolabel0.logicBlock_scaling();
		me._hs_image_animated_1_infolabel0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_1_infolabel0'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_infolabel0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_infolabel0.style.visibility=(Number(me._hs_image_animated_1_infolabel0.style.opacity)>0||!me._hs_image_animated_1_infolabel0.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_infolabel0.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_infolabel0.style.visibility="hidden";
					me._hs_image_animated_1_infolabel0.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_infolabel0.logicBlock_visible();
		me._hs_image_animated_1_infolabel0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_infolabel0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_infolabel0.style.opacity == 0.0) { me._hs_image_animated_1_infolabel0.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_infolabel0.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_infolabel0.style.visibility=me._hs_image_animated_1_infolabel0.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_infolabel0.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_infolabel0.logicBlock_alpha();
		me._hs_image_animated_1_infolabel0.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel0']=true;
			me._hs_image_animated_1_infolabel0.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel0.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel0']=false;
			me._hs_image_animated_1_infolabel0.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel0.ggUpdatePosition=function (useTransition) {
		}
		me._hs0.appendChild(me._hs_image_animated_1_infolabel0);
		el=me._hs_image_animated_2_infolabel0=document.createElement('div');
		el.ggId="hs_image_animated_2_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_infolabel0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_infolabel0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_infolabel0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_infolabel0.ggParameter.sx = 0.8;
					me._hs_image_animated_2_infolabel0.ggParameter.sy = 0.8;
					me._hs_image_animated_2_infolabel0.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel0);}, 550);
				}
				else {
					me._hs_image_animated_2_infolabel0.ggParameter.sx = 1;
					me._hs_image_animated_2_infolabel0.ggParameter.sy = 1;
					me._hs_image_animated_2_infolabel0.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel0);}, 550);
				}
			}
		}
		me._hs_image_animated_2_infolabel0.logicBlock_scaling();
		me._hs_image_animated_2_infolabel0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_2_infolabel0'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_infolabel0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_infolabel0.style.visibility=(Number(me._hs_image_animated_2_infolabel0.style.opacity)>0||!me._hs_image_animated_2_infolabel0.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_infolabel0.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_infolabel0.style.visibility="hidden";
					me._hs_image_animated_2_infolabel0.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_infolabel0.logicBlock_visible();
		me._hs_image_animated_2_infolabel0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_infolabel0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_infolabel0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel0.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_infolabel0.style.visibility=me._hs_image_animated_2_infolabel0.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_infolabel0.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_infolabel0.style.opacity == 0.0) { me._hs_image_animated_2_infolabel0.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_infolabel0.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_infolabel0.logicBlock_alpha();
		me._hs_image_animated_2_infolabel0.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel0']=true;
			me._hs_image_animated_2_infolabel0.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel0.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel0']=false;
			me._hs_image_animated_2_infolabel0.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel0.ggUpdatePosition=function (useTransition) {
		}
		me._hs0.appendChild(me._hs_image_animated_2_infolabel0);
		el=me._playbuttonvideo=document.createElement('div');
		el.ggId="playButtonVideo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='width: 0; height: 0; border-top:6px solid transparent; border-bottom: 6px solid transparent; border-left: 7px solid #ff671f; cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._playbuttonvideo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._playbuttonvideo.ggUpdatePosition=function (useTransition) {
		}
		me._hs0.appendChild(me._playbuttonvideo);
		me._infolabelvideo.appendChild(me._hs0);
		el=me._infopanel=document.createElement('div');
		el.ggId="InfoPanel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : auto;';
		hs+='left : 36px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopanel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infopanel.ggUpdatePosition=function (useTransition) {
		}
		el=me._infotext2=document.createElement('div');
		els=me._infotext2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="infoText2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : fit-content;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='white-space: normal';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="white-space: normal";
		els.setAttribute('style',hs);
		me._infotext2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_image'))));
			params.push(player._(String(me.hotspot.id)));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_video'))));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_pdf'))));
			params.push(player._(String(player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_current_text'))));
			var hs = player._("<div\n    style=\"cursor: default; display: flex; justify-content: space-between; white-space: normal; align-items: center; padding: 16px; background-color: #2e2e2e; border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 0px;\">\n    <span style=\"font-size: 18px; font-weight: 600; color: rgb(224, 224, 224); padding-right: 15px;\">%1<\/span>\n    <span style=\"cursor: pointer; color: rgb(224, 224, 224); font-size: 16px;\">\n        <span id=\"enLang\" style=\"margin: 5px 10px; font-weight: normal;\"\n            onclick=\"pano.setVariableValue(\'info_label_language\', \'en\'); console.log(\'language set to en\')\">EN<\/span>\n        <span id=\"deLang\" style=\"margin: 5px 10px; font-weight: bold;\"\n            onclick=\"pano.setVariableValue(\'info_label_language\', \'de\'); console.log(\'language set to de\')\">DE<\/span>\n    <\/span>\n<\/div>\n<div\n    style=\"padding:16px; cursor: default; color: #1f1f1f; background-color: #e2e2e2; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;\">\n\n    <div style=\"margin-top: 12px;\">\n        <div id=\"imageContainer\"\n            style=\"width: 100%; margin: 0 5px; max-height: 330px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <img src=\"%2\"\n                onload=\"if(\'%2\' == \'\') this.parentElement.style.display=\'none\'; window.runVideoCheck(\'info_has_video\', \'%3\');\"\n                style=\"max-width: 100%; max-height: 310px; border-radius: 16px\">\n        <\/div>\n\n        <div id=\"videoContainer\"\n            style=\"width: 100%; margin: 0 5px; max-height: 430px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <video id=\"videoPlayer\" width=\"100%\" height=\"auto\" style=\"border-radius: 16px; aspect-ratio: 16 \/ 9;\"\n                controls>\n                <source src=\"%4\" type=\"video\/mp4\">\n                <p>Invalid Video Provided<\/p>\n            <\/video>\n        <\/div>\n\n        <div id=\"pdfContainer\"\n            style=\"width: 100%; margin: 0 5px; overflow: hidden; display: flex; justify-content: center; align-items: center;\">\n            <iframe src=\"%5\" type=\"application\/pdf\" width=\"100%\"\n                style=\"border-radius: 16px; aspect-ratio: 16 \/ 12;\"\n                onload=\"if(\'%5\' == \'\') this.parentElement.style.display=\'none\';\"><\/iframe>\n        <\/div>\n    <\/div>\n    <p id=\"textContainer\" style=\"line-height: 1.6; white-space: pre-wrap; margin-top: 12;\">%6\n    <\/p>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._infotext2.ggUpdateText();
		player.addListener('changenode', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('varchanged_info_label_image', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('varchanged_info_label_video', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('varchanged_info_label_pdf', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('varchanged_info_label_current_text', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._infotext2.ggUpdateText();
		});
		player.addListener('activehotspotchanged', function() {
			me._infotext2.ggUpdateText();
		});
		el.appendChild(els);
		me._infotext2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infotext2.ggUpdatePosition=function (useTransition) {
		}
		me._infopanel.appendChild(me._infotext2);
		me._infolabelvideo.appendChild(me._infopanel);
		me.elementMouseOver['infolabelvideo']=false;
		me.elementMouseOver['hs0']=false;
		me._hs_image_i_1_infolabel0.logicBlock_scaling();
		me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
		me._hs_image_animated_1_infolabel0.logicBlock_scaling();
		me._hs_image_animated_1_infolabel0.logicBlock_visible();
		me._hs_image_animated_1_infolabel0.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_1_infolabel0']=false;
		me._hs_image_animated_2_infolabel0.logicBlock_scaling();
		me._hs_image_animated_2_infolabel0.logicBlock_visible();
		me._hs_image_animated_2_infolabel0.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_2_infolabel0']=false;
			me.ggEvent_changenode=function() {
				me._hs_image_i_1_infolabel0.logicBlock_scaling();
				me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel0.logicBlock_scaling();
				me._hs_image_animated_1_infolabel0.logicBlock_visible();
				me._hs_image_animated_1_infolabel0.logicBlock_alpha();
				me._hs_image_animated_2_infolabel0.logicBlock_scaling();
				me._hs_image_animated_2_infolabel0.logicBlock_visible();
				me._hs_image_animated_2_infolabel0.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				player.setVariableValue('info_label_language', (navigator.language.startsWith("de") ? 'de' : 'en'));
				me._hs_image_i_1_infolabel0.logicBlock_scaling();
				me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel0.logicBlock_scaling();
				me._hs_image_animated_1_infolabel0.logicBlock_visible();
				me._hs_image_animated_1_infolabel0.logicBlock_alpha();
				me._hs_image_animated_2_infolabel0.logicBlock_scaling();
				me._hs_image_animated_2_infolabel0.logicBlock_visible();
				me._hs_image_animated_2_infolabel0.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_infolabel0.logicBlock_scaling();
				me._hs_image_i_1_infolabel0.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel0.logicBlock_visible();
				me._hs_image_animated_2_infolabel0.logicBlock_visible();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_infolabel0.logicBlock_visible();
				me._hs_image_animated_2_infolabel0.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_infolabel0.logicBlock_scaling();
				me._hs_image_animated_1_infolabel0.logicBlock_alpha();
				me._hs_image_animated_2_infolabel0.logicBlock_scaling();
				me._hs_image_animated_2_infolabel0.logicBlock_alpha();
			};
			me.ggEvent_varchanged_info_label_currently_active=function() {
				if (
					(
						((player.getVariableValue('info_label_currently_active') == false))
					)
				) {
					var flag=me._infopanelvideohs.ggOpacitiyActive;
					if (player.transitionsDisabled) {
						me._infopanelvideohs.style.transition='none';
					} else {
						me._infopanelvideohs.style.transition='all 250ms ease 0ms';
					}
					if (flag) {
						me._infopanelvideohs.style.opacity='0';
						me._infopanelvideohs.style.visibility='hidden';
					} else {
						me._infopanelvideohs.style.opacity='1';
						me._infopanelvideohs.style.visibility=me._infopanelvideohs.ggVisible?'inherit':'hidden';
					}
					me._infopanelvideohs.ggOpacitiyActive=!flag;
				}
				if (
					(
						((player.getVariableValue('info_label_currently_active') == true))
					)
				) {
					var flag=me._infopanelvideohs.ggOpacitiyActive;
					if (player.transitionsDisabled) {
						me._infopanelvideohs.style.transition='none';
					} else {
						me._infopanelvideohs.style.transition='all 250ms ease 0ms';
					}
					if (flag) {
						me._infopanelvideohs.style.opacity='0';
						me._infopanelvideohs.style.visibility='hidden';
					} else {
						me._infopanelvideohs.style.opacity='0';
						me._infopanelvideohs.style.visibility='hidden';
					}
					me._infopanelvideohs.ggOpacitiyActive=!flag;
				}
			};
			me.ggEvent_varchanged_info_label_language=function() {
				if (
					(
						((player.getVariableValue('info_label_language') == "de"))
					)
				) {
					player.setHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_current_text', player._(me.hotspot.description));
				}
				if (
					(
						((player.getVariableValue('info_label_language') == "en"))
					)
				) {
					player.setHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_current_text', player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'info_label_translation'));
				}
			};
			me.__div = me._infolabelvideo;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file.style.opacity == 0.0) { me._ht_video_file.style.visibility="hidden"; } }, 505);
					me._ht_video_file.style.opacity=0;
				}
				else {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha();
		me._ht_video_file.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_popup=document.createElement('div');
		el.ggId="ht_video_file_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_file_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_file_popup.style.width='600px';
					me._ht_video_file_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
				else {
					me._ht_video_file_popup.style.width='60px';
					me._ht_video_file_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
			}
		}
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup.style.visibility=me._ht_video_file_popup.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup.style.opacity == 0.0) { me._ht_video_file_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_file_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup.logicBlock_alpha();
		me._ht_video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller=document.createElement('div');
		el.ggId="video_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller_seekbar=document.createElement('div');
		me._video_file_controller_seekbar__playhead=document.createElement('div');
		me._video_file_controller_seekbar.mediaEl = null;
		me._video_file_controller_seekbar.fromBufferSource = false;
		me._video_file_controller_seekbar.ggMediaId = 'ht_video_file_popup_video';
		el.ggId="video_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_file_controller_seekbar || e.target == me._video_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_file_controller_seekbar.onmousedown = me._video_file_controller_seekbar.ontouchstart = me._video_file_controller_seekbar.mouseTouchHandling;
		me._video_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_file_controller_seekbar.ggMediaId);
			if (me._video_file_controller_seekbar.mediaEl) {
				me._video_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_file_popup_video');
				me._video_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				me._video_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_file_controller_seekbar.ggConnected) return;
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.mediaEl.readyState || (me._video_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_file_controller_seekbar.mediaEl.id)) {
					if (me._video_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_file_controller_seekbar.mediaEl.currentTime / me._video_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_file_controller_seekbar.appendChild(me._video_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_file_controller_seekbar.setAttribute('style', hs);
		me._video_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_file_controller_seekbar.ggIsActive=function() {
			if (me._video_file_controller_seekbar.mediaEl != null) {
				return (me._video_file_controller_seekbar.mediaEl.paused == false && me._video_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_seekbar.ggActivate=function () {
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggDeactivate=function () {
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_file_controller_seekbar.updatePlayback();
		}
		me._video_file_controller.appendChild(me._video_file_controller_seekbar);
		el=me._video_file_controller_button_pause=document.createElement('div');
		els=me._video_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgZmlsbD0iI0ZGRkZGRiIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0RGRTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._video_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_pause.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_file_popup_video");
			}
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
		}
		me._video_file_controller_button_pause.onmouseenter=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='hidden';
			me._video_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_pause']=true;
		}
		me._video_file_controller_button_pause.onmouseleave=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='inherit';
			me._video_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_pause']=false;
		}
		me._video_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_pause);
		el=me._video_file_controller_button_play=document.createElement('div');
		els=me._video_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgZmlsbD0iI0ZGRkZGRiIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0RGRTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._video_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_play.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_file_popup_video","1");
			}
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
		}
		me._video_file_controller_button_play.onmouseenter=function (e) {
			me._video_file_controller_button_play__img.style.visibility='hidden';
			me._video_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_play']=true;
		}
		me._video_file_controller_button_play.onmouseleave=function (e) {
			me._video_file_controller_button_play__img.style.visibility='inherit';
			me._video_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_play']=false;
		}
		me._video_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_play);
		me._ht_video_file_popup.appendChild(me._video_file_controller);
		el=me._ht_video_file_popup_title=document.createElement('div');
		els=me._ht_video_file_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_file_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_title);
		el=me._ht_video_file_popup_video=document.createElement('div');
		me._ht_video_file_popup_video.seekbars = [];
		me._ht_video_file_popup_video.seekbars.push('video_file_controller_seekbar');
		me._ht_video_file_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_file_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_file_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_file_popup_video.hasChildNodes()) {
				me._ht_video_file_popup_video.removeChild(me._ht_video_file_popup_video.lastChild);
			}
			if (me._ht_video_file_popup_video__vid) {
				me._ht_video_file_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_file_popup_video.ggVideoNotLoaded == false && me._ht_video_file_popup_video.ggDeactivate && player.isPlaying('ht_video_file_popup_video')) { me._ht_video_file_popup_video.ggDeactivate(); }
				me._ht_video_file_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_file_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_file_popup_video.ggVideoNotLoaded = false;
			me._ht_video_file_popup_video__vid=document.createElement('video');
			me._ht_video_file_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_file_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_file_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_file_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_file_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_file_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_file_popup_video__source=document.createElement('source');
			me._ht_video_file_popup_video__source.setAttribute('src', media);
			me._ht_video_file_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_file_popup_video__vid.setAttribute('style', ';');
			me._ht_video_file_popup_video__vid.style.outline = 'none';
			me._ht_video_file_popup_video__vid.appendChild(me._ht_video_file_popup_video__source);
			me._ht_video_file_popup_video.appendChild(me._ht_video_file_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_file_popup_video', me._ht_video_file_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_file_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_file_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_file_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_video.ggIsActive=function() {
			if (me._ht_video_file_popup_video__vid != null) {
				return (me._ht_video_file_popup_video__vid.paused == false && me._ht_video_file_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_popup_video.style.transition='';
				if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_popup_video.style.visibility=(Number(me._ht_video_file_popup_video.style.opacity)>0||!me._ht_video_file_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
						me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
					}
					me._ht_video_file_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_file_popup_video.style.visibility="hidden";
					me._ht_video_file_popup_video.ggInitMedia('');
					me._ht_video_file_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_file_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_file_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_file_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_file_popup_video","1");
			}
		}
		me._ht_video_file_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_video);
		me._ht_video_file.appendChild(me._ht_video_file_popup);
		el=me._ht_video_file_tooltip=document.createElement('div');
		els=me._ht_video_file_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_file_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_file_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_file_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_file_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_file_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_tooltip.style.visibility=me._ht_video_file_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_file_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_tooltip.style.opacity == 0.0) { me._ht_video_file_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_file_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_tooltip);
		el=me._ht_video_file_popup_close=document.createElement('div');
		els=me._ht_video_file_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojREZFMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTAsMGgxOHYxOEgwVjB6IiBjbGFzcz0ic3QwIi8+CiA8cGF0aCBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6IiBjbGFzcz0ic3QxIi8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup_close.style.visibility=me._ht_video_file_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup_close.style.opacity == 0.0) { me._ht_video_file_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_file_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup_close.logicBlock_alpha();
		me._ht_video_file_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_video.style.transition='none';
			} else {
				me._ht_video_file_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_video.style.opacity='0';
			me._ht_video_file_popup_video.style.visibility='hidden';
			me._ht_video_file_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_title.style.transition='none';
			} else {
				me._ht_video_file_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_title.style.opacity='0';
			me._ht_video_file_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_controller.style.transition='none';
			} else {
				me._video_file_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_controller.style.opacity='0';
			me._video_file_controller.style.visibility='hidden';
			me._ht_video_file.style.zIndex='-1';
		}
		me._ht_video_file_popup_close.onmouseenter=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='hidden';
			me._ht_video_file_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_popup_close']=true;
		}
		me._ht_video_file_popup_close.onmouseleave=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='inherit';
			me._ht_video_file_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_popup_close']=false;
		}
		me._ht_video_file_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_popup_close);
		el=me._ht_video_file_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_file_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file_icon_container.style.opacity == 0.0) { me._ht_video_file_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_file_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_file_icon_container.style.visibility=me._ht_video_file_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_file_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_file_icon_container.logicBlock_alpha();
		me._ht_video_file_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_video.style.transition='none';
				} else {
					me._ht_video_file_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_video.style.opacity='1';
				me._ht_video_file_popup_video.style.visibility=me._ht_video_file_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
					me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_title.style.transition='none';
				} else {
					me._ht_video_file_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_title.style.opacity='1';
				me._ht_video_file_popup_title.style.visibility=me._ht_video_file_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_file_controller.style.transition='none';
				} else {
					me._video_file_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_file_controller.style.opacity='1';
				me._video_file_controller.style.visibility=me._video_file_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file_popup_video.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
		}
		me._ht_video_file_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=true;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=false;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgZmlsbD0iIzNjM2MzYyIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon.style.transition='';
				if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon.style.visibility="hidden";
					me._ht_video_youtube_icon.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon.style.visibility=(Number(me._ht_video_youtube_icon.style.opacity)>0||!me._ht_video_youtube_icon.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon);
		el=me._ht_video_youtube_icon_active=document.createElement('div');
		els=me._ht_video_youtube_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active.style.transition='';
				if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active.style.visibility=(Number(me._ht_video_youtube_icon_active.style.opacity)>0||!me._ht_video_youtube_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active.style.visibility="hidden";
					me._ht_video_youtube_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active.logicBlock_visible();
		me._ht_video_youtube_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon_active);
		me._ht_video_file.appendChild(me._ht_video_file_icon_container);
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha();
		me.elementMouseOver['video_file_controller_button_pause']=false;
		me.elementMouseOver['video_file_controller_button_play']=false;
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.ggVideoSource = 'media/';
		me._ht_video_file_popup_video.ggVideoNotLoaded = true;
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_popup_close']=false;
		me._ht_video_file_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_icon_container']=false;
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._video_file_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_file_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_position();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_file_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_file_hotspots=function() {
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_file.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_button_extern(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._button_extern=document.createElement('div');
		el.ggId="Button Extern";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_extern.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._button_extern.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),"_blank");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button_extern.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button_extern.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['button_extern']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button_extern.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['button_extern']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button_extern.ggUpdatePosition=function (useTransition) {
		}
		el=me._buttonrezeption=document.createElement('div');
		els=me._buttonrezeption__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Button-Rezeption";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hs-child-farbe-background text-color";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((calc(200px + 2px) + 2px) / 2) + 0px);';
		hs+='opacity : 0.70002;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : calc(200px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 4px;';
		hs+='font-size: 12px;';
		hs+='font-weight: 300;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._buttonrezeption.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._buttonrezeption.ggUpdateText();
		player.addListener('changenode', function() {
			me._buttonrezeption.ggUpdateText();
		});
		el.appendChild(els);
		me._buttonrezeption.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._buttonrezeption.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._buttonrezeption.style.transition='none';
			} else {
				me._buttonrezeption.style.transition='all 500ms ease-out 0ms';
			}
			me._buttonrezeption.style.opacity='1';
			me._buttonrezeption.style.visibility=me._buttonrezeption.ggVisible?'inherit':'hidden';
			me.elementMouseOver['buttonrezeption']=true;
		}
		me._buttonrezeption.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._buttonrezeption.style.transition='none';
			} else {
				me._buttonrezeption.style.transition='all 500ms ease-out 0ms';
			}
			me._buttonrezeption.style.opacity='0.7';
			me._buttonrezeption.style.visibility=me._buttonrezeption.ggVisible?'inherit':'hidden';
			me.elementMouseOver['buttonrezeption']=false;
		}
		me._buttonrezeption.ggUpdatePosition=function (useTransition) {
		}
		me._button_extern.appendChild(me._buttonrezeption);
		me.elementMouseOver['button_extern']=false;
		me.elementMouseOver['buttonrezeption']=false;
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._buttonrezeption.ggParameter) {
					hs+=parameterToTransform(me._buttonrezeption.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*0.6 + 0) + ') ';
				me._buttonrezeption.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._button_extern;
	};
	function SkinHotspotClass_label_image_hs_open(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._label_image_hs_open=document.createElement('div');
		el.ggId="label_image_hs_open";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._label_image_hs_open.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._label_image_hs_open.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs_open.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs_open.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['label_image_hs_open']=true;
			me._hs_image_i_l0.logicBlock_scaling();
			me._hs_image_i_l0.logicBlock_bordercolor();
			me._nodeimage_1_s.logicBlock_scaling();
			me._nodeimage_1_s.logicBlock_angle();
			me._nodeimage_1_s.logicBlock_alpha();
			me._labelimage.logicBlock_scaling();
			me._labelimage.logicBlock_angle();
			me._labelimage.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs_open.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['label_image_hs_open']=false;
			me._hs_image_i_l0.logicBlock_scaling();
			me._hs_image_i_l0.logicBlock_bordercolor();
			me._nodeimage_1_s.logicBlock_scaling();
			me._nodeimage_1_s.logicBlock_angle();
			me._nodeimage_1_s.logicBlock_alpha();
			me._labelimage.logicBlock_scaling();
			me._labelimage.logicBlock_angle();
			me._labelimage.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs_open.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l0=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_l0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l0.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l0.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l0.style.transform=parameterToTransform(me._hs_image_animated_2_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l0);}, 550);
				}
				else {
					me._hs_image_animated_2_l0.ggParameter.sx = 1;
					me._hs_image_animated_2_l0.ggParameter.sy = 1;
					me._hs_image_animated_2_l0.style.transform=parameterToTransform(me._hs_image_animated_2_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l0);}, 550);
				}
			}
		}
		me._hs_image_animated_2_l0.logicBlock_scaling();
		me._hs_image_animated_2_l0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l0.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l0.style.visibility=(Number(me._hs_image_animated_2_l0.style.opacity)>0||!me._hs_image_animated_2_l0.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l0.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l0.style.visibility="hidden";
					me._hs_image_animated_2_l0.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l0.logicBlock_visible();
		me._hs_image_animated_2_l0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l0.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l0.style.visibility=me._hs_image_animated_2_l0.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l0.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l0.style.opacity == 0.0) { me._hs_image_animated_2_l0.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l0.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l0.logicBlock_alpha();
		me._hs_image_animated_2_l0.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs_open.appendChild(me._hs_image_animated_2_l0);
		el=me._hs_image_animated_1_l0=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l0.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l0.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l0.style.transform=parameterToTransform(me._hs_image_animated_1_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l0);}, 550);
				}
				else {
					me._hs_image_animated_1_l0.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l0.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l0.style.transform=parameterToTransform(me._hs_image_animated_1_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l0);}, 550);
				}
			}
		}
		me._hs_image_animated_1_l0.logicBlock_scaling();
		me._hs_image_animated_1_l0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l0.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l0.style.visibility=(Number(me._hs_image_animated_1_l0.style.opacity)>0||!me._hs_image_animated_1_l0.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l0.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l0.style.visibility="hidden";
					me._hs_image_animated_1_l0.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l0.logicBlock_visible();
		me._hs_image_animated_1_l0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l0.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l0.style.opacity == 0.0) { me._hs_image_animated_1_l0.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l0.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l0.style.visibility=me._hs_image_animated_1_l0.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l0.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l0.logicBlock_alpha();
		me._hs_image_animated_1_l0.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs_open.appendChild(me._hs_image_animated_1_l0);
		el=me._hs_image_i_l0=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_l0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l0.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l0.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l0.ggParameter.sx = 0.8;
					me._hs_image_i_l0.ggParameter.sy = 0.8;
					me._hs_image_i_l0.style.transform=parameterToTransform(me._hs_image_i_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l0);}, 550);
				}
				else {
					me._hs_image_i_l0.ggParameter.sx = 0.5;
					me._hs_image_i_l0.ggParameter.sy = 0.5;
					me._hs_image_i_l0.style.transform=parameterToTransform(me._hs_image_i_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l0);}, 550);
				}
			}
		}
		me._hs_image_i_l0.logicBlock_scaling();
		me._hs_image_i_l0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l0.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l0.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l0.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l0.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l0.logicBlock_bordercolor();
		me._hs_image_i_l0.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs_open.appendChild(me._hs_image_i_l0);
		el=me._nodeimage_1_s=document.createElement('div');
		els=me._nodeimage_1_s__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_s_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_s.ggParameter.sx = 3;
					me._nodeimage_1_s.ggParameter.sy = 3;
					me._nodeimage_1_s.style.transform=parameterToTransform(me._nodeimage_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s);}, 1050);
				}
				else {
					me._nodeimage_1_s.ggParameter.sx = 0;
					me._nodeimage_1_s.ggParameter.sy = 0;
					me._nodeimage_1_s.style.transform=parameterToTransform(me._nodeimage_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s);}, 1050);
				}
			}
		}
		me._nodeimage_1_s.logicBlock_scaling();
		me._nodeimage_1_s.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_s.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_s.ggParameter.a = 360;
					me._nodeimage_1_s.style.transform=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
				else {
					me._nodeimage_1_s.ggParameter.a = -360;
					me._nodeimage_1_s.style.transform=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
			}
		}
		me._nodeimage_1_s.logicBlock_angle();
		me._nodeimage_1_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link') == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_1_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_1_s.style.visibility=(Number(me._nodeimage_1_s.style.opacity)>0||!me._nodeimage_1_s.style.opacity)?'inherit':'hidden';
					me._nodeimage_1_s.ggVisible=true;
				}
				else {
					me._nodeimage_1_s.style.visibility="hidden";
					me._nodeimage_1_s.ggVisible=false;
				}
			}
		}
		me._nodeimage_1_s.logicBlock_visible();
		me._nodeimage_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_s.style.visibility=me._nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._nodeimage_1_s.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_s.style.opacity == 0.0) { me._nodeimage_1_s.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_s.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_s.logicBlock_alpha();
		me._nodeimage_1_s.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs_open.appendChild(me._nodeimage_1_s);
		el=me._label0=document.createElement('div');
		els=me._label0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="label";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='font-family: \"Encode Sans Condensed\", Roboto';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(227,9,23,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: .25rem .5rem;";
		els.setAttribute('style',hs);
		me._label0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._label0.ggUpdateText();
		player.addListener('changenode', function() {
			me._label0.ggUpdateText();
		});
		el.appendChild(els);
		me._label0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._label0.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs_open.appendChild(me._label0);
		el=me._labelimage=document.createElement('div');
		els=me._labelimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._labelimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._labelimage.ggSubElement.setAttribute('alt', player._(me._labelimage.ggAltText));
			me._labelimage.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._labelimage.ggText_untranslated = img;
			me._labelimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._labelimage.ggSubElement.style.width = '0px';
			me._labelimage.ggSubElement.style.height = '0px';
			me._labelimage.ggSubElement.src='';
			me._labelimage.ggSubElement.src=me._labelimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._labelimage.ggText != player._(me._labelimage.ggText_untranslated)) {
				me._labelimage.ggText = player._(me._labelimage.ggText_untranslated);
				me._labelimage.ggUpdateImage()
			}
		}
		player.addListener('', function() {
			me._labelimage.ggUpdateImagePlaceholder();
		});
		player.addListener('changenode', function() {
			me._labelimage.ggUpdateImagePlaceholder();
		});
		player.addListener('activehotspotchanged', function() {
			me._labelimage.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._labelimage.ggText != ""+player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link')+"") {
				me._labelimage.ggText=""+player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link')+"";
				me._labelimage.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="LabelImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._labelimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._labelimage.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._labelimage.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._labelimage.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._labelimage.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage.ggCurrentLogicStateScaling == 0) {
					me._labelimage.ggParameter.sx = 3;
					me._labelimage.ggParameter.sy = 3;
					me._labelimage.style.transform=parameterToTransform(me._labelimage.ggParameter);
					setTimeout(function() {skin.updateSize(me._labelimage);}, 1050);
				}
				else {
					me._labelimage.ggParameter.sx = 0;
					me._labelimage.ggParameter.sy = 0;
					me._labelimage.style.transform=parameterToTransform(me._labelimage.ggParameter);
					setTimeout(function() {skin.updateSize(me._labelimage);}, 1050);
				}
			}
		}
		me._labelimage.logicBlock_scaling();
		me._labelimage.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._labelimage.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._labelimage.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._labelimage.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage.ggCurrentLogicStateAngle == 0) {
					me._labelimage.ggParameter.a = 360;
					me._labelimage.style.transform=parameterToTransform(me._labelimage.ggParameter);
				}
				else {
					me._labelimage.ggParameter.a = -360;
					me._labelimage.style.transform=parameterToTransform(me._labelimage.ggParameter);
				}
			}
		}
		me._labelimage.logicBlock_angle();
		me._labelimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link') == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._labelimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._labelimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._labelimage.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage.ggCurrentLogicStateVisible == 0) {
					me._labelimage.style.visibility="hidden";
					me._labelimage.ggSubElement.src='';
					me._labelimage.ggVisible=false;
				}
				else {
					me._labelimage.style.visibility=(Number(me._labelimage.style.opacity)>0||!me._labelimage.style.opacity)?'inherit':'hidden';
					me._labelimage.ggSubElement.src=me._labelimage.ggText;
					me._labelimage.ggVisible=true;
				}
			}
		}
		me._labelimage.logicBlock_visible();
		me._labelimage.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_image_hs_open'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._labelimage.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._labelimage.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._labelimage.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage.ggCurrentLogicStateAlpha == 0) {
					me._labelimage.style.visibility=me._labelimage.ggVisible?'inherit':'hidden';
					me._labelimage.ggSubElement.src=me._labelimage.ggText;
					me._labelimage.style.opacity=1;
				}
				else {
					me._labelimage.style.visibility=me._labelimage.ggVisible?'inherit':'hidden';
					me._labelimage.ggSubElement.src=me._labelimage.ggText;
					me._labelimage.style.opacity=0.01;
				}
			}
		}
		me._labelimage.logicBlock_alpha();
		me._labelimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._labelimage.clientWidth;
			var parentHeight = me._labelimage.clientHeight;
			var img = me._labelimage__img;
			var aspectRatioDiv = me._labelimage.clientWidth / me._labelimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._labelimage.ggScrollbars || currentWidth < me._labelimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._labelimage.scrollLeft=currentWidth / 2 - me._labelimage.clientWidth / 2;
			}
			if (!me._labelimage.ggScrollbars || currentHeight < me._labelimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._labelimage.scrollTop=currentHeight / 2 - me._labelimage.clientHeight / 2;
			}
		}
		me._label_image_hs_open.appendChild(me._labelimage);
		me.elementMouseOver['label_image_hs_open']=false;
		me._hs_image_animated_2_l0.logicBlock_scaling();
		me._hs_image_animated_2_l0.logicBlock_visible();
		me._hs_image_animated_2_l0.logicBlock_alpha();
		me._hs_image_animated_1_l0.logicBlock_scaling();
		me._hs_image_animated_1_l0.logicBlock_visible();
		me._hs_image_animated_1_l0.logicBlock_alpha();
		me._hs_image_i_l0.logicBlock_scaling();
		me._hs_image_i_l0.logicBlock_bordercolor();
		me._nodeimage_1_s.logicBlock_scaling();
		me._nodeimage_1_s.logicBlock_angle();
		me._nodeimage_1_s.logicBlock_visible();
		me._nodeimage_1_s.logicBlock_alpha();
		me._labelimage.logicBlock_scaling();
		me._labelimage.logicBlock_angle();
		me._labelimage.logicBlock_visible();
		me._labelimage.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._nodeimage_1_s.logicBlock_visible();
				me._labelimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_l0.logicBlock_scaling();
				me._hs_image_animated_2_l0.logicBlock_visible();
				me._hs_image_animated_2_l0.logicBlock_alpha();
				me._hs_image_animated_1_l0.logicBlock_scaling();
				me._hs_image_animated_1_l0.logicBlock_visible();
				me._hs_image_animated_1_l0.logicBlock_alpha();
				me._hs_image_i_l0.logicBlock_scaling();
				me._hs_image_i_l0.logicBlock_bordercolor();
				me._nodeimage_1_s.logicBlock_scaling();
				me._nodeimage_1_s.logicBlock_angle();
				me._nodeimage_1_s.logicBlock_visible();
				me._nodeimage_1_s.logicBlock_alpha();
				me._labelimage.logicBlock_scaling();
				me._labelimage.logicBlock_angle();
				me._labelimage.logicBlock_visible();
				me._labelimage.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_l0.logicBlock_scaling();
				me._hs_image_animated_2_l0.logicBlock_visible();
				me._hs_image_animated_2_l0.logicBlock_alpha();
				me._hs_image_animated_1_l0.logicBlock_scaling();
				me._hs_image_animated_1_l0.logicBlock_visible();
				me._hs_image_animated_1_l0.logicBlock_alpha();
				me._hs_image_i_l0.logicBlock_scaling();
				me._hs_image_i_l0.logicBlock_bordercolor();
				me._nodeimage_1_s.logicBlock_scaling();
				me._nodeimage_1_s.logicBlock_angle();
				me._nodeimage_1_s.logicBlock_visible();
				me._nodeimage_1_s.logicBlock_alpha();
				me._labelimage.logicBlock_scaling();
				me._labelimage.logicBlock_angle();
				me._labelimage.logicBlock_visible();
				me._labelimage.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_l0.logicBlock_scaling();
				me._hs_image_i_l0.logicBlock_bordercolor();
				me._nodeimage_1_s.logicBlock_scaling();
				me._nodeimage_1_s.logicBlock_angle();
				me._nodeimage_1_s.logicBlock_alpha();
				me._labelimage.logicBlock_scaling();
				me._labelimage.logicBlock_angle();
				me._labelimage.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_l0.logicBlock_visible();
				me._hs_image_animated_1_l0.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_l0.logicBlock_scaling();
				me._hs_image_animated_2_l0.logicBlock_alpha();
				me._hs_image_animated_1_l0.logicBlock_scaling();
				me._hs_image_animated_1_l0.logicBlock_alpha();
			};
			me.ggEvent_varchanged_labelImage_link=function() {
				me._nodeimage_1_s.logicBlock_visible();
				me._labelimage.logicBlock_visible();
			};
			me.__div = me._label_image_hs_open;
	};
	function SkinHotspotClass_label_image_hs(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._label_image_hs=document.createElement('div');
		el.ggId="label_image_hs";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._label_image_hs.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._label_image_hs.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['label_image_hs']=true;
			me._hs_image_i_l1.logicBlock_scaling();
			me._hs_image_i_l1.logicBlock_bordercolor();
			me._nodeimage_1_s0.logicBlock_scaling();
			me._nodeimage_1_s0.logicBlock_angle();
			me._nodeimage_1_s0.logicBlock_alpha();
			me._label1.logicBlock_alpha();
			me._labelimage0.logicBlock_scaling();
			me._labelimage0.logicBlock_angle();
			me._labelimage0.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['label_image_hs']=false;
			me._hs_image_i_l1.logicBlock_scaling();
			me._hs_image_i_l1.logicBlock_bordercolor();
			me._nodeimage_1_s0.logicBlock_scaling();
			me._nodeimage_1_s0.logicBlock_angle();
			me._nodeimage_1_s0.logicBlock_alpha();
			me._label1.logicBlock_alpha();
			me._labelimage0.logicBlock_scaling();
			me._labelimage0.logicBlock_angle();
			me._labelimage0.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_image_hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l1=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_l1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l1.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l1.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l1.style.transform=parameterToTransform(me._hs_image_animated_2_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l1);}, 550);
				}
				else {
					me._hs_image_animated_2_l1.ggParameter.sx = 1;
					me._hs_image_animated_2_l1.ggParameter.sy = 1;
					me._hs_image_animated_2_l1.style.transform=parameterToTransform(me._hs_image_animated_2_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l1);}, 550);
				}
			}
		}
		me._hs_image_animated_2_l1.logicBlock_scaling();
		me._hs_image_animated_2_l1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l1.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l1.style.visibility=(Number(me._hs_image_animated_2_l1.style.opacity)>0||!me._hs_image_animated_2_l1.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l1.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l1.style.visibility="hidden";
					me._hs_image_animated_2_l1.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l1.logicBlock_visible();
		me._hs_image_animated_2_l1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l1.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l1.style.visibility=me._hs_image_animated_2_l1.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l1.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l1.style.opacity == 0.0) { me._hs_image_animated_2_l1.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l1.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l1.logicBlock_alpha();
		me._hs_image_animated_2_l1.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs.appendChild(me._hs_image_animated_2_l1);
		el=me._hs_image_animated_1_l1=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l1.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l1.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l1.style.transform=parameterToTransform(me._hs_image_animated_1_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l1);}, 550);
				}
				else {
					me._hs_image_animated_1_l1.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l1.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l1.style.transform=parameterToTransform(me._hs_image_animated_1_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l1);}, 550);
				}
			}
		}
		me._hs_image_animated_1_l1.logicBlock_scaling();
		me._hs_image_animated_1_l1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l1.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l1.style.visibility=(Number(me._hs_image_animated_1_l1.style.opacity)>0||!me._hs_image_animated_1_l1.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l1.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l1.style.visibility="hidden";
					me._hs_image_animated_1_l1.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l1.logicBlock_visible();
		me._hs_image_animated_1_l1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l1.style.opacity == 0.0) { me._hs_image_animated_1_l1.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l1.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l1.style.visibility=me._hs_image_animated_1_l1.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l1.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l1.logicBlock_alpha();
		me._hs_image_animated_1_l1.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs.appendChild(me._hs_image_animated_1_l1);
		el=me._hs_image_i_l1=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_l1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l1.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l1.ggParameter.sx = 0.8;
					me._hs_image_i_l1.ggParameter.sy = 0.8;
					me._hs_image_i_l1.style.transform=parameterToTransform(me._hs_image_i_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l1);}, 550);
				}
				else {
					me._hs_image_i_l1.ggParameter.sx = 0.5;
					me._hs_image_i_l1.ggParameter.sy = 0.5;
					me._hs_image_i_l1.style.transform=parameterToTransform(me._hs_image_i_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l1);}, 550);
				}
			}
		}
		me._hs_image_i_l1.logicBlock_scaling();
		me._hs_image_i_l1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l1.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l1.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l1.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l1.logicBlock_bordercolor();
		me._hs_image_i_l1.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs.appendChild(me._hs_image_i_l1);
		el=me._nodeimage_1_s0=document.createElement('div');
		els=me._nodeimage_1_s0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_s_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_s0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_s0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_s0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_s0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_s0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s0.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_s0.ggParameter.sx = 3;
					me._nodeimage_1_s0.ggParameter.sy = 3;
					me._nodeimage_1_s0.style.transform=parameterToTransform(me._nodeimage_1_s0.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s0);}, 1050);
				}
				else {
					me._nodeimage_1_s0.ggParameter.sx = 0;
					me._nodeimage_1_s0.ggParameter.sy = 0;
					me._nodeimage_1_s0.style.transform=parameterToTransform(me._nodeimage_1_s0.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s0);}, 1050);
				}
			}
		}
		me._nodeimage_1_s0.logicBlock_scaling();
		me._nodeimage_1_s0.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_s0.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_s0.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_s0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s0.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_s0.ggParameter.a = 360;
					me._nodeimage_1_s0.style.transform=parameterToTransform(me._nodeimage_1_s0.ggParameter);
				}
				else {
					me._nodeimage_1_s0.ggParameter.a = -360;
					me._nodeimage_1_s0.style.transform=parameterToTransform(me._nodeimage_1_s0.ggParameter);
				}
			}
		}
		me._nodeimage_1_s0.logicBlock_angle();
		me._nodeimage_1_s0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link') == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_1_s0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_1_s0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_1_s0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s0.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_1_s0.style.visibility=(Number(me._nodeimage_1_s0.style.opacity)>0||!me._nodeimage_1_s0.style.opacity)?'inherit':'hidden';
					me._nodeimage_1_s0.ggVisible=true;
				}
				else {
					me._nodeimage_1_s0.style.visibility="hidden";
					me._nodeimage_1_s0.ggVisible=false;
				}
			}
		}
		me._nodeimage_1_s0.logicBlock_visible();
		me._nodeimage_1_s0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_s0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_s0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_s0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s0.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_s0.style.visibility=me._nodeimage_1_s0.ggVisible?'inherit':'hidden';
					me._nodeimage_1_s0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_s0.style.opacity == 0.0) { me._nodeimage_1_s0.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_s0.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_s0.logicBlock_alpha();
		me._nodeimage_1_s0.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs.appendChild(me._nodeimage_1_s0);
		el=me._label1=document.createElement('div');
		els=me._label1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="label";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='font-family: Raleway, Roboto';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: .25rem .5rem;";
		els.setAttribute('style',hs);
		me._label1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._label1.ggUpdateText();
		player.addListener('changenode', function() {
			me._label1.ggUpdateText();
		});
		el.appendChild(els);
		me._label1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._label1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._label1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._label1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._label1.style.transition='opacity 300ms ease 0ms';
				if (me._label1.ggCurrentLogicStateAlpha == 0) {
					me._label1.style.visibility=me._label1.ggVisible?'inherit':'hidden';
					me._label1.style.opacity=0.85;
				}
				else {
					me._label1.style.visibility=me._label1.ggVisible?'inherit':'hidden';
					me._label1.style.opacity=0.001;
				}
			}
		}
		me._label1.logicBlock_alpha();
		me._label1.ggUpdatePosition=function (useTransition) {
		}
		me._label_image_hs.appendChild(me._label1);
		el=me._labelimage0=document.createElement('div');
		els=me._labelimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._labelimage0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._labelimage0.ggSubElement.setAttribute('alt', player._(me._labelimage0.ggAltText));
			me._labelimage0.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._labelimage0.ggText_untranslated = img;
			me._labelimage0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._labelimage0.ggSubElement.style.width = '0px';
			me._labelimage0.ggSubElement.style.height = '0px';
			me._labelimage0.ggSubElement.src='';
			me._labelimage0.ggSubElement.src=me._labelimage0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._labelimage0.ggText != player._(me._labelimage0.ggText_untranslated)) {
				me._labelimage0.ggText = player._(me._labelimage0.ggText_untranslated);
				me._labelimage0.ggUpdateImage()
			}
		}
		player.addListener('', function() {
			me._labelimage0.ggUpdateImagePlaceholder();
		});
		player.addListener('changenode', function() {
			me._labelimage0.ggUpdateImagePlaceholder();
		});
		player.addListener('activehotspotchanged', function() {
			me._labelimage0.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._labelimage0.ggText != ""+player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link')+"") {
				me._labelimage0.ggText=""+player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link')+"";
				me._labelimage0.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="LabelImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._labelimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._labelimage0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._labelimage0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._labelimage0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._labelimage0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage0.ggCurrentLogicStateScaling == 0) {
					me._labelimage0.ggParameter.sx = 3;
					me._labelimage0.ggParameter.sy = 3;
					me._labelimage0.style.transform=parameterToTransform(me._labelimage0.ggParameter);
					setTimeout(function() {skin.updateSize(me._labelimage0);}, 1050);
				}
				else {
					me._labelimage0.ggParameter.sx = 0;
					me._labelimage0.ggParameter.sy = 0;
					me._labelimage0.style.transform=parameterToTransform(me._labelimage0.ggParameter);
					setTimeout(function() {skin.updateSize(me._labelimage0);}, 1050);
				}
			}
		}
		me._labelimage0.logicBlock_scaling();
		me._labelimage0.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._labelimage0.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._labelimage0.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._labelimage0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage0.ggCurrentLogicStateAngle == 0) {
					me._labelimage0.ggParameter.a = 360;
					me._labelimage0.style.transform=parameterToTransform(me._labelimage0.ggParameter);
				}
				else {
					me._labelimage0.ggParameter.a = -360;
					me._labelimage0.style.transform=parameterToTransform(me._labelimage0.ggParameter);
				}
			}
		}
		me._labelimage0.logicBlock_angle();
		me._labelimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHotspotPropValue(player.getCurrentNode(), me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''), 'labelImage_link') == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._labelimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._labelimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._labelimage0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage0.ggCurrentLogicStateVisible == 0) {
					me._labelimage0.style.visibility="hidden";
					me._labelimage0.ggSubElement.src='';
					me._labelimage0.ggVisible=false;
				}
				else {
					me._labelimage0.style.visibility=(Number(me._labelimage0.style.opacity)>0||!me._labelimage0.style.opacity)?'inherit':'hidden';
					me._labelimage0.ggSubElement.src=me._labelimage0.ggText;
					me._labelimage0.ggVisible=true;
				}
			}
		}
		me._labelimage0.logicBlock_visible();
		me._labelimage0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_image_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._labelimage0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._labelimage0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._labelimage0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._labelimage0.ggCurrentLogicStateAlpha == 0) {
					me._labelimage0.style.visibility=me._labelimage0.ggVisible?'inherit':'hidden';
					me._labelimage0.ggSubElement.src=me._labelimage0.ggText;
					me._labelimage0.style.opacity=1;
				}
				else {
					me._labelimage0.style.visibility=me._labelimage0.ggVisible?'inherit':'hidden';
					me._labelimage0.ggSubElement.src=me._labelimage0.ggText;
					me._labelimage0.style.opacity=0.01;
				}
			}
		}
		me._labelimage0.logicBlock_alpha();
		me._labelimage0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._labelimage0.clientWidth;
			var parentHeight = me._labelimage0.clientHeight;
			var img = me._labelimage0__img;
			var aspectRatioDiv = me._labelimage0.clientWidth / me._labelimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._labelimage0.ggScrollbars || currentWidth < me._labelimage0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._labelimage0.scrollLeft=currentWidth / 2 - me._labelimage0.clientWidth / 2;
			}
			if (!me._labelimage0.ggScrollbars || currentHeight < me._labelimage0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._labelimage0.scrollTop=currentHeight / 2 - me._labelimage0.clientHeight / 2;
			}
		}
		me._label_image_hs.appendChild(me._labelimage0);
		me.elementMouseOver['label_image_hs']=false;
		me._hs_image_animated_2_l1.logicBlock_scaling();
		me._hs_image_animated_2_l1.logicBlock_visible();
		me._hs_image_animated_2_l1.logicBlock_alpha();
		me._hs_image_animated_1_l1.logicBlock_scaling();
		me._hs_image_animated_1_l1.logicBlock_visible();
		me._hs_image_animated_1_l1.logicBlock_alpha();
		me._hs_image_i_l1.logicBlock_scaling();
		me._hs_image_i_l1.logicBlock_bordercolor();
		me._nodeimage_1_s0.logicBlock_scaling();
		me._nodeimage_1_s0.logicBlock_angle();
		me._nodeimage_1_s0.logicBlock_visible();
		me._nodeimage_1_s0.logicBlock_alpha();
		me._label1.logicBlock_alpha();
		me._labelimage0.logicBlock_scaling();
		me._labelimage0.logicBlock_angle();
		me._labelimage0.logicBlock_visible();
		me._labelimage0.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._nodeimage_1_s0.logicBlock_visible();
				me._labelimage0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_l1.logicBlock_scaling();
				me._hs_image_animated_2_l1.logicBlock_visible();
				me._hs_image_animated_2_l1.logicBlock_alpha();
				me._hs_image_animated_1_l1.logicBlock_scaling();
				me._hs_image_animated_1_l1.logicBlock_visible();
				me._hs_image_animated_1_l1.logicBlock_alpha();
				me._hs_image_i_l1.logicBlock_scaling();
				me._hs_image_i_l1.logicBlock_bordercolor();
				me._nodeimage_1_s0.logicBlock_scaling();
				me._nodeimage_1_s0.logicBlock_angle();
				me._nodeimage_1_s0.logicBlock_visible();
				me._nodeimage_1_s0.logicBlock_alpha();
				me._label1.logicBlock_alpha();
				me._labelimage0.logicBlock_scaling();
				me._labelimage0.logicBlock_angle();
				me._labelimage0.logicBlock_visible();
				me._labelimage0.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_l1.logicBlock_scaling();
				me._hs_image_animated_2_l1.logicBlock_visible();
				me._hs_image_animated_2_l1.logicBlock_alpha();
				me._hs_image_animated_1_l1.logicBlock_scaling();
				me._hs_image_animated_1_l1.logicBlock_visible();
				me._hs_image_animated_1_l1.logicBlock_alpha();
				me._hs_image_i_l1.logicBlock_scaling();
				me._hs_image_i_l1.logicBlock_bordercolor();
				me._nodeimage_1_s0.logicBlock_scaling();
				me._nodeimage_1_s0.logicBlock_angle();
				me._nodeimage_1_s0.logicBlock_visible();
				me._nodeimage_1_s0.logicBlock_alpha();
				me._label1.logicBlock_alpha();
				me._labelimage0.logicBlock_scaling();
				me._labelimage0.logicBlock_angle();
				me._labelimage0.logicBlock_visible();
				me._labelimage0.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_l1.logicBlock_scaling();
				me._hs_image_i_l1.logicBlock_bordercolor();
				me._nodeimage_1_s0.logicBlock_scaling();
				me._nodeimage_1_s0.logicBlock_angle();
				me._nodeimage_1_s0.logicBlock_alpha();
				me._label1.logicBlock_alpha();
				me._labelimage0.logicBlock_scaling();
				me._labelimage0.logicBlock_angle();
				me._labelimage0.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_l1.logicBlock_visible();
				me._hs_image_animated_1_l1.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_l1.logicBlock_scaling();
				me._hs_image_animated_2_l1.logicBlock_alpha();
				me._hs_image_animated_1_l1.logicBlock_scaling();
				me._hs_image_animated_1_l1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_labelImage_link=function() {
				me._nodeimage_1_s0.logicBlock_visible();
				me._labelimage0.logicBlock_visible();
			};
			me.__div = me._label_image_hs;
	};
	function SkinHotspotClass_label_hs(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._label_hs=document.createElement('div');
		el.ggId="label_hs";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._label_hs.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._label_hs.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_hs.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_hs.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['label_hs']=true;
			me._hs_image_i_l2.logicBlock_scaling();
			me._hs_image_i_l2.logicBlock_bordercolor();
			me._nodeimage_1_l0.logicBlock_scaling();
			me._nodeimage_1_l0.logicBlock_angle();
			me._nodeimage_1_l0.logicBlock_alpha();
			me._label2.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_hs.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['label_hs']=false;
			me._hs_image_i_l2.logicBlock_scaling();
			me._hs_image_i_l2.logicBlock_bordercolor();
			me._nodeimage_1_l0.logicBlock_scaling();
			me._nodeimage_1_l0.logicBlock_angle();
			me._nodeimage_1_l0.logicBlock_alpha();
			me._label2.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._label_hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l2=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_l2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l2.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l2.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l2.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l2.style.transform=parameterToTransform(me._hs_image_animated_2_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l2);}, 550);
				}
				else {
					me._hs_image_animated_2_l2.ggParameter.sx = 1;
					me._hs_image_animated_2_l2.ggParameter.sy = 1;
					me._hs_image_animated_2_l2.style.transform=parameterToTransform(me._hs_image_animated_2_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l2);}, 550);
				}
			}
		}
		me._hs_image_animated_2_l2.logicBlock_scaling();
		me._hs_image_animated_2_l2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l2.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l2.style.visibility=(Number(me._hs_image_animated_2_l2.style.opacity)>0||!me._hs_image_animated_2_l2.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l2.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l2.style.visibility="hidden";
					me._hs_image_animated_2_l2.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l2.logicBlock_visible();
		me._hs_image_animated_2_l2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l2.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l2.style.visibility=me._hs_image_animated_2_l2.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l2.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l2.style.opacity == 0.0) { me._hs_image_animated_2_l2.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l2.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l2.logicBlock_alpha();
		me._hs_image_animated_2_l2.ggUpdatePosition=function (useTransition) {
		}
		me._label_hs.appendChild(me._hs_image_animated_2_l2);
		el=me._hs_image_animated_1_l2=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l2.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l2.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l2.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l2.style.transform=parameterToTransform(me._hs_image_animated_1_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l2);}, 550);
				}
				else {
					me._hs_image_animated_1_l2.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l2.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l2.style.transform=parameterToTransform(me._hs_image_animated_1_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l2);}, 550);
				}
			}
		}
		me._hs_image_animated_1_l2.logicBlock_scaling();
		me._hs_image_animated_1_l2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l2.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l2.style.visibility=(Number(me._hs_image_animated_1_l2.style.opacity)>0||!me._hs_image_animated_1_l2.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l2.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l2.style.visibility="hidden";
					me._hs_image_animated_1_l2.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l2.logicBlock_visible();
		me._hs_image_animated_1_l2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l2.style.opacity == 0.0) { me._hs_image_animated_1_l2.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l2.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l2.style.visibility=me._hs_image_animated_1_l2.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l2.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l2.logicBlock_alpha();
		me._hs_image_animated_1_l2.ggUpdatePosition=function (useTransition) {
		}
		me._label_hs.appendChild(me._hs_image_animated_1_l2);
		el=me._hs_image_i_l2=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_l2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l2.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l2.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l2.ggParameter.sx = 0.8;
					me._hs_image_i_l2.ggParameter.sy = 0.8;
					me._hs_image_i_l2.style.transform=parameterToTransform(me._hs_image_i_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l2);}, 550);
				}
				else {
					me._hs_image_i_l2.ggParameter.sx = 0.5;
					me._hs_image_i_l2.ggParameter.sy = 0.5;
					me._hs_image_i_l2.style.transform=parameterToTransform(me._hs_image_i_l2.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l2);}, 550);
				}
			}
		}
		me._hs_image_i_l2.logicBlock_scaling();
		me._hs_image_i_l2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l2.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l2.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l2.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l2.logicBlock_bordercolor();
		me._hs_image_i_l2.ggUpdatePosition=function (useTransition) {
		}
		me._label_hs.appendChild(me._hs_image_i_l2);
		el=me._nodeimage_1_l0=document.createElement('div');
		els=me._nodeimage_1_l0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_l0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_l0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_l0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_l0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_l0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l0.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_l0.ggParameter.sx = 3;
					me._nodeimage_1_l0.ggParameter.sy = 3;
					me._nodeimage_1_l0.style.transform=parameterToTransform(me._nodeimage_1_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l0);}, 1050);
				}
				else {
					me._nodeimage_1_l0.ggParameter.sx = 0;
					me._nodeimage_1_l0.ggParameter.sy = 0;
					me._nodeimage_1_l0.style.transform=parameterToTransform(me._nodeimage_1_l0.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l0);}, 1050);
				}
			}
		}
		me._nodeimage_1_l0.logicBlock_scaling();
		me._nodeimage_1_l0.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_l0.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_l0.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_l0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l0.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_l0.ggParameter.a = 360;
					me._nodeimage_1_l0.style.transform=parameterToTransform(me._nodeimage_1_l0.ggParameter);
				}
				else {
					me._nodeimage_1_l0.ggParameter.a = -360;
					me._nodeimage_1_l0.style.transform=parameterToTransform(me._nodeimage_1_l0.ggParameter);
				}
			}
		}
		me._nodeimage_1_l0.logicBlock_angle();
		me._nodeimage_1_l0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_l0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_l0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_l0.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l0.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_l0.style.visibility=me._nodeimage_1_l0.ggVisible?'inherit':'hidden';
					me._nodeimage_1_l0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_l0.style.opacity == 0.0) { me._nodeimage_1_l0.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_l0.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_l0.logicBlock_alpha();
		me._nodeimage_1_l0.ggUpdatePosition=function (useTransition) {
		}
		me._label_hs.appendChild(me._nodeimage_1_l0);
		el=me._label2=document.createElement('div');
		els=me._label2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="label";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='font-family: Raleway, Roboto';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._label2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._label2.ggUpdateText();
		player.addListener('changenode', function() {
			me._label2.ggUpdateText();
		});
		el.appendChild(els);
		me._label2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._label2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['label_hs'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._label2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._label2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._label2.style.transition='opacity 300ms ease 0ms';
				if (me._label2.ggCurrentLogicStateAlpha == 0) {
					me._label2.style.visibility=me._label2.ggVisible?'inherit':'hidden';
					me._label2.style.opacity=1;
				}
				else {
					me._label2.style.visibility=me._label2.ggVisible?'inherit':'hidden';
					me._label2.style.opacity=0.001;
				}
			}
		}
		me._label2.logicBlock_alpha();
		me._label2.ggUpdatePosition=function (useTransition) {
		}
		me._label_hs.appendChild(me._label2);
		me.elementMouseOver['label_hs']=false;
		me._hs_image_animated_2_l2.logicBlock_scaling();
		me._hs_image_animated_2_l2.logicBlock_visible();
		me._hs_image_animated_2_l2.logicBlock_alpha();
		me._hs_image_animated_1_l2.logicBlock_scaling();
		me._hs_image_animated_1_l2.logicBlock_visible();
		me._hs_image_animated_1_l2.logicBlock_alpha();
		me._hs_image_i_l2.logicBlock_scaling();
		me._hs_image_i_l2.logicBlock_bordercolor();
		me._nodeimage_1_l0.logicBlock_scaling();
		me._nodeimage_1_l0.logicBlock_angle();
		me._nodeimage_1_l0.logicBlock_alpha();
		me._label2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_l2.logicBlock_scaling();
				me._hs_image_animated_2_l2.logicBlock_visible();
				me._hs_image_animated_2_l2.logicBlock_alpha();
				me._hs_image_animated_1_l2.logicBlock_scaling();
				me._hs_image_animated_1_l2.logicBlock_visible();
				me._hs_image_animated_1_l2.logicBlock_alpha();
				me._hs_image_i_l2.logicBlock_scaling();
				me._hs_image_i_l2.logicBlock_bordercolor();
				me._nodeimage_1_l0.logicBlock_scaling();
				me._nodeimage_1_l0.logicBlock_angle();
				me._nodeimage_1_l0.logicBlock_alpha();
				me._label2.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_l2.logicBlock_scaling();
				me._hs_image_animated_2_l2.logicBlock_visible();
				me._hs_image_animated_2_l2.logicBlock_alpha();
				me._hs_image_animated_1_l2.logicBlock_scaling();
				me._hs_image_animated_1_l2.logicBlock_visible();
				me._hs_image_animated_1_l2.logicBlock_alpha();
				me._hs_image_i_l2.logicBlock_scaling();
				me._hs_image_i_l2.logicBlock_bordercolor();
				me._nodeimage_1_l0.logicBlock_scaling();
				me._nodeimage_1_l0.logicBlock_angle();
				me._nodeimage_1_l0.logicBlock_alpha();
				me._label2.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_animated_2_l2.logicBlock_scaling();
				me._hs_image_animated_2_l2.logicBlock_visible();
				me._hs_image_animated_1_l2.logicBlock_scaling();
				me._hs_image_animated_1_l2.logicBlock_visible();
				me._hs_image_i_l2.logicBlock_scaling();
				me._hs_image_i_l2.logicBlock_bordercolor();
				me._nodeimage_1_l0.logicBlock_scaling();
				me._nodeimage_1_l0.logicBlock_angle();
				me._nodeimage_1_l0.logicBlock_alpha();
				me._label2.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_l2.logicBlock_visible();
				me._hs_image_animated_1_l2.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_l2.logicBlock_scaling();
				me._hs_image_animated_2_l2.logicBlock_alpha();
				me._hs_image_animated_1_l2.logicBlock_scaling();
				me._hs_image_animated_1_l2.logicBlock_alpha();
			};
			me.__div = me._label_hs;
	};
	function SkinHotspotClass_infolabel(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infolabel=document.createElement('div');
		el.ggId="infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabel.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infolabel.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['infolabel']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel.onmousedown=function (e) {
			if (
				(
					((player.getHasTouch() == true))
				)
			) {
				var flag=me._infopanel0.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._infopanel0.style.transition='none';
				} else {
					me._infopanel0.style.transition='all 1000ms ease 0ms';
				}
				if (flag) {
					me._infopanel0.style.opacity='0';
					me._infopanel0.style.visibility='hidden';
				} else {
					me._infopanel0.style.opacity='1';
					me._infopanel0.style.visibility=me._infopanel0.ggVisible?'inherit':'hidden';
				}
				me._infopanel0.ggOpacitiyActive=!flag;
			}
		}
		me._infolabel.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._infopanel0.style.transition='none';
				} else {
					me._infopanel0.style.transition='all 1000ms ease 0ms';
				}
				me._infopanel0.style.opacity='0';
				me._infopanel0.style.visibility='hidden';
			}
			me.elementMouseOver['infolabel']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['infolabel']) {
				if (
					(
						((player.getHasTouch() == false))
					)
				) {
					if (player.transitionsDisabled) {
						me._infopanel0.style.transition='none';
					} else {
						me._infopanel0.style.transition='all 1000ms ease 0ms';
					}
					me._infopanel0.style.opacity='1';
					me._infopanel0.style.visibility=me._infopanel0.ggVisible?'inherit':'hidden';
				}
			}
		}
		me._infolabel.ggUpdatePosition=function (useTransition) {
		}
		el=me._infopanel0=document.createElement('div');
		el.ggId="InfoPanel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container infoLabelTextContainer";
		el.ggType='container';
		hs ='';
		hs+='height : auto;';
		hs+='left : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopanel0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infopanel0.ggUpdatePosition=function (useTransition) {
		}
		el=me._infoheadline=document.createElement('div');
		els=me._infoheadline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="infoHeadline";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='position:relative !important;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._infoheadline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._infoheadline.ggUpdateText();
		player.addListener('changenode', function() {
			me._infoheadline.ggUpdateText();
		});
		el.appendChild(els);
		me._infoheadline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infoheadline.ggUpdatePosition=function (useTransition) {
		}
		me._infopanel0.appendChild(me._infoheadline);
		el=me._infotext0=document.createElement('div');
		els=me._infotext0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="infoText";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text infoLabelTextContainer";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='position:relative !important; font-size: 1.5rem;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		hs+="display:flex; flex-wrap:wrap; letter-spacing:.02rem; font-weight: 500; line-height: 1.2;";
		els.setAttribute('style',hs);
		me._infotext0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._infotext0.ggUpdateText();
		player.addListener('changenode', function() {
			me._infotext0.ggUpdateText();
		});
		el.appendChild(els);
		me._infotext0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infotext0.ggUpdatePosition=function (useTransition) {
		}
		me._infopanel0.appendChild(me._infotext0);
		me._infolabel.appendChild(me._infopanel0);
		el=me._hs1=document.createElement('div');
		el.ggId="hs";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs1.onmouseenter=function (e) {
			me.elementMouseOver['hs1']=true;
			me._hs_image_i_1_infolabel1.logicBlock_scaling();
			me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
		}
		me._hs1.onmouseleave=function (e) {
			me.elementMouseOver['hs1']=false;
			me._hs_image_i_1_infolabel1.logicBlock_scaling();
			me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
		}
		me._hs1.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_i_1_infolabel1=document.createElement('div');
		el.ggId="hs_image_i_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 6px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 12px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 12px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_infolabel1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_infolabel1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs1'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_infolabel1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_infolabel1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_infolabel1.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_infolabel1.ggParameter.sx = 0.8;
					me._hs_image_i_1_infolabel1.ggParameter.sy = 0.8;
					me._hs_image_i_1_infolabel1.style.transform=parameterToTransform(me._hs_image_i_1_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel1);}, 550);
				}
				else {
					me._hs_image_i_1_infolabel1.ggParameter.sx = 0.5;
					me._hs_image_i_1_infolabel1.ggParameter.sy = 0.5;
					me._hs_image_i_1_infolabel1.style.transform=parameterToTransform(me._hs_image_i_1_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel1);}, 550);
				}
			}
		}
		me._hs_image_i_1_infolabel1.logicBlock_scaling();
		me._hs_image_i_1_infolabel1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hs1'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_infolabel1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_infolabel1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_infolabel1.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel1.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_infolabel1.style.borderColor="rgba(230,230,230,1)";
				}
				else {
					me._hs_image_i_1_infolabel1.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
		me._hs_image_i_1_infolabel1.ggUpdatePosition=function (useTransition) {
		}
		me._hs1.appendChild(me._hs_image_i_1_infolabel1);
		el=me._i0=document.createElement('div');
		els=me._i0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="i";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._i0.ggUpdateText=function() {
			var params = [];
			var hs = player._("i", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._i0.ggUpdateText();
		el.appendChild(els);
		me._i0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i0.ggUpdatePosition=function (useTransition) {
		}
		me._hs1.appendChild(me._i0);
		el=me._hs_image_animated_1_infolabel1=document.createElement('div');
		el.ggId="hs_image_animated_1_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_infolabel1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_infolabel1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_infolabel1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_infolabel1.ggParameter.sx = 0.8;
					me._hs_image_animated_1_infolabel1.ggParameter.sy = 0.8;
					me._hs_image_animated_1_infolabel1.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel1);}, 550);
				}
				else {
					me._hs_image_animated_1_infolabel1.ggParameter.sx = 0.5;
					me._hs_image_animated_1_infolabel1.ggParameter.sy = 0.5;
					me._hs_image_animated_1_infolabel1.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel1);}, 550);
				}
			}
		}
		me._hs_image_animated_1_infolabel1.logicBlock_scaling();
		me._hs_image_animated_1_infolabel1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_1_infolabel1'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_infolabel1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_infolabel1.style.visibility=(Number(me._hs_image_animated_1_infolabel1.style.opacity)>0||!me._hs_image_animated_1_infolabel1.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_infolabel1.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_infolabel1.style.visibility="hidden";
					me._hs_image_animated_1_infolabel1.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_infolabel1.logicBlock_visible();
		me._hs_image_animated_1_infolabel1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_infolabel1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_infolabel1.style.opacity == 0.0) { me._hs_image_animated_1_infolabel1.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_infolabel1.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_infolabel1.style.visibility=me._hs_image_animated_1_infolabel1.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_infolabel1.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_infolabel1.logicBlock_alpha();
		me._hs_image_animated_1_infolabel1.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel1']=true;
			me._hs_image_animated_1_infolabel1.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel1.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel1']=false;
			me._hs_image_animated_1_infolabel1.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel1.ggUpdatePosition=function (useTransition) {
		}
		me._hs1.appendChild(me._hs_image_animated_1_infolabel1);
		el=me._hs_image_animated_2_infolabel1=document.createElement('div');
		el.ggId="hs_image_animated_2_infoLabel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_infolabel1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_infolabel1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_infolabel1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_infolabel1.ggParameter.sx = 0.8;
					me._hs_image_animated_2_infolabel1.ggParameter.sy = 0.8;
					me._hs_image_animated_2_infolabel1.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel1);}, 550);
				}
				else {
					me._hs_image_animated_2_infolabel1.ggParameter.sx = 1;
					me._hs_image_animated_2_infolabel1.ggParameter.sy = 1;
					me._hs_image_animated_2_infolabel1.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel1.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel1);}, 550);
				}
			}
		}
		me._hs_image_animated_2_infolabel1.logicBlock_scaling();
		me._hs_image_animated_2_infolabel1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_2_infolabel1'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_infolabel1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_infolabel1.style.visibility=(Number(me._hs_image_animated_2_infolabel1.style.opacity)>0||!me._hs_image_animated_2_infolabel1.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_infolabel1.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_infolabel1.style.visibility="hidden";
					me._hs_image_animated_2_infolabel1.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_infolabel1.logicBlock_visible();
		me._hs_image_animated_2_infolabel1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_infolabel1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_infolabel1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel1.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_infolabel1.style.visibility=me._hs_image_animated_2_infolabel1.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_infolabel1.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_infolabel1.style.opacity == 0.0) { me._hs_image_animated_2_infolabel1.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_infolabel1.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_infolabel1.logicBlock_alpha();
		me._hs_image_animated_2_infolabel1.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel1']=true;
			me._hs_image_animated_2_infolabel1.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel1.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel1']=false;
			me._hs_image_animated_2_infolabel1.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel1.ggUpdatePosition=function (useTransition) {
		}
		me._hs1.appendChild(me._hs_image_animated_2_infolabel1);
		me._infolabel.appendChild(me._hs1);
		me.elementMouseOver['infolabel']=false;
		me.elementMouseOver['hs1']=false;
		me._hs_image_i_1_infolabel1.logicBlock_scaling();
		me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
		me._hs_image_animated_1_infolabel1.logicBlock_scaling();
		me._hs_image_animated_1_infolabel1.logicBlock_visible();
		me._hs_image_animated_1_infolabel1.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_1_infolabel1']=false;
		me._hs_image_animated_2_infolabel1.logicBlock_scaling();
		me._hs_image_animated_2_infolabel1.logicBlock_visible();
		me._hs_image_animated_2_infolabel1.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_2_infolabel1']=false;
			me.ggEvent_changenode=function() {
				me._hs_image_i_1_infolabel1.logicBlock_scaling();
				me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel1.logicBlock_scaling();
				me._hs_image_animated_1_infolabel1.logicBlock_visible();
				me._hs_image_animated_1_infolabel1.logicBlock_alpha();
				me._hs_image_animated_2_infolabel1.logicBlock_scaling();
				me._hs_image_animated_2_infolabel1.logicBlock_visible();
				me._hs_image_animated_2_infolabel1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_i_1_infolabel1.logicBlock_scaling();
				me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel1.logicBlock_scaling();
				me._hs_image_animated_1_infolabel1.logicBlock_visible();
				me._hs_image_animated_1_infolabel1.logicBlock_alpha();
				me._hs_image_animated_2_infolabel1.logicBlock_scaling();
				me._hs_image_animated_2_infolabel1.logicBlock_visible();
				me._hs_image_animated_2_infolabel1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_infolabel1.logicBlock_scaling();
				me._hs_image_i_1_infolabel1.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel1.logicBlock_visible();
				me._hs_image_animated_2_infolabel1.logicBlock_visible();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_infolabel1.logicBlock_visible();
				me._hs_image_animated_2_infolabel1.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_infolabel1.logicBlock_scaling();
				me._hs_image_animated_1_infolabel1.logicBlock_alpha();
				me._hs_image_animated_2_infolabel1.logicBlock_scaling();
				me._hs_image_animated_2_infolabel1.logicBlock_alpha();
			};
			me.hotspotTimerEvent=function() {
				me._infolabel.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._infolabel;
	};
	function SkinHotspotClass_patch_group_switcher(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._patch_group_switcher=document.createElement('div');
		el.ggId="patch_group_switcher";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch_group_switcher.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._patch_group_switcher.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group_switcher.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group_switcher.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['patch_group_switcher']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group_switcher.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['patch_group_switcher']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch_group_switcher.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 1px solid rgba(0,0,0,0.588235);';
		hs+='border-radius : 4px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((auto + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('patch_group_label_inactive', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		player.addListener('varchanged_patch_group_label_inactive', function() {
			me._text_5.ggUpdateText();
		});
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['text_5'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._text_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._text_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._text_5.style.transition='background-color 250ms ease 0ms';
				if (me._text_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._text_5.style.backgroundColor="rgba(0,0,0,0.117647)";
				}
				else {
					me._text_5.style.backgroundColor="rgba(0,0,0,0.196078)";
				}
			}
		}
		me._text_5.logicBlock_backgroundcolor();
		me._text_5.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('patch_group_open') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_5.ggCurrentLogicStateText != newLogicStateText) {
				me._text_5.ggCurrentLogicStateText = newLogicStateText;
				me._text_5.style.transition='background-color 250ms ease 0ms';
				if (me._text_5.ggCurrentLogicStateText == 0) {
					if (me._text_5.ggUpdateText) {
					me._text_5.ggUpdateText=function() {
						var params = [];
						params.push(player._(String(player.getVariableValue('patch_group_label_active', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_5.ggUpdateText();
					} else {
						if (me._text_5.ggUpdatePosition) me._text_5.ggUpdatePosition();
					}
				}
				else {
					if (me._text_5.ggUpdateText) {
					me._text_5.ggUpdateText=function() {
						var params = [];
						params.push(player._(String(player.getVariableValue('patch_group_label_inactive', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_5.ggUpdateText();
					} else {
						if (me._text_5.ggUpdatePosition) me._text_5.ggUpdatePosition();
					}
				}
			}
		}
		me._text_5.logicBlock_text();
		me._text_5.onclick=function (e) {
			player.setVariableValue('patch_group_open', !player.getVariableValue('patch_group_open'));
		}
		me._text_5.onmouseenter=function (e) {
			me.elementMouseOver['text_5']=true;
			me._text_5.logicBlock_backgroundcolor();
		}
		me._text_5.onmouseleave=function (e) {
			me.elementMouseOver['text_5']=false;
			me._text_5.logicBlock_backgroundcolor();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._patch_group_switcher.appendChild(me._text_5);
		me.elementMouseOver['patch_group_switcher']=false;
		me._text_5.logicBlock_backgroundcolor();
		me._text_5.logicBlock_text();
		me.elementMouseOver['text_5']=false;
			me.ggEvent_changenode=function() {
				me._text_5.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._text_5.logicBlock_text();
			};
			me.ggEvent_varchanged_patch_group_open=function() {
				me._text_5.logicBlock_text();
			};
			me.__div = me._patch_group_switcher;
	};
	function SkinHotspotClass_patch(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._patch=document.createElement('div');
		el.ggId="patch";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._patch.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['patch']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['patch']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._patch.ggUpdatePosition=function (useTransition) {
		}
		el=me._patch_switcher_customimage=document.createElement('div');
		els=me._patch_switcher_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._patch_switcher_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._patch_switcher_customimage.ggSubElement.setAttribute('alt', player._(me._patch_switcher_customimage.ggAltText));
			me._patch_switcher_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._patch_switcher_customimage.ggText_untranslated = img;
			me._patch_switcher_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._patch_switcher_customimage.ggSubElement.style.width = '0px';
			me._patch_switcher_customimage.ggSubElement.style.height = '0px';
			me._patch_switcher_customimage.ggSubElement.src='';
			me._patch_switcher_customimage.ggSubElement.src=me._patch_switcher_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._patch_switcher_customimage.ggText != player._(me._patch_switcher_customimage.ggText_untranslated)) {
				me._patch_switcher_customimage.ggText = player._(me._patch_switcher_customimage.ggText_untranslated);
				me._patch_switcher_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="patch_switcher_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._patch_switcher_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._patch_switcher_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._patch_switcher_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._patch_switcher_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._patch_switcher_customimage.style.transition='opacity 200ms ease 0ms';
				if (me._patch_switcher_customimage.ggCurrentLogicStateVisible == 0) {
					me._patch_switcher_customimage.style.visibility="hidden";
					me._patch_switcher_customimage.ggSubElement.src='';
					me._patch_switcher_customimage.ggVisible=false;
				}
				else {
					me._patch_switcher_customimage.style.visibility=(Number(me._patch_switcher_customimage.style.opacity)>0||!me._patch_switcher_customimage.style.opacity)?'inherit':'hidden';
					me._patch_switcher_customimage.ggSubElement.src=me._patch_switcher_customimage.ggText;
					me._patch_switcher_customimage.ggVisible=true;
				}
			}
		}
		me._patch_switcher_customimage.logicBlock_visible();
		me._patch_switcher_customimage.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['patch_switcher_customimage'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._patch_switcher_customimage.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._patch_switcher_customimage.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._patch_switcher_customimage.style.transition='opacity 200ms ease 0ms';
				if (me._patch_switcher_customimage.ggCurrentLogicStateAlpha == 0) {
					me._patch_switcher_customimage.style.visibility=me._patch_switcher_customimage.ggVisible?'inherit':'hidden';
					me._patch_switcher_customimage.ggSubElement.src=me._patch_switcher_customimage.ggText;
					me._patch_switcher_customimage.style.opacity=1;
				}
				else {
					me._patch_switcher_customimage.style.visibility=me._patch_switcher_customimage.ggVisible?'inherit':'hidden';
					me._patch_switcher_customimage.ggSubElement.src=me._patch_switcher_customimage.ggText;
					me._patch_switcher_customimage.style.opacity=0.01;
				}
			}
		}
		me._patch_switcher_customimage.logicBlock_alpha();
		me._patch_switcher_customimage.onmouseenter=function (e) {
			me.elementMouseOver['patch_switcher_customimage']=true;
			me._patch_switcher_customimage.logicBlock_alpha();
		}
		me._patch_switcher_customimage.onmouseleave=function (e) {
			me.elementMouseOver['patch_switcher_customimage']=false;
			me._patch_switcher_customimage.logicBlock_alpha();
		}
		me._patch_switcher_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._patch_switcher_customimage.clientWidth;
			var parentHeight = me._patch_switcher_customimage.clientHeight;
			var img = me._patch_switcher_customimage__img;
			var aspectRatioDiv = me._patch_switcher_customimage.clientWidth / me._patch_switcher_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._patch_switcher_customimage.ggScrollbars || currentWidth < me._patch_switcher_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._patch_switcher_customimage.scrollLeft=currentWidth / 2 - me._patch_switcher_customimage.clientWidth / 2;
			}
			if (!me._patch_switcher_customimage.ggScrollbars || currentHeight < me._patch_switcher_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._patch_switcher_customimage.scrollTop=currentHeight / 2 - me._patch_switcher_customimage.clientHeight / 2;
			}
		}
		me._patch.appendChild(me._patch_switcher_customimage);
		me.elementMouseOver['patch']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._patch_switcher_customimage.style.width=hotspot.customimagewidth + 'px';
			me._patch_switcher_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._patch_switcher_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._patch_switcher_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._patch_switcher_customimage.logicBlock_visible();
		me._patch_switcher_customimage.logicBlock_alpha();
		me.elementMouseOver['patch_switcher_customimage']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._patch_switcher_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._patch_switcher_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._patch_switcher_customimage.logicBlock_visible();
			};
			me.__div = me._patch;
	};
	function SkinHotspotClass_infolabel_small(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infolabel_small=document.createElement('div');
		el.ggId="infoLabel_small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabel_small.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infolabel_small.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel_small.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel_small.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['infolabel_small']=true;
			me._hs_image_i_1_infolabel_small.logicBlock_scaling();
			me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel_small.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['infolabel_small']=false;
			me._hs_image_i_1_infolabel_small.logicBlock_scaling();
			me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infolabel_small.ggUpdatePosition=function (useTransition) {
		}
		el=me._infolabelhovercontainer_small=document.createElement('div');
		el.ggId="InfoLabelHoverContainer_small";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 4;';
		hs+='height : auto;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width: 200px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabelhovercontainer_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infolabelhovercontainer_small.ggUpdatePosition=function (useTransition) {
		}
		el=me._infolabelcontainer_small=document.createElement('div');
		el.ggId="infoLabelContainer_small";
		el.ggDy=-28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 28px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabelcontainer_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infolabelcontainer_small.ggUpdatePosition=function (useTransition) {
		}
		el=me._infolabeltextcontainer_small=document.createElement('div');
		el.ggId="infoLabelTextContainer_small";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container infoLabelTextContainer";
		el.ggType='container';
		hs ='';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infolabeltextcontainer_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._infolabeltextcontainer_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabelcontainer_small.appendChild(me._infolabeltextcontainer_small);
		me._infolabelhovercontainer_small.appendChild(me._infolabelcontainer_small);
		me._infolabel_small.appendChild(me._infolabelhovercontainer_small);
		el=me._hs_image_i_1_infolabel_small=document.createElement('div');
		el.ggId="hs_image_i_1_infoLabel_small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 6px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : calc(50% - ((55px + 12px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55px + 12px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_infolabel_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_infolabel_small.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['infolabel_small'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_infolabel_small.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_infolabel_small.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_infolabel_small.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel_small.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_infolabel_small.ggParameter.sx = 0.8;
					me._hs_image_i_1_infolabel_small.ggParameter.sy = 0.8;
					me._hs_image_i_1_infolabel_small.style.transform=parameterToTransform(me._hs_image_i_1_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel_small);}, 550);
				}
				else {
					me._hs_image_i_1_infolabel_small.ggParameter.sx = 0.5;
					me._hs_image_i_1_infolabel_small.ggParameter.sy = 0.5;
					me._hs_image_i_1_infolabel_small.style.transform=parameterToTransform(me._hs_image_i_1_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_infolabel_small);}, 550);
				}
			}
		}
		me._hs_image_i_1_infolabel_small.logicBlock_scaling();
		me._hs_image_i_1_infolabel_small.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['infolabel_small'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_infolabel_small.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_infolabel_small.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_infolabel_small.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_infolabel_small.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_infolabel_small.style.borderColor="rgba(230,230,230,1)";
				}
				else {
					me._hs_image_i_1_infolabel_small.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
		me._hs_image_i_1_infolabel_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabel_small.appendChild(me._hs_image_i_1_infolabel_small);
		el=me._i_small=document.createElement('div');
		els=me._i_small__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="i_small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._i_small.ggUpdateText=function() {
			var params = [];
			var hs = player._("i", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._i_small.ggUpdateText();
		el.appendChild(els);
		me._i_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabel_small.appendChild(me._i_small);
		el=me._hs_image_animated_1_infolabel_small=document.createElement('div');
		el.ggId="hs_image_animated_1_infoLabel_small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_infolabel_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_infolabel_small.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_infolabel_small.ggParameter.sx = 0.8;
					me._hs_image_animated_1_infolabel_small.ggParameter.sy = 0.8;
					me._hs_image_animated_1_infolabel_small.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel_small);}, 550);
				}
				else {
					me._hs_image_animated_1_infolabel_small.ggParameter.sx = 0.5;
					me._hs_image_animated_1_infolabel_small.ggParameter.sy = 0.5;
					me._hs_image_animated_1_infolabel_small.style.transform=parameterToTransform(me._hs_image_animated_1_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_infolabel_small);}, 550);
				}
			}
		}
		me._hs_image_animated_1_infolabel_small.logicBlock_scaling();
		me._hs_image_animated_1_infolabel_small.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_1_infolabel_small'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_infolabel_small.style.visibility=(Number(me._hs_image_animated_1_infolabel_small.style.opacity)>0||!me._hs_image_animated_1_infolabel_small.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_infolabel_small.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_infolabel_small.style.visibility="hidden";
					me._hs_image_animated_1_infolabel_small.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_infolabel_small.logicBlock_visible();
		me._hs_image_animated_1_infolabel_small.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_infolabel_small.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_infolabel_small.style.opacity == 0.0) { me._hs_image_animated_1_infolabel_small.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_infolabel_small.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_infolabel_small.style.visibility=me._hs_image_animated_1_infolabel_small.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_infolabel_small.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_infolabel_small.logicBlock_alpha();
		me._hs_image_animated_1_infolabel_small.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel_small']=true;
			me._hs_image_animated_1_infolabel_small.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel_small.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_1_infolabel_small']=false;
			me._hs_image_animated_1_infolabel_small.logicBlock_visible();
		}
		me._hs_image_animated_1_infolabel_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabel_small.appendChild(me._hs_image_animated_1_infolabel_small);
		el=me._hs_image_animated_2_infolabel_small=document.createElement('div');
		el.ggId="hs_image_animated_2_infoLabel_small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_infolabel_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_infolabel_small.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_infolabel_small.ggParameter.sx = 0.8;
					me._hs_image_animated_2_infolabel_small.ggParameter.sy = 0.8;
					me._hs_image_animated_2_infolabel_small.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel_small);}, 550);
				}
				else {
					me._hs_image_animated_2_infolabel_small.ggParameter.sx = 1;
					me._hs_image_animated_2_infolabel_small.ggParameter.sy = 1;
					me._hs_image_animated_2_infolabel_small.style.transform=parameterToTransform(me._hs_image_animated_2_infolabel_small.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_infolabel_small);}, 550);
				}
			}
		}
		me._hs_image_animated_2_infolabel_small.logicBlock_scaling();
		me._hs_image_animated_2_infolabel_small.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true)) && 
				((me.elementMouseOver['hs_image_animated_2_infolabel_small'] == false)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_infolabel_small.style.visibility=(Number(me._hs_image_animated_2_infolabel_small.style.opacity)>0||!me._hs_image_animated_2_infolabel_small.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_infolabel_small.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_infolabel_small.style.visibility="hidden";
					me._hs_image_animated_2_infolabel_small.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_infolabel_small.logicBlock_visible();
		me._hs_image_animated_2_infolabel_small.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_infolabel_small.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_infolabel_small.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_infolabel_small.style.visibility=me._hs_image_animated_2_infolabel_small.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_infolabel_small.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_infolabel_small.style.opacity == 0.0) { me._hs_image_animated_2_infolabel_small.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_infolabel_small.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_infolabel_small.logicBlock_alpha();
		me._hs_image_animated_2_infolabel_small.onmouseenter=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel_small']=true;
			me._hs_image_animated_2_infolabel_small.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel_small.onmouseleave=function (e) {
			me.elementMouseOver['hs_image_animated_2_infolabel_small']=false;
			me._hs_image_animated_2_infolabel_small.logicBlock_visible();
		}
		me._hs_image_animated_2_infolabel_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabel_small.appendChild(me._hs_image_animated_2_infolabel_small);
		el=me._hover_container_small=document.createElement('div');
		el.ggId="Hover Container small";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 5;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hover_container_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hover_container_small.onclick=function (e) {
			if (
				(
					((player.getHasTouch() == true))
				)
			) {
				(function(){

onClick(true);

function onMouseEnter(){
    waitForHotspot().then(function(hs){
        if(player.infoHotspot && player.infoHotspot.div){
            if(player.infoHotspot.hs.id === hs.id){
              show();
            }else{
              player.infoHotspot.div.remove();
              create(hs);
              show();
            }
        }else{
            create(hs);
            show();
        }
    });
    
}

function waitForHotspot(){
    return new Promise(function(resolve){
        var interval = setInterval(function(){
            if(player.hotspot.type !== "empty"){
                clearInterval(interval);
                resolve(player.hotspot);
            }
        },10)
    })
}

function create(hs,isSmall){
    var infoHotspot = {
        isSmall : isSmall || false,
        hs : {...hs},
        textContainer : hs.div.querySelector(".infoLabelTextContainer"),
        headline: player.hotspot.title,
        paragraphs : player.hotspot.description.split("\n"),
        footer : player.hotspot.target,
        div : document.createElement("div"),
        transfromString : player.hotspot.url,
     };
     player.infoHotspot = infoHotspot;
     createContainer();	
    if(infoHotspot.headline){
        addHeadline(infoHotspot.headline,infoHotspot.isSmall)
    }
    if(infoHotspot.paragraphs){
        addParagraphs(infoHotspot.paragraphs,infoHotspot.isSmall)
    }
    if(infoHotspot.footer && infoHotspot.footer !== "_blank"){
        addFooter(infoHotspot.footer,infoHotspot.isSmall)
    }
    setTransfromDirection(infoHotspot.transfromString || "")
}

function show(){
    return new Promise(function(resolve){
        player.infoHotspot.div.style.opacity = "1";
        player.infoHotspot.div.style.height = "auto";
        
        if(player.infoHotspot.textContainer.getBoundingClientRect){
            player.infoHotspot.textContainer.parentElement.parentElement.style.height = player.infoHotspot.textContainer.getBoundingClientRect().height + "px";	
        }
        setTimeout(resolve,1000);
    })
}
function setTransfromDirection(dirString){
    let hor = "0px";
    let vert = "0px";
    if(dirString.toLowerCase().includes("left") || dirString.toLowerCase().includes("links")){
        hor = "calc(-100% - 85px)";
    }
    if(dirString.toLowerCase().includes("top") || dirString.toLowerCase().includes("oben")){
        vert = "calc(-100% + 50px)";
    }
    let translateString = `translate(${hor}, ${vert})`;
    console.log(translateString);
    player.infoHotspot.textContainer.parentElement.style.transform = translateString; 
}
function createContainer(){
    player.infoHotspot.div.classList.add("infoLabelContainerInner");
    player.infoHotspot.textContainer.append(player.infoHotspot.div)
}
function addHeadline(headlineText,isSmall){
    let headline = document.createElement("h2")
    if(isSmall){
        headline.classList.add("infoLabelHeader-small");
    }else{
        headline.classList.add("infoLabelHeader");
    }
    headline.innerText = headlineText;
    let line = document.createElement("hr")
    if(isSmall){
        line.classList.add("infoLabelHeaderDivider-small");
    }else{
        line.classList.add("infoLabelHeaderDivider");
    }
   
    player.infoHotspot.div.append(headline)
    player.infoHotspot.div.append(line)
}
function addParagraphs(paragraphs,isSmall){
    paragraphs.forEach(function(paragraphText, i){
        let paragraph = document.createElement("p")
        if(isSmall){
            paragraph.classList.add("infoLabelParagraph-small");
        }else{
            paragraph.classList.add("infoLabelParagraph");
        }
        paragraph.innerText = paragraphText;
        player.infoHotspot.div.append(paragraph);
        if( i !== paragraphs.length -1){
          let line = document.createElement("hr")
          if(isSmall){
            line.classList.add("infoLabelDivider-small");
          }else{
            line.classList.add("infoLabelDivider");
          }
          player.infoHotspot.div.append(line);
        }
    });
}
function addFooter(footerText,isSmall){
    let footer = document.createElement("h3");
    footer.innerText = footerText;
    if(isSmall){
        footer.classList.add("infoLabelFooter-small");
    }else{
        footer.classList.add("infoLabelFooter");
    }    
     player.infoHotspot.div.append(footer);
}
function hide(){
    return new Promise(function(resolve){
        player.infoHotspot.div.style.opacity = "0";
        player.infoHotspot.div.style.height = "0px";
        setTimeout(resolve,1000)
    });
}
function toggleVisibility(){
    if(player.infoHotspot && player.infoHotspot.div){
        if(player.infoHotspot.div.style.opacity !== "1"){
            show();	
        }else{
            hide();
        }
    }
}
function onClick(isSmall){
    waitForHotspot().then(function(hs){
        if(player.infoHotspot && player.infoHotspot.div && player.infoHotspot.hs.id === hs.id){
            toggleVisibility()
        }else{
            if(player.infoHotspot && player.infoHotspot.div){
                player.infoHotspot.div.remove();
            }
            create(hs,isSmall);
            show();
        }
    });
}
})();
			}
		}
		me._hover_container_small.onmouseenter=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				(function(){

onMouseEnter(true);

function onMouseEnter(isSmall){
    waitForHotspot().then(function(hs){
        if(player.infoHotspot && player.infoHotspot.div){
            if(player.infoHotspot.hs.id === hs.id){
              show();
            }else{
              player.infoHotspot.div.remove();
              create(hs,isSmall);
              show();
            }
        }else{
            create(hs,isSmall);
            show();
        }
    });
    
}

function waitForHotspot(){
    return new Promise(function(resolve){
        var interval = setInterval(function(){
            if(player.hotspot.type !== "empty"){
                clearInterval(interval);
                resolve(player.hotspot);
            }
        },10)
    })
}

function create(hs,isSmall){
    var infoHotspot = {
        isSmall : isSmall || false,
        hs : {...hs},
        textContainer : hs.div.querySelector(".infoLabelTextContainer"),
        headline: player.hotspot.title,
        paragraphs : player.hotspot.description.split("\n"),
        footer : player.hotspot.target,
        div : document.createElement("div"),
        transfromString : player.hotspot.url,
     };
     player.infoHotspot = infoHotspot;
     createContainer();	
    if(infoHotspot.headline){
        addHeadline(infoHotspot.headline,infoHotspot.isSmall)
    }
    if(infoHotspot.paragraphs){
        addParagraphs(infoHotspot.paragraphs,infoHotspot.isSmall)
    }
    if(infoHotspot.footer && infoHotspot.footer !== "_blank"){
        addFooter(infoHotspot.footer,infoHotspot.isSmall)
    }
    setTransfromDirection(infoHotspot.transfromString || "")
}

function show(){
    return new Promise(function(resolve){
        player.infoHotspot.div.style.opacity = "1";
        player.infoHotspot.div.style.height = "auto";
        
        if(player.infoHotspot.textContainer.getBoundingClientRect){
            player.infoHotspot.textContainer.parentElement.parentElement.style.height = player.infoHotspot.textContainer.getBoundingClientRect().height + "px";	
        }
        setTimeout(resolve,1000);
    })
}
function setTransfromDirection(dirString){
    let hor = "0px";
    let vert = "0px";
    if(dirString.toLowerCase().includes("left") || dirString.toLowerCase().includes("links")){
        hor = "calc(-100% - 85px)";
    }
    if(dirString.toLowerCase().includes("top") || dirString.toLowerCase().includes("oben")){
        vert = "calc(-100% + 50px)";
    }
    let translateString = `translate(${hor}, ${vert})`;
    player.infoHotspot.textContainer.parentElement.style.transform = translateString; 
}
function createContainer(){
    player.infoHotspot.div.classList.add("infoLabelContainerInner");
    player.infoHotspot.textContainer.append(player.infoHotspot.div)
}
function addHeadline(headlineText,isSmall){
    let headline = document.createElement("h2")
    if(isSmall){
        headline.classList.add("infoLabelHeader-small");
    }else{
        headline.classList.add("infoLabelHeader");
    }
    headline.innerText = headlineText;
    let line = document.createElement("hr")
    if(isSmall){
        line.classList.add("infoLabelHeaderDivider-small");
    }else{
        line.classList.add("infoLabelHeaderDivider");
    }
   
    player.infoHotspot.div.append(headline)
    player.infoHotspot.div.append(line)
}
function addParagraphs(paragraphs,isSmall){
    paragraphs.forEach(function(paragraphText, i){
        let paragraph = document.createElement("p")
        if(isSmall){
            paragraph.classList.add("infoLabelParagraph-small");
        }else{
            paragraph.classList.add("infoLabelParagraph");
        }
        paragraph.innerText = paragraphText;
        player.infoHotspot.div.append(paragraph);
        if( i !== paragraphs.length -1){
          let line = document.createElement("hr")
          if(isSmall){
            line.classList.add("infoLabelDivider-small");
          }else{
            line.classList.add("infoLabelDivider");
          }
          player.infoHotspot.div.append(line);
        }
    });
}
function addFooter(footerText,isSmall){
    let footer = document.createElement("h3");
    footer.innerText = footerText;
    if(isSmall){
        footer.classList.add("infoLabelFooter-small");
    }else{
        footer.classList.add("infoLabelFooter");
    }    
     player.infoHotspot.div.append(footer);
}
function hide(){
    return new Promise(function(resolve){
        player.infoHotspot.div.style.opacity = "0";
        player.infoHotspot.div.style.height = "0px";
        setTimeout(resolve,1000)
    });
}
function toggleVisibility(){
    if(player.infoHotspot && player.infoHotspot.div){
        if(player.infoHotspot.div.style.opacity !== "1"){
            show();	
        }else{
            hide();
        }
    }
}
function onClick(isSmall){
    waitForHotspot().then(function(hs){
        if(player.infoHotspot && player.infoHotspot.div && player.infoHotspot.hs.id === hs.id){
            toggleVisibility()
        }else{
            if(player.infoHotspot && player.infoHotspot.div){
                player.infoHotspot.div.remove();
            }
            create(hs,isSmall);
            show();
        }
    });
}
})();
			}
			me.elementMouseOver['hover_container_small']=true;
		}
		me._hover_container_small.onmouseleave=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				(function(){
var infoHotspot = player.infoHotspot;
if(infoHotspot && infoHotspot.div){
infoHotspot.div.style.height = "0px";
infoHotspot.div.style.opacity = "0";
}
})()
			}
			me.elementMouseOver['hover_container_small']=false;
		}
		me._hover_container_small.ggUpdatePosition=function (useTransition) {
		}
		me._infolabel_small.appendChild(me._hover_container_small);
		me.elementMouseOver['infolabel_small']=false;
		me._hs_image_i_1_infolabel_small.logicBlock_scaling();
		me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
		me._hs_image_animated_1_infolabel_small.logicBlock_scaling();
		me._hs_image_animated_1_infolabel_small.logicBlock_visible();
		me._hs_image_animated_1_infolabel_small.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_1_infolabel_small']=false;
		me._hs_image_animated_2_infolabel_small.logicBlock_scaling();
		me._hs_image_animated_2_infolabel_small.logicBlock_visible();
		me._hs_image_animated_2_infolabel_small.logicBlock_alpha();
		me.elementMouseOver['hs_image_animated_2_infolabel_small']=false;
		me.elementMouseOver['hover_container_small']=false;
			me.ggEvent_changenode=function() {
				me._hs_image_i_1_infolabel_small.logicBlock_scaling();
				me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_1_infolabel_small.logicBlock_visible();
				me._hs_image_animated_1_infolabel_small.logicBlock_alpha();
				me._hs_image_animated_2_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_2_infolabel_small.logicBlock_visible();
				me._hs_image_animated_2_infolabel_small.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_i_1_infolabel_small.logicBlock_scaling();
				me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_1_infolabel_small.logicBlock_visible();
				me._hs_image_animated_1_infolabel_small.logicBlock_alpha();
				me._hs_image_animated_2_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_2_infolabel_small.logicBlock_visible();
				me._hs_image_animated_2_infolabel_small.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_infolabel_small.logicBlock_scaling();
				me._hs_image_i_1_infolabel_small.logicBlock_bordercolor();
				me._hs_image_animated_1_infolabel_small.logicBlock_visible();
				me._hs_image_animated_2_infolabel_small.logicBlock_visible();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_infolabel_small.logicBlock_visible();
				me._hs_image_animated_2_infolabel_small.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_1_infolabel_small.logicBlock_alpha();
				me._hs_image_animated_2_infolabel_small.logicBlock_scaling();
				me._hs_image_animated_2_infolabel_small.logicBlock_alpha();
			};
			me.__div = me._infolabel_small;
	};
	function SkinHotspotClass_cloudflare_video0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._cloudflare_video0=document.createElement('div');
		el.ggId="Cloudflare Video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloudflare_video0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._cloudflare_video0.onclick=function (e) {
			skin._cloudflare_container.style.transition='none';
			skin._cloudflare_container.style.visibility=(Number(skin._cloudflare_container.style.opacity)>0||!skin._cloudflare_container.style.opacity)?'inherit':'hidden';
			skin._cloudflare_container.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cloudflare_video0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cloudflare_video0.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['cloudflare_video0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cloudflare_video0.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['cloudflare_video0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._cloudflare_video0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 700px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_2.onmouseenter=function (e) {
			me.elementMouseOver['container_2']=true;
			me._hs_image_i_cloudflare.logicBlock_scaling();
			me._hs_image_i_cloudflare.logicBlock_bordercolor();
		}
		me._container_2.onmouseleave=function (e) {
			me.elementMouseOver['container_2']=false;
			me._hs_image_i_cloudflare.logicBlock_scaling();
			me._hs_image_i_cloudflare.logicBlock_bordercolor();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_cloudflare=document.createElement('div');
		el.ggId="hs_image_animated_2_Cloudflare";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_2_cloudflare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_cloudflare.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_cloudflare.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_cloudflare.ggParameter.sx = 0.55;
					me._hs_image_animated_2_cloudflare.ggParameter.sy = 0.55;
					me._hs_image_animated_2_cloudflare.style.transform=parameterToTransform(me._hs_image_animated_2_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_cloudflare);}, 550);
				}
				else {
					me._hs_image_animated_2_cloudflare.ggParameter.sx = 0.5;
					me._hs_image_animated_2_cloudflare.ggParameter.sy = 0.5;
					me._hs_image_animated_2_cloudflare.style.transform=parameterToTransform(me._hs_image_animated_2_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_cloudflare);}, 550);
				}
			}
		}
		me._hs_image_animated_2_cloudflare.logicBlock_scaling();
		me._hs_image_animated_2_cloudflare.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_cloudflare.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_cloudflare.style.visibility=(Number(me._hs_image_animated_2_cloudflare.style.opacity)>0||!me._hs_image_animated_2_cloudflare.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_cloudflare.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_cloudflare.style.visibility="hidden";
					me._hs_image_animated_2_cloudflare.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_cloudflare.logicBlock_visible();
		me._hs_image_animated_2_cloudflare.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_cloudflare.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_cloudflare.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_cloudflare.style.visibility=me._hs_image_animated_2_cloudflare.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_cloudflare.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_cloudflare.style.opacity == 0.0) { me._hs_image_animated_2_cloudflare.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_cloudflare.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_cloudflare.logicBlock_alpha();
		me._hs_image_animated_2_cloudflare.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._hs_image_animated_2_cloudflare);
		el=me._hs_image_animated_1_cloudflare=document.createElement('div');
		el.ggId="hs_image_animated_1_Cloudflare";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_cloudflare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_cloudflare.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_cloudflare.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_cloudflare.ggParameter.sx = 0.8;
					me._hs_image_animated_1_cloudflare.ggParameter.sy = 0.8;
					me._hs_image_animated_1_cloudflare.style.transform=parameterToTransform(me._hs_image_animated_1_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_cloudflare);}, 550);
				}
				else {
					me._hs_image_animated_1_cloudflare.ggParameter.sx = 0.5;
					me._hs_image_animated_1_cloudflare.ggParameter.sy = 0.5;
					me._hs_image_animated_1_cloudflare.style.transform=parameterToTransform(me._hs_image_animated_1_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_cloudflare);}, 550);
				}
			}
		}
		me._hs_image_animated_1_cloudflare.logicBlock_scaling();
		me._hs_image_animated_1_cloudflare.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_cloudflare.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_cloudflare.style.visibility=(Number(me._hs_image_animated_1_cloudflare.style.opacity)>0||!me._hs_image_animated_1_cloudflare.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_cloudflare.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_cloudflare.style.visibility="hidden";
					me._hs_image_animated_1_cloudflare.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_cloudflare.logicBlock_visible();
		me._hs_image_animated_1_cloudflare.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_cloudflare.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_cloudflare.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_cloudflare.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_cloudflare.style.opacity == 0.0) { me._hs_image_animated_1_cloudflare.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_cloudflare.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_cloudflare.style.visibility=me._hs_image_animated_1_cloudflare.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_cloudflare.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_cloudflare.logicBlock_alpha();
		me._hs_image_animated_1_cloudflare.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._hs_image_animated_1_cloudflare);
		el=me._hs_image_i_cloudflare=document.createElement('div');
		el.ggId="hs_image_i_Cloudflare";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_cloudflare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_cloudflare.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_cloudflare.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_cloudflare.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_cloudflare.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_cloudflare.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_cloudflare.ggParameter.sx = 0.8;
					me._hs_image_i_cloudflare.ggParameter.sy = 0.8;
					me._hs_image_i_cloudflare.style.transform=parameterToTransform(me._hs_image_i_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_cloudflare);}, 550);
				}
				else {
					me._hs_image_i_cloudflare.ggParameter.sx = 0.5;
					me._hs_image_i_cloudflare.ggParameter.sy = 0.5;
					me._hs_image_i_cloudflare.style.transform=parameterToTransform(me._hs_image_i_cloudflare.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_cloudflare);}, 550);
				}
			}
		}
		me._hs_image_i_cloudflare.logicBlock_scaling();
		me._hs_image_i_cloudflare.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['container_2'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_cloudflare.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_cloudflare.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_cloudflare.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_cloudflare.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_cloudflare.style.borderColor="rgba(244,0,0,1)";
				}
				else {
					me._hs_image_i_cloudflare.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_cloudflare.logicBlock_bordercolor();
		me._hs_image_i_cloudflare.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._hs_image_i_cloudflare);
		el=me._playbutton=document.createElement('div');
		el.ggId="playButton";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='width: 0; height: 0; border-top:6px solid transparent; border-bottom: 6px solid transparent; border-left: 7px solid #f40000; cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._playbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._playbutton.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._playbutton);
		me._cloudflare_video0.appendChild(me._container_2);
		el=me._video_container=document.createElement('div');
		el.ggId="Video Container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80vh;';
		hs+='left : calc(50% - ((80vw + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80vh + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80vw;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_iframe=document.createElement('div');
		els=me._video_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Video Iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._video_iframe.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.url)));
			var hs = player._("<iframe src=\"https:\/\/iframe.videodelivery.net\/%1?autoplay=true\" style=\"border: none;\" height=\"100%\" width=\"100%\" allow=\"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"><\/iframe>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_iframe.ggUpdateText();
		player.addListener('changenode', function() {
			me._video_iframe.ggUpdateText();
		});
		el.appendChild(els);
		me._video_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._video_container.appendChild(me._video_iframe);
		el=me._video_title=document.createElement('div');
		els=me._video_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Video Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-align:\"center\";height:\"auto\";';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._video_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.target)));
			var hs = player._("<h1 style=\"margin:0;margin-top:6px\">%1<\/h1>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._video_title.ggUpdateText();
		});
		el.appendChild(els);
		me._video_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_title.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_video=document.createElement('div');
		els=me._close_video__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeT0iMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMCIgd2lkdGg9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZpZXdCb3g9IjAgMCA1MTEuNzYgNTExLjc2IiBoZWlnaHQ9IjUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxyZWN0IHdpZHRoPSI1MTEuNzYiIGZpbGw9IiNmZmZmZmYiIHNoYXBlPS'+
			'JzcXVhcmUiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzMsMCwwLDAuMzMsMTcxLjQzOTYwMzI3MTQ4NDM3LDE3MS40Mzk2MDMyNzE0ODQzNykiIGhlaWdodD0iNTExLjc2Ii8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni43NjQwNzQ3MDcwMzEyNiw3Ni43NjM4MTE0OTI5MTk5MykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI2U2NDIxNSIgZD0iTTQzNi44OTYsNzQuODY5Yy05OS44NC05OS44MTktMjYyLjIwOC05OS44MTktMzYyLjA0OCwwYy05OS43OTcsOTkuODE5LTk5Ljc5NywyNjIuMjI5LDAsMzYy'+
			'LjA0OCAgICBjNDkuOTIsNDkuODk5LDExNS40NzcsNzQuODM3LDE4MS4wMzUsNzQuODM3czEzMS4wOTMtMjQuOTM5LDE4MS4wMTMtNzQuODM3QzUzNi43MTUsMzM3LjA5OSw1MzYuNzE1LDE3NC42ODgsNDM2Ljg5Niw3NC44Njl6ICAgICBNMzYxLjQ2MSwzMzEuMzE3YzguMzQxLDguMzQxLDguMzQxLDIxLjgyNCwwLDMwLjE2NWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxICAgIGwtNzUuNDEzLTc1LjQzNWwtNzUuMzkyLDc1LjQxM2MtNC4xODEsNC4xNi05LjY0Myw2LjI1MS0xNS4wODMsNi4yNTFjLTUuNDYxLDAtMT'+
			'AuOTIzLTIuMDkxLTE1LjA4My02LjI1MSAgICBjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NWw3NS4zOTItNzUuNDEzbC03NS40MTMtNzUuNDEzYy04LjM0MS04LjM0MS04LjM0MS0yMS44NDUsMC0zMC4xNjUgICAgYzguMzItOC4zNDEsMjEuODI0LTguMzQxLDMwLjE2NSwwbDc1LjQxMyw3NS40MTNsNzUuNDEzLTc1LjQxM2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDAgICAgYzguMzQxLDguMzIsOC4zNDEsMjEuODI0LDAsMzAuMTY1bC03NS40MTMsNzUuNDEzTDM2MS40NjEsMzMxLjMxN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIi'+
			'Lz4KICAgPC9nPgogIDwvZz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_video__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;color:\"#f40000\";';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Close Video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -25px;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close_video.onclick=function (e) {
			skin._cloudflare_container.style.transition='none';
			skin._cloudflare_container.style.visibility='hidden';
			skin._cloudflare_container.ggVisible=false;
			player.setVariableValue('cloudflare_video_id', "");
		}
		me._close_video.ggUpdatePosition=function (useTransition) {
		}
		me._video_title.appendChild(me._close_video);
		me._video_container.appendChild(me._video_title);
		me._cloudflare_video0.appendChild(me._video_container);
		me.elementMouseOver['cloudflare_video0']=false;
		me.elementMouseOver['container_2']=false;
		me._hs_image_animated_2_cloudflare.logicBlock_scaling();
		me._hs_image_animated_2_cloudflare.logicBlock_visible();
		me._hs_image_animated_2_cloudflare.logicBlock_alpha();
		me._hs_image_animated_1_cloudflare.logicBlock_scaling();
		me._hs_image_animated_1_cloudflare.logicBlock_visible();
		me._hs_image_animated_1_cloudflare.logicBlock_alpha();
		me._hs_image_i_cloudflare.logicBlock_scaling();
		me._hs_image_i_cloudflare.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_cloudflare.logicBlock_scaling();
				me._hs_image_animated_2_cloudflare.logicBlock_visible();
				me._hs_image_animated_2_cloudflare.logicBlock_alpha();
				me._hs_image_animated_1_cloudflare.logicBlock_scaling();
				me._hs_image_animated_1_cloudflare.logicBlock_visible();
				me._hs_image_animated_1_cloudflare.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_cloudflare.logicBlock_scaling();
				me._hs_image_animated_2_cloudflare.logicBlock_visible();
				me._hs_image_animated_2_cloudflare.logicBlock_alpha();
				me._hs_image_animated_1_cloudflare.logicBlock_scaling();
				me._hs_image_animated_1_cloudflare.logicBlock_visible();
				me._hs_image_animated_1_cloudflare.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_cloudflare.logicBlock_visible();
				me._hs_image_animated_1_cloudflare.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_cloudflare.logicBlock_scaling();
				me._hs_image_animated_2_cloudflare.logicBlock_alpha();
				me._hs_image_animated_1_cloudflare.logicBlock_scaling();
				me._hs_image_animated_1_cloudflare.logicBlock_alpha();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_2.ggParameter) {
					hs+=parameterToTransform(me._container_2.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1.35 + 0) + ') ';
				me._container_2.style.transform=hs;
				var hs='';
				if (me._hs_image_i_cloudflare.ggParameter) {
					hs+=parameterToTransform(me._hs_image_i_cloudflare.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(1 * player.getTilt() + 0)) + 'deg) ';
				me._hs_image_i_cloudflare.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._cloudflare_video0;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
			skin._popup_video_youtube.ggInitMedia(player._(me.hotspot.url));
			player.setVariableValue('vis_video_youtube', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			me._ht_video_video_i.logicBlock_bordercolor();
			me._ht_video_video_i.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			me._ht_video_video_i.logicBlock_bordercolor();
			me._ht_video_video_i.logicBlock_scaling();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_youtube.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_youtube.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_youtube.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_youtube.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_video_youtube.style.top='-47px';
				}
				else {
					me._tt_ht_video_youtube.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_video_youtube.style.top='24px';
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_position();
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != "")) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style.transition='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible();
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		el=me._ht_video_youtube_customimage=document.createElement('div');
		els=me._ht_video_youtube_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_customimage.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_customimage.ggAltText));
			me._ht_video_youtube_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_customimage.ggText_untranslated = img;
			me._ht_video_youtube_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_customimage.ggSubElement.style.width = '0px';
			me._ht_video_youtube_customimage.ggSubElement.style.height = '0px';
			me._ht_video_youtube_customimage.ggSubElement.src='';
			me._ht_video_youtube_customimage.ggSubElement.src=me._ht_video_youtube_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_customimage.ggText != player._(me._ht_video_youtube_customimage.ggText_untranslated)) {
				me._ht_video_youtube_customimage.ggText = player._(me._ht_video_youtube_customimage.ggText_untranslated);
				me._ht_video_youtube_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_customimage.style.transition='';
				if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_customimage.style.visibility="hidden";
					me._ht_video_youtube_customimage.ggSubElement.src='';
					me._ht_video_youtube_customimage.ggVisible=false;
				}
				else {
					me._ht_video_youtube_customimage.style.visibility=(Number(me._ht_video_youtube_customimage.style.opacity)>0||!me._ht_video_youtube_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_customimage.ggSubElement.src=me._ht_video_youtube_customimage.ggText;
					me._ht_video_youtube_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_customimage.logicBlock_visible();
		me._ht_video_youtube_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_customimage.clientWidth;
			var parentHeight = me._ht_video_youtube_customimage.clientHeight;
			var img = me._ht_video_youtube_customimage__img;
			var aspectRatioDiv = me._ht_video_youtube_customimage.clientWidth / me._ht_video_youtube_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_customimage.ggScrollbars || currentWidth < me._ht_video_youtube_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_customimage.scrollLeft=currentWidth / 2 - me._ht_video_youtube_customimage.clientWidth / 2;
			}
			if (!me._ht_video_youtube_customimage.ggScrollbars || currentHeight < me._ht_video_youtube_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_customimage.scrollTop=currentHeight / 2 - me._ht_video_youtube_customimage.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_customimage);
		el=me._ht_video_video_youtube=document.createElement('div');
		el.ggId="ht_video_video_youtube";
		el.ggDx=-2;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) - 6px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='width: 0; height: 0; border-top:6px solid transparent; border-bottom: 6px solid transparent; border-left: 8px solid #f40000; cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._ht_video_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_youtube);
		el=me._ht_video_video_animated_2=document.createElement('div');
		el.ggId="ht_video_video_animated_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_video_video_animated_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_animated_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_video_animated_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_video_animated_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_video_animated_2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_animated_2.ggCurrentLogicStateScaling == 0) {
					me._ht_video_video_animated_2.ggParameter.sx = 0.55;
					me._ht_video_video_animated_2.ggParameter.sy = 0.55;
					me._ht_video_video_animated_2.style.transform=parameterToTransform(me._ht_video_video_animated_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_animated_2);}, 550);
				}
				else {
					me._ht_video_video_animated_2.ggParameter.sx = 0.5;
					me._ht_video_video_animated_2.ggParameter.sy = 0.5;
					me._ht_video_video_animated_2.style.transform=parameterToTransform(me._ht_video_video_animated_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_animated_2);}, 550);
				}
			}
		}
		me._ht_video_video_animated_2.logicBlock_scaling();
		me._ht_video_video_animated_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_animated_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_animated_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_animated_2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_animated_2.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_animated_2.style.visibility=(Number(me._ht_video_video_animated_2.style.opacity)>0||!me._ht_video_video_animated_2.style.opacity)?'inherit':'hidden';
					me._ht_video_video_animated_2.ggVisible=true;
				}
				else {
					me._ht_video_video_animated_2.style.visibility="hidden";
					me._ht_video_video_animated_2.ggVisible=false;
				}
			}
		}
		me._ht_video_video_animated_2.logicBlock_visible();
		me._ht_video_video_animated_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_video_animated_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_video_animated_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_video_animated_2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_animated_2.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_video_animated_2.style.visibility=me._ht_video_video_animated_2.ggVisible?'inherit':'hidden';
					me._ht_video_video_animated_2.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._ht_video_video_animated_2.style.opacity == 0.0) { me._ht_video_video_animated_2.style.visibility="hidden"; } }, 505);
					me._ht_video_video_animated_2.style.opacity=0;
				}
			}
		}
		me._ht_video_video_animated_2.logicBlock_alpha();
		me._ht_video_video_animated_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_animated_2);
		el=me._ht_video_video_1=document.createElement('div');
		el.ggId="ht_video_video_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_video_video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_video_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_video_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_video_1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_1.ggCurrentLogicStateScaling == 0) {
					me._ht_video_video_1.ggParameter.sx = 0.8;
					me._ht_video_video_1.ggParameter.sy = 0.8;
					me._ht_video_video_1.style.transform=parameterToTransform(me._ht_video_video_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_1);}, 550);
				}
				else {
					me._ht_video_video_1.ggParameter.sx = 0.5;
					me._ht_video_video_1.ggParameter.sy = 0.5;
					me._ht_video_video_1.style.transform=parameterToTransform(me._ht_video_video_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_1);}, 550);
				}
			}
		}
		me._ht_video_video_1.logicBlock_scaling();
		me._ht_video_video_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_1.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_1.style.visibility=(Number(me._ht_video_video_1.style.opacity)>0||!me._ht_video_video_1.style.opacity)?'inherit':'hidden';
					me._ht_video_video_1.ggVisible=true;
				}
				else {
					me._ht_video_video_1.style.visibility="hidden";
					me._ht_video_video_1.ggVisible=false;
				}
			}
		}
		me._ht_video_video_1.logicBlock_visible();
		me._ht_video_video_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_video_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_video_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_video_1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_video_video_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_video_1.style.opacity == 0.0) { me._ht_video_video_1.style.visibility="hidden"; } }, 505);
					me._ht_video_video_1.style.opacity=0;
				}
				else {
					me._ht_video_video_1.style.visibility=me._ht_video_video_1.ggVisible?'inherit':'hidden';
					me._ht_video_video_1.style.opacity=1;
				}
			}
		}
		me._ht_video_video_1.logicBlock_alpha();
		me._ht_video_video_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_1);
		el=me._ht_video_video_i=document.createElement('div');
		el.ggId="ht_video_video_i";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_video_video_i.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_i.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_video_i.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_video_i.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_video_i.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._ht_video_video_i.ggCurrentLogicStateScaling == 0) {
					me._ht_video_video_i.ggParameter.sx = 0.8;
					me._ht_video_video_i.ggParameter.sy = 0.8;
					me._ht_video_video_i.style.transform=parameterToTransform(me._ht_video_video_i.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_i);}, 550);
				}
				else {
					me._ht_video_video_i.ggParameter.sx = 0.5;
					me._ht_video_video_i.ggParameter.sy = 0.5;
					me._ht_video_video_i.style.transform=parameterToTransform(me._ht_video_video_i.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_video_i);}, 550);
				}
			}
		}
		me._ht_video_video_i.logicBlock_scaling();
		me._ht_video_video_i.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._ht_video_video_i.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._ht_video_video_i.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._ht_video_video_i.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._ht_video_video_i.ggCurrentLogicStateBorderColor == 0) {
					me._ht_video_video_i.style.borderColor="rgba(244,0,0,1)";
				}
				else {
					me._ht_video_video_i.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_video_video_i.logicBlock_bordercolor();
		me._ht_video_video_i.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_i);
		me.elementMouseOver['ht_video_youtube']=false;
		me._tt_ht_video_youtube.logicBlock_position();
		me._tt_ht_video_youtube.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_customimage.logicBlock_visible();
		me._ht_video_video_animated_2.logicBlock_scaling();
		me._ht_video_video_animated_2.logicBlock_visible();
		me._ht_video_video_animated_2.logicBlock_alpha();
		me._ht_video_video_1.logicBlock_scaling();
		me._ht_video_video_1.logicBlock_visible();
		me._ht_video_video_1.logicBlock_alpha();
		me._ht_video_video_i.logicBlock_scaling();
		me._ht_video_video_i.logicBlock_bordercolor();
			me.ggEvent_activehotspotchanged=function() {
				me._tt_ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._tt_ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_customimage.logicBlock_visible();
				me._ht_video_video_animated_2.logicBlock_scaling();
				me._ht_video_video_animated_2.logicBlock_visible();
				me._ht_video_video_animated_2.logicBlock_alpha();
				me._ht_video_video_1.logicBlock_scaling();
				me._ht_video_video_1.logicBlock_visible();
				me._ht_video_video_1.logicBlock_alpha();
				me._ht_video_video_i.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._tt_ht_video_youtube.logicBlock_position();
				me._tt_ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_customimage.logicBlock_visible();
				me._ht_video_video_animated_2.logicBlock_scaling();
				me._ht_video_video_animated_2.logicBlock_visible();
				me._ht_video_video_animated_2.logicBlock_alpha();
				me._ht_video_video_1.logicBlock_scaling();
				me._ht_video_video_1.logicBlock_visible();
				me._ht_video_video_1.logicBlock_alpha();
				me._ht_video_video_i.logicBlock_scaling();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_video_youtube.logicBlock_position();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._tt_ht_video_youtube.logicBlock_visible();
				me._ht_video_video_i.logicBlock_scaling();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._ht_video_video_animated_2.logicBlock_visible();
				me._ht_video_video_1.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._ht_video_video_animated_2.logicBlock_scaling();
				me._ht_video_video_animated_2.logicBlock_alpha();
				me._ht_video_video_1.logicBlock_scaling();
				me._ht_video_video_1.logicBlock_alpha();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._ht_video_video_i.ggParameter) {
					hs+=parameterToTransform(me._ht_video_video_i.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(1 * player.getTilt() + 0)) + 'deg) ';
				me._ht_video_video_i.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_hotspot_info_button(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_info_button=document.createElement('div');
		el.ggId="Hotspot Info Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_info_button.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_info_button.onclick=function (e) {
			var list=me.findElements("InfoPanel",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_info_button.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_info_button.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_info_button']=true;
			me._hs_image_i_1_info.logicBlock_scaling();
			me._hs_image_i_1_info.logicBlock_bordercolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_info_button.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_info_button']=false;
			me._hs_image_i_1_info.logicBlock_scaling();
			me._hs_image_i_1_info.logicBlock_bordercolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_info_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_info=document.createElement('div');
		el.ggId="hs_image_animated_2_info";
		el.ggDx=24;
		el.ggDy=24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe hotspot-pulsate-big";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 24px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 24px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_info.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_info.ggParameter.sx = 0.8;
					me._hs_image_animated_2_info.ggParameter.sy = 0.8;
					me._hs_image_animated_2_info.style.transform=parameterToTransform(me._hs_image_animated_2_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_info);}, 550);
				}
				else {
					me._hs_image_animated_2_info.ggParameter.sx = 1;
					me._hs_image_animated_2_info.ggParameter.sy = 1;
					me._hs_image_animated_2_info.style.transform=parameterToTransform(me._hs_image_animated_2_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_info);}, 550);
				}
			}
		}
		me._hs_image_animated_2_info.logicBlock_scaling();
		me._hs_image_animated_2_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_info.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_info.style.visibility=(Number(me._hs_image_animated_2_info.style.opacity)>0||!me._hs_image_animated_2_info.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_info.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_info.style.visibility="hidden";
					me._hs_image_animated_2_info.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_info.logicBlock_visible();
		me._hs_image_animated_2_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_info.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_info.style.visibility=me._hs_image_animated_2_info.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_info.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_info.style.opacity == 0.0) { me._hs_image_animated_2_info.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_info.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_info.logicBlock_alpha();
		me._hs_image_animated_2_info.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_info_button.appendChild(me._hs_image_animated_2_info);
		el=me._hs_image_animated_1_info=document.createElement('div');
		el.ggId="hs_image_animated_1_info";
		el.ggDx=24;
		el.ggDy=24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle hotspot-pulsate-small";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 24px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 24px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_info.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_info.ggParameter.sx = 0.8;
					me._hs_image_animated_1_info.ggParameter.sy = 0.8;
					me._hs_image_animated_1_info.style.transform=parameterToTransform(me._hs_image_animated_1_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_info);}, 550);
				}
				else {
					me._hs_image_animated_1_info.ggParameter.sx = 0.5;
					me._hs_image_animated_1_info.ggParameter.sy = 0.5;
					me._hs_image_animated_1_info.style.transform=parameterToTransform(me._hs_image_animated_1_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_info);}, 550);
				}
			}
		}
		me._hs_image_animated_1_info.logicBlock_scaling();
		me._hs_image_animated_1_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_info.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_info.style.visibility=(Number(me._hs_image_animated_1_info.style.opacity)>0||!me._hs_image_animated_1_info.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_info.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_info.style.visibility="hidden";
					me._hs_image_animated_1_info.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_info.logicBlock_visible();
		me._hs_image_animated_1_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_info.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_info.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_info.style.opacity == 0.0) { me._hs_image_animated_1_info.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_info.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_info.style.visibility=me._hs_image_animated_1_info.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_info.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_info.logicBlock_alpha();
		me._hs_image_animated_1_info.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_info_button.appendChild(me._hs_image_animated_1_info);
		el=me._hs_image_i_1_info=document.createElement('div');
		el.ggId="hs_image_i_1_info";
		el.ggDx=24;
		el.ggDy=24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle hotspot-main";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 24px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 24px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_info_button'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_info.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_info.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_info.ggParameter.sx = 0.8;
					me._hs_image_i_1_info.ggParameter.sy = 0.8;
					me._hs_image_i_1_info.style.transform=parameterToTransform(me._hs_image_i_1_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_info);}, 550);
				}
				else {
					me._hs_image_i_1_info.ggParameter.sx = 0.5;
					me._hs_image_i_1_info.ggParameter.sy = 0.5;
					me._hs_image_i_1_info.style.transform=parameterToTransform(me._hs_image_i_1_info.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_info);}, 550);
				}
			}
		}
		me._hs_image_i_1_info.logicBlock_scaling();
		me._hs_image_i_1_info.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_info_button'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_info.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_info.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_info.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_info.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_info.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_1_info.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_info.logicBlock_bordercolor();
		me._hs_image_i_1_info.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_info_button.appendChild(me._hs_image_i_1_info);
		me.elementMouseOver['hotspot_info_button']=false;
		me._hs_image_animated_2_info.logicBlock_scaling();
		me._hs_image_animated_2_info.logicBlock_visible();
		me._hs_image_animated_2_info.logicBlock_alpha();
		me._hs_image_animated_1_info.logicBlock_scaling();
		me._hs_image_animated_1_info.logicBlock_visible();
		me._hs_image_animated_1_info.logicBlock_alpha();
		me._hs_image_i_1_info.logicBlock_scaling();
		me._hs_image_i_1_info.logicBlock_bordercolor();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_info.logicBlock_scaling();
				me._hs_image_animated_2_info.logicBlock_visible();
				me._hs_image_animated_2_info.logicBlock_alpha();
				me._hs_image_animated_1_info.logicBlock_scaling();
				me._hs_image_animated_1_info.logicBlock_visible();
				me._hs_image_animated_1_info.logicBlock_alpha();
				me._hs_image_i_1_info.logicBlock_scaling();
				me._hs_image_i_1_info.logicBlock_bordercolor();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_info.logicBlock_scaling();
				me._hs_image_animated_2_info.logicBlock_visible();
				me._hs_image_animated_2_info.logicBlock_alpha();
				me._hs_image_animated_1_info.logicBlock_scaling();
				me._hs_image_animated_1_info.logicBlock_visible();
				me._hs_image_animated_1_info.logicBlock_alpha();
				me._hs_image_i_1_info.logicBlock_scaling();
				me._hs_image_i_1_info.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_info.logicBlock_scaling();
				me._hs_image_i_1_info.logicBlock_bordercolor();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_info.logicBlock_visible();
				me._hs_image_animated_1_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_info.logicBlock_scaling();
				me._hs_image_animated_2_info.logicBlock_alpha();
				me._hs_image_animated_1_info.logicBlock_scaling();
				me._hs_image_animated_1_info.logicBlock_alpha();
			};
			me.__div = me._hotspot_info_button;
	};
	function SkinHotspotClass_hotspot_m(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_m=document.createElement('div');
		el.ggId="Hotspot M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot hotspot";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_m.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_m.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_m.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_m']=true;
			me._hs_image_i_1_m.logicBlock_scaling();
			me._hs_image_i_1_m.logicBlock_bordercolor();
			me._nodeimage_1_m.logicBlock_scaling();
			me._nodeimage_1_m.logicBlock_angle();
			me._nodeimage_1_m.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_m.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_m']=false;
			me._hs_image_i_1_m.logicBlock_scaling();
			me._hs_image_i_1_m.logicBlock_bordercolor();
			me._nodeimage_1_m.logicBlock_scaling();
			me._nodeimage_1_m.logicBlock_angle();
			me._nodeimage_1_m.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_m=document.createElement('div');
		el.ggId="hs_image_animated_2_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe hotspot-pulsate-big";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_m.ggParameter.sx = 0.8;
					me._hs_image_animated_2_m.ggParameter.sy = 0.8;
					me._hs_image_animated_2_m.style.transform=parameterToTransform(me._hs_image_animated_2_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_m);}, 550);
				}
				else {
					me._hs_image_animated_2_m.ggParameter.sx = 1;
					me._hs_image_animated_2_m.ggParameter.sy = 1;
					me._hs_image_animated_2_m.style.transform=parameterToTransform(me._hs_image_animated_2_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_m);}, 550);
				}
			}
		}
		me._hs_image_animated_2_m.logicBlock_scaling();
		me._hs_image_animated_2_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_m.style.visibility=(Number(me._hs_image_animated_2_m.style.opacity)>0||!me._hs_image_animated_2_m.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_m.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_m.style.visibility="hidden";
					me._hs_image_animated_2_m.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_m.logicBlock_visible();
		me._hs_image_animated_2_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_m.style.visibility=me._hs_image_animated_2_m.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_m.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_m.style.opacity == 0.0) { me._hs_image_animated_2_m.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_m.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_m.logicBlock_alpha();
		me._hs_image_animated_2_m.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_m.appendChild(me._hs_image_animated_2_m);
		el=me._hs_image_animated_1_m=document.createElement('div');
		el.ggId="hs_image_animated_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle hotspot-pulsate-small";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_m.ggParameter.sx = 0.8;
					me._hs_image_animated_1_m.ggParameter.sy = 0.8;
					me._hs_image_animated_1_m.style.transform=parameterToTransform(me._hs_image_animated_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_m);}, 550);
				}
				else {
					me._hs_image_animated_1_m.ggParameter.sx = 0.5;
					me._hs_image_animated_1_m.ggParameter.sy = 0.5;
					me._hs_image_animated_1_m.style.transform=parameterToTransform(me._hs_image_animated_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_m);}, 550);
				}
			}
		}
		me._hs_image_animated_1_m.logicBlock_scaling();
		me._hs_image_animated_1_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_m.style.visibility=(Number(me._hs_image_animated_1_m.style.opacity)>0||!me._hs_image_animated_1_m.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_m.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_m.style.visibility="hidden";
					me._hs_image_animated_1_m.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_m.logicBlock_visible();
		me._hs_image_animated_1_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_m.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_m.style.opacity == 0.0) { me._hs_image_animated_1_m.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_m.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_m.style.visibility=me._hs_image_animated_1_m.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_m.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_m.logicBlock_alpha();
		me._hs_image_animated_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_m.appendChild(me._hs_image_animated_1_m);
		el=me._hs_image_i_1_m=document.createElement('div');
		el.ggId="hs_image_i_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle hotspot-main";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_m.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_m.ggParameter.sx = 0.8;
					me._hs_image_i_1_m.ggParameter.sy = 0.8;
					me._hs_image_i_1_m.style.transform=parameterToTransform(me._hs_image_i_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_m);}, 550);
				}
				else {
					me._hs_image_i_1_m.ggParameter.sx = 0.5;
					me._hs_image_i_1_m.ggParameter.sy = 0.5;
					me._hs_image_i_1_m.style.transform=parameterToTransform(me._hs_image_i_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_m);}, 550);
				}
			}
		}
		me._hs_image_i_1_m.logicBlock_scaling();
		me._hs_image_i_1_m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_m.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_m.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_m.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_1_m.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_m.logicBlock_bordercolor();
		me._hs_image_i_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_m.appendChild(me._hs_image_i_1_m);
		el=me._nodeimage_1_m=document.createElement('div');
		els=me._nodeimage_1_m__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_ht_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_m";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 1px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_m.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_m.ggParameter.sx = 3;
					me._nodeimage_1_m.ggParameter.sy = 3;
					me._nodeimage_1_m.style.transform=parameterToTransform(me._nodeimage_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_m);}, 1050);
				}
				else {
					me._nodeimage_1_m.ggParameter.sx = 0;
					me._nodeimage_1_m.ggParameter.sy = 0;
					me._nodeimage_1_m.style.transform=parameterToTransform(me._nodeimage_1_m.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_m);}, 1050);
				}
			}
		}
		me._nodeimage_1_m.logicBlock_scaling();
		me._nodeimage_1_m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_m.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_m.ggParameter.a = 360;
					me._nodeimage_1_m.style.transform=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
				else {
					me._nodeimage_1_m.ggParameter.a = -360;
					me._nodeimage_1_m.style.transform=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
			}
		}
		me._nodeimage_1_m.logicBlock_angle();
		me._nodeimage_1_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_m.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_m.style.visibility=me._nodeimage_1_m.ggVisible?'inherit':'hidden';
					me._nodeimage_1_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_m.style.opacity == 0.0) { me._nodeimage_1_m.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_m.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_m.logicBlock_alpha();
		me._nodeimage_1_m.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_m.appendChild(me._nodeimage_1_m);
		me.elementMouseOver['hotspot_m']=false;
		me._hs_image_animated_2_m.logicBlock_scaling();
		me._hs_image_animated_2_m.logicBlock_visible();
		me._hs_image_animated_2_m.logicBlock_alpha();
		me._hs_image_animated_1_m.logicBlock_scaling();
		me._hs_image_animated_1_m.logicBlock_visible();
		me._hs_image_animated_1_m.logicBlock_alpha();
		me._hs_image_i_1_m.logicBlock_scaling();
		me._hs_image_i_1_m.logicBlock_bordercolor();
		me._nodeimage_1_m.logicBlock_scaling();
		me._nodeimage_1_m.logicBlock_angle();
		me._nodeimage_1_m.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_m.logicBlock_scaling();
				me._hs_image_animated_2_m.logicBlock_visible();
				me._hs_image_animated_2_m.logicBlock_alpha();
				me._hs_image_animated_1_m.logicBlock_scaling();
				me._hs_image_animated_1_m.logicBlock_visible();
				me._hs_image_animated_1_m.logicBlock_alpha();
				me._hs_image_i_1_m.logicBlock_scaling();
				me._hs_image_i_1_m.logicBlock_bordercolor();
				me._nodeimage_1_m.logicBlock_scaling();
				me._nodeimage_1_m.logicBlock_angle();
				me._nodeimage_1_m.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_m.logicBlock_scaling();
				me._hs_image_animated_2_m.logicBlock_visible();
				me._hs_image_animated_2_m.logicBlock_alpha();
				me._hs_image_animated_1_m.logicBlock_scaling();
				me._hs_image_animated_1_m.logicBlock_visible();
				me._hs_image_animated_1_m.logicBlock_alpha();
				me._hs_image_i_1_m.logicBlock_scaling();
				me._hs_image_i_1_m.logicBlock_bordercolor();
				me._nodeimage_1_m.logicBlock_scaling();
				me._nodeimage_1_m.logicBlock_angle();
				me._nodeimage_1_m.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_1_m.logicBlock_scaling();
				me._hs_image_i_1_m.logicBlock_bordercolor();
				me._nodeimage_1_m.logicBlock_scaling();
				me._nodeimage_1_m.logicBlock_angle();
				me._nodeimage_1_m.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_m.logicBlock_visible();
				me._hs_image_animated_1_m.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_m.logicBlock_scaling();
				me._hs_image_animated_2_m.logicBlock_alpha();
				me._hs_image_animated_1_m.logicBlock_scaling();
				me._hs_image_animated_1_m.logicBlock_alpha();
			};
			me.__div = me._hotspot_m;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website_1', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_customimage.ggSubElement.setAttribute('alt', player._(me._ht_url_customimage.ggAltText));
			me._ht_url_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_customimage.ggText_untranslated = img;
			me._ht_url_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_customimage.ggSubElement.style.width = '0px';
			me._ht_url_customimage.ggSubElement.style.height = '0px';
			me._ht_url_customimage.ggSubElement.src='';
			me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_customimage.ggText != player._(me._ht_url_customimage.ggText_untranslated)) {
				me._ht_url_customimage.ggText = player._(me._ht_url_customimage.ggText_untranslated);
				me._ht_url_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style.transition='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage.ggSubElement.src='';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.logicBlock_visible();
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_customimage.ggScrollbars || currentWidth < me._ht_url_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_customimage.scrollLeft=currentWidth / 2 - me._ht_url_customimage.clientWidth / 2;
			}
			if (!me._ht_url_customimage.ggScrollbars || currentHeight < me._ht_url_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_customimage.scrollTop=currentHeight / 2 - me._ht_url_customimage.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_customimage);
		me.elementMouseOver['ht_url']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url_customimage.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_link(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._link=document.createElement('div');
		el.ggId="Link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -215px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._link.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._link.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._link.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._link.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['link']=true;
			me._link_info.logicBlock_visible();
			me._link_info.logicBlock_alpha();
			me._svg_link.logicBlock_angle();
			me._svg_link.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._link.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['link']=false;
			me._link_info.logicBlock_visible();
			me._link_info.logicBlock_alpha();
			me._svg_link.logicBlock_angle();
			me._svg_link.logicBlock_scaling();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._link.ggUpdatePosition=function (useTransition) {
		}
		el=me._link_info=document.createElement('div');
		els=me._link_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Link_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._link_info.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._link_info.ggUpdateText();
		player.addListener('changenode', function() {
			me._link_info.ggUpdateText();
		});
		el.appendChild(els);
		me._link_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._link_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._link_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._link_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._link_info.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStatePosition == 0) {
					me._link_info.style.left = 'calc(50% - (0px / 2))';
					me._link_info.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -50px)';
				}
				else {
					me._link_info.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._link_info.style.top='calc(50% - ((0px + 0px) / 2) + 0px)';
				}
			}
		}
		me._link_info.logicBlock_position();
		me._link_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['link'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._link_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._link_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._link_info.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStateVisible == 0) {
					me._link_info.style.visibility=(Number(me._link_info.style.opacity)>0||!me._link_info.style.opacity)?'inherit':'hidden';
					me._link_info.ggVisible=true;
				}
				else {
					me._link_info.style.visibility="hidden";
					me._link_info.ggVisible=false;
				}
			}
		}
		me._link_info.logicBlock_visible();
		me._link_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._link_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._link_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._link_info.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStateAlpha == 0) {
					me._link_info.style.visibility=me._link_info.ggVisible?'inherit':'hidden';
					me._link_info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._link_info.style.opacity == 0.0) { me._link_info.style.visibility="hidden"; } }, 505);
					me._link_info.style.opacity=0;
				}
			}
		}
		me._link_info.logicBlock_alpha();
		me._link_info.ggUpdatePosition=function (useTransition) {
		}
		me._link.appendChild(me._link_info);
		el=me._svg_link=document.createElement('div');
		els=me._svg_link__img=document.createElement('img');
		els.className='ggskin ggskin_svg_link';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADGUlEQVRYhc2ZP08UQRjGn90LUf4IUlwCV2ACH0ErK1sNCVTIB7DR8AU0nMEWjEhlorUCFgY7pdFWIwmBSgrLOxK7a6AAfhY7l5vdm+Vm9g7wSSbZ7M7zvE9mdmfeeTdSQQBTkmYk3ZFUMW3cPK5Lqpn2S9JWFEV/isYKMVUGXgD7hGPfcMsXYWwQqAKNAsayaBitAZ/YkYe5GUlv1Jq+LE7VmtK6uTeu1pSXcnh1SY+jKPrsY9RlLAKeA2c5o7AOPASGz9EYNn3Wc0b/DKgWMdcPfHQIHgHLwGgBzVFgBTh26G4C/SFiLnNfgYlQYw7tCaPVZtJXoOogvwLy3qUiJkvAqiPOYifiDO3v3IJn0BHgiWkjnpyFTKwzko/S2XkQqGUIq56BhoADi3cADH'+
			'lyX2di1nAtQY6p/eI7rcCcY7rmPLkl2t/JxWynMull4IiADwKYdhicDuBPkP66G9g7DskWZGPZV9zwS8C2xd/2HX1LYyXjYcl+aO+tDYqtcxFw17SOO5SDP5qZxb3mg6mM8/VQ8V4B2Mh4mYyVpEw2tq7CXE7sWQEfLMcnnLO3XjRI9u4Ty8/7WEnW0UQ9iqJGQfF7wKFp94pomNiH1q2KSC+wP4oIG4PfLZ1vXej8tHR+x0rnefU8ogduWtfBq0COh0rchdClIFbacV7WfJmwPdRiJal6ExVdPWwPbQbHr3qZkTRm3arFSs6tTZQk3b9UV2k8UPqQtRNLyp6qZi/PTxuysZOdpUfJwq6lsVuA70wWmsvMJ6vvDUlPQwP0AM9M7CZanugyYTUahUcQuEVOwhpLUhRFfyWtWJzrkt4RlnSe5lx3MleS9FbSNev2svGU'+
			'6lj40GT4axZvLYDnd2gynbs5dvYBj0zr8+T4Hzstkuvgvho43Z1ilBwjB50O7pbApoP8f5Q+jEh/jsljktNX0eLRS3pRPLJEq+SX3zaAeTqX3+ZN37zy27nT2qsC5qHcBcwxXVQBM2NyAFjMGYVQNIyWVwk41GgZWAL2ChjbM9ygInpwBcAyO6kk+7it1m+IZrJZs9qOuvgN8Q+B9Uvh1MSshwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg Link";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_link.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_link.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_link.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_link.style.transition='transform 500ms ease 0ms, transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateScaling == 0) {
					me._svg_link.ggParameter.sx = 2.5;
					me._svg_link.ggParameter.sy = 2.5;
					me._svg_link.style.transform=parameterToTransform(me._svg_link.ggParameter);
					setTimeout(function() {skin.updateSize(me._svg_link);}, 550);
				}
				else {
					me._svg_link.ggParameter.sx = 1;
					me._svg_link.ggParameter.sy = 1;
					me._svg_link.style.transform=parameterToTransform(me._svg_link.ggParameter);
					setTimeout(function() {skin.updateSize(me._svg_link);}, 550);
				}
			}
		}
		me._svg_link.logicBlock_scaling();
		me._svg_link.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_link.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_link.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_link.style.transition='transform 500ms ease 0ms, transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateAngle == 0) {
					me._svg_link.ggParameter.a = -360;
					me._svg_link.style.transform=parameterToTransform(me._svg_link.ggParameter);
				}
				else {
					me._svg_link.ggParameter.a = 0;
					me._svg_link.style.transform=parameterToTransform(me._svg_link.ggParameter);
				}
			}
		}
		me._svg_link.logicBlock_angle();
		me._svg_link.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_link.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_link.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_link.style.transition='transform 500ms ease 0ms, transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateVisible == 0) {
					me._svg_link.style.visibility="hidden";
					me._svg_link.ggVisible=false;
				}
				else {
					me._svg_link.style.visibility=(Number(me._svg_link.style.opacity)>0||!me._svg_link.style.opacity)?'inherit':'hidden';
					me._svg_link.ggVisible=true;
				}
			}
		}
		me._svg_link.logicBlock_visible();
		me._svg_link.onclick=function (e) {
				skin._info_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_title.ggUpdateText();
			skin._info_title.ggTextDiv.scrollTop = 0;
				skin._info_text_body.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_text_body.ggUpdateText();
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
		}
		me._svg_link.ggUpdatePosition=function (useTransition) {
		}
		me._link.appendChild(me._svg_link);
		me.elementMouseOver['link']=false;
		me._link_info.logicBlock_position();
		me._link_info.logicBlock_visible();
		me._link_info.logicBlock_alpha();
		me._svg_link.logicBlock_scaling();
		me._svg_link.logicBlock_angle();
		me._svg_link.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._link_info.logicBlock_visible();
				me._svg_link.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._link_info.logicBlock_visible();
				me._svg_link.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._link_info.logicBlock_position();
				me._link_info.logicBlock_visible();
				me._svg_link.logicBlock_visible();
			};
			me.__div = me._link;
	};
	function SkinHotspotClass_infopoint(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infopoint=document.createElement('div');
		el.ggId="Infopoint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infopoint.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infopoint.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infopoint.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infopoint.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['infopoint']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infopoint.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['infopoint']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._infopoint.ggUpdatePosition=function (useTransition) {
		}
		el=me._informationsicon=document.createElement('div');
		el.ggId="Informationsicon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 296px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._informationsicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._informationsicon.onmouseenter=function (e) {
			me.elementMouseOver['informationsicon']=true;
			me._tt_information.logicBlock_visible();
			me._tt_information.logicBlock_alpha();
			me._svg_1.logicBlock_angle();
			me._svg_1.logicBlock_scaling();
		}
		me._informationsicon.onmouseleave=function (e) {
			me.elementMouseOver['informationsicon']=false;
			me._tt_information.logicBlock_visible();
			me._tt_information.logicBlock_alpha();
			me._svg_1.logicBlock_angle();
			me._svg_1.logicBlock_scaling();
		}
		me._informationsicon.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=-346;
		el.ggDy=-186;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 346px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 186px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_information.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_information.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_information.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left = 'calc(50% - (0px / 2))';
					me._tt_information.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -50px)';
				}
				else {
					me._tt_information.style.left='calc(50% - ((0px + 0px) / 2) - 346px)';
					me._tt_information.style.top='calc(50% - ((0px + 0px) / 2) - 186px)';
				}
			}
		}
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['informationsicon'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.logicBlock_visible();
		me._tt_information.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_information.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_information.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_information.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStateAlpha == 0) {
					me._tt_information.style.visibility=me._tt_information.ggVisible?'inherit':'hidden';
					me._tt_information.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_information.style.opacity == 0.0) { me._tt_information.style.visibility="hidden"; } }, 505);
					me._tt_information.style.opacity=0;
				}
			}
		}
		me._tt_information.logicBlock_alpha();
		me._tt_information.ggUpdatePosition=function (useTransition) {
		}
		me._informationsicon.appendChild(me._tt_information);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADGUlEQVRYhc2ZP08UQRjGn90LUf4IUlwCV2ACH0ErK1sNCVTIB7DR8AU0nMEWjEhlorUCFgY7pdFWIwmBSgrLOxK7a6AAfhY7l5vdm+Vm9g7wSSbZ7M7zvE9mdmfeeTdSQQBTkmYk3ZFUMW3cPK5Lqpn2S9JWFEV/isYKMVUGXgD7hGPfcMsXYWwQqAKNAsayaBitAZ/YkYe5GUlv1Jq+LE7VmtK6uTeu1pSXcnh1SY+jKPrsY9RlLAKeA2c5o7AOPASGz9EYNn3Wc0b/DKgWMdcPfHQIHgHLwGgBzVFgBTh26G4C/SFiLnNfgYlQYw7tCaPVZtJXoOogvwLy3qUiJkvAqiPOYifiDO3v3IJn0BHgiWkjnpyFTKwzko/S2XkQqGUIq56BhoADi3cADH'+
			'lyX2di1nAtQY6p/eI7rcCcY7rmPLkl2t/JxWynMull4IiADwKYdhicDuBPkP66G9g7DskWZGPZV9zwS8C2xd/2HX1LYyXjYcl+aO+tDYqtcxFw17SOO5SDP5qZxb3mg6mM8/VQ8V4B2Mh4mYyVpEw2tq7CXE7sWQEfLMcnnLO3XjRI9u4Ty8/7WEnW0UQ9iqJGQfF7wKFp94pomNiH1q2KSC+wP4oIG4PfLZ1vXej8tHR+x0rnefU8ogduWtfBq0COh0rchdClIFbacV7WfJmwPdRiJal6ExVdPWwPbQbHr3qZkTRm3arFSs6tTZQk3b9UV2k8UPqQtRNLyp6qZi/PTxuysZOdpUfJwq6lsVuA70wWmsvMJ6vvDUlPQwP0AM9M7CZanugyYTUahUcQuEVOwhpLUhRFfyWtWJzrkt4RlnSe5lx3MleS9FbSNev2svGU'+
			'6lj40GT4axZvLYDnd2gynbs5dvYBj0zr8+T4Hzstkuvgvho43Z1ilBwjB50O7pbApoP8f5Q+jEh/jsljktNX0eLRS3pRPLJEq+SX3zaAeTqX3+ZN37zy27nT2qsC5qHcBcwxXVQBM2NyAFjMGYVQNIyWVwk41GgZWAL2ChjbM9ygInpwBcAyO6kk+7it1m+IZrJZs9qOuvgN8Q+B9Uvh1MSshwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-346;
		el.ggDy=-226;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 346px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 226px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style.transition='transform 500ms ease 0ms, transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 2.5;
					me._svg_1.ggParameter.sy = 2.5;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._svg_1);}, 550);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._svg_1);}, 550);
				}
			}
		}
		me._svg_1.logicBlock_scaling();
		me._svg_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_1.style.transition='transform 500ms ease 0ms, transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateAngle == 0) {
					me._svg_1.ggParameter.a = -360;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.a = 0;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.logicBlock_angle();
		me._svg_1.onclick=function (e) {
				me._info_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_title.ggUpdateText();
			me._info_title.ggTextDiv.scrollTop = 0;
				me._info_text_body.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_text_body.ggUpdateText();
			me._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._informationsicon.appendChild(me._svg_1);
		me._infopoint.appendChild(me._informationsicon);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='a:link { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:active { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:visited { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:hover { color: #FFFFFF !important; text-decoration: underline; font-weight: bold }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style.transition='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_visible();
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW'+
			'5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC'+
			'0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3'+
			'LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW'+
			'5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy'+
			'40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40Mzlj'+
			'MC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Lj'+
			'g3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseenter=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_close']=true;
		}
		me._ht_info_close.onmouseleave=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_close']=false;
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me._infopoint.appendChild(me._information);
		me.elementMouseOver['infopoint']=false;
		me.elementMouseOver['informationsicon']=false;
		me._tt_information.logicBlock_position();
		me._tt_information.logicBlock_visible();
		me._tt_information.logicBlock_alpha();
		me._svg_1.logicBlock_scaling();
		me._svg_1.logicBlock_angle();
		me._information.logicBlock_visible();
		me.elementMouseOver['ht_info_close']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._tt_information.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._tt_information.logicBlock_visible();
				me._information.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._tt_information.logicBlock_position();
				me._tt_information.logicBlock_visible();
				me._information.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._information.logicBlock_visible();
			};
			me.__div = me._infopoint;
	};
	function SkinHotspotClass_buttonrezeption0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._buttonrezeption0=document.createElement('div');
		el.ggId="ButtonRezeption";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._buttonrezeption0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._buttonrezeption0.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._buttonrezeption0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._buttonrezeption0.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['buttonrezeption0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._buttonrezeption0.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['buttonrezeption0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._buttonrezeption0.ggUpdatePosition=function (useTransition) {
		}
		el=me._buttonrezeption1=document.createElement('div');
		els=me._buttonrezeption1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Button-Rezeption";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hs-child-farbe-background text-color";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((calc(280px + 2px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : calc(280px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 4px;';
		hs+='font-size: 50px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._buttonrezeption1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._buttonrezeption1.ggUpdateText();
		player.addListener('changenode', function() {
			me._buttonrezeption1.ggUpdateText();
		});
		el.appendChild(els);
		me._buttonrezeption1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._buttonrezeption1.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._buttonrezeption1.style.transition='none';
			} else {
				me._buttonrezeption1.style.transition='all 500ms ease-out 0ms';
			}
			me._buttonrezeption1.style.opacity='1';
			me._buttonrezeption1.style.visibility=me._buttonrezeption1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['buttonrezeption1']=true;
		}
		me._buttonrezeption1.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._buttonrezeption1.style.transition='none';
			} else {
				me._buttonrezeption1.style.transition='all 500ms ease-out 0ms';
			}
			me._buttonrezeption1.style.opacity='0.7';
			me._buttonrezeption1.style.visibility=me._buttonrezeption1.ggVisible?'inherit':'hidden';
			me.elementMouseOver['buttonrezeption1']=false;
		}
		me._buttonrezeption1.ggUpdatePosition=function (useTransition) {
		}
		me._buttonrezeption0.appendChild(me._buttonrezeption1);
		me.elementMouseOver['buttonrezeption0']=false;
		me.elementMouseOver['buttonrezeption1']=false;
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._buttonrezeption1.ggParameter) {
					hs+=parameterToTransform(me._buttonrezeption1.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*0.6 + 0) + ') ';
				me._buttonrezeption1.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._buttonrezeption0;
	};
	function SkinHotspotClass_button(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._button=document.createElement('div');
		el.ggId="Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._button.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['button']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['button']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		el=me._kategorien_bestimmen=document.createElement('div');
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 350;
		el.ggHeight = 45;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._kategorien_bestimmen.ggUpdating == true) return;
			me._kategorien_bestimmen.ggUpdating = true;
			var el=me._kategorien_bestimmen;
			var curNumRows = 0;
			curNumRows = me._kategorien_bestimmen.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._kategorien_bestimmen.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._kategorien_bestimmen.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._kategorien_bestimmen.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._kategorien_bestimmen.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._kategorien_bestimmen.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._kategorien_bestimmen.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._kategorien_bestimmen.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._kategorien_bestimmen.ggWidth) + 'px';
				parameter.width=me._kategorien_bestimmen.ggWidth + 'px';
				parameter.height=me._kategorien_bestimmen.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_kategorien_bestimmen_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._kategorien_bestimmen.ggNodeCount = me._kategorien_bestimmen.ggNumFilterPassed;
			me._kategorien_bestimmen.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._kategorien_bestimmen.parentNode && me._kategorien_bestimmen.parentNode.classList.contains('ggskin_subelement') && me._kategorien_bestimmen.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._kategorien_bestimmen.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Apartment_Einstieg";
		el.ggTagTable = [
			{tag:"Apartment_Einstieg",title:"Zimmer",description:""},
			];
		el.ggId="Kategorien bestimmen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner rezeption-nav";
		el.ggType='cloner';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._kategorien_bestimmen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kategorien_bestimmen.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._kategorien_bestimmen.childNodes.length; i++) {
				var child=me._kategorien_bestimmen.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._kategorien_bestimmen.ggUpdatePosition=function (useTransition) {
			me._kategorien_bestimmen.ggUpdate();
		}
		me._button.appendChild(me._kategorien_bestimmen);
		me.elementMouseOver['button']=false;
			me.ggEvent_changenode=function() {
				for(var i = 0; i < me._kategorien_bestimmen.ggInstances.length; i++) {
					me._kategorien_bestimmen.ggInstances[i].ggEvent_changenode(event);
				}
				me._kategorien_bestimmen.ggUpdateConditionNodeChange();
			};
			me.ggEvent_viewerinit=function() {
				for(var i = 0; i < me._kategorien_bestimmen.ggInstances.length; i++) {
					me._kategorien_bestimmen.ggInstances[i].ggEvent_viewerinit(event);
				}
				me._kategorien_bestimmen.ggUpdate();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._kategorien_bestimmen.ggParameter) {
					hs+=parameterToTransform(me._kategorien_bestimmen.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*0.6 + 0) + ') ';
				me._kategorien_bestimmen.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._button;
	};
	function SkinHotspotClass_extern_hotspot_(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._extern_hotspot_=document.createElement('div');
		el.ggId="Extern Hotspot ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extern_hotspot_.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._extern_hotspot_.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['extern_hotspot_']=true;
			me._extern_hs_image_i_s.logicBlock_scaling();
			me._extern_hs_image_i_s.logicBlock_bordercolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['extern_hotspot_']=false;
			me._extern_hs_image_i_s.logicBlock_scaling();
			me._extern_hs_image_i_s.logicBlock_bordercolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_hs_image_animated_2_s=document.createElement('div');
		el.ggId="Extern hs_image_animated_2_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((21px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extern_hs_image_animated_2_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_2_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_2_s.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_2_s.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_2_s.style.transform=parameterToTransform(me._extern_hs_image_animated_2_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_2_s);}, 550);
				}
				else {
					me._extern_hs_image_animated_2_s.ggParameter.sx = 1;
					me._extern_hs_image_animated_2_s.ggParameter.sy = 1;
					me._extern_hs_image_animated_2_s.style.transform=parameterToTransform(me._extern_hs_image_animated_2_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_2_s);}, 550);
				}
			}
		}
		me._extern_hs_image_animated_2_s.logicBlock_scaling();
		me._extern_hs_image_animated_2_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_2_s.style.visibility=(Number(me._extern_hs_image_animated_2_s.style.opacity)>0||!me._extern_hs_image_animated_2_s.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_2_s.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_2_s.style.visibility="hidden";
					me._extern_hs_image_animated_2_s.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_2_s.logicBlock_visible();
		me._extern_hs_image_animated_2_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha == 0) {
					me._extern_hs_image_animated_2_s.style.visibility=me._extern_hs_image_animated_2_s.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_2_s.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._extern_hs_image_animated_2_s.style.opacity == 0.0) { me._extern_hs_image_animated_2_s.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_2_s.style.opacity=0;
				}
			}
		}
		me._extern_hs_image_animated_2_s.logicBlock_alpha();
		me._extern_hs_image_animated_2_s.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_animated_2_s);
		el=me._extern_hs_image_animated_1_s=document.createElement('div');
		el.ggId="Extern hs_image_animated_1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_hs_image_animated_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_1_s.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_1_s.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_1_s.style.transform=parameterToTransform(me._extern_hs_image_animated_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_1_s);}, 550);
				}
				else {
					me._extern_hs_image_animated_1_s.ggParameter.sx = 0.5;
					me._extern_hs_image_animated_1_s.ggParameter.sy = 0.5;
					me._extern_hs_image_animated_1_s.style.transform=parameterToTransform(me._extern_hs_image_animated_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_1_s);}, 550);
				}
			}
		}
		me._extern_hs_image_animated_1_s.logicBlock_scaling();
		me._extern_hs_image_animated_1_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_1_s.style.visibility=(Number(me._extern_hs_image_animated_1_s.style.opacity)>0||!me._extern_hs_image_animated_1_s.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_1_s.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_1_s.style.visibility="hidden";
					me._extern_hs_image_animated_1_s.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_1_s.logicBlock_visible();
		me._extern_hs_image_animated_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._extern_hs_image_animated_1_s.style.opacity == 0.0) { me._extern_hs_image_animated_1_s.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_1_s.style.opacity=0;
				}
				else {
					me._extern_hs_image_animated_1_s.style.visibility=me._extern_hs_image_animated_1_s.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_1_s.style.opacity=1;
				}
			}
		}
		me._extern_hs_image_animated_1_s.logicBlock_alpha();
		me._extern_hs_image_animated_1_s.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_animated_1_s);
		el=me._extern_hs_image_i_s=document.createElement('div');
		el.ggId="Extern hs_image_i_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_hs_image_i_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_i_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['extern_hotspot_'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_i_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_i_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_i_s.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_i_s.ggParameter.sx = 0.8;
					me._extern_hs_image_i_s.ggParameter.sy = 0.8;
					me._extern_hs_image_i_s.style.transform=parameterToTransform(me._extern_hs_image_i_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_i_s);}, 550);
				}
				else {
					me._extern_hs_image_i_s.ggParameter.sx = 0.5;
					me._extern_hs_image_i_s.ggParameter.sy = 0.5;
					me._extern_hs_image_i_s.style.transform=parameterToTransform(me._extern_hs_image_i_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_i_s);}, 550);
				}
			}
		}
		me._extern_hs_image_i_s.logicBlock_scaling();
		me._extern_hs_image_i_s.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['extern_hotspot_'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._extern_hs_image_i_s.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor == 0) {
					me._extern_hs_image_i_s.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._extern_hs_image_i_s.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._extern_hs_image_i_s.logicBlock_bordercolor();
		me._extern_hs_image_i_s.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_i_s);
		el=me._mousetarget_container_s=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="mousetarget_container_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mousetarget_container_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mousetarget_container_s.onmouseenter=function (e) {
			me.elementMouseOver['mousetarget_container_s']=true;
			me._extern_nodeimage_1_s.logicBlock_scaling();
			me._extern_nodeimage_1_s.logicBlock_angle();
			me._extern_nodeimage_1_s.logicBlock_alpha();
		}
		me._mousetarget_container_s.onmouseleave=function (e) {
			me.elementMouseOver['mousetarget_container_s']=false;
			me._extern_nodeimage_1_s.logicBlock_scaling();
			me._extern_nodeimage_1_s.logicBlock_angle();
			me._extern_nodeimage_1_s.logicBlock_alpha();
		}
		me._mousetarget_container_s.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_nodeimage_1_s=document.createElement('div');
		els=me._extern_nodeimage_1_s__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._extern_nodeimage_1_s.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._extern_nodeimage_1_s.ggSubElement.setAttribute('alt', player._(me._extern_nodeimage_1_s.ggAltText));
			me._extern_nodeimage_1_s.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._extern_nodeimage_1_s.ggText_untranslated = img;
			me._extern_nodeimage_1_s.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._extern_nodeimage_1_s.ggSubElement.style.width = '0px';
			me._extern_nodeimage_1_s.ggSubElement.style.height = '0px';
			me._extern_nodeimage_1_s.ggSubElement.src='';
			me._extern_nodeimage_1_s.ggSubElement.src=me._extern_nodeimage_1_s.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._extern_nodeimage_1_s.ggText != player._(me._extern_nodeimage_1_s.ggText_untranslated)) {
				me._extern_nodeimage_1_s.ggText = player._(me._extern_nodeimage_1_s.ggText_untranslated);
				me._extern_nodeimage_1_s.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="Extern NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_nodeimage_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_nodeimage_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateScaling == 0) {
					me._extern_nodeimage_1_s.ggParameter.sx = 3;
					me._extern_nodeimage_1_s.ggParameter.sy = 3;
					me._extern_nodeimage_1_s.style.transform=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_s);}, 1050);
				}
				else {
					me._extern_nodeimage_1_s.ggParameter.sx = 0;
					me._extern_nodeimage_1_s.ggParameter.sy = 0;
					me._extern_nodeimage_1_s.style.transform=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_s);}, 1050);
				}
			}
		}
		me._extern_nodeimage_1_s.logicBlock_scaling();
		me._extern_nodeimage_1_s.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._extern_nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateAngle == 0) {
					me._extern_nodeimage_1_s.ggParameter.a = 360;
					me._extern_nodeimage_1_s.style.transform=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
				else {
					me._extern_nodeimage_1_s.ggParameter.a = -360;
					me._extern_nodeimage_1_s.style.transform=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_s.logicBlock_angle();
		me._extern_nodeimage_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_nodeimage_1_s.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha == 0) {
					me._extern_nodeimage_1_s.style.visibility=me._extern_nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_s.ggSubElement.src=me._extern_nodeimage_1_s.ggText;
					me._extern_nodeimage_1_s.style.opacity=1;
				}
				else {
					me._extern_nodeimage_1_s.style.visibility=me._extern_nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_s.ggSubElement.src=me._extern_nodeimage_1_s.ggText;
					me._extern_nodeimage_1_s.style.opacity=0.01;
				}
			}
		}
		me._extern_nodeimage_1_s.logicBlock_alpha();
		me._extern_nodeimage_1_s.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._extern_nodeimage_1_s.clientWidth;
			var parentHeight = me._extern_nodeimage_1_s.clientHeight;
			var img = me._extern_nodeimage_1_s__img;
			var aspectRatioDiv = me._extern_nodeimage_1_s.clientWidth / me._extern_nodeimage_1_s.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._extern_nodeimage_1_s.ggScrollbars || currentWidth < me._extern_nodeimage_1_s.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._extern_nodeimage_1_s.scrollLeft=currentWidth / 2 - me._extern_nodeimage_1_s.clientWidth / 2;
			}
			if (!me._extern_nodeimage_1_s.ggScrollbars || currentHeight < me._extern_nodeimage_1_s.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._extern_nodeimage_1_s.scrollTop=currentHeight / 2 - me._extern_nodeimage_1_s.clientHeight / 2;
			}
		}
		me._mousetarget_container_s.appendChild(me._extern_nodeimage_1_s);
		me._extern_hotspot_.appendChild(me._mousetarget_container_s);
		me.elementMouseOver['extern_hotspot_']=false;
		me._extern_hs_image_animated_2_s.logicBlock_scaling();
		me._extern_hs_image_animated_2_s.logicBlock_visible();
		me._extern_hs_image_animated_2_s.logicBlock_alpha();
		me._extern_hs_image_animated_1_s.logicBlock_scaling();
		me._extern_hs_image_animated_1_s.logicBlock_visible();
		me._extern_hs_image_animated_1_s.logicBlock_alpha();
		me._extern_hs_image_i_s.logicBlock_scaling();
		me._extern_hs_image_i_s.logicBlock_bordercolor();
		me.elementMouseOver['mousetarget_container_s']=false;
		me._extern_nodeimage_1_s.logicBlock_scaling();
		me._extern_nodeimage_1_s.logicBlock_angle();
		me._extern_nodeimage_1_s.logicBlock_alpha();
		me._extern_nodeimage_1_s.ggSetImage("https:\/\/logos.360ty.cloud\/"+player._(me.hotspot.title));
			me.ggEvent_changenode=function() {
				me._extern_hs_image_animated_2_s.logicBlock_scaling();
				me._extern_hs_image_animated_2_s.logicBlock_visible();
				me._extern_hs_image_animated_2_s.logicBlock_alpha();
				me._extern_hs_image_animated_1_s.logicBlock_scaling();
				me._extern_hs_image_animated_1_s.logicBlock_visible();
				me._extern_hs_image_animated_1_s.logicBlock_alpha();
				me._extern_hs_image_i_s.logicBlock_scaling();
				me._extern_hs_image_i_s.logicBlock_bordercolor();
				me._extern_nodeimage_1_s.logicBlock_scaling();
				me._extern_nodeimage_1_s.logicBlock_angle();
				me._extern_nodeimage_1_s.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._extern_hs_image_animated_2_s.logicBlock_scaling();
				me._extern_hs_image_animated_2_s.logicBlock_visible();
				me._extern_hs_image_animated_2_s.logicBlock_alpha();
				me._extern_hs_image_animated_1_s.logicBlock_scaling();
				me._extern_hs_image_animated_1_s.logicBlock_visible();
				me._extern_hs_image_animated_1_s.logicBlock_alpha();
				me._extern_hs_image_i_s.logicBlock_scaling();
				me._extern_hs_image_i_s.logicBlock_bordercolor();
				me._extern_nodeimage_1_s.logicBlock_scaling();
				me._extern_nodeimage_1_s.logicBlock_angle();
				me._extern_nodeimage_1_s.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._extern_hs_image_i_s.logicBlock_scaling();
				me._extern_hs_image_i_s.logicBlock_bordercolor();
				me._extern_nodeimage_1_s.logicBlock_scaling();
				me._extern_nodeimage_1_s.logicBlock_angle();
				me._extern_nodeimage_1_s.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._extern_hs_image_animated_2_s.logicBlock_visible();
				me._extern_hs_image_animated_1_s.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._extern_hs_image_animated_2_s.logicBlock_scaling();
				me._extern_hs_image_animated_2_s.logicBlock_alpha();
				me._extern_hs_image_animated_1_s.logicBlock_scaling();
				me._extern_hs_image_animated_1_s.logicBlock_alpha();
			};
			me.__div = me._extern_hotspot_;
	};
	function SkinHotspotClass_drone_extern(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._drone_extern=document.createElement('div');
		el.ggId="Drone Extern";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._drone_extern.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._drone_extern.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),"_self");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_extern.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_extern.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['drone_extern']=true;
			me._nodeimage_droneextern_2.logicBlock_scaling();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_extern.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['drone_extern']=false;
			me._nodeimage_droneextern_2.logicBlock_scaling();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_extern.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_droneextern_5=document.createElement('div');
		el.ggId="NodeImage_DroneExtern_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_droneextern_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_droneextern_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_droneextern_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_droneextern_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_droneextern_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_5.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_droneextern_5.ggParameter.sx = 0.8;
					me._nodeimage_droneextern_5.ggParameter.sy = 0.8;
					me._nodeimage_droneextern_5.style.transform=parameterToTransform(me._nodeimage_droneextern_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_5);}, 550);
				}
				else {
					me._nodeimage_droneextern_5.ggParameter.sx = 1;
					me._nodeimage_droneextern_5.ggParameter.sy = 1;
					me._nodeimage_droneextern_5.style.transform=parameterToTransform(me._nodeimage_droneextern_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_5);}, 550);
				}
			}
		}
		me._nodeimage_droneextern_5.logicBlock_scaling();
		me._nodeimage_droneextern_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_droneextern_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_droneextern_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_droneextern_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_5.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_droneextern_5.style.visibility=(Number(me._nodeimage_droneextern_5.style.opacity)>0||!me._nodeimage_droneextern_5.style.opacity)?'inherit':'hidden';
					me._nodeimage_droneextern_5.ggVisible=true;
				}
				else {
					me._nodeimage_droneextern_5.style.visibility="hidden";
					me._nodeimage_droneextern_5.ggVisible=false;
				}
			}
		}
		me._nodeimage_droneextern_5.logicBlock_visible();
		me._nodeimage_droneextern_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_droneextern_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_droneextern_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_droneextern_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_5.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_droneextern_5.style.visibility=me._nodeimage_droneextern_5.ggVisible?'inherit':'hidden';
					me._nodeimage_droneextern_5.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._nodeimage_droneextern_5.style.opacity == 0.0) { me._nodeimage_droneextern_5.style.visibility="hidden"; } }, 505);
					me._nodeimage_droneextern_5.style.opacity=0;
				}
			}
		}
		me._nodeimage_droneextern_5.logicBlock_alpha();
		me._nodeimage_droneextern_5.ggUpdatePosition=function (useTransition) {
		}
		me._drone_extern.appendChild(me._nodeimage_droneextern_5);
		el=me._nodeimage_droneextern_4=document.createElement('div');
		el.ggId="NodeImage_DroneExtern_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_droneextern_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_droneextern_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_droneextern_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_droneextern_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_droneextern_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_4.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_droneextern_4.ggParameter.sx = 0.8;
					me._nodeimage_droneextern_4.ggParameter.sy = 0.8;
					me._nodeimage_droneextern_4.style.transform=parameterToTransform(me._nodeimage_droneextern_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_4);}, 550);
				}
				else {
					me._nodeimage_droneextern_4.ggParameter.sx = 0.5;
					me._nodeimage_droneextern_4.ggParameter.sy = 0.5;
					me._nodeimage_droneextern_4.style.transform=parameterToTransform(me._nodeimage_droneextern_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_4);}, 550);
				}
			}
		}
		me._nodeimage_droneextern_4.logicBlock_scaling();
		me._nodeimage_droneextern_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_droneextern_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_droneextern_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_droneextern_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_4.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_droneextern_4.style.visibility=(Number(me._nodeimage_droneextern_4.style.opacity)>0||!me._nodeimage_droneextern_4.style.opacity)?'inherit':'hidden';
					me._nodeimage_droneextern_4.ggVisible=true;
				}
				else {
					me._nodeimage_droneextern_4.style.visibility="hidden";
					me._nodeimage_droneextern_4.ggVisible=false;
				}
			}
		}
		me._nodeimage_droneextern_4.logicBlock_visible();
		me._nodeimage_droneextern_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_droneextern_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_droneextern_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_droneextern_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_droneextern_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nodeimage_droneextern_4.style.opacity == 0.0) { me._nodeimage_droneextern_4.style.visibility="hidden"; } }, 505);
					me._nodeimage_droneextern_4.style.opacity=0;
				}
				else {
					me._nodeimage_droneextern_4.style.visibility=me._nodeimage_droneextern_4.ggVisible?'inherit':'hidden';
					me._nodeimage_droneextern_4.style.opacity=1;
				}
			}
		}
		me._nodeimage_droneextern_4.logicBlock_alpha();
		me._nodeimage_droneextern_4.ggUpdatePosition=function (useTransition) {
		}
		me._drone_extern.appendChild(me._nodeimage_droneextern_4);
		el=me._nodeimage_droneextern_2=document.createElement('div');
		el.ggId="NodeImage_DroneExtern_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_droneextern_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_droneextern_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_extern'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_droneextern_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_droneextern_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_droneextern_2.style.transition='transform 500ms ease 0ms';
				if (me._nodeimage_droneextern_2.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_droneextern_2.ggParameter.sx = 0.8;
					me._nodeimage_droneextern_2.ggParameter.sy = 0.8;
					me._nodeimage_droneextern_2.style.transform=parameterToTransform(me._nodeimage_droneextern_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_2);}, 550);
				}
				else {
					me._nodeimage_droneextern_2.ggParameter.sx = 0.5;
					me._nodeimage_droneextern_2.ggParameter.sy = 0.5;
					me._nodeimage_droneextern_2.style.transform=parameterToTransform(me._nodeimage_droneextern_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_droneextern_2);}, 550);
				}
			}
		}
		me._nodeimage_droneextern_2.logicBlock_scaling();
		me._nodeimage_droneextern_2.ggUpdatePosition=function (useTransition) {
		}
		me._drone_extern.appendChild(me._nodeimage_droneextern_2);
		el=me._ht_image_drohne=document.createElement('div');
		els=me._ht_image_drohne__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_drohne__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_drohne__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_drohne__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_drohne";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_drohne.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_drohne.onmouseenter=function (e) {
			me._ht_image_drohne__img.style.visibility='hidden';
			me._ht_image_drohne__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_drohne']=true;
		}
		me._ht_image_drohne.onmouseleave=function (e) {
			me._ht_image_drohne__img.style.visibility='inherit';
			me._ht_image_drohne__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_drohne']=false;
		}
		me._ht_image_drohne.ggUpdatePosition=function (useTransition) {
		}
		me._drone_extern.appendChild(me._ht_image_drohne);
		el=me._mousetarget_containerdrone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="mousetarget_containerdrone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mousetarget_containerdrone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mousetarget_containerdrone.onmouseenter=function (e) {
			me.elementMouseOver['mousetarget_containerdrone']=true;
			me._extern_nodeimage_1_drone.logicBlock_scaling();
			me._extern_nodeimage_1_drone.logicBlock_angle();
			me._extern_nodeimage_1_drone.logicBlock_alpha();
		}
		me._mousetarget_containerdrone.onmouseleave=function (e) {
			me.elementMouseOver['mousetarget_containerdrone']=false;
			me._extern_nodeimage_1_drone.logicBlock_scaling();
			me._extern_nodeimage_1_drone.logicBlock_angle();
			me._extern_nodeimage_1_drone.logicBlock_alpha();
		}
		me._mousetarget_containerdrone.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_nodeimage_1_drone=document.createElement('div');
		els=me._extern_nodeimage_1_drone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._extern_nodeimage_1_drone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._extern_nodeimage_1_drone.ggSubElement.setAttribute('alt', player._(me._extern_nodeimage_1_drone.ggAltText));
			me._extern_nodeimage_1_drone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._extern_nodeimage_1_drone.ggText_untranslated = img;
			me._extern_nodeimage_1_drone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._extern_nodeimage_1_drone.ggSubElement.style.width = '0px';
			me._extern_nodeimage_1_drone.ggSubElement.style.height = '0px';
			me._extern_nodeimage_1_drone.ggSubElement.src='';
			me._extern_nodeimage_1_drone.ggSubElement.src=me._extern_nodeimage_1_drone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._extern_nodeimage_1_drone.ggText != player._(me._extern_nodeimage_1_drone.ggText_untranslated)) {
				me._extern_nodeimage_1_drone.ggText = player._(me._extern_nodeimage_1_drone.ggText_untranslated);
				me._extern_nodeimage_1_drone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="Extern NodeImage 1_drone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_nodeimage_1_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_nodeimage_1_drone.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mousetarget_containerdrone'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_nodeimage_1_drone.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_nodeimage_1_drone.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_nodeimage_1_drone.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_drone.ggCurrentLogicStateScaling == 0) {
					me._extern_nodeimage_1_drone.ggParameter.sx = 3;
					me._extern_nodeimage_1_drone.ggParameter.sy = 3;
					me._extern_nodeimage_1_drone.style.transform=parameterToTransform(me._extern_nodeimage_1_drone.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_drone);}, 1050);
				}
				else {
					me._extern_nodeimage_1_drone.ggParameter.sx = 0;
					me._extern_nodeimage_1_drone.ggParameter.sy = 0;
					me._extern_nodeimage_1_drone.style.transform=parameterToTransform(me._extern_nodeimage_1_drone.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_drone);}, 1050);
				}
			}
		}
		me._extern_nodeimage_1_drone.logicBlock_scaling();
		me._extern_nodeimage_1_drone.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['mousetarget_containerdrone'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._extern_nodeimage_1_drone.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._extern_nodeimage_1_drone.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._extern_nodeimage_1_drone.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_drone.ggCurrentLogicStateAngle == 0) {
					me._extern_nodeimage_1_drone.ggParameter.a = 360;
					me._extern_nodeimage_1_drone.style.transform=parameterToTransform(me._extern_nodeimage_1_drone.ggParameter);
				}
				else {
					me._extern_nodeimage_1_drone.ggParameter.a = -360;
					me._extern_nodeimage_1_drone.style.transform=parameterToTransform(me._extern_nodeimage_1_drone.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_drone.logicBlock_angle();
		me._extern_nodeimage_1_drone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mousetarget_containerdrone'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_nodeimage_1_drone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_nodeimage_1_drone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_nodeimage_1_drone.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_drone.ggCurrentLogicStateAlpha == 0) {
					me._extern_nodeimage_1_drone.style.visibility=me._extern_nodeimage_1_drone.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_drone.ggSubElement.src=me._extern_nodeimage_1_drone.ggText;
					me._extern_nodeimage_1_drone.style.opacity=1;
				}
				else {
					me._extern_nodeimage_1_drone.style.visibility=me._extern_nodeimage_1_drone.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_drone.ggSubElement.src=me._extern_nodeimage_1_drone.ggText;
					me._extern_nodeimage_1_drone.style.opacity=0.01;
				}
			}
		}
		me._extern_nodeimage_1_drone.logicBlock_alpha();
		me._extern_nodeimage_1_drone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._extern_nodeimage_1_drone.clientWidth;
			var parentHeight = me._extern_nodeimage_1_drone.clientHeight;
			var img = me._extern_nodeimage_1_drone__img;
			var aspectRatioDiv = me._extern_nodeimage_1_drone.clientWidth / me._extern_nodeimage_1_drone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._extern_nodeimage_1_drone.ggScrollbars || currentWidth < me._extern_nodeimage_1_drone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._extern_nodeimage_1_drone.scrollLeft=currentWidth / 2 - me._extern_nodeimage_1_drone.clientWidth / 2;
			}
			if (!me._extern_nodeimage_1_drone.ggScrollbars || currentHeight < me._extern_nodeimage_1_drone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._extern_nodeimage_1_drone.scrollTop=currentHeight / 2 - me._extern_nodeimage_1_drone.clientHeight / 2;
			}
		}
		me._mousetarget_containerdrone.appendChild(me._extern_nodeimage_1_drone);
		me._drone_extern.appendChild(me._mousetarget_containerdrone);
		me.elementMouseOver['drone_extern']=false;
		me._nodeimage_droneextern_5.logicBlock_scaling();
		me._nodeimage_droneextern_5.logicBlock_visible();
		me._nodeimage_droneextern_5.logicBlock_alpha();
		me._nodeimage_droneextern_4.logicBlock_scaling();
		me._nodeimage_droneextern_4.logicBlock_visible();
		me._nodeimage_droneextern_4.logicBlock_alpha();
		me._nodeimage_droneextern_2.logicBlock_scaling();
		me.elementMouseOver['ht_image_drohne']=false;
		me.elementMouseOver['mousetarget_containerdrone']=false;
		me._extern_nodeimage_1_drone.logicBlock_scaling();
		me._extern_nodeimage_1_drone.logicBlock_angle();
		me._extern_nodeimage_1_drone.logicBlock_alpha();
		me._extern_nodeimage_1_drone.ggSetImage("https:\/\/logos.360ty.cloud\/"+player._(me.hotspot.title));
			me.ggEvent_changenode=function() {
				me._nodeimage_droneextern_5.logicBlock_scaling();
				me._nodeimage_droneextern_5.logicBlock_visible();
				me._nodeimage_droneextern_5.logicBlock_alpha();
				me._nodeimage_droneextern_4.logicBlock_scaling();
				me._nodeimage_droneextern_4.logicBlock_visible();
				me._nodeimage_droneextern_4.logicBlock_alpha();
				me._nodeimage_droneextern_2.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_angle();
				me._extern_nodeimage_1_drone.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._nodeimage_droneextern_5.logicBlock_scaling();
				me._nodeimage_droneextern_5.logicBlock_visible();
				me._nodeimage_droneextern_5.logicBlock_alpha();
				me._nodeimage_droneextern_4.logicBlock_scaling();
				me._nodeimage_droneextern_4.logicBlock_visible();
				me._nodeimage_droneextern_4.logicBlock_alpha();
				me._nodeimage_droneextern_2.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_angle();
				me._extern_nodeimage_1_drone.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._nodeimage_droneextern_2.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_scaling();
				me._extern_nodeimage_1_drone.logicBlock_angle();
				me._extern_nodeimage_1_drone.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._nodeimage_droneextern_5.logicBlock_visible();
				me._nodeimage_droneextern_4.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._nodeimage_droneextern_5.logicBlock_scaling();
				me._nodeimage_droneextern_5.logicBlock_alpha();
				me._nodeimage_droneextern_4.logicBlock_scaling();
				me._nodeimage_droneextern_4.logicBlock_alpha();
			};
			me.__div = me._drone_extern;
	};
	function SkinHotspotClass_panel(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._panel=document.createElement('div');
		el.ggId="Panel";
		el.ggDx=137;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot hotspot";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 137px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._panel.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getViewerSize(true).width == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel.style.transition='opacity 1000ms ease 0ms';
				if (me._panel.ggCurrentLogicStateAlpha == 0) {
					me._panel.style.visibility=me._panel.ggVisible?'inherit':'hidden';
					me._panel.style.opacity=1;
				}
				else {
					me._panel.style.visibility=me._panel.ggVisible?'inherit':'hidden';
					me._panel.style.opacity=1;
				}
			}
		}
		me._panel.logicBlock_alpha();
		me._panel.onclick=function (e) {
			if (
				(
					((player.getHasTouch() == true))
				)
			) {
				var flag=me._panel_container.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._panel_container.style.transition='none';
				} else {
					me._panel_container.style.transition='all 1000ms ease-out 0ms';
				}
				if (flag) {
					me._panel_container.style.opacity='0';
					me._panel_container.style.visibility='hidden';
				} else {
					me._panel_container.style.opacity='1';
					me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
				}
				me._panel_container.ggOpacitiyActive=!flag;
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._panel.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._panel.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style.transition='none';
				me._panel_container.style.opacity='1';
				me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
			}
			me.elementMouseOver['panel']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._panel.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style.transition='none';
				me._panel_container.style.opacity='0';
				me._panel_container.style.visibility='hidden';
			}
			me.elementMouseOver['panel']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._panel.ggActivate=function () {
			if (
				(
					((player.getVariableValue('smallPanel') == true))
				)
			) {
				(function(){
function changeFontSize(className, fontSize){
document.querySelectorAll("."+className).forEach((textItem)=>{
textItem.childNodes[0].style.fontSize = fontSize + "px";
});
}

changeFontSize("panel_text_button", 11);
changeFontSize("panel_text_description",9);
changeFontSize("panel_text_header",10);
})()
			}
		}
		me._panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._panel_container=document.createElement('div');
		el.ggId="Panel_container";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 476px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -8px;';
		hs+='top : calc(50% - ((476px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 326px;';
		hs+='pointer-events:none;';
		hs+='-webkit-transition:opacity 1000ms ease-out; -moz-transition:opacity 1000ms ease-out; -o-transition:opacity 1000ms ease-out; transition:opacity 1000ms ease-out;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._panel_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('smallPanel') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._panel_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._panel_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._panel_container.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStatePosition == 0) {
					me._panel_container.style.right='3px';
					me._panel_container.style.top = 'calc(50% - (476px / 2))';
				}
				else {
					me._panel_container.style.right='-8px';
					me._panel_container.style.top='calc(50% - ((476px + 0px) / 2) + 0px)';
				}
			}
		}
		me._panel_container.logicBlock_position();
		me._panel_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('smallPanel') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._panel_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._panel_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._panel_container.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStateSize == 0) {
					me._panel_container.style.width='163px';
					me._panel_container.style.height='234px';
					me._panel_container.style.top = 'calc(50% - (234px / 2))';
					skin.updateSize(me._panel_container);
				}
				else {
					me._panel_container.style.width='326px';
					me._panel_container.style.height='476px';
					me._panel_container.style.top = 'calc(50% - (476px / 2))';
					skin.updateSize(me._panel_container);
				}
			}
		}
		me._panel_container.logicBlock_size();
		me._panel_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['panel_container'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel_container.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStateAlpha == 0) {
					me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
					me._panel_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._panel_container.style.opacity == 0.0) { me._panel_container.style.visibility="hidden"; } }, 1005);
					me._panel_container.style.opacity=0;
				}
			}
		}
		me._panel_container.logicBlock_alpha();
		me._panel_container.onmouseenter=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style.transition='none';
				me._panel_container.style.opacity='1';
				me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
			}
			me.elementMouseOver['panel_container']=true;
			me._panel_container.logicBlock_alpha();
		}
		me._panel_container.onmouseleave=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style.transition='none';
				me._panel_container.style.opacity='0';
				me._panel_container.style.visibility='hidden';
			}
			me.elementMouseOver['panel_container']=false;
			me._panel_container.logicBlock_alpha();
		}
		me._panel_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._panel_hover_rect=document.createElement('div');
		el.ggId="panel_hover_rect";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15.6442%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._panel_hover_rect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_hover_rect.onmouseenter=function (e) {
			me.elementMouseOver['panel_hover_rect']=true;
		}
		me._panel_hover_rect.onmouseleave=function (e) {
			me.elementMouseOver['panel_hover_rect']=false;
		}
		me._panel_hover_rect.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['panel_hover_rect']) {
				if (
					(
						((me.elementMouseOver['panel_container'] == true))
					)
				) {
					me._panel_hover_rect.style.transition='none';
					me._panel_hover_rect.style.visibility=(Number(me._panel_hover_rect.style.opacity)>0||!me._panel_hover_rect.style.opacity)?'inherit':'hidden';
					me._panel_hover_rect.ggVisible=true;
				}
				me._panel_container.style.transition='none';
				me._panel_container.style.opacity='1';
				me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
			}
		}
		me._panel_hover_rect.ggUpdatePosition=function (useTransition) {
		}
		me._panel_container.appendChild(me._panel_hover_rect);
		el=me._panel_rect=document.createElement('div');
		el.ggId="Panel_rect";
		el.ggDx=-10.7362;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 11;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #e64215;';
		hs+='border-radius : 7px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((95.09% + 0px) / 2) - 10.7362%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 95.09%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._panel_rect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_rect.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getViewerSize(true).width == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel_rect.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel_rect.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel_rect.style.transition='opacity 0s';
				if (me._panel_rect.ggCurrentLogicStateAlpha == 0) {
					me._panel_rect.style.visibility=me._panel_rect.ggVisible?'inherit':'hidden';
					me._panel_rect.style.opacity=1;
				}
				else {
					me._panel_rect.style.visibility=me._panel_rect.ggVisible?'inherit':'hidden';
					me._panel_rect.style.opacity=1;
				}
			}
		}
		me._panel_rect.logicBlock_alpha();
		me._panel_rect.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_panel=document.createElement('div');
		el.ggId="Button_panel";
		el.ggDx=0;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e64215;';
		hs+='border : 0px solid #818181;';
		hs+='border-radius : 4px;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10% + 0px) / 2) + 39%);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._button_panel.onclick=function (e) {
			player.openUrl(player._(me.hotspot.target),"_blank");
		}
		me._button_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._buttontext=document.createElement('div');
		els=me._buttontext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ButtonText";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_button";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 21px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 1px 2px 1px;';
		hs+='overflow: hidden;';
		hs+="display: flex; justify-content: center; align-items: center;";
		els.setAttribute('style',hs);
		me._buttontext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('panelText', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._buttontext.ggUpdateText();
		player.addListener('varchanged_panelText', function() {
			me._buttontext.ggUpdateText();
		});
		el.appendChild(els);
		me._buttontext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._buttontext.ggUpdatePosition=function (useTransition) {
		}
		me._button_panel.appendChild(me._buttontext);
		me._panel_rect.appendChild(me._button_panel);
		el=me._beschreibung=document.createElement('div');
		els=me._beschreibung__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Beschreibung";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_description";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(35,35,35,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 20%);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._beschreibung.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._beschreibung.ggUpdateText();
		player.addListener('changenode', function() {
			me._beschreibung.ggUpdateText();
		});
		el.appendChild(els);
		me._beschreibung.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._beschreibung.ggUpdatePosition=function (useTransition) {
		}
		me._panel_rect.appendChild(me._beschreibung);
		el=me._ueberschrift=document.createElement('div');
		els=me._ueberschrift__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ueberschrift";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_header";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0%);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ueberschrift.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ueberschrift.ggUpdateText();
		player.addListener('changenode', function() {
			me._ueberschrift.ggUpdateText();
		});
		el.appendChild(els);
		me._ueberschrift.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ueberschrift.ggUpdatePosition=function (useTransition) {
		}
		me._panel_rect.appendChild(me._ueberschrift);
		el=me._bild=document.createElement('div');
		els=me._bild__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._bild.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._bild.ggSubElement.setAttribute('alt', player._(me._bild.ggAltText));
			me._bild.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._bild.ggText_untranslated = img;
			me._bild.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._bild.ggSubElement.style.width = '0px';
			me._bild.ggSubElement.style.height = '0px';
			me._bild.ggSubElement.src='';
			me._bild.ggSubElement.src=me._bild.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._bild.ggText != player._(me._bild.ggText_untranslated)) {
				me._bild.ggText = player._(me._bild.ggText_untranslated);
				me._bild.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._bild.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._bild.ggText != ""+player._(me.hotspot.url)+"") {
				me._bild.ggText=""+player._(me.hotspot.url)+"";
				me._bild.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="bild";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 35%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 5.42%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bild.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bild.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._bild.clientWidth;
			var parentHeight = me._bild.clientHeight;
			var img = me._bild__img;
			var aspectRatioDiv = me._bild.clientWidth / me._bild.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = Math.round(parentWidth / aspectRatioImg);
			img.style.width=parentWidth + 'px';
			img.style.height='';
			if (!me._bild.ggScrollbars || currentWidth < me._bild.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._bild.scrollLeft=currentWidth / 2 - me._bild.clientWidth / 2;
			}
			if (!me._bild.ggScrollbars || currentHeight < me._bild.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._bild.scrollTop=currentHeight / 2 - me._bild.clientHeight / 2;
			}
		}
		me._panel_rect.appendChild(me._bild);
		el=me._arrow=document.createElement('div');
		els=me._arrow__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;position: relative;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._arrow.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._arrow.ggSubElement.setAttribute('alt', player._(me._arrow.ggAltText));
			me._arrow.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._arrow.ggText_untranslated = img;
			me._arrow.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._arrow.ggSubElement.style.width = '0px';
			me._arrow.ggSubElement.style.height = '0px';
			me._arrow.ggSubElement.src='';
			me._arrow.ggSubElement.src=me._arrow.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._arrow.ggText != player._(me._arrow.ggText_untranslated)) {
				me._arrow.ggText = player._(me._arrow.ggText_untranslated);
				me._arrow.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated="https://logos.360ty.cloud/arrow.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="Arrow";
		el.ggDx=52.26;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 7.98%;';
		hs+='left : calc(50% - ((12.9% + 0px) / 2) + 52.26%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7.98% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 12.9%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._arrow.clientWidth;
			var parentHeight = me._arrow.clientHeight;
			var img = me._arrow__img;
			var aspectRatioDiv = me._arrow.clientWidth / me._arrow.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._arrow.ggScrollbars || currentWidth < me._arrow.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._arrow.ggScrollbars || currentHeight < me._arrow.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._panel_rect.appendChild(me._arrow);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeT0iMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMCIgd2lkdGg9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZpZXdCb3g9IjAgMCA1MTEuNzYgNTExLjc2IiBoZWlnaHQ9IjUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIj4KIDxyZWN0IHdpZHRoPSI1MTEuNzYiIGZpbGw9IiNmZmZmZmYiIHNoYXBlPS'+
			'JzcXVhcmUiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzMsMCwwLDAuMzMsMTcxLjQzOTYwMzI3MTQ4NDM3LDE3MS40Mzk2MDMyNzE0ODQzNykiIGhlaWdodD0iNTExLjc2Ii8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni43NjQwNzQ3MDcwMzEyNiw3Ni43NjM4MTE0OTI5MTk5MykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI2U2NDIxNSIgZD0iTTQzNi44OTYsNzQuODY5Yy05OS44NC05OS44MTktMjYyLjIwOC05OS44MTktMzYyLjA0OCwwYy05OS43OTcsOTkuODE5LTk5Ljc5NywyNjIuMjI5LDAsMzYy'+
			'LjA0OCAgICBjNDkuOTIsNDkuODk5LDExNS40NzcsNzQuODM3LDE4MS4wMzUsNzQuODM3czEzMS4wOTMtMjQuOTM5LDE4MS4wMTMtNzQuODM3QzUzNi43MTUsMzM3LjA5OSw1MzYuNzE1LDE3NC42ODgsNDM2Ljg5Niw3NC44Njl6ICAgICBNMzYxLjQ2MSwzMzEuMzE3YzguMzQxLDguMzQxLDguMzQxLDIxLjgyNCwwLDMwLjE2NWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxICAgIGwtNzUuNDEzLTc1LjQzNWwtNzUuMzkyLDc1LjQxM2MtNC4xODEsNC4xNi05LjY0Myw2LjI1MS0xNS4wODMsNi4yNTFjLTUuNDYxLDAtMT'+
			'AuOTIzLTIuMDkxLTE1LjA4My02LjI1MSAgICBjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NWw3NS4zOTItNzUuNDEzbC03NS40MTMtNzUuNDEzYy04LjM0MS04LjM0MS04LjM0MS0yMS44NDUsMC0zMC4xNjUgICAgYzguMzItOC4zNDEsMjEuODI0LTguMzQxLDMwLjE2NSwwbDc1LjQxMyw3NS40MTNsNzUuNDEzLTc1LjQxM2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDAgICAgYzguMzQxLDguMzIsOC4zNDEsMjEuODI0LDAsMzAuMTY1bC03NS40MTMsNzUuNDEzTDM2MS40NjEsMzMxLjMxN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIi'+
			'Lz4KICAgPC9nPgogIDwvZz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=50.0011;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 11.9748%;';
		hs+='left : calc(50% - ((18.3875% + 0px) / 2) + 50.0011%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((11.9748% + 0px) / 2) - 50%);';
		hs+='visibility : hidden;';
		hs+='width : 18.3875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2.style.transition='';
				if (me._svg_2.ggCurrentLogicStateVisible == 0) {
					me._svg_2.style.visibility=(Number(me._svg_2.style.opacity)>0||!me._svg_2.style.opacity)?'inherit':'hidden';
					me._svg_2.ggVisible=true;
				}
				else {
					me._svg_2.style.visibility="hidden";
					me._svg_2.ggVisible=false;
				}
			}
		}
		me._svg_2.logicBlock_visible();
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._panel_rect.appendChild(me._svg_2);
		me._panel_container.appendChild(me._panel_rect);
		me._panel.appendChild(me._panel_container);
		el=me._hs_panel_container=document.createElement('div');
		el.ggId="hs_panel_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_panel_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_panel_container.onmouseenter=function (e) {
			me.elementMouseOver['hs_panel_container']=true;
			me._hs_image_i_1_panel.logicBlock_scaling();
			me._hs_image_i_1_panel.logicBlock_bordercolor();
		}
		me._hs_panel_container.onmouseleave=function (e) {
			me.elementMouseOver['hs_panel_container']=false;
			me._hs_image_i_1_panel.logicBlock_scaling();
			me._hs_image_i_1_panel.logicBlock_bordercolor();
		}
		me._hs_panel_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._hs_panel_container.appendChild(me._text_1);
		el=me._hs_image_i_1_panel=document.createElement('div');
		el.ggId="hs_image_i_1_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9;';
		hs+='background : rgba(230,66,21,0.352941);';
		hs+='border : 6px solid #e64215;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 12px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 12px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs_panel_container'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_panel.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_panel.ggParameter.sx = 0.8;
					me._hs_image_i_1_panel.ggParameter.sy = 0.8;
					me._hs_image_i_1_panel.style.transform=parameterToTransform(me._hs_image_i_1_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_panel);}, 550);
				}
				else {
					me._hs_image_i_1_panel.ggParameter.sx = 0.5;
					me._hs_image_i_1_panel.ggParameter.sy = 0.5;
					me._hs_image_i_1_panel.style.transform=parameterToTransform(me._hs_image_i_1_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_1_panel);}, 550);
				}
			}
		}
		me._hs_image_i_1_panel.logicBlock_scaling();
		me._hs_image_i_1_panel.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hs_panel_container'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_panel.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_panel.style.borderColor="rgba(230,66,21,1)";
				}
				else {
					me._hs_image_i_1_panel.style.borderColor="rgba(230,66,21,1)";
				}
			}
		}
		me._hs_image_i_1_panel.logicBlock_bordercolor();
		me._hs_image_i_1_panel.ggUpdatePosition=function (useTransition) {
		}
		me._hs_panel_container.appendChild(me._hs_image_i_1_panel);
		el=me._hs_image_animated_1_panel=document.createElement('div');
		el.ggId="hs_image_animated_1_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9;';
		hs+='border : 3px solid #e64215;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_panel.ggParameter.sx = 0.8;
					me._hs_image_animated_1_panel.ggParameter.sy = 0.8;
					me._hs_image_animated_1_panel.style.transform=parameterToTransform(me._hs_image_animated_1_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_panel);}, 550);
				}
				else {
					me._hs_image_animated_1_panel.ggParameter.sx = 0.5;
					me._hs_image_animated_1_panel.ggParameter.sy = 0.5;
					me._hs_image_animated_1_panel.style.transform=parameterToTransform(me._hs_image_animated_1_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_panel);}, 550);
				}
			}
		}
		me._hs_image_animated_1_panel.logicBlock_scaling();
		me._hs_image_animated_1_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_panel.style.visibility=(Number(me._hs_image_animated_1_panel.style.opacity)>0||!me._hs_image_animated_1_panel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_panel.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_panel.style.visibility="hidden";
					me._hs_image_animated_1_panel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_panel.logicBlock_visible();
		me._hs_image_animated_1_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_panel.style.opacity == 0.0) { me._hs_image_animated_1_panel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_panel.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_panel.style.visibility=me._hs_image_animated_1_panel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_panel.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_panel.logicBlock_alpha();
		me._hs_image_animated_1_panel.ggUpdatePosition=function (useTransition) {
		}
		me._hs_panel_container.appendChild(me._hs_image_animated_1_panel);
		el=me._hs_image_animated_2_panel=document.createElement('div');
		el.ggId="hs_image_animated_2_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9;';
		hs+='background : rgba(230,66,21,0.196078);';
		hs+='border : 2px solid #e64215;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_panel.ggParameter.sx = 0.8;
					me._hs_image_animated_2_panel.ggParameter.sy = 0.8;
					me._hs_image_animated_2_panel.style.transform=parameterToTransform(me._hs_image_animated_2_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_panel);}, 550);
				}
				else {
					me._hs_image_animated_2_panel.ggParameter.sx = 1;
					me._hs_image_animated_2_panel.ggParameter.sy = 1;
					me._hs_image_animated_2_panel.style.transform=parameterToTransform(me._hs_image_animated_2_panel.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_panel);}, 550);
				}
			}
		}
		me._hs_image_animated_2_panel.logicBlock_scaling();
		me._hs_image_animated_2_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_panel.style.visibility=(Number(me._hs_image_animated_2_panel.style.opacity)>0||!me._hs_image_animated_2_panel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_panel.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_panel.style.visibility="hidden";
					me._hs_image_animated_2_panel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_panel.logicBlock_visible();
		me._hs_image_animated_2_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_panel.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_panel.style.visibility=me._hs_image_animated_2_panel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_panel.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_panel.style.opacity == 0.0) { me._hs_image_animated_2_panel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_panel.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_panel.logicBlock_alpha();
		me._hs_image_animated_2_panel.ggUpdatePosition=function (useTransition) {
		}
		me._hs_panel_container.appendChild(me._hs_image_animated_2_panel);
		me._panel.appendChild(me._hs_panel_container);
		me._panel.logicBlock_alpha();
		if (
			(
				((player.getViewerSize(true).width <= 500)) || 
				((player.getViewerSize(true).height <= 750))
			)
		) {
			player.setVariableValue('smallPanel', true);
		}
		me.elementMouseOver['panel']=false;
		me._panel_container.logicBlock_position();
		me._panel_container.logicBlock_size();
		me._panel_container.logicBlock_alpha();
		me.elementMouseOver['panel_container']=false;
		me.elementMouseOver['panel_hover_rect']=false;
		me._panel_rect.logicBlock_alpha();
		me._svg_2.logicBlock_visible();
		me.elementMouseOver['hs_panel_container']=false;
		me._hs_image_i_1_panel.logicBlock_scaling();
		me._hs_image_i_1_panel.logicBlock_bordercolor();
		me._hs_image_animated_1_panel.logicBlock_scaling();
		me._hs_image_animated_1_panel.logicBlock_visible();
		me._hs_image_animated_1_panel.logicBlock_alpha();
		me._hs_image_animated_2_panel.logicBlock_scaling();
		me._hs_image_animated_2_panel.logicBlock_visible();
		me._hs_image_animated_2_panel.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				if (me._panel.ggLastIsActive!=me._panel.ggIsActive()) {
					me._panel.ggLastIsActive=me._panel.ggIsActive();
					if (me._panel.ggIsActive()) {
						if (me._panel.ggActivate) me._panel.ggActivate();
					} else {
						if (me._panel.ggDeactivate) me._panel.ggDeactivate();
					}
				}
				me._panel_container.logicBlock_position();
				me._panel_container.logicBlock_size();
				me._hs_image_animated_1_panel.logicBlock_scaling();
				me._hs_image_animated_1_panel.logicBlock_visible();
				me._hs_image_animated_1_panel.logicBlock_alpha();
				me._hs_image_animated_2_panel.logicBlock_scaling();
				me._hs_image_animated_2_panel.logicBlock_visible();
				me._hs_image_animated_2_panel.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._panel_container.logicBlock_position();
				me._panel_container.logicBlock_size();
				me._svg_2.logicBlock_visible();
				me._hs_image_animated_1_panel.logicBlock_scaling();
				me._hs_image_animated_1_panel.logicBlock_visible();
				me._hs_image_animated_1_panel.logicBlock_alpha();
				me._hs_image_animated_2_panel.logicBlock_scaling();
				me._hs_image_animated_2_panel.logicBlock_visible();
				me._hs_image_animated_2_panel.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._svg_2.logicBlock_visible();
			};
			me.ggEvent_imagesready=function() {
				if (
					(
						((player.getVariableValue('smallPanel') == true))
					)
				) {
					(function(){
function changeFontSize(className, fontSize){
document.querySelectorAll("."+className).forEach((textItem)=>{
textItem.childNodes[0].style.fontSize = fontSize + "px";
});
}

changeFontSize("panel_text_button", 11);
changeFontSize("panel_text_description",9);
changeFontSize("panel_text_header",10);
})()
				}
			};
			me.ggEvent_sizechanged=function() {
				me._panel.logicBlock_alpha();
				me._panel_rect.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_1_panel.logicBlock_visible();
				me._hs_image_animated_2_panel.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_1_panel.logicBlock_scaling();
				me._hs_image_animated_1_panel.logicBlock_alpha();
				me._hs_image_animated_2_panel.logicBlock_scaling();
				me._hs_image_animated_2_panel.logicBlock_alpha();
			};
			me.ggEvent_varchanged_smallPanel=function() {
				me._panel_container.logicBlock_position();
				me._panel_container.logicBlock_size();
			};
			me.hotspotTimerEvent=function() {
				me._panel_hover_rect.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._panel;
	};
	function SkinHotspotClass_drone_s(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._drone_s=document.createElement('div');
		el.ggId="Drone S";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._drone_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._drone_s.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_s.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_s.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['drone_s']=true;
			me._nodeimage_drones_2.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_angle();
			me._nodeimage_drones_1.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_s.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['drone_s']=false;
			me._nodeimage_drones_2.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_angle();
			me._nodeimage_drones_1.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_s.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_drones_5=document.createElement('div');
		el.ggId="NodeImage_DroneS_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_drones_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_5.ggParameter.sx = 0.8;
					me._nodeimage_drones_5.ggParameter.sy = 0.8;
					me._nodeimage_drones_5.style.transform=parameterToTransform(me._nodeimage_drones_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_5);}, 550);
				}
				else {
					me._nodeimage_drones_5.ggParameter.sx = 1;
					me._nodeimage_drones_5.ggParameter.sy = 1;
					me._nodeimage_drones_5.style.transform=parameterToTransform(me._nodeimage_drones_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_5);}, 550);
				}
			}
		}
		me._nodeimage_drones_5.logicBlock_scaling();
		me._nodeimage_drones_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_drones_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_drones_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_drones_5.style.visibility=(Number(me._nodeimage_drones_5.style.opacity)>0||!me._nodeimage_drones_5.style.opacity)?'inherit':'hidden';
					me._nodeimage_drones_5.ggVisible=true;
				}
				else {
					me._nodeimage_drones_5.style.visibility="hidden";
					me._nodeimage_drones_5.ggVisible=false;
				}
			}
		}
		me._nodeimage_drones_5.logicBlock_visible();
		me._nodeimage_drones_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_drones_5.style.visibility=me._nodeimage_drones_5.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_5.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._nodeimage_drones_5.style.opacity == 0.0) { me._nodeimage_drones_5.style.visibility="hidden"; } }, 505);
					me._nodeimage_drones_5.style.opacity=0;
				}
			}
		}
		me._nodeimage_drones_5.logicBlock_alpha();
		me._nodeimage_drones_5.ggUpdatePosition=function (useTransition) {
		}
		me._drone_s.appendChild(me._nodeimage_drones_5);
		el=me._nodeimage_drones_4=document.createElement('div');
		el.ggId="NodeImage_DroneS_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_4.ggParameter.sx = 0.8;
					me._nodeimage_drones_4.ggParameter.sy = 0.8;
					me._nodeimage_drones_4.style.transform=parameterToTransform(me._nodeimage_drones_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_4);}, 550);
				}
				else {
					me._nodeimage_drones_4.ggParameter.sx = 0.5;
					me._nodeimage_drones_4.ggParameter.sy = 0.5;
					me._nodeimage_drones_4.style.transform=parameterToTransform(me._nodeimage_drones_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_4);}, 550);
				}
			}
		}
		me._nodeimage_drones_4.logicBlock_scaling();
		me._nodeimage_drones_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_drones_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_drones_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_drones_4.style.visibility=(Number(me._nodeimage_drones_4.style.opacity)>0||!me._nodeimage_drones_4.style.opacity)?'inherit':'hidden';
					me._nodeimage_drones_4.ggVisible=true;
				}
				else {
					me._nodeimage_drones_4.style.visibility="hidden";
					me._nodeimage_drones_4.ggVisible=false;
				}
			}
		}
		me._nodeimage_drones_4.logicBlock_visible();
		me._nodeimage_drones_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nodeimage_drones_4.style.opacity == 0.0) { me._nodeimage_drones_4.style.visibility="hidden"; } }, 505);
					me._nodeimage_drones_4.style.opacity=0;
				}
				else {
					me._nodeimage_drones_4.style.visibility=me._nodeimage_drones_4.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_4.style.opacity=1;
				}
			}
		}
		me._nodeimage_drones_4.logicBlock_alpha();
		me._nodeimage_drones_4.ggUpdatePosition=function (useTransition) {
		}
		me._drone_s.appendChild(me._nodeimage_drones_4);
		el=me._nodeimage_drones_2=document.createElement('div');
		el.ggId="NodeImage_DroneS_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_2.style.transition='transform 500ms ease 0ms';
				if (me._nodeimage_drones_2.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_2.ggParameter.sx = 0.8;
					me._nodeimage_drones_2.ggParameter.sy = 0.8;
					me._nodeimage_drones_2.style.transform=parameterToTransform(me._nodeimage_drones_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_2);}, 550);
				}
				else {
					me._nodeimage_drones_2.ggParameter.sx = 0.5;
					me._nodeimage_drones_2.ggParameter.sy = 0.5;
					me._nodeimage_drones_2.style.transform=parameterToTransform(me._nodeimage_drones_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_2);}, 550);
				}
			}
		}
		me._nodeimage_drones_2.logicBlock_scaling();
		me._nodeimage_drones_2.ggUpdatePosition=function (useTransition) {
		}
		me._drone_s.appendChild(me._nodeimage_drones_2);
		el=me._ht_image_dorne_2=document.createElement('div');
		els=me._ht_image_dorne_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_dorne_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_dorne_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_dorne_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_dorne_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_dorne_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_dorne_2.onmouseenter=function (e) {
			me._ht_image_dorne_2__img.style.visibility='hidden';
			me._ht_image_dorne_2__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_dorne_2']=true;
		}
		me._ht_image_dorne_2.onmouseleave=function (e) {
			me._ht_image_dorne_2__img.style.visibility='inherit';
			me._ht_image_dorne_2__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_dorne_2']=false;
		}
		me._ht_image_dorne_2.ggUpdatePosition=function (useTransition) {
		}
		me._drone_s.appendChild(me._ht_image_dorne_2);
		el=me._nodeimage_drones_1=document.createElement('div');
		els=me._nodeimage_drones_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_drones_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage_DroneS_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_drones_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_1.ggParameter.sx = 3;
					me._nodeimage_drones_1.ggParameter.sy = 3;
					me._nodeimage_drones_1.style.transform=parameterToTransform(me._nodeimage_drones_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_1);}, 1050);
				}
				else {
					me._nodeimage_drones_1.ggParameter.sx = 0;
					me._nodeimage_drones_1.ggParameter.sy = 0;
					me._nodeimage_drones_1.style.transform=parameterToTransform(me._nodeimage_drones_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_drones_1);}, 1050);
				}
			}
		}
		me._nodeimage_drones_1.logicBlock_scaling();
		me._nodeimage_drones_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['drone_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_drones_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_drones_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_drones_1.ggParameter.a = 360;
					me._nodeimage_drones_1.style.transform=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
				else {
					me._nodeimage_drones_1.ggParameter.a = -360;
					me._nodeimage_drones_1.style.transform=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
			}
		}
		me._nodeimage_drones_1.logicBlock_angle();
		me._nodeimage_drones_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['drone_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_drones_1.style.visibility=me._nodeimage_drones_1.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_drones_1.style.opacity == 0.0) { me._nodeimage_drones_1.style.visibility="hidden"; } }, 405);
					me._nodeimage_drones_1.style.opacity=0;
				}
			}
		}
		me._nodeimage_drones_1.logicBlock_alpha();
		me._nodeimage_drones_1.ggUpdatePosition=function (useTransition) {
		}
		me._drone_s.appendChild(me._nodeimage_drones_1);
		me.elementMouseOver['drone_s']=false;
		me._nodeimage_drones_5.logicBlock_scaling();
		me._nodeimage_drones_5.logicBlock_visible();
		me._nodeimage_drones_5.logicBlock_alpha();
		me._nodeimage_drones_4.logicBlock_scaling();
		me._nodeimage_drones_4.logicBlock_visible();
		me._nodeimage_drones_4.logicBlock_alpha();
		me._nodeimage_drones_2.logicBlock_scaling();
		me.elementMouseOver['ht_image_dorne_2']=false;
		me._nodeimage_drones_1.logicBlock_scaling();
		me._nodeimage_drones_1.logicBlock_angle();
		me._nodeimage_drones_1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._nodeimage_drones_5.logicBlock_scaling();
				me._nodeimage_drones_5.logicBlock_visible();
				me._nodeimage_drones_5.logicBlock_alpha();
				me._nodeimage_drones_4.logicBlock_scaling();
				me._nodeimage_drones_4.logicBlock_visible();
				me._nodeimage_drones_4.logicBlock_alpha();
				me._nodeimage_drones_2.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_angle();
				me._nodeimage_drones_1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._nodeimage_drones_5.logicBlock_scaling();
				me._nodeimage_drones_5.logicBlock_visible();
				me._nodeimage_drones_5.logicBlock_alpha();
				me._nodeimage_drones_4.logicBlock_scaling();
				me._nodeimage_drones_4.logicBlock_visible();
				me._nodeimage_drones_4.logicBlock_alpha();
				me._nodeimage_drones_2.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_angle();
				me._nodeimage_drones_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._nodeimage_drones_2.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_scaling();
				me._nodeimage_drones_1.logicBlock_angle();
				me._nodeimage_drones_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._nodeimage_drones_5.logicBlock_visible();
				me._nodeimage_drones_4.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._nodeimage_drones_5.logicBlock_scaling();
				me._nodeimage_drones_5.logicBlock_alpha();
				me._nodeimage_drones_4.logicBlock_scaling();
				me._nodeimage_drones_4.logicBlock_alpha();
			};
			me.__div = me._drone_s;
	};
	function SkinHotspotClass_hotspot_s(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_s=document.createElement('div');
		el.ggId="Hotspot S";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_s.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_s.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_s.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_s']=true;
			me._hs_image_i_s.logicBlock_scaling();
			me._hs_image_i_s.logicBlock_bordercolor();
			me._nodeimage_1_s1.logicBlock_scaling();
			me._nodeimage_1_s1.logicBlock_angle();
			me._nodeimage_1_s1.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_s.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_s']=false;
			me._hs_image_i_s.logicBlock_scaling();
			me._hs_image_i_s.logicBlock_bordercolor();
			me._nodeimage_1_s1.logicBlock_scaling();
			me._nodeimage_1_s1.logicBlock_angle();
			me._nodeimage_1_s1.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_s.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_s=document.createElement('div');
		el.ggId="hs_image_animated_2_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_s.ggParameter.sx = 0.8;
					me._hs_image_animated_2_s.ggParameter.sy = 0.8;
					me._hs_image_animated_2_s.style.transform=parameterToTransform(me._hs_image_animated_2_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_s);}, 550);
				}
				else {
					me._hs_image_animated_2_s.ggParameter.sx = 1;
					me._hs_image_animated_2_s.ggParameter.sy = 1;
					me._hs_image_animated_2_s.style.transform=parameterToTransform(me._hs_image_animated_2_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_s);}, 550);
				}
			}
		}
		me._hs_image_animated_2_s.logicBlock_scaling();
		me._hs_image_animated_2_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_s.style.visibility=(Number(me._hs_image_animated_2_s.style.opacity)>0||!me._hs_image_animated_2_s.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_s.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_s.style.visibility="hidden";
					me._hs_image_animated_2_s.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_s.logicBlock_visible();
		me._hs_image_animated_2_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_s.style.visibility=me._hs_image_animated_2_s.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_s.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_s.style.opacity == 0.0) { me._hs_image_animated_2_s.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_s.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_s.logicBlock_alpha();
		me._hs_image_animated_2_s.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_s.appendChild(me._hs_image_animated_2_s);
		el=me._hs_image_animated_1_s=document.createElement('div');
		el.ggId="hs_image_animated_1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_s.ggParameter.sx = 0.8;
					me._hs_image_animated_1_s.ggParameter.sy = 0.8;
					me._hs_image_animated_1_s.style.transform=parameterToTransform(me._hs_image_animated_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_s);}, 550);
				}
				else {
					me._hs_image_animated_1_s.ggParameter.sx = 0.5;
					me._hs_image_animated_1_s.ggParameter.sy = 0.5;
					me._hs_image_animated_1_s.style.transform=parameterToTransform(me._hs_image_animated_1_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_s);}, 550);
				}
			}
		}
		me._hs_image_animated_1_s.logicBlock_scaling();
		me._hs_image_animated_1_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_s.style.visibility=(Number(me._hs_image_animated_1_s.style.opacity)>0||!me._hs_image_animated_1_s.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_s.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_s.style.visibility="hidden";
					me._hs_image_animated_1_s.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_s.logicBlock_visible();
		me._hs_image_animated_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_s.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_s.style.opacity == 0.0) { me._hs_image_animated_1_s.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_s.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_s.style.visibility=me._hs_image_animated_1_s.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_s.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_s.logicBlock_alpha();
		me._hs_image_animated_1_s.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_s.appendChild(me._hs_image_animated_1_s);
		el=me._hs_image_i_s=document.createElement('div');
		el.ggId="hs_image_i_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_s.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_s.ggParameter.sx = 0.8;
					me._hs_image_i_s.ggParameter.sy = 0.8;
					me._hs_image_i_s.style.transform=parameterToTransform(me._hs_image_i_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_s);}, 550);
				}
				else {
					me._hs_image_i_s.ggParameter.sx = 0.5;
					me._hs_image_i_s.ggParameter.sy = 0.5;
					me._hs_image_i_s.style.transform=parameterToTransform(me._hs_image_i_s.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_s);}, 550);
				}
			}
		}
		me._hs_image_i_s.logicBlock_scaling();
		me._hs_image_i_s.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_s.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_s.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_s.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_s.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_s.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_s.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_s.logicBlock_bordercolor();
		me._hs_image_i_s.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_s.appendChild(me._hs_image_i_s);
		el=me._nodeimage_1_s1=document.createElement('div');
		els=me._nodeimage_1_s1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_s_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_s1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_s1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_s1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_s1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_s1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_s1.ggParameter.sx = 3;
					me._nodeimage_1_s1.ggParameter.sy = 3;
					me._nodeimage_1_s1.style.transform=parameterToTransform(me._nodeimage_1_s1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s1);}, 1050);
				}
				else {
					me._nodeimage_1_s1.ggParameter.sx = 0;
					me._nodeimage_1_s1.ggParameter.sy = 0;
					me._nodeimage_1_s1.style.transform=parameterToTransform(me._nodeimage_1_s1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_s1);}, 1050);
				}
			}
		}
		me._nodeimage_1_s1.logicBlock_scaling();
		me._nodeimage_1_s1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_s1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_s1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_s1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_s1.ggParameter.a = 360;
					me._nodeimage_1_s1.style.transform=parameterToTransform(me._nodeimage_1_s1.ggParameter);
				}
				else {
					me._nodeimage_1_s1.ggParameter.a = -360;
					me._nodeimage_1_s1.style.transform=parameterToTransform(me._nodeimage_1_s1.ggParameter);
				}
			}
		}
		me._nodeimage_1_s1.logicBlock_angle();
		me._nodeimage_1_s1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_s'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_s1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_s1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_s1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_s1.style.visibility=me._nodeimage_1_s1.ggVisible?'inherit':'hidden';
					me._nodeimage_1_s1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_s1.style.opacity == 0.0) { me._nodeimage_1_s1.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_s1.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_s1.logicBlock_alpha();
		me._nodeimage_1_s1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_s.appendChild(me._nodeimage_1_s1);
		me.elementMouseOver['hotspot_s']=false;
		me._hs_image_animated_2_s.logicBlock_scaling();
		me._hs_image_animated_2_s.logicBlock_visible();
		me._hs_image_animated_2_s.logicBlock_alpha();
		me._hs_image_animated_1_s.logicBlock_scaling();
		me._hs_image_animated_1_s.logicBlock_visible();
		me._hs_image_animated_1_s.logicBlock_alpha();
		me._hs_image_i_s.logicBlock_scaling();
		me._hs_image_i_s.logicBlock_bordercolor();
		me._nodeimage_1_s1.logicBlock_scaling();
		me._nodeimage_1_s1.logicBlock_angle();
		me._nodeimage_1_s1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_s.logicBlock_scaling();
				me._hs_image_animated_2_s.logicBlock_visible();
				me._hs_image_animated_2_s.logicBlock_alpha();
				me._hs_image_animated_1_s.logicBlock_scaling();
				me._hs_image_animated_1_s.logicBlock_visible();
				me._hs_image_animated_1_s.logicBlock_alpha();
				me._hs_image_i_s.logicBlock_scaling();
				me._hs_image_i_s.logicBlock_bordercolor();
				me._nodeimage_1_s1.logicBlock_scaling();
				me._nodeimage_1_s1.logicBlock_angle();
				me._nodeimage_1_s1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_s.logicBlock_scaling();
				me._hs_image_animated_2_s.logicBlock_visible();
				me._hs_image_animated_2_s.logicBlock_alpha();
				me._hs_image_animated_1_s.logicBlock_scaling();
				me._hs_image_animated_1_s.logicBlock_visible();
				me._hs_image_animated_1_s.logicBlock_alpha();
				me._hs_image_i_s.logicBlock_scaling();
				me._hs_image_i_s.logicBlock_bordercolor();
				me._nodeimage_1_s1.logicBlock_scaling();
				me._nodeimage_1_s1.logicBlock_angle();
				me._nodeimage_1_s1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_s.logicBlock_scaling();
				me._hs_image_i_s.logicBlock_bordercolor();
				me._nodeimage_1_s1.logicBlock_scaling();
				me._nodeimage_1_s1.logicBlock_angle();
				me._nodeimage_1_s1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_s.logicBlock_visible();
				me._hs_image_animated_1_s.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_s.logicBlock_scaling();
				me._hs_image_animated_2_s.logicBlock_alpha();
				me._hs_image_animated_1_s.logicBlock_scaling();
				me._hs_image_animated_1_s.logicBlock_alpha();
			};
			me.__div = me._hotspot_s;
	};
	function SkinHotspotClass_extern_hotspot_l(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._extern_hotspot_l=document.createElement('div');
		el.ggId="Extern Hotspot L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extern_hotspot_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._extern_hotspot_l.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_l.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_l.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['extern_hotspot_l']=true;
			me._extern_hs_image_i_l.logicBlock_scaling();
			me._extern_hs_image_i_l.logicBlock_bordercolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_l.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['extern_hotspot_l']=false;
			me._extern_hs_image_i_l.logicBlock_scaling();
			me._extern_hs_image_i_l.logicBlock_bordercolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._extern_hotspot_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_hs_image_animated_2_l=document.createElement('div');
		el.ggId="Extern hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extern_hs_image_animated_2_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_2_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_2_l.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_2_l.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_2_l.style.transform=parameterToTransform(me._extern_hs_image_animated_2_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_2_l);}, 550);
				}
				else {
					me._extern_hs_image_animated_2_l.ggParameter.sx = 1;
					me._extern_hs_image_animated_2_l.ggParameter.sy = 1;
					me._extern_hs_image_animated_2_l.style.transform=parameterToTransform(me._extern_hs_image_animated_2_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_2_l);}, 550);
				}
			}
		}
		me._extern_hs_image_animated_2_l.logicBlock_scaling();
		me._extern_hs_image_animated_2_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_2_l.style.visibility=(Number(me._extern_hs_image_animated_2_l.style.opacity)>0||!me._extern_hs_image_animated_2_l.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_2_l.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_2_l.style.visibility="hidden";
					me._extern_hs_image_animated_2_l.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_2_l.logicBlock_visible();
		me._extern_hs_image_animated_2_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_2_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha == 0) {
					me._extern_hs_image_animated_2_l.style.visibility=me._extern_hs_image_animated_2_l.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_2_l.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._extern_hs_image_animated_2_l.style.opacity == 0.0) { me._extern_hs_image_animated_2_l.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_2_l.style.opacity=0;
				}
			}
		}
		me._extern_hs_image_animated_2_l.logicBlock_alpha();
		me._extern_hs_image_animated_2_l.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_animated_2_l);
		el=me._extern_hs_image_animated_1_l=document.createElement('div');
		el.ggId="Extern hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_hs_image_animated_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_1_l.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_1_l.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_1_l.style.transform=parameterToTransform(me._extern_hs_image_animated_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_1_l);}, 550);
				}
				else {
					me._extern_hs_image_animated_1_l.ggParameter.sx = 0.5;
					me._extern_hs_image_animated_1_l.ggParameter.sy = 0.5;
					me._extern_hs_image_animated_1_l.style.transform=parameterToTransform(me._extern_hs_image_animated_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_animated_1_l);}, 550);
				}
			}
		}
		me._extern_hs_image_animated_1_l.logicBlock_scaling();
		me._extern_hs_image_animated_1_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_1_l.style.visibility=(Number(me._extern_hs_image_animated_1_l.style.opacity)>0||!me._extern_hs_image_animated_1_l.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_1_l.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_1_l.style.visibility="hidden";
					me._extern_hs_image_animated_1_l.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_1_l.logicBlock_visible();
		me._extern_hs_image_animated_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_1_l.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._extern_hs_image_animated_1_l.style.opacity == 0.0) { me._extern_hs_image_animated_1_l.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_1_l.style.opacity=0;
				}
				else {
					me._extern_hs_image_animated_1_l.style.visibility=me._extern_hs_image_animated_1_l.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_1_l.style.opacity=1;
				}
			}
		}
		me._extern_hs_image_animated_1_l.logicBlock_alpha();
		me._extern_hs_image_animated_1_l.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_animated_1_l);
		el=me._extern_hs_image_i_l=document.createElement('div');
		el.ggId="Extern hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_hs_image_i_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_i_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['extern_hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_i_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_i_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_i_l.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_i_l.ggParameter.sx = 0.8;
					me._extern_hs_image_i_l.ggParameter.sy = 0.8;
					me._extern_hs_image_i_l.style.transform=parameterToTransform(me._extern_hs_image_i_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_i_l);}, 550);
				}
				else {
					me._extern_hs_image_i_l.ggParameter.sx = 0.5;
					me._extern_hs_image_i_l.ggParameter.sy = 0.5;
					me._extern_hs_image_i_l.style.transform=parameterToTransform(me._extern_hs_image_i_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_hs_image_i_l);}, 550);
				}
			}
		}
		me._extern_hs_image_i_l.logicBlock_scaling();
		me._extern_hs_image_i_l.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['extern_hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._extern_hs_image_i_l.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor == 0) {
					me._extern_hs_image_i_l.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._extern_hs_image_i_l.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._extern_hs_image_i_l.logicBlock_bordercolor();
		me._extern_hs_image_i_l.ggUpdatePosition=function (useTransition) {
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_i_l);
		el=me._mousetarget_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="mousetarget_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mousetarget_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mousetarget_container.onmouseenter=function (e) {
			me.elementMouseOver['mousetarget_container']=true;
			me._extern_nodeimage_1_l.logicBlock_scaling();
			me._extern_nodeimage_1_l.logicBlock_angle();
			me._extern_nodeimage_1_l.logicBlock_alpha();
		}
		me._mousetarget_container.onmouseleave=function (e) {
			me.elementMouseOver['mousetarget_container']=false;
			me._extern_nodeimage_1_l.logicBlock_scaling();
			me._extern_nodeimage_1_l.logicBlock_angle();
			me._extern_nodeimage_1_l.logicBlock_alpha();
		}
		me._mousetarget_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_nodeimage_1_l=document.createElement('div');
		els=me._extern_nodeimage_1_l__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._extern_nodeimage_1_l.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._extern_nodeimage_1_l.ggSubElement.setAttribute('alt', player._(me._extern_nodeimage_1_l.ggAltText));
			me._extern_nodeimage_1_l.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._extern_nodeimage_1_l.ggText_untranslated = img;
			me._extern_nodeimage_1_l.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._extern_nodeimage_1_l.ggSubElement.style.width = '0px';
			me._extern_nodeimage_1_l.ggSubElement.style.height = '0px';
			me._extern_nodeimage_1_l.ggSubElement.src='';
			me._extern_nodeimage_1_l.ggSubElement.src=me._extern_nodeimage_1_l.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._extern_nodeimage_1_l.ggText != player._(me._extern_nodeimage_1_l.ggText_untranslated)) {
				me._extern_nodeimage_1_l.ggText = player._(me._extern_nodeimage_1_l.ggText_untranslated);
				me._extern_nodeimage_1_l.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="Extern NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._extern_nodeimage_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_nodeimage_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mousetarget_container'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateScaling == 0) {
					me._extern_nodeimage_1_l.ggParameter.sx = 3;
					me._extern_nodeimage_1_l.ggParameter.sy = 3;
					me._extern_nodeimage_1_l.style.transform=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_l);}, 1050);
				}
				else {
					me._extern_nodeimage_1_l.ggParameter.sx = 0;
					me._extern_nodeimage_1_l.ggParameter.sy = 0;
					me._extern_nodeimage_1_l.style.transform=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
					setTimeout(function() {skin.updateSize(me._extern_nodeimage_1_l);}, 1050);
				}
			}
		}
		me._extern_nodeimage_1_l.logicBlock_scaling();
		me._extern_nodeimage_1_l.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['mousetarget_container'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._extern_nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateAngle == 0) {
					me._extern_nodeimage_1_l.ggParameter.a = 360;
					me._extern_nodeimage_1_l.style.transform=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
				else {
					me._extern_nodeimage_1_l.ggParameter.a = -360;
					me._extern_nodeimage_1_l.style.transform=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_l.logicBlock_angle();
		me._extern_nodeimage_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mousetarget_container'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_nodeimage_1_l.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha == 0) {
					me._extern_nodeimage_1_l.style.visibility=me._extern_nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_l.ggSubElement.src=me._extern_nodeimage_1_l.ggText;
					me._extern_nodeimage_1_l.style.opacity=1;
				}
				else {
					me._extern_nodeimage_1_l.style.visibility=me._extern_nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_l.ggSubElement.src=me._extern_nodeimage_1_l.ggText;
					me._extern_nodeimage_1_l.style.opacity=0.01;
				}
			}
		}
		me._extern_nodeimage_1_l.logicBlock_alpha();
		me._extern_nodeimage_1_l.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._extern_nodeimage_1_l.clientWidth;
			var parentHeight = me._extern_nodeimage_1_l.clientHeight;
			var img = me._extern_nodeimage_1_l__img;
			var aspectRatioDiv = me._extern_nodeimage_1_l.clientWidth / me._extern_nodeimage_1_l.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			if (!me._extern_nodeimage_1_l.ggScrollbars || currentWidth < me._extern_nodeimage_1_l.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._extern_nodeimage_1_l.scrollLeft=currentWidth / 2 - me._extern_nodeimage_1_l.clientWidth / 2;
			}
			if (!me._extern_nodeimage_1_l.ggScrollbars || currentHeight < me._extern_nodeimage_1_l.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._extern_nodeimage_1_l.scrollTop=currentHeight / 2 - me._extern_nodeimage_1_l.clientHeight / 2;
			}
		}
		me._mousetarget_container.appendChild(me._extern_nodeimage_1_l);
		me._extern_hotspot_l.appendChild(me._mousetarget_container);
		me.elementMouseOver['extern_hotspot_l']=false;
		me._extern_hs_image_animated_2_l.logicBlock_scaling();
		me._extern_hs_image_animated_2_l.logicBlock_visible();
		me._extern_hs_image_animated_2_l.logicBlock_alpha();
		me._extern_hs_image_animated_1_l.logicBlock_scaling();
		me._extern_hs_image_animated_1_l.logicBlock_visible();
		me._extern_hs_image_animated_1_l.logicBlock_alpha();
		me._extern_hs_image_i_l.logicBlock_scaling();
		me._extern_hs_image_i_l.logicBlock_bordercolor();
		me.elementMouseOver['mousetarget_container']=false;
		me._extern_nodeimage_1_l.logicBlock_scaling();
		me._extern_nodeimage_1_l.logicBlock_angle();
		me._extern_nodeimage_1_l.logicBlock_alpha();
		me._extern_nodeimage_1_l.ggSetImage("https:\/\/logos.360ty.cloud\/"+player._(me.hotspot.title));
			me.ggEvent_changenode=function() {
				me._extern_hs_image_animated_2_l.logicBlock_scaling();
				me._extern_hs_image_animated_2_l.logicBlock_visible();
				me._extern_hs_image_animated_2_l.logicBlock_alpha();
				me._extern_hs_image_animated_1_l.logicBlock_scaling();
				me._extern_hs_image_animated_1_l.logicBlock_visible();
				me._extern_hs_image_animated_1_l.logicBlock_alpha();
				me._extern_hs_image_i_l.logicBlock_scaling();
				me._extern_hs_image_i_l.logicBlock_bordercolor();
				me._extern_nodeimage_1_l.logicBlock_scaling();
				me._extern_nodeimage_1_l.logicBlock_angle();
				me._extern_nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._extern_hs_image_animated_2_l.logicBlock_scaling();
				me._extern_hs_image_animated_2_l.logicBlock_visible();
				me._extern_hs_image_animated_2_l.logicBlock_alpha();
				me._extern_hs_image_animated_1_l.logicBlock_scaling();
				me._extern_hs_image_animated_1_l.logicBlock_visible();
				me._extern_hs_image_animated_1_l.logicBlock_alpha();
				me._extern_hs_image_i_l.logicBlock_scaling();
				me._extern_hs_image_i_l.logicBlock_bordercolor();
				me._extern_nodeimage_1_l.logicBlock_scaling();
				me._extern_nodeimage_1_l.logicBlock_angle();
				me._extern_nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._extern_hs_image_i_l.logicBlock_scaling();
				me._extern_hs_image_i_l.logicBlock_bordercolor();
				me._extern_nodeimage_1_l.logicBlock_scaling();
				me._extern_nodeimage_1_l.logicBlock_angle();
				me._extern_nodeimage_1_l.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._extern_hs_image_animated_2_l.logicBlock_visible();
				me._extern_hs_image_animated_1_l.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._extern_hs_image_animated_2_l.logicBlock_scaling();
				me._extern_hs_image_animated_2_l.logicBlock_alpha();
				me._extern_hs_image_animated_1_l.logicBlock_scaling();
				me._extern_hs_image_animated_1_l.logicBlock_alpha();
			};
			me.__div = me._extern_hotspot_l;
	};
	function SkinHotspotClass_drone_m(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._drone_m=document.createElement('div');
		el.ggId="Drone M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._drone_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._drone_m.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_m.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_m.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['drone_m']=true;
			me._nodeimage_dronem_2.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_angle();
			me._nodeimage_dronem_1.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_m.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['drone_m']=false;
			me._nodeimage_dronem_2.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_angle();
			me._nodeimage_dronem_1.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._drone_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_dronem_5=document.createElement('div');
		el.ggId="NodeImage_DroneM_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_dronem_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_5.ggParameter.sx = 0.8;
					me._nodeimage_dronem_5.ggParameter.sy = 0.8;
					me._nodeimage_dronem_5.style.transform=parameterToTransform(me._nodeimage_dronem_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_5);}, 550);
				}
				else {
					me._nodeimage_dronem_5.ggParameter.sx = 1;
					me._nodeimage_dronem_5.ggParameter.sy = 1;
					me._nodeimage_dronem_5.style.transform=parameterToTransform(me._nodeimage_dronem_5.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_5);}, 550);
				}
			}
		}
		me._nodeimage_dronem_5.logicBlock_scaling();
		me._nodeimage_dronem_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_dronem_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_dronem_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_dronem_5.style.visibility=(Number(me._nodeimage_dronem_5.style.opacity)>0||!me._nodeimage_dronem_5.style.opacity)?'inherit':'hidden';
					me._nodeimage_dronem_5.ggVisible=true;
				}
				else {
					me._nodeimage_dronem_5.style.visibility="hidden";
					me._nodeimage_dronem_5.ggVisible=false;
				}
			}
		}
		me._nodeimage_dronem_5.logicBlock_visible();
		me._nodeimage_dronem_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_5.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_dronem_5.style.visibility=me._nodeimage_dronem_5.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_5.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._nodeimage_dronem_5.style.opacity == 0.0) { me._nodeimage_dronem_5.style.visibility="hidden"; } }, 505);
					me._nodeimage_dronem_5.style.opacity=0;
				}
			}
		}
		me._nodeimage_dronem_5.logicBlock_alpha();
		me._nodeimage_dronem_5.ggUpdatePosition=function (useTransition) {
		}
		me._drone_m.appendChild(me._nodeimage_dronem_5);
		el=me._nodeimage_dronem_4=document.createElement('div');
		el.ggId="NodeImage_DroneM_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_4.ggParameter.sx = 0.8;
					me._nodeimage_dronem_4.ggParameter.sy = 0.8;
					me._nodeimage_dronem_4.style.transform=parameterToTransform(me._nodeimage_dronem_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_4);}, 550);
				}
				else {
					me._nodeimage_dronem_4.ggParameter.sx = 0.5;
					me._nodeimage_dronem_4.ggParameter.sy = 0.5;
					me._nodeimage_dronem_4.style.transform=parameterToTransform(me._nodeimage_dronem_4.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_4);}, 550);
				}
			}
		}
		me._nodeimage_dronem_4.logicBlock_scaling();
		me._nodeimage_dronem_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_dronem_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_dronem_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_dronem_4.style.visibility=(Number(me._nodeimage_dronem_4.style.opacity)>0||!me._nodeimage_dronem_4.style.opacity)?'inherit':'hidden';
					me._nodeimage_dronem_4.ggVisible=true;
				}
				else {
					me._nodeimage_dronem_4.style.visibility="hidden";
					me._nodeimage_dronem_4.ggVisible=false;
				}
			}
		}
		me._nodeimage_dronem_4.logicBlock_visible();
		me._nodeimage_dronem_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_4.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nodeimage_dronem_4.style.opacity == 0.0) { me._nodeimage_dronem_4.style.visibility="hidden"; } }, 505);
					me._nodeimage_dronem_4.style.opacity=0;
				}
				else {
					me._nodeimage_dronem_4.style.visibility=me._nodeimage_dronem_4.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_4.style.opacity=1;
				}
			}
		}
		me._nodeimage_dronem_4.logicBlock_alpha();
		me._nodeimage_dronem_4.ggUpdatePosition=function (useTransition) {
		}
		me._drone_m.appendChild(me._nodeimage_dronem_4);
		el=me._nodeimage_dronem_2=document.createElement('div');
		el.ggId="NodeImage_DroneM_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_2.style.transition='transform 500ms ease 0ms';
				if (me._nodeimage_dronem_2.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_2.ggParameter.sx = 0.8;
					me._nodeimage_dronem_2.ggParameter.sy = 0.8;
					me._nodeimage_dronem_2.style.transform=parameterToTransform(me._nodeimage_dronem_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_2);}, 550);
				}
				else {
					me._nodeimage_dronem_2.ggParameter.sx = 0.5;
					me._nodeimage_dronem_2.ggParameter.sy = 0.5;
					me._nodeimage_dronem_2.style.transform=parameterToTransform(me._nodeimage_dronem_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_2);}, 550);
				}
			}
		}
		me._nodeimage_dronem_2.logicBlock_scaling();
		me._nodeimage_dronem_2.ggUpdatePosition=function (useTransition) {
		}
		me._drone_m.appendChild(me._nodeimage_dronem_2);
		el=me._ht_image_dorne=document.createElement('div');
		els=me._ht_image_dorne__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_dorne__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_dorne__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjY2LjMsNDQzLjhjLTIwLjEsOS41LTE0MCwxMjEuNS0xNTMuNiwxNDUuOGMtMTQuMSwyNS4zLTcuOSw1MCwwLDY3LjNjMTAuMSwyMi4xLDY1LjcsNDguMywxMjguNCw0Ni42ICBjMTAuMi0wLjMsMTY5LjEsMTAuMywxOTIuOCwwLjFjMjguMi0xMi4xLDEwNC42LTY5LjIsMTEwLTY2LjVTODk4LDYwNyw4OTgsNjA3bDE1LjQsNzAuN2w1Nyw0My4xbC0zNi45LTE0Mi4yTDk5MCwzOTguMyAgYy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4y'+
			'bC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMgIHYtNDkuMWwxMy02LjZsMzMzLjgtOC42TDc0NC42LDMxOWwtMzE2LjQsMTkuOGMwLDAtNy4xLTEzLTM0LjktMTMuMWMtMjMuMS0wLjEtMzAuMiw3LjEtMzAuMiw3LjFMMTA0LjcsMjA2LjkgIGMwLDAtNzAuNSwxNC41LTk0LjYsMjQuMWMtOC40LDMuNCwzMzcuMywxMTMuMiwzMzcuMywxMTMuMnMtMC41LDEyLDIuMiwxMnMtMjM2LjksNjQuNS0yMzYuOSw2NC41czY4LjcsMTAuNCw4Ni4zLDEwLjQgIHMxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLj'+
			'hsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiIGNsYXNzPSJzdDAiLz4KIDxwYXRoIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIgY2xhc3M9InN0MCIvPgogPHBhdGggZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0yMTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._ht_image_dorne__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_dorne";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_dorne.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_dorne.onmouseenter=function (e) {
			me._ht_image_dorne__img.style.visibility='hidden';
			me._ht_image_dorne__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_dorne']=true;
		}
		me._ht_image_dorne.onmouseleave=function (e) {
			me._ht_image_dorne__img.style.visibility='inherit';
			me._ht_image_dorne__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_dorne']=false;
		}
		me._ht_image_dorne.ggUpdatePosition=function (useTransition) {
		}
		me._drone_m.appendChild(me._ht_image_dorne);
		el=me._nodeimage_dronem_1=document.createElement('div');
		els=me._nodeimage_dronem_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage_DroneM_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_dronem_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_1.ggParameter.sx = 3;
					me._nodeimage_dronem_1.ggParameter.sy = 3;
					me._nodeimage_dronem_1.style.transform=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_1);}, 1050);
				}
				else {
					me._nodeimage_dronem_1.ggParameter.sx = 0;
					me._nodeimage_dronem_1.ggParameter.sy = 0;
					me._nodeimage_dronem_1.style.transform=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_dronem_1);}, 1050);
				}
			}
		}
		me._nodeimage_dronem_1.logicBlock_scaling();
		me._nodeimage_dronem_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['drone_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_dronem_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_dronem_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_dronem_1.ggParameter.a = 360;
					me._nodeimage_dronem_1.style.transform=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
				else {
					me._nodeimage_dronem_1.ggParameter.a = -360;
					me._nodeimage_dronem_1.style.transform=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_1.logicBlock_angle();
		me._nodeimage_dronem_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['drone_m'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_dronem_1.style.visibility=me._nodeimage_dronem_1.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_dronem_1.style.opacity == 0.0) { me._nodeimage_dronem_1.style.visibility="hidden"; } }, 405);
					me._nodeimage_dronem_1.style.opacity=0;
				}
			}
		}
		me._nodeimage_dronem_1.logicBlock_alpha();
		me._nodeimage_dronem_1.ggUpdatePosition=function (useTransition) {
		}
		me._drone_m.appendChild(me._nodeimage_dronem_1);
		me.elementMouseOver['drone_m']=false;
		me._nodeimage_dronem_5.logicBlock_scaling();
		me._nodeimage_dronem_5.logicBlock_visible();
		me._nodeimage_dronem_5.logicBlock_alpha();
		me._nodeimage_dronem_4.logicBlock_scaling();
		me._nodeimage_dronem_4.logicBlock_visible();
		me._nodeimage_dronem_4.logicBlock_alpha();
		me._nodeimage_dronem_2.logicBlock_scaling();
		me.elementMouseOver['ht_image_dorne']=false;
		me._nodeimage_dronem_1.logicBlock_scaling();
		me._nodeimage_dronem_1.logicBlock_angle();
		me._nodeimage_dronem_1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._nodeimage_dronem_5.logicBlock_scaling();
				me._nodeimage_dronem_5.logicBlock_visible();
				me._nodeimage_dronem_5.logicBlock_alpha();
				me._nodeimage_dronem_4.logicBlock_scaling();
				me._nodeimage_dronem_4.logicBlock_visible();
				me._nodeimage_dronem_4.logicBlock_alpha();
				me._nodeimage_dronem_2.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_angle();
				me._nodeimage_dronem_1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._nodeimage_dronem_5.logicBlock_scaling();
				me._nodeimage_dronem_5.logicBlock_visible();
				me._nodeimage_dronem_5.logicBlock_alpha();
				me._nodeimage_dronem_4.logicBlock_scaling();
				me._nodeimage_dronem_4.logicBlock_visible();
				me._nodeimage_dronem_4.logicBlock_alpha();
				me._nodeimage_dronem_2.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_angle();
				me._nodeimage_dronem_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._nodeimage_dronem_4.logicBlock_scaling();
				me._nodeimage_dronem_2.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_scaling();
				me._nodeimage_dronem_1.logicBlock_angle();
				me._nodeimage_dronem_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._nodeimage_dronem_5.logicBlock_visible();
				me._nodeimage_dronem_4.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._nodeimage_dronem_5.logicBlock_scaling();
				me._nodeimage_dronem_5.logicBlock_alpha();
				me._nodeimage_dronem_4.logicBlock_scaling();
				me._nodeimage_dronem_4.logicBlock_alpha();
			};
			me.__div = me._drone_m;
	};
	function SkinHotspotClass_hotspot_l(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_l=document.createElement('div');
		el.ggId="Hotspot L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_l.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_l.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_l.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_l']=true;
			me._hs_image_i_l3.logicBlock_scaling();
			me._hs_image_i_l3.logicBlock_bordercolor();
			me._nodeimage_1_l1.logicBlock_scaling();
			me._nodeimage_1_l1.logicBlock_angle();
			me._nodeimage_1_l1.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_l.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_l']=false;
			me._hs_image_i_l3.logicBlock_scaling();
			me._hs_image_i_l3.logicBlock_bordercolor();
			me._nodeimage_1_l1.logicBlock_scaling();
			me._nodeimage_1_l1.logicBlock_angle();
			me._nodeimage_1_l1.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l3=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_image_animated_2_l3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l3.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l3.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l3.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l3.style.transform=parameterToTransform(me._hs_image_animated_2_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l3);}, 550);
				}
				else {
					me._hs_image_animated_2_l3.ggParameter.sx = 1;
					me._hs_image_animated_2_l3.ggParameter.sy = 1;
					me._hs_image_animated_2_l3.style.transform=parameterToTransform(me._hs_image_animated_2_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_2_l3);}, 550);
				}
			}
		}
		me._hs_image_animated_2_l3.logicBlock_scaling();
		me._hs_image_animated_2_l3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l3.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l3.style.visibility=(Number(me._hs_image_animated_2_l3.style.opacity)>0||!me._hs_image_animated_2_l3.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l3.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l3.style.visibility="hidden";
					me._hs_image_animated_2_l3.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l3.logicBlock_visible();
		me._hs_image_animated_2_l3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l3.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l3.style.visibility=me._hs_image_animated_2_l3.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l3.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l3.style.opacity == 0.0) { me._hs_image_animated_2_l3.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l3.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l3.logicBlock_alpha();
		me._hs_image_animated_2_l3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_l.appendChild(me._hs_image_animated_2_l3);
		el=me._hs_image_animated_1_l3=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l3.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l3.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l3.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l3.style.transform=parameterToTransform(me._hs_image_animated_1_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l3);}, 550);
				}
				else {
					me._hs_image_animated_1_l3.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l3.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l3.style.transform=parameterToTransform(me._hs_image_animated_1_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_animated_1_l3);}, 550);
				}
			}
		}
		me._hs_image_animated_1_l3.logicBlock_scaling();
		me._hs_image_animated_1_l3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l3.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l3.style.visibility=(Number(me._hs_image_animated_1_l3.style.opacity)>0||!me._hs_image_animated_1_l3.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l3.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l3.style.visibility="hidden";
					me._hs_image_animated_1_l3.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l3.logicBlock_visible();
		me._hs_image_animated_1_l3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l3.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l3.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l3.style.opacity == 0.0) { me._hs_image_animated_1_l3.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l3.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l3.style.visibility=me._hs_image_animated_1_l3.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l3.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l3.logicBlock_alpha();
		me._hs_image_animated_1_l3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_l.appendChild(me._hs_image_animated_1_l3);
		el=me._hs_image_i_l3=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hs_image_i_l3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l3.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l3.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l3.ggParameter.sx = 0.8;
					me._hs_image_i_l3.ggParameter.sy = 0.8;
					me._hs_image_i_l3.style.transform=parameterToTransform(me._hs_image_i_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l3);}, 550);
				}
				else {
					me._hs_image_i_l3.ggParameter.sx = 0.5;
					me._hs_image_i_l3.ggParameter.sy = 0.5;
					me._hs_image_i_l3.style.transform=parameterToTransform(me._hs_image_i_l3.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_image_i_l3);}, 550);
				}
			}
		}
		me._hs_image_i_l3.logicBlock_scaling();
		me._hs_image_i_l3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l3.style.transition='transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l3.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l3.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l3.logicBlock_bordercolor();
		me._hs_image_i_l3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_l.appendChild(me._hs_image_i_l3);
		el=me._nodeimage_1_l1=document.createElement('div');
		els=me._nodeimage_1_l1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1_l1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_l1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_l1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_l1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_l1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_l1.ggParameter.sx = 3;
					me._nodeimage_1_l1.ggParameter.sy = 3;
					me._nodeimage_1_l1.style.transform=parameterToTransform(me._nodeimage_1_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l1);}, 1050);
				}
				else {
					me._nodeimage_1_l1.ggParameter.sx = 0;
					me._nodeimage_1_l1.ggParameter.sy = 0;
					me._nodeimage_1_l1.style.transform=parameterToTransform(me._nodeimage_1_l1.ggParameter);
					setTimeout(function() {skin.updateSize(me._nodeimage_1_l1);}, 1050);
				}
			}
		}
		me._nodeimage_1_l1.logicBlock_scaling();
		me._nodeimage_1_l1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_l1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_l1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_l1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_l1.ggParameter.a = 360;
					me._nodeimage_1_l1.style.transform=parameterToTransform(me._nodeimage_1_l1.ggParameter);
				}
				else {
					me._nodeimage_1_l1.ggParameter.a = -360;
					me._nodeimage_1_l1.style.transform=parameterToTransform(me._nodeimage_1_l1.ggParameter);
				}
			}
		}
		me._nodeimage_1_l1.logicBlock_angle();
		me._nodeimage_1_l1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_l'] == true)) || 
				((player.getVariableValue('autoExpanded') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_l1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_l1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_l1.style.transition='transform 1000ms ease 0ms, transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_l1.style.visibility=me._nodeimage_1_l1.ggVisible?'inherit':'hidden';
					me._nodeimage_1_l1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_l1.style.opacity == 0.0) { me._nodeimage_1_l1.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_l1.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_l1.logicBlock_alpha();
		me._nodeimage_1_l1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_l.appendChild(me._nodeimage_1_l1);
		me.elementMouseOver['hotspot_l']=false;
		me._hs_image_animated_2_l3.logicBlock_scaling();
		me._hs_image_animated_2_l3.logicBlock_visible();
		me._hs_image_animated_2_l3.logicBlock_alpha();
		me._hs_image_animated_1_l3.logicBlock_scaling();
		me._hs_image_animated_1_l3.logicBlock_visible();
		me._hs_image_animated_1_l3.logicBlock_alpha();
		me._hs_image_i_l3.logicBlock_scaling();
		me._hs_image_i_l3.logicBlock_bordercolor();
		me._nodeimage_1_l1.logicBlock_scaling();
		me._nodeimage_1_l1.logicBlock_angle();
		me._nodeimage_1_l1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_image_animated_2_l3.logicBlock_scaling();
				me._hs_image_animated_2_l3.logicBlock_visible();
				me._hs_image_animated_2_l3.logicBlock_alpha();
				me._hs_image_animated_1_l3.logicBlock_scaling();
				me._hs_image_animated_1_l3.logicBlock_visible();
				me._hs_image_animated_1_l3.logicBlock_alpha();
				me._hs_image_i_l3.logicBlock_scaling();
				me._hs_image_i_l3.logicBlock_bordercolor();
				me._nodeimage_1_l1.logicBlock_scaling();
				me._nodeimage_1_l1.logicBlock_angle();
				me._nodeimage_1_l1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_image_animated_2_l3.logicBlock_scaling();
				me._hs_image_animated_2_l3.logicBlock_visible();
				me._hs_image_animated_2_l3.logicBlock_alpha();
				me._hs_image_animated_1_l3.logicBlock_scaling();
				me._hs_image_animated_1_l3.logicBlock_visible();
				me._hs_image_animated_1_l3.logicBlock_alpha();
				me._hs_image_i_l3.logicBlock_scaling();
				me._hs_image_i_l3.logicBlock_bordercolor();
				me._nodeimage_1_l1.logicBlock_scaling();
				me._nodeimage_1_l1.logicBlock_angle();
				me._nodeimage_1_l1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_autoExpanded=function() {
				me._hs_image_i_l3.logicBlock_scaling();
				me._hs_image_i_l3.logicBlock_bordercolor();
				me._nodeimage_1_l1.logicBlock_scaling();
				me._nodeimage_1_l1.logicBlock_angle();
				me._nodeimage_1_l1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_blinken_starten=function() {
				me._hs_image_animated_2_l3.logicBlock_visible();
				me._hs_image_animated_1_l3.logicBlock_visible();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._hs_image_animated_2_l3.logicBlock_scaling();
				me._hs_image_animated_2_l3.logicBlock_alpha();
				me._hs_image_animated_1_l3.logicBlock_scaling();
				me._hs_image_animated_1_l3.logicBlock_alpha();
			};
			me.__div = me._hotspot_l;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='Hotspot L') {
				hotspot.skinid = 'Hotspot L';
				hsinst = new SkinHotspotClass_hotspot_l(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Drone M') {
				hotspot.skinid = 'Drone M';
				hsinst = new SkinHotspotClass_drone_m(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Extern Hotspot L') {
				hotspot.skinid = 'Extern Hotspot L';
				hsinst = new SkinHotspotClass_extern_hotspot_l(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Hotspot S') {
				hotspot.skinid = 'Hotspot S';
				hsinst = new SkinHotspotClass_hotspot_s(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Drone S') {
				hotspot.skinid = 'Drone S';
				hsinst = new SkinHotspotClass_drone_s(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Panel') {
				hotspot.skinid = 'Panel';
				hsinst = new SkinHotspotClass_panel(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Drone Extern') {
				hotspot.skinid = 'Drone Extern';
				hsinst = new SkinHotspotClass_drone_extern(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Extern Hotspot ') {
				hotspot.skinid = 'Extern Hotspot ';
				hsinst = new SkinHotspotClass_extern_hotspot_(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Button') {
				hotspot.skinid = 'Button';
				hsinst = new SkinHotspotClass_button(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ButtonRezeption') {
				hotspot.skinid = 'ButtonRezeption';
				hsinst = new SkinHotspotClass_buttonrezeption0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Infopoint') {
				hotspot.skinid = 'Infopoint';
				hsinst = new SkinHotspotClass_infopoint(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Link') {
				hotspot.skinid = 'Link';
				hsinst = new SkinHotspotClass_link(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Hotspot M') {
				hotspot.skinid = 'Hotspot M';
				hsinst = new SkinHotspotClass_hotspot_m(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Hotspot Info Button') {
				hotspot.skinid = 'Hotspot Info Button';
				hsinst = new SkinHotspotClass_hotspot_info_button(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Cloudflare Video') {
				hotspot.skinid = 'Cloudflare Video';
				hsinst = new SkinHotspotClass_cloudflare_video0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='infoLabel_small') {
				hotspot.skinid = 'infoLabel_small';
				hsinst = new SkinHotspotClass_infolabel_small(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='patch') {
				hotspot.skinid = 'patch';
				hsinst = new SkinHotspotClass_patch(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='patch_group_switcher') {
				hotspot.skinid = 'patch_group_switcher';
				hsinst = new SkinHotspotClass_patch_group_switcher(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='infoLabel') {
				hotspot.skinid = 'infoLabel';
				hsinst = new SkinHotspotClass_infolabel(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='label_hs') {
				hotspot.skinid = 'label_hs';
				hsinst = new SkinHotspotClass_label_hs(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='label_image_hs') {
				hotspot.skinid = 'label_image_hs';
				hsinst = new SkinHotspotClass_label_image_hs(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='label_image_hs_open') {
				hotspot.skinid = 'label_image_hs_open';
				hsinst = new SkinHotspotClass_label_image_hs_open(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Button Extern') {
				hotspot.skinid = 'Button Extern';
				hsinst = new SkinHotspotClass_button_extern(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='infoLabelVideo') {
				hotspot.skinid = 'infoLabelVideo';
				hsinst = new SkinHotspotClass_infolabelvideo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='infoLabelv2') {
				hotspot.skinid = 'infoLabelv2';
				hsinst = new SkinHotspotClass_infolabelv2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='label_text') {
				hotspot.skinid = 'label_text';
				hsinst = new SkinHotspotClass_label_text(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'patch_group';
				hsinst = new SkinHotspotClass_patch_group(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._blinken.ggLastIsActive!=me._blinken.ggIsActive()) {
			me._blinken.ggLastIsActive=me._blinken.ggIsActive();
			if (me._blinken.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		if (me._blinken_starten.ggLastIsActive!=me._blinken_starten.ggIsActive()) {
			me._blinken_starten.ggLastIsActive=me._blinken_starten.ggIsActive();
			if (me._blinken_starten.ggLastIsActive) {
				player.setVariableValue('blinken_starten', true);
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Montserrat, Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} .ggskin_text {justify-content: space-between} .rezeption-nav{width:350px;} @media only screen and (max-width: 1200px) { .rezeption-nav{width:300px !important;} .ggskin_text{max-width: 450px !important;} } @media only screen and (max-width: 600px) { .ggskin_text{max-width: 370px !important;} .panel_text_header div{font-size:12px !important;} .panel_text_description div{font-size: 8px !important;} .panel_text_button div{font-size: 12px !important;} .rezeption-nav{width:250px !important;} } @media only screen and (max-width: 425px){ .ggskin_text{max-width: 250px !important;} .rezeption-nav{width:200px !important;} }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};