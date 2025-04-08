/*import * as pano2vrPlayer from './pano2vr_player.js';
import pano2vrSkin from './skin_module.js';*/
import ScrollLock from "./modules/ScrollLock";
import pano2vrPlayer from "./pano2vr_player";
import pano2vrSkin from "./skin_module.js";
import { AddonsParams, ControlsListener, ControlsLock, DeviceType, ElementClasses, ElementID, ElementIDs, Elements, HorizonalAlignment, MoveKeyframe, MovementParams, ParsedQueryParams, QueryParams, ResponsiveParams, SkinVariable, StyleParams, TourNode, TourParams } from './types.js';

declare const window : any;

export default class Pano_360ty{
	suffix : string = "";
	elementIDs: ElementIDs = {
		parentContainer : "",
		container : "tourbuilder_360ty_"+this.suffix,
		panoContainer : "pano_container_360ty_"+this.suffix,
		impressumContainer : "impressum_360ty_"+this.suffix,
		buttonContainer : "button_container_360ty_"+this.suffix,
		shareButton : "shareButton_360ty_"+this.suffix,
		FBshareButton : "FBshareButton_360ty_"+this.suffix,
		URLshareButton : "URLshareButton_360ty_"+this.suffix,
		slidesButton : "slidesButton_360ty_"+this.suffix,
		buttonContainer_value_setter : "buttonContainer_value_setter_360ty_"+this.suffix,
		targetValueSetter_button : "setTargetValue_360ty_"+this.suffix,
		startValueSetter_button : "setStartValues_360ty_"+this.suffix,
		fullscreenClose_button : "fullscreenClose_360ty_"+this.suffix,
	};
	elementClasses: ElementClasses = {
		class_shareButtons : "shareButton_360ty_"+this.suffix,
		class_valueSetter_button : "valueSetter_360ty_"+this.suffix,
	}
	elements: Elements = {
		parentContainer : null,
		panoContainer : null,
		container : null,
		impressumContainer : null,
		impressum : null,
		buttonContainer : null,
		shareButton : null,
		URLshareButton : null,
		FBshareButton : null,
		buttonContainer_value_setter : null,
		targetValueSetter_button : null,
		startValueSetter_button : null,
		fullscreenClose_button : null,
		slidesButton : null,
	};
	tour_params: TourParams = {
		basepath : "",
		confFile: "",
		nodeFilter: [],
		removeExternals: false,
		removeDrones: false,
		node : null,
		fov : null,
		tilt : null,
		pan : null,
		roll : null,
	};
	movement_params: MovementParams = {
		keyframes : [],
		delay : 0,
		loop_amount : 1,
		moveSpeed : 1,
		movementAborted : false,
	}
	addons_params: AddonsParams = {
		singleImage : false,
		share_buttons : false,
		show_impressum : true,
	};
	style_params: StyleParams = {
		tour_dimensions: {
			width: "100%",
			height: "16:9"
		},
		horizontal_alignment : "center",
	};
	responsive_params: ResponsiveParams = {
		tablet : {
			tour_dimensions : {
				width: "100%",
				height: "16:9"
			},
			singleImage : false,
			share_buttons : false,
			show_impressum : true,
			horizontal_alignment : "center",
		},
		mobile: {
			tour_dimensions : {
				width: "100%",
				height: "9:16"
			},
			singleImage : false,
			share_buttons : false,
			show_impressum : false,
			horizontal_alignment : "center",
		}
	}
	skin_variables: SkinVariable[] = [];
	hovered_node: TourNode | null = null;
	pano:typeof pano2vrPlayer = null;
	skin:typeof pano2vrSkin | null = null;
	p2vrPlayer: typeof pano2vrPlayer = window.pano2vrPlayer || pano2vrPlayer;
	skinClass: typeof pano2vrSkin = window.pano2vrSkin || pano2vrSkin;
	controlsListener:ControlsListener = {};
	scrollLock:boolean = false;
	scrollLockHandler: ScrollLock | undefined;
	forceStylesheet: boolean = false;
	isFullscreen: boolean = false;
	private externalHotspotListenerSet: boolean = false;

