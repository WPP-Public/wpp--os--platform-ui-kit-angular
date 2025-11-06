import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
TextValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextValueAccessor, selectors: [["wpp-input-v2-22-0-v2-22-0"], ["wpp-textarea-v2-22-0-v2-22-0"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("wppChange", function TextValueAccessor_wppChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'wpp-input-v2-22-0-v2-22-0, wpp-textarea-v2-22-0-v2-22-0',
                host: {
                    '(wppChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
