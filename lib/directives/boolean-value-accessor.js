import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
}
BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BooleanValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
BooleanValueAccessor.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["wpp-checkbox-v4-2-0-v4-2-0"], ["wpp-toggle-v4-2-0-v4-2-0"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("wppChange", function BooleanValueAccessor_wppChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target == null ? null : $event.target["checked"]); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'wpp-checkbox-v4-2-0-v4-2-0, wpp-toggle-v4-2-0-v4-2-0',
                host: {
                    '(wppChange)': 'handleChangeEvent($event.target?.["checked"])'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