	constructor(parentContainerID:string,basepath:string, suffix?:string,confFile?:string){
		this.suffix = suffix || "";
		this.setBasePath(basepath,confFile);
		if(confFile)this.tour_params.confFile = confFile;
		this.elementIDs.parentContainer = parentContainerID;
	}
	deviceType = () : DeviceType=>{
			if(window.matchMedia("only screen and (max-width: 900px)").matches == true){
				return "mobile";
			}else if(window.matchMedia("only screen and (max-width: 1300px)").matches == true){
				return "tablet";
			}else{
				return "desktop";
		}
	};
	isTouchDevice = () => 'ontouchstart' in window || !!navigator.maxTouchPoints;
	name = () => {
		let instanceName = "";
			for (var name in window){
			if (window[name] == this){
				instanceName = name;
			}
			}
		return instanceName;
};
	setPano2VRPlayer = (player: typeof pano2vrPlayer) => {
		this.p2vrPlayer = player;
	}
	getWebGLcontexts = () => {
		var contexts:WebGLRenderingContext[] = [];
		if(!this.elements.panoContainer){
			throw new Error("cant clear WebGL context if no panoContainer is defined")
		}
		var canvas = this.elements.panoContainer.querySelectorAll("canvas");
			for(let i = 0; i < canvas.length ; i++){
				contexts.push((canvas[i]).getContext("webgl")!);
			}
			return contexts;
	};
	pano_loaded = () => {
			if(this.pano != null){
				return this.pano.isLoaded;
				}else{
					return false;
				}
			};
	parseDomain = (domain: string) =>{
		domain = domain.replace(/(?:http(?:s?):\/{2})?([\w-?]*\.\w*\.\w*\.*\w*)(?:\S*\s*)/gi,"$1")
		return domain;
	}
	parseBasepath = (basepath: string) =>{
		basepath = this.parseDomain(basepath)
		if(basepath.endsWith("/")) basepath = basepath.substring(0, basepath.length - 1)
		return "https://" + basepath + "/"
	}
	checkBaseapathRedirect = async(basepath: string) =>{
		try{
			let res = await fetch(basepath,{redirect: "manual"});
			return res.url

		}catch(err)	{
			console.error(err)
			return basepath
		}
	}
 	init = async(): Promise<void> => {
	return new Promise(async(resolve,reject)=>{
		try{
			await this.waitForParentContainer();

			this.renameElementIds();
			if(!this.elements.parentContainer!.querySelector("#"+this.elementIDs.container)){
				let params = this.getTourParams()
				this.declareElements();
				this.setURLParameter();
				await this.setup_pano();
				if(params.share_buttons == true){
					this.setupButtons();
				}
				if(params.show_impressum == true){
					this.createImpressum();
				}
				
				this.setViewerSize(params.tour_width,params.tour_height);
				
				if(params.horAlign){
					this.horizontallyAlignImage(params.horAlign);
				}
				this.addListeners();
				this.scrollLockHandler =  new ScrollLock(this,this.scrollLock);
				resolve();						
			}
		}catch(err){
			reject(err)
		}
	})

}
getTourParams=()=>{
	switch(this.deviceType()){
		case 'desktop':
			return{
				share_buttons: this.addons_params.share_buttons,
				show_impressum: this.addons_params.show_impressum,
				tour_width: this.style_params.tour_dimensions.width,
				tour_height: this.style_params.tour_dimensions.height,
				horAlign: this.style_params.horizontal_alignment,
			}
		case 'tablet':
			return{
				share_buttons: this.responsive_params.tablet.share_buttons,
				show_impressum: this.responsive_params.tablet.show_impressum,
				tour_width: this.responsive_params.tablet.tour_dimensions.width,
				tour_height: this.responsive_params.tablet.tour_dimensions.height,
				horAlign: this.responsive_params.tablet.horizontal_alignment,
			}
		case 'mobile':
			return{
				share_buttons: this.responsive_params.mobile.share_buttons,
				show_impressum: this.responsive_params.mobile.show_impressum,
				tour_width: this.responsive_params.mobile.tour_dimensions.width,
				tour_height: this.responsive_params.mobile.tour_dimensions.height,
				horAlign: this.responsive_params.mobile.horizontal_alignment,
			}
		default:
			return{
				share_buttons: this.addons_params.share_buttons,
				show_impressum: this.addons_params.show_impressum,
				tour_width: this.style_params.tour_dimensions.width,
				tour_height: this.style_params.tour_dimensions.height,
				horAlign: this.style_params.horizontal_alignment,
			}
	}
}
 waitForParentContainer = async(): Promise<void> =>{
	return new Promise((resolve)=>{
		let init_interval = setInterval(()=>{
			if(document.getElementById(this.elementIDs.parentContainer)){
				this.elements.parentContainer = document.getElementById(this.elementIDs.parentContainer);
				clearInterval(init_interval);
				resolve();
			}
		},50);
	})
}
private renameElementIds = () =>{
	if(!this.suffix || this.suffix === ""){
		this.suffix = Math.random().toString(36).substring(2,7)
	}
	this.elementIDs = {
		...this.elementIDs,
		container : "tourbuilder_360ty_"+this.suffix,
		panoContainer : "pano_container_360ty_"+this.suffix,
		impressumContainer : "impressum_360ty_"+this.suffix,
		buttonContainer : "button_container_360ty_"+this.suffix,
		shareButton : "shareButton_360ty_"+this.suffix,
		FBshareButton : "FBshareButton_360ty_"+this.suffix,
		URLshareButton : "URLshareButton_360ty_"+this.suffix,
		slidesButton : "slidesButton_360ty_"+this.suffix,
		buttonContainer_value_setter : "buttonContainer_value_setter_360ty_"+this.suffix,
		targetValueSetter_button : "setTargetValue_360ty_"+this.suffix,
		startValueSetter_button : "setStartValues_360ty_"+this.suffix,
		fullscreenClose_button : "fullscreenClose_360ty_"+this.suffix,
	};
}
//user inputs
setBasePath = (url:string,confFile?:string) =>{
	if(!url || url === "") return
	this.tour_params.basepath = this.parseBasepath(url)
	this.tour_params.confFile = confFile;
}
setBackgroundImage = (url:string) => {
	this.style_params.backgroundImage = url;
}
setBackgroundColor = (color1:string,color2:string) => {
	this.style_params.backgroundColor = {color1:color1,color2:color2};
}
setDimensions = (width: string | number, height: string | number) => {
	this.setWidth(width);
	this.setHeight(height);
}
setWidth = (width: string | number) => {
	this.style_params.tour_dimensions.width = width;
}
setHeight = (height: string | number) => {
	this.style_params.tour_dimensions.height = height;
}
setPanoConfigFile = (url: string) => {
	this.tour_params.confFile = url;
}
setStartNode = (nodeNr: number) => {
	this.tour_params.node = nodeNr
}
setViewingParameter = (fov:number,tilt:number,pan:number,roll?:number):void => {
	this.setFov(fov);
	this.setTilt(tilt);
	this.setPan(pan);
	if(roll){
		this.setRoll(roll);
	}
}
setFov = (fov:number) => {
	this.tour_params.fov = fov
}
setTilt = (tilt: number) => {
	this.tour_params.tilt = tilt
}
setPan = (pan: number) => {
	this.tour_params.pan = pan
}
setRoll = (roll: number) => {
	this.tour_params.roll = roll
}
setSingleImage = (bool: boolean) => {
	this.addons_params.singleImage = bool
}
setShareButtonVisibility = (bool: boolean) => {
	this.addons_params.share_buttons = bool
}
setImpressumVisibility = (bool:boolean) =>{
	this.addons_params.show_impressum = bool
}
setHorizontalAlignment = (value: HorizonalAlignment) => {
	this.style_params.horizontal_alignment = value
}
setSkinClass = (newClass: typeof pano2vrSkin) => {
		this.skinClass = newClass
}
useBasepathSkin = () =>{
	this.skinClass = this.tour_params.basepath + "skin.js";
}
addNodeTitleFilter = (filter: string, caseSensitive?: boolean) =>{
	this.tour_params.nodeFilter.push({filter,caseSensitive})
}
removeExternalHotspots = () =>{
	this.tour_params.removeExternals = true;
}
removeDroneHotspots = () =>{
	this.tour_params.removeDrones = true;
}
//tablet parameter
setDimensions_tablet = (width: string | number, height: string | number) : void => {
	this.setWidth_tablet(width);
	this.setHeight_tablet(height);
}
setWidth_tablet = (width:string | number) => {
	this.responsive_params.tablet.tour_dimensions.width = width;
}
setHeight_tablet = (height: string | number) : void => {
	this.responsive_params.tablet.tour_dimensions.height = height;
}
setSingleImage_tablet = (bool: boolean) => {
	this.responsive_params.tablet.singleImage = bool
}
setShareButtonVisibility_tablet = (bool : boolean) => {
	this.responsive_params.tablet.share_buttons = bool
}
setImpressumVisibility_tablet = (bool : boolean) => {
	this.responsive_params.tablet.show_impressum = bool
}
setHorizontalAlignment_tablet = (value : HorizonalAlignment) => {
	this.responsive_params.tablet.horizontal_alignment = value
}
//mobile parameter
setDimensions_mobile = (width : string | number, height: string | number) => {
	this.setWidth_mobile(width);
	this.setHeight_mobile(height);
}
setWidth_mobile = (width: string | number) => {
	this.responsive_params.mobile.tour_dimensions.width = width;
}
setHeight_mobile = (height: string | number) => {
	this.responsive_params.mobile.tour_dimensions.height = height;
}
setSingleImage_mobile = (bool : boolean) => {
	this.responsive_params.mobile.singleImage = bool
}
setShareButtonVisibility_mobile = (bool: boolean): void => {
	this.responsive_params.mobile.share_buttons = bool
}
setImpressumVisibility_mobile = (bool: boolean) => {
	this.responsive_params.mobile.show_impressum = bool
}
setHorizontalAlignment_mobile = (value: HorizonalAlignment) => {
	this.responsive_params.mobile.horizontal_alignment = value
}
//
setSkinVariables = (array_vars: SkinVariable[]) => {
	array_vars.forEach((obj_var: SkinVariable) => {
		this.skin_variables.push(obj_var)
	})
}
setMovementDelay = (delay : number) => {
	this.movement_params.delay = delay
}
setMovementLoopAmount = (loop_amount: number) => {
	this.movement_params.loop_amount = loop_amount
}
setScrollLock = (lock: boolean) => {
	this.scrollLock = lock;
	if(this.scrollLockHandler){
		this.scrollLockHandler.setScrollLock(lock);
	}
}
addKeyframe = (fov:number,tilt:number,pan:number,speed: number,locked_controls: ControlsLock, node: number, pause = 0) => {
	var keyframeParams: MoveKeyframe = {
		fov,
		tilt,
		pan,
		speed,
		locked_controls,
		node,
		pause
	}
	let valid = this.checkKeyframeParams(keyframeParams);
	if(!valid){
		throw new Error("keyframe values not valid. -> (fov:number,tilt:number,pan:number,speed:number,locked_controls:'all'||'none'||'Mousewheel'||'Mouse'||'Keyboard'||'Keyboard+Mousewheel',[optional]node:number)")
	}
	this.movement_params.keyframes.push(keyframeParams);
	
}
removeElement = (element: HTMLElement) => {
	if(!element.parentElement) throw new Error(`can't remove child when there's no parent`)
	element.parentElement.removeChild(element);
}
reload = () => {
	this.externalHotspotListenerSet = false;
	this.clearwebglContext()
    if(this.elements.container && this.elements.container.parentElement){
		this.removeElement(this.elements.container);
    }
	this.elements.container = null;
	this.elements.panoContainer = null;
	if(this.elements.shareButton){
        if(this.elements.shareButton.parentElement){
			this.removeElement(this.elements.shareButton);
        }
		this.elements.shareButton = null;
	}
	if(this.elements.FBshareButton){
        if(this.elements.FBshareButton.parentElement){
			this.removeElement(this.elements.FBshareButton);
        }
		this.elements.FBshareButton = null;
	}
	if(this.elements.URLshareButton){
        if(this.elements.URLshareButton.parentElement){
			this.removeElement(this.elements.URLshareButton);
        }
		this.elements.URLshareButton = null;
	}
	if(this.elements.buttonContainer){
        if(this.elements.buttonContainer.parentElement){
			this.removeElement(this.elements.buttonContainer);
        }
        this.elements.buttonContainer = null;
	}
	if(this.elements.impressumContainer){
        if(this.elements.impressumContainer.parentElement){
			this.removeElement(this.elements.impressumContainer);
        }
		this.elements.impressumContainer = null;
	}
	this.onReload();
	this.init().then(()=>{
		this.callAfterReload();
	});
    
}
checkKeyframeParams = (keyframeParams: MoveKeyframe) : boolean => {
	if(typeof(keyframeParams.fov) === "number" && typeof(keyframeParams.tilt) === "number" && typeof(keyframeParams.pan) === "number" &&
	typeof(keyframeParams.speed) === "number" && (keyframeParams.locked_controls === 'all'||'none'||'Mousewheel'||'Mouse'||'Keyboard'||'Keyboard+Mousewheel')
	&& typeof(keyframeParams.node) === "number" || "undefined"){
		return true
	}else{
		return false
	}
}
//
checkIncludedStyle = () => {
	var nodes = document.head.childNodes;
	var link_list: ChildNode[] = [];
	for(let i = 0; i < document.head.childElementCount; i++){
		if(nodes[i].nodeName == "LINK"){
			link_list.push(nodes[i]);
		}
	}
	for(let i = 0; i < link_list.length;i++){
		if((link_list[i] as HTMLAnchorElement).href.includes("360ty_styles.css")){
			return true;
		}
	}
	return false;
}

includeStyle = () => {
	if(this.checkIncludedStyle() == false){
		var style_include = document.createElement("link");
		style_include.rel = "stylesheet";
		style_include.href = "https://api.360ty.cloud/360ty_styles.css";
		document.head.appendChild(style_include);
	}
}

declareElements = () => {

	if(this.responsive_params.tablet.tour_dimensions.width === null){
		this.responsive_params.tablet.tour_dimensions.width = this.style_params.tour_dimensions.width
	}
	if(this.responsive_params.tablet.tour_dimensions.height === null){
		this.responsive_params.tablet.tour_dimensions.height = this.style_params.tour_dimensions.height
	}
	if(this.responsive_params.tablet.singleImage === null){
		this.responsive_params.tablet.singleImage = this.addons_params.singleImage
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.share_buttons = this.addons_params.share_buttons
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.show_impressum = this.addons_params.show_impressum
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.horizontal_alignment = this.style_params.horizontal_alignment
	}
	
	if(this.responsive_params.mobile.tour_dimensions.width === null){
		this.responsive_params.mobile.tour_dimensions.width = this.style_params.tour_dimensions.width
	}
	if(this.responsive_params.mobile.tour_dimensions.height === null){
		this.responsive_params.mobile.tour_dimensions.height = this.style_params.tour_dimensions.height
	}
	if(this.responsive_params.mobile.singleImage === null){
		this.responsive_params.mobile.singleImage = this.addons_params.singleImage
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.share_buttons = this.addons_params.share_buttons
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.show_impressum = this.addons_params.show_impressum
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.horizontal_alignment = this.style_params.horizontal_alignment
	}
}

addMeta = (metaName: string, metaContent: string) => {
	var meta = document.createElement("meta");
	meta.name = metaName;
	meta.content = metaContent;
	document.head.appendChild(meta);
}
//setup_pano

onPanoConfigRead = (singleImage: boolean) => {
	if(this.pano.setZoomCenterCursor){
		this.pano.setZoomCenterCursor(0);
	}
	if(singleImage === true){
		this.pano.removeHotspots();
		this.pano.stopAutorotate();
	}
	if(this.skin_variables){
		this.changeSkinVars();
	}
	this.pano_UpdateViewingParams();

}

setup_pano = () => {
	return new Promise((resolve,reject)=>{
		this.interceptAlert(async()=>{

			this.setBasePath(await this.checkBaseapathRedirect(this.tour_params.basepath),this.tour_params.confFile);

			if(!this.elements.container){
				this.createContainer();
			}
			this.pano=new this.p2vrPlayer(this.elementIDs.container,this.tour_params.basepath);
			if(this.tour_params.node){
				this.pano.startNode = "node"+this.tour_params.node;
			}
			if(typeof(this.skinClass) !== "function"){
				this.skinClass = await this.getSkinClass(this.skinClass);
			}
		
			this.skin=new this.skinClass(this.pano,this.tour_params.basepath);
			var singleImage = false;
			switch(this.deviceType()){
				case 'desktop':
					singleImage = this.addons_params.singleImage;
					break;
				case 'tablet':
					singleImage = this.responsive_params.tablet.singleImage;
					break;
				case 'mobile':
					singleImage = this.responsive_params.mobile.singleImage;
					break;
				default:
					singleImage = this.addons_params.singleImage;
			}
			try{
				this.pano.readConfigUrlAsync(this.tour_params.confFile || this.tour_params.basepath+"pano.xml", ()=>{
					this.elements.panoContainer=this.getPanoContainer();
					this.elements.panoContainer!.id= this.elementIDs.panoContainer;
					this.onPanoConfigRead(singleImage)
					this.loadKeyframes();
					this.callOnNodeChange();
					resolve(this.pano);
				}
				,this.tour_params.basepath)
			
			}catch(err){
				reject(err);
			}
		})
	})
	
}
pano_UpdateViewingParams = () => {
	if(this.tour_params.fov || this.tour_params.fov === 0){
		this.pano.setFov(this.tour_params.fov);
	}
	if(this.tour_params.tilt || this.tour_params.tilt === 0){
		this.pano.setTilt(this.tour_params.tilt)
	}
	if(this.tour_params.pan || this.tour_params.pan === 0){
		this.pano.setPan(this.tour_params.pan)
	}
}
moveHome = async()=>{
	let homeKeyframe: MoveKeyframe = {
		node: this.tour_params.node || 1,
		fov: this.tour_params.fov || 75,
		tilt: this.tour_params.tilt || 0,
		pan: this.tour_params.pan || 0,
		locked_controls:"Mousewheel",
		speed:1,
		pause:0
	}
	await this.moveToKeyframe(homeKeyframe);
}
loadKeyframes = async() => {
	setTimeout(async() => {
			if(this.movement_params.keyframes.length !== 0){
				if(!this.elements.panoContainer){
					throw new Error("can't move to keyframe if no panoContainer is defined")
				}
				this.elements.panoContainer.addEventListener("mousedown",() => {
			
				this.movement_params.movementAborted = true
					
				});
				this.elements.panoContainer.addEventListener("touchstart",() => {
					this.movement_params.movementAborted = true
				})
				for(let i = 0; i< this.movement_params.loop_amount;i++){
					if(this.movement_params.movementAborted === false){
						await this.moveToKeyframes();
						//await this.moveHome();
					}else{
						break;
					}
				}
				this.onMovementFinished();
			}
	
	},this.movement_params.delay);
}/*
moveToStartNode = () : Promise<void> => {
	return new Promise((resolve, reject) => {
		if(!this.elements.panoContainer){
			throw new Error("can't move to keyframe if no panoContainer is defined")
		}
		if(this.tour_params.node){
			this.elements.panoContainer.addEventListener("mousedown",function(){
				reject("movement aborted by user")
		});
		this.elements.panoContainer.addEventListener("touchstart",function(){
			reject("movement aborted by user")
		})
			if(parseInt(this.pano.getCurrentNode().substring(4)) !== this.tour_params.node){
				this.pano.openNext("{node"+this.tour_params.node+"}")
			}
			resolve();
		}else{
			reject("start node not set");
		}
	})
}*/
sleep = (milliseconds:number) =>{
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}
 moveToKeyframes = async() => {
		try{
			return await Promise.allSettled(this.movement_params.keyframes.map(async(keyframe) =>{
			const frame = await this.moveToKeyframe(keyframe);
			return frame;
		}))
	}catch(err){
		console.log(err)
		return null;
	}
}
runMovement = (keyframe:MoveKeyframe) =>{
	return new Promise<void>((resolve) =>{
		this.pano.moveTo(keyframe.pan, keyframe.tilt, keyframe.fov,keyframe.speed,0,1);
		let moveInterval = setInterval(async()=>{
			if(this.pano.getPan().toFixed(2) === keyframe.pan.toFixed(2) && this.pano.getFov().toFixed(2) === keyframe.fov.toFixed(2) && keyframe.tilt.toFixed(2) === keyframe.tilt.toFixed(2)){
				clearInterval(moveInterval);
				await this.sleep(keyframe.pause)
				resolve();
			}
		},50);
	})
}
moveToKeyframe = (keyframe : MoveKeyframe) : Promise<void> => {
		try{
			return new Promise<void>(async(resolve, reject) =>{
				if(this.movement_params.movementAborted === false){
					await this.checkActiveMovement();
					this.setLock(keyframe.locked_controls)
					const isOtherNode = keyframe.node && "node"+keyframe.node !== this.pano.getCurrentNode()
					if(isOtherNode){
						await this.pano.openNext("{node"+keyframe.node+"}")
					}
					await this.runMovement(keyframe);
					
					console.log("waiting")
					let time = 0;
					setInterval(()=>time++,1)
					setTimeout(()=>{
						this.removeLockAfterMovement(keyframe.locked_controls);
						if(keyframe.node && !this.pano.getNodeIds().includes("node"+keyframe.node)){
							reject("Aborted Movement! There is no node"+keyframe.node+" in this tour.")
						}
						console.log("waited ",time)
						resolve();
					},keyframe.pause)
				}
			})
			
		}catch(err){throw new Error(err as string)}
}
checkActiveMovement = () : Promise<void> => {
	return new Promise(async(resolve,reject) => {
		var activeMov = setInterval(() => {
			if(this.movement_params.movementAborted === true){
				this.onMovementAborted();
				reject("movement aborted by user")
			}
			if(this.pano.I.active === false){
				clearInterval(activeMov)
				resolve()
			}
		},100)
	});
}
onMovementAborted = () => {}
onMovementFinished = () => {}
changeSkinVars = () => {
	if(typeof(this.skin_variables) === "object"){
		this.skin_variables.forEach((variable)=>{

			Object.keys(variable).forEach( (key, index) => {
				if(variable[index] !== null && variable[key] !== ""){
					this.pano.setVariableValue(key,variable[key]);
				}
			});
		});
	} 
}
removeLockAfterMovement = (type: ControlsLock) => {
	if(type != "none"){
	switch (type){
		case "all":
			var lock_controls_interval = setInterval(() => {
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLocked(false);
					}
				},100);
			break;
		case "Mousewheel":
			var lock_controls_interval = setInterval(() => {
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedWheel(false);
					}
				},100);
			break;
		case "Mouse":
			var lock_controls_interval = setInterval(() => {
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedMouse(false);
					}
				},100);
			break;
		case "Keyboard":
			var lock_controls_interval = setInterval(() => {
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedKeyboard(false);
					}
				},100);
			break;
		case "Keyboard+Mousewheel":
			var lock_controls_interval = setInterval(() => {
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedKeyboard(false);
						this.pano.setLockedWheel(false);
					}
				},100);
			break;
		default:
			throw new Error("couldnt find lock-parameter "+type);
		}
	}
}
setLock = (type : ControlsLock) => {
	if(type != "none"){
	switch (type){
		case "all":
			this.pano.setLocked(true);
			break;
		case "Mousewheel":
			this.pano.setLockedWheel(true);
			break;
		case "Mouse":
			this.pano.setLockedMouse(true);
			break;
		case "Keyboard":
			this.pano.setLockedKeyboard(true);
			break;
		case "Keyboard+Mousewheel":
			this.pano.setLockedKeyboard(true);
			this.pano.setLockedWheel(true);
			break;
		default:
			console.log("couldnt find lock-parameter "+type);
			break;
		}
	}
}

