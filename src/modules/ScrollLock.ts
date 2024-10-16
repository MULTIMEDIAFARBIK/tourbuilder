import Pano_360ty from "../class-tourbuilder-360ty";
import pano2vrPlayer from "../old_players/pano2vr_player_v7_0_2.js";

export default class ScrollLock {
    isLocked: boolean = false;
    notificated: boolean = false;
    notification = new ScrollLockNotification()
    container: HTMLElement | undefined;
    pano: pano2vrPlayer | undefined;

    constructor(public tourbuilder: Pano_360ty, private scrollLockEnabled:boolean = true) {
        this.scrollLockEnabled = !!scrollLockEnabled;
        this.init();
    }
    setScrollLock(scrollLock:boolean) {
        this.scrollLockEnabled = scrollLock;
    }
    private isLockUseful = () =>{
        return (this.hasVScroll() && !this.tourbuilder.isTouchDevice() &&!this.tourbuilder.isFullscreen)
    }
    private hasVScroll = () => {
        const hasScroll = document.body.scrollHeight > window.innerHeight;
        return hasScroll;
    }
    init = async() =>{
        this.container = await this.waitForContainer();
        this.pano = await this.waitForPano();
        this.pano.setLockedWheel(false)
        if(this.scrollLockEnabled && this.isLockUseful()){
            this.setIsLocked(true);
            this.addListener();
            this.container.appendChild(this.notification.container);
        }
    }
    
    addListener = () =>{
        if(!this.container){
            throw new Error("Can't add listener to scrollLock, container is undefined");
        }
        this.tourbuilder.elements.container!.addEventListener('wheel', this.scrollHandler, { passive: false });
        this.tourbuilder.elements.container!.addEventListener('mousedown', this.mouseDownHandler);
        
    }
    
    waitForContainer = () =>{
        return new Promise<HTMLElement>((resolve)=>{
            let interval = setInterval(()=>{
                if(this.tourbuilder.elements.panoContainer){
                    clearInterval(interval);
                    resolve(this.tourbuilder.elements.panoContainer);
                }
            },50)
        })
    }
    waitForPano = () =>{
        return new Promise<HTMLElement>((resolve)=>{
            let interval = setInterval(()=>{
                if(this.tourbuilder.pano && this.tourbuilder.pano.getIsLoaded()){
                    clearInterval(interval);

                    resolve(this.tourbuilder.pano);
                }
            },50)
        })
    }
    mouseDownHandler = ()=>{
        if(this.notification.open) this.notification.hide();
    }
    scrollHandler = (e: WheelEvent) => {
        if (this.scrollLockEnabled && this.isLockUseful()) {
            if (e.ctrlKey) {
                e.preventDefault(); // Always prevent default browser behavior
                // When Ctrl is pressed
                this.setIsLocked(false); // Unlock the wheel controls
                this.notification.setVisibility(false); // Hide notification
                // Allow event to reach panorama viewer
            } else {
                // When Ctrl is not pressed
                this.setIsLocked(true); // Lock the wheel controls
                this.notification.setVisibility(true); // Show notification
            }
        }else{
            this.notification.setVisibility(false); // Hide notification
            this.setIsLocked(false);
        }
    };
    
    
    setIsLocked = async(locked:boolean) =>{
        if(this.isLocked !== locked){
            this.isLocked = locked;
            if(!this.pano) await this.waitForPano()
            this.pano.setLockedWheel(this.isLocked);
            
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