import Pano_360ty from "../class-tourbuilder-360ty";
import pano2vrPlayer from "../old_players/pano2vr_player_v7_0_2.js";

export default class ScrollLock {
    scrollLock:boolean = true;
    locked: boolean = false;
    notificated: boolean = false;
    notification = new ScrollLockNotification()
    container: HTMLElement | undefined;
    pano: pano2vrPlayer | undefined;

    constructor(public tourbuilder: Pano_360ty, scrollLock?:boolean) {
        this.scrollLock = !!scrollLock;
        this.init();
    }
    setScrollLock(scrollLock:boolean) {
        this.scrollLock = scrollLock;
    }
    private lockUseful = () =>{
        return (this.hasVScroll() && !this.tourbuilder.isTouchDevice())
    }
    private hasVScroll = () => document.body.scrollHeight >  window.outerHeight;
    init = async() =>{
        this.container = await this.waitForContainer();
        this.addListener();
        this.container.appendChild(this.notification.container);
        this.pano = await this.waitForPano();
        if(this.lockUseful()) this.setLocked(true);
    }
    addListener = () =>{
        if(!this.container){
            throw new Error("Can't add listener to scrollLock, container is undefined");
        }
        this.container.addEventListener('wheel', this.scrollHandler);
        this.container.addEventListener('mousedown', this.mouseDownHandler);
    }
    waitForContainer = () =>{
        return new Promise<HTMLElement>((resolve)=>{
            let interval = setInterval(()=>{
                if(this.tourbuilder.elements.panoContainer){
                    clearInterval(interval);
                    resolve(this.tourbuilder.elements.panoContainer);
                }
            },100)
        })
    }
    waitForPano = () =>{
        return new Promise<HTMLElement>((resolve)=>{
            let interval = setInterval(()=>{
                if(this.tourbuilder.pano && this.tourbuilder.pano.getIsLoaded()){
                    clearInterval(interval);
                    resolve(this.tourbuilder.pano);
                }
            },100)
        })
    }
    mouseDownHandler = ()=>{
        if(this.notification.open) this.notification.hide();
    }
    scrollHandler = (e:WheelEvent) =>{
        if(this.scrollLock && this.lockUseful()){
            if(e.ctrlKey)e.preventDefault();
            this.setLocked(!e.ctrlKey);
            this.notification.setVisibility(!e.ctrlKey)
        }else{
            this.setLocked(false);
            this.notification.setVisibility(false)
        }
    }
    setLocked = (locked:boolean) =>{
        if(this.locked !== locked){
            this.locked = locked;
            if(!this.pano){
                this.waitForPano().then(pano=>{
                    this.pano = pano;
                    this.pano.setLockedWheel(this.locked);
                })
            }else{
                this.pano.setLockedWheel(this.locked);
            }
        }
    }
}

class ScrollLockNotification{
    container = document.createElement("div");
    open: boolean = false;
    constructor(){
        this.container.classList.add("scroll-lock-notification-container");
        this.createNotification();
    }
    getContainer = () => this.container;
    show = () =>{
        this.open = true;
        this.container.classList.add("notification-open");
    }
    hide = () =>{
        this.open = true;
        this.container.classList.remove("notification-open");
    }
    setVisibility = (visible:boolean) =>{
        visible ? this.show() : this.hide();
    }
    private createNotification = () =>{
        let notification = document.createElement("p");
        notification.classList.add("scroll-lock-notification");
        notification.innerHTML = (/^de\b/).test(navigator.language) ? "Halte <span class='ctrl-button'>strg</span> und scrolle, um zu zoomen" : "Hold <span class='ctrl-button'>ctrl</span> and scroll to zoom";
        this.container.appendChild(notification);
    }
}