createContainer = () => {
	if(!this.elements.parentContainer){
		throw new Error("no parentContainer found")
	}
 	var parentContainer = this.elements.parentContainer;
	var container = document.createElement("div");
	container.style.width = this.elements.parentContainer.getBoundingClientRect().width + "px";
	container.style.height = this.elements.parentContainer.getBoundingClientRect().height + "px";
	if(this.style_params.backgroundColor){
		if(this.style_params.backgroundColor.color2){
			container.style.background = `linear-gradient(${this.style_params.backgroundColor.color1},${this.style_params.backgroundColor.color2})`;
		}else{
			container.style.backgroundColor = this.style_params.backgroundColor.color1
		}
	}
	if(this.style_params.backgroundImage){
		container.style.backgroundImage = `url(${this.style_params.backgroundImage})`
	}
    container.setAttribute("id",this.elementIDs.container);
	parentContainer.appendChild(container);

	this.elements.container! = container;
}

getPanoContainer= ()=> this.pano?.$ || this.pano?.divSkin

createImpressum = () => {
	var parent = this.elements.panoContainer!;
	var impressumContainer = document.createElement("div");
	impressumContainer.setAttribute("id",this.elementIDs.impressumContainer);
	var p = document.createElement("p");
 	var impressum = document.createElement("a");
    impressum.setAttribute("href","https://360ty.world/");
 	impressum.setAttribute("target","_blank");
	impressum.innerHTML = "360ty.world | Made with ♥ in Europe";
	parent.querySelector("#"+this.elementIDs.impressumContainer)?.remove();
 	parent.appendChild(impressumContainer);
	impressumContainer.appendChild(p);
	p.appendChild(impressum);
	this.elements.impressum = impressum;
	this.elements.impressumContainer = impressumContainer;
}

checkParameter = () => {
	var exceptions = ["singleImage","customClass"];
	var check = true;
for (var prop in this.tour_params){
	if(exceptions.includes(prop) == false){
		if(prop == null){
			console.error("360ty Pano - emtpy or wrong parameter" , "parameter "+prop+" empty or wrong! Please fill it out correctly and try again.");
			check = false;
		}
	}
}
 if(check == true){
        return true;
    } else {
        return false;
    }
}

setExternalsToTourChange = () =>{
	var hotspots = this.elements.panoContainer!.getElementsByClassName("ggskin_hotspot");
	const onMouseOver = () => {
		var timesCalled = 0;
		var hn_interval = setInterval(() => {
			if(timesCalled < 25){
				if(this.pano && this.pano.hotspot){
					var hotspot = this.pano.hotspot;
				}
				if(hotspot.url){
					this.hovered_node = hotspot;
					clearInterval(hn_interval);
				}else{
					timesCalled++
					this.hovered_node = null;
				}
			}else{
				clearInterval(hn_interval);
			}
		},10);
	}
	const onMouseUp= () => {
		if(this.hovered_node && this.hovered_node.url.startsWith("http") && this.hovered_node!.url.includes(".360ty.") && this.hovered_node!.target==="_self"){
			var hotspotURL = this.hovered_node.url;
			var basePathStartIndex = hotspotURL.indexOf("//")+2;
			var basePathEndIndex = hotspotURL.indexOf("/",basePathStartIndex);
			var basepath = hotspotURL.substring(0,basePathEndIndex+1);
			var nodeIndex = hotspotURL.indexOf("#",basePathEndIndex)+5;
			var nodeID = parseInt(hotspotURL.substring(nodeIndex,hotspotURL.length));
			this.setBasePath(basepath);
			this.tour_params.confFile = basepath + "pano.xml";
			this.setStartNode(nodeID);
			this.setFov(this.pano.getFov());
			this.setPan(this.pano.getPan());
			this.setTilt(this.pano.getTilt());
			this.reload();
			this.externalHotspotListenerSet = false;
		}
	}

	for(let i = 0; i<hotspots.length;i++){
		hotspots[i].removeEventListener("mouseover",onMouseOver)
		hotspots[i].addEventListener("mouseover",onMouseOver);
		hotspots[i].removeEventListener("mouseup",onMouseUp);
		hotspots[i].addEventListener("mouseup",onMouseUp);
	}
}

