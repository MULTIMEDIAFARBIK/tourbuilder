import { AddonsParams, MovementParams, ResponsiveParams, StyleParams, TourParams, SkinVariable, HorizonalAlignment, MoveKeyframe, ControlsLock, NodeTitleFilter } from '../types.js';

export default class PanoSettings {
    tourParams: TourParams = {
        basepath: '',
        confFile: '',
        nodeFilter: [],
        removeExternals: false,
        removeDrones: false,
        node: null,
        fov: null,
        tilt: null,
        pan: null,
        roll: null,
    };

    movementParams: MovementParams = {
        keyframes: [],
        delay: 0,
        loop_amount: 1,
        moveSpeed: 1,
        movementAborted: false,
    };

    addonsParams: AddonsParams = {
        singleImage: false,
        share_buttons: false,
        show_impressum: true,
    };

    styleParams: StyleParams = {
        tour_dimensions: {
            width: '100%',
            height: '16:9',
        },
        horizontal_alignment: 'center',
    };

    responsiveParams: ResponsiveParams = {
        tablet: {
            tour_dimensions: {
                width: '100%',
                height: '16:9',
            },
            singleImage: false,
            share_buttons: false,
            show_impressum: true,
            horizontal_alignment: 'center',
        },
        mobile: {
            tour_dimensions: {
                width: '100%',
                height: '9:16',
            },
            singleImage: false,
            share_buttons: false,
            show_impressum: false,
            horizontal_alignment: 'center',
        },
    };

    skinVariables: SkinVariable[] = [];
    scrollLock = false;

    setBasePath(url: string, confFile?: string) {
        if (!url) return;
        this.tourParams.basepath = this.parseBasepath(url);
        this.tourParams.confFile = confFile;
    }

    private parseDomain(domain: string) {
        return domain.replace(/(?:http(?:s?):\/{2})?([\w-?]*\.\w*\.\w*\.*\w*)(?:\S*\s*)/gi, '$1');
    }

    private parseBasepath(basepath: string) {
        basepath = this.parseDomain(basepath);
        if (basepath.endsWith('/')) basepath = basepath.substring(0, basepath.length - 1);
        return 'https://' + basepath + '/';
    }

    setBackgroundImage(url: string) {
        this.styleParams.backgroundImage = url;
    }

    setBackgroundColor(color1: string, color2: string) {
        this.styleParams.backgroundColor = { color1, color2 };
    }

    setDimensions(width: string | number, height: string | number) {
        this.setWidth(width);
        this.setHeight(height);
    }

    setWidth(width: string | number) {
        this.styleParams.tour_dimensions.width = width;
    }

    setHeight(height: string | number) {
        this.styleParams.tour_dimensions.height = height;
    }

    setPanoConfigFile(url: string) {
        this.tourParams.confFile = url;
    }

    setStartNode(nodeNr: number) {
        this.tourParams.node = nodeNr;
    }

    setViewingParameter(fov: number, tilt: number, pan: number, roll?: number) {
        this.setFov(fov);
        this.setTilt(tilt);
        this.setPan(pan);
        if (roll !== undefined) {
            this.setRoll(roll);
        }
    }

    setFov(fov: number) {
        this.tourParams.fov = fov;
    }

    setTilt(tilt: number) {
        this.tourParams.tilt = tilt;
    }

    setPan(pan: number) {
        this.tourParams.pan = pan;
    }

    setRoll(roll: number) {
        this.tourParams.roll = roll;
    }

    setSingleImage(value: boolean) {
        this.addonsParams.singleImage = value;
    }

    setShareButtonVisibility(value: boolean) {
        this.addonsParams.share_buttons = value;
    }

    setImpressumVisibility(value: boolean) {
        this.addonsParams.show_impressum = value;
    }

    setHorizontalAlignment(value: HorizonalAlignment) {
        this.styleParams.horizontal_alignment = value;
    }

    setSkinClass(url: string) {
        this.tourParams.confFile = url;
    }

    useBasepathSkin() {
        this.tourParams.confFile = this.tourParams.basepath + 'skin.js';
    }

    addNodeTitleFilter(filter: string, caseSensitive?: boolean) {
        const obj: NodeTitleFilter = { filter, caseSensitive };
        this.tourParams.nodeFilter.push(obj);
    }

    removeExternalHotspots() {
        this.tourParams.removeExternals = true;
    }

    removeDroneHotspots() {
        this.tourParams.removeDrones = true;
    }

    // tablet
    setDimensions_tablet(width: string | number, height: string | number) {
        this.setWidth_tablet(width);
        this.setHeight_tablet(height);
    }
    setWidth_tablet(width: string | number) {
        this.responsiveParams.tablet.tour_dimensions.width = width;
    }
    setHeight_tablet(height: string | number) {
        this.responsiveParams.tablet.tour_dimensions.height = height;
    }
    setSingleImage_tablet(bool: boolean) {
        this.responsiveParams.tablet.singleImage = bool;
    }
    setShareButtonVisibility_tablet(bool: boolean) {
        this.responsiveParams.tablet.share_buttons = bool;
    }
    setImpressumVisibility_tablet(bool: boolean) {
        this.responsiveParams.tablet.show_impressum = bool;
    }
    setHorizontalAlignment_tablet(value: HorizonalAlignment) {
        this.responsiveParams.tablet.horizontal_alignment = value;
    }

    // mobile
    setDimensions_mobile(width: string | number, height: string | number) {
        this.setWidth_mobile(width);
        this.setHeight_mobile(height);
    }
    setWidth_mobile(width: string | number) {
        this.responsiveParams.mobile.tour_dimensions.width = width;
    }
    setHeight_mobile(height: string | number) {
        this.responsiveParams.mobile.tour_dimensions.height = height;
    }
    setSingleImage_mobile(bool: boolean) {
        this.responsiveParams.mobile.singleImage = bool;
    }
    setShareButtonVisibility_mobile(bool: boolean) {
        this.responsiveParams.mobile.share_buttons = bool;
    }
    setImpressumVisibility_mobile(bool: boolean) {
        this.responsiveParams.mobile.show_impressum = bool;
    }
    setHorizontalAlignment_mobile(value: HorizonalAlignment) {
        this.responsiveParams.mobile.horizontal_alignment = value;
    }

    setSkinVariables(vars: SkinVariable[]) {
        vars.forEach(v => this.skinVariables.push(v));
    }

    setMovementDelay(delay: number) {
        this.movementParams.delay = delay;
    }

    setMovementLoopAmount(loopAmount: number) {
        this.movementParams.loop_amount = loopAmount;
    }

    setScrollLock(lock: boolean) {
        this.scrollLock = lock;
    }

    addKeyframe(fov: number, tilt: number, pan: number, speed: number, locked_controls: ControlsLock, node: number, pause = 0) {
        const keyframeParams: MoveKeyframe = { fov, tilt, pan, speed, locked_controls, node, pause };
        if (!this.checkKeyframeParams(keyframeParams)) {
            throw new Error('keyframe values not valid.');
        }
        this.movementParams.keyframes.push(keyframeParams);
    }

    private checkKeyframeParams(keyframeParams: MoveKeyframe): boolean {
        return (
            typeof keyframeParams.fov === 'number' &&
            typeof keyframeParams.tilt === 'number' &&
            typeof keyframeParams.pan === 'number' &&
            typeof keyframeParams.speed === 'number' &&
            ['all', 'none', 'Mousewheel', 'Mouse', 'Keyboard', 'Keyboard+Mousewheel'].includes(keyframeParams.locked_controls)
        );
    }
}

