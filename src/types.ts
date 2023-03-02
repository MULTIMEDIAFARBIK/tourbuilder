export type ElementID = "parentContainer" | "container" | "panoContainer" | "impressumContainer" | "buttonContainer" | "shareButton" | "FBshareButton" | "URLshareButton" | "slidesButton" | "buttonContainer_value_setter" | "targetValueSetter_button" | "startValueSetter_button";

export interface ParsedQueryParams {
    node? : string;
    fov? : string;
    tilt? : string;
    pan? : string;
    fov_start? : string;
    tilt_start? : string;
    pan_start? : string;
    singleImage? : boolean | string;
    moveDelay? : string;
    moveSpeed? : string;
    moveLock? : ControlsLock;
}

export interface QueryParams extends ParsedQueryParams {
    fovtarget? : string;
    panofovtarget? : string;
    tilttarget? : string;
    panotilttarget? : string;
    panstart? : string;
    panopanstart? : string;
    fovstart? : string;
    panofovstart? : string;
    tiltstart? : string;
    panotiltstart? : string;
}


export interface ElementIDs {
    parentContainer : string;
    container : string;
    panoContainer :  string;
    impressumContainer :  string;
    buttonContainer :  string;
    shareButton :  string;
    FBshareButton : string;
    URLshareButton :  string;
    slidesButton : string;
    buttonContainer_value_setter :  string;
    targetValueSetter_button :  string;
    startValueSetter_button : string;
    fullscreenClose_button: string;
}

export interface ElementClasses {
    class_shareButtons :  string;
    class_valueSetter_button : string;
}

export interface Elements {
    parentContainer : null | HTMLElement;
    panoContainer : null | HTMLElement;
    container : null | HTMLElement;
    impressumContainer : null | HTMLElement;
    impressum : null | HTMLElement;
    buttonContainer : null | HTMLElement;
    shareButton : null | HTMLElement;
    URLshareButton : null | HTMLElement;
    FBshareButton : null | HTMLElement;
    buttonContainer_value_setter : null | HTMLElement;
    targetValueSetter_button : null | HTMLElement;
    startValueSetter_button : null | HTMLElement;
    slidesButton : null | HTMLElement;
    fullscreenClose_button : null | HTMLElement;
}
export interface NodeTitleFilter {
    filter: string,
    caseSensitive?: boolean,
}
export interface TourParams {
    basepath : string;
    node: null | undefined | number;
    fov: null | undefined | number;
    tilt: null | undefined | number;
    pan: null | undefined | number;
    roll: null | undefined | number;
    nodeFilter : NodeTitleFilter[];
    removeExternals: boolean;
    removeDrones: boolean;
    confFile? : string;
}

export type DeviceType = "desktop" | "tablet" | "mobile";

export type ControlsLock = 'all' | 'none' | 'Mousewheel' | 'Mouse' | 'Keyboard' | 'Keyboard+Mousewheel';

export interface MoveKeyframe{
    fov : number;
    tilt : number;
    pan : number;
    speed : number;
    locked_controls : ControlsLock;
    node? : number;
    pause : number;
}

export interface MovementParams {
    keyframes : MoveKeyframe[];
    delay: number;
    loop_amount: number;
    movementAborted: boolean;
    moveSpeed : number;
}

export interface AddonsParams {
    singleImage: boolean;
    share_buttons: boolean;
    show_impressum: boolean;
}

export type HorizonalAlignment = "left" | "right" | "center";

export interface Dimensions {
    width: number | string;
    height: number | string;
}

export interface StyleParams {
    horizontal_alignment : HorizonalAlignment;
    tour_dimensions: Dimensions;
    backgroundImage?:string;
    backgroundColor?:{
        color1:string;
        color2:string;
    }
}

export interface ResponsiveParamObject extends AddonsParams,StyleParams{};

export interface ResponsiveParams{
    tablet: ResponsiveParamObject;
    mobile : ResponsiveParamObject;
}

export interface SkinVariable{
    [key: string]: string | boolean;
}

export interface TourNode {
    description: string;
    distance: number;
    distance3D: number;
    id: string;
    skinid: string;
    target: string;
    title: string;
    url: string;
    visible: boolean;
}

export interface ControlsListener{

}

