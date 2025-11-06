import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import type { Components } from '@wppopen/components-library/components';
import type { AccordionSectionChangeEventDetail as IWppAccordionAccordionSectionChangeEventDetail } from '@wppopen/components-library/components';
import type { AutocompleteChangeEventDetail as IWppAutocompleteAutocompleteChangeEventDetail } from '@wppopen/components-library/components';
import type { AvatarChangeEventDetail as IWppAvatarAvatarChangeEventDetail } from '@wppopen/components-library/components';
import type { AvatarGroupChangeEventDetail as IWppAvatarGroupAvatarGroupChangeEventDetail } from '@wppopen/components-library/components';
import type { BannerChangeEventDetail as IWppBannerBannerChangeEventDetail } from '@wppopen/components-library/components';
import type { BreadcrumbItemEventDetails as IWppBreadcrumbBreadcrumbItemEventDetails } from '@wppopen/components-library/components';
import type { CardChangeEventDetail as IWppCardCardChangeEventDetail } from '@wppopen/components-library/components';
import type { CardGroupChangeEventDetail as IWppCardGroupCardGroupChangeEventDetail } from '@wppopen/components-library/components';
import type { SendEventDetail as IWppChatInputSendEventDetail } from '@wppopen/components-library/components';
import type { FileUploadEventDetail as IWppChatInputFileUploadEventDetail } from '@wppopen/components-library/components';
import type { CheckboxChangeEvent as IWppCheckboxCheckboxChangeEvent } from '@wppopen/components-library/components';
import type { CheckboxGroupChangeEvent as IWppCheckboxGroupCheckboxGroupChangeEvent } from '@wppopen/components-library/components';
import type { ChangeColorEventDetails as IWppColorPickerChangeColorEventDetails } from '@wppopen/components-library/components';
import type { CounterChangeEventDetail as IWppCounterCounterChangeEventDetail } from '@wppopen/components-library/components';
import type { DatePickerEventDetail as IWppDatepickerDatePickerEventDetail } from '@wppopen/components-library/components';
import type { DatePickerClearEventDetail as IWppDatepickerDatePickerClearEventDetail } from '@wppopen/components-library/components';
import type { ExpandableCardSectionChangeEventDetail as IWppExpandableCardExpandableCardSectionChangeEventDetail } from '@wppopen/components-library/components';
import type { FileUploadEventDetail as IWppFileUploadFileUploadEventDetail } from '@wppopen/components-library/components';
import type { FileUploadItemEventDetail as IWppFileUploadFileUploadItemEventDetail } from '@wppopen/components-library/components';
import type { FullScreenModalCloseDetails as IWppFullScreenModalFullScreenModalCloseDetails } from '@wppopen/components-library/components';
import type { InlineEditChangeModeEventDetail as IWppInlineEditInlineEditChangeModeEventDetail } from '@wppopen/components-library/components';
import type { InputChangeEventDetail as IWppInputInputChangeEventDetail } from '@wppopen/components-library/components';
import type { WppChangeExtraEventDetail as IWppInputWppChangeExtraEventDetail } from '@wppopen/components-library/components';
import type { ListItemChangeEventDetail as IWppListItemListItemChangeEventDetail } from '@wppopen/components-library/components';
import type { LoadMoreChangeEventDetail as IWppLoadMoreLoadMoreChangeEventDetail } from '@wppopen/components-library/components';
import type { ModalCloseDetails as IWppModalModalCloseDetails } from '@wppopen/components-library/components';
import type { NavSidebarItemEventDetail as IWppNavSidebarNavSidebarItemEventDetail } from '@wppopen/components-library/components';
import type { NavSidebarItemEventDetail as IWppNavSidebarItemNavSidebarItemEventDetail } from '@wppopen/components-library/components';
import type { NavigationItemEventDetail as IWppNavigationItemNavigationItemEventDetail } from '@wppopen/components-library/components';
import type { PaginationChangeEventDetail as IWppPaginationPaginationChangeEventDetail } from '@wppopen/components-library/components';
import type { PaginationPageChangeEventDetail as IWppPaginationItemPaginationPageChangeEventDetail } from '@wppopen/components-library/components';
import type { PaginationPageChangeEventDetail as IWppPaginationSelectPaginationPageChangeEventDetail } from '@wppopen/components-library/components';
import type { PillChangeEventDetail as IWppPillPillChangeEventDetail } from '@wppopen/components-library/components';
import type { PillGroupChangeEvent as IWppPillGroupPillGroupChangeEvent } from '@wppopen/components-library/components';
import type { RadioChangeEvent as IWppRadioRadioChangeEvent } from '@wppopen/components-library/components';
import type { RadioGroupChangeEvent as IWppRadioGroupRadioGroupChangeEvent } from '@wppopen/components-library/components';
import type { QuillInstance as IWppRichtextQuillInstance } from '@wppopen/components-library/components';
import type { RichtextChangeEventDetail as IWppRichtextRichtextChangeEventDetail } from '@wppopen/components-library/components';
import type { RichtextSelectionChangeEventDetail as IWppRichtextRichtextSelectionChangeEventDetail } from '@wppopen/components-library/components';
import type { RichtextUploadRequestEventDetail as IWppRichtextRichtextUploadRequestEventDetail } from '@wppopen/components-library/components';
import type { SearchChangeEventDetail as IWppSearchSearchChangeEventDetail } from '@wppopen/components-library/components';
import type { SegmentedControlChangeEventDetail as IWppSegmentedControlSegmentedControlChangeEventDetail } from '@wppopen/components-library/components';
import type { SegmentedControlItemChangeEventDetail as IWppSegmentedControlItemSegmentedControlItemChangeEventDetail } from '@wppopen/components-library/components';
import type { SelectChangeEventDetail as IWppSelectSelectChangeEventDetail } from '@wppopen/components-library/components';
import type { SideModalCloseDetails as IWppSideModalSideModalCloseDetails } from '@wppopen/components-library/components';
import type { SliderChangeEventDetail as IWppSliderSliderChangeEventDetail } from '@wppopen/components-library/components';
import type { StepChangeEventDetail as IWppStepStepChangeEventDetail } from '@wppopen/components-library/components';
import type { StepChangeEventDetail as IWppStepperStepChangeEventDetail } from '@wppopen/components-library/components';
import type { StickyBarButtonItem as IWppStickyBarStickyBarButtonItem } from '@wppopen/components-library/components';
import type { StickyBarTabItem as IWppStickyBarStickyBarTabItem } from '@wppopen/components-library/components';
import type { TabChangeEventDetail as IWppTabTabChangeEventDetail } from '@wppopen/components-library/components';
import type { TabsChangeEventDetail as IWppTabsTabsChangeEventDetail } from '@wppopen/components-library/components';
import type { TextareaInputChangeEventDetail as IWppTextareaInputTextareaInputChangeEventDetail } from '@wppopen/components-library/components';
import type { TimePickerChangeEventDetails as IWppTimePickerTimePickerChangeEventDetails } from '@wppopen/components-library/components';
import type { ToastCompleteDetail as IWppToastToastCompleteDetail } from '@wppopen/components-library/components';
import type { ToggleChangeEvent as IWppToggleToggleChangeEvent } from '@wppopen/components-library/components';
import type { TopbarChangeEventDetail as IWppTopbarTopbarChangeEventDetail } from '@wppopen/components-library/components';
import type { NavigationItemEventDetail as IWppTopbarItemNavigationItemEventDetail } from '@wppopen/components-library/components';
import type { TreeChangeEventDetail as IWppTreeTreeChangeEventDetail } from '@wppopen/components-library/components';
import type { TreeActionClickEventDetail as IWppTreeTreeActionClickEventDetail } from '@wppopen/components-library/components';
import type { TreeType as IWppTreeItemTreeType } from '@wppopen/components-library/components';
import * as i0 from "@angular/core";
export declare class WppAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAccordion, "wpp-accordion-v2-22-0", never, { "counter": "counter"; "disabled": "disabled"; "expanded": "expanded"; "expandedByDefault": "expandedByDefault"; "size": "size"; "text": "text"; "withDivider": "withDivider"; "withTag": "withTag"; }, {}, never, ["*"], false>;
}
export declare interface WppAccordion extends Components.WppAccordion {
    /**
     * Emitted when the expanded state changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppAccordionAccordionSectionChangeEventDetail>>;
    /**
     * Emitted when a section is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when a section loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppActionButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppActionButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppActionButton, "wpp-action-button-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "form": "form"; "loading": "loading"; "name": "name"; "type": "type"; "value": "value"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppActionButton extends Components.WppActionButton {
}
export declare class WppAutocomplete {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAutocomplete, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAutocomplete, "wpp-autocomplete-v2-22-0", never, { "autoFocus": "autoFocus"; "disabled": "disabled"; "displayBtnWhenListEmpty": "displayBtnWhenListEmpty"; "dropdownConfig": "dropdownConfig"; "dropdownWidth": "dropdownWidth"; "getOptionId": "getOptionId"; "getOptionLabel": "getOptionLabel"; "infinite": "infinite"; "infiniteLastPage": "infiniteLastPage"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "limitSelectedItems": "limitSelectedItems"; "loadMore": "loadMore"; "loading": "loading"; "locales": "locales"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "multiple": "multiple"; "name": "name"; "persistentSearch": "persistentSearch"; "pillTooltipConfig": "pillTooltipConfig"; "placeholder": "placeholder"; "required": "required"; "showCreateNewElement": "showCreateNewElement"; "simpleSearch": "simpleSearch"; "size": "size"; "suggestions": "suggestions"; "suggestionsTitle": "suggestionsTitle"; "type": "type"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppAutocomplete extends Components.WppAutocomplete {
    /**
     * Emitted when the autocomplete value changes
     */
    wppChange: EventEmitter<CustomEvent<IWppAutocompleteAutocompleteChangeEventDetail>>;
    /**
     * Emitted when the autocomplete receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the autocomplete loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the autocomplete search value changes
     */
    wppSearchValueChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the "Create new element" button is clicked
     */
    wppCreateNewOption: EventEmitter<CustomEvent<string>>;
}
export declare class WppAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAvatar, "wpp-avatar-v2-22-0", never, { "amountOfHiddenAvatars": "amountOfHiddenAvatars"; "color": "color"; "icon": "icon"; "interactable": "interactable"; "name": "name"; "size": "size"; "src": "src"; "tooltipConfig": "tooltipConfig"; "variant": "variant"; "withTooltip": "withTooltip"; }, {}, never, ["*"], false>;
}
export declare interface WppAvatar extends Components.WppAvatar {
    /**
     * Emitted when the avatar item is clicked.
     */
    wppClick: EventEmitter<CustomEvent<IWppAvatarAvatarChangeEventDetail>>;
}
export declare class WppAvatarGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAvatarGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAvatarGroup, "wpp-avatar-group-v2-22-0", never, { "avatars": "avatars"; "dropdownConfig": "dropdownConfig"; "maxAvatarsToDisplay": "maxAvatarsToDisplay"; "size": "size"; "tooltipConfig": "tooltipConfig"; "users": "users"; "variant": "variant"; "withTooltip": "withTooltip"; }, {}, never, ["*"], false>;
}
export declare interface WppAvatarGroup extends Components.WppAvatarGroup {
    /**
     * Emitted when the avatar item is clicked.
     */
    wppSelectItem: EventEmitter<CustomEvent<IWppAvatarGroupAvatarGroupChangeEventDetail>>;
}
export declare class WppBackToTopButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBackToTopButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBackToTopButton, "wpp-back-to-top-button-v2-22-0", never, { "ariaProps": "ariaProps"; }, {}, never, ["*"], false>;
}
export declare interface WppBackToTopButton extends Components.WppBackToTopButton {
}
export declare class WppBanner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBanner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBanner, "wpp-banner-v2-22-0", never, { "closable": "closable"; "show": "show"; "type": "type"; }, {}, never, ["*"], false>;
}
export declare interface WppBanner extends Components.WppBanner {
    /**
     * Emitted when the banner state changes.
     */
    wppClose: EventEmitter<CustomEvent<IWppBannerBannerChangeEventDetail>>;
}
export declare class WppBreadcrumb {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBreadcrumb, "wpp-breadcrumb-v2-22-0", never, { "dropdownConfig": "dropdownConfig"; "items": "items"; "maxLabelLength": "maxLabelLength"; "middleTruncation": "middleTruncation"; "nativeLink": "nativeLink"; }, {}, never, ["*"], false>;
}
export declare interface WppBreadcrumb extends Components.WppBreadcrumb {
    /**
     * Emitted when route changes, return object like { path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppBreadcrumbBreadcrumbItemEventDetails>>;
}
export declare class WppButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppButton, "wpp-button-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "form": "form"; "formAction": "formAction"; "formEncType": "formEncType"; "formMethod": "formMethod"; "formNoValidate": "formNoValidate"; "formTarget": "formTarget"; "inverted": "inverted"; "loading": "loading"; "name": "name"; "size": "size"; "type": "type"; "value": "value"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppButton extends Components.WppButton {
}
export declare class WppCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCard, "wpp-card-v2-22-0", never, { "checked": "checked"; "disabled": "disabled"; "interactive": "interactive"; "name": "name"; "size": "size"; "type": "type"; "value": "value"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppCard extends Components.WppCard {
    /**
     * Emitted when the checked state changes
     */
    wppClick: EventEmitter<CustomEvent<IWppCardCardChangeEventDetail>>;
    /**
     * Emitted when the card receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the card loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppCardGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCardGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCardGroup, "wpp-card-group-v2-22-0", never, { "allowEmptySelection": "allowEmptySelection"; "multiple": "multiple"; "name": "name"; "required": "required"; "size": "size"; "value": "value"; "withRadioOrCheckbox": "withRadioOrCheckbox"; }, {}, never, ["*"], false>;
}
export declare interface WppCardGroup extends Components.WppCardGroup {
    /**
     * Emitted when the card group value changes
     */
    wppChange: EventEmitter<CustomEvent<IWppCardGroupCardGroupChangeEventDetail>>;
    /**
     * Emitted when the card group receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the card group loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppChatInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatInput, "wpp-chat-input-v2-22-0", never, { "attachments": "attachments"; "charactersLimit": "charactersLimit"; "disabled": "disabled"; "enableAttach": "enableAttach"; "fileUploadConfig": "fileUploadConfig"; "placeholder": "placeholder"; "withSelect": "withSelect"; }, {}, never, ["*"], false>;
}
export declare interface WppChatInput extends Components.WppChatInput {
    /**
     * Emitted when the user clicks the "Send" button.
     */
    wppSend: EventEmitter<CustomEvent<IWppChatInputSendEventDetail>>;
    /**
     * Emitted when the value of the input changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppChatInputFileUploadEventDetail>>;
}
export declare class WppCheckbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCheckbox, "wpp-checkbox-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "checked": "checked"; "controlled": "controlled"; "disabled": "disabled"; "indeterminate": "indeterminate"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "name": "name"; "required": "required"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppCheckbox extends Components.WppCheckbox {
    /**
     * Emitted when the selected state changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppCheckboxCheckboxChangeEvent>>;
    /**
     * Emitted when the checkbox is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the checkbox loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppCheckboxGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCheckboxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCheckboxGroup, "wpp-checkbox-group-v2-22-0", never, { "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "required": "required"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppCheckboxGroup extends Components.WppCheckboxGroup {
    /**
     * Emitted when the checkbox group value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppCheckboxGroupCheckboxGroupChangeEvent>>;
    /**
     * Emitted when the group receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the group loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppColorPicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppColorPicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppColorPicker, "wpp-color-picker-v2-22-0", never, { "disabled": "disabled"; "dropdownConfig": "dropdownConfig"; "hexOpacity": "hexOpacity"; "initialColor": "initialColor"; "mode": "mode"; "savedColors": "savedColors"; "themeColors": "themeColors"; "type": "type"; }, {}, never, ["*"], false>;
}
export declare interface WppColorPicker extends Components.WppColorPicker {
    /**
     * Emitted when the "plus" icon is clicked in the "Saved colors" section. The value emitted is in rgba format.
     */
    wppSaveColor: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the "Remove color" options is clicked in the color's popover. The popover is opened when the color
  element from "Saved colors" is clicked
     */
    wppRemoveSavedColor: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the color-picker is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the color-picker loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the color-picker selects a color to display. This happens when the dropdown of the color-picker
  is closed.
     */
    wppChange: EventEmitter<CustomEvent<IWppColorPickerChangeColorEventDetails>>;
}
export declare class WppCounter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCounter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCounter, "wpp-counter-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "format": "format"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "max": "max"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "min": "min"; "name": "name"; "required": "required"; "size": "size"; "step": "step"; "tooltipConfig": "tooltipConfig"; "value": "value"; "withButtons": "withButtons"; }, {}, never, ["*"], false>;
}
export declare interface WppCounter extends Components.WppCounter {
    /**
     * Emitted when the input value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppCounterCounterChangeEventDetail>>;
    /**
     * Emitted when the counter is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the counter loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppDatepicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppDatepicker, "wpp-datepicker-v2-22-0", never, { "appendToListWrapper": "appendToListWrapper"; "autoFocus": "autoFocus"; "disabled": "disabled"; "dropdownConfig": "dropdownConfig"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "locale": "locale"; "maxDate": "maxDate"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "minDate": "minDate"; "name": "name"; "placeholder": "placeholder"; "presets": "presets"; "range": "range"; "required": "required"; "size": "size"; "static": "static"; "toggleSelected": "toggleSelected"; "tooltipConfig": "tooltipConfig"; "value": "value"; "view": "view"; }, {}, never, ["*"], false>;
}
export declare interface WppDatepicker extends Components.WppDatepicker {
    /**
     * Emitted when a date is chosen.
     */
    wppChange: EventEmitter<CustomEvent<IWppDatepickerDatePickerEventDetail>>;
    /**
     * Emitted when the input loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when a date is cleared.
     */
    wppDateClear: EventEmitter<CustomEvent<IWppDatepickerDatePickerClearEventDetail>>;
}
export declare class WppDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppDivider, "wpp-divider-v2-22-0", never, { "resizable": "resizable"; "vertical": "vertical"; }, {}, never, ["*"], false>;
}
export declare interface WppDivider extends Components.WppDivider {
}
export declare class WppEmpty404 {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmpty404, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmpty404, "wpp-empty-404-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmpty404 extends Components.WppEmpty404 {
}
export declare class WppEmptyCards {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyCards, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyCards, "wpp-empty-cards-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyCards extends Components.WppEmptyCards {
}
export declare class WppEmptyContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyContent, "wpp-empty-content-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyContent extends Components.WppEmptyContent {
}
export declare class WppEmptyDataviz {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyDataviz, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyDataviz, "wpp-empty-dataviz-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyDataviz extends Components.WppEmptyDataviz {
}
export declare class WppEmptyError {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyError, "wpp-empty-error-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyError extends Components.WppEmptyError {
}
export declare class WppEmptyFolder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyFolder, "wpp-empty-folder-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyFolder extends Components.WppEmptyFolder {
}
export declare class WppEmptyNoAccess {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNoAccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNoAccess, "wpp-empty-no-access-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyNoAccess extends Components.WppEmptyNoAccess {
}
export declare class WppEmptyNoConnection {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNoConnection, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNoConnection, "wpp-empty-no-connection-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyNoConnection extends Components.WppEmptyNoConnection {
}
export declare class WppEmptyNothingFound {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNothingFound, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNothingFound, "wpp-empty-nothing-found-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyNothingFound extends Components.WppEmptyNothingFound {
}
export declare class WppEmptyNotifications {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNotifications, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNotifications, "wpp-empty-notifications-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyNotifications extends Components.WppEmptyNotifications {
}
export declare class WppEmptyTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyTable, "wpp-empty-table-v2-22-0", never, { "height": "height"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppEmptyTable extends Components.WppEmptyTable {
}
export declare class WppExpandableCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppExpandableCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppExpandableCard, "wpp-expandable-card-v2-22-0", never, { "expanded": "expanded"; "expandedByDefault": "expandedByDefault"; "header": "header"; "size": "size"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppExpandableCard extends Components.WppExpandableCard {
    /**
     * Emitted when the expandable state changes
     */
    wppChange: EventEmitter<CustomEvent<IWppExpandableCardExpandableCardSectionChangeEventDetail>>;
    /**
     * Emitted when the section receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the section loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppFileUpload {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFileUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFileUpload, "wpp-file-upload-v2-22-0", never, { "accept": "accept"; "acceptConfig": "acceptConfig"; "controlled": "controlled"; "disabled": "disabled"; "format": "format"; "locales": "locales"; "maxFiles": "maxFiles"; "maxLabelLength": "maxLabelLength"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "multiple": "multiple"; "name": "name"; "showOnlyNewErrors": "showOnlyNewErrors"; "size": "size"; "tooltipConfig": "tooltipConfig"; "validator": "validator"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppFileUpload extends Components.WppFileUpload {
    /**
     * Emitted when file downloads, returns only those files, that not have any error
     */
    wppChange: EventEmitter<CustomEvent<IWppFileUploadFileUploadEventDetail>>;
    /**
     * Emitted when the input is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the file-upload item was deleted.
     */
    wppFileUploadItemDelete: EventEmitter<CustomEvent<IWppFileUploadFileUploadItemEventDetail>>;
    /**
     * Emitted when the file-upload item was clicked.
     */
    wppFileUploadItemClick: EventEmitter<CustomEvent<IWppFileUploadFileUploadItemEventDetail>>;
}
export declare class WppFileUploadItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFileUploadItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFileUploadItem, "wpp-file-upload-item-v2-22-0", never, { "currentIndex": "currentIndex"; "file": "file"; "format": "format"; "locales": "locales"; "maxLabelLength": "maxLabelLength"; }, {}, never, ["*"], false>;
}
export declare interface WppFileUploadItem extends Components.WppFileUploadItem {
}
export declare class WppFilterButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFilterButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFilterButton, "wpp-filter-button-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "counter": "counter"; "disabled": "disabled"; "name": "name"; }, {}, never, ["*"], false>;
}
export declare interface WppFilterButton extends Components.WppFilterButton {
}
export declare class WppFloatingButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFloatingButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFloatingButton, "wpp-floating-button-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "form": "form"; "formAction": "formAction"; "formEncType": "formEncType"; "formMethod": "formMethod"; "formNoValidate": "formNoValidate"; "formTarget": "formTarget"; "loading": "loading"; "name": "name"; "type": "type"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppFloatingButton extends Components.WppFloatingButton {
}
export declare class WppFullScreenModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFullScreenModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFullScreenModal, "wpp-full-screen-modal-v2-22-0", never, { "disableOutsideClick": "disableOutsideClick"; "formConfig": "formConfig"; "open": "open"; "withTransparentOverlay": "withTransparentOverlay"; }, {}, never, ["*"], false>;
}
export declare interface WppFullScreenModal extends Components.WppFullScreenModal {
    /**
     * Handles the modal closing actions.
     */
    wppFullScreenModalClose: EventEmitter<CustomEvent<IWppFullScreenModalFullScreenModalCloseDetails>>;
    /**
     * Event emitted when the open animation starts.
     */
    wppFullScreenModalOpenStart: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the open animation ends.
     */
    wppFullScreenModalOpenComplete: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the close animation starts.
     */
    wppFullScreenModalCloseStart: EventEmitter<CustomEvent<IWppFullScreenModalFullScreenModalCloseDetails>>;
    /**
     * Event emitted when the close animation ends.
     */
    wppFullScreenModalCloseComplete: EventEmitter<CustomEvent<IWppFullScreenModalFullScreenModalCloseDetails>>;
    /**
     * Handles the modal click actions. @deprecated - this prop will be deleted in version 3.0.0 . Use `wppFullScreenModalOpenStart`/`wppFullScreenModalOpenComplete` instead
     */
    wppFullScreenModalOpen: EventEmitter<CustomEvent<void>>;
}
export declare class WppGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppGrid, "wpp-grid-v2-22-0", never, { "alignItems": "alignItems"; "all": "all"; "columnSpacing": "columnSpacing"; "container": "container"; "direction": "direction"; "fluid": "fluid"; "fullHeight": "fullHeight"; "fullWidth": "fullWidth"; "item": "item"; "justifyContent": "justifyContent"; "lg": "lg"; "md": "md"; "rowSpacing": "rowSpacing"; "sm": "sm"; "xl": "xl"; "xxl": "xxl"; }, {}, never, ["*"], false>;
}
export declare interface WppGrid extends Components.WppGrid {
}
export declare class WppIconAbout {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAbout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAbout, "wpp-icon-about-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAbout extends Components.WppIconAbout {
}
export declare class WppIconAccessibility {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAccessibility, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAccessibility, "wpp-icon-accessibility-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAccessibility extends Components.WppIconAccessibility {
}
export declare class WppIconAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAccordion, "wpp-icon-accordion-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAccordion extends Components.WppIconAccordion {
}
export declare class WppIconAction {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAction, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAction, "wpp-icon-action-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAction extends Components.WppIconAction {
}
export declare class WppIconAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAdd, "wpp-icon-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAdd extends Components.WppIconAdd {
}
export declare class WppIconAddApp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddApp, "wpp-icon-add-app-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAddApp extends Components.WppIconAddApp {
}
export declare class WppIconAddCircle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddCircle, "wpp-icon-add-circle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAddCircle extends Components.WppIconAddCircle {
}
export declare class WppIconAddDocument {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddDocument, "wpp-icon-add-document-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAddDocument extends Components.WppIconAddDocument {
}
export declare class WppIconAddFolder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddFolder, "wpp-icon-add-folder-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAddFolder extends Components.WppIconAddFolder {
}
export declare class WppIconAdmin {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAdmin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAdmin, "wpp-icon-admin-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAdmin extends Components.WppIconAdmin {
}
export declare class WppIconAi {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAi, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAi, "wpp-icon-ai-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAi extends Components.WppIconAi {
}
export declare class WppIconAirPollution {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAirPollution, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAirPollution, "wpp-icon-air-pollution-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAirPollution extends Components.WppIconAirPollution {
}
export declare class WppIconAirplane {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAirplane, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAirplane, "wpp-icon-airplane-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAirplane extends Components.WppIconAirplane {
}
export declare class WppIconAngry {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAngry, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAngry, "wpp-icon-angry-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAngry extends Components.WppIconAngry {
}
export declare class WppIconApp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconApp, "wpp-icon-app-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconApp extends Components.WppIconApp {
}
export declare class WppIconAppFolder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAppFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAppFolder, "wpp-icon-app-folder-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAppFolder extends Components.WppIconAppFolder {
}
export declare class WppIconAppStore {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAppStore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAppStore, "wpp-icon-app-store-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAppStore extends Components.WppIconAppStore {
}
export declare class WppIconApprovals {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconApprovals, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconApprovals, "wpp-icon-approvals-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconApprovals extends Components.WppIconApprovals {
}
export declare class WppIconArchive {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArchive, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArchive, "wpp-icon-archive-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconArchive extends Components.WppIconArchive {
}
export declare class WppIconArchiveMultiple {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArchiveMultiple, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArchiveMultiple, "wpp-icon-archive-multiple-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconArchiveMultiple extends Components.WppIconArchiveMultiple {
}
export declare class WppIconArrow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArrow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArrow, "wpp-icon-arrow-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconArrow extends Components.WppIconArrow {
}
export declare class WppIconAsk {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAsk, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAsk, "wpp-icon-ask-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAsk extends Components.WppIconAsk {
}
export declare class WppIconAssistant {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAssistant, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAssistant, "wpp-icon-assistant-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAssistant extends Components.WppIconAssistant {
}
export declare class WppIconAtm {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAtm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAtm, "wpp-icon-atm-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAtm extends Components.WppIconAtm {
}
export declare class WppIconAttach {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAttach, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAttach, "wpp-icon-attach-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAttach extends Components.WppIconAttach {
}
export declare class WppIconAutoSum {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutoSum, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutoSum, "wpp-icon-auto-sum-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutoSum extends Components.WppIconAutoSum {
}
export declare class WppIconAutofit {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofit, "wpp-icon-autofit-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutofit extends Components.WppIconAutofit {
}
export declare class WppIconAutofitHeight {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitHeight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitHeight, "wpp-icon-autofit-height-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutofitHeight extends Components.WppIconAutofitHeight {
}
export declare class WppIconAutofitHeightDotted {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitHeightDotted, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitHeightDotted, "wpp-icon-autofit-height-dotted-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutofitHeightDotted extends Components.WppIconAutofitHeightDotted {
}
export declare class WppIconAutofitWidth {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitWidth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitWidth, "wpp-icon-autofit-width-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutofitWidth extends Components.WppIconAutofitWidth {
}
export declare class WppIconAutofitWidthDotted {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitWidthDotted, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitWidthDotted, "wpp-icon-autofit-width-dotted-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAutofitWidthDotted extends Components.WppIconAutofitWidthDotted {
}
export declare class WppIconAvailableCheckmark {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAvailableCheckmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAvailableCheckmark, "wpp-icon-available-checkmark-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAvailableCheckmark extends Components.WppIconAvailableCheckmark {
}
export declare class WppIconAvailableUpdate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAvailableUpdate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAvailableUpdate, "wpp-icon-available-update-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconAvailableUpdate extends Components.WppIconAvailableUpdate {
}
export declare class WppIconBank {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBank, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBank, "wpp-icon-bank-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBank extends Components.WppIconBank {
}
export declare class WppIconBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBar, "wpp-icon-bar-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBar extends Components.WppIconBar {
}
export declare class WppIconBarChart {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBarChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBarChart, "wpp-icon-bar-chart-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBarChart extends Components.WppIconBarChart {
}
export declare class WppIconBarHorizontal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBarHorizontal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBarHorizontal, "wpp-icon-bar-horizontal-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBarHorizontal extends Components.WppIconBarHorizontal {
}
export declare class WppIconBicycle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBicycle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBicycle, "wpp-icon-bicycle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBicycle extends Components.WppIconBicycle {
}
export declare class WppIconBlockquote {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBlockquote, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBlockquote, "wpp-icon-blockquote-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBlockquote extends Components.WppIconBlockquote {
}
export declare class WppIconBluetoothOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBluetoothOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBluetoothOff, "wpp-icon-bluetooth-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBluetoothOff extends Components.WppIconBluetoothOff {
}
export declare class WppIconBluetoothOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBluetoothOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBluetoothOn, "wpp-icon-bluetooth-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBluetoothOn extends Components.WppIconBluetoothOn {
}
export declare class WppIconBoard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBoard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBoard, "wpp-icon-board-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBoard extends Components.WppIconBoard {
}
export declare class WppIconBold {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBold, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBold, "wpp-icon-bold-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBold extends Components.WppIconBold {
}
export declare class WppIconBook {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBook, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBook, "wpp-icon-book-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBook extends Components.WppIconBook {
}
export declare class WppIconBookContacts {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookContacts, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookContacts, "wpp-icon-book-contacts-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookContacts extends Components.WppIconBookContacts {
}
export declare class WppIconBookFaq {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookFaq, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookFaq, "wpp-icon-book-faq-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookFaq extends Components.WppIconBookFaq {
}
export declare class WppIconBookInformation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookInformation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookInformation, "wpp-icon-book-information-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookInformation extends Components.WppIconBookInformation {
}
export declare class WppIconBookSearch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookSearch, "wpp-icon-book-search-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookSearch extends Components.WppIconBookSearch {
}
export declare class WppIconBookmark {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmark, "wpp-icon-bookmark-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookmark extends Components.WppIconBookmark {
}
export declare class WppIconBookmarkAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmarkAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmarkAdd, "wpp-icon-bookmark-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookmarkAdd extends Components.WppIconBookmarkAdd {
}
export declare class WppIconBookmarkFilled {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmarkFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmarkFilled, "wpp-icon-bookmark-filled-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookmarkFilled extends Components.WppIconBookmarkFilled {
}
export declare class WppIconBookmarkSelected {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmarkSelected, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmarkSelected, "wpp-icon-bookmark-selected-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBookmarkSelected extends Components.WppIconBookmarkSelected {
}
export declare class WppIconBorder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorder, "wpp-icon-border-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorder extends Components.WppIconBorder {
}
export declare class WppIconBorderAll {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderAll, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderAll, "wpp-icon-border-all-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderAll extends Components.WppIconBorderAll {
}
export declare class WppIconBorderBottomDouble {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderBottomDouble, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderBottomDouble, "wpp-icon-border-bottom-double-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderBottomDouble extends Components.WppIconBorderBottomDouble {
}
export declare class WppIconBorderLeftRight {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderLeftRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderLeftRight, "wpp-icon-border-left-right-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderLeftRight extends Components.WppIconBorderLeftRight {
}
export declare class WppIconBorderNone {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderNone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderNone, "wpp-icon-border-none-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderNone extends Components.WppIconBorderNone {
}
export declare class WppIconBorderOutside {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderOutside, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderOutside, "wpp-icon-border-outside-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderOutside extends Components.WppIconBorderOutside {
}
export declare class WppIconBorderOutsideThick {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderOutsideThick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderOutsideThick, "wpp-icon-border-outside-thick-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderOutsideThick extends Components.WppIconBorderOutsideThick {
}
export declare class WppIconBorderTopBottom {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottom, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottom, "wpp-icon-border-top-bottom-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderTopBottom extends Components.WppIconBorderTopBottom {
}
export declare class WppIconBorderTopBottomDouble {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottomDouble, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottomDouble, "wpp-icon-border-top-bottom-double-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderTopBottomDouble extends Components.WppIconBorderTopBottomDouble {
}
export declare class WppIconBorderTopBottomThick {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottomThick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottomThick, "wpp-icon-border-top-bottom-thick-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBorderTopBottomThick extends Components.WppIconBorderTopBottomThick {
}
export declare class WppIconBot {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBot, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBot, "wpp-icon-bot-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBot extends Components.WppIconBot {
}
export declare class WppIconBounce {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBounce, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBounce, "wpp-icon-bounce-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBounce extends Components.WppIconBounce {
}
export declare class WppIconBranch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranch, "wpp-icon-branch-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBranch extends Components.WppIconBranch {
}
export declare class WppIconBranchRequest {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranchRequest, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranchRequest, "wpp-icon-branch-request-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBranchRequest extends Components.WppIconBranchRequest {
}
export declare class WppIconBranchReview {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranchReview, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranchReview, "wpp-icon-branch-review-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBranchReview extends Components.WppIconBranchReview {
}
export declare class WppIconBtc {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBtc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBtc, "wpp-icon-btc-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBtc extends Components.WppIconBtc {
}
export declare class WppIconBus {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBus, "wpp-icon-bus-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBus extends Components.WppIconBus {
}
export declare class WppIconBusiness {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBusiness, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBusiness, "wpp-icon-business-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconBusiness extends Components.WppIconBusiness {
}
export declare class WppIconButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconButton, "wpp-icon-button-v2-22-0", never, { "disabled": "disabled"; "loading": "loading"; "name": "name"; "size": "size"; }, {}, never, ["*"], false>;
}
export declare interface WppIconButton extends Components.WppIconButton {
}
export declare class WppIconCafe {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCafe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCafe, "wpp-icon-cafe-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCafe extends Components.WppIconCafe {
}
export declare class WppIconCalendar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendar, "wpp-icon-calendar-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendar extends Components.WppIconCalendar {
}
export declare class WppIconCalendar3Days {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendar3Days, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendar3Days, "wpp-icon-calendar-3-days-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendar3Days extends Components.WppIconCalendar3Days {
}
export declare class WppIconCalendarAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarAdd, "wpp-icon-calendar-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendarAdd extends Components.WppIconCalendarAdd {
}
export declare class WppIconCalendarDate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarDate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarDate, "wpp-icon-calendar-date-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendarDate extends Components.WppIconCalendarDate {
}
export declare class WppIconCalendarDismiss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarDismiss, "wpp-icon-calendar-dismiss-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendarDismiss extends Components.WppIconCalendarDismiss {
}
export declare class WppIconCalendarError {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarError, "wpp-icon-calendar-error-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendarError extends Components.WppIconCalendarError {
}
export declare class WppIconCalendarMonth {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarMonth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarMonth, "wpp-icon-calendar-month-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCalendarMonth extends Components.WppIconCalendarMonth {
}
export declare class WppIconCameraAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraAdd, "wpp-icon-camera-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCameraAdd extends Components.WppIconCameraAdd {
}
export declare class WppIconCameraOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraOff, "wpp-icon-camera-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCameraOff extends Components.WppIconCameraOff {
}
export declare class WppIconCameraOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraOn, "wpp-icon-camera-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCameraOn extends Components.WppIconCameraOn {
}
export declare class WppIconCameraSwitch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraSwitch, "wpp-icon-camera-switch-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCameraSwitch extends Components.WppIconCameraSwitch {
}
export declare class WppIconCampaign {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCampaign, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCampaign, "wpp-icon-campaign-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCampaign extends Components.WppIconCampaign {
}
export declare class WppIconCaptionOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCaptionOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCaptionOff, "wpp-icon-caption-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCaptionOff extends Components.WppIconCaptionOff {
}
export declare class WppIconCaptionOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCaptionOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCaptionOn, "wpp-icon-caption-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCaptionOn extends Components.WppIconCaptionOn {
}
export declare class WppIconCarousel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCarousel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCarousel, "wpp-icon-carousel-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCarousel extends Components.WppIconCarousel {
}
export declare class WppIconCart {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCart, "wpp-icon-cart-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCart extends Components.WppIconCart {
}
export declare class WppIconCase {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCase, "wpp-icon-case-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCase extends Components.WppIconCase {
}
export declare class WppIconCast {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCast, "wpp-icon-cast-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCast extends Components.WppIconCast {
}
export declare class WppIconCellularData3g {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData3g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData3g, "wpp-icon-cellular-data-3g-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCellularData3g extends Components.WppIconCellularData3g {
}
export declare class WppIconCellularData4g {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData4g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData4g, "wpp-icon-cellular-data-4g-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCellularData4g extends Components.WppIconCellularData4g {
}
export declare class WppIconCellularData5g {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData5g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData5g, "wpp-icon-cellular-data-5g-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCellularData5g extends Components.WppIconCellularData5g {
}
export declare class WppIconCellularDataOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularDataOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularDataOff, "wpp-icon-cellular-data-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCellularDataOff extends Components.WppIconCellularDataOff {
}
export declare class WppIconCellularDataOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularDataOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularDataOn, "wpp-icon-cellular-data-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCellularDataOn extends Components.WppIconCellularDataOn {
}
export declare class WppIconChannel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChannel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChannel, "wpp-icon-channel-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconChannel extends Components.WppIconChannel {
}
export declare class WppIconChatMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatMessage, "wpp-icon-chat-message-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconChatMessage extends Components.WppIconChatMessage {
}
export declare class WppIconChatMessageOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatMessageOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatMessageOff, "wpp-icon-chat-message-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconChatMessageOff extends Components.WppIconChatMessageOff {
}
export declare class WppIconChatVideo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatVideo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatVideo, "wpp-icon-chat-video-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconChatVideo extends Components.WppIconChatVideo {
}
export declare class WppIconChevron {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChevron, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChevron, "wpp-icon-chevron-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconChevron extends Components.WppIconChevron {
}
export declare class WppIconCinema {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCinema, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCinema, "wpp-icon-cinema-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCinema extends Components.WppIconCinema {
}
export declare class WppIconCircle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCircle, "wpp-icon-circle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCircle extends Components.WppIconCircle {
}
export declare class WppIconClock {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconClock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconClock, "wpp-icon-clock-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconClock extends Components.WppIconClock {
}
export declare class WppIconClose {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconClose, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconClose, "wpp-icon-close-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconClose extends Components.WppIconClose {
}
export declare class WppIconCloudDismiss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudDismiss, "wpp-icon-cloud-dismiss-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCloudDismiss extends Components.WppIconCloudDismiss {
}
export declare class WppIconCloudSuccess {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudSuccess, "wpp-icon-cloud-success-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCloudSuccess extends Components.WppIconCloudSuccess {
}
export declare class WppIconCloudSync {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudSync, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudSync, "wpp-icon-cloud-sync-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCloudSync extends Components.WppIconCloudSync {
}
export declare class WppIconCloudUpload {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudUpload, "wpp-icon-cloud-upload-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCloudUpload extends Components.WppIconCloudUpload {
}
export declare class WppIconCodeView {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCodeView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCodeView, "wpp-icon-code-view-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCodeView extends Components.WppIconCodeView {
}
export declare class WppIconCollapse {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCollapse, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCollapse, "wpp-icon-collapse-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCollapse extends Components.WppIconCollapse {
}
export declare class WppIconCollection {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCollection, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCollection, "wpp-icon-collection-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCollection extends Components.WppIconCollection {
}
export declare class WppIconColor {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColor, "wpp-icon-color-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconColor extends Components.WppIconColor {
}
export declare class WppIconColour {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColour, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColour, "wpp-icon-colour-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconColour extends Components.WppIconColour {
}
export declare class WppIconColumnsOne {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsOne, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsOne, "wpp-icon-columns-one-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconColumnsOne extends Components.WppIconColumnsOne {
}
export declare class WppIconColumnsThree {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsThree, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsThree, "wpp-icon-columns-three-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconColumnsThree extends Components.WppIconColumnsThree {
}
export declare class WppIconColumnsTwo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsTwo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsTwo, "wpp-icon-columns-two-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconColumnsTwo extends Components.WppIconColumnsTwo {
}
export declare class WppIconComment {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconComment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconComment, "wpp-icon-comment-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconComment extends Components.WppIconComment {
}
export declare class WppIconCommentOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCommentOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCommentOff, "wpp-icon-comment-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCommentOff extends Components.WppIconCommentOff {
}
export declare class WppIconCommunication {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCommunication, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCommunication, "wpp-icon-communication-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCommunication extends Components.WppIconCommunication {
}
export declare class WppIconCompose {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCompose, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCompose, "wpp-icon-compose-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCompose extends Components.WppIconCompose {
}
export declare class WppIconCookies {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCookies, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCookies, "wpp-icon-cookies-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCookies extends Components.WppIconCookies {
}
export declare class WppIconCopy {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCopy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCopy, "wpp-icon-copy-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCopy extends Components.WppIconCopy {
}
export declare class WppIconCrop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCrop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCrop, "wpp-icon-crop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCrop extends Components.WppIconCrop {
}
export declare class WppIconCross {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCross, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCross, "wpp-icon-cross-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCross extends Components.WppIconCross {
}
export declare class WppIconCta {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCta, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCta, "wpp-icon-cta-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCta extends Components.WppIconCta {
}
export declare class WppIconCube {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCube, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCube, "wpp-icon-cube-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCube extends Components.WppIconCube {
}
export declare class WppIconCurrency {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCurrency, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCurrency, "wpp-icon-currency-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCurrency extends Components.WppIconCurrency {
}
export declare class WppIconCut {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCut, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCut, "wpp-icon-cut-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconCut extends Components.WppIconCut {
}
export declare class WppIconDarkTheme {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDarkTheme, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDarkTheme, "wpp-icon-dark-theme-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDarkTheme extends Components.WppIconDarkTheme {
}
export declare class WppIconDash {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDash, "wpp-icon-dash-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDash extends Components.WppIconDash {
}
export declare class WppIconDataArea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataArea, "wpp-icon-data-area-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataArea extends Components.WppIconDataArea {
}
export declare class WppIconDataCloudOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataCloudOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataCloudOff, "wpp-icon-data-cloud-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataCloudOff extends Components.WppIconDataCloudOff {
}
export declare class WppIconDataCloudOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataCloudOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataCloudOn, "wpp-icon-data-cloud-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataCloudOn extends Components.WppIconDataCloudOn {
}
export declare class WppIconDataFunnel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataFunnel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataFunnel, "wpp-icon-data-funnel-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataFunnel extends Components.WppIconDataFunnel {
}
export declare class WppIconDataHistogram {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataHistogram, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataHistogram, "wpp-icon-data-histogram-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataHistogram extends Components.WppIconDataHistogram {
}
export declare class WppIconDataLine {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataLine, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataLine, "wpp-icon-data-line-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataLine extends Components.WppIconDataLine {
}
export declare class WppIconDataScatter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataScatter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataScatter, "wpp-icon-data-scatter-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataScatter extends Components.WppIconDataScatter {
}
export declare class WppIconDataSunburst {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataSunburst, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataSunburst, "wpp-icon-data-sunburst-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataSunburst extends Components.WppIconDataSunburst {
}
export declare class WppIconDataTransfer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTransfer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTransfer, "wpp-icon-data-transfer-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataTransfer extends Components.WppIconDataTransfer {
}
export declare class WppIconDataTreemap {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTreemap, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTreemap, "wpp-icon-data-treemap-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataTreemap extends Components.WppIconDataTreemap {
}
export declare class WppIconDataTrending {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTrending, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTrending, "wpp-icon-data-trending-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataTrending extends Components.WppIconDataTrending {
}
export declare class WppIconDataUsage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataUsage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataUsage, "wpp-icon-data-usage-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataUsage extends Components.WppIconDataUsage {
}
export declare class WppIconDataViewCards {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataViewCards, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataViewCards, "wpp-icon-data-view-cards-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataViewCards extends Components.WppIconDataViewCards {
}
export declare class WppIconDataViewList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataViewList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataViewList, "wpp-icon-data-view-list-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataViewList extends Components.WppIconDataViewList {
}
export declare class WppIconDataWaterfall {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataWaterfall, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataWaterfall, "wpp-icon-data-waterfall-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataWaterfall extends Components.WppIconDataWaterfall {
}
export declare class WppIconDataWhisker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataWhisker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataWhisker, "wpp-icon-data-whisker-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDataWhisker extends Components.WppIconDataWhisker {
}
export declare class WppIconDatabase {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDatabase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDatabase, "wpp-icon-database-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDatabase extends Components.WppIconDatabase {
}
export declare class WppIconDecrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDecrease, "wpp-icon-decrease-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDecrease extends Components.WppIconDecrease {
}
export declare class WppIconDescent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDescent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDescent, "wpp-icon-descent-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDescent extends Components.WppIconDescent {
}
export declare class WppIconDesign {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDesign, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDesign, "wpp-icon-design-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDesign extends Components.WppIconDesign {
}
export declare class WppIconDesktop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDesktop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDesktop, "wpp-icon-desktop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDesktop extends Components.WppIconDesktop {
}
export declare class WppIconDiamond {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDiamond, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDiamond, "wpp-icon-diamond-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDiamond extends Components.WppIconDiamond {
}
export declare class WppIconDirections {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDirections, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDirections, "wpp-icon-directions-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDirections extends Components.WppIconDirections {
}
export declare class WppIconDislike {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDislike, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDislike, "wpp-icon-dislike-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDislike extends Components.WppIconDislike {
}
export declare class WppIconDiversity {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDiversity, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDiversity, "wpp-icon-diversity-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDiversity extends Components.WppIconDiversity {
}
export declare class WppIconDocument {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocument, "wpp-icon-document-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDocument extends Components.WppIconDocument {
}
export declare class WppIconDocumentBlocked {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocumentBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocumentBlocked, "wpp-icon-document-blocked-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDocumentBlocked extends Components.WppIconDocumentBlocked {
}
export declare class WppIconDocumentError {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocumentError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocumentError, "wpp-icon-document-error-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDocumentError extends Components.WppIconDocumentError {
}
export declare class WppIconDollar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDollar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDollar, "wpp-icon-dollar-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDollar extends Components.WppIconDollar {
}
export declare class WppIconDone {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDone, "wpp-icon-done-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDone extends Components.WppIconDone {
}
export declare class WppIconDoubleChevron {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDoubleChevron, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDoubleChevron, "wpp-icon-double-chevron-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDoubleChevron extends Components.WppIconDoubleChevron {
}
export declare class WppIconDownload {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDownload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDownload, "wpp-icon-download-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDownload extends Components.WppIconDownload {
}
export declare class WppIconDraft {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDraft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDraft, "wpp-icon-draft-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDraft extends Components.WppIconDraft {
}
export declare class WppIconDrag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDrag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDrag, "wpp-icon-drag-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDrag extends Components.WppIconDrag {
}
export declare class WppIconDragAndDrop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDragAndDrop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDragAndDrop, "wpp-icon-drag-and-drop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDragAndDrop extends Components.WppIconDragAndDrop {
}
export declare class WppIconDragIndicator {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDragIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDragIndicator, "wpp-icon-drag-indicator-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconDragIndicator extends Components.WppIconDragIndicator {
}
export declare class WppIconEco {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEco, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEco, "wpp-icon-eco-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEco extends Components.WppIconEco {
}
export declare class WppIconEdit {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEdit, "wpp-icon-edit-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEdit extends Components.WppIconEdit {
}
export declare class WppIconEditText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditText, "wpp-icon-edit-text-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEditText extends Components.WppIconEditText {
}
export declare class WppIconEditorLowercase {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorLowercase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorLowercase, "wpp-icon-editor-lowercase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEditorLowercase extends Components.WppIconEditorLowercase {
}
export declare class WppIconEditorObjectAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorObjectAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorObjectAlignmentCenter, "wpp-icon-editor-object-alignment-center-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEditorObjectAlignmentCenter extends Components.WppIconEditorObjectAlignmentCenter {
}
export declare class WppIconEditorTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorTitle, "wpp-icon-editor-title-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEditorTitle extends Components.WppIconEditorTitle {
}
export declare class WppIconEditorUppercase {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorUppercase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorUppercase, "wpp-icon-editor-uppercase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEditorUppercase extends Components.WppIconEditorUppercase {
}
export declare class WppIconEffects {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEffects, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEffects, "wpp-icon-effects-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEffects extends Components.WppIconEffects {
}
export declare class WppIconEnlarge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEnlarge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEnlarge, "wpp-icon-enlarge-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEnlarge extends Components.WppIconEnlarge {
}
export declare class WppIconEnter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEnter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEnter, "wpp-icon-enter-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEnter extends Components.WppIconEnter {
}
export declare class WppIconEraser {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEraser, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEraser, "wpp-icon-eraser-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEraser extends Components.WppIconEraser {
}
export declare class WppIconError {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconError, "wpp-icon-error-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconError extends Components.WppIconError {
}
export declare class WppIconEth {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEth, "wpp-icon-eth-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEth extends Components.WppIconEth {
}
export declare class WppIconEuro {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEuro, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEuro, "wpp-icon-euro-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEuro extends Components.WppIconEuro {
}
export declare class WppIconEvent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEvent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEvent, "wpp-icon-event-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEvent extends Components.WppIconEvent {
}
export declare class WppIconExpand {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExpand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExpand, "wpp-icon-expand-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExpand extends Components.WppIconExpand {
}
export declare class WppIconExperiment {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExperiment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExperiment, "wpp-icon-experiment-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExperiment extends Components.WppIconExperiment {
}
export declare class WppIconExport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExport, "wpp-icon-export-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExport extends Components.WppIconExport {
}
export declare class WppIconExportFile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExportFile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExportFile, "wpp-icon-export-file-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExportFile extends Components.WppIconExportFile {
}
export declare class WppIconExtension {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExtension, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExtension, "wpp-icon-extension-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExtension extends Components.WppIconExtension {
}
export declare class WppIconExternalLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExternalLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExternalLink, "wpp-icon-external-link-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconExternalLink extends Components.WppIconExternalLink {
}
export declare class WppIconEye {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEye, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEye, "wpp-icon-eye-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEye extends Components.WppIconEye {
}
export declare class WppIconEyeOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyeOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyeOff, "wpp-icon-eye-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEyeOff extends Components.WppIconEyeOff {
}
export declare class WppIconEyeOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyeOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyeOn, "wpp-icon-eye-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEyeOn extends Components.WppIconEyeOn {
}
export declare class WppIconEyedropper {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyedropper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyedropper, "wpp-icon-eyedropper-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconEyedropper extends Components.WppIconEyedropper {
}
export declare class WppIconFactory {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFactory, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFactory, "wpp-icon-factory-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFactory extends Components.WppIconFactory {
}
export declare class WppIconFavorites {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavorites, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavorites, "wpp-icon-favorites-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFavorites extends Components.WppIconFavorites {
}
export declare class WppIconFavoritesFilled {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavoritesFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavoritesFilled, "wpp-icon-favorites-filled-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFavoritesFilled extends Components.WppIconFavoritesFilled {
}
export declare class WppIconFavourites {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavourites, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavourites, "wpp-icon-favourites-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFavourites extends Components.WppIconFavourites {
}
export declare class WppIconFavouritesFilled {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavouritesFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavouritesFilled, "wpp-icon-favourites-filled-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFavouritesFilled extends Components.WppIconFavouritesFilled {
}
export declare class WppIconFile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFile, "wpp-icon-file-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFile extends Components.WppIconFile {
}
export declare class WppIconFileCss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileCss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileCss, "wpp-icon-file-css-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFileCss extends Components.WppIconFileCss {
}
export declare class WppIconFileJs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileJs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileJs, "wpp-icon-file-js-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFileJs extends Components.WppIconFileJs {
}
export declare class WppIconFilePdf {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFilePdf, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFilePdf, "wpp-icon-file-pdf-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFilePdf extends Components.WppIconFilePdf {
}
export declare class WppIconFileZip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileZip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileZip, "wpp-icon-file-zip-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFileZip extends Components.WppIconFileZip {
}
export declare class WppIconFill {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFill, "wpp-icon-fill-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFill extends Components.WppIconFill {
}
export declare class WppIconFilter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFilter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFilter, "wpp-icon-filter-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFilter extends Components.WppIconFilter {
}
export declare class WppIconFingerprint {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFingerprint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFingerprint, "wpp-icon-fingerprint-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFingerprint extends Components.WppIconFingerprint {
}
export declare class WppIconFitHeight {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFitHeight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFitHeight, "wpp-icon-fit-height-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFitHeight extends Components.WppIconFitHeight {
}
export declare class WppIconFitWidth {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFitWidth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFitWidth, "wpp-icon-fit-width-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFitWidth extends Components.WppIconFitWidth {
}
export declare class WppIconFlagOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlagOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlagOff, "wpp-icon-flag-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFlagOff extends Components.WppIconFlagOff {
}
export declare class WppIconFlagOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlagOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlagOn, "wpp-icon-flag-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFlagOn extends Components.WppIconFlagOn {
}
export declare class WppIconFlip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlip, "wpp-icon-flip-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFlip extends Components.WppIconFlip {
}
export declare class WppIconFloatCenter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatCenter, "wpp-icon-float-center-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFloatCenter extends Components.WppIconFloatCenter {
}
export declare class WppIconFloatLeft {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatLeft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatLeft, "wpp-icon-float-left-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFloatLeft extends Components.WppIconFloatLeft {
}
export declare class WppIconFloatRight {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatRight, "wpp-icon-float-right-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFloatRight extends Components.WppIconFloatRight {
}
export declare class WppIconFluidWorkflow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFluidWorkflow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFluidWorkflow, "wpp-icon-fluid-workflow-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFluidWorkflow extends Components.WppIconFluidWorkflow {
}
export declare class WppIconFolder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolder, "wpp-icon-folder-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFolder extends Components.WppIconFolder {
}
export declare class WppIconFolderBlocked {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderBlocked, "wpp-icon-folder-blocked-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFolderBlocked extends Components.WppIconFolderBlocked {
}
export declare class WppIconFolderLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderLink, "wpp-icon-folder-link-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFolderLink extends Components.WppIconFolderLink {
}
export declare class WppIconFolderOpen {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderOpen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderOpen, "wpp-icon-folder-open-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFolderOpen extends Components.WppIconFolderOpen {
}
export declare class WppIconFont {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFont, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFont, "wpp-icon-font-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFont extends Components.WppIconFont {
}
export declare class WppIconForward {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconForward, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconForward, "wpp-icon-forward-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconForward extends Components.WppIconForward {
}
export declare class WppIconFullscreen {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFullscreen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFullscreen, "wpp-icon-fullscreen-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFullscreen extends Components.WppIconFullscreen {
}
export declare class WppIconFullscreenMinimise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFullscreenMinimise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFullscreenMinimise, "wpp-icon-fullscreen-minimise-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconFullscreenMinimise extends Components.WppIconFullscreenMinimise {
}
export declare class WppIconGallery {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGallery, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGallery, "wpp-icon-gallery-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGallery extends Components.WppIconGallery {
}
export declare class WppIconGasStation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGasStation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGasStation, "wpp-icon-gas-station-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGasStation extends Components.WppIconGasStation {
}
export declare class WppIconGear {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGear, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGear, "wpp-icon-gear-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGear extends Components.WppIconGear {
}
export declare class WppIconGetSupport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGetSupport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGetSupport, "wpp-icon-get-support-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGetSupport extends Components.WppIconGetSupport {
}
export declare class WppIconGif {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGif, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGif, "wpp-icon-gif-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGif extends Components.WppIconGif {
}
export declare class WppIconGlobe {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGlobe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGlobe, "wpp-icon-globe-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGlobe extends Components.WppIconGlobe {
}
export declare class WppIconGps {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGps, "wpp-icon-gps-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGps extends Components.WppIconGps {
}
export declare class WppIconGraph {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGraph, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGraph, "wpp-icon-graph-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGraph extends Components.WppIconGraph {
}
export declare class WppIconGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGrid, "wpp-icon-grid-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGrid extends Components.WppIconGrid {
}
export declare class WppIconGridDots {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGridDots, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGridDots, "wpp-icon-grid-dots-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconGridDots extends Components.WppIconGridDots {
}
export declare class WppIconH1 {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH1, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH1, "wpp-icon-h1-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconH1 extends Components.WppIconH1 {
}
export declare class WppIconH2 {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH2, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH2, "wpp-icon-h2-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconH2 extends Components.WppIconH2 {
}
export declare class WppIconH3 {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH3, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH3, "wpp-icon-h3-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconH3 extends Components.WppIconH3 {
}
export declare class WppIconHandDraw {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandDraw, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandDraw, "wpp-icon-hand-draw-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHandDraw extends Components.WppIconHandDraw {
}
export declare class WppIconHandOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandOff, "wpp-icon-hand-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHandOff extends Components.WppIconHandOff {
}
export declare class WppIconHandOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandOn, "wpp-icon-hand-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHandOn extends Components.WppIconHandOn {
}
export declare class WppIconHash {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHash, "wpp-icon-hash-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHash extends Components.WppIconHash {
}
export declare class WppIconHd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHd, "wpp-icon-hd-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHd extends Components.WppIconHd {
}
export declare class WppIconHdr {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHdr, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHdr, "wpp-icon-hdr-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHdr extends Components.WppIconHdr {
}
export declare class WppIconHeadphones {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHeadphones, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHeadphones, "wpp-icon-headphones-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHeadphones extends Components.WppIconHeadphones {
}
export declare class WppIconHelp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHelp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHelp, "wpp-icon-help-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHelp extends Components.WppIconHelp {
}
export declare class WppIconHistory {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHistory, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHistory, "wpp-icon-history-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHistory extends Components.WppIconHistory {
}
export declare class WppIconHome {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHome, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHome, "wpp-icon-home-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHome extends Components.WppIconHome {
}
export declare class WppIconHomeCheckmark {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHomeCheckmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHomeCheckmark, "wpp-icon-home-checkmark-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHomeCheckmark extends Components.WppIconHomeCheckmark {
}
export declare class WppIconHospital {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHospital, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHospital, "wpp-icon-hospital-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHospital extends Components.WppIconHospital {
}
export declare class WppIconHub {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHub, "wpp-icon-hub-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconHub extends Components.WppIconHub {
}
export declare class WppIconIcons {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIcons, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIcons, "wpp-icon-icons-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIcons extends Components.WppIconIcons {
}
export declare class WppIconIdea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIdea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIdea, "wpp-icon-idea-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIdea extends Components.WppIconIdea {
}
export declare class WppIconIframe {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIframe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIframe, "wpp-icon-iframe-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIframe extends Components.WppIconIframe {
}
export declare class WppIconImage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImage, "wpp-icon-image-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconImage extends Components.WppIconImage {
}
export declare class WppIconImageOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImageOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImageOff, "wpp-icon-image-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconImageOff extends Components.WppIconImageOff {
}
export declare class WppIconImport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImport, "wpp-icon-import-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconImport extends Components.WppIconImport {
}
export declare class WppIconInbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInbox, "wpp-icon-inbox-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconInbox extends Components.WppIconInbox {
}
export declare class WppIconIncognito {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncognito, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncognito, "wpp-icon-incognito-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIncognito extends Components.WppIconIncognito {
}
export declare class WppIconIncomplete {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncomplete, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncomplete, "wpp-icon-incomplete-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIncomplete extends Components.WppIconIncomplete {
}
export declare class WppIconIncrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncrease, "wpp-icon-increase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIncrease extends Components.WppIconIncrease {
}
export declare class WppIconIndentDecrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIndentDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIndentDecrease, "wpp-icon-indent-decrease-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIndentDecrease extends Components.WppIconIndentDecrease {
}
export declare class WppIconIndentIncrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIndentIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIndentIncrease, "wpp-icon-indent-increase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconIndentIncrease extends Components.WppIconIndentIncrease {
}
export declare class WppIconInfo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInfo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInfo, "wpp-icon-info-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconInfo extends Components.WppIconInfo {
}
export declare class WppIconInfoMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInfoMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInfoMessage, "wpp-icon-info-message-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconInfoMessage extends Components.WppIconInfoMessage {
}
export declare class WppIconInstallUpdate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInstallUpdate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInstallUpdate, "wpp-icon-install-update-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconInstallUpdate extends Components.WppIconInstallUpdate {
}
export declare class WppIconItalic {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconItalic, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconItalic, "wpp-icon-italic-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconItalic extends Components.WppIconItalic {
}
export declare class WppIconJavaScript {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconJavaScript, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconJavaScript, "wpp-icon-java-script-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconJavaScript extends Components.WppIconJavaScript {
}
export declare class WppIconJoin {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconJoin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconJoin, "wpp-icon-join-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconJoin extends Components.WppIconJoin {
}
export declare class WppIconKey {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconKey, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconKey, "wpp-icon-key-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconKey extends Components.WppIconKey {
}
export declare class WppIconKeyboard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconKeyboard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconKeyboard, "wpp-icon-keyboard-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconKeyboard extends Components.WppIconKeyboard {
}
export declare class WppIconLaptop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaptop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaptop, "wpp-icon-laptop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLaptop extends Components.WppIconLaptop {
}
export declare class WppIconLaugh {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaugh, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaugh, "wpp-icon-laugh-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLaugh extends Components.WppIconLaugh {
}
export declare class WppIconLaunch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaunch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaunch, "wpp-icon-launch-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLaunch extends Components.WppIconLaunch {
}
export declare class WppIconLayer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLayer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLayer, "wpp-icon-layer-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLayer extends Components.WppIconLayer {
}
export declare class WppIconLeaf {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLeaf, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLeaf, "wpp-icon-leaf-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLeaf extends Components.WppIconLeaf {
}
export declare class WppIconLibrary {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLibrary, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLibrary, "wpp-icon-library-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLibrary extends Components.WppIconLibrary {
}
export declare class WppIconLibraryBuilding {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLibraryBuilding, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLibraryBuilding, "wpp-icon-library-building-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLibraryBuilding extends Components.WppIconLibraryBuilding {
}
export declare class WppIconLike {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLike, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLike, "wpp-icon-like-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLike extends Components.WppIconLike {
}
export declare class WppIconLikeOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLikeOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLikeOff, "wpp-icon-like-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLikeOff extends Components.WppIconLikeOff {
}
export declare class WppIconLikeOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLikeOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLikeOn, "wpp-icon-like-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLikeOn extends Components.WppIconLikeOn {
}
export declare class WppIconLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLink, "wpp-icon-link-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLink extends Components.WppIconLink {
}
export declare class WppIconLive {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLive, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLive, "wpp-icon-live-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLive extends Components.WppIconLive {
}
export declare class WppIconLocation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLocation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLocation, "wpp-icon-location-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLocation extends Components.WppIconLocation {
}
export declare class WppIconLockOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLockOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLockOff, "wpp-icon-lock-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLockOff extends Components.WppIconLockOff {
}
export declare class WppIconLockOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLockOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLockOn, "wpp-icon-lock-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLockOn extends Components.WppIconLockOn {
}
export declare class WppIconLodging {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLodging, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLodging, "wpp-icon-lodging-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLodging extends Components.WppIconLodging {
}
export declare class WppIconLogin {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLogin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLogin, "wpp-icon-login-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLogin extends Components.WppIconLogin {
}
export declare class WppIconLogout {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLogout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLogout, "wpp-icon-logout-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconLogout extends Components.WppIconLogout {
}
export declare class WppIconMagicWand {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMagicWand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMagicWand, "wpp-icon-magic-wand-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMagicWand extends Components.WppIconMagicWand {
}
export declare class WppIconMail {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMail, "wpp-icon-mail-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMail extends Components.WppIconMail {
}
export declare class WppIconMailAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailAdd, "wpp-icon-mail-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailAdd extends Components.WppIconMailAdd {
}
export declare class WppIconMailAllRead {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailAllRead, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailAllRead, "wpp-icon-mail-all-read-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailAllRead extends Components.WppIconMailAllRead {
}
export declare class WppIconMailBlocked {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailBlocked, "wpp-icon-mail-blocked-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailBlocked extends Components.WppIconMailBlocked {
}
export declare class WppIconMailCopy {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailCopy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailCopy, "wpp-icon-mail-copy-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailCopy extends Components.WppIconMailCopy {
}
export declare class WppIconMailOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailOff, "wpp-icon-mail-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailOff extends Components.WppIconMailOff {
}
export declare class WppIconMailRead {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailRead, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailRead, "wpp-icon-mail-read-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMailRead extends Components.WppIconMailRead {
}
export declare class WppIconMap {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMap, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMap, "wpp-icon-map-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMap extends Components.WppIconMap {
}
export declare class WppIconMathFormula {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMathFormula, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMathFormula, "wpp-icon-math-formula-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMathFormula extends Components.WppIconMathFormula {
}
export declare class WppIconMaximise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMaximise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMaximise, "wpp-icon-maximise-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMaximise extends Components.WppIconMaximise {
}
export declare class WppIconMeet {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMeet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMeet, "wpp-icon-meet-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMeet extends Components.WppIconMeet {
}
export declare class WppIconMention {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMention, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMention, "wpp-icon-mention-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMention extends Components.WppIconMention {
}
export declare class WppIconMerge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMerge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMerge, "wpp-icon-merge-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMerge extends Components.WppIconMerge {
}
export declare class WppIconMicBlocked {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicBlocked, "wpp-icon-mic-blocked-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMicBlocked extends Components.WppIconMicBlocked {
}
export declare class WppIconMicOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicOff, "wpp-icon-mic-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMicOff extends Components.WppIconMicOff {
}
export declare class WppIconMicOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicOn, "wpp-icon-mic-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMicOn extends Components.WppIconMicOn {
}
export declare class WppIconMinimise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMinimise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMinimise, "wpp-icon-minimise-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMinimise extends Components.WppIconMinimise {
}
export declare class WppIconMobile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMobile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMobile, "wpp-icon-mobile-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMobile extends Components.WppIconMobile {
}
export declare class WppIconMoney {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMoney, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMoney, "wpp-icon-money-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMoney extends Components.WppIconMoney {
}
export declare class WppIconMore {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMore, "wpp-icon-more-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMore extends Components.WppIconMore {
}
export declare class WppIconMove {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMove, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMove, "wpp-icon-move-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMove extends Components.WppIconMove {
}
export declare class WppIconMovie {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMovie, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMovie, "wpp-icon-movie-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMovie extends Components.WppIconMovie {
}
export declare class WppIconMultipleEmotions {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMultipleEmotions, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMultipleEmotions, "wpp-icon-multiple-emotions-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMultipleEmotions extends Components.WppIconMultipleEmotions {
}
export declare class WppIconMusic {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMusic, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMusic, "wpp-icon-music-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconMusic extends Components.WppIconMusic {
}
export declare class WppIconNavigationMenu {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNavigationMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNavigationMenu, "wpp-icon-navigation-menu-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNavigationMenu extends Components.WppIconNavigationMenu {
}
export declare class WppIconNeutral {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNeutral, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNeutral, "wpp-icon-neutral-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNeutral extends Components.WppIconNeutral {
}
export declare class WppIconNeutralTrading {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNeutralTrading, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNeutralTrading, "wpp-icon-neutral-trading-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNeutralTrading extends Components.WppIconNeutralTrading {
}
export declare class WppIconNewspaper {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNewspaper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNewspaper, "wpp-icon-newspaper-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNewspaper extends Components.WppIconNewspaper {
}
export declare class WppIconNext {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNext, "wpp-icon-next-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNext extends Components.WppIconNext {
}
export declare class WppIconNightLife {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNightLife, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNightLife, "wpp-icon-night-life-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNightLife extends Components.WppIconNightLife {
}
export declare class WppIconNote {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNote, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNote, "wpp-icon-note-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNote extends Components.WppIconNote {
}
export declare class WppIconNotification {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotification, "wpp-icon-notification-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNotification extends Components.WppIconNotification {
}
export declare class WppIconNotificationNew {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationNew, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationNew, "wpp-icon-notification-new-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNotificationNew extends Components.WppIconNotificationNew {
}
export declare class WppIconNotificationOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationOff, "wpp-icon-notification-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNotificationOff extends Components.WppIconNotificationOff {
}
export declare class WppIconNotificationOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationOn, "wpp-icon-notification-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNotificationOn extends Components.WppIconNotificationOn {
}
export declare class WppIconNotificationPause {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationPause, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationPause, "wpp-icon-notification-pause-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNotificationPause extends Components.WppIconNotificationPause {
}
export declare class WppIconNuclearDanger {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNuclearDanger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNuclearDanger, "wpp-icon-nuclear-danger-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNuclearDanger extends Components.WppIconNuclearDanger {
}
export declare class WppIconNumber {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNumber, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNumber, "wpp-icon-number-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconNumber extends Components.WppIconNumber {
}
export declare class WppIconObjectAlignment {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconObjectAlignment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconObjectAlignment, "wpp-icon-object-alignment-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconObjectAlignment extends Components.WppIconObjectAlignment {
}
export declare class WppIconObjectAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconObjectAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconObjectAlignmentCenter, "wpp-icon-object-alignment-center-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconObjectAlignmentCenter extends Components.WppIconObjectAlignmentCenter {
}
export declare class WppIconOrderedList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrderedList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrderedList, "wpp-icon-ordered-list-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOrderedList extends Components.WppIconOrderedList {
}
export declare class WppIconOrganization {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrganization, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrganization, "wpp-icon-organization-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOrganization extends Components.WppIconOrganization {
}
export declare class WppIconOrientation {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrientation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrientation, "wpp-icon-orientation-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOrientation extends Components.WppIconOrientation {
}
export declare class WppIconOutdoor {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOutdoor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOutdoor, "wpp-icon-outdoor-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOutdoor extends Components.WppIconOutdoor {
}
export declare class WppIconOutdoorMedia {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOutdoorMedia, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOutdoorMedia, "wpp-icon-outdoor-media-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOutdoorMedia extends Components.WppIconOutdoorMedia {
}
export declare class WppIconOwner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOwner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOwner, "wpp-icon-owner-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconOwner extends Components.WppIconOwner {
}
export declare class WppIconPadding {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPadding, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPadding, "wpp-icon-padding-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPadding extends Components.WppIconPadding {
}
export declare class WppIconPair {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPair, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPair, "wpp-icon-pair-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPair extends Components.WppIconPair {
}
export declare class WppIconParking {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconParking, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconParking, "wpp-icon-parking-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconParking extends Components.WppIconParking {
}
export declare class WppIconPaste {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPaste, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPaste, "wpp-icon-paste-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPaste extends Components.WppIconPaste {
}
export declare class WppIconPause {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPause, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPause, "wpp-icon-pause-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPause extends Components.WppIconPause {
}
export declare class WppIconPen {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPen, "wpp-icon-pen-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPen extends Components.WppIconPen {
}
export declare class WppIconPending {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPending, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPending, "wpp-icon-pending-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPending extends Components.WppIconPending {
}
export declare class WppIconPentagon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPentagon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPentagon, "wpp-icon-pentagon-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPentagon extends Components.WppIconPentagon {
}
export declare class WppIconPeople {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPeople, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPeople, "wpp-icon-people-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPeople extends Components.WppIconPeople {
}
export declare class WppIconPharmacy {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPharmacy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPharmacy, "wpp-icon-pharmacy-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPharmacy extends Components.WppIconPharmacy {
}
export declare class WppIconPhone {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPhone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPhone, "wpp-icon-phone-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPhone extends Components.WppIconPhone {
}
export declare class WppIconPieChart {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPieChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPieChart, "wpp-icon-pie-chart-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPieChart extends Components.WppIconPieChart {
}
export declare class WppIconPin {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPin, "wpp-icon-pin-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPin extends Components.WppIconPin {
}
export declare class WppIconPinned {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPinned, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPinned, "wpp-icon-pinned-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPinned extends Components.WppIconPinned {
}
export declare class WppIconPitch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPitch, "wpp-icon-pitch-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPitch extends Components.WppIconPitch {
}
export declare class WppIconPlay {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlay, "wpp-icon-play-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPlay extends Components.WppIconPlay {
}
export declare class WppIconPlus {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlus, "wpp-icon-plus-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPlus extends Components.WppIconPlus {
}
export declare class WppIconPlusCircle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlusCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlusCircle, "wpp-icon-plus-circle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPlusCircle extends Components.WppIconPlusCircle {
}
export declare class WppIconPolice {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPolice, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPolice, "wpp-icon-police-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPolice extends Components.WppIconPolice {
}
export declare class WppIconPost {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPost, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPost, "wpp-icon-post-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPost extends Components.WppIconPost {
}
export declare class WppIconPound {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPound, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPound, "wpp-icon-pound-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPound extends Components.WppIconPound {
}
export declare class WppIconPremium {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPremium, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPremium, "wpp-icon-premium-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPremium extends Components.WppIconPremium {
}
export declare class WppIconPrevious {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrevious, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrevious, "wpp-icon-previous-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPrevious extends Components.WppIconPrevious {
}
export declare class WppIconPrint {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrint, "wpp-icon-print-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPrint extends Components.WppIconPrint {
}
export declare class WppIconPrivateAccount {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrivateAccount, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrivateAccount, "wpp-icon-private-account-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconPrivateAccount extends Components.WppIconPrivateAccount {
}
export declare class WppIconQa {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconQa, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconQa, "wpp-icon-qa-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconQa extends Components.WppIconQa {
}
export declare class WppIconQrCode {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconQrCode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconQrCode, "wpp-icon-qr-code-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconQrCode extends Components.WppIconQrCode {
}
export declare class WppIconRadio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRadio, "wpp-icon-radio-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRadio extends Components.WppIconRadio {
}
export declare class WppIconRanking {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRanking, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRanking, "wpp-icon-ranking-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRanking extends Components.WppIconRanking {
}
export declare class WppIconRatio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRatio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRatio, "wpp-icon-ratio-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRatio extends Components.WppIconRatio {
}
export declare class WppIconRecord {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecord, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecord, "wpp-icon-record-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRecord extends Components.WppIconRecord {
}
export declare class WppIconRecordStop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecordStop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecordStop, "wpp-icon-record-stop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRecordStop extends Components.WppIconRecordStop {
}
export declare class WppIconRectangle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRectangle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRectangle, "wpp-icon-rectangle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRectangle extends Components.WppIconRectangle {
}
export declare class WppIconRecycle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecycle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecycle, "wpp-icon-recycle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRecycle extends Components.WppIconRecycle {
}
export declare class WppIconRedo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRedo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRedo, "wpp-icon-redo-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRedo extends Components.WppIconRedo {
}
export declare class WppIconRefresh {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRefresh, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRefresh, "wpp-icon-refresh-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRefresh extends Components.WppIconRefresh {
}
export declare class WppIconRefreshDashed {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRefreshDashed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRefreshDashed, "wpp-icon-refresh-dashed-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRefreshDashed extends Components.WppIconRefreshDashed {
}
export declare class WppIconReject {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReject, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReject, "wpp-icon-reject-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconReject extends Components.WppIconReject {
}
export declare class WppIconRemove {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemove, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemove, "wpp-icon-remove-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRemove extends Components.WppIconRemove {
}
export declare class WppIconRemoveApp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemoveApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemoveApp, "wpp-icon-remove-app-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRemoveApp extends Components.WppIconRemoveApp {
}
export declare class WppIconRemoveCircle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemoveCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemoveCircle, "wpp-icon-remove-circle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRemoveCircle extends Components.WppIconRemoveCircle {
}
export declare class WppIconRepeatOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRepeatOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRepeatOff, "wpp-icon-repeat-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRepeatOff extends Components.WppIconRepeatOff {
}
export declare class WppIconRepeatOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRepeatOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRepeatOn, "wpp-icon-repeat-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRepeatOn extends Components.WppIconRepeatOn {
}
export declare class WppIconReply {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReply, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReply, "wpp-icon-reply-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconReply extends Components.WppIconReply {
}
export declare class WppIconReplyAll {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReplyAll, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReplyAll, "wpp-icon-reply-all-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconReplyAll extends Components.WppIconReplyAll {
}
export declare class WppIconReset {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReset, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReset, "wpp-icon-reset-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconReset extends Components.WppIconReset {
}
export declare class WppIconResetDashed {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResetDashed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResetDashed, "wpp-icon-reset-dashed-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconResetDashed extends Components.WppIconResetDashed {
}
export declare class WppIconResize {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResize, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResize, "wpp-icon-resize-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconResize extends Components.WppIconResize {
}
export declare class WppIconResizeLarge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResizeLarge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResizeLarge, "wpp-icon-resize-large-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconResizeLarge extends Components.WppIconResizeLarge {
}
export declare class WppIconResizeSmall {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResizeSmall, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResizeSmall, "wpp-icon-resize-small-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconResizeSmall extends Components.WppIconResizeSmall {
}
export declare class WppIconRestaurant {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRestaurant, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRestaurant, "wpp-icon-restaurant-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRestaurant extends Components.WppIconRestaurant {
}
export declare class WppIconRhombus {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRhombus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRhombus, "wpp-icon-rhombus-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRhombus extends Components.WppIconRhombus {
}
export declare class WppIconRise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRise, "wpp-icon-rise-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRise extends Components.WppIconRise {
}
export declare class WppIconRotate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotate, "wpp-icon-rotate-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRotate extends Components.WppIconRotate {
}
export declare class WppIconRotateClockwise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotateClockwise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotateClockwise, "wpp-icon-rotate-clockwise-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRotateClockwise extends Components.WppIconRotateClockwise {
}
export declare class WppIconRotateCounterclockwise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotateCounterclockwise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotateCounterclockwise, "wpp-icon-rotate-counterclockwise-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRotateCounterclockwise extends Components.WppIconRotateCounterclockwise {
}
export declare class WppIconRss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRss, "wpp-icon-rss-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRss extends Components.WppIconRss {
}
export declare class WppIconRupee {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRupee, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRupee, "wpp-icon-rupee-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconRupee extends Components.WppIconRupee {
}
export declare class WppIconSad {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSad, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSad, "wpp-icon-sad-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSad extends Components.WppIconSad {
}
export declare class WppIconSadSlightly {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSadSlightly, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSadSlightly, "wpp-icon-sad-slightly-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSadSlightly extends Components.WppIconSadSlightly {
}
export declare class WppIconScale {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScale, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScale, "wpp-icon-scale-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconScale extends Components.WppIconScale {
}
export declare class WppIconScaleBottom {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScaleBottom, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScaleBottom, "wpp-icon-scale-bottom-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconScaleBottom extends Components.WppIconScaleBottom {
}
export declare class WppIconScan {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScan, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScan, "wpp-icon-scan-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconScan extends Components.WppIconScan {
}
export declare class WppIconSchool {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSchool, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSchool, "wpp-icon-school-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSchool extends Components.WppIconSchool {
}
export declare class WppIconSearch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSearch, "wpp-icon-search-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSearch extends Components.WppIconSearch {
}
export declare class WppIconSegmentedControl {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSegmentedControl, "wpp-icon-segmented-control-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSegmentedControl extends Components.WppIconSegmentedControl {
}
export declare class WppIconSelectObject {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSelectObject, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSelectObject, "wpp-icon-select-object-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSelectObject extends Components.WppIconSelectObject {
}
export declare class WppIconSend {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSend, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSend, "wpp-icon-send-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSend extends Components.WppIconSend {
}
export declare class WppIconSendOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSendOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSendOff, "wpp-icon-send-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSendOff extends Components.WppIconSendOff {
}
export declare class WppIconService {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconService, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconService, "wpp-icon-service-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconService extends Components.WppIconService {
}
export declare class WppIconShapes {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShapes, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShapes, "wpp-icon-shapes-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShapes extends Components.WppIconShapes {
}
export declare class WppIconShare {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShare, "wpp-icon-share-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShare extends Components.WppIconShare {
}
export declare class WppIconShield {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShield, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShield, "wpp-icon-shield-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShield extends Components.WppIconShield {
}
export declare class WppIconShieldCheckmark {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldCheckmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldCheckmark, "wpp-icon-shield-checkmark-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShieldCheckmark extends Components.WppIconShieldCheckmark {
}
export declare class WppIconShieldDismiss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldDismiss, "wpp-icon-shield-dismiss-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShieldDismiss extends Components.WppIconShieldDismiss {
}
export declare class WppIconShieldError {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldError, "wpp-icon-shield-error-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShieldError extends Components.WppIconShieldError {
}
export declare class WppIconShieldSuccess {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldSuccess, "wpp-icon-shield-success-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShieldSuccess extends Components.WppIconShieldSuccess {
}
export declare class WppIconShip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShip, "wpp-icon-ship-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShip extends Components.WppIconShip {
}
export declare class WppIconShopping {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShopping, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShopping, "wpp-icon-shopping-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShopping extends Components.WppIconShopping {
}
export declare class WppIconShutDown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShutDown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShutDown, "wpp-icon-shut-down-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconShutDown extends Components.WppIconShutDown {
}
export declare class WppIconSmartwatch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmartwatch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmartwatch, "wpp-icon-smartwatch-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSmartwatch extends Components.WppIconSmartwatch {
}
export declare class WppIconSmile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmile, "wpp-icon-smile-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSmile extends Components.WppIconSmile {
}
export declare class WppIconSmileSlightly {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmileSlightly, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmileSlightly, "wpp-icon-smile-slightly-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSmileSlightly extends Components.WppIconSmileSlightly {
}
export declare class WppIconSocialMedia {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSocialMedia, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSocialMedia, "wpp-icon-social-media-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSocialMedia extends Components.WppIconSocialMedia {
}
export declare class WppIconSort {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSort, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSort, "wpp-icon-sort-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSort extends Components.WppIconSort {
}
export declare class WppIconSortByDecrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortByDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortByDecrease, "wpp-icon-sort-by-decrease-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSortByDecrease extends Components.WppIconSortByDecrease {
}
export declare class WppIconSortByIncrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortByIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortByIncrease, "wpp-icon-sort-by-increase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSortByIncrease extends Components.WppIconSortByIncrease {
}
export declare class WppIconSortDecrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortDecrease, "wpp-icon-sort-decrease-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSortDecrease extends Components.WppIconSortDecrease {
}
export declare class WppIconSortIncrease {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortIncrease, "wpp-icon-sort-increase-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSortIncrease extends Components.WppIconSortIncrease {
}
export declare class WppIconSparkle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSparkle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSparkle, "wpp-icon-sparkle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSparkle extends Components.WppIconSparkle {
}
export declare class WppIconSpeaker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeaker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeaker, "wpp-icon-speaker-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSpeaker extends Components.WppIconSpeaker {
}
export declare class WppIconSpeakerBluetooth {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerBluetooth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerBluetooth, "wpp-icon-speaker-bluetooth-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSpeakerBluetooth extends Components.WppIconSpeakerBluetooth {
}
export declare class WppIconSpeakerMute {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerMute, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerMute, "wpp-icon-speaker-mute-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSpeakerMute extends Components.WppIconSpeakerMute {
}
export declare class WppIconSpeakerOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerOff, "wpp-icon-speaker-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSpeakerOff extends Components.WppIconSpeakerOff {
}
export declare class WppIconSplit {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSplit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSplit, "wpp-icon-split-v2-22-0", never, { "color": "color"; "direction": "direction"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSplit extends Components.WppIconSplit {
}
export declare class WppIconSport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSport, "wpp-icon-sport-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSport extends Components.WppIconSport {
}
export declare class WppIconSpreadsheet {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpreadsheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpreadsheet, "wpp-icon-spreadsheet-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSpreadsheet extends Components.WppIconSpreadsheet {
}
export declare class WppIconSquare {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSquare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSquare, "wpp-icon-square-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSquare extends Components.WppIconSquare {
}
export declare class WppIconSquareHint {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSquareHint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSquareHint, "wpp-icon-square-hint-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSquareHint extends Components.WppIconSquareHint {
}
export declare class WppIconStatisticDocument {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStatisticDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStatisticDocument, "wpp-icon-statistic-document-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconStatisticDocument extends Components.WppIconStatisticDocument {
}
export declare class WppIconSticker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSticker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSticker, "wpp-icon-sticker-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSticker extends Components.WppIconSticker {
}
export declare class WppIconStop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStop, "wpp-icon-stop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconStop extends Components.WppIconStop {
}
export declare class WppIconStrikeThrough {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStrikeThrough, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStrikeThrough, "wpp-icon-strike-through-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconStrikeThrough extends Components.WppIconStrikeThrough {
}
export declare class WppIconStyleguide {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStyleguide, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStyleguide, "wpp-icon-styleguide-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconStyleguide extends Components.WppIconStyleguide {
}
export declare class WppIconSubItems {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSubItems, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSubItems, "wpp-icon-sub-items-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSubItems extends Components.WppIconSubItems {
}
export declare class WppIconSubscribe {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSubscribe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSubscribe, "wpp-icon-subscribe-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSubscribe extends Components.WppIconSubscribe {
}
export declare class WppIconSuccess {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSuccess, "wpp-icon-success-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSuccess extends Components.WppIconSuccess {
}
export declare class WppIconSupermarket {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupermarket, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupermarket, "wpp-icon-supermarket-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSupermarket extends Components.WppIconSupermarket {
}
export declare class WppIconSupport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupport, "wpp-icon-support-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSupport extends Components.WppIconSupport {
}
export declare class WppIconSupportChat {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupportChat, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupportChat, "wpp-icon-support-chat-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSupportChat extends Components.WppIconSupportChat {
}
export declare class WppIconSurprise {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSurprise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSurprise, "wpp-icon-surprise-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSurprise extends Components.WppIconSurprise {
}
export declare class WppIconSymbols {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSymbols, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSymbols, "wpp-icon-symbols-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSymbols extends Components.WppIconSymbols {
}
export declare class WppIconSync {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSync, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSync, "wpp-icon-sync-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconSync extends Components.WppIconSync {
}
export declare class WppIconTableDefault {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableDefault, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableDefault, "wpp-icon-table-default-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableDefault extends Components.WppIconTableDefault {
}
export declare class WppIconTableDismiss {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableDismiss, "wpp-icon-table-dismiss-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableDismiss extends Components.WppIconTableDismiss {
}
export declare class WppIconTableEdit {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableEdit, "wpp-icon-table-edit-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableEdit extends Components.WppIconTableEdit {
}
export declare class WppIconTableLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableLink, "wpp-icon-table-link-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableLink extends Components.WppIconTableLink {
}
export declare class WppIconTableSimple {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSimple, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSimple, "wpp-icon-table-simple-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSimple extends Components.WppIconTableSimple {
}
export declare class WppIconTableSort {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSort, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSort, "wpp-icon-table-sort-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSort extends Components.WppIconTableSort {
}
export declare class WppIconTableSortAsc {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAsc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAsc, "wpp-icon-table-sort-asc-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortAsc extends Components.WppIconTableSortAsc {
}
export declare class WppIconTableSortAscHover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAscHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAscHover, "wpp-icon-table-sort-asc-hover-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortAscHover extends Components.WppIconTableSortAscHover {
}
export declare class WppIconTableSortAscPressed {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAscPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAscPressed, "wpp-icon-table-sort-asc-pressed-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortAscPressed extends Components.WppIconTableSortAscPressed {
}
export declare class WppIconTableSortDesc {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDesc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDesc, "wpp-icon-table-sort-desc-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortDesc extends Components.WppIconTableSortDesc {
}
export declare class WppIconTableSortDescHover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDescHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDescHover, "wpp-icon-table-sort-desc-hover-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortDescHover extends Components.WppIconTableSortDescHover {
}
export declare class WppIconTableSortDescPressed {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDescPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDescPressed, "wpp-icon-table-sort-desc-pressed-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortDescPressed extends Components.WppIconTableSortDescPressed {
}
export declare class WppIconTableSortHover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortHover, "wpp-icon-table-sort-hover-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortHover extends Components.WppIconTableSortHover {
}
export declare class WppIconTableSortPressed {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortPressed, "wpp-icon-table-sort-pressed-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTableSortPressed extends Components.WppIconTableSortPressed {
}
export declare class WppIconTablet {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTablet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTablet, "wpp-icon-tablet-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTablet extends Components.WppIconTablet {
}
export declare class WppIconTarget {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTarget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTarget, "wpp-icon-target-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTarget extends Components.WppIconTarget {
}
export declare class WppIconTaskList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTaskList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTaskList, "wpp-icon-task-list-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTaskList extends Components.WppIconTaskList {
}
export declare class WppIconTaskListSquare {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTaskListSquare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTaskListSquare, "wpp-icon-task-list-square-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTaskListSquare extends Components.WppIconTaskListSquare {
}
export declare class WppIconText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconText, "wpp-icon-text-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconText extends Components.WppIconText {
}
export declare class WppIconTextAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentCenter, "wpp-icon-text-alignment-center-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentCenter extends Components.WppIconTextAlignmentCenter {
}
export declare class WppIconTextAlignmentDistribute {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentDistribute, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentDistribute, "wpp-icon-text-alignment-distribute-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentDistribute extends Components.WppIconTextAlignmentDistribute {
}
export declare class WppIconTextAlignmentDistributeVertical {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentDistributeVertical, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentDistributeVertical, "wpp-icon-text-alignment-distribute-vertical-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentDistributeVertical extends Components.WppIconTextAlignmentDistributeVertical {
}
export declare class WppIconTextAlignmentJustify {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentJustify, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentJustify, "wpp-icon-text-alignment-justify-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentJustify extends Components.WppIconTextAlignmentJustify {
}
export declare class WppIconTextAlignmentJustifyLow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentJustifyLow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentJustifyLow, "wpp-icon-text-alignment-justify-low-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentJustifyLow extends Components.WppIconTextAlignmentJustifyLow {
}
export declare class WppIconTextAlignmentLeft {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentLeft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentLeft, "wpp-icon-text-alignment-left-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentLeft extends Components.WppIconTextAlignmentLeft {
}
export declare class WppIconTextAlignmentRight {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentRight, "wpp-icon-text-alignment-right-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTextAlignmentRight extends Components.WppIconTextAlignmentRight {
}
export declare class WppIconTheatre {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTheatre, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTheatre, "wpp-icon-theatre-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTheatre extends Components.WppIconTheatre {
}
export declare class WppIconTick {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTick, "wpp-icon-tick-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTick extends Components.WppIconTick {
}
export declare class WppIconTourism {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTourism, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTourism, "wpp-icon-tourism-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTourism extends Components.WppIconTourism {
}
export declare class WppIconTrain {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrain, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrain, "wpp-icon-train-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTrain extends Components.WppIconTrain {
}
export declare class WppIconTranslate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTranslate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTranslate, "wpp-icon-translate-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTranslate extends Components.WppIconTranslate {
}
export declare class WppIconTrash {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrash, "wpp-icon-trash-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTrash extends Components.WppIconTrash {
}
export declare class WppIconTrendAscend {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrendAscend, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrendAscend, "wpp-icon-trend-ascend-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTrendAscend extends Components.WppIconTrendAscend {
}
export declare class WppIconTrendDescent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrendDescent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrendDescent, "wpp-icon-trend-descent-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTrendDescent extends Components.WppIconTrendDescent {
}
export declare class WppIconTriangle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTriangle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTriangle, "wpp-icon-triangle-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTriangle extends Components.WppIconTriangle {
}
export declare class WppIconTriangleFill {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTriangleFill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTriangleFill, "wpp-icon-triangle-fill-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTriangleFill extends Components.WppIconTriangleFill {
}
export declare class WppIconTune {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTune, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTune, "wpp-icon-tune-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTune extends Components.WppIconTune {
}
export declare class WppIconTv {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTv, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTv, "wpp-icon-tv-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTv extends Components.WppIconTv {
}
export declare class WppIconTwentyFourHours {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTwentyFourHours, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTwentyFourHours, "wpp-icon-twenty-four-hours-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconTwentyFourHours extends Components.WppIconTwentyFourHours {
}
export declare class WppIconUnderline {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnderline, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnderline, "wpp-icon-underline-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUnderline extends Components.WppIconUnderline {
}
export declare class WppIconUndo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUndo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUndo, "wpp-icon-undo-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUndo extends Components.WppIconUndo {
}
export declare class WppIconUnlink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnlink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnlink, "wpp-icon-unlink-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUnlink extends Components.WppIconUnlink {
}
export declare class WppIconUnorderedList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnorderedList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnorderedList, "wpp-icon-unordered-list-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUnorderedList extends Components.WppIconUnorderedList {
}
export declare class WppIconUnpinned {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnpinned, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnpinned, "wpp-icon-unpinned-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUnpinned extends Components.WppIconUnpinned {
}
export declare class WppIconUpload {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUpload, "wpp-icon-upload-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUpload extends Components.WppIconUpload {
}
export declare class WppIconUser {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUser, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUser, "wpp-icon-user-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUser extends Components.WppIconUser {
}
export declare class WppIconUserAdd {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserAdd, "wpp-icon-user-add-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserAdd extends Components.WppIconUserAdd {
}
export declare class WppIconUserBlock {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserBlock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserBlock, "wpp-icon-user-block-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserBlock extends Components.WppIconUserBlock {
}
export declare class WppIconUserChat {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserChat, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserChat, "wpp-icon-user-chat-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserChat extends Components.WppIconUserChat {
}
export declare class WppIconUserSearch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserSearch, "wpp-icon-user-search-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserSearch extends Components.WppIconUserSearch {
}
export declare class WppIconUserStarred {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserStarred, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserStarred, "wpp-icon-user-starred-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserStarred extends Components.WppIconUserStarred {
}
export declare class WppIconUserTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserTag, "wpp-icon-user-tag-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconUserTag extends Components.WppIconUserTag {
}
export declare class WppIconVideoBlocked {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoBlocked, "wpp-icon-video-blocked-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconVideoBlocked extends Components.WppIconVideoBlocked {
}
export declare class WppIconVideoClip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoClip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoClip, "wpp-icon-video-clip-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconVideoClip extends Components.WppIconVideoClip {
}
export declare class WppIconVideoOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoOff, "wpp-icon-video-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconVideoOff extends Components.WppIconVideoOff {
}
export declare class WppIconVideoOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoOn, "wpp-icon-video-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconVideoOn extends Components.WppIconVideoOn {
}
export declare class WppIconVr {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVr, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVr, "wpp-icon-vr-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconVr extends Components.WppIconVr {
}
export declare class WppIconWarning {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWarning, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWarning, "wpp-icon-warning-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWarning extends Components.WppIconWarning {
}
export declare class WppIconWifiOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiOff, "wpp-icon-wifi-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWifiOff extends Components.WppIconWifiOff {
}
export declare class WppIconWifiOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiOn, "wpp-icon-wifi-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWifiOn extends Components.WppIconWifiOn {
}
export declare class WppIconWifiWarning {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiWarning, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiWarning, "wpp-icon-wifi-warning-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWifiWarning extends Components.WppIconWifiWarning {
}
export declare class WppIconWithHand {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWithHand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWithHand, "wpp-icon-with-hand-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWithHand extends Components.WppIconWithHand {
}
export declare class WppIconWorkshop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWorkshop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWorkshop, "wpp-icon-workshop-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWorkshop extends Components.WppIconWorkshop {
}
export declare class WppIconWrapOff {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWrapOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWrapOff, "wpp-icon-wrap-off-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWrapOff extends Components.WppIconWrapOff {
}
export declare class WppIconWrapOn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWrapOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWrapOn, "wpp-icon-wrap-on-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconWrapOn extends Components.WppIconWrapOn {
}
export declare class WppIconYen {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconYen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconYen, "wpp-icon-yen-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconYen extends Components.WppIconYen {
}
export declare class WppIconYuan {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconYuan, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconYuan, "wpp-icon-yuan-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconYuan extends Components.WppIconYuan {
}
export declare class WppIconZoo {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoo, "wpp-icon-zoo-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconZoo extends Components.WppIconZoo {
}
export declare class WppIconZoomIn {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoomIn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoomIn, "wpp-icon-zoom-in-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconZoomIn extends Components.WppIconZoomIn {
}
export declare class WppIconZoomOut {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoomOut, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoomOut, "wpp-icon-zoom-out-v2-22-0", never, { "color": "color"; "height": "height"; "size": "size"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppIconZoomOut extends Components.WppIconZoomOut {
}
export declare class WppInlineEdit {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInlineEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInlineEdit, "wpp-inline-edit-v2-22-0", never, { "dropdownConfig": "dropdownConfig"; "inputWidth": "inputWidth"; "mode": "mode"; "placeholder": "placeholder"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppInlineEdit extends Components.WppInlineEdit {
    /**
     * Emitted when the inline edit mode changes
     */
    wppModeChange: EventEmitter<CustomEvent<IWppInlineEditInlineEditChangeModeEventDetail>>;
}
export declare class WppInlineMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInlineMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInlineMessage, "wpp-inline-message-v2-22-0", never, { "actionBtnText": "actionBtnText"; "hideCloseBtn": "hideCloseBtn"; "message": "message"; "showTooltipFrom": "showTooltipFrom"; "size": "size"; "titleText": "titleText"; "tooltipConfig": "tooltipConfig"; "type": "type"; }, {}, never, ["*"], false>;
}
export declare interface WppInlineMessage extends Components.WppInlineMessage {
    /**
     * Emitted when the action button is clicked. This event is emitted only for the inline-messages with size="l".
     */
    wppClickActionBtn: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the close button is clicked. This event is emitted only for the inline-messages with size="l".
     */
    wppClickCloseBtn: EventEmitter<CustomEvent<void>>;
}
export declare class WppInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInput, "wpp-input-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "autocomplete": "autocomplete"; "disabled": "disabled"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "loading": "loading"; "locales": "locales"; "maskOptions": "maskOptions"; "maxLength": "maxLength"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "minLength": "minLength"; "name": "name"; "placeholder": "placeholder"; "readOnly": "readOnly"; "required": "required"; "size": "size"; "tooltipConfig": "tooltipConfig"; "type": "type"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppInput extends Components.WppInput {
    /**
     * Emitted when the input value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppInputInputChangeEventDetail>>;
    /**
     * Emitted when the input is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * New optional event that emits both raw and formatted values of the input.
  - `raw`: The unformatted input value, typically representing the actual data entered by the user.
  - `formatted`: The processed or masked value displayed in the input field, based on the applied mask or formatting rules.
  
  This event can be useful in cases where both raw and formatted values are needed,
  such as when handling currency, phone numbers, or other masked inputs.
  
  Unlike `wppChange`, which emits only the formatted value, `wppChangeExtra` provides
  both representations, allowing better control over data handling.
     */
    wppChangeExtra: EventEmitter<CustomEvent<IWppInputWppChangeExtraEventDetail>>;
}
export declare class WppInternalLabel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInternalLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInternalLabel, "wpp-internal-label-v2-22-0", never, { "description": "description"; "disabled": "disabled"; "labelText": "labelText"; "locales": "locales"; "optional": "optional"; "tooltipConfig": "tooltipConfig"; "typography": "typography"; }, {}, never, ["*"], false>;
}
export declare interface WppInternalLabel extends Components.WppInternalLabel {
}
export declare class WppLabel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLabel, "wpp-label-v2-22-0", never, { "config": "config"; "description": "description"; "disabled": "disabled"; "htmlFor": "htmlFor"; "optional": "optional"; "tooltipConfig": "tooltipConfig"; "typography": "typography"; }, {}, never, ["*"], false>;
}
export declare interface WppLabel extends Components.WppLabel {
}
export declare class WppListItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppListItem, "wpp-list-item-v2-22-0", never, { "active": "active"; "checkboxName": "checkboxName"; "checked": "checked"; "containerState": "containerState"; "disabled": "disabled"; "highlight": "highlight"; "isExtended": "isExtended"; "label": "label"; "labelTooltipConfig": "labelTooltipConfig"; "linkConfig": "linkConfig"; "multiple": "multiple"; "nonInteractive": "nonInteractive"; "selectable": "selectable"; "tooltipConfig": "tooltipConfig"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppListItem extends Components.WppListItem {
    /**
     * Emitted when the list item was clicked
     */
    wppChangeListItem: EventEmitter<CustomEvent<IWppListItemListItemChangeEventDetail>>;
}
export declare class WppLoadMore {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLoadMore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLoadMore, "wpp-load-more-v2-22-0", never, { "disabled": "disabled"; "incrementBy": "incrementBy"; "itemsLoaded": "itemsLoaded"; "loading": "loading"; "showProgressBar": "showProgressBar"; "totalItems": "totalItems"; }, {}, never, ["*"], false>;
}
export declare interface WppLoadMore extends Components.WppLoadMore {
    /**
     * Emitted when the "Load more" button is clicked.
     */
    wppClickLoadMore: EventEmitter<CustomEvent<IWppLoadMoreLoadMoreChangeEventDetail>>;
}
export declare class WppMenuContext {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMenuContext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMenuContext, "wpp-menu-context-v2-22-0", never, { "appendToListWrapper": "appendToListWrapper"; "dropdownConfig": "dropdownConfig"; "externalClass": "externalClass"; "listWidth": "listWidth"; }, {}, never, ["*"], false>;
}
export declare interface WppMenuContext extends Components.WppMenuContext {
}
export declare class WppMenuGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMenuGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMenuGroup, "wpp-menu-group-v2-22-0", never, { "header": "header"; "withDivider": "withDivider"; }, {}, never, ["*"], false>;
}
export declare interface WppMenuGroup extends Components.WppMenuGroup {
}
export declare class WppMenuList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMenuList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMenuList, "wpp-menu-list-v2-22-0", never, { "dropdownConfig": "dropdownConfig"; "shouldCloseOnOutsideClick": "shouldCloseOnOutsideClick"; }, {}, never, ["*"], false>;
}
export declare interface WppMenuList extends Components.WppMenuList {
}
export declare class WppModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppModal, "wpp-modal-v2-22-0", never, { "disableOutsideClick": "disableOutsideClick"; "formConfig": "formConfig"; "open": "open"; "size": "size"; "withTransparentOverlay": "withTransparentOverlay"; }, {}, never, ["*"], false>;
}
export declare interface WppModal extends Components.WppModal {
    /**
     * Handles the modal closing actions.
     */
    wppModalClose: EventEmitter<CustomEvent<IWppModalModalCloseDetails>>;
    /**
     * Event emitted when the open animation starts.
     */
    wppModalOpenStart: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the open animation ends.
     */
    wppModalOpenComplete: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the close animation starts.
     */
    wppModalCloseStart: EventEmitter<CustomEvent<IWppModalModalCloseDetails>>;
    /**
     * Event emitted when the close animation ends.
     */
    wppModalCloseComplete: EventEmitter<CustomEvent<IWppModalModalCloseDetails>>;
    /**
     * Handles the modal click actions. @deprecated - this prop will be deleted in version 3.0.0 . Use `wppModalOpenStart`/`wppModalOpenComplete` instead
     */
    wppModalOpen: EventEmitter<CustomEvent<void>>;
}
export declare class WppNavSidebar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavSidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavSidebar, "wpp-nav-sidebar-v2-22-0", never, { "activePath": "activePath"; "initialPath": "initialPath"; "nativeLink": "nativeLink"; }, {}, never, ["*"], false>;
}
export declare interface WppNavSidebar extends Components.WppNavSidebar {
    /**
     * Emitted when app routes change, return object like { path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppNavSidebarNavSidebarItemEventDetail>>;
}
export declare class WppNavSidebarItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavSidebarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavSidebarItem, "wpp-nav-sidebar-item-v2-22-0", never, { "active": "active"; "divide": "divide"; "expanded": "expanded"; "extended": "extended"; "groupTitle": "groupTitle"; "label": "label"; "maxTitleLengthWithSubItems": "maxTitleLengthWithSubItems"; "maxTitleLengthWithoutSubItems": "maxTitleLengthWithoutSubItems"; "nativeLink": "nativeLink"; "nestedItem": "nestedItem"; "path": "path"; "target": "target"; }, {}, never, ["*"], false>;
}
export declare interface WppNavSidebarItem extends Components.WppNavSidebarItem {
    /**
     * Emitted when the item path changes, return object like { path: '/home', label: 'Home' }
     */
    wppClickSidebarItem: EventEmitter<CustomEvent<IWppNavSidebarItemNavSidebarItemEventDetail>>;
}
export declare class WppNavigationItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavigationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavigationItem, "wpp-navigation-item-v2-22-0", never, { "active": "active"; "chevronOnly": "chevronOnly"; "extended": "extended"; "label": "label"; "menu": "menu"; "menuExpanded": "menuExpanded"; "nativeLink": "nativeLink"; "nestedItem": "nestedItem"; "path": "path"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppNavigationItem extends Components.WppNavigationItem {
    /**
     * Emitted when navigation item was clicked
     */
    wppActiveNavItemChanged: EventEmitter<CustomEvent<IWppNavigationItemNavigationItemEventDetail>>;
}
export declare class WppPagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPagination, "wpp-pagination-v2-22-0", never, { "activePageNumber": "activePageNumber"; "count": "count"; "dropdownConfig": "dropdownConfig"; "itemsPerPage": "itemsPerPage"; "locales": "locales"; "pageSelectThreshold": "pageSelectThreshold"; "selectedItemPerPage": "selectedItemPerPage"; }, {}, never, ["*"], false>;
}
export declare interface WppPagination extends Components.WppPagination {
    /**
     * Emitted when selected page or number of items per page changes
     */
    wppChange: EventEmitter<CustomEvent<IWppPaginationPaginationChangeEventDetail>>;
}
export declare class WppPaginationItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPaginationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPaginationItem, "wpp-pagination-item-v2-22-0", never, { "number": "number"; "selected": "selected"; }, {}, never, ["*"], false>;
}
export declare interface WppPaginationItem extends Components.WppPaginationItem {
    /**
     * Emitted active page number
     */
    wppPageChange: EventEmitter<CustomEvent<IWppPaginationItemPaginationPageChangeEventDetail>>;
}
export declare class WppPaginationSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPaginationSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPaginationSelect, "wpp-pagination-select-v2-22-0", never, { "activePageNumber": "activePageNumber"; "count": "count"; "pageSelectThreshold": "pageSelectThreshold"; }, {}, never, ["*"], false>;
}
export declare interface WppPaginationSelect extends Components.WppPaginationSelect {
    /**
     * Emitted active page number
     */
    wppChange: EventEmitter<CustomEvent<IWppPaginationSelectPaginationPageChangeEventDetail>>;
}
export declare class WppPill {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPill, "wpp-pill-v2-22-0", never, { "ariaProps": "ariaProps"; "checked": "checked"; "disabled": "disabled"; "label": "label"; "maxLength": "maxLength"; "name": "name"; "removable": "removable"; "size": "size"; "type": "type"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppPill extends Components.WppPill {
    /**
     * Emitted when the selected state changes.
     */
    wppClick: EventEmitter<CustomEvent<IWppPillPillChangeEventDetail>>;
    /**
     * Emitted when the pill is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the pill loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the close icon clicked
     */
    wppClose: EventEmitter<CustomEvent<MouseEvent>>;
    /**
     * Emitted when the drag icon pressed
     */
    wppDragPress: EventEmitter<CustomEvent<MouseEvent>>;
}
export declare class WppPillGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPillGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPillGroup, "wpp-pill-group-v2-22-0", never, { "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "name": "name"; "required": "required"; "size": "size"; "type": "type"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppPillGroup extends Components.WppPillGroup {
    /**
     * Emitted when the pill group value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppPillGroupPillGroupChangeEvent>>;
    /**
     * Emitted when the pill group receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the pill group loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppPopover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPopover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPopover, "wpp-popover-v2-22-0", never, { "closable": "closable"; "config": "config"; "dropdownWidth": "dropdownWidth"; "externalClass": "externalClass"; "shouldCloseOnOutsideClick": "shouldCloseOnOutsideClick"; }, {}, never, ["*"], false>;
}
export declare interface WppPopover extends Components.WppPopover {
}
export declare class WppProgressIndicator {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppProgressIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppProgressIndicator, "wpp-progress-indicator-v2-22-0", never, { "forceIntermediateEmptyState": "forceIntermediateEmptyState"; "isShowPercentage": "isShowPercentage"; "label": "label"; "value": "value"; "variant": "variant"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppProgressIndicator extends Components.WppProgressIndicator {
}
export declare class WppQuillStyles {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppQuillStyles, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppQuillStyles, "wpp-quill-styles-v2-22-0", never, {}, {}, never, ["*"], false>;
}
export declare interface WppQuillStyles extends Components.WppQuillStyles {
}
export declare class WppRadio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRadio, "wpp-radio-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "checked": "checked"; "disabled": "disabled"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "name": "name"; "required": "required"; "size": "size"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppRadio extends Components.WppRadio {
    /**
     * Emitted when the selected state changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppRadioRadioChangeEvent>>;
    /**
     * Emitted when the radio is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the radio loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppRadioGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRadioGroup, "wpp-radio-group-v2-22-0", never, { "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "required": "required"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppRadioGroup extends Components.WppRadioGroup {
    /**
     * Emitted when the radio group value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppRadioGroupRadioGroupChangeEvent>>;
    /**
     * Emitted when the group receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the group loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppRichtext {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtext, "wpp-richtext-v2-22-0", never, { "active": "active"; "autoFocus": "autoFocus"; "bounds": "bounds"; "charactersLimit": "charactersLimit"; "debug": "debug"; "disabled": "disabled"; "format": "format"; "formats": "formats"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "locales": "locales"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "modules": "modules"; "name": "name"; "placeholder": "placeholder"; "preserveWhitespace": "preserveWhitespace"; "required": "required"; "scrollingContainer": "scrollingContainer"; "strict": "strict"; "styles": "styles"; "tooltipConfig": "tooltipConfig"; "value": "value"; "warningThreshold": "warningThreshold"; }, {}, never, ["*"], false>;
}
export declare interface WppRichtext extends Components.WppRichtext {
    /**
     * Editor init event
     */
    wppInit: EventEmitter<CustomEvent<IWppRichtextQuillInstance>>;
    /**
     * Emitted when editor has content changes
     */
    wppChange: EventEmitter<CustomEvent<IWppRichtextRichtextChangeEventDetail>>;
    /**
     * Emitted when editor has selection changes
     */
    wppSelectionChange: EventEmitter<CustomEvent<IWppRichtextRichtextSelectionChangeEventDetail>>;
    /**
     * Emitted when editor receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when editor looses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when user requests uploading of files
     */
    wppUploadRequest: EventEmitter<CustomEvent<IWppRichtextRichtextUploadRequestEventDetail>>;
}
export declare class WppRichtextCommonStyles {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextCommonStyles, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextCommonStyles, "wpp-richtext-common-styles-v2-22-0", never, {}, {}, never, ["*"], false>;
}
export declare interface WppRichtextCommonStyles extends Components.WppRichtextCommonStyles {
}
export declare class WppRichtextHtml {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextHtml, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextHtml, "wpp-richtext-html-v2-22-0", never, { "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppRichtextHtml extends Components.WppRichtextHtml {
}
export declare class WppRichtextMarkdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextMarkdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextMarkdown, "wpp-richtext-markdown-v2-22-0", never, { "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppRichtextMarkdown extends Components.WppRichtextMarkdown {
}
export declare class WppRichtextView {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextView, "wpp-richtext-view-v2-22-0", never, { "debug": "debug"; "format": "format"; "formats": "formats"; "modules": "modules"; "preserveWhitespace": "preserveWhitespace"; "strict": "strict"; "styles": "styles"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppRichtextView extends Components.WppRichtextView {
}
export declare class WppSearch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSearch, "wpp-search-v2-22-0", never, { "autoFocus": "autoFocus"; "disabled": "disabled"; "dropdownConfig": "dropdownConfig"; "dropdownWidth": "dropdownWidth"; "getOptionId": "getOptionId"; "getOptionLabel": "getOptionLabel"; "highlight": "highlight"; "infinite": "infinite"; "infiniteLastPage": "infiniteLastPage"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "loadMore": "loadMore"; "loading": "loading"; "locales": "locales"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "name": "name"; "openDropdownOnClick": "openDropdownOnClick"; "placeholder": "placeholder"; "required": "required"; "showOptions": "showOptions"; "simpleSearch": "simpleSearch"; "size": "size"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppSearch extends Components.WppSearch {
    /**
     * Emitted when the search value changes
     */
    wppChange: EventEmitter<CustomEvent<IWppSearchSearchChangeEventDetail>>;
    /**
     * Emitted when the search receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the search loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the search value changes
     */
    wppSearchValueChange: EventEmitter<CustomEvent<string>>;
}
export declare class WppSegmentedControl {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSegmentedControl, "wpp-segmented-control-v2-22-0", never, { "hugContentOff": "hugContentOff"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "required": "required"; "size": "size"; "value": "value"; "variant": "variant"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppSegmentedControl extends Components.WppSegmentedControl {
    /**
     * Emitted when the active item has changed, emits value of the active item
     */
    wppChange: EventEmitter<CustomEvent<IWppSegmentedControlSegmentedControlChangeEventDetail>>;
    /**
     * Emitted when the segmented control receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the segmented control loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppSegmentedControlItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSegmentedControlItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSegmentedControlItem, "wpp-segmented-control-item-v2-22-0", never, { "counter": "counter"; "disabled": "disabled"; "hugContentOff": "hugContentOff"; "size": "size"; "value": "value"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppSegmentedControlItem extends Components.WppSegmentedControlItem {
    /**
     * Emitted when an item is clicked.
     */
    wppChangeSegmentedControlItem: EventEmitter<CustomEvent<IWppSegmentedControlItemSegmentedControlItemChangeEventDetail>>;
    /**
     * Emitted when an item is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when an item loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSelect, "wpp-select-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "displayValue": "displayValue"; "dropdownConfig": "dropdownConfig"; "dropdownPosition": "dropdownPosition"; "dropdownWidth": "dropdownWidth"; "enableStaticOptions": "enableStaticOptions"; "getOptionId": "getOptionId"; "getOptionLabel": "getOptionLabel"; "infinite": "infinite"; "infiniteLastPage": "infiniteLastPage"; "inputValue": "inputValue"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "loadMore": "loadMore"; "loading": "loading"; "locales": "locales"; "maxItemsToDisplay": "maxItemsToDisplay"; "maxMessageLength": "maxMessageLength"; "maximumSelectedItems": "maximumSelectedItems"; "message": "message"; "messageType": "messageType"; "name": "name"; "placeholder": "placeholder"; "required": "required"; "showSelectAllText": "showSelectAllText"; "size": "size"; "tooltipConfig": "tooltipConfig"; "truncate": "truncate"; "type": "type"; "value": "value"; "withCustomValue": "withCustomValue"; "withFolder": "withFolder"; "withSearch": "withSearch"; }, {}, never, ["*"], false>;
}
export declare interface WppSelect extends Components.WppSelect {
    /**
     * Emitted when an input value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppSelectSelectChangeEventDetail>>;
    /**
     * Emitted when the input is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the search value changes
     */
    wppSearchValueChange: EventEmitter<CustomEvent<string>>;
}
export declare class WppSideModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSideModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSideModal, "wpp-side-modal-v2-22-0", never, { "actionsConfig": "actionsConfig"; "backdropVisible": "backdropVisible"; "disableOutsideClick": "disableOutsideClick"; "formConfig": "formConfig"; "open": "open"; "size": "size"; "withBackButton": "withBackButton"; }, {}, never, ["*"], false>;
}
export declare interface WppSideModal extends Components.WppSideModal {
    /**
     * Handles the side modal closing actions.
     */
    wppSideModalClose: EventEmitter<CustomEvent<IWppSideModalSideModalCloseDetails>>;
    /**
     * Event emitted when the open animation starts.
     */
    wppSideModalOpenStart: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the open animation ends.
     */
    wppSideModalOpenComplete: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the close animation starts.
     */
    wppSideModalCloseStart: EventEmitter<CustomEvent<IWppSideModalSideModalCloseDetails>>;
    /**
     * Event emitted when the close animation ends.
     */
    wppSideModalCloseComplete: EventEmitter<CustomEvent<IWppSideModalSideModalCloseDetails>>;
    /**
     * Handles the side modal click actions. @deprecated - this prop will be deleted in version 3.0.0 . Use `wppSideModalOpenStart`/`wppSideModalOpenComplete` instead
     */
    wppSideModalOpen: EventEmitter<CustomEvent<void>>;
    /**
     * Handles the side modal back button click.
     */
    wppSideModalBackButtonClick: EventEmitter<CustomEvent<void>>;
}
export declare class WppSkeleton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSkeleton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSkeleton, "wpp-skeleton-v2-22-0", never, { "animation": "animation"; "height": "height"; "variant": "variant"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppSkeleton extends Components.WppSkeleton {
}
export declare class WppSlider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSlider, "wpp-slider-v2-22-0", never, { "ariaProps": "ariaProps"; "continuous": "continuous"; "disabled": "disabled"; "inputWidth": "inputWidth"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "marks": "marks"; "maskOptions": "maskOptions"; "max": "max"; "min": "min"; "name": "name"; "required": "required"; "size": "size"; "step": "step"; "type": "type"; "value": "value"; "withInput": "withInput"; "withValue": "withValue"; }, {}, never, ["*"], false>;
}
export declare interface WppSlider extends Components.WppSlider {
    /**
     * Emitted when the slider value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppSliderSliderChangeEventDetail>>;
    /**
     * Emitted when the slider is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the slider loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppSortButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSortButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSortButton, "wpp-sort-button-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "disabled": "disabled"; "name": "name"; }, {}, never, ["*"], false>;
}
export declare interface WppSortButton extends Components.WppSortButton {
}
export declare class WppSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSpinner, "wpp-spinner-v2-22-0", never, { "color": "color"; "size": "size"; }, {}, never, ["*"], false>;
}
export declare interface WppSpinner extends Components.WppSpinner {
}
export declare class WppStep {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStep, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStep, "wpp-step-v2-22-0", never, { "active": "active"; "completed": "completed"; "completedLine": "completedLine"; "error": "error"; "iconDescription": "iconDescription"; "index": "index"; "lastStep": "lastStep"; "locales": "locales"; "optional": "optional"; "orientation": "orientation"; "step": "step"; "substep": "substep"; "warning": "warning"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppStep extends Components.WppStep {
    /**
     * Emitted when the step was selected
     */
    wppStepChange: EventEmitter<CustomEvent<IWppStepStepChangeEventDetail>>;
}
export declare class WppStepper {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStepper, "wpp-stepper-v2-22-0", never, { "activeStep": "activeStep"; "completedSteps": "completedSteps"; "orientation": "orientation"; "stepAmount": "stepAmount"; "stepperWidth": "stepperWidth"; "useDecimalSubSteps": "useDecimalSubSteps"; "useResizeObserver": "useResizeObserver"; }, {}, never, ["*"], false>;
}
export declare interface WppStepper extends Components.WppStepper {
    /**
     * If `useDecimalSubSteps` is true, emits the `step`, `index`, and `substep` properties of the active step.
  The `step` value may include decimal values to represent sub-steps (e.g., 2.1, 3.2).
  The `substep` property is a boolean that indicates whether the current step is a sub-step.
  This ensures both the main step and its sub-steps can be identified and tracked accurately.
     */
    wppChange: EventEmitter<CustomEvent<IWppStepperStepChangeEventDetail>>;
}
export declare class WppStickyBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStickyBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStickyBar, "wpp-sticky-bar-v2-22-0", never, { "barTitle": "barTitle"; "buttons": "buttons"; "offsetFromTop": "offsetFromTop"; "scrollTreshold": "scrollTreshold"; "tabs": "tabs"; "variant": "variant"; "withBackButton": "withBackButton"; "zIndex": "zIndex"; }, {}, never, ["*"], false>;
}
export declare interface WppStickyBar extends Components.WppStickyBar {
    /**
     * Emitted when the back icon is clicked (icon on the left of the title).
     */
    wppClickBackIcon: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when one of the buttons provided in the "buttons" list is clicked. This event
  contains the details of the StickyBarButtonItem provided to the array.
     */
    wppClickBtn: EventEmitter<CustomEvent<IWppStickyBarStickyBarButtonItem>>;
    /**
     * Emitted when one of the tabs provided in the "tabs" list is clicked. This event
  contains the details of the tab item clicked.
     */
    wppClickTab: EventEmitter<CustomEvent<IWppStickyBarStickyBarTabItem>>;
}
export declare class WppTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTab, "wpp-tab-v2-22-0", never, { "active": "active"; "counter": "counter"; "disabled": "disabled"; "size": "size"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppTab extends Components.WppTab {
    /**
     * Emitted when an item is clicked.
     */
    wppChangeTabControlItem: EventEmitter<CustomEvent<IWppTabTabChangeEventDetail>>;
    /**
     * Emitted when an item is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when an item loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTabs, "wpp-tabs-v2-22-0", never, { "size": "size"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppTabs extends Components.WppTabs {
    /**
     * Emitted when the active tab has changed, emits index of the active tab
     */
    wppChange: EventEmitter<CustomEvent<IWppTabsTabsChangeEventDetail>>;
}
export declare class WppTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTag, "wpp-tag-v2-22-0", never, { "categoricalColorIndex": "categoricalColorIndex"; "label": "label"; "maxLabelLength": "maxLabelLength"; "tooltipConfig": "tooltipConfig"; "variant": "variant"; "withIcon": "withIcon"; }, {}, never, ["*"], false>;
}
export declare interface WppTag extends Components.WppTag {
}
export declare class WppTextareaInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTextareaInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTextareaInput, "wpp-textarea-input-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "charactersLimit": "charactersLimit"; "disabled": "disabled"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "locales": "locales"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "name": "name"; "placeholder": "placeholder"; "required": "required"; "rows": "rows"; "size": "size"; "value": "value"; "warningThreshold": "warningThreshold"; }, {}, never, ["*"], false>;
}
export declare interface WppTextareaInput extends Components.WppTextareaInput {
    /**
     * Emitted when the textarea value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppTextareaInputTextareaInputChangeEventDetail>>;
    /**
     * Emitted when the textarea is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the textarea loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppTimePicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTimePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTimePicker, "wpp-time-picker-v2-22-0", never, { "disabled": "disabled"; "dropdownConfig": "dropdownConfig"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "maxMessageLength": "maxMessageLength"; "message": "message"; "messageType": "messageType"; "minutesInterval": "minutesInterval"; "name": "name"; "placeholder": "placeholder"; "required": "required"; "size": "size"; "tooltipConfig": "tooltipConfig"; "value": "value"; "width": "width"; }, {}, never, ["*"], false>;
}
export declare interface WppTimePicker extends Components.WppTimePicker {
    /**
     * Emitted when the input receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the dropdown of the time picker closes. Contains details about the current value of the datepicker.
     */
    wppChange: EventEmitter<CustomEvent<IWppTimePickerTimePickerChangeEventDetails>>;
    /**
     * Emitted when the "cross" icon is clicked and the value of the time picker is cleared.
     */
    wppClear: EventEmitter<CustomEvent<IWppTimePickerTimePickerChangeEventDetails>>;
}
export declare class WppToast {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToast, "wpp-toast-v2-22-0", never, { "duration": "duration"; "header": "header"; "icon": "icon"; "index": "index"; "maxMessageLines": "maxMessageLines"; "message": "message"; "primaryBtn": "primaryBtn"; "type": "type"; "variant": "variant"; }, {}, never, ["*"], false>;
}
export declare interface WppToast extends Components.WppToast {
    /**
     * Emitted when the toast index is displayed.
     */
    wppToastComplete: EventEmitter<CustomEvent<IWppToastToastCompleteDetail>>;
}
export declare class WppToastContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToastContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToastContainer, "wpp-toast-container-v2-22-0", never, { "maxToastsToDisplay": "maxToastsToDisplay"; }, {}, never, ["*"], false>;
}
export declare interface WppToastContainer extends Components.WppToastContainer {
}
export declare class WppToggle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToggle, "wpp-toggle-v2-22-0", never, { "ariaProps": "ariaProps"; "autoFocus": "autoFocus"; "checked": "checked"; "controlled": "controlled"; "disabled": "disabled"; "labelConfig": "labelConfig"; "labelTooltipConfig": "labelTooltipConfig"; "name": "name"; "required": "required"; "size": "size"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppToggle extends Components.WppToggle {
    /**
     * Emitted when toggle state changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppToggleToggleChangeEvent>>;
    /**
     * Emitted when the toggle is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the toggle loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTooltip, "wpp-tooltip-v2-22-0", never, { "config": "config"; "dropdownWidth": "dropdownWidth"; "error": "error"; "externalClass": "externalClass"; "header": "header"; "text": "text"; "theme": "theme"; "value": "value"; "warning": "warning"; "wordBreak": "wordBreak"; }, {}, never, ["*"], false>;
}
export declare interface WppTooltip extends Components.WppTooltip {
}
export declare class WppTopbar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTopbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTopbar, "wpp-topbar-v2-22-0", never, { "nativeLink": "nativeLink"; "navigation": "navigation"; "value": "value"; }, {}, never, ["*"], false>;
}
export declare interface WppTopbar extends Components.WppTopbar {
    /**
     * Emitted when topbar item was changed, return object like { value: 'home', path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppTopbarTopbarChangeEventDetail>>;
}
export declare class WppTopbarItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTopbarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTopbarItem, "wpp-topbar-item-v2-22-0", never, { "active": "active"; "activeItems": "activeItems"; "firstLevel": "firstLevel"; "menu": "menu"; "nativeLink": "nativeLink"; "navigation": "navigation"; }, {}, never, ["*"], false>;
}
export declare interface WppTopbarItem extends Components.WppTopbarItem {
    /**
     * Emitted when topbar item was changed
     */
    wppActiveTopbarItemChange: EventEmitter<CustomEvent<IWppTopbarItemNavigationItemEventDetail>>;
}
export declare class WppTree {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTree, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTree, "wpp-tree-v2-22-0", never, { "data": "data"; "defaultSelectedIds": "defaultSelectedIds"; "disableOpenCloseAnimation": "disableOpenCloseAnimation"; "disableSearchHighlight": "disableSearchHighlight"; "loading": "loading"; "locales": "locales"; "multiple": "multiple"; "search": "search"; "searchConfig": "searchConfig"; "skeletonNumberItems": "skeletonNumberItems"; "withItemsTruncation": "withItemsTruncation"; }, {}, never, ["*"], false>;
}
export declare interface WppTree extends Components.WppTree {
    /**
     * Emitted when tree have changed it's state
     */
    wppChange: EventEmitter<CustomEvent<IWppTreeTreeChangeEventDetail>>;
    /**
     * Emitted when click on item actions(icons) was occurred
     */
    wppActionClick: EventEmitter<CustomEvent<IWppTreeTreeActionClickEventDetail>>;
}
export declare class WppTreeItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTreeItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTreeItem, "wpp-tree-item-v2-22-0", never, { "disableOpenCloseAnimation": "disableOpenCloseAnimation"; "disableSearchHighlight": "disableSearchHighlight"; "endContent": "endContent"; "highlightOptions": "highlightOptions"; "item": "item"; "level": "level"; "multiple": "multiple"; "search": "search"; "text": "text"; "transformSearchQuery": "transformSearchQuery"; "withItemsTruncation": "withItemsTruncation"; }, {}, never, ["*"], false>;
}
export declare interface WppTreeItem extends Components.WppTreeItem {
    /**
     * Emitted updated item details
     */
    wppTreeItemOpenChange: EventEmitter<CustomEvent<IWppTreeItemTreeType>>;
    /**
     * Emitted when updated item selectable state
     */
    wppTreeItemSelectChange: EventEmitter<CustomEvent<IWppTreeItemTreeType>>;
}
export declare class WppTypography {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTypography, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTypography, "wpp-typography-v2-22-0", never, { "tag": "tag"; "type": "type"; }, {}, never, ["*"], false>;
}
export declare interface WppTypography extends Components.WppTypography {
}
