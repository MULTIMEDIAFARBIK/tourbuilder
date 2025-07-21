import { MoveKeyframe, ControlsLock } from '../types.js';
import Pano_360ty from '../class-tourbuilder-360ty';

export default class MovementManager {
    constructor(private tour: Pano_360ty) {}

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async moveHome() {
        const homeKeyframe: MoveKeyframe = {
            node: this.tour.tour_params.node || 1,
            fov: this.tour.tour_params.fov || 75,
            tilt: this.tour.tour_params.tilt || 0,
            pan: this.tour.tour_params.pan || 0,
            locked_controls: 'Mousewheel',
            speed: 1,
            pause: 0,
        };
        await this.moveToKeyframe(homeKeyframe);
    }

    loadKeyframes() {
        setTimeout(async () => {
            const params = this.tour.movement_params;
            if (params.keyframes.length !== 0) {
                if (!this.tour.elements.panoContainer) {
                    throw new Error("can't move to keyframe if no panoContainer is defined");
                }
                this.tour.elements.panoContainer.addEventListener('mousedown', () => {
                    params.movementAborted = true;
                });
                this.tour.elements.panoContainer.addEventListener('touchstart', () => {
                    params.movementAborted = true;
                });
                for (let i = 0; i < params.loop_amount; i++) {
                    if (!params.movementAborted) {
                        await this.moveToKeyframes();
                    } else {
                        break;
                    }
                }
                this.tour.onMovementFinished();
            }
        }, this.tour.movement_params.delay);
    }

    async moveToKeyframes() {
        try {
            await Promise.allSettled(this.tour.movement_params.keyframes.map(kf => this.moveToKeyframe(kf)));
        } catch (err) {
            console.error(err);
        }
    }

    private runMovement(keyframe: MoveKeyframe) {
        return new Promise<void>(resolve => {
            this.tour.pano.moveTo(keyframe.pan, keyframe.tilt, keyframe.fov, keyframe.speed, 0, 1);
            const moveInterval = setInterval(async () => {
                if (
                    this.tour.pano.getPan().toFixed(2) === keyframe.pan.toFixed(2) &&
                    this.tour.pano.getFov().toFixed(2) === keyframe.fov.toFixed(2) &&
                    keyframe.tilt.toFixed(2) === keyframe.tilt.toFixed(2)
                ) {
                    clearInterval(moveInterval);
                    await this.sleep(keyframe.pause);
                    resolve();
                }
            }, 50);
        });
    }

    async moveToKeyframe(keyframe: MoveKeyframe): Promise<void> {
        if (this.tour.movement_params.movementAborted) return;
        await this.checkActiveMovement();
        this.setLock(keyframe.locked_controls);
        const isOtherNode = keyframe.node && 'node' + keyframe.node !== this.tour.pano.getCurrentNode();
        if (isOtherNode) {
            await this.tour.pano.openNext('{node' + keyframe.node + '}');
        }
        await this.runMovement(keyframe);
        setTimeout(() => {
            this.removeLockAfterMovement(keyframe.locked_controls);
        }, keyframe.pause);
    }

    private checkActiveMovement(): Promise<void> {
        return new Promise((resolve, reject) => {
            const activeMov = setInterval(() => {
                if (this.tour.movement_params.movementAborted) {
                    this.tour.onMovementAborted();
                    reject('movement aborted by user');
                }
                if (this.tour.pano.I.active === false) {
                    clearInterval(activeMov);
                    resolve();
                }
            }, 100);
        });
    }

    private removeLockAfterMovement(type: ControlsLock) {
        if (type === 'none') return;
        const waitUnlock = setInterval(() => {
            if (this.tour.pano.F.active == false) {
                clearInterval(waitUnlock);
                switch (type) {
                    case 'all':
                        this.tour.pano.setLocked(false);
                        break;
                    case 'Mousewheel':
                        this.tour.pano.setLockedWheel(false);
                        break;
                    case 'Mouse':
                        this.tour.pano.setLockedMouse(false);
                        break;
                    case 'Keyboard':
                        this.tour.pano.setLockedKeyboard(false);
                        break;
                    case 'Keyboard+Mousewheel':
                        this.tour.pano.setLockedKeyboard(false);
                        this.tour.pano.setLockedWheel(false);
                        break;
                }
            }
        }, 100);
    }

    private setLock(type: ControlsLock) {
        if (type === 'none') return;
        switch (type) {
            case 'all':
                this.tour.pano.setLocked(true);
                break;
            case 'Mousewheel':
                this.tour.pano.setLockedWheel(true);
                break;
            case 'Mouse':
                this.tour.pano.setLockedMouse(true);
                break;
            case 'Keyboard':
                this.tour.pano.setLockedKeyboard(true);
                break;
            case 'Keyboard+Mousewheel':
                this.tour.pano.setLockedKeyboard(true);
                this.tour.pano.setLockedWheel(true);
                break;
        }
    }
}
