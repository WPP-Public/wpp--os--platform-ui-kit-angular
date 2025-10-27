import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
}
SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["wpp-autocomplete-v3-3-0-v3-3-0"], ["wpp-select-v3-3-0-v3-3-0"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("wppChange", function SelectValueAccessor_wppChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target == null ? null : $event.target["value"]); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'wpp-autocomplete-v3-3-0-v3-3-0, wpp-select-v3-3-0-v3-3-0',
                host: {
                    '(wppChange)': 'handleChangeEvent($event.target?.["value"])'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