getCurrentHotspots = async() =>{
	await this.waitForPanoLoad();
	return this.pano.getPointHotspotIds().map(id => this.pano.getHotspot(id));
}

getHotspotsByFilters = (hotspots ,filters = this.tour_params.nodeFilter) =>{
	return filters.map((filter)=>{
		let filterTitle = filter.caseSensitive ? filter.filter : filter.filter.toLowerCase();
		return hotspots.filter((hs) => {
			let hsTitle = filter.caseSensitive ? hs.title : hs.title.toLowerCase();
			return hsTitle.includes(filterTitle);
		})
	}).flat(2)
}

removeHotspotsByFilters = (filters = this.tour_params.nodeFilter) =>{
	this.getCurrentHotspots().then((hotspots)=>{
		let hsToShow = this.getHotspotsByFilters(hotspots, filters);
		console.log(hsToShow[0],hotspots)
		hotspots.forEach((currHs)=>{
			if (hsToShow.findIndex(hs => hs.id === currHs.id  && hs.title === currHs.title) < 0){
				this.pano.removeHotspot(currHs.id);
				//console.log("removed hotspot",currHs.id,currHs.title)
				//console.log(filters.map((filter) => filter.filter))
			}
		})
	})
	
}

removeExternals = (selfOnly:boolean = true) =>{
	this.getCurrentHotspots().then((hotspots)=> {
		hotspots.forEach((hs)=>{
			if(hs.url.startsWith("http") && (!selfOnly || hs.target === "_self"))
			this.pano.removeHotspot(hs.id);
		});
	})	
}

removeDrones = () => {
	this.getCurrentHotspots().then((hotspots) => hotspots.forEach((hs)=>{
		if(hs.skinid.toLowerCase().includes("drone") || hs.skinid.toLowerCase().includes("drohne")){
			this.pano.removeHotspot(hs.id);
		}
	}))
}

callOnNodeChange = () => {
	if(!this.elements.panoContainer){
		console.warn("can't add hotspot listeners, if no panoContainer is declared")
	}else{
		if(!this.pano || !this.pano.getPointHotspotIds){
			console.warn("can't add hotspot listeners as pano isn't ready yet")
		}else{
			if(this.tour_params.removeExternals){
				this.removeExternals()
			}else{
				this.setExternalsToTourChange();
			}
			if(this.tour_params.removeDrones) this.removeDrones();
			if(this.tour_params.nodeFilter.length > 0) this.removeHotspotsByFilters();
			if(this.externalHotspotListenerSet == false){
				this.externalHotspotListenerSet = true;
				this.pano.removeEventListener("changenode");
				this.pano.addListener("changenode",() => {
					this.callOnNodeChange();
				});
			}
		}
	}
	
}

setActiveNode = (nodeID: number) => {
	this.pano.openNext(`{node${nodeID}}`);
}
setActiveFov = (fov: number) => {
	this.pano.setFov(fov);
}
setActiveTilt = (tilt: number) => {
	this.pano.setTilt(tilt);
}
setActivePan = (pan: number) => {
	this.pano.setPan(pan);
}
setActiveSingleImage = (singleImage: boolean) => {
	if(this.pano.divSkin){
		this.pano.divSkin.style.opacity = singleImage ? 0 : 1;
	}else{
		this.pano.$.querySelectorAll(".ggskin").forEach((ggEl: HTMLElement) => {ggEl.style.opacity = singleImage ? "0" : "1"})
	}
}
setActiveHotspotColor = (color: string) => {
	this.pano.setVariableValue("hotspotFarbe",color)
}
setActiveWidth = (width: number | string) => {
	this.style_params.tour_dimensions.width = width;
	this.setViewerSize(this.style_params.tour_dimensions.width,this.style_params.tour_dimensions.height);
}
setActiveHeight = (height: number | string) => {
	this.style_params.tour_dimensions.height = height;
	this.setViewerSize(this.style_params.tour_dimensions.width,this.style_params.tour_dimensions.height);
}

//buttons
setupButtons = () => {
	if(!this.elements.shareButton){
	if(this.pano && this.pano.isLoaded == true){
		this.createShareButtons();
	}else{
		var shareButtonsInterval = setInterval(() => {
			if(this.pano && this.pano.isLoaded == true){
				this.createShareButtons();
				clearInterval(shareButtonsInterval);
				}
		},100);
	}
	}
}

callAfterPanoLoaded = (callback: () => void) => {
	var called = false;
	if(this.pano_loaded() == true){
		callback();
	}else{
		var panoLoaded_interval = setInterval(() => {
			if(this.pano_loaded() == true){
					clearInterval(panoLoaded_interval);
					if(called == false){
						callback();
						called = true;
					}
				}
		},100);
	}
}

createButton = (onclickEvent: (e?: MouseEvent) => void, id:ElementID, text:string, style_display: "" | "none") =>{
	if(!this.elements.buttonContainer){
		this.elements.buttonContainer = document.createElement("div");
		this.elements.buttonContainer.setAttribute("id",this.elementIDs.buttonContainer);
		this.elements.panoContainer!.appendChild(this.elements.buttonContainer);
	}
	var button = document.createElement("button");
	let buttonId= this.elementIDs[id] || id;
    button.setAttribute("id",buttonId);
    button.setAttribute("class",this.elementClasses.class_shareButtons);
    if(style_display){
    	button.setAttribute("style","display: "+ style_display +";");
	}
	button.addEventListener("click",(e)=>{
		onclickEvent(e);
	})
    button.innerHTML = text;
	this.elements.buttonContainer.querySelector("#"+buttonId)?.remove();
	this.elements.buttonContainer.appendChild(button);
	this.elements[id] = button;
}

createShareButtons = () => {
    this.createButton(this.showShareButtons,"shareButton","share","");
    this.createButton(this.shareOnFacebook,"FBshareButton", "share on facebook","none");
 	this.createButton(this.copyShareUrlToClipboard,"URLshareButton", "get link to location","none");
}

copyShareUrlToClipboard = () => {
	this.copyToClipboard(this.getShareURL(),'link')
}

showShareButtons = () => {
	if(this.elements.shareButton) this.elements.shareButton.style.display = "none";
	if(this.elements.URLshareButton) this.elements.URLshareButton.style.display = "";
	if(this.elements.FBshareButton) this.elements.FBshareButton.style.display = "";
}
hideShareButtons = () =>{
	if(this.elements.shareButton) this.elements.shareButton.style.display = "none";
	if(this.elements.URLshareButton) this.elements.URLshareButton.style.display = "none";
	if(this.elements.FBshareButton) this.elements.FBshareButton.style.display = "none";
}
shareOnFacebook = () => {
    var facebookURL =  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = window.visualViewport?(window.visualViewport.width / 2) : (window.screen.availWidth / 2);
    var topPosition = window.visualViewport?(window.visualViewport.height / 2) : (window.screen.availWidth / 2);
    var popUpSettings = 'height=700,width=500, screenX =' + leftPosition + ',screenY =' + topPosition + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
    var win = window.open(facebookURL,'popUpWindow',popUpSettings);
    if(win) win.focus();
}

copyToClipboard = (text: string,alertText: string) => { 
	if(!navigator.clipboard){
		var aux = document.createElement("input");
		aux.setAttribute("value", text);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
		alert(alertText + ' copied to clipboard!');
	}else{
		navigator.clipboard.writeText(text).then(()=>{
			alert(alertText + ' copied to clipboard!');
		}).catch(err => {throw err})
	}
}

getShareURL = () => {
        var shareUrl = this.pano.getBasePath() +"?Pano=" + this.pano.getCurrentNode() + "&PanoFovTarget=" + this.pano.getFov() + "&PanoPanTarget=" + this.pano.getPan() + "&PanoTiltTarget=" + this.pano.getTilt() + "&PanoFovStart=" + (this.pano.getFov() + 20) + "&PanoPanStart=" + (this.pano.getPan() +50) + "&PanoTiltStart=" + this.pano.getTilt();
      return shareUrl;
}
addListeners = () => {
	this.windowResizeListener();
	this.clearwebglContext_listener();
	this.fullscreenListener();
}
createFullscreenCloseButton = () =>{
	var button = document.createElement("button");
	button.setAttribute("id",this.elementIDs.fullscreenClose_button);
	button.addEventListener("click",()=>{
		this.pano.exitFullscreen();
	})
	button.textContent = "X";
	this.elements.panoContainer!.appendChild(button);
	this.elements.fullscreenClose_button = button;
}
removeFullscreenCloseButton = () =>{
	this.elements.fullscreenClose_button?.remove();
}
fullscreenListener = () => {
	this.pano.addListener("fullscreenenter",()=>{
		this.createFullscreenCloseButton();
		this.onFullscreenEnter();
		this.isFullscreen = true;
	})
	this.pano.addListener("fullscreenexit",()=>{
		this.removeFullscreenCloseButton()
		this.onFullscreenExit();
		this.isFullscreen = false;
	})
}
onFullscreenEnter=()=>{}
onFullscreenExit=()=>{}
windowResizeListener = () => {
	window.addEventListener("resize", () => {
		let height;
		let width;
		switch(this.deviceType()){
			case "desktop":
				width = this.style_params.tour_dimensions.width;
				height = this.style_params.tour_dimensions.height;
				break;
			case "tablet":
				width = this.responsive_params.tablet.tour_dimensions.width;
				height = this.responsive_params.tablet.tour_dimensions.height;
				break;
			case "mobile":
				width = this.responsive_params.mobile.tour_dimensions.width;
				height = this.responsive_params.mobile.tour_dimensions.height;
				break;
		}
		this.setViewerSize(width,height);
	});
	this.elements.container?.addEventListener("resize", () => {
		let height;
		let width;
		switch(this.deviceType()){
			case "desktop":
				width = this.style_params.tour_dimensions.width;
				height = this.style_params.tour_dimensions.height;
				break;
			case "tablet":
				width = this.responsive_params.tablet.tour_dimensions.width;
				height = this.responsive_params.tablet.tour_dimensions.height;
				break;
			case "mobile":
				width = this.responsive_params.mobile.tour_dimensions.width;
				height = this.responsive_params.mobile.tour_dimensions.height;
				break;
		}
		this.setViewerSize(width,height);
	});
}
setViewerSize = (width: number | string, height: number | string) => {
		width =  typeof width === "number" ? width + "px" : width;
		this.elements.container!.style.width = width;

		height = typeof height === "number" ? height + "px" : (height.includes(":") ? this.calculateAspectRatio(height) + "px" : (height.endsWith("%%") ? this.calcHeight_Precentage(height) + "px" : height));
		this.elements.container!.style.height = height;
		
		var containerSize = this.elements.container!.getBoundingClientRect();
		if(this.elements.panoContainer){
		this.elements.panoContainer.style.width = containerSize.width + "px";
		this.elements.panoContainer.style.height = containerSize.height + "px";
		}
		this.pano.setViewerSize(containerSize.width,containerSize.height);
	}
