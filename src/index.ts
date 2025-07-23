import './360ty_styles.scss'
import Pano360ty from './class-tourbuilder-360ty'; // 1. Import the default class

export * from './types'; // 2. Re-export your types

// 3. Explicitly export the class as a named export.
// This is much clearer and more reliable for all bundlers.
export { Pano360ty };