import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class RadioValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
RadioValueAccessor.ɵfac = function RadioValueAccessor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RadioValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
RadioValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RadioValueAccessor, selectors: [["wpp-radio-group-v3-5-0-v3-5-0"], ["wpp-segmented-control-v3-5-0-v3-5-0"]], hostBindings: function RadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("wppChange", function RadioValueAccessor_wppChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target == null ? null : $event.target["value"]); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: RadioValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'wpp-radio-group-v3-5-0-v3-5-0, wpp-segmented-control-v3-5-0-v3-5-0',
                host: {
                    '(wppChange)': 'handleChangeEvent($event.target?.["value"])'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