calculateAspectRatio = (ratio: string) => {
	var colonIndex = ratio.indexOf(":");
	var x_aspect = parseFloat(ratio.substring(0,colonIndex));
	var y_aspect = parseFloat(ratio.substring(colonIndex+1));
	var height = this.elements.container!.getBoundingClientRect().width/(x_aspect/y_aspect);
	return height;
}
calcHeight_Precentage = (height: string) => {
	var width = this.elements.container!!.getBoundingClientRect().width;
	var perc_height = parseFloat(height.substring(-1))/100;
	var calc_height = width * perc_height;
	return calc_height;
}
horizontallyAlignImage = (alignment : HorizonalAlignment) => {
	var container_style = this.elements.container!!.style;
	switch(alignment){
		case "center":
			container_style.marginRight = "auto";
			container_style.marginLeft = "auto";

			break;
		case "left":
			container_style.marginRight = "auto";
			container_style.marginLeft = "";

			break;
		case "right":
			container_style.marginRight = "";
			container_style.marginLeft = "auto";
	}
}	
getURLParameter = (paramString = window.location.search) => {
	var searchParams = new URLSearchParams(paramString);
	let parsedParams = this.objectKeysToLowercase(this.paramsToObject(searchParams.entries()));
	let params: ParsedQueryParams = {
		node : parsedParams.node || parsedParams.pano || null,
		fov : parsedParams.fov ||  parsedParams.fovtarget || parsedParams.panofovtarget || null,
		tilt : parsedParams.tilt || parsedParams.tilttarget || parsedParams.panotilttarget || null,
		pan : parsedParams.pan  || parsedParams.pantarget || parsedParams.panopantarget || null,
		fov_start : parsedParams.fovstart || parsedParams.panofovstart || null,
		tilt_start : parsedParams.tiltstart || parsedParams.panotiltstart || null,
		pan_start :  parsedParams.panstart || parsedParams.panopanstart || null,
		singleImage : parsedParams.singleimage === true ||parsedParams.singleimage === "" ? true : this.addons_params.singleImage || false,
		moveDelay : parsedParams.movedelay || 0,
		moveSpeed : parsedParams.movespeed || 1,
		moveLock : parsedParams.movelock || "none"
	}
	return params
}
paramsToObject = (entries: IterableIterator<[string, string]>) : QueryParams => {
	const result = {}
	for(const pair of entries) { // each 'entry' is a [key, value] tupple
		// @ts-ignore
	  result[pair[0]] = pair[1];
	}
	return result;
  }
objectKeysToLowercase = (obj: Record<string,any>) => {
	var key, keys = Object.keys(obj);
	var n = keys.length;
	var newobj : {[key:string]:any} ={};
	while (n--) {
		key = keys[n];
		newobj[key.toLowerCase()] = obj[key];
	}
	return newobj;
}
setURLParameter = (params = this.getURLParameter()) =>{
	if(params.node){
		if(params.node.startsWith("node")){
			params.node = params.node.substring(4);
		}
		this.setStartNode(parseInt(params.node));
	}

	const startPosition = {
		fov: params.fov_start || params.fov,
		tilt: params.tilt_start || params.tilt,
		pan: params.pan_start || params.pan,
	}

	if(startPosition.fov){
		this.setFov(parseFloat(startPosition.fov));
	}
	if(startPosition.tilt){
		this.setTilt(parseFloat(startPosition.tilt))
	}
	if(startPosition.pan){
		this.setPan(parseFloat(startPosition.pan))
	}

	const moveToPosition = {
		fov: params.fov || params.fov_start,
		tilt: params.tilt || params.tilt_start,
		pan: params.pan || params.pan_start,
	}
	if(moveToPosition.fov && moveToPosition.tilt && moveToPosition.pan)
	this.addKeyframe(
		parseFloat(moveToPosition.fov),
		parseFloat(moveToPosition.pan),
		parseFloat(moveToPosition.tilt),
		parseFloat(params.moveSpeed || "1"),
		params.moveLock || "Mousewheel",
		parseInt(params.node || "node1"),
	)

	if(params.singleImage){
		this.setSingleImage(params.singleImage || params.singleImage === "" ? true : false)
	}
}
onReload = () => {
    
}
callAfterReload = async()=>{
    await this.waitForPanoLoad();
    this.callOnNodeChange();
    this.onReloadFinished();
}
onReloadFinished = ()=>{

}
clearwebglContext_listener = () => {
	document.addEventListener("close", ()=>{
		this.clearwebglContext()
	});
}
waitForPanoLoad = async() : Promise<void> =>{
    return new Promise((resolve)=>{
        let interval = setInterval(()=>{
            if(this.pano_loaded() === true){
                clearInterval(interval);
                resolve();
            }
        },10)
        
    })
}
clearwebglContext = () => {
    if(this.elements.panoContainer){
        var canvas = this.elements.panoContainer.getElementsByTagName("canvas");
        for( let i = 0; i< canvas.length;i++){
            canvas[i].getContext('webgl')!.getExtension('WEBGL_lose_context')!.loseContext();
        }
        console.log("panorama wegl context cleared");
    }else{
        console.log("panorama wegl context not found");

    }
}
getSkinClass = (url: string) => {
	return new Promise((resolve,reject)=>{
		try{
			fetch(url)
			.then(res => res.text())
			.then(data => resolve(this.getClassFromString(data)))
			.catch(err=>{reject(err)})
		}catch(err){
			reject(err)
		}
	})

}
getClassFromString = (str: string) => {
	let funcIndex = str.indexOf("pano2vrSkin")+25;
	let newString = str.substring(funcIndex,str.length);
	console.log(newString);
	let func = new Function("player","base",newString)
	console.log(func);
	return func;

}
private interceptAlert = async(cb:()=>void | Promise<void>) => {
    // Store the original alert function
    const originalAlert = window.alert;

    // Override the alert function
    window.alert = function(message) {
        console.error("Alert intercepted:", message);
    };

    try {
        await cb();
    } finally {
        window.alert = originalAlert;
    }
}
}
