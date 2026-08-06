import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import type { Components } from '@wppopen/components-library/components';
import type { AccordionSectionChangeEventDetail as IWppAccordionAccordionSectionChangeEventDetail } from '@wppopen/components-library/components';
import type { ArtefactAction as IWppArtefactArtefactAction } from '@wppopen/components-library/components';
import type { AutocompleteChangeEventDetail as IWppAutocompleteAutocompleteChangeEventDetail } from '@wppopen/components-library/components';
import type { AvatarChangeEventDetail as IWppAvatarAvatarChangeEventDetail } from '@wppopen/components-library/components';
import type { AvatarGroupChangeEventDetail as IWppAvatarGroupAvatarGroupChangeEventDetail } from '@wppopen/components-library/components';
import type { BannerChangeEventDetail as IWppBannerBannerChangeEventDetail } from '@wppopen/components-library/components';
import type { BasicNodeAction as IWppBasicNodeBasicNodeAction } from '@wppopen/components-library/components';
import type { BreadcrumbItemEventDetails as IWppBreadcrumbBreadcrumbItemEventDetails } from '@wppopen/components-library/components';
import type { CardChangeEventDetail as IWppCardCardChangeEventDetail } from '@wppopen/components-library/components';
import type { CardGroupChangeEventDetail as IWppCardGroupCardGroupChangeEventDetail } from '@wppopen/components-library/components';
import type { SendEventDetail as IWppChatConversationSendEventDetail } from '@wppopen/components-library/components';
import type { FileUploadEventDetail as IWppChatConversationFileUploadEventDetail } from '@wppopen/components-library/components';
import type { MessageChangeEventDetail as IWppChatConversationMessageChangeEventDetail } from '@wppopen/components-library/components';
import type { ActionsMenuToggleEventDetail as IWppChatConversationActionsMenuToggleEventDetail } from '@wppopen/components-library/components';
import type { ChatInputActionItemClickEventDetail as IWppChatConversationChatInputActionItemClickEventDetail } from '@wppopen/components-library/components';
import type { SendEventDetail as IWppChatInputSendEventDetail } from '@wppopen/components-library/components';
import type { ChatInputMicEventDetail as IWppChatInputChatInputMicEventDetail } from '@wppopen/components-library/components';
import type { FileUploadEventDetail as IWppChatInputFileUploadEventDetail } from '@wppopen/components-library/components';
import type { MessageChangeEventDetail as IWppChatInputMessageChangeEventDetail } from '@wppopen/components-library/components';
import type { ActionsMenuToggleEventDetail as IWppChatInputActionsMenuToggleEventDetail } from '@wppopen/components-library/components';
import type { ChatInputActionItemClickEventDetail as IWppChatInputChatInputActionItemClickEventDetail } from '@wppopen/components-library/components';
import type { ChatInputSelectableModel as IWppChatInputChatInputSelectableModel } from '@wppopen/components-library/components';
import type { ChatNodeMicEventDetail as IWppChatNodeChatNodeMicEventDetail } from '@wppopen/components-library/components';
import type { ChatNodeAction as IWppChatNodeChatNodeAction } from '@wppopen/components-library/components';
import type { ChatNodeSelectableModel as IWppChatNodeChatNodeSelectableModel } from '@wppopen/components-library/components';
import type { ChatNodeMessageActionClickDetail as IWppChatNodeChatNodeMessageActionClickDetail } from '@wppopen/components-library/components';
import type { CheckboxChangeEvent as IWppCheckboxCheckboxChangeEvent } from '@wppopen/components-library/components';
import type { CheckboxGroupChangeEvent as IWppCheckboxGroupCheckboxGroupChangeEvent } from '@wppopen/components-library/components';
import type { ChangeColorEventDetails as IWppColorPickerChangeColorEventDetails } from '@wppopen/components-library/components';
import type { CounterChangeEventDetail as IWppCounterCounterChangeEventDetail } from '@wppopen/components-library/components';
import type { DatePickerEventDetail as IWppDatepickerDatePickerEventDetail } from '@wppopen/components-library/components';
import type { DatePickerClearEventDetail as IWppDatepickerDatePickerClearEventDetail } from '@wppopen/components-library/components';
import type { ExpandableCardSectionChangeEventDetail as IWppExpandableCardExpandableCardSectionChangeEventDetail } from '@wppopen/components-library/components';
import type { FileUploadEventDetail as IWppFileUploadFileUploadEventDetail } from '@wppopen/components-library/components';
import type { FileUploadItemEventDetail as IWppFileUploadFileUploadItemEventDetail } from '@wppopen/components-library/components';
import type { FileUploadErrorEventDetails as IWppFileUploadFileUploadErrorEventDetails } from '@wppopen/components-library/components';
import type { FullScreenModalCloseDetails as IWppFullScreenModalFullScreenModalCloseDetails } from '@wppopen/components-library/components';
import type { InlineEditChangeModeEventDetail as IWppInlineEditInlineEditChangeModeEventDetail } from '@wppopen/components-library/components';
import type { InlineEditConfirmDetail as IWppInlineEditInlineEditConfirmDetail } from '@wppopen/components-library/components';
import type { InputChangeEventDetail as IWppInputInputChangeEventDetail } from '@wppopen/components-library/components';
import type { WppChangeExtraEventDetail as IWppInputWppChangeExtraEventDetail } from '@wppopen/components-library/components';
import type { LegacyAutocompleteChangeEventDetail as IWppLegacyAutocompleteLegacyAutocompleteChangeEventDetail } from '@wppopen/components-library/components';
import type { AvatarChangeEventDetail as IWppLegacyAvatarAvatarChangeEventDetail } from '@wppopen/components-library/components';
import type { CounterChangeEventDetail as IWppLegacyCounterCounterChangeEventDetail } from '@wppopen/components-library/components';
import type { StickyBarButtonItem as IWppLegacyStickyBarStickyBarButtonItem } from '@wppopen/components-library/components';
import type { StickyBarTabItem as IWppLegacyStickyBarStickyBarTabItem } from '@wppopen/components-library/components';
import type { TopbarChangeEventDetail as IWppLegacyTopbarTopbarChangeEventDetail } from '@wppopen/components-library/components';
import type { NavigationItemEventDetail as IWppLegacyTopbarItemNavigationItemEventDetail } from '@wppopen/components-library/components';
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
import type { PopoverInputChangeEventDetail as IWppPopoverPopoverInputChangeEventDetail } from '@wppopen/components-library/components';
import type { PopoverClearEventDetail as IWppPopoverPopoverClearEventDetail } from '@wppopen/components-library/components';
import type { RadioChangeEvent as IWppRadioRadioChangeEvent } from '@wppopen/components-library/components';
import type { RadioGroupChangeEvent as IWppRadioGroupRadioGroupChangeEvent } from '@wppopen/components-library/components';
import type { Editor as IWppRichtextEditor } from '@wppopen/components-library/components';
import type { TiptapChangeEventDetail as IWppRichtextTiptapChangeEventDetail } from '@wppopen/components-library/components';
import type { TiptapSelectionChangeEventDetail as IWppRichtextTiptapSelectionChangeEventDetail } from '@wppopen/components-library/components';
import type { TiptapUploadRequestEventDetail as IWppRichtextTiptapUploadRequestEventDetail } from '@wppopen/components-library/components';
import type { SearchChangeEventDetail as IWppSearchSearchChangeEventDetail } from '@wppopen/components-library/components';
import type { SegmentedControlChangeEventDetail as IWppSegmentedControlSegmentedControlChangeEventDetail } from '@wppopen/components-library/components';
import type { SegmentedControlItemChangeEventDetail as IWppSegmentedControlItemSegmentedControlItemChangeEventDetail } from '@wppopen/components-library/components';
import type { SelectChangeEventDetails as IWppSelectSelectChangeEventDetails } from '@wppopen/components-library/components';
import type { SideModalCloseDetails as IWppSideModalSideModalCloseDetails } from '@wppopen/components-library/components';
import type { SidePanelCloseDetails as IWppSidePanelSidePanelCloseDetails } from '@wppopen/components-library/components';
import type { SidePanelResizeDetails as IWppSidePanelSidePanelResizeDetails } from '@wppopen/components-library/components';
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
    protected el: HTMLWppAccordionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAccordion, "wpp-accordion-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "expandedByDefault": { "alias": "expandedByDefault"; "required": false; }; "size": { "alias": "size"; "required": false; }; "withDivider": { "alias": "withDivider"; "required": false; }; "withTag": { "alias": "withTag"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppActionButton {
    protected z: NgZone;
    protected el: HTMLWppActionButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppActionButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppActionButton, "wpp-action-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "name": { "alias": "name"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppActionButton extends Components.WppActionButton {
}
export declare class WppArtefact {
    protected z: NgZone;
    protected el: HTMLWppArtefactElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppArtefact, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppArtefact, "wpp-artefact-v4-3-0", never, { "actions": { "alias": "actions"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "artefactTitle": { "alias": "artefactTitle"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "pinActionPosition": { "alias": "pinActionPosition"; "required": false; }; "size": { "alias": "size"; "required": false; }; "titleIcon": { "alias": "titleIcon"; "required": false; }; "withPinAction": { "alias": "withPinAction"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppArtefact extends Components.WppArtefact {
    /**
     * Emitted when an action is clicked. The event detail contains the `ArtefactAction` object corresponding to the clicked action.
  This event is emitted for both default actions (copy, download, delete) and additional actions provided via the `actions` prop.
     */
    wppActionClick: EventEmitter<CustomEvent<IWppArtefactArtefactAction>>;
}
export declare class WppAutocomplete {
    protected z: NgZone;
    protected el: HTMLWppAutocompleteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAutocomplete, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAutocomplete, "wpp-autocomplete-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "displayBtnWhenListEmpty": { "alias": "displayBtnWhenListEmpty"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "getItemKey": { "alias": "getItemKey"; "required": false; }; "infinite": { "alias": "infinite"; "required": false; }; "infiniteLastPage": { "alias": "infiniteLastPage"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "limitSelectedItems": { "alias": "limitSelectedItems"; "required": false; }; "list": { "alias": "list"; "required": false; }; "loadMore": { "alias": "loadMore"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "persistentSearch": { "alias": "persistentSearch"; "required": false; }; "pillTooltipConfig": { "alias": "pillTooltipConfig"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showCreateNewElement": { "alias": "showCreateNewElement"; "required": false; }; "simpleSearch": { "alias": "simpleSearch"; "required": false; }; "size": { "alias": "size"; "required": false; }; "suggestions": { "alias": "suggestions"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    wppBlur: EventEmitter<CustomEvent<void>>;
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
    protected el: HTMLWppAvatarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAvatar, "wpp-avatar-v4-3-0", never, { "amountOfHiddenAvatars": { "alias": "amountOfHiddenAvatars"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "color": { "alias": "color"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "interactable": { "alias": "interactable"; "required": false; }; "name": { "alias": "name"; "required": false; }; "role": { "alias": "role"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "withTooltip": { "alias": "withTooltip"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppAvatar extends Components.WppAvatar {
    /**
     * Emitted when the avatar item is clicked.
     */
    wppClick: EventEmitter<CustomEvent<IWppAvatarAvatarChangeEventDetail>>;
}
export declare class WppAvatarGroup {
    protected z: NgZone;
    protected el: HTMLWppAvatarGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppAvatarGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppAvatarGroup, "wpp-avatar-group-v4-3-0", never, { "avatars": { "alias": "avatars"; "required": false; }; "avatarsIndex": { "alias": "avatarsIndex"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "maxAvatarsToDisplay": { "alias": "maxAvatarsToDisplay"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "withTooltip": { "alias": "withTooltip"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppAvatarGroup extends Components.WppAvatarGroup {
    /**
     * Emitted when the avatar item is clicked.
     */
    wppSelectItem: EventEmitter<CustomEvent<IWppAvatarGroupAvatarGroupChangeEventDetail>>;
}
export declare class WppBackToTopButton {
    protected z: NgZone;
    protected el: HTMLWppBackToTopButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBackToTopButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBackToTopButton, "wpp-back-to-top-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppBackToTopButton extends Components.WppBackToTopButton {
}
export declare class WppBanner {
    protected z: NgZone;
    protected el: HTMLWppBannerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBanner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBanner, "wpp-banner-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "role": { "alias": "role"; "required": false; }; "show": { "alias": "show"; "required": false; }; "type": { "alias": "type"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppBanner extends Components.WppBanner {
    /**
     * Emitted when the banner state changes.
     */
    wppClose: EventEmitter<CustomEvent<IWppBannerBannerChangeEventDetail>>;
}
export declare class WppBasicNode {
    protected z: NgZone;
    protected el: HTMLWppBasicNodeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBasicNode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBasicNode, "wpp-basic-node-v4-3-0", never, { "actions": { "alias": "actions"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "isReRun": { "alias": "isReRun"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "nodeTitle": { "alias": "nodeTitle"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppBasicNode extends Components.WppBasicNode {
    /**
     * Emitted when an action is clicked. The event detail contains the `BasicNodeAction` object corresponding to the clicked action.
     */
    wppActionClick: EventEmitter<CustomEvent<IWppBasicNodeBasicNodeAction>>;
}
export declare class WppBreadcrumb {
    protected z: NgZone;
    protected el: HTMLWppBreadcrumbElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppBreadcrumb, "wpp-breadcrumb-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "backBtnLabel": { "alias": "backBtnLabel"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "items": { "alias": "items"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxLabelLength": { "alias": "maxLabelLength"; "required": false; }; "middleTruncation": { "alias": "middleTruncation"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppBreadcrumb extends Components.WppBreadcrumb {
    /**
     * Emitted when route changes, return object like { path: '/home', label: 'Home' }
  For back variant, emits { path: 'back', label: backBtnLabel }
     */
    wppChange: EventEmitter<CustomEvent<IWppBreadcrumbBreadcrumbItemEventDetails>>;
}
export declare class WppButton {
    protected z: NgZone;
    protected el: HTMLWppButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppButton, "wpp-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formAction": { "alias": "formAction"; "required": false; }; "formEncType": { "alias": "formEncType"; "required": false; }; "formMethod": { "alias": "formMethod"; "required": false; }; "formNoValidate": { "alias": "formNoValidate"; "required": false; }; "formTarget": { "alias": "formTarget"; "required": false; }; "inverted": { "alias": "inverted"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppButton extends Components.WppButton {
    /**
     * Emitted when the button loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the button receives focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppCard {
    protected z: NgZone;
    protected el: HTMLWppCardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCard, "wpp-card-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "background": { "alias": "background"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "interactive": { "alias": "interactive"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppCardGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCardGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCardGroup, "wpp-card-group-v4-3-0", never, { "allowEmptySelection": { "alias": "allowEmptySelection"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; "withRadioOrCheckbox": { "alias": "withRadioOrCheckbox"; "required": false; }; }, {}, never, ["*"], true, never>;
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
export declare class WppChatAlert {
    protected z: NgZone;
    protected el: HTMLWppChatAlertElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatAlert, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatAlert, "wpp-chat-alert-v4-3-0", never, { "closable": { "alias": "closable"; "required": false; }; "description": { "alias": "description"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "message": { "alias": "message"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatAlert extends Components.WppChatAlert {
    /**
     * Emitted when the close icon is activated.
     */
    wppClose: EventEmitter<CustomEvent<void>>;
}
export declare class WppChatConversation {
    protected z: NgZone;
    protected el: HTMLWppChatConversationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatConversation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatConversation, "wpp-chat-conversation-v4-3-0", never, { "assistantAvatarConfig": { "alias": "assistantAvatarConfig"; "required": false; }; "chatInputConfig": { "alias": "chatInputConfig"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; "userAvatarConfig": { "alias": "userAvatarConfig"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatConversation extends Components.WppChatConversation {
    /**
     * Emitted when the user clicks the "Send" button.
     */
    wppSend: EventEmitter<CustomEvent<IWppChatConversationSendEventDetail>>;
    /**
     * Emitted when the user clicks the "Stop" button while an AI response is generating.
     */
    wppStop: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the value of the input changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppChatConversationFileUploadEventDetail>>;
    /**
     * Emitted when the message in the input message changes.
     */
    wppMessageChanged: EventEmitter<CustomEvent<IWppChatConversationMessageChangeEventDetail>>;
    /**
     * Emitted when the consolidated actions menu (the `wpp-icon-plus` dropdown
  configured via `chatInputConfig.actions`) opens or closes.
     */
    wppActionsMenuToggle: EventEmitter<CustomEvent<IWppChatConversationActionsMenuToggleEventDetail>>;
    /**
     * Emitted when an entry inside the consolidated actions menu is clicked.
  The detail is the originating `ChatInputAction` object.
     */
    wppActionsMenuItemClick: EventEmitter<CustomEvent<IWppChatConversationChatInputActionItemClickEventDetail>>;
}
export declare class WppChatConversationMessage {
    protected z: NgZone;
    protected el: HTMLWppChatConversationMessageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatConversationMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatConversationMessage, "wpp-chat-conversation-message-v4-3-0", never, { "actionButtonsConfig": { "alias": "actionButtonsConfig"; "required": false; }; "assistantAvatarConfig": { "alias": "assistantAvatarConfig"; "required": false; }; "attachments": { "alias": "attachments"; "required": false; }; "content": { "alias": "content"; "required": false; }; "menuContextListItems": { "alias": "menuContextListItems"; "required": false; }; "role": { "alias": "role"; "required": false; }; "sourcesActionConfig": { "alias": "sourcesActionConfig"; "required": false; }; "status": { "alias": "status"; "required": false; }; "userAvatarConfig": { "alias": "userAvatarConfig"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatConversationMessage extends Components.WppChatConversationMessage {
}
export declare class WppChatInput {
    protected z: NgZone;
    protected el: HTMLWppChatInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatInput, "wpp-chat-input-v4-3-0", never, { "actions": { "alias": "actions"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "attachments": { "alias": "attachments"; "required": false; }; "charactersLimit": { "alias": "charactersLimit"; "required": false; }; "debounceDelay": { "alias": "debounceDelay"; "required": false; }; "debounceEnabled": { "alias": "debounceEnabled"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "enableAttach": { "alias": "enableAttach"; "required": false; }; "fileUploadConfig": { "alias": "fileUploadConfig"; "required": false; }; "htmlAttributes": { "alias": "htmlAttributes"; "required": false; }; "isGenerating": { "alias": "isGenerating"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "models": { "alias": "models"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "selectedModel": { "alias": "selectedModel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textValue": { "alias": "textValue"; "required": false; }; "textareaAriaLabel": { "alias": "textareaAriaLabel"; "required": false; }; "textareaId": { "alias": "textareaId"; "required": false; }; "textareaName": { "alias": "textareaName"; "required": false; }; "withSelect": { "alias": "withSelect"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatInput extends Components.WppChatInput {
    /**
     * Emitted when the user clicks the "Send" button.
     */
    wppSend: EventEmitter<CustomEvent<IWppChatInputSendEventDetail>>;
    /**
     * Emitted when the user clicks the "Stop" button while an AI response is generating.
     */
    wppStop: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the user clicks the microphone button.
  The detail carries the resulting state: `isRecording` is `true` when listening
  has just started and `false` when it has just stopped.
     */
    wppMic: EventEmitter<CustomEvent<IWppChatInputChatInputMicEventDetail>>;
    /**
     * Emitted when the value of the input changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppChatInputFileUploadEventDetail>>;
    /**
     * Emitted when the message in the input message changes.
     */
    wppMessageChanged: EventEmitter<CustomEvent<IWppChatInputMessageChangeEventDetail>>;
    /**
     * Emitted when the internal actions menu (triggered by the `wpp-icon-plus`
  button) opens or closes. Only fires when `actions` is non-empty.
     */
    wppActionsMenuToggle: EventEmitter<CustomEvent<IWppChatInputActionsMenuToggleEventDetail>>;
    /**
     * Emitted when the user clicks an entry in the consolidated actions menu.
  The detail payload is the `ChatInputAction` object that was clicked.
  Fires for every entry, including the reserved `'upload'` entry (which is
  additionally wired to open the file picker automatically).
     */
    wppActionsMenuItemClick: EventEmitter<CustomEvent<IWppChatInputChatInputActionItemClickEventDetail>>;
    /**
     * Emitted when an item from the AI models dropdown is selected.
  The detail is the selected model object — a built-in `ChatInputDefaultModel` (`Auto` / `Premium`)
  or one of the dev-provided `ChatInputModel`s.
     */
    wppModelSelect: EventEmitter<CustomEvent<IWppChatInputChatInputSelectableModel>>;
    /**
     * Emitted when the "Select model or agent" action from the AI models dropdown is clicked.
  Note: The "Select model or agent" action is rendered only when the `models` property is an empty array.
     */
    wppModelBrowse: EventEmitter<CustomEvent<void>>;
}
export declare class WppChatNode {
    protected z: NgZone;
    protected el: HTMLWppChatNodeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatNode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatNode, "wpp-chat-node-v4-3-0", never, { "actions": { "alias": "actions"; "required": false; }; "assistantAvatarConfig": { "alias": "assistantAvatarConfig"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "isReRun": { "alias": "isReRun"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "messageActions": { "alias": "messageActions"; "required": false; }; "models": { "alias": "models"; "required": false; }; "nodeTitle": { "alias": "nodeTitle"; "required": false; }; "selectedModel": { "alias": "selectedModel"; "required": false; }; "selectedModelId": { "alias": "selectedModelId"; "required": false; }; "size": { "alias": "size"; "required": false; }; "titleIcon": { "alias": "titleIcon"; "required": false; }; "userAvatarConfig": { "alias": "userAvatarConfig"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatNode extends Components.WppChatNode {
    /**
     * Emitted when the user clicks the send button or presses Enter.
     */
    wppSend: EventEmitter<CustomEvent<{
        message: string;
    }>>;
    /**
     * Emitted when the user clicks the stop button while the node is loading.
     */
    wppStop: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the user clicks the re-run button (shown when `isReRun` is true).
     */
    wppReRun: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the user clicks the + button while `actions` is empty.
  When `actions` is non-empty the + button opens the actions dropdown instead and this never fires.
     */
    wppAttach: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the user toggles the audio-record (microphone) button.
  The detail carries the resulting state: `isRecording` is `true` when listening
  has just started and `false` when it has just stopped.
     */
    wppMic: EventEmitter<CustomEvent<IWppChatNodeChatNodeMicEventDetail>>;
    /**
     * Emitted when an action is selected from the + button's actions dropdown.
     */
    wppActionClick: EventEmitter<CustomEvent<IWppChatNodeChatNodeAction>>;
    /**
     * Emitted when a model is selected from the AI model selector dropdown.
  The detail is the selected model object — a built-in `ChatNodeDefaultModel` (`Auto` / `Premium`)
  or one of the dev-provided `ChatNodeModel`s.
     */
    wppModelSelect: EventEmitter<CustomEvent<IWppChatNodeChatNodeSelectableModel>>;
    /**
     * Emitted when the "Select model or agent" action from the model-selector dropdown is clicked.
  This action is rendered only when the `models` property is an empty array.
     */
    wppModelBrowse: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when a message action button is clicked.
     */
    wppMessageActionClick: EventEmitter<CustomEvent<IWppChatNodeChatNodeMessageActionClickDetail>>;
}
export declare class WppChatReference {
    protected z: NgZone;
    protected el: HTMLWppChatReferenceElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatReference, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatReference, "wpp-chat-reference-v4-3-0", never, { "fileExtension": { "alias": "fileExtension"; "required": false; }; "fileType": { "alias": "fileType"; "required": false; }; "lines": { "alias": "lines"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "name": { "alias": "name"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "src": { "alias": "src"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatReference extends Components.WppChatReference {
    /**
     * Emitted when the close icon is activated.
     */
    wppClose: EventEmitter<CustomEvent<void>>;
}
export declare class WppChatThinking {
    protected z: NgZone;
    protected el: HTMLWppChatThinkingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppChatThinking, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppChatThinking, "wpp-chat-thinking-v4-3-0", never, { "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppChatThinking extends Components.WppChatThinking {
}
export declare class WppCheckbox {
    protected z: NgZone;
    protected el: HTMLWppCheckboxElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCheckbox, "wpp-checkbox-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "controlled": { "alias": "controlled"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppCheckboxGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCheckboxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCheckboxGroup, "wpp-checkbox-group-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppColorPickerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppColorPicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppColorPicker, "wpp-color-picker-v4-3-0", never, { "disabled": { "alias": "disabled"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "hexOpacity": { "alias": "hexOpacity"; "required": false; }; "initialColor": { "alias": "initialColor"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "savedColors": { "alias": "savedColors"; "required": false; }; "themeColors": { "alias": "themeColors"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    wppBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the color-picker selects a color to display. This happens when the dropdown of the color-picker
  is closed.
     */
    wppChange: EventEmitter<CustomEvent<IWppColorPickerChangeColorEventDetails>>;
}
export declare class WppCounter {
    protected z: NgZone;
    protected el: HTMLWppCounterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppCounter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppCounter, "wpp-counter-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "format": { "alias": "format"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; "withButtons": { "alias": "withButtons"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppDatepickerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppDatepicker, "wpp-datepicker-v4-3-0", never, { "appendToListWrapper": { "alias": "appendToListWrapper"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "monthRangeNormalization": { "alias": "monthRangeNormalization"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "presets": { "alias": "presets"; "required": false; }; "range": { "alias": "range"; "required": false; }; "required": { "alias": "required"; "required": false; }; "reverseLayout": { "alias": "reverseLayout"; "required": false; }; "size": { "alias": "size"; "required": false; }; "static": { "alias": "static"; "required": false; }; "toggleSelected": { "alias": "toggleSelected"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; "view": { "alias": "view"; "required": false; }; "width": { "alias": "width"; "required": false; }; "yearRangeNormalization": { "alias": "yearRangeNormalization"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppDatepicker extends Components.WppDatepicker {
    /**
     * Emitted when a date is chosen.
     */
    wppChange: EventEmitter<CustomEvent<IWppDatepickerDatePickerEventDetail>>;
    /**
     * Emitted when the input loses focus
     */
    wppBlur: EventEmitter<CustomEvent<void>>;
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
    protected el: HTMLWppDividerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppDivider, "wpp-divider-v4-3-0", never, { "resizable": { "alias": "resizable"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppDivider extends Components.WppDivider {
}
export declare class WppEmpty404 {
    protected z: NgZone;
    protected el: HTMLWppEmpty404Element;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmpty404, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmpty404, "wpp-empty-404-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmpty404 extends Components.WppEmpty404 {
}
export declare class WppEmptyCards {
    protected z: NgZone;
    protected el: HTMLWppEmptyCardsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyCards, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyCards, "wpp-empty-cards-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyCards extends Components.WppEmptyCards {
}
export declare class WppEmptyContent {
    protected z: NgZone;
    protected el: HTMLWppEmptyContentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyContent, "wpp-empty-content-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyContent extends Components.WppEmptyContent {
}
export declare class WppEmptyDataviz {
    protected z: NgZone;
    protected el: HTMLWppEmptyDatavizElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyDataviz, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyDataviz, "wpp-empty-dataviz-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyDataviz extends Components.WppEmptyDataviz {
}
export declare class WppEmptyDowntime {
    protected z: NgZone;
    protected el: HTMLWppEmptyDowntimeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyDowntime, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyDowntime, "wpp-empty-downtime-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyDowntime extends Components.WppEmptyDowntime {
}
export declare class WppEmptyError {
    protected z: NgZone;
    protected el: HTMLWppEmptyErrorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyError, "wpp-empty-error-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyError extends Components.WppEmptyError {
}
export declare class WppEmptyFolder {
    protected z: NgZone;
    protected el: HTMLWppEmptyFolderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyFolder, "wpp-empty-folder-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyFolder extends Components.WppEmptyFolder {
}
export declare class WppEmptyNoAccess {
    protected z: NgZone;
    protected el: HTMLWppEmptyNoAccessElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNoAccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNoAccess, "wpp-empty-no-access-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyNoAccess extends Components.WppEmptyNoAccess {
}
export declare class WppEmptyNoConnection {
    protected z: NgZone;
    protected el: HTMLWppEmptyNoConnectionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNoConnection, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNoConnection, "wpp-empty-no-connection-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyNoConnection extends Components.WppEmptyNoConnection {
}
export declare class WppEmptyNothingFound {
    protected z: NgZone;
    protected el: HTMLWppEmptyNothingFoundElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNothingFound, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNothingFound, "wpp-empty-nothing-found-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyNothingFound extends Components.WppEmptyNothingFound {
}
export declare class WppEmptyNotifications {
    protected z: NgZone;
    protected el: HTMLWppEmptyNotificationsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyNotifications, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyNotifications, "wpp-empty-notifications-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyNotifications extends Components.WppEmptyNotifications {
}
export declare class WppEmptyTable {
    protected z: NgZone;
    protected el: HTMLWppEmptyTableElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppEmptyTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppEmptyTable, "wpp-empty-table-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppEmptyTable extends Components.WppEmptyTable {
}
export declare class WppExpandableCard {
    protected z: NgZone;
    protected el: HTMLWppExpandableCardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppExpandableCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppExpandableCard, "wpp-expandable-card-v4-3-0", never, { "expandedByDefault": { "alias": "expandedByDefault"; "required": false; }; "isExpanded": { "alias": "isExpanded"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppFileUploadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFileUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFileUpload, "wpp-file-upload-v4-3-0", never, { "acceptConfig": { "alias": "acceptConfig"; "required": false; }; "controlled": { "alias": "controlled"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "format": { "alias": "format"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxFiles": { "alias": "maxFiles"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showOnlyNewErrors": { "alias": "showOnlyNewErrors"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "validator": { "alias": "validator"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    /**
     * Emitted when the file upload enters an error state. Triggered when the maximum number of files is exceeded.
     */
    wppError: EventEmitter<CustomEvent<IWppFileUploadFileUploadErrorEventDetails>>;
}
export declare class WppFileUploadItem {
    protected z: NgZone;
    protected el: HTMLWppFileUploadItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFileUploadItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFileUploadItem, "wpp-file-upload-item-v4-3-0", never, { "currentIndex": { "alias": "currentIndex"; "required": false; }; "file": { "alias": "file"; "required": false; }; "fileName": { "alias": "fileName"; "required": false; }; "format": { "alias": "format"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "parentDisabled": { "alias": "parentDisabled"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppFileUploadItem extends Components.WppFileUploadItem {
}
export declare class WppFilterButton {
    protected z: NgZone;
    protected el: HTMLWppFilterButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFilterButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFilterButton, "wpp-filter-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppFilterButton extends Components.WppFilterButton {
}
export declare class WppFloatingButton {
    protected z: NgZone;
    protected el: HTMLWppFloatingButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFloatingButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFloatingButton, "wpp-floating-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formAction": { "alias": "formAction"; "required": false; }; "formEncType": { "alias": "formEncType"; "required": false; }; "formMethod": { "alias": "formMethod"; "required": false; }; "formNoValidate": { "alias": "formNoValidate"; "required": false; }; "formTarget": { "alias": "formTarget"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "name": { "alias": "name"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppFloatingButton extends Components.WppFloatingButton {
}
export declare class WppFloatingToolbar {
    protected z: NgZone;
    protected el: HTMLWppFloatingToolbarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFloatingToolbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFloatingToolbar, "wpp-floating-toolbar-v4-3-0", never, { "actionButtonsConfig": { "alias": "actionButtonsConfig"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppFloatingToolbar extends Components.WppFloatingToolbar {
}
export declare class WppFullScreenModal {
    protected z: NgZone;
    protected el: HTMLWppFullScreenModalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppFullScreenModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppFullScreenModal, "wpp-full-screen-modal-v4-3-0", never, { "actionsConfig": { "alias": "actionsConfig"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "disableOutsideClick": { "alias": "disableOutsideClick"; "required": false; }; "formConfig": { "alias": "formConfig"; "required": false; }; "open": { "alias": "open"; "required": false; }; "osBarCompatible": { "alias": "osBarCompatible"; "required": false; }; "withTransparentOverlay": { "alias": "withTransparentOverlay"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
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
}
export declare class WppGrid {
    protected z: NgZone;
    protected el: HTMLWppGridElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppGrid, "wpp-grid-v4-3-0", never, { "alignItems": { "alias": "alignItems"; "required": false; }; "all": { "alias": "all"; "required": false; }; "columnSpacing": { "alias": "columnSpacing"; "required": false; }; "container": { "alias": "container"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "fullHeight": { "alias": "fullHeight"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "item": { "alias": "item"; "required": false; }; "justifyContent": { "alias": "justifyContent"; "required": false; }; "lg": { "alias": "lg"; "required": false; }; "md": { "alias": "md"; "required": false; }; "rowSpacing": { "alias": "rowSpacing"; "required": false; }; "sm": { "alias": "sm"; "required": false; }; "xl": { "alias": "xl"; "required": false; }; "xxl": { "alias": "xxl"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppGrid extends Components.WppGrid {
}
export declare class WppHandle {
    protected z: NgZone;
    protected el: HTMLWppHandleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppHandle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppHandle, "wpp-handle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "type": { "alias": "type"; "required": true; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppHandle extends Components.WppHandle {
}
export declare class WppIconAbout {
    protected z: NgZone;
    protected el: HTMLWppIconAboutElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAbout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAbout, "wpp-icon-about-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAbout extends Components.WppIconAbout {
}
export declare class WppIconAccessibility {
    protected z: NgZone;
    protected el: HTMLWppIconAccessibilityElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAccessibility, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAccessibility, "wpp-icon-accessibility-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAccessibility extends Components.WppIconAccessibility {
}
export declare class WppIconAccordion {
    protected z: NgZone;
    protected el: HTMLWppIconAccordionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAccordion, "wpp-icon-accordion-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAccordion extends Components.WppIconAccordion {
}
export declare class WppIconAction {
    protected z: NgZone;
    protected el: HTMLWppIconActionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAction, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAction, "wpp-icon-action-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAction extends Components.WppIconAction {
}
export declare class WppIconAdd {
    protected z: NgZone;
    protected el: HTMLWppIconAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAdd, "wpp-icon-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAdd extends Components.WppIconAdd {
}
export declare class WppIconAddApp {
    protected z: NgZone;
    protected el: HTMLWppIconAddAppElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddApp, "wpp-icon-add-app-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAddApp extends Components.WppIconAddApp {
}
export declare class WppIconAddCircle {
    protected z: NgZone;
    protected el: HTMLWppIconAddCircleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddCircle, "wpp-icon-add-circle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAddCircle extends Components.WppIconAddCircle {
}
export declare class WppIconAddDocument {
    protected z: NgZone;
    protected el: HTMLWppIconAddDocumentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddDocument, "wpp-icon-add-document-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAddDocument extends Components.WppIconAddDocument {
}
export declare class WppIconAddFolder {
    protected z: NgZone;
    protected el: HTMLWppIconAddFolderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAddFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAddFolder, "wpp-icon-add-folder-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAddFolder extends Components.WppIconAddFolder {
}
export declare class WppIconAdmin {
    protected z: NgZone;
    protected el: HTMLWppIconAdminElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAdmin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAdmin, "wpp-icon-admin-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAdmin extends Components.WppIconAdmin {
}
export declare class WppIconAi {
    protected z: NgZone;
    protected el: HTMLWppIconAiElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAi, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAi, "wpp-icon-ai-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAi extends Components.WppIconAi {
}
export declare class WppIconAirPollution {
    protected z: NgZone;
    protected el: HTMLWppIconAirPollutionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAirPollution, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAirPollution, "wpp-icon-air-pollution-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAirPollution extends Components.WppIconAirPollution {
}
export declare class WppIconAirplane {
    protected z: NgZone;
    protected el: HTMLWppIconAirplaneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAirplane, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAirplane, "wpp-icon-airplane-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAirplane extends Components.WppIconAirplane {
}
export declare class WppIconAngry {
    protected z: NgZone;
    protected el: HTMLWppIconAngryElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAngry, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAngry, "wpp-icon-angry-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAngry extends Components.WppIconAngry {
}
export declare class WppIconApp {
    protected z: NgZone;
    protected el: HTMLWppIconAppElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconApp, "wpp-icon-app-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconApp extends Components.WppIconApp {
}
export declare class WppIconAppFolder {
    protected z: NgZone;
    protected el: HTMLWppIconAppFolderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAppFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAppFolder, "wpp-icon-app-folder-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAppFolder extends Components.WppIconAppFolder {
}
export declare class WppIconAppStore {
    protected z: NgZone;
    protected el: HTMLWppIconAppStoreElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAppStore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAppStore, "wpp-icon-app-store-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAppStore extends Components.WppIconAppStore {
}
export declare class WppIconApprovals {
    protected z: NgZone;
    protected el: HTMLWppIconApprovalsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconApprovals, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconApprovals, "wpp-icon-approvals-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconApprovals extends Components.WppIconApprovals {
}
export declare class WppIconArchive {
    protected z: NgZone;
    protected el: HTMLWppIconArchiveElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArchive, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArchive, "wpp-icon-archive-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconArchive extends Components.WppIconArchive {
}
export declare class WppIconArchiveMultiple {
    protected z: NgZone;
    protected el: HTMLWppIconArchiveMultipleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArchiveMultiple, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArchiveMultiple, "wpp-icon-archive-multiple-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconArchiveMultiple extends Components.WppIconArchiveMultiple {
}
export declare class WppIconArrow {
    protected z: NgZone;
    protected el: HTMLWppIconArrowElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconArrow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconArrow, "wpp-icon-arrow-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconArrow extends Components.WppIconArrow {
}
export declare class WppIconAsk {
    protected z: NgZone;
    protected el: HTMLWppIconAskElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAsk, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAsk, "wpp-icon-ask-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAsk extends Components.WppIconAsk {
}
export declare class WppIconAssistant {
    protected z: NgZone;
    protected el: HTMLWppIconAssistantElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAssistant, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAssistant, "wpp-icon-assistant-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAssistant extends Components.WppIconAssistant {
}
export declare class WppIconAtm {
    protected z: NgZone;
    protected el: HTMLWppIconAtmElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAtm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAtm, "wpp-icon-atm-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAtm extends Components.WppIconAtm {
}
export declare class WppIconAttach {
    protected z: NgZone;
    protected el: HTMLWppIconAttachElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAttach, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAttach, "wpp-icon-attach-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAttach extends Components.WppIconAttach {
}
export declare class WppIconAutoSum {
    protected z: NgZone;
    protected el: HTMLWppIconAutoSumElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutoSum, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutoSum, "wpp-icon-auto-sum-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutoSum extends Components.WppIconAutoSum {
}
export declare class WppIconAutofit {
    protected z: NgZone;
    protected el: HTMLWppIconAutofitElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofit, "wpp-icon-autofit-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutofit extends Components.WppIconAutofit {
}
export declare class WppIconAutofitHeight {
    protected z: NgZone;
    protected el: HTMLWppIconAutofitHeightElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitHeight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitHeight, "wpp-icon-autofit-height-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutofitHeight extends Components.WppIconAutofitHeight {
}
export declare class WppIconAutofitHeightDotted {
    protected z: NgZone;
    protected el: HTMLWppIconAutofitHeightDottedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitHeightDotted, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitHeightDotted, "wpp-icon-autofit-height-dotted-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutofitHeightDotted extends Components.WppIconAutofitHeightDotted {
}
export declare class WppIconAutofitWidth {
    protected z: NgZone;
    protected el: HTMLWppIconAutofitWidthElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitWidth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitWidth, "wpp-icon-autofit-width-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutofitWidth extends Components.WppIconAutofitWidth {
}
export declare class WppIconAutofitWidthDotted {
    protected z: NgZone;
    protected el: HTMLWppIconAutofitWidthDottedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAutofitWidthDotted, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAutofitWidthDotted, "wpp-icon-autofit-width-dotted-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAutofitWidthDotted extends Components.WppIconAutofitWidthDotted {
}
export declare class WppIconAvailableCheckmark {
    protected z: NgZone;
    protected el: HTMLWppIconAvailableCheckmarkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAvailableCheckmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAvailableCheckmark, "wpp-icon-available-checkmark-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAvailableCheckmark extends Components.WppIconAvailableCheckmark {
}
export declare class WppIconAvailableUpdate {
    protected z: NgZone;
    protected el: HTMLWppIconAvailableUpdateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconAvailableUpdate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconAvailableUpdate, "wpp-icon-available-update-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconAvailableUpdate extends Components.WppIconAvailableUpdate {
}
export declare class WppIconBank {
    protected z: NgZone;
    protected el: HTMLWppIconBankElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBank, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBank, "wpp-icon-bank-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBank extends Components.WppIconBank {
}
export declare class WppIconBar {
    protected z: NgZone;
    protected el: HTMLWppIconBarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBar, "wpp-icon-bar-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBar extends Components.WppIconBar {
}
export declare class WppIconBarChart {
    protected z: NgZone;
    protected el: HTMLWppIconBarChartElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBarChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBarChart, "wpp-icon-bar-chart-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBarChart extends Components.WppIconBarChart {
}
export declare class WppIconBarHorizontal {
    protected z: NgZone;
    protected el: HTMLWppIconBarHorizontalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBarHorizontal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBarHorizontal, "wpp-icon-bar-horizontal-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBarHorizontal extends Components.WppIconBarHorizontal {
}
export declare class WppIconBicycle {
    protected z: NgZone;
    protected el: HTMLWppIconBicycleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBicycle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBicycle, "wpp-icon-bicycle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBicycle extends Components.WppIconBicycle {
}
export declare class WppIconBlockquote {
    protected z: NgZone;
    protected el: HTMLWppIconBlockquoteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBlockquote, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBlockquote, "wpp-icon-blockquote-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBlockquote extends Components.WppIconBlockquote {
}
export declare class WppIconBluetoothOff {
    protected z: NgZone;
    protected el: HTMLWppIconBluetoothOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBluetoothOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBluetoothOff, "wpp-icon-bluetooth-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBluetoothOff extends Components.WppIconBluetoothOff {
}
export declare class WppIconBluetoothOn {
    protected z: NgZone;
    protected el: HTMLWppIconBluetoothOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBluetoothOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBluetoothOn, "wpp-icon-bluetooth-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBluetoothOn extends Components.WppIconBluetoothOn {
}
export declare class WppIconBoard {
    protected z: NgZone;
    protected el: HTMLWppIconBoardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBoard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBoard, "wpp-icon-board-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBoard extends Components.WppIconBoard {
}
export declare class WppIconBold {
    protected z: NgZone;
    protected el: HTMLWppIconBoldElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBold, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBold, "wpp-icon-bold-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBold extends Components.WppIconBold {
}
export declare class WppIconBook {
    protected z: NgZone;
    protected el: HTMLWppIconBookElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBook, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBook, "wpp-icon-book-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBook extends Components.WppIconBook {
}
export declare class WppIconBookContacts {
    protected z: NgZone;
    protected el: HTMLWppIconBookContactsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookContacts, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookContacts, "wpp-icon-book-contacts-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookContacts extends Components.WppIconBookContacts {
}
export declare class WppIconBookFaq {
    protected z: NgZone;
    protected el: HTMLWppIconBookFaqElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookFaq, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookFaq, "wpp-icon-book-faq-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookFaq extends Components.WppIconBookFaq {
}
export declare class WppIconBookInformation {
    protected z: NgZone;
    protected el: HTMLWppIconBookInformationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookInformation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookInformation, "wpp-icon-book-information-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookInformation extends Components.WppIconBookInformation {
}
export declare class WppIconBookSearch {
    protected z: NgZone;
    protected el: HTMLWppIconBookSearchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookSearch, "wpp-icon-book-search-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookSearch extends Components.WppIconBookSearch {
}
export declare class WppIconBookmark {
    protected z: NgZone;
    protected el: HTMLWppIconBookmarkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmark, "wpp-icon-bookmark-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookmark extends Components.WppIconBookmark {
}
export declare class WppIconBookmarkAdd {
    protected z: NgZone;
    protected el: HTMLWppIconBookmarkAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmarkAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmarkAdd, "wpp-icon-bookmark-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookmarkAdd extends Components.WppIconBookmarkAdd {
}
export declare class WppIconBookmarkSelected {
    protected z: NgZone;
    protected el: HTMLWppIconBookmarkSelectedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBookmarkSelected, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBookmarkSelected, "wpp-icon-bookmark-selected-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBookmarkSelected extends Components.WppIconBookmarkSelected {
}
export declare class WppIconBorder {
    protected z: NgZone;
    protected el: HTMLWppIconBorderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorder, "wpp-icon-border-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorder extends Components.WppIconBorder {
}
export declare class WppIconBorderAll {
    protected z: NgZone;
    protected el: HTMLWppIconBorderAllElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderAll, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderAll, "wpp-icon-border-all-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderAll extends Components.WppIconBorderAll {
}
export declare class WppIconBorderBottomDouble {
    protected z: NgZone;
    protected el: HTMLWppIconBorderBottomDoubleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderBottomDouble, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderBottomDouble, "wpp-icon-border-bottom-double-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderBottomDouble extends Components.WppIconBorderBottomDouble {
}
export declare class WppIconBorderLeftRight {
    protected z: NgZone;
    protected el: HTMLWppIconBorderLeftRightElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderLeftRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderLeftRight, "wpp-icon-border-left-right-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderLeftRight extends Components.WppIconBorderLeftRight {
}
export declare class WppIconBorderNone {
    protected z: NgZone;
    protected el: HTMLWppIconBorderNoneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderNone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderNone, "wpp-icon-border-none-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderNone extends Components.WppIconBorderNone {
}
export declare class WppIconBorderOutside {
    protected z: NgZone;
    protected el: HTMLWppIconBorderOutsideElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderOutside, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderOutside, "wpp-icon-border-outside-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderOutside extends Components.WppIconBorderOutside {
}
export declare class WppIconBorderOutsideThick {
    protected z: NgZone;
    protected el: HTMLWppIconBorderOutsideThickElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderOutsideThick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderOutsideThick, "wpp-icon-border-outside-thick-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderOutsideThick extends Components.WppIconBorderOutsideThick {
}
export declare class WppIconBorderTopBottom {
    protected z: NgZone;
    protected el: HTMLWppIconBorderTopBottomElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottom, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottom, "wpp-icon-border-top-bottom-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderTopBottom extends Components.WppIconBorderTopBottom {
}
export declare class WppIconBorderTopBottomDouble {
    protected z: NgZone;
    protected el: HTMLWppIconBorderTopBottomDoubleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottomDouble, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottomDouble, "wpp-icon-border-top-bottom-double-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderTopBottomDouble extends Components.WppIconBorderTopBottomDouble {
}
export declare class WppIconBorderTopBottomThick {
    protected z: NgZone;
    protected el: HTMLWppIconBorderTopBottomThickElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBorderTopBottomThick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBorderTopBottomThick, "wpp-icon-border-top-bottom-thick-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBorderTopBottomThick extends Components.WppIconBorderTopBottomThick {
}
export declare class WppIconBot {
    protected z: NgZone;
    protected el: HTMLWppIconBotElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBot, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBot, "wpp-icon-bot-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBot extends Components.WppIconBot {
}
export declare class WppIconBounce {
    protected z: NgZone;
    protected el: HTMLWppIconBounceElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBounce, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBounce, "wpp-icon-bounce-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBounce extends Components.WppIconBounce {
}
export declare class WppIconBranch {
    protected z: NgZone;
    protected el: HTMLWppIconBranchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranch, "wpp-icon-branch-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBranch extends Components.WppIconBranch {
}
export declare class WppIconBranchRequest {
    protected z: NgZone;
    protected el: HTMLWppIconBranchRequestElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranchRequest, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranchRequest, "wpp-icon-branch-request-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBranchRequest extends Components.WppIconBranchRequest {
}
export declare class WppIconBranchReview {
    protected z: NgZone;
    protected el: HTMLWppIconBranchReviewElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBranchReview, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBranchReview, "wpp-icon-branch-review-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBranchReview extends Components.WppIconBranchReview {
}
export declare class WppIconBtc {
    protected z: NgZone;
    protected el: HTMLWppIconBtcElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBtc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBtc, "wpp-icon-btc-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBtc extends Components.WppIconBtc {
}
export declare class WppIconBuilding {
    protected z: NgZone;
    protected el: HTMLWppIconBuildingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBuilding, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBuilding, "wpp-icon-building-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBuilding extends Components.WppIconBuilding {
}
export declare class WppIconBus {
    protected z: NgZone;
    protected el: HTMLWppIconBusElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBus, "wpp-icon-bus-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBus extends Components.WppIconBus {
}
export declare class WppIconBusiness {
    protected z: NgZone;
    protected el: HTMLWppIconBusinessElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconBusiness, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconBusiness, "wpp-icon-business-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconBusiness extends Components.WppIconBusiness {
}
export declare class WppIconCafe {
    protected z: NgZone;
    protected el: HTMLWppIconCafeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCafe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCafe, "wpp-icon-cafe-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCafe extends Components.WppIconCafe {
}
export declare class WppIconCalendar {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendar, "wpp-icon-calendar-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendar extends Components.WppIconCalendar {
}
export declare class WppIconCalendar3Days {
    protected z: NgZone;
    protected el: HTMLWppIconCalendar3DaysElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendar3Days, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendar3Days, "wpp-icon-calendar-3-days-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendar3Days extends Components.WppIconCalendar3Days {
}
export declare class WppIconCalendarAdd {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarAdd, "wpp-icon-calendar-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendarAdd extends Components.WppIconCalendarAdd {
}
export declare class WppIconCalendarDate {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarDateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarDate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarDate, "wpp-icon-calendar-date-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendarDate extends Components.WppIconCalendarDate {
}
export declare class WppIconCalendarDismiss {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarDismissElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarDismiss, "wpp-icon-calendar-dismiss-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendarDismiss extends Components.WppIconCalendarDismiss {
}
export declare class WppIconCalendarError {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarErrorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarError, "wpp-icon-calendar-error-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendarError extends Components.WppIconCalendarError {
}
export declare class WppIconCalendarMonth {
    protected z: NgZone;
    protected el: HTMLWppIconCalendarMonthElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCalendarMonth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCalendarMonth, "wpp-icon-calendar-month-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCalendarMonth extends Components.WppIconCalendarMonth {
}
export declare class WppIconCameraAdd {
    protected z: NgZone;
    protected el: HTMLWppIconCameraAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraAdd, "wpp-icon-camera-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCameraAdd extends Components.WppIconCameraAdd {
}
export declare class WppIconCameraOff {
    protected z: NgZone;
    protected el: HTMLWppIconCameraOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraOff, "wpp-icon-camera-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCameraOff extends Components.WppIconCameraOff {
}
export declare class WppIconCameraOn {
    protected z: NgZone;
    protected el: HTMLWppIconCameraOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraOn, "wpp-icon-camera-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCameraOn extends Components.WppIconCameraOn {
}
export declare class WppIconCameraSwitch {
    protected z: NgZone;
    protected el: HTMLWppIconCameraSwitchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCameraSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCameraSwitch, "wpp-icon-camera-switch-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCameraSwitch extends Components.WppIconCameraSwitch {
}
export declare class WppIconCampaign {
    protected z: NgZone;
    protected el: HTMLWppIconCampaignElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCampaign, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCampaign, "wpp-icon-campaign-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCampaign extends Components.WppIconCampaign {
}
export declare class WppIconCaptionOff {
    protected z: NgZone;
    protected el: HTMLWppIconCaptionOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCaptionOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCaptionOff, "wpp-icon-caption-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCaptionOff extends Components.WppIconCaptionOff {
}
export declare class WppIconCaptionOn {
    protected z: NgZone;
    protected el: HTMLWppIconCaptionOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCaptionOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCaptionOn, "wpp-icon-caption-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCaptionOn extends Components.WppIconCaptionOn {
}
export declare class WppIconCarousel {
    protected z: NgZone;
    protected el: HTMLWppIconCarouselElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCarousel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCarousel, "wpp-icon-carousel-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCarousel extends Components.WppIconCarousel {
}
export declare class WppIconCart {
    protected z: NgZone;
    protected el: HTMLWppIconCartElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCart, "wpp-icon-cart-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCart extends Components.WppIconCart {
}
export declare class WppIconCase {
    protected z: NgZone;
    protected el: HTMLWppIconCaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCase, "wpp-icon-case-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCase extends Components.WppIconCase {
}
export declare class WppIconCast {
    protected z: NgZone;
    protected el: HTMLWppIconCastElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCast, "wpp-icon-cast-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCast extends Components.WppIconCast {
}
export declare class WppIconCellularData3g {
    protected z: NgZone;
    protected el: HTMLWppIconCellularData3gElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData3g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData3g, "wpp-icon-cellular-data-3g-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCellularData3g extends Components.WppIconCellularData3g {
}
export declare class WppIconCellularData4g {
    protected z: NgZone;
    protected el: HTMLWppIconCellularData4gElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData4g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData4g, "wpp-icon-cellular-data-4g-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCellularData4g extends Components.WppIconCellularData4g {
}
export declare class WppIconCellularData5g {
    protected z: NgZone;
    protected el: HTMLWppIconCellularData5gElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularData5g, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularData5g, "wpp-icon-cellular-data-5g-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCellularData5g extends Components.WppIconCellularData5g {
}
export declare class WppIconCellularDataOff {
    protected z: NgZone;
    protected el: HTMLWppIconCellularDataOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularDataOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularDataOff, "wpp-icon-cellular-data-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCellularDataOff extends Components.WppIconCellularDataOff {
}
export declare class WppIconCellularDataOn {
    protected z: NgZone;
    protected el: HTMLWppIconCellularDataOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCellularDataOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCellularDataOn, "wpp-icon-cellular-data-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCellularDataOn extends Components.WppIconCellularDataOn {
}
export declare class WppIconChannel {
    protected z: NgZone;
    protected el: HTMLWppIconChannelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChannel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChannel, "wpp-icon-channel-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChannel extends Components.WppIconChannel {
}
export declare class WppIconChatMessage {
    protected z: NgZone;
    protected el: HTMLWppIconChatMessageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatMessage, "wpp-icon-chat-message-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChatMessage extends Components.WppIconChatMessage {
}
export declare class WppIconChatMessageNew {
    protected z: NgZone;
    protected el: HTMLWppIconChatMessageNewElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatMessageNew, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatMessageNew, "wpp-icon-chat-message-new-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChatMessageNew extends Components.WppIconChatMessageNew {
}
export declare class WppIconChatMessageOff {
    protected z: NgZone;
    protected el: HTMLWppIconChatMessageOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatMessageOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatMessageOff, "wpp-icon-chat-message-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChatMessageOff extends Components.WppIconChatMessageOff {
}
export declare class WppIconChatVideo {
    protected z: NgZone;
    protected el: HTMLWppIconChatVideoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChatVideo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChatVideo, "wpp-icon-chat-video-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChatVideo extends Components.WppIconChatVideo {
}
export declare class WppIconChevron {
    protected z: NgZone;
    protected el: HTMLWppIconChevronElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconChevron, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconChevron, "wpp-icon-chevron-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconChevron extends Components.WppIconChevron {
}
export declare class WppIconCinema {
    protected z: NgZone;
    protected el: HTMLWppIconCinemaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCinema, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCinema, "wpp-icon-cinema-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCinema extends Components.WppIconCinema {
}
export declare class WppIconCircle {
    protected z: NgZone;
    protected el: HTMLWppIconCircleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCircle, "wpp-icon-circle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCircle extends Components.WppIconCircle {
}
export declare class WppIconClock {
    protected z: NgZone;
    protected el: HTMLWppIconClockElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconClock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconClock, "wpp-icon-clock-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconClock extends Components.WppIconClock {
}
export declare class WppIconClose {
    protected z: NgZone;
    protected el: HTMLWppIconCloseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconClose, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconClose, "wpp-icon-close-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconClose extends Components.WppIconClose {
}
export declare class WppIconCloudDismiss {
    protected z: NgZone;
    protected el: HTMLWppIconCloudDismissElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudDismiss, "wpp-icon-cloud-dismiss-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCloudDismiss extends Components.WppIconCloudDismiss {
}
export declare class WppIconCloudSuccess {
    protected z: NgZone;
    protected el: HTMLWppIconCloudSuccessElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudSuccess, "wpp-icon-cloud-success-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCloudSuccess extends Components.WppIconCloudSuccess {
}
export declare class WppIconCloudSync {
    protected z: NgZone;
    protected el: HTMLWppIconCloudSyncElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudSync, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudSync, "wpp-icon-cloud-sync-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCloudSync extends Components.WppIconCloudSync {
}
export declare class WppIconCloudUpload {
    protected z: NgZone;
    protected el: HTMLWppIconCloudUploadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCloudUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCloudUpload, "wpp-icon-cloud-upload-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCloudUpload extends Components.WppIconCloudUpload {
}
export declare class WppIconCodeView {
    protected z: NgZone;
    protected el: HTMLWppIconCodeViewElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCodeView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCodeView, "wpp-icon-code-view-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCodeView extends Components.WppIconCodeView {
}
export declare class WppIconCollapse {
    protected z: NgZone;
    protected el: HTMLWppIconCollapseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCollapse, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCollapse, "wpp-icon-collapse-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCollapse extends Components.WppIconCollapse {
}
export declare class WppIconCollection {
    protected z: NgZone;
    protected el: HTMLWppIconCollectionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCollection, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCollection, "wpp-icon-collection-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCollection extends Components.WppIconCollection {
}
export declare class WppIconColour {
    protected z: NgZone;
    protected el: HTMLWppIconColourElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColour, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColour, "wpp-icon-colour-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconColour extends Components.WppIconColour {
}
export declare class WppIconColumnsOne {
    protected z: NgZone;
    protected el: HTMLWppIconColumnsOneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsOne, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsOne, "wpp-icon-columns-one-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconColumnsOne extends Components.WppIconColumnsOne {
}
export declare class WppIconColumnsThree {
    protected z: NgZone;
    protected el: HTMLWppIconColumnsThreeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsThree, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsThree, "wpp-icon-columns-three-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconColumnsThree extends Components.WppIconColumnsThree {
}
export declare class WppIconColumnsTwo {
    protected z: NgZone;
    protected el: HTMLWppIconColumnsTwoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconColumnsTwo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconColumnsTwo, "wpp-icon-columns-two-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconColumnsTwo extends Components.WppIconColumnsTwo {
}
export declare class WppIconComment {
    protected z: NgZone;
    protected el: HTMLWppIconCommentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconComment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconComment, "wpp-icon-comment-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconComment extends Components.WppIconComment {
}
export declare class WppIconCommentOff {
    protected z: NgZone;
    protected el: HTMLWppIconCommentOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCommentOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCommentOff, "wpp-icon-comment-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCommentOff extends Components.WppIconCommentOff {
}
export declare class WppIconCommunication {
    protected z: NgZone;
    protected el: HTMLWppIconCommunicationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCommunication, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCommunication, "wpp-icon-communication-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCommunication extends Components.WppIconCommunication {
}
export declare class WppIconCompose {
    protected z: NgZone;
    protected el: HTMLWppIconComposeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCompose, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCompose, "wpp-icon-compose-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCompose extends Components.WppIconCompose {
}
export declare class WppIconCookies {
    protected z: NgZone;
    protected el: HTMLWppIconCookiesElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCookies, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCookies, "wpp-icon-cookies-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCookies extends Components.WppIconCookies {
}
export declare class WppIconCopy {
    protected z: NgZone;
    protected el: HTMLWppIconCopyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCopy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCopy, "wpp-icon-copy-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCopy extends Components.WppIconCopy {
}
export declare class WppIconCrop {
    protected z: NgZone;
    protected el: HTMLWppIconCropElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCrop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCrop, "wpp-icon-crop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCrop extends Components.WppIconCrop {
}
export declare class WppIconCross {
    protected z: NgZone;
    protected el: HTMLWppIconCrossElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCross, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCross, "wpp-icon-cross-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCross extends Components.WppIconCross {
}
export declare class WppIconCta {
    protected z: NgZone;
    protected el: HTMLWppIconCtaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCta, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCta, "wpp-icon-cta-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCta extends Components.WppIconCta {
}
export declare class WppIconCube {
    protected z: NgZone;
    protected el: HTMLWppIconCubeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCube, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCube, "wpp-icon-cube-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCube extends Components.WppIconCube {
}
export declare class WppIconCurrency {
    protected z: NgZone;
    protected el: HTMLWppIconCurrencyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCurrency, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCurrency, "wpp-icon-currency-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCurrency extends Components.WppIconCurrency {
}
export declare class WppIconCut {
    protected z: NgZone;
    protected el: HTMLWppIconCutElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconCut, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconCut, "wpp-icon-cut-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconCut extends Components.WppIconCut {
}
export declare class WppIconDarkTheme {
    protected z: NgZone;
    protected el: HTMLWppIconDarkThemeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDarkTheme, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDarkTheme, "wpp-icon-dark-theme-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDarkTheme extends Components.WppIconDarkTheme {
}
export declare class WppIconDash {
    protected z: NgZone;
    protected el: HTMLWppIconDashElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDash, "wpp-icon-dash-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDash extends Components.WppIconDash {
}
export declare class WppIconDataArea {
    protected z: NgZone;
    protected el: HTMLWppIconDataAreaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataArea, "wpp-icon-data-area-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataArea extends Components.WppIconDataArea {
}
export declare class WppIconDataCloudOff {
    protected z: NgZone;
    protected el: HTMLWppIconDataCloudOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataCloudOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataCloudOff, "wpp-icon-data-cloud-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataCloudOff extends Components.WppIconDataCloudOff {
}
export declare class WppIconDataCloudOn {
    protected z: NgZone;
    protected el: HTMLWppIconDataCloudOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataCloudOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataCloudOn, "wpp-icon-data-cloud-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataCloudOn extends Components.WppIconDataCloudOn {
}
export declare class WppIconDataFunnel {
    protected z: NgZone;
    protected el: HTMLWppIconDataFunnelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataFunnel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataFunnel, "wpp-icon-data-funnel-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataFunnel extends Components.WppIconDataFunnel {
}
export declare class WppIconDataHistogram {
    protected z: NgZone;
    protected el: HTMLWppIconDataHistogramElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataHistogram, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataHistogram, "wpp-icon-data-histogram-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataHistogram extends Components.WppIconDataHistogram {
}
export declare class WppIconDataLine {
    protected z: NgZone;
    protected el: HTMLWppIconDataLineElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataLine, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataLine, "wpp-icon-data-line-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataLine extends Components.WppIconDataLine {
}
export declare class WppIconDataScatter {
    protected z: NgZone;
    protected el: HTMLWppIconDataScatterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataScatter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataScatter, "wpp-icon-data-scatter-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataScatter extends Components.WppIconDataScatter {
}
export declare class WppIconDataSunburst {
    protected z: NgZone;
    protected el: HTMLWppIconDataSunburstElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataSunburst, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataSunburst, "wpp-icon-data-sunburst-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataSunburst extends Components.WppIconDataSunburst {
}
export declare class WppIconDataTransfer {
    protected z: NgZone;
    protected el: HTMLWppIconDataTransferElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTransfer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTransfer, "wpp-icon-data-transfer-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataTransfer extends Components.WppIconDataTransfer {
}
export declare class WppIconDataTreemap {
    protected z: NgZone;
    protected el: HTMLWppIconDataTreemapElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTreemap, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTreemap, "wpp-icon-data-treemap-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataTreemap extends Components.WppIconDataTreemap {
}
export declare class WppIconDataTrending {
    protected z: NgZone;
    protected el: HTMLWppIconDataTrendingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataTrending, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataTrending, "wpp-icon-data-trending-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataTrending extends Components.WppIconDataTrending {
}
export declare class WppIconDataUsage {
    protected z: NgZone;
    protected el: HTMLWppIconDataUsageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataUsage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataUsage, "wpp-icon-data-usage-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataUsage extends Components.WppIconDataUsage {
}
export declare class WppIconDataViewCards {
    protected z: NgZone;
    protected el: HTMLWppIconDataViewCardsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataViewCards, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataViewCards, "wpp-icon-data-view-cards-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataViewCards extends Components.WppIconDataViewCards {
}
export declare class WppIconDataViewList {
    protected z: NgZone;
    protected el: HTMLWppIconDataViewListElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataViewList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataViewList, "wpp-icon-data-view-list-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataViewList extends Components.WppIconDataViewList {
}
export declare class WppIconDataWaterfall {
    protected z: NgZone;
    protected el: HTMLWppIconDataWaterfallElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataWaterfall, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataWaterfall, "wpp-icon-data-waterfall-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataWaterfall extends Components.WppIconDataWaterfall {
}
export declare class WppIconDataWhisker {
    protected z: NgZone;
    protected el: HTMLWppIconDataWhiskerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDataWhisker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDataWhisker, "wpp-icon-data-whisker-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDataWhisker extends Components.WppIconDataWhisker {
}
export declare class WppIconDatabase {
    protected z: NgZone;
    protected el: HTMLWppIconDatabaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDatabase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDatabase, "wpp-icon-database-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDatabase extends Components.WppIconDatabase {
}
export declare class WppIconDecrease {
    protected z: NgZone;
    protected el: HTMLWppIconDecreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDecrease, "wpp-icon-decrease-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDecrease extends Components.WppIconDecrease {
}
export declare class WppIconDesign {
    protected z: NgZone;
    protected el: HTMLWppIconDesignElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDesign, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDesign, "wpp-icon-design-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDesign extends Components.WppIconDesign {
}
export declare class WppIconDesktop {
    protected z: NgZone;
    protected el: HTMLWppIconDesktopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDesktop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDesktop, "wpp-icon-desktop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDesktop extends Components.WppIconDesktop {
}
export declare class WppIconDiamond {
    protected z: NgZone;
    protected el: HTMLWppIconDiamondElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDiamond, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDiamond, "wpp-icon-diamond-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDiamond extends Components.WppIconDiamond {
}
export declare class WppIconDirections {
    protected z: NgZone;
    protected el: HTMLWppIconDirectionsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDirections, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDirections, "wpp-icon-directions-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDirections extends Components.WppIconDirections {
}
export declare class WppIconDiversity {
    protected z: NgZone;
    protected el: HTMLWppIconDiversityElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDiversity, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDiversity, "wpp-icon-diversity-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDiversity extends Components.WppIconDiversity {
}
export declare class WppIconDocument {
    protected z: NgZone;
    protected el: HTMLWppIconDocumentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocument, "wpp-icon-document-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDocument extends Components.WppIconDocument {
}
export declare class WppIconDocumentBlocked {
    protected z: NgZone;
    protected el: HTMLWppIconDocumentBlockedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocumentBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocumentBlocked, "wpp-icon-document-blocked-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDocumentBlocked extends Components.WppIconDocumentBlocked {
}
export declare class WppIconDocumentError {
    protected z: NgZone;
    protected el: HTMLWppIconDocumentErrorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDocumentError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDocumentError, "wpp-icon-document-error-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDocumentError extends Components.WppIconDocumentError {
}
export declare class WppIconDollar {
    protected z: NgZone;
    protected el: HTMLWppIconDollarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDollar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDollar, "wpp-icon-dollar-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDollar extends Components.WppIconDollar {
}
export declare class WppIconDone {
    protected z: NgZone;
    protected el: HTMLWppIconDoneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDone, "wpp-icon-done-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDone extends Components.WppIconDone {
}
export declare class WppIconDoubleChevron {
    protected z: NgZone;
    protected el: HTMLWppIconDoubleChevronElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDoubleChevron, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDoubleChevron, "wpp-icon-double-chevron-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDoubleChevron extends Components.WppIconDoubleChevron {
}
export declare class WppIconDownload {
    protected z: NgZone;
    protected el: HTMLWppIconDownloadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDownload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDownload, "wpp-icon-download-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDownload extends Components.WppIconDownload {
}
export declare class WppIconDraft {
    protected z: NgZone;
    protected el: HTMLWppIconDraftElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDraft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDraft, "wpp-icon-draft-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDraft extends Components.WppIconDraft {
}
export declare class WppIconDrag {
    protected z: NgZone;
    protected el: HTMLWppIconDragElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDrag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDrag, "wpp-icon-drag-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDrag extends Components.WppIconDrag {
}
export declare class WppIconDragAndDrop {
    protected z: NgZone;
    protected el: HTMLWppIconDragAndDropElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconDragAndDrop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconDragAndDrop, "wpp-icon-drag-and-drop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconDragAndDrop extends Components.WppIconDragAndDrop {
}
export declare class WppIconEco {
    protected z: NgZone;
    protected el: HTMLWppIconEcoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEco, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEco, "wpp-icon-eco-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEco extends Components.WppIconEco {
}
export declare class WppIconEdit {
    protected z: NgZone;
    protected el: HTMLWppIconEditElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEdit, "wpp-icon-edit-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEdit extends Components.WppIconEdit {
}
export declare class WppIconEditText {
    protected z: NgZone;
    protected el: HTMLWppIconEditTextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditText, "wpp-icon-edit-text-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEditText extends Components.WppIconEditText {
}
export declare class WppIconEditorLowercase {
    protected z: NgZone;
    protected el: HTMLWppIconEditorLowercaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorLowercase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorLowercase, "wpp-icon-editor-lowercase-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEditorLowercase extends Components.WppIconEditorLowercase {
}
export declare class WppIconEditorObjectAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLWppIconEditorObjectAlignmentCenterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorObjectAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorObjectAlignmentCenter, "wpp-icon-editor-object-alignment-center-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEditorObjectAlignmentCenter extends Components.WppIconEditorObjectAlignmentCenter {
}
export declare class WppIconEditorTitle {
    protected z: NgZone;
    protected el: HTMLWppIconEditorTitleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorTitle, "wpp-icon-editor-title-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEditorTitle extends Components.WppIconEditorTitle {
}
export declare class WppIconEditorUppercase {
    protected z: NgZone;
    protected el: HTMLWppIconEditorUppercaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEditorUppercase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEditorUppercase, "wpp-icon-editor-uppercase-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEditorUppercase extends Components.WppIconEditorUppercase {
}
export declare class WppIconEffects {
    protected z: NgZone;
    protected el: HTMLWppIconEffectsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEffects, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEffects, "wpp-icon-effects-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEffects extends Components.WppIconEffects {
}
export declare class WppIconEnlarge {
    protected z: NgZone;
    protected el: HTMLWppIconEnlargeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEnlarge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEnlarge, "wpp-icon-enlarge-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEnlarge extends Components.WppIconEnlarge {
}
export declare class WppIconEnter {
    protected z: NgZone;
    protected el: HTMLWppIconEnterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEnter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEnter, "wpp-icon-enter-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEnter extends Components.WppIconEnter {
}
export declare class WppIconEraser {
    protected z: NgZone;
    protected el: HTMLWppIconEraserElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEraser, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEraser, "wpp-icon-eraser-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEraser extends Components.WppIconEraser {
}
export declare class WppIconError {
    protected z: NgZone;
    protected el: HTMLWppIconErrorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconError, "wpp-icon-error-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconError extends Components.WppIconError {
}
export declare class WppIconEth {
    protected z: NgZone;
    protected el: HTMLWppIconEthElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEth, "wpp-icon-eth-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEth extends Components.WppIconEth {
}
export declare class WppIconEuro {
    protected z: NgZone;
    protected el: HTMLWppIconEuroElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEuro, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEuro, "wpp-icon-euro-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEuro extends Components.WppIconEuro {
}
export declare class WppIconEvent {
    protected z: NgZone;
    protected el: HTMLWppIconEventElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEvent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEvent, "wpp-icon-event-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEvent extends Components.WppIconEvent {
}
export declare class WppIconExpand {
    protected z: NgZone;
    protected el: HTMLWppIconExpandElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExpand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExpand, "wpp-icon-expand-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExpand extends Components.WppIconExpand {
}
export declare class WppIconExperiment {
    protected z: NgZone;
    protected el: HTMLWppIconExperimentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExperiment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExperiment, "wpp-icon-experiment-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExperiment extends Components.WppIconExperiment {
}
export declare class WppIconExport {
    protected z: NgZone;
    protected el: HTMLWppIconExportElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExport, "wpp-icon-export-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExport extends Components.WppIconExport {
}
export declare class WppIconExportFile {
    protected z: NgZone;
    protected el: HTMLWppIconExportFileElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExportFile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExportFile, "wpp-icon-export-file-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExportFile extends Components.WppIconExportFile {
}
export declare class WppIconExtension {
    protected z: NgZone;
    protected el: HTMLWppIconExtensionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExtension, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExtension, "wpp-icon-extension-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExtension extends Components.WppIconExtension {
}
export declare class WppIconExternalLink {
    protected z: NgZone;
    protected el: HTMLWppIconExternalLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconExternalLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconExternalLink, "wpp-icon-external-link-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconExternalLink extends Components.WppIconExternalLink {
}
export declare class WppIconEyeOff {
    protected z: NgZone;
    protected el: HTMLWppIconEyeOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyeOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyeOff, "wpp-icon-eye-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEyeOff extends Components.WppIconEyeOff {
}
export declare class WppIconEyeOn {
    protected z: NgZone;
    protected el: HTMLWppIconEyeOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyeOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyeOn, "wpp-icon-eye-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEyeOn extends Components.WppIconEyeOn {
}
export declare class WppIconEyedropper {
    protected z: NgZone;
    protected el: HTMLWppIconEyedropperElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconEyedropper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconEyedropper, "wpp-icon-eyedropper-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconEyedropper extends Components.WppIconEyedropper {
}
export declare class WppIconFactory {
    protected z: NgZone;
    protected el: HTMLWppIconFactoryElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFactory, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFactory, "wpp-icon-factory-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFactory extends Components.WppIconFactory {
}
export declare class WppIconFavourites {
    protected z: NgZone;
    protected el: HTMLWppIconFavouritesElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavourites, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavourites, "wpp-icon-favourites-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFavourites extends Components.WppIconFavourites {
}
export declare class WppIconFavouritesFilled {
    protected z: NgZone;
    protected el: HTMLWppIconFavouritesFilledElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFavouritesFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFavouritesFilled, "wpp-icon-favourites-filled-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFavouritesFilled extends Components.WppIconFavouritesFilled {
}
export declare class WppIconFile {
    protected z: NgZone;
    protected el: HTMLWppIconFileElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFile, "wpp-icon-file-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFile extends Components.WppIconFile {
}
export declare class WppIconFileCss {
    protected z: NgZone;
    protected el: HTMLWppIconFileCssElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileCss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileCss, "wpp-icon-file-css-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFileCss extends Components.WppIconFileCss {
}
export declare class WppIconFileJs {
    protected z: NgZone;
    protected el: HTMLWppIconFileJsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileJs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileJs, "wpp-icon-file-js-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFileJs extends Components.WppIconFileJs {
}
export declare class WppIconFilePdf {
    protected z: NgZone;
    protected el: HTMLWppIconFilePdfElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFilePdf, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFilePdf, "wpp-icon-file-pdf-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFilePdf extends Components.WppIconFilePdf {
}
export declare class WppIconFileZip {
    protected z: NgZone;
    protected el: HTMLWppIconFileZipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFileZip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFileZip, "wpp-icon-file-zip-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFileZip extends Components.WppIconFileZip {
}
export declare class WppIconFill {
    protected z: NgZone;
    protected el: HTMLWppIconFillElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFill, "wpp-icon-fill-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFill extends Components.WppIconFill {
}
export declare class WppIconFilter {
    protected z: NgZone;
    protected el: HTMLWppIconFilterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFilter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFilter, "wpp-icon-filter-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFilter extends Components.WppIconFilter {
}
export declare class WppIconFingerprint {
    protected z: NgZone;
    protected el: HTMLWppIconFingerprintElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFingerprint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFingerprint, "wpp-icon-fingerprint-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFingerprint extends Components.WppIconFingerprint {
}
export declare class WppIconFitHeight {
    protected z: NgZone;
    protected el: HTMLWppIconFitHeightElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFitHeight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFitHeight, "wpp-icon-fit-height-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFitHeight extends Components.WppIconFitHeight {
}
export declare class WppIconFitWidth {
    protected z: NgZone;
    protected el: HTMLWppIconFitWidthElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFitWidth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFitWidth, "wpp-icon-fit-width-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFitWidth extends Components.WppIconFitWidth {
}
export declare class WppIconFlagOff {
    protected z: NgZone;
    protected el: HTMLWppIconFlagOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlagOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlagOff, "wpp-icon-flag-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFlagOff extends Components.WppIconFlagOff {
}
export declare class WppIconFlagOn {
    protected z: NgZone;
    protected el: HTMLWppIconFlagOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlagOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlagOn, "wpp-icon-flag-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFlagOn extends Components.WppIconFlagOn {
}
export declare class WppIconFlip {
    protected z: NgZone;
    protected el: HTMLWppIconFlipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFlip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFlip, "wpp-icon-flip-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFlip extends Components.WppIconFlip {
}
export declare class WppIconFloatCenter {
    protected z: NgZone;
    protected el: HTMLWppIconFloatCenterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatCenter, "wpp-icon-float-center-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFloatCenter extends Components.WppIconFloatCenter {
}
export declare class WppIconFloatLeft {
    protected z: NgZone;
    protected el: HTMLWppIconFloatLeftElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatLeft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatLeft, "wpp-icon-float-left-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFloatLeft extends Components.WppIconFloatLeft {
}
export declare class WppIconFloatRight {
    protected z: NgZone;
    protected el: HTMLWppIconFloatRightElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFloatRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFloatRight, "wpp-icon-float-right-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFloatRight extends Components.WppIconFloatRight {
}
export declare class WppIconFluidWorkflow {
    protected z: NgZone;
    protected el: HTMLWppIconFluidWorkflowElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFluidWorkflow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFluidWorkflow, "wpp-icon-fluid-workflow-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFluidWorkflow extends Components.WppIconFluidWorkflow {
}
export declare class WppIconFolder {
    protected z: NgZone;
    protected el: HTMLWppIconFolderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolder, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolder, "wpp-icon-folder-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFolder extends Components.WppIconFolder {
}
export declare class WppIconFolderBlocked {
    protected z: NgZone;
    protected el: HTMLWppIconFolderBlockedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderBlocked, "wpp-icon-folder-blocked-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFolderBlocked extends Components.WppIconFolderBlocked {
}
export declare class WppIconFolderLink {
    protected z: NgZone;
    protected el: HTMLWppIconFolderLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderLink, "wpp-icon-folder-link-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFolderLink extends Components.WppIconFolderLink {
}
export declare class WppIconFolderOpen {
    protected z: NgZone;
    protected el: HTMLWppIconFolderOpenElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFolderOpen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFolderOpen, "wpp-icon-folder-open-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFolderOpen extends Components.WppIconFolderOpen {
}
export declare class WppIconFont {
    protected z: NgZone;
    protected el: HTMLWppIconFontElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFont, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFont, "wpp-icon-font-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFont extends Components.WppIconFont {
}
export declare class WppIconForward {
    protected z: NgZone;
    protected el: HTMLWppIconForwardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconForward, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconForward, "wpp-icon-forward-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconForward extends Components.WppIconForward {
}
export declare class WppIconFrame {
    protected z: NgZone;
    protected el: HTMLWppIconFrameElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFrame, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFrame, "wpp-icon-frame-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFrame extends Components.WppIconFrame {
}
export declare class WppIconFullscreen {
    protected z: NgZone;
    protected el: HTMLWppIconFullscreenElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFullscreen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFullscreen, "wpp-icon-fullscreen-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFullscreen extends Components.WppIconFullscreen {
}
export declare class WppIconFullscreenMinimise {
    protected z: NgZone;
    protected el: HTMLWppIconFullscreenMinimiseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconFullscreenMinimise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconFullscreenMinimise, "wpp-icon-fullscreen-minimise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconFullscreenMinimise extends Components.WppIconFullscreenMinimise {
}
export declare class WppIconGallery {
    protected z: NgZone;
    protected el: HTMLWppIconGalleryElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGallery, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGallery, "wpp-icon-gallery-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGallery extends Components.WppIconGallery {
}
export declare class WppIconGasStation {
    protected z: NgZone;
    protected el: HTMLWppIconGasStationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGasStation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGasStation, "wpp-icon-gas-station-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGasStation extends Components.WppIconGasStation {
}
export declare class WppIconGear {
    protected z: NgZone;
    protected el: HTMLWppIconGearElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGear, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGear, "wpp-icon-gear-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGear extends Components.WppIconGear {
}
export declare class WppIconGif {
    protected z: NgZone;
    protected el: HTMLWppIconGifElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGif, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGif, "wpp-icon-gif-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGif extends Components.WppIconGif {
}
export declare class WppIconGlobe {
    protected z: NgZone;
    protected el: HTMLWppIconGlobeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGlobe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGlobe, "wpp-icon-globe-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGlobe extends Components.WppIconGlobe {
}
export declare class WppIconGps {
    protected z: NgZone;
    protected el: HTMLWppIconGpsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGps, "wpp-icon-gps-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGps extends Components.WppIconGps {
}
export declare class WppIconGraph {
    protected z: NgZone;
    protected el: HTMLWppIconGraphElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGraph, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGraph, "wpp-icon-graph-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGraph extends Components.WppIconGraph {
}
export declare class WppIconGrid {
    protected z: NgZone;
    protected el: HTMLWppIconGridElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconGrid, "wpp-icon-grid-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconGrid extends Components.WppIconGrid {
}
export declare class WppIconH1 {
    protected z: NgZone;
    protected el: HTMLWppIconH1Element;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH1, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH1, "wpp-icon-h1-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconH1 extends Components.WppIconH1 {
}
export declare class WppIconH2 {
    protected z: NgZone;
    protected el: HTMLWppIconH2Element;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH2, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH2, "wpp-icon-h2-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconH2 extends Components.WppIconH2 {
}
export declare class WppIconH3 {
    protected z: NgZone;
    protected el: HTMLWppIconH3Element;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconH3, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconH3, "wpp-icon-h3-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconH3 extends Components.WppIconH3 {
}
export declare class WppIconHandDraw {
    protected z: NgZone;
    protected el: HTMLWppIconHandDrawElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandDraw, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandDraw, "wpp-icon-hand-draw-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHandDraw extends Components.WppIconHandDraw {
}
export declare class WppIconHandOff {
    protected z: NgZone;
    protected el: HTMLWppIconHandOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandOff, "wpp-icon-hand-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHandOff extends Components.WppIconHandOff {
}
export declare class WppIconHandOn {
    protected z: NgZone;
    protected el: HTMLWppIconHandOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHandOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHandOn, "wpp-icon-hand-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHandOn extends Components.WppIconHandOn {
}
export declare class WppIconHash {
    protected z: NgZone;
    protected el: HTMLWppIconHashElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHash, "wpp-icon-hash-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHash extends Components.WppIconHash {
}
export declare class WppIconHd {
    protected z: NgZone;
    protected el: HTMLWppIconHdElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHd, "wpp-icon-hd-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHd extends Components.WppIconHd {
}
export declare class WppIconHdr {
    protected z: NgZone;
    protected el: HTMLWppIconHdrElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHdr, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHdr, "wpp-icon-hdr-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHdr extends Components.WppIconHdr {
}
export declare class WppIconHeadphones {
    protected z: NgZone;
    protected el: HTMLWppIconHeadphonesElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHeadphones, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHeadphones, "wpp-icon-headphones-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHeadphones extends Components.WppIconHeadphones {
}
export declare class WppIconHelp {
    protected z: NgZone;
    protected el: HTMLWppIconHelpElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHelp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHelp, "wpp-icon-help-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHelp extends Components.WppIconHelp {
}
export declare class WppIconHistory {
    protected z: NgZone;
    protected el: HTMLWppIconHistoryElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHistory, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHistory, "wpp-icon-history-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHistory extends Components.WppIconHistory {
}
export declare class WppIconHome {
    protected z: NgZone;
    protected el: HTMLWppIconHomeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHome, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHome, "wpp-icon-home-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHome extends Components.WppIconHome {
}
export declare class WppIconHomeCheckmark {
    protected z: NgZone;
    protected el: HTMLWppIconHomeCheckmarkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHomeCheckmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHomeCheckmark, "wpp-icon-home-checkmark-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHomeCheckmark extends Components.WppIconHomeCheckmark {
}
export declare class WppIconHospital {
    protected z: NgZone;
    protected el: HTMLWppIconHospitalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHospital, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHospital, "wpp-icon-hospital-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHospital extends Components.WppIconHospital {
}
export declare class WppIconHub {
    protected z: NgZone;
    protected el: HTMLWppIconHubElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconHub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconHub, "wpp-icon-hub-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconHub extends Components.WppIconHub {
}
export declare class WppIconIcons {
    protected z: NgZone;
    protected el: HTMLWppIconIconsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIcons, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIcons, "wpp-icon-icons-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIcons extends Components.WppIconIcons {
}
export declare class WppIconIdea {
    protected z: NgZone;
    protected el: HTMLWppIconIdeaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIdea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIdea, "wpp-icon-idea-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIdea extends Components.WppIconIdea {
}
export declare class WppIconIframe {
    protected z: NgZone;
    protected el: HTMLWppIconIframeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIframe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIframe, "wpp-icon-iframe-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIframe extends Components.WppIconIframe {
}
export declare class WppIconImage {
    protected z: NgZone;
    protected el: HTMLWppIconImageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImage, "wpp-icon-image-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconImage extends Components.WppIconImage {
}
export declare class WppIconImageOff {
    protected z: NgZone;
    protected el: HTMLWppIconImageOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImageOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImageOff, "wpp-icon-image-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconImageOff extends Components.WppIconImageOff {
}
export declare class WppIconImport {
    protected z: NgZone;
    protected el: HTMLWppIconImportElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconImport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconImport, "wpp-icon-import-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconImport extends Components.WppIconImport {
}
export declare class WppIconInbox {
    protected z: NgZone;
    protected el: HTMLWppIconInboxElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInbox, "wpp-icon-inbox-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconInbox extends Components.WppIconInbox {
}
export declare class WppIconIncognito {
    protected z: NgZone;
    protected el: HTMLWppIconIncognitoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncognito, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncognito, "wpp-icon-incognito-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIncognito extends Components.WppIconIncognito {
}
export declare class WppIconIncomplete {
    protected z: NgZone;
    protected el: HTMLWppIconIncompleteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncomplete, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncomplete, "wpp-icon-incomplete-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIncomplete extends Components.WppIconIncomplete {
}
export declare class WppIconIncrease {
    protected z: NgZone;
    protected el: HTMLWppIconIncreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIncrease, "wpp-icon-increase-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIncrease extends Components.WppIconIncrease {
}
export declare class WppIconIndentDecrease {
    protected z: NgZone;
    protected el: HTMLWppIconIndentDecreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIndentDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIndentDecrease, "wpp-icon-indent-decrease-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIndentDecrease extends Components.WppIconIndentDecrease {
}
export declare class WppIconIndentIncrease {
    protected z: NgZone;
    protected el: HTMLWppIconIndentIncreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconIndentIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconIndentIncrease, "wpp-icon-indent-increase-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconIndentIncrease extends Components.WppIconIndentIncrease {
}
export declare class WppIconInfo {
    protected z: NgZone;
    protected el: HTMLWppIconInfoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInfo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInfo, "wpp-icon-info-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconInfo extends Components.WppIconInfo {
}
export declare class WppIconInfoMessage {
    protected z: NgZone;
    protected el: HTMLWppIconInfoMessageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInfoMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInfoMessage, "wpp-icon-info-message-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconInfoMessage extends Components.WppIconInfoMessage {
}
export declare class WppIconInstallUpdate {
    protected z: NgZone;
    protected el: HTMLWppIconInstallUpdateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconInstallUpdate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconInstallUpdate, "wpp-icon-install-update-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconInstallUpdate extends Components.WppIconInstallUpdate {
}
export declare class WppIconItalic {
    protected z: NgZone;
    protected el: HTMLWppIconItalicElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconItalic, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconItalic, "wpp-icon-italic-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconItalic extends Components.WppIconItalic {
}
export declare class WppIconJavaScript {
    protected z: NgZone;
    protected el: HTMLWppIconJavaScriptElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconJavaScript, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconJavaScript, "wpp-icon-java-script-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconJavaScript extends Components.WppIconJavaScript {
}
export declare class WppIconJoin {
    protected z: NgZone;
    protected el: HTMLWppIconJoinElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconJoin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconJoin, "wpp-icon-join-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconJoin extends Components.WppIconJoin {
}
export declare class WppIconKey {
    protected z: NgZone;
    protected el: HTMLWppIconKeyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconKey, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconKey, "wpp-icon-key-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconKey extends Components.WppIconKey {
}
export declare class WppIconKeyboard {
    protected z: NgZone;
    protected el: HTMLWppIconKeyboardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconKeyboard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconKeyboard, "wpp-icon-keyboard-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconKeyboard extends Components.WppIconKeyboard {
}
export declare class WppIconLaptop {
    protected z: NgZone;
    protected el: HTMLWppIconLaptopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaptop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaptop, "wpp-icon-laptop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLaptop extends Components.WppIconLaptop {
}
export declare class WppIconLaugh {
    protected z: NgZone;
    protected el: HTMLWppIconLaughElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaugh, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaugh, "wpp-icon-laugh-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLaugh extends Components.WppIconLaugh {
}
export declare class WppIconLaunch {
    protected z: NgZone;
    protected el: HTMLWppIconLaunchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLaunch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLaunch, "wpp-icon-launch-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLaunch extends Components.WppIconLaunch {
}
export declare class WppIconLayer {
    protected z: NgZone;
    protected el: HTMLWppIconLayerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLayer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLayer, "wpp-icon-layer-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLayer extends Components.WppIconLayer {
}
export declare class WppIconLeaf {
    protected z: NgZone;
    protected el: HTMLWppIconLeafElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLeaf, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLeaf, "wpp-icon-leaf-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLeaf extends Components.WppIconLeaf {
}
export declare class WppIconLibrary {
    protected z: NgZone;
    protected el: HTMLWppIconLibraryElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLibrary, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLibrary, "wpp-icon-library-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLibrary extends Components.WppIconLibrary {
}
export declare class WppIconLibraryBuilding {
    protected z: NgZone;
    protected el: HTMLWppIconLibraryBuildingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLibraryBuilding, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLibraryBuilding, "wpp-icon-library-building-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLibraryBuilding extends Components.WppIconLibraryBuilding {
}
export declare class WppIconLikeOff {
    protected z: NgZone;
    protected el: HTMLWppIconLikeOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLikeOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLikeOff, "wpp-icon-like-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLikeOff extends Components.WppIconLikeOff {
}
export declare class WppIconLikeOn {
    protected z: NgZone;
    protected el: HTMLWppIconLikeOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLikeOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLikeOn, "wpp-icon-like-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLikeOn extends Components.WppIconLikeOn {
}
export declare class WppIconLink {
    protected z: NgZone;
    protected el: HTMLWppIconLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLink, "wpp-icon-link-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLink extends Components.WppIconLink {
}
export declare class WppIconLive {
    protected z: NgZone;
    protected el: HTMLWppIconLiveElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLive, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLive, "wpp-icon-live-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLive extends Components.WppIconLive {
}
export declare class WppIconLocation {
    protected z: NgZone;
    protected el: HTMLWppIconLocationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLocation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLocation, "wpp-icon-location-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLocation extends Components.WppIconLocation {
}
export declare class WppIconLockOff {
    protected z: NgZone;
    protected el: HTMLWppIconLockOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLockOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLockOff, "wpp-icon-lock-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLockOff extends Components.WppIconLockOff {
}
export declare class WppIconLockOn {
    protected z: NgZone;
    protected el: HTMLWppIconLockOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLockOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLockOn, "wpp-icon-lock-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLockOn extends Components.WppIconLockOn {
}
export declare class WppIconLodging {
    protected z: NgZone;
    protected el: HTMLWppIconLodgingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLodging, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLodging, "wpp-icon-lodging-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLodging extends Components.WppIconLodging {
}
export declare class WppIconLogin {
    protected z: NgZone;
    protected el: HTMLWppIconLoginElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLogin, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLogin, "wpp-icon-login-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLogin extends Components.WppIconLogin {
}
export declare class WppIconLogout {
    protected z: NgZone;
    protected el: HTMLWppIconLogoutElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconLogout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconLogout, "wpp-icon-logout-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconLogout extends Components.WppIconLogout {
}
export declare class WppIconMagicWand {
    protected z: NgZone;
    protected el: HTMLWppIconMagicWandElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMagicWand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMagicWand, "wpp-icon-magic-wand-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMagicWand extends Components.WppIconMagicWand {
}
export declare class WppIconMail {
    protected z: NgZone;
    protected el: HTMLWppIconMailElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMail, "wpp-icon-mail-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMail extends Components.WppIconMail {
}
export declare class WppIconMailAdd {
    protected z: NgZone;
    protected el: HTMLWppIconMailAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailAdd, "wpp-icon-mail-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailAdd extends Components.WppIconMailAdd {
}
export declare class WppIconMailAllRead {
    protected z: NgZone;
    protected el: HTMLWppIconMailAllReadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailAllRead, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailAllRead, "wpp-icon-mail-all-read-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailAllRead extends Components.WppIconMailAllRead {
}
export declare class WppIconMailBlocked {
    protected z: NgZone;
    protected el: HTMLWppIconMailBlockedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailBlocked, "wpp-icon-mail-blocked-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailBlocked extends Components.WppIconMailBlocked {
}
export declare class WppIconMailCopy {
    protected z: NgZone;
    protected el: HTMLWppIconMailCopyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailCopy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailCopy, "wpp-icon-mail-copy-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailCopy extends Components.WppIconMailCopy {
}
export declare class WppIconMailOff {
    protected z: NgZone;
    protected el: HTMLWppIconMailOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailOff, "wpp-icon-mail-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailOff extends Components.WppIconMailOff {
}
export declare class WppIconMailRead {
    protected z: NgZone;
    protected el: HTMLWppIconMailReadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMailRead, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMailRead, "wpp-icon-mail-read-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMailRead extends Components.WppIconMailRead {
}
export declare class WppIconMap {
    protected z: NgZone;
    protected el: HTMLWppIconMapElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMap, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMap, "wpp-icon-map-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMap extends Components.WppIconMap {
}
export declare class WppIconMathFormula {
    protected z: NgZone;
    protected el: HTMLWppIconMathFormulaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMathFormula, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMathFormula, "wpp-icon-math-formula-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMathFormula extends Components.WppIconMathFormula {
}
export declare class WppIconMaximise {
    protected z: NgZone;
    protected el: HTMLWppIconMaximiseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMaximise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMaximise, "wpp-icon-maximise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMaximise extends Components.WppIconMaximise {
}
export declare class WppIconMeet {
    protected z: NgZone;
    protected el: HTMLWppIconMeetElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMeet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMeet, "wpp-icon-meet-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMeet extends Components.WppIconMeet {
}
export declare class WppIconMention {
    protected z: NgZone;
    protected el: HTMLWppIconMentionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMention, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMention, "wpp-icon-mention-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMention extends Components.WppIconMention {
}
export declare class WppIconMerge {
    protected z: NgZone;
    protected el: HTMLWppIconMergeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMerge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMerge, "wpp-icon-merge-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMerge extends Components.WppIconMerge {
}
export declare class WppIconMicBlocked {
    protected z: NgZone;
    protected el: HTMLWppIconMicBlockedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicBlocked, "wpp-icon-mic-blocked-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMicBlocked extends Components.WppIconMicBlocked {
}
export declare class WppIconMicOff {
    protected z: NgZone;
    protected el: HTMLWppIconMicOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicOff, "wpp-icon-mic-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMicOff extends Components.WppIconMicOff {
}
export declare class WppIconMicOn {
    protected z: NgZone;
    protected el: HTMLWppIconMicOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMicOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMicOn, "wpp-icon-mic-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMicOn extends Components.WppIconMicOn {
}
export declare class WppIconMinimise {
    protected z: NgZone;
    protected el: HTMLWppIconMinimiseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMinimise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMinimise, "wpp-icon-minimise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMinimise extends Components.WppIconMinimise {
}
export declare class WppIconMobile {
    protected z: NgZone;
    protected el: HTMLWppIconMobileElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMobile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMobile, "wpp-icon-mobile-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMobile extends Components.WppIconMobile {
}
export declare class WppIconMoney {
    protected z: NgZone;
    protected el: HTMLWppIconMoneyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMoney, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMoney, "wpp-icon-money-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMoney extends Components.WppIconMoney {
}
export declare class WppIconMore {
    protected z: NgZone;
    protected el: HTMLWppIconMoreElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMore, "wpp-icon-more-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMore extends Components.WppIconMore {
}
export declare class WppIconMove {
    protected z: NgZone;
    protected el: HTMLWppIconMoveElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMove, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMove, "wpp-icon-move-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMove extends Components.WppIconMove {
}
export declare class WppIconMovie {
    protected z: NgZone;
    protected el: HTMLWppIconMovieElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMovie, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMovie, "wpp-icon-movie-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMovie extends Components.WppIconMovie {
}
export declare class WppIconMultipleEmotions {
    protected z: NgZone;
    protected el: HTMLWppIconMultipleEmotionsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMultipleEmotions, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMultipleEmotions, "wpp-icon-multiple-emotions-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMultipleEmotions extends Components.WppIconMultipleEmotions {
}
export declare class WppIconMusic {
    protected z: NgZone;
    protected el: HTMLWppIconMusicElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconMusic, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconMusic, "wpp-icon-music-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconMusic extends Components.WppIconMusic {
}
export declare class WppIconNavigationMenu {
    protected z: NgZone;
    protected el: HTMLWppIconNavigationMenuElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNavigationMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNavigationMenu, "wpp-icon-navigation-menu-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNavigationMenu extends Components.WppIconNavigationMenu {
}
export declare class WppIconNeutral {
    protected z: NgZone;
    protected el: HTMLWppIconNeutralElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNeutral, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNeutral, "wpp-icon-neutral-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNeutral extends Components.WppIconNeutral {
}
export declare class WppIconNeutralTrading {
    protected z: NgZone;
    protected el: HTMLWppIconNeutralTradingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNeutralTrading, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNeutralTrading, "wpp-icon-neutral-trading-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNeutralTrading extends Components.WppIconNeutralTrading {
}
export declare class WppIconNewspaper {
    protected z: NgZone;
    protected el: HTMLWppIconNewspaperElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNewspaper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNewspaper, "wpp-icon-newspaper-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNewspaper extends Components.WppIconNewspaper {
}
export declare class WppIconNext {
    protected z: NgZone;
    protected el: HTMLWppIconNextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNext, "wpp-icon-next-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNext extends Components.WppIconNext {
}
export declare class WppIconNightLife {
    protected z: NgZone;
    protected el: HTMLWppIconNightLifeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNightLife, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNightLife, "wpp-icon-night-life-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNightLife extends Components.WppIconNightLife {
}
export declare class WppIconNote {
    protected z: NgZone;
    protected el: HTMLWppIconNoteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNote, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNote, "wpp-icon-note-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNote extends Components.WppIconNote {
}
export declare class WppIconNotificationNew {
    protected z: NgZone;
    protected el: HTMLWppIconNotificationNewElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationNew, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationNew, "wpp-icon-notification-new-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNotificationNew extends Components.WppIconNotificationNew {
}
export declare class WppIconNotificationOff {
    protected z: NgZone;
    protected el: HTMLWppIconNotificationOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationOff, "wpp-icon-notification-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNotificationOff extends Components.WppIconNotificationOff {
}
export declare class WppIconNotificationOn {
    protected z: NgZone;
    protected el: HTMLWppIconNotificationOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationOn, "wpp-icon-notification-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNotificationOn extends Components.WppIconNotificationOn {
}
export declare class WppIconNotificationPause {
    protected z: NgZone;
    protected el: HTMLWppIconNotificationPauseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNotificationPause, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNotificationPause, "wpp-icon-notification-pause-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNotificationPause extends Components.WppIconNotificationPause {
}
export declare class WppIconNuclearDanger {
    protected z: NgZone;
    protected el: HTMLWppIconNuclearDangerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNuclearDanger, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNuclearDanger, "wpp-icon-nuclear-danger-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNuclearDanger extends Components.WppIconNuclearDanger {
}
export declare class WppIconNumber {
    protected z: NgZone;
    protected el: HTMLWppIconNumberElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconNumber, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconNumber, "wpp-icon-number-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconNumber extends Components.WppIconNumber {
}
export declare class WppIconObjectAlignment {
    protected z: NgZone;
    protected el: HTMLWppIconObjectAlignmentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconObjectAlignment, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconObjectAlignment, "wpp-icon-object-alignment-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconObjectAlignment extends Components.WppIconObjectAlignment {
}
export declare class WppIconObjectAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLWppIconObjectAlignmentCenterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconObjectAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconObjectAlignmentCenter, "wpp-icon-object-alignment-center-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconObjectAlignmentCenter extends Components.WppIconObjectAlignmentCenter {
}
export declare class WppIconOrderedList {
    protected z: NgZone;
    protected el: HTMLWppIconOrderedListElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrderedList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrderedList, "wpp-icon-ordered-list-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOrderedList extends Components.WppIconOrderedList {
}
export declare class WppIconOrganization {
    protected z: NgZone;
    protected el: HTMLWppIconOrganizationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrganization, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrganization, "wpp-icon-organization-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOrganization extends Components.WppIconOrganization {
}
export declare class WppIconOrientation {
    protected z: NgZone;
    protected el: HTMLWppIconOrientationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOrientation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOrientation, "wpp-icon-orientation-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOrientation extends Components.WppIconOrientation {
}
export declare class WppIconOutdoor {
    protected z: NgZone;
    protected el: HTMLWppIconOutdoorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOutdoor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOutdoor, "wpp-icon-outdoor-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOutdoor extends Components.WppIconOutdoor {
}
export declare class WppIconOutdoorMedia {
    protected z: NgZone;
    protected el: HTMLWppIconOutdoorMediaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOutdoorMedia, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOutdoorMedia, "wpp-icon-outdoor-media-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOutdoorMedia extends Components.WppIconOutdoorMedia {
}
export declare class WppIconOwner {
    protected z: NgZone;
    protected el: HTMLWppIconOwnerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconOwner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconOwner, "wpp-icon-owner-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconOwner extends Components.WppIconOwner {
}
export declare class WppIconPadding {
    protected z: NgZone;
    protected el: HTMLWppIconPaddingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPadding, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPadding, "wpp-icon-padding-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPadding extends Components.WppIconPadding {
}
export declare class WppIconPair {
    protected z: NgZone;
    protected el: HTMLWppIconPairElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPair, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPair, "wpp-icon-pair-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPair extends Components.WppIconPair {
}
export declare class WppIconParking {
    protected z: NgZone;
    protected el: HTMLWppIconParkingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconParking, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconParking, "wpp-icon-parking-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconParking extends Components.WppIconParking {
}
export declare class WppIconPaste {
    protected z: NgZone;
    protected el: HTMLWppIconPasteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPaste, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPaste, "wpp-icon-paste-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPaste extends Components.WppIconPaste {
}
export declare class WppIconPause {
    protected z: NgZone;
    protected el: HTMLWppIconPauseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPause, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPause, "wpp-icon-pause-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPause extends Components.WppIconPause {
}
export declare class WppIconPen {
    protected z: NgZone;
    protected el: HTMLWppIconPenElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPen, "wpp-icon-pen-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPen extends Components.WppIconPen {
}
export declare class WppIconPending {
    protected z: NgZone;
    protected el: HTMLWppIconPendingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPending, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPending, "wpp-icon-pending-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPending extends Components.WppIconPending {
}
export declare class WppIconPentagon {
    protected z: NgZone;
    protected el: HTMLWppIconPentagonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPentagon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPentagon, "wpp-icon-pentagon-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPentagon extends Components.WppIconPentagon {
}
export declare class WppIconPeople {
    protected z: NgZone;
    protected el: HTMLWppIconPeopleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPeople, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPeople, "wpp-icon-people-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPeople extends Components.WppIconPeople {
}
export declare class WppIconPharmacy {
    protected z: NgZone;
    protected el: HTMLWppIconPharmacyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPharmacy, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPharmacy, "wpp-icon-pharmacy-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPharmacy extends Components.WppIconPharmacy {
}
export declare class WppIconPhone {
    protected z: NgZone;
    protected el: HTMLWppIconPhoneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPhone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPhone, "wpp-icon-phone-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPhone extends Components.WppIconPhone {
}
export declare class WppIconPieChart {
    protected z: NgZone;
    protected el: HTMLWppIconPieChartElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPieChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPieChart, "wpp-icon-pie-chart-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPieChart extends Components.WppIconPieChart {
}
export declare class WppIconPinned {
    protected z: NgZone;
    protected el: HTMLWppIconPinnedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPinned, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPinned, "wpp-icon-pinned-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPinned extends Components.WppIconPinned {
}
export declare class WppIconPitch {
    protected z: NgZone;
    protected el: HTMLWppIconPitchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPitch, "wpp-icon-pitch-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPitch extends Components.WppIconPitch {
}
export declare class WppIconPlay {
    protected z: NgZone;
    protected el: HTMLWppIconPlayElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlay, "wpp-icon-play-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPlay extends Components.WppIconPlay {
}
export declare class WppIconPlayerStop {
    protected z: NgZone;
    protected el: HTMLWppIconPlayerStopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlayerStop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlayerStop, "wpp-icon-player-stop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPlayerStop extends Components.WppIconPlayerStop {
}
export declare class WppIconPlus {
    protected z: NgZone;
    protected el: HTMLWppIconPlusElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlus, "wpp-icon-plus-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPlus extends Components.WppIconPlus {
}
export declare class WppIconPlusCircle {
    protected z: NgZone;
    protected el: HTMLWppIconPlusCircleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPlusCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPlusCircle, "wpp-icon-plus-circle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPlusCircle extends Components.WppIconPlusCircle {
}
export declare class WppIconPolice {
    protected z: NgZone;
    protected el: HTMLWppIconPoliceElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPolice, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPolice, "wpp-icon-police-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPolice extends Components.WppIconPolice {
}
export declare class WppIconPost {
    protected z: NgZone;
    protected el: HTMLWppIconPostElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPost, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPost, "wpp-icon-post-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPost extends Components.WppIconPost {
}
export declare class WppIconPound {
    protected z: NgZone;
    protected el: HTMLWppIconPoundElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPound, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPound, "wpp-icon-pound-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPound extends Components.WppIconPound {
}
export declare class WppIconPremium {
    protected z: NgZone;
    protected el: HTMLWppIconPremiumElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPremium, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPremium, "wpp-icon-premium-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPremium extends Components.WppIconPremium {
}
export declare class WppIconPrevious {
    protected z: NgZone;
    protected el: HTMLWppIconPreviousElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrevious, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrevious, "wpp-icon-previous-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPrevious extends Components.WppIconPrevious {
}
export declare class WppIconPrint {
    protected z: NgZone;
    protected el: HTMLWppIconPrintElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrint, "wpp-icon-print-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPrint extends Components.WppIconPrint {
}
export declare class WppIconPrivateAccount {
    protected z: NgZone;
    protected el: HTMLWppIconPrivateAccountElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconPrivateAccount, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconPrivateAccount, "wpp-icon-private-account-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconPrivateAccount extends Components.WppIconPrivateAccount {
}
export declare class WppIconQa {
    protected z: NgZone;
    protected el: HTMLWppIconQaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconQa, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconQa, "wpp-icon-qa-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconQa extends Components.WppIconQa {
}
export declare class WppIconQrCode {
    protected z: NgZone;
    protected el: HTMLWppIconQrCodeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconQrCode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconQrCode, "wpp-icon-qr-code-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconQrCode extends Components.WppIconQrCode {
}
export declare class WppIconRadio {
    protected z: NgZone;
    protected el: HTMLWppIconRadioElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRadio, "wpp-icon-radio-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRadio extends Components.WppIconRadio {
}
export declare class WppIconRanking {
    protected z: NgZone;
    protected el: HTMLWppIconRankingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRanking, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRanking, "wpp-icon-ranking-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRanking extends Components.WppIconRanking {
}
export declare class WppIconRatio {
    protected z: NgZone;
    protected el: HTMLWppIconRatioElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRatio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRatio, "wpp-icon-ratio-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRatio extends Components.WppIconRatio {
}
export declare class WppIconRecord {
    protected z: NgZone;
    protected el: HTMLWppIconRecordElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecord, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecord, "wpp-icon-record-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRecord extends Components.WppIconRecord {
}
export declare class WppIconRecordStop {
    protected z: NgZone;
    protected el: HTMLWppIconRecordStopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecordStop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecordStop, "wpp-icon-record-stop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRecordStop extends Components.WppIconRecordStop {
}
export declare class WppIconRectangle {
    protected z: NgZone;
    protected el: HTMLWppIconRectangleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRectangle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRectangle, "wpp-icon-rectangle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRectangle extends Components.WppIconRectangle {
}
export declare class WppIconRecycle {
    protected z: NgZone;
    protected el: HTMLWppIconRecycleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRecycle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRecycle, "wpp-icon-recycle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRecycle extends Components.WppIconRecycle {
}
export declare class WppIconRedo {
    protected z: NgZone;
    protected el: HTMLWppIconRedoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRedo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRedo, "wpp-icon-redo-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRedo extends Components.WppIconRedo {
}
export declare class WppIconRefresh {
    protected z: NgZone;
    protected el: HTMLWppIconRefreshElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRefresh, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRefresh, "wpp-icon-refresh-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRefresh extends Components.WppIconRefresh {
}
export declare class WppIconRefreshDashed {
    protected z: NgZone;
    protected el: HTMLWppIconRefreshDashedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRefreshDashed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRefreshDashed, "wpp-icon-refresh-dashed-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRefreshDashed extends Components.WppIconRefreshDashed {
}
export declare class WppIconReject {
    protected z: NgZone;
    protected el: HTMLWppIconRejectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReject, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReject, "wpp-icon-reject-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconReject extends Components.WppIconReject {
}
export declare class WppIconRemove {
    protected z: NgZone;
    protected el: HTMLWppIconRemoveElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemove, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemove, "wpp-icon-remove-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRemove extends Components.WppIconRemove {
}
export declare class WppIconRemoveApp {
    protected z: NgZone;
    protected el: HTMLWppIconRemoveAppElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemoveApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemoveApp, "wpp-icon-remove-app-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRemoveApp extends Components.WppIconRemoveApp {
}
export declare class WppIconRemoveCircle {
    protected z: NgZone;
    protected el: HTMLWppIconRemoveCircleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRemoveCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRemoveCircle, "wpp-icon-remove-circle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRemoveCircle extends Components.WppIconRemoveCircle {
}
export declare class WppIconRepeatOff {
    protected z: NgZone;
    protected el: HTMLWppIconRepeatOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRepeatOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRepeatOff, "wpp-icon-repeat-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRepeatOff extends Components.WppIconRepeatOff {
}
export declare class WppIconRepeatOn {
    protected z: NgZone;
    protected el: HTMLWppIconRepeatOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRepeatOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRepeatOn, "wpp-icon-repeat-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRepeatOn extends Components.WppIconRepeatOn {
}
export declare class WppIconReply {
    protected z: NgZone;
    protected el: HTMLWppIconReplyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReply, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReply, "wpp-icon-reply-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconReply extends Components.WppIconReply {
}
export declare class WppIconReplyAll {
    protected z: NgZone;
    protected el: HTMLWppIconReplyAllElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReplyAll, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReplyAll, "wpp-icon-reply-all-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconReplyAll extends Components.WppIconReplyAll {
}
export declare class WppIconReset {
    protected z: NgZone;
    protected el: HTMLWppIconResetElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconReset, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconReset, "wpp-icon-reset-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconReset extends Components.WppIconReset {
}
export declare class WppIconResetDashed {
    protected z: NgZone;
    protected el: HTMLWppIconResetDashedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResetDashed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResetDashed, "wpp-icon-reset-dashed-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconResetDashed extends Components.WppIconResetDashed {
}
export declare class WppIconResize {
    protected z: NgZone;
    protected el: HTMLWppIconResizeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResize, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResize, "wpp-icon-resize-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconResize extends Components.WppIconResize {
}
export declare class WppIconResizeLarge {
    protected z: NgZone;
    protected el: HTMLWppIconResizeLargeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResizeLarge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResizeLarge, "wpp-icon-resize-large-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconResizeLarge extends Components.WppIconResizeLarge {
}
export declare class WppIconResizeSmall {
    protected z: NgZone;
    protected el: HTMLWppIconResizeSmallElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconResizeSmall, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconResizeSmall, "wpp-icon-resize-small-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconResizeSmall extends Components.WppIconResizeSmall {
}
export declare class WppIconRestaurant {
    protected z: NgZone;
    protected el: HTMLWppIconRestaurantElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRestaurant, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRestaurant, "wpp-icon-restaurant-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRestaurant extends Components.WppIconRestaurant {
}
export declare class WppIconRhombus {
    protected z: NgZone;
    protected el: HTMLWppIconRhombusElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRhombus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRhombus, "wpp-icon-rhombus-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRhombus extends Components.WppIconRhombus {
}
export declare class WppIconRotate {
    protected z: NgZone;
    protected el: HTMLWppIconRotateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotate, "wpp-icon-rotate-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRotate extends Components.WppIconRotate {
}
export declare class WppIconRotateClockwise {
    protected z: NgZone;
    protected el: HTMLWppIconRotateClockwiseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotateClockwise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotateClockwise, "wpp-icon-rotate-clockwise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRotateClockwise extends Components.WppIconRotateClockwise {
}
export declare class WppIconRotateCounterclockwise {
    protected z: NgZone;
    protected el: HTMLWppIconRotateCounterclockwiseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRotateCounterclockwise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRotateCounterclockwise, "wpp-icon-rotate-counterclockwise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRotateCounterclockwise extends Components.WppIconRotateCounterclockwise {
}
export declare class WppIconRss {
    protected z: NgZone;
    protected el: HTMLWppIconRssElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRss, "wpp-icon-rss-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRss extends Components.WppIconRss {
}
export declare class WppIconRupee {
    protected z: NgZone;
    protected el: HTMLWppIconRupeeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconRupee, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconRupee, "wpp-icon-rupee-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconRupee extends Components.WppIconRupee {
}
export declare class WppIconSad {
    protected z: NgZone;
    protected el: HTMLWppIconSadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSad, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSad, "wpp-icon-sad-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSad extends Components.WppIconSad {
}
export declare class WppIconSadSlightly {
    protected z: NgZone;
    protected el: HTMLWppIconSadSlightlyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSadSlightly, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSadSlightly, "wpp-icon-sad-slightly-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSadSlightly extends Components.WppIconSadSlightly {
}
export declare class WppIconScale {
    protected z: NgZone;
    protected el: HTMLWppIconScaleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScale, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScale, "wpp-icon-scale-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconScale extends Components.WppIconScale {
}
export declare class WppIconScaleBottom {
    protected z: NgZone;
    protected el: HTMLWppIconScaleBottomElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScaleBottom, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScaleBottom, "wpp-icon-scale-bottom-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconScaleBottom extends Components.WppIconScaleBottom {
}
export declare class WppIconScan {
    protected z: NgZone;
    protected el: HTMLWppIconScanElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconScan, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconScan, "wpp-icon-scan-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconScan extends Components.WppIconScan {
}
export declare class WppIconSchool {
    protected z: NgZone;
    protected el: HTMLWppIconSchoolElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSchool, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSchool, "wpp-icon-school-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSchool extends Components.WppIconSchool {
}
export declare class WppIconSearch {
    protected z: NgZone;
    protected el: HTMLWppIconSearchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSearch, "wpp-icon-search-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSearch extends Components.WppIconSearch {
}
export declare class WppIconSegmentedControl {
    protected z: NgZone;
    protected el: HTMLWppIconSegmentedControlElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSegmentedControl, "wpp-icon-segmented-control-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSegmentedControl extends Components.WppIconSegmentedControl {
}
export declare class WppIconSelectObject {
    protected z: NgZone;
    protected el: HTMLWppIconSelectObjectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSelectObject, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSelectObject, "wpp-icon-select-object-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSelectObject extends Components.WppIconSelectObject {
}
export declare class WppIconSend {
    protected z: NgZone;
    protected el: HTMLWppIconSendElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSend, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSend, "wpp-icon-send-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSend extends Components.WppIconSend {
}
export declare class WppIconSendOff {
    protected z: NgZone;
    protected el: HTMLWppIconSendOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSendOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSendOff, "wpp-icon-send-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSendOff extends Components.WppIconSendOff {
}
export declare class WppIconService {
    protected z: NgZone;
    protected el: HTMLWppIconServiceElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconService, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconService, "wpp-icon-service-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconService extends Components.WppIconService {
}
export declare class WppIconShapes {
    protected z: NgZone;
    protected el: HTMLWppIconShapesElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShapes, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShapes, "wpp-icon-shapes-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShapes extends Components.WppIconShapes {
}
export declare class WppIconShare {
    protected z: NgZone;
    protected el: HTMLWppIconShareElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShare, "wpp-icon-share-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShare extends Components.WppIconShare {
}
export declare class WppIconShield {
    protected z: NgZone;
    protected el: HTMLWppIconShieldElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShield, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShield, "wpp-icon-shield-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShield extends Components.WppIconShield {
}
export declare class WppIconShieldDismiss {
    protected z: NgZone;
    protected el: HTMLWppIconShieldDismissElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldDismiss, "wpp-icon-shield-dismiss-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShieldDismiss extends Components.WppIconShieldDismiss {
}
export declare class WppIconShieldError {
    protected z: NgZone;
    protected el: HTMLWppIconShieldErrorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldError, "wpp-icon-shield-error-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShieldError extends Components.WppIconShieldError {
}
export declare class WppIconShieldSuccess {
    protected z: NgZone;
    protected el: HTMLWppIconShieldSuccessElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShieldSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShieldSuccess, "wpp-icon-shield-success-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShieldSuccess extends Components.WppIconShieldSuccess {
}
export declare class WppIconShip {
    protected z: NgZone;
    protected el: HTMLWppIconShipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShip, "wpp-icon-ship-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShip extends Components.WppIconShip {
}
export declare class WppIconShopping {
    protected z: NgZone;
    protected el: HTMLWppIconShoppingElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShopping, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShopping, "wpp-icon-shopping-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShopping extends Components.WppIconShopping {
}
export declare class WppIconShutDown {
    protected z: NgZone;
    protected el: HTMLWppIconShutDownElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconShutDown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconShutDown, "wpp-icon-shut-down-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconShutDown extends Components.WppIconShutDown {
}
export declare class WppIconSidebar {
    protected z: NgZone;
    protected el: HTMLWppIconSidebarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSidebar, "wpp-icon-sidebar-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSidebar extends Components.WppIconSidebar {
}
export declare class WppIconSmartwatch {
    protected z: NgZone;
    protected el: HTMLWppIconSmartwatchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmartwatch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmartwatch, "wpp-icon-smartwatch-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSmartwatch extends Components.WppIconSmartwatch {
}
export declare class WppIconSmile {
    protected z: NgZone;
    protected el: HTMLWppIconSmileElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmile, "wpp-icon-smile-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSmile extends Components.WppIconSmile {
}
export declare class WppIconSmileSlightly {
    protected z: NgZone;
    protected el: HTMLWppIconSmileSlightlyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSmileSlightly, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSmileSlightly, "wpp-icon-smile-slightly-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSmileSlightly extends Components.WppIconSmileSlightly {
}
export declare class WppIconSocialMedia {
    protected z: NgZone;
    protected el: HTMLWppIconSocialMediaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSocialMedia, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSocialMedia, "wpp-icon-social-media-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSocialMedia extends Components.WppIconSocialMedia {
}
export declare class WppIconSort {
    protected z: NgZone;
    protected el: HTMLWppIconSortElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSort, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSort, "wpp-icon-sort-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSort extends Components.WppIconSort {
}
export declare class WppIconSortDecrease {
    protected z: NgZone;
    protected el: HTMLWppIconSortDecreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortDecrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortDecrease, "wpp-icon-sort-decrease-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSortDecrease extends Components.WppIconSortDecrease {
}
export declare class WppIconSortIncrease {
    protected z: NgZone;
    protected el: HTMLWppIconSortIncreaseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSortIncrease, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSortIncrease, "wpp-icon-sort-increase-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSortIncrease extends Components.WppIconSortIncrease {
}
export declare class WppIconSparkle {
    protected z: NgZone;
    protected el: HTMLWppIconSparkleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSparkle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSparkle, "wpp-icon-sparkle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSparkle extends Components.WppIconSparkle {
}
export declare class WppIconSpeaker {
    protected z: NgZone;
    protected el: HTMLWppIconSpeakerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeaker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeaker, "wpp-icon-speaker-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSpeaker extends Components.WppIconSpeaker {
}
export declare class WppIconSpeakerBluetooth {
    protected z: NgZone;
    protected el: HTMLWppIconSpeakerBluetoothElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerBluetooth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerBluetooth, "wpp-icon-speaker-bluetooth-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSpeakerBluetooth extends Components.WppIconSpeakerBluetooth {
}
export declare class WppIconSpeakerMute {
    protected z: NgZone;
    protected el: HTMLWppIconSpeakerMuteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerMute, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerMute, "wpp-icon-speaker-mute-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSpeakerMute extends Components.WppIconSpeakerMute {
}
export declare class WppIconSpeakerOff {
    protected z: NgZone;
    protected el: HTMLWppIconSpeakerOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpeakerOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpeakerOff, "wpp-icon-speaker-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSpeakerOff extends Components.WppIconSpeakerOff {
}
export declare class WppIconSplit {
    protected z: NgZone;
    protected el: HTMLWppIconSplitElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSplit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSplit, "wpp-icon-split-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSplit extends Components.WppIconSplit {
}
export declare class WppIconSport {
    protected z: NgZone;
    protected el: HTMLWppIconSportElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSport, "wpp-icon-sport-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSport extends Components.WppIconSport {
}
export declare class WppIconSpreadsheet {
    protected z: NgZone;
    protected el: HTMLWppIconSpreadsheetElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSpreadsheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSpreadsheet, "wpp-icon-spreadsheet-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSpreadsheet extends Components.WppIconSpreadsheet {
}
export declare class WppIconSquare {
    protected z: NgZone;
    protected el: HTMLWppIconSquareElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSquare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSquare, "wpp-icon-square-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSquare extends Components.WppIconSquare {
}
export declare class WppIconSquareHint {
    protected z: NgZone;
    protected el: HTMLWppIconSquareHintElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSquareHint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSquareHint, "wpp-icon-square-hint-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSquareHint extends Components.WppIconSquareHint {
}
export declare class WppIconStatisticDocument {
    protected z: NgZone;
    protected el: HTMLWppIconStatisticDocumentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStatisticDocument, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStatisticDocument, "wpp-icon-statistic-document-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconStatisticDocument extends Components.WppIconStatisticDocument {
}
export declare class WppIconSticker {
    protected z: NgZone;
    protected el: HTMLWppIconStickerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSticker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSticker, "wpp-icon-sticker-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSticker extends Components.WppIconSticker {
}
export declare class WppIconStop {
    protected z: NgZone;
    protected el: HTMLWppIconStopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStop, "wpp-icon-stop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconStop extends Components.WppIconStop {
}
export declare class WppIconStrikeThrough {
    protected z: NgZone;
    protected el: HTMLWppIconStrikeThroughElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStrikeThrough, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStrikeThrough, "wpp-icon-strike-through-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconStrikeThrough extends Components.WppIconStrikeThrough {
}
export declare class WppIconStyleguide {
    protected z: NgZone;
    protected el: HTMLWppIconStyleguideElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconStyleguide, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconStyleguide, "wpp-icon-styleguide-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconStyleguide extends Components.WppIconStyleguide {
}
export declare class WppIconSubItems {
    protected z: NgZone;
    protected el: HTMLWppIconSubItemsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSubItems, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSubItems, "wpp-icon-sub-items-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSubItems extends Components.WppIconSubItems {
}
export declare class WppIconSubscribe {
    protected z: NgZone;
    protected el: HTMLWppIconSubscribeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSubscribe, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSubscribe, "wpp-icon-subscribe-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSubscribe extends Components.WppIconSubscribe {
}
export declare class WppIconSuccess {
    protected z: NgZone;
    protected el: HTMLWppIconSuccessElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSuccess, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSuccess, "wpp-icon-success-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSuccess extends Components.WppIconSuccess {
}
export declare class WppIconSupermarket {
    protected z: NgZone;
    protected el: HTMLWppIconSupermarketElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupermarket, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupermarket, "wpp-icon-supermarket-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSupermarket extends Components.WppIconSupermarket {
}
export declare class WppIconSupport {
    protected z: NgZone;
    protected el: HTMLWppIconSupportElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupport, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupport, "wpp-icon-support-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSupport extends Components.WppIconSupport {
}
export declare class WppIconSupportChat {
    protected z: NgZone;
    protected el: HTMLWppIconSupportChatElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSupportChat, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSupportChat, "wpp-icon-support-chat-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSupportChat extends Components.WppIconSupportChat {
}
export declare class WppIconSurprise {
    protected z: NgZone;
    protected el: HTMLWppIconSurpriseElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSurprise, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSurprise, "wpp-icon-surprise-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSurprise extends Components.WppIconSurprise {
}
export declare class WppIconSymbols {
    protected z: NgZone;
    protected el: HTMLWppIconSymbolsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSymbols, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSymbols, "wpp-icon-symbols-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSymbols extends Components.WppIconSymbols {
}
export declare class WppIconSync {
    protected z: NgZone;
    protected el: HTMLWppIconSyncElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconSync, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconSync, "wpp-icon-sync-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconSync extends Components.WppIconSync {
}
export declare class WppIconTableDefault {
    protected z: NgZone;
    protected el: HTMLWppIconTableDefaultElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableDefault, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableDefault, "wpp-icon-table-default-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableDefault extends Components.WppIconTableDefault {
}
export declare class WppIconTableDismiss {
    protected z: NgZone;
    protected el: HTMLWppIconTableDismissElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableDismiss, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableDismiss, "wpp-icon-table-dismiss-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableDismiss extends Components.WppIconTableDismiss {
}
export declare class WppIconTableEdit {
    protected z: NgZone;
    protected el: HTMLWppIconTableEditElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableEdit, "wpp-icon-table-edit-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableEdit extends Components.WppIconTableEdit {
}
export declare class WppIconTableLink {
    protected z: NgZone;
    protected el: HTMLWppIconTableLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableLink, "wpp-icon-table-link-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableLink extends Components.WppIconTableLink {
}
export declare class WppIconTableSimple {
    protected z: NgZone;
    protected el: HTMLWppIconTableSimpleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSimple, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSimple, "wpp-icon-table-simple-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSimple extends Components.WppIconTableSimple {
}
export declare class WppIconTableSort {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSort, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSort, "wpp-icon-table-sort-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSort extends Components.WppIconTableSort {
}
export declare class WppIconTableSortAsc {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortAscElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAsc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAsc, "wpp-icon-table-sort-asc-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortAsc extends Components.WppIconTableSortAsc {
}
export declare class WppIconTableSortAscHover {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortAscHoverElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAscHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAscHover, "wpp-icon-table-sort-asc-hover-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortAscHover extends Components.WppIconTableSortAscHover {
}
export declare class WppIconTableSortAscPressed {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortAscPressedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortAscPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortAscPressed, "wpp-icon-table-sort-asc-pressed-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortAscPressed extends Components.WppIconTableSortAscPressed {
}
export declare class WppIconTableSortDesc {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortDescElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDesc, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDesc, "wpp-icon-table-sort-desc-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortDesc extends Components.WppIconTableSortDesc {
}
export declare class WppIconTableSortDescHover {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortDescHoverElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDescHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDescHover, "wpp-icon-table-sort-desc-hover-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortDescHover extends Components.WppIconTableSortDescHover {
}
export declare class WppIconTableSortDescPressed {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortDescPressedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortDescPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortDescPressed, "wpp-icon-table-sort-desc-pressed-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortDescPressed extends Components.WppIconTableSortDescPressed {
}
export declare class WppIconTableSortHover {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortHoverElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortHover, "wpp-icon-table-sort-hover-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortHover extends Components.WppIconTableSortHover {
}
export declare class WppIconTableSortPressed {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortPressedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortPressed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortPressed, "wpp-icon-table-sort-pressed-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "downArrowColor": { "alias": "downArrowColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "upArrowColor": { "alias": "upArrowColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortPressed extends Components.WppIconTableSortPressed {
}
export declare class WppIconTableSortWrapper {
    protected z: NgZone;
    protected el: HTMLWppIconTableSortWrapperElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTableSortWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTableSortWrapper, "wpp-icon-table-sort-wrapper-v4-3-0", never, { "colors": { "alias": "colors"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "height": { "alias": "height"; "required": false; }; "interactive": { "alias": "interactive"; "required": false; }; "isHovered": { "alias": "isHovered"; "required": false; }; "isPressed": { "alias": "isPressed"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTableSortWrapper extends Components.WppIconTableSortWrapper {
}
export declare class WppIconTablet {
    protected z: NgZone;
    protected el: HTMLWppIconTabletElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTablet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTablet, "wpp-icon-tablet-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTablet extends Components.WppIconTablet {
}
export declare class WppIconTag {
    protected z: NgZone;
    protected el: HTMLWppIconTagElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTag, "wpp-icon-tag-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTag extends Components.WppIconTag {
}
export declare class WppIconTarget {
    protected z: NgZone;
    protected el: HTMLWppIconTargetElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTarget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTarget, "wpp-icon-target-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTarget extends Components.WppIconTarget {
}
export declare class WppIconTaskList {
    protected z: NgZone;
    protected el: HTMLWppIconTaskListElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTaskList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTaskList, "wpp-icon-task-list-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTaskList extends Components.WppIconTaskList {
}
export declare class WppIconTaskListSquare {
    protected z: NgZone;
    protected el: HTMLWppIconTaskListSquareElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTaskListSquare, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTaskListSquare, "wpp-icon-task-list-square-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTaskListSquare extends Components.WppIconTaskListSquare {
}
export declare class WppIconText {
    protected z: NgZone;
    protected el: HTMLWppIconTextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconText, "wpp-icon-text-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconText extends Components.WppIconText {
}
export declare class WppIconTextAlignmentCenter {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentCenterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentCenter, "wpp-icon-text-alignment-center-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentCenter extends Components.WppIconTextAlignmentCenter {
}
export declare class WppIconTextAlignmentDistribute {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentDistributeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentDistribute, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentDistribute, "wpp-icon-text-alignment-distribute-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentDistribute extends Components.WppIconTextAlignmentDistribute {
}
export declare class WppIconTextAlignmentDistributeVertical {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentDistributeVerticalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentDistributeVertical, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentDistributeVertical, "wpp-icon-text-alignment-distribute-vertical-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentDistributeVertical extends Components.WppIconTextAlignmentDistributeVertical {
}
export declare class WppIconTextAlignmentJustify {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentJustifyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentJustify, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentJustify, "wpp-icon-text-alignment-justify-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentJustify extends Components.WppIconTextAlignmentJustify {
}
export declare class WppIconTextAlignmentJustifyLow {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentJustifyLowElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentJustifyLow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentJustifyLow, "wpp-icon-text-alignment-justify-low-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentJustifyLow extends Components.WppIconTextAlignmentJustifyLow {
}
export declare class WppIconTextAlignmentLeft {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentLeftElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentLeft, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentLeft, "wpp-icon-text-alignment-left-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentLeft extends Components.WppIconTextAlignmentLeft {
}
export declare class WppIconTextAlignmentRight {
    protected z: NgZone;
    protected el: HTMLWppIconTextAlignmentRightElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTextAlignmentRight, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTextAlignmentRight, "wpp-icon-text-alignment-right-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTextAlignmentRight extends Components.WppIconTextAlignmentRight {
}
export declare class WppIconTheatre {
    protected z: NgZone;
    protected el: HTMLWppIconTheatreElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTheatre, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTheatre, "wpp-icon-theatre-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTheatre extends Components.WppIconTheatre {
}
export declare class WppIconThumbsDown {
    protected z: NgZone;
    protected el: HTMLWppIconThumbsDownElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconThumbsDown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconThumbsDown, "wpp-icon-thumbs-down-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconThumbsDown extends Components.WppIconThumbsDown {
}
export declare class WppIconThumbsDownFilled {
    protected z: NgZone;
    protected el: HTMLWppIconThumbsDownFilledElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconThumbsDownFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconThumbsDownFilled, "wpp-icon-thumbs-down-filled-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconThumbsDownFilled extends Components.WppIconThumbsDownFilled {
}
export declare class WppIconThumbsUp {
    protected z: NgZone;
    protected el: HTMLWppIconThumbsUpElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconThumbsUp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconThumbsUp, "wpp-icon-thumbs-up-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconThumbsUp extends Components.WppIconThumbsUp {
}
export declare class WppIconThumbsUpFilled {
    protected z: NgZone;
    protected el: HTMLWppIconThumbsUpFilledElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconThumbsUpFilled, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconThumbsUpFilled, "wpp-icon-thumbs-up-filled-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconThumbsUpFilled extends Components.WppIconThumbsUpFilled {
}
export declare class WppIconTick {
    protected z: NgZone;
    protected el: HTMLWppIconTickElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTick, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTick, "wpp-icon-tick-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTick extends Components.WppIconTick {
}
export declare class WppIconTourism {
    protected z: NgZone;
    protected el: HTMLWppIconTourismElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTourism, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTourism, "wpp-icon-tourism-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTourism extends Components.WppIconTourism {
}
export declare class WppIconTrain {
    protected z: NgZone;
    protected el: HTMLWppIconTrainElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrain, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrain, "wpp-icon-train-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTrain extends Components.WppIconTrain {
}
export declare class WppIconTranslate {
    protected z: NgZone;
    protected el: HTMLWppIconTranslateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTranslate, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTranslate, "wpp-icon-translate-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTranslate extends Components.WppIconTranslate {
}
export declare class WppIconTrash {
    protected z: NgZone;
    protected el: HTMLWppIconTrashElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrash, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrash, "wpp-icon-trash-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTrash extends Components.WppIconTrash {
}
export declare class WppIconTrendAscend {
    protected z: NgZone;
    protected el: HTMLWppIconTrendAscendElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrendAscend, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrendAscend, "wpp-icon-trend-ascend-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTrendAscend extends Components.WppIconTrendAscend {
}
export declare class WppIconTrendDescent {
    protected z: NgZone;
    protected el: HTMLWppIconTrendDescentElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTrendDescent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTrendDescent, "wpp-icon-trend-descent-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTrendDescent extends Components.WppIconTrendDescent {
}
export declare class WppIconTriangle {
    protected z: NgZone;
    protected el: HTMLWppIconTriangleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTriangle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTriangle, "wpp-icon-triangle-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTriangle extends Components.WppIconTriangle {
}
export declare class WppIconTriangleFill {
    protected z: NgZone;
    protected el: HTMLWppIconTriangleFillElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTriangleFill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTriangleFill, "wpp-icon-triangle-fill-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTriangleFill extends Components.WppIconTriangleFill {
}
export declare class WppIconTune {
    protected z: NgZone;
    protected el: HTMLWppIconTuneElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTune, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTune, "wpp-icon-tune-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTune extends Components.WppIconTune {
}
export declare class WppIconTv {
    protected z: NgZone;
    protected el: HTMLWppIconTvElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTv, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTv, "wpp-icon-tv-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTv extends Components.WppIconTv {
}
export declare class WppIconTwentyFourHours {
    protected z: NgZone;
    protected el: HTMLWppIconTwentyFourHoursElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconTwentyFourHours, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconTwentyFourHours, "wpp-icon-twenty-four-hours-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconTwentyFourHours extends Components.WppIconTwentyFourHours {
}
export declare class WppIconUnderline {
    protected z: NgZone;
    protected el: HTMLWppIconUnderlineElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnderline, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnderline, "wpp-icon-underline-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUnderline extends Components.WppIconUnderline {
}
export declare class WppIconUndo {
    protected z: NgZone;
    protected el: HTMLWppIconUndoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUndo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUndo, "wpp-icon-undo-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUndo extends Components.WppIconUndo {
}
export declare class WppIconUnlink {
    protected z: NgZone;
    protected el: HTMLWppIconUnlinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnlink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnlink, "wpp-icon-unlink-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUnlink extends Components.WppIconUnlink {
}
export declare class WppIconUnorderedList {
    protected z: NgZone;
    protected el: HTMLWppIconUnorderedListElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnorderedList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnorderedList, "wpp-icon-unordered-list-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUnorderedList extends Components.WppIconUnorderedList {
}
export declare class WppIconUnpinned {
    protected z: NgZone;
    protected el: HTMLWppIconUnpinnedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUnpinned, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUnpinned, "wpp-icon-unpinned-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUnpinned extends Components.WppIconUnpinned {
}
export declare class WppIconUpload {
    protected z: NgZone;
    protected el: HTMLWppIconUploadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUpload, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUpload, "wpp-icon-upload-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUpload extends Components.WppIconUpload {
}
export declare class WppIconUser {
    protected z: NgZone;
    protected el: HTMLWppIconUserElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUser, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUser, "wpp-icon-user-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUser extends Components.WppIconUser {
}
export declare class WppIconUserAdd {
    protected z: NgZone;
    protected el: HTMLWppIconUserAddElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserAdd, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserAdd, "wpp-icon-user-add-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserAdd extends Components.WppIconUserAdd {
}
export declare class WppIconUserBlock {
    protected z: NgZone;
    protected el: HTMLWppIconUserBlockElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserBlock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserBlock, "wpp-icon-user-block-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserBlock extends Components.WppIconUserBlock {
}
export declare class WppIconUserChat {
    protected z: NgZone;
    protected el: HTMLWppIconUserChatElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserChat, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserChat, "wpp-icon-user-chat-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserChat extends Components.WppIconUserChat {
}
export declare class WppIconUserSearch {
    protected z: NgZone;
    protected el: HTMLWppIconUserSearchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserSearch, "wpp-icon-user-search-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserSearch extends Components.WppIconUserSearch {
}
export declare class WppIconUserStarred {
    protected z: NgZone;
    protected el: HTMLWppIconUserStarredElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserStarred, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserStarred, "wpp-icon-user-starred-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserStarred extends Components.WppIconUserStarred {
}
export declare class WppIconUserTag {
    protected z: NgZone;
    protected el: HTMLWppIconUserTagElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconUserTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconUserTag, "wpp-icon-user-tag-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconUserTag extends Components.WppIconUserTag {
}
export declare class WppIconVideoBlocked {
    protected z: NgZone;
    protected el: HTMLWppIconVideoBlockedElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoBlocked, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoBlocked, "wpp-icon-video-blocked-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconVideoBlocked extends Components.WppIconVideoBlocked {
}
export declare class WppIconVideoClip {
    protected z: NgZone;
    protected el: HTMLWppIconVideoClipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoClip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoClip, "wpp-icon-video-clip-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconVideoClip extends Components.WppIconVideoClip {
}
export declare class WppIconVideoOff {
    protected z: NgZone;
    protected el: HTMLWppIconVideoOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoOff, "wpp-icon-video-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconVideoOff extends Components.WppIconVideoOff {
}
export declare class WppIconVideoOn {
    protected z: NgZone;
    protected el: HTMLWppIconVideoOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVideoOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVideoOn, "wpp-icon-video-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconVideoOn extends Components.WppIconVideoOn {
}
export declare class WppIconVr {
    protected z: NgZone;
    protected el: HTMLWppIconVrElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconVr, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconVr, "wpp-icon-vr-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconVr extends Components.WppIconVr {
}
export declare class WppIconWarning {
    protected z: NgZone;
    protected el: HTMLWppIconWarningElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWarning, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWarning, "wpp-icon-warning-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWarning extends Components.WppIconWarning {
}
export declare class WppIconWifiOff {
    protected z: NgZone;
    protected el: HTMLWppIconWifiOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiOff, "wpp-icon-wifi-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWifiOff extends Components.WppIconWifiOff {
}
export declare class WppIconWifiOn {
    protected z: NgZone;
    protected el: HTMLWppIconWifiOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiOn, "wpp-icon-wifi-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWifiOn extends Components.WppIconWifiOn {
}
export declare class WppIconWifiWarning {
    protected z: NgZone;
    protected el: HTMLWppIconWifiWarningElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWifiWarning, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWifiWarning, "wpp-icon-wifi-warning-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWifiWarning extends Components.WppIconWifiWarning {
}
export declare class WppIconWithHand {
    protected z: NgZone;
    protected el: HTMLWppIconWithHandElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWithHand, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWithHand, "wpp-icon-with-hand-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWithHand extends Components.WppIconWithHand {
}
export declare class WppIconWorkshop {
    protected z: NgZone;
    protected el: HTMLWppIconWorkshopElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWorkshop, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWorkshop, "wpp-icon-workshop-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWorkshop extends Components.WppIconWorkshop {
}
export declare class WppIconWrapOff {
    protected z: NgZone;
    protected el: HTMLWppIconWrapOffElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWrapOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWrapOff, "wpp-icon-wrap-off-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWrapOff extends Components.WppIconWrapOff {
}
export declare class WppIconWrapOn {
    protected z: NgZone;
    protected el: HTMLWppIconWrapOnElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconWrapOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconWrapOn, "wpp-icon-wrap-on-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconWrapOn extends Components.WppIconWrapOn {
}
export declare class WppIconYen {
    protected z: NgZone;
    protected el: HTMLWppIconYenElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconYen, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconYen, "wpp-icon-yen-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconYen extends Components.WppIconYen {
}
export declare class WppIconYuan {
    protected z: NgZone;
    protected el: HTMLWppIconYuanElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconYuan, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconYuan, "wpp-icon-yuan-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconYuan extends Components.WppIconYuan {
}
export declare class WppIconZoo {
    protected z: NgZone;
    protected el: HTMLWppIconZooElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoo, "wpp-icon-zoo-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconZoo extends Components.WppIconZoo {
}
export declare class WppIconZoomIn {
    protected z: NgZone;
    protected el: HTMLWppIconZoomInElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoomIn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoomIn, "wpp-icon-zoom-in-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconZoomIn extends Components.WppIconZoomIn {
}
export declare class WppIconZoomOut {
    protected z: NgZone;
    protected el: HTMLWppIconZoomOutElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppIconZoomOut, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppIconZoomOut, "wpp-icon-zoom-out-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "size": { "alias": "size"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppIconZoomOut extends Components.WppIconZoomOut {
}
export declare class WppInlineEdit {
    protected z: NgZone;
    protected el: HTMLWppInlineEditElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInlineEdit, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInlineEdit, "wpp-inline-edit-v4-3-0", never, { "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "inputWidth": { "alias": "inputWidth"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppInlineEdit extends Components.WppInlineEdit {
    /**
     * Emitted when the inline edit mode changes
     */
    wppModeChange: EventEmitter<CustomEvent<IWppInlineEditInlineEditChangeModeEventDetail>>;
    /**
     * Emitted when user clicks "Confirm" button.
     */
    wppConfirm: EventEmitter<CustomEvent<IWppInlineEditInlineEditConfirmDetail>>;
}
export declare class WppInlineMessage {
    protected z: NgZone;
    protected el: HTMLWppInlineMessageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInlineMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInlineMessage, "wpp-inline-message-v4-3-0", never, { "actionBtnText": { "alias": "actionBtnText"; "required": false; }; "hideCloseBtn": { "alias": "hideCloseBtn"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "message": { "alias": "message"; "required": false; }; "showTooltipFrom": { "alias": "showTooltipFrom"; "required": false; }; "size": { "alias": "size"; "required": false; }; "titleText": { "alias": "titleText"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInput, "wpp-input-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "defaultValue": { "alias": "defaultValue"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maskOptions": { "alias": "maskOptions"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readOnly": { "alias": "readOnly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "withCrossIcon": { "alias": "withCrossIcon"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppInput extends Components.WppInput {
    /**
     * Emitted when the input value changes. If the input has a mask, the rawValue will also be provided.
  - `value`: The processed or masked value of the input (in case a mask is applied).
  - `rawValue`: The unformatted input value, typically representing the actual data entered by the user (provided only when the input has a mask).
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
     *  @deprecated Use `wppChange` instead.
  New optional event that emits both raw and formatted values of the input.
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
    protected el: HTMLWppInternalLabelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppInternalLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppInternalLabel, "wpp-internal-label-v4-3-0", never, { "description": { "alias": "description"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "optional": { "alias": "optional"; "required": false; }; "role": { "alias": "role"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "typography": { "alias": "typography"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppInternalLabel extends Components.WppInternalLabel {
}
export declare class WppLabel {
    protected z: NgZone;
    protected el: HTMLWppLabelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLabel, "wpp-label-v4-3-0", never, { "config": { "alias": "config"; "required": false; }; "description": { "alias": "description"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "htmlFor": { "alias": "htmlFor"; "required": false; }; "labelId": { "alias": "labelId"; "required": false; }; "optional": { "alias": "optional"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "typography": { "alias": "typography"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLabel extends Components.WppLabel {
}
export declare class WppLegacyAutocomplete {
    protected z: NgZone;
    protected el: HTMLWppLegacyAutocompleteElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyAutocomplete, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyAutocomplete, "wpp-legacy-autocomplete-v4-3-0", never, { "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "displayBtnWhenListEmpty": { "alias": "displayBtnWhenListEmpty"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "getOptionId": { "alias": "getOptionId"; "required": false; }; "getOptionLabel": { "alias": "getOptionLabel"; "required": false; }; "infinite": { "alias": "infinite"; "required": false; }; "infiniteLastPage": { "alias": "infiniteLastPage"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "limitSelectedItems": { "alias": "limitSelectedItems"; "required": false; }; "loadMore": { "alias": "loadMore"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "persistentSearch": { "alias": "persistentSearch"; "required": false; }; "pillTooltipConfig": { "alias": "pillTooltipConfig"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showCreateNewElement": { "alias": "showCreateNewElement"; "required": false; }; "simpleSearch": { "alias": "simpleSearch"; "required": false; }; "size": { "alias": "size"; "required": false; }; "suggestions": { "alias": "suggestions"; "required": false; }; "suggestionsTitle": { "alias": "suggestionsTitle"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyAutocomplete extends Components.WppLegacyAutocomplete {
    /**
     * Emitted when the autocomplete value changes
     */
    wppChange: EventEmitter<CustomEvent<IWppLegacyAutocompleteLegacyAutocompleteChangeEventDetail>>;
    /**
     * Emitted when the autocomplete receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the autocomplete loses focus
     */
    wppBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the autocomplete search value changes
     */
    wppSearchValueChange: EventEmitter<CustomEvent<string>>;
    /**
     * Emitted when the "Create new element" button is clicked
     */
    wppCreateNewOption: EventEmitter<CustomEvent<string>>;
}
export declare class WppLegacyAvatar {
    protected z: NgZone;
    protected el: HTMLWppLegacyAvatarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyAvatar, "wpp-legacy-avatar-v4-3-0", never, { "amountOfHiddenAvatars": { "alias": "amountOfHiddenAvatars"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "color": { "alias": "color"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "interactable": { "alias": "interactable"; "required": false; }; "name": { "alias": "name"; "required": false; }; "role": { "alias": "role"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "withTooltip": { "alias": "withTooltip"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyAvatar extends Components.WppLegacyAvatar {
    /**
     * Emitted when the avatar item is clicked.
     */
    wppClick: EventEmitter<CustomEvent<IWppLegacyAvatarAvatarChangeEventDetail>>;
}
export declare class WppLegacyCounter {
    protected z: NgZone;
    protected el: HTMLWppLegacyCounterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyCounter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyCounter, "wpp-legacy-counter-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "format": { "alias": "format"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; "withButtons": { "alias": "withButtons"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyCounter extends Components.WppLegacyCounter {
    /**
     * Emitted when the input value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppLegacyCounterCounterChangeEventDetail>>;
    /**
     * Emitted when the counter is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the counter loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppLegacyStickyBar {
    protected z: NgZone;
    protected el: HTMLWppLegacyStickyBarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyStickyBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyStickyBar, "wpp-legacy-sticky-bar-v4-3-0", never, { "barTitle": { "alias": "barTitle"; "required": false; }; "buttons": { "alias": "buttons"; "required": false; }; "offsetFromTop": { "alias": "offsetFromTop"; "required": false; }; "scrollTreshold": { "alias": "scrollTreshold"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "withBackButton": { "alias": "withBackButton"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyStickyBar extends Components.WppLegacyStickyBar {
    /**
     * Emitted when the back icon is clicked (icon on the left of the title).
     */
    wppClickBackIcon: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when one of the buttons provided in the "buttons" list is clicked. This event
  contains the details of the StickyBarButtonItem provided to the array.
     */
    wppClickBtn: EventEmitter<CustomEvent<IWppLegacyStickyBarStickyBarButtonItem>>;
    /**
     * Emitted when one of the tabs provided in the "tabs" list is clicked. This event
  contains the details of the tab item clicked.
     */
    wppClickTab: EventEmitter<CustomEvent<IWppLegacyStickyBarStickyBarTabItem>>;
}
export declare class WppLegacyTopbar {
    protected z: NgZone;
    protected el: HTMLWppLegacyTopbarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyTopbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyTopbar, "wpp-legacy-topbar-v4-3-0", never, { "nativeLink": { "alias": "nativeLink"; "required": false; }; "navigation": { "alias": "navigation"; "required": true; }; "value": { "alias": "value"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyTopbar extends Components.WppLegacyTopbar {
    /**
     * Emitted when topbar item was changed, return object like { value: 'home', path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppLegacyTopbarTopbarChangeEventDetail>>;
}
export declare class WppLegacyTopbarItem {
    protected z: NgZone;
    protected el: HTMLWppLegacyTopbarItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegacyTopbarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegacyTopbarItem, "wpp-legacy-topbar-item-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "activeItems": { "alias": "activeItems"; "required": false; }; "firstLevel": { "alias": "firstLevel"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; "navigation": { "alias": "navigation"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegacyTopbarItem extends Components.WppLegacyTopbarItem {
    /**
     * Emitted when topbar item was changed
     */
    wppActiveTopbarItemChange: EventEmitter<CustomEvent<IWppLegacyTopbarItemNavigationItemEventDetail>>;
}
export declare class WppLegend {
    protected z: NgZone;
    protected el: HTMLWppLegendElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLegend, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLegend, "wpp-legend-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLegend extends Components.WppLegend {
}
export declare class WppListItem {
    protected z: NgZone;
    protected el: HTMLWppListItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppListItem, "wpp-list-item-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "captionTypography": { "alias": "captionTypography"; "required": false; }; "checkboxName": { "alias": "checkboxName"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "containerState": { "alias": "containerState"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "highlight": { "alias": "highlight"; "required": false; }; "isExtended": { "alias": "isExtended"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "labelTypography": { "alias": "labelTypography"; "required": false; }; "linkConfig": { "alias": "linkConfig"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "nonInteractive": { "alias": "nonInteractive"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppListItem extends Components.WppListItem {
    /**
     * Emitted when the list item was clicked
     */
    wppChangeListItem: EventEmitter<CustomEvent<IWppListItemListItemChangeEventDetail>>;
}
export declare class WppLoadMore {
    protected z: NgZone;
    protected el: HTMLWppLoadMoreElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppLoadMore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppLoadMore, "wpp-load-more-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "incrementBy": { "alias": "incrementBy"; "required": false; }; "itemsLoaded": { "alias": "itemsLoaded"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showProgressBar": { "alias": "showProgressBar"; "required": false; }; "totalItems": { "alias": "totalItems"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppLoadMore extends Components.WppLoadMore {
    /**
     * Emitted when the "Load more" button is clicked.
     */
    wppClickLoadMore: EventEmitter<CustomEvent<IWppLoadMoreLoadMoreChangeEventDetail>>;
}
export declare class WppMenuContext {
    protected z: NgZone;
    protected el: HTMLWppMenuContextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMenuContext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMenuContext, "wpp-menu-context-v4-3-0", never, { "appendToListWrapper": { "alias": "appendToListWrapper"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "externalClass": { "alias": "externalClass"; "required": false; }; "listWidth": { "alias": "listWidth"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppMenuContext extends Components.WppMenuContext {
    /**
     * Emitted when the input loses focus
     */
    wppBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
}
export declare class WppMenuGroup {
    protected z: NgZone;
    protected el: HTMLWppMenuGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMenuGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMenuGroup, "wpp-menu-group-v4-3-0", never, { "header": { "alias": "header"; "required": false; }; "withDivider": { "alias": "withDivider"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppMenuGroup extends Components.WppMenuGroup {
}
export declare class WppModal {
    protected z: NgZone;
    protected el: HTMLWppModalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppModal, "wpp-modal-v4-3-0", never, { "actionsConfig": { "alias": "actionsConfig"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "disableOutsideClick": { "alias": "disableOutsideClick"; "required": false; }; "formConfig": { "alias": "formConfig"; "required": false; }; "open": { "alias": "open"; "required": false; }; "osBarCompatible": { "alias": "osBarCompatible"; "required": false; }; "size": { "alias": "size"; "required": false; }; "withTransparentOverlay": { "alias": "withTransparentOverlay"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
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
}
export declare class WppMoreButton {
    protected z: NgZone;
    protected el: HTMLWppMoreButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppMoreButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppMoreButton, "wpp-more-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppMoreButton extends Components.WppMoreButton {
}
export declare class WppNavSidebar {
    protected z: NgZone;
    protected el: HTMLWppNavSidebarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavSidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavSidebar, "wpp-nav-sidebar-v4-3-0", never, { "activePath": { "alias": "activePath"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; "navLabel": { "alias": "navLabel"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppNavSidebar extends Components.WppNavSidebar {
    /**
     * Emitted when app routes change, return object like { path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppNavSidebarNavSidebarItemEventDetail>>;
}
export declare class WppNavSidebarItem {
    protected z: NgZone;
    protected el: HTMLWppNavSidebarItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavSidebarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavSidebarItem, "wpp-nav-sidebar-item-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "divide": { "alias": "divide"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "extended": { "alias": "extended"; "required": false; }; "groupTitle": { "alias": "groupTitle"; "required": false; }; "label": { "alias": "label"; "required": false; }; "maxTitleLengthWithSubItems": { "alias": "maxTitleLengthWithSubItems"; "required": false; }; "maxTitleLengthWithoutSubItems": { "alias": "maxTitleLengthWithoutSubItems"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; "nestedItem": { "alias": "nestedItem"; "required": false; }; "path": { "alias": "path"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppNavSidebarItem extends Components.WppNavSidebarItem {
    /**
     * Emitted when the item path changes, return object like { path: '/home', label: 'Home' }
     */
    wppClickSidebarItem: EventEmitter<CustomEvent<IWppNavSidebarItemNavSidebarItemEventDetail>>;
}
export declare class WppNavigationItem {
    protected z: NgZone;
    protected el: HTMLWppNavigationItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppNavigationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppNavigationItem, "wpp-navigation-item-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "chevronOnly": { "alias": "chevronOnly"; "required": false; }; "extended": { "alias": "extended"; "required": false; }; "label": { "alias": "label"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "menuExpanded": { "alias": "menuExpanded"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; "nestedItem": { "alias": "nestedItem"; "required": false; }; "path": { "alias": "path"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppNavigationItem extends Components.WppNavigationItem {
    /**
     * Emitted when navigation item was clicked
     */
    wppActiveNavItemChanged: EventEmitter<CustomEvent<IWppNavigationItemNavigationItemEventDetail>>;
}
export declare class WppOverlay {
    protected z: NgZone;
    protected el: HTMLWppOverlayElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppOverlay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppOverlay, "wpp-overlay-v4-3-0", never, { "isVisible": { "alias": "isVisible"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppOverlay extends Components.WppOverlay {
    /**
     * Emitted when the overlay is clicked.
     */
    wppClick: EventEmitter<CustomEvent<void>>;
}
export declare class WppPagination {
    protected z: NgZone;
    protected el: HTMLWppPaginationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPagination, "wpp-pagination-v4-3-0", never, { "activePageNumber": { "alias": "activePageNumber"; "required": false; }; "count": { "alias": "count"; "required": true; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "pageSelectThreshold": { "alias": "pageSelectThreshold"; "required": false; }; "selectedItemPerPage": { "alias": "selectedItemPerPage"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppPagination extends Components.WppPagination {
    /**
     * Emitted when selected page or number of items per page changes
     */
    wppChange: EventEmitter<CustomEvent<IWppPaginationPaginationChangeEventDetail>>;
}
export declare class WppPaginationItem {
    protected z: NgZone;
    protected el: HTMLWppPaginationItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPaginationItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPaginationItem, "wpp-pagination-item-v4-3-0", never, { "number": { "alias": "number"; "required": true; }; "selected": { "alias": "selected"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppPaginationItem extends Components.WppPaginationItem {
    /**
     * Emitted active page number
     */
    wppPageChange: EventEmitter<CustomEvent<IWppPaginationItemPaginationPageChangeEventDetail>>;
}
export declare class WppPaginationSelect {
    protected z: NgZone;
    protected el: HTMLWppPaginationSelectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPaginationSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPaginationSelect, "wpp-pagination-select-v4-3-0", never, { "activePageNumber": { "alias": "activePageNumber"; "required": false; }; "count": { "alias": "count"; "required": true; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "pageSelectThreshold": { "alias": "pageSelectThreshold"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppPaginationSelect extends Components.WppPaginationSelect {
    /**
     * Contains the active page number and itemsPerPage value.
     */
    wppChange: EventEmitter<CustomEvent<IWppPaginationSelectPaginationPageChangeEventDetail>>;
}
export declare class WppPill {
    protected z: NgZone;
    protected el: HTMLWppPillElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPill, "wpp-pill-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "showTooltipOnTruncate": { "alias": "showTooltipOnTruncate"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppPillGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPillGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPillGroup, "wpp-pill-group-v4-3-0", never, { "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppPopoverElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppPopover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppPopover, "wpp-popover-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "config": { "alias": "config"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "externalClass": { "alias": "externalClass"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "persistantSearch": { "alias": "persistantSearch"; "required": false; }; "searchName": { "alias": "searchName"; "required": false; }; "searchValue": { "alias": "searchValue"; "required": false; }; "shouldCloseOnOutsideClick": { "alias": "shouldCloseOnOutsideClick"; "required": false; }; "showClearButton": { "alias": "showClearButton"; "required": false; }; "withSearch": { "alias": "withSearch"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppPopover extends Components.WppPopover {
    /**
     * Emitted when the value of the search input inside the dropdown changes.
     */
    wppSearchChange: EventEmitter<CustomEvent<IWppPopoverPopoverInputChangeEventDetail>>;
    /**
     * Emitted when the optional Clear action is clicked.
     */
    wppClear: EventEmitter<CustomEvent<IWppPopoverPopoverClearEventDetail>>;
}
export declare class WppProgressIndicator {
    protected z: NgZone;
    protected el: HTMLWppProgressIndicatorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppProgressIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppProgressIndicator, "wpp-progress-indicator-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "forceIntermediateEmptyState": { "alias": "forceIntermediateEmptyState"; "required": false; }; "isShowPercentage": { "alias": "isShowPercentage"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppProgressIndicator extends Components.WppProgressIndicator {
}
export declare class WppRadio {
    protected z: NgZone;
    protected el: HTMLWppRadioElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRadio, "wpp-radio-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppRadioGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRadioGroup, "wpp-radio-group-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppRichtextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtext, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtext, "wpp-richtext-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "bounds": { "alias": "bounds"; "required": false; }; "charactersLimit": { "alias": "charactersLimit"; "required": false; }; "debug": { "alias": "debug"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "format": { "alias": "format"; "required": false; }; "formats": { "alias": "formats"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "modules": { "alias": "modules"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "preserveWhitespace": { "alias": "preserveWhitespace"; "required": false; }; "required": { "alias": "required"; "required": false; }; "scrollingContainer": { "alias": "scrollingContainer"; "required": false; }; "strict": { "alias": "strict"; "required": false; }; "styles": { "alias": "styles"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; "warningThreshold": { "alias": "warningThreshold"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppRichtext extends Components.WppRichtext {
    /**
     * Editor init event.
  Emits the Tiptap Editor instance (previously emitted Quill instance).
     */
    wppInit: EventEmitter<CustomEvent<IWppRichtextEditor>>;
    /**
     * Emitted when editor has content changes
     */
    wppChange: EventEmitter<CustomEvent<IWppRichtextTiptapChangeEventDetail>>;
    /**
     * Emitted when editor has selection changes
     */
    wppSelectionChange: EventEmitter<CustomEvent<IWppRichtextTiptapSelectionChangeEventDetail>>;
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
    wppUploadRequest: EventEmitter<CustomEvent<IWppRichtextTiptapUploadRequestEventDetail>>;
}
export declare class WppRichtextCommonStyles {
    protected z: NgZone;
    protected el: HTMLWppRichtextCommonStylesElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextCommonStyles, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextCommonStyles, "wpp-richtext-common-styles-v4-3-0", never, {}, {}, never, ["*"], true, never>;
}
export declare interface WppRichtextCommonStyles extends Components.WppRichtextCommonStyles {
}
export declare class WppRichtextHtml {
    protected z: NgZone;
    protected el: HTMLWppRichtextHtmlElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextHtml, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextHtml, "wpp-richtext-html-v4-3-0", never, { "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppRichtextHtml extends Components.WppRichtextHtml {
}
export declare class WppRichtextIconLoader {
    protected z: NgZone;
    protected el: HTMLWppRichtextIconLoaderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextIconLoader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextIconLoader, "wpp-richtext-icon-loader-v4-3-0", never, {}, {}, never, ["*"], true, never>;
}
export declare interface WppRichtextIconLoader extends Components.WppRichtextIconLoader {
}
export declare class WppRichtextMarkdown {
    protected z: NgZone;
    protected el: HTMLWppRichtextMarkdownElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextMarkdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextMarkdown, "wpp-richtext-markdown-v4-3-0", never, { "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppRichtextMarkdown extends Components.WppRichtextMarkdown {
}
export declare class WppRichtextView {
    protected z: NgZone;
    protected el: HTMLWppRichtextViewElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppRichtextView, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppRichtextView, "wpp-richtext-view-v4-3-0", never, { "format": { "alias": "format"; "required": false; }; "formats": { "alias": "formats"; "required": false; }; "modules": { "alias": "modules"; "required": false; }; "name": { "alias": "name"; "required": false; }; "preserveWhitespace": { "alias": "preserveWhitespace"; "required": false; }; "strict": { "alias": "strict"; "required": false; }; "styles": { "alias": "styles"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppRichtextView extends Components.WppRichtextView {
}
export declare class WppSearch {
    protected z: NgZone;
    protected el: HTMLWppSearchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSearch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSearch, "wpp-search-v4-3-0", never, { "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "getOptionId": { "alias": "getOptionId"; "required": false; }; "getOptionLabel": { "alias": "getOptionLabel"; "required": false; }; "highlight": { "alias": "highlight"; "required": false; }; "infinite": { "alias": "infinite"; "required": false; }; "infiniteLastPage": { "alias": "infiniteLastPage"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "loadMore": { "alias": "loadMore"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "name": { "alias": "name"; "required": false; }; "openDropdownOnClick": { "alias": "openDropdownOnClick"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showOptions": { "alias": "showOptions"; "required": false; }; "simpleSearch": { "alias": "simpleSearch"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    wppBlur: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the search value changes
     */
    wppSearchValueChange: EventEmitter<CustomEvent<string>>;
}
export declare class WppSegmentedControl {
    protected z: NgZone;
    protected el: HTMLWppSegmentedControlElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSegmentedControl, "wpp-segmented-control-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "hugContentOff": { "alias": "hugContentOff"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": true; }; "variant": { "alias": "variant"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppSegmentedControlItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSegmentedControlItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSegmentedControlItem, "wpp-segmented-control-item-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hugContentOff": { "alias": "hugContentOff"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": true; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppSelectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSelect, "wpp-select-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "consistentSearch": { "alias": "consistentSearch"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "displayValue": { "alias": "displayValue"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "enableStaticOptions": { "alias": "enableStaticOptions"; "required": false; }; "getItemKey": { "alias": "getItemKey"; "required": false; }; "inputType": { "alias": "inputType"; "required": false; }; "inputValue": { "alias": "inputValue"; "required": false; }; "isDropdownOpen": { "alias": "isDropdownOpen"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "list": { "alias": "list"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maskOptions": { "alias": "maskOptions"; "required": false; }; "maxItemsToDisplay": { "alias": "maxItemsToDisplay"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "maximumSelectedItems": { "alias": "maximumSelectedItems"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageInTooltip": { "alias": "messageInTooltip"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "scrollSelectedItemIntoView": { "alias": "scrollSelectedItemIntoView"; "required": false; }; "showSelectAllOption": { "alias": "showSelectAllOption"; "required": false; }; "showSelectAllText": { "alias": "showSelectAllText"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "truncate": { "alias": "truncate"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; "withFolder": { "alias": "withFolder"; "required": false; }; "withSearch": { "alias": "withSearch"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppSelect extends Components.WppSelect {
    /**
     * Emitted when an input value changes.
     */
    wppChange: EventEmitter<CustomEvent<IWppSelectSelectChangeEventDetails>>;
    /**
     * Emitted when the input is in focus.
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus.
     */
    wppBlur: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the user clicks the Apply button in the multiple select footer.
     */
    wppApply: EventEmitter<CustomEvent<void>>;
}
export declare class WppSideModal {
    protected z: NgZone;
    protected el: HTMLWppSideModalElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSideModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSideModal, "wpp-side-modal-v4-3-0", never, { "actionsConfig": { "alias": "actionsConfig"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "backdropVisible": { "alias": "backdropVisible"; "required": false; }; "disableOutsideClick": { "alias": "disableOutsideClick"; "required": false; }; "formConfig": { "alias": "formConfig"; "required": false; }; "headerActionsConfig": { "alias": "headerActionsConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "open": { "alias": "open"; "required": false; }; "osBarCompatible": { "alias": "osBarCompatible"; "required": false; }; "size": { "alias": "size"; "required": false; }; "withBackButton": { "alias": "withBackButton"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
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
     * Handles the side modal back button click.
     */
    wppSideModalBackButtonClick: EventEmitter<CustomEvent<void>>;
}
export declare class WppSidePanel {
    protected z: NgZone;
    protected el: HTMLWppSidePanelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSidePanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSidePanel, "wpp-side-panel-v4-3-0", never, { "actionsConfig": { "alias": "actionsConfig"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppSidePanel extends Components.WppSidePanel {
    /**
     * Handles the side panel closing actions (cross click / escape press).
     */
    wppSidePanelClose: EventEmitter<CustomEvent<IWppSidePanelSidePanelCloseDetails>>;
    /**
     * Event emitted when the open animation starts.
     */
    wppSidePanelOpenStart: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the open animation ends.
     */
    wppSidePanelOpenComplete: EventEmitter<CustomEvent<void>>;
    /**
     * Event emitted when the close animation starts.
     */
    wppSidePanelCloseStart: EventEmitter<CustomEvent<IWppSidePanelSidePanelCloseDetails>>;
    /**
     * Event emitted when the close animation ends.
     */
    wppSidePanelCloseComplete: EventEmitter<CustomEvent<IWppSidePanelSidePanelCloseDetails>>;
    /**
     * Event emitted when the panel width changes: once on release for a pointer drag, and on
  every step for keyboard resizing. The detail contains the new width in pixels.
     */
    wppSidePanelResize: EventEmitter<CustomEvent<IWppSidePanelSidePanelResizeDetails>>;
}
export declare class WppSkeleton {
    protected z: NgZone;
    protected el: HTMLWppSkeletonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSkeleton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSkeleton, "wpp-skeleton-v4-3-0", never, { "height": { "alias": "height"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppSkeleton extends Components.WppSkeleton {
}
export declare class WppSlider {
    protected z: NgZone;
    protected el: HTMLWppSliderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSlider, "wpp-slider-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "continuous": { "alias": "continuous"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "inputWidth": { "alias": "inputWidth"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "marks": { "alias": "marks"; "required": false; }; "maskOptions": { "alias": "maskOptions"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "step": { "alias": "step"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": true; }; "withInput": { "alias": "withInput"; "required": false; }; "withValue": { "alias": "withValue"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppSortButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSortButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSortButton, "wpp-sort-button-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppSortButton extends Components.WppSortButton {
}
export declare class WppSpinner {
    protected z: NgZone;
    protected el: HTMLWppSpinnerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppSpinner, "wpp-spinner-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppSpinner extends Components.WppSpinner {
}
export declare class WppStep {
    protected z: NgZone;
    protected el: HTMLWppStepElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStep, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStep, "wpp-step-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "completed": { "alias": "completed"; "required": false; }; "completedLine": { "alias": "completedLine"; "required": false; }; "error": { "alias": "error"; "required": false; }; "iconDescription": { "alias": "iconDescription"; "required": false; }; "index": { "alias": "index"; "required": false; }; "lastStep": { "alias": "lastStep"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "step": { "alias": "step"; "required": false; }; "substep": { "alias": "substep"; "required": false; }; "warning": { "alias": "warning"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppStep extends Components.WppStep {
    /**
     * Emitted when the step was selected
     */
    wppStepChange: EventEmitter<CustomEvent<IWppStepStepChangeEventDetail>>;
}
export declare class WppStepper {
    protected z: NgZone;
    protected el: HTMLWppStepperElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStepper, "wpp-stepper-v4-3-0", never, { "activeStep": { "alias": "activeStep"; "required": true; }; "completedSteps": { "alias": "completedSteps"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "stepAmount": { "alias": "stepAmount"; "required": false; }; "stepperWidth": { "alias": "stepperWidth"; "required": false; }; "useDecimalSubSteps": { "alias": "useDecimalSubSteps"; "required": false; }; "useResizeObserver": { "alias": "useResizeObserver"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppStickyBarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppStickyBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppStickyBar, "wpp-sticky-bar-v4-3-0", never, { "barTitle": { "alias": "barTitle"; "required": false; }; "buttons": { "alias": "buttons"; "required": false; }; "offsetFromTop": { "alias": "offsetFromTop"; "required": false; }; "scrollTreshold": { "alias": "scrollTreshold"; "required": false; }; "tabSize": { "alias": "tabSize"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "withBackButton": { "alias": "withBackButton"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTabElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTab, "wpp-tab-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "ariaProps": { "alias": "ariaProps"; "required": false; }; "counter": { "alias": "counter"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": true; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTabsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTabs, "wpp-tabs-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": true; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTabs extends Components.WppTabs {
    /**
     * Emitted when the active tab has changed, emits index of the active tab
     */
    wppChange: EventEmitter<CustomEvent<IWppTabsTabsChangeEventDetail>>;
}
export declare class WppTag {
    protected z: NgZone;
    protected el: HTMLWppTagElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTag, "wpp-tag-v4-3-0", never, { "label": { "alias": "label"; "required": false; }; "maxLabelLength": { "alias": "maxLabelLength"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTag extends Components.WppTag {
}
export declare class WppTextareaInput {
    protected z: NgZone;
    protected el: HTMLWppTextareaInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTextareaInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTextareaInput, "wpp-textarea-input-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "charactersLimit": { "alias": "charactersLimit"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; "warningThreshold": { "alias": "warningThreshold"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTimePickerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTimePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTimePicker, "wpp-time-picker-v4-3-0", never, { "disabled": { "alias": "disabled"; "required": false; }; "dropdownConfig": { "alias": "dropdownConfig"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "maxMessageLength": { "alias": "maxMessageLength"; "required": false; }; "message": { "alias": "message"; "required": false; }; "messageType": { "alias": "messageType"; "required": false; }; "minutesInterval": { "alias": "minutesInterval"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltipConfig": { "alias": "tooltipConfig"; "required": false; }; "value": { "alias": "value"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTimePicker extends Components.WppTimePicker {
    /**
     * Emitted when the input receives focus
     */
    wppFocus: EventEmitter<CustomEvent<FocusEvent>>;
    /**
     * Emitted when the input loses focus
     */
    wppBlur: EventEmitter<CustomEvent<void>>;
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
    protected el: HTMLWppToastElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToast, "wpp-toast-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "header": { "alias": "header"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "index": { "alias": "index"; "required": false; }; "maxMessageLines": { "alias": "maxMessageLines"; "required": false; }; "message": { "alias": "message"; "required": true; }; "primaryBtn": { "alias": "primaryBtn"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppToast extends Components.WppToast {
    /**
     * Emitted when the toast index is displayed.
     */
    wppToastComplete: EventEmitter<CustomEvent<IWppToastToastCompleteDetail>>;
}
export declare class WppToastContainer {
    protected z: NgZone;
    protected el: HTMLWppToastContainerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToastContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToastContainer, "wpp-toast-container-v4-3-0", never, { "maxToastsToDisplay": { "alias": "maxToastsToDisplay"; "required": false; }; "staggerInterval": { "alias": "staggerInterval"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppToastContainer extends Components.WppToastContainer {
}
export declare class WppToggle {
    protected z: NgZone;
    protected el: HTMLWppToggleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppToggle, "wpp-toggle-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "controlled": { "alias": "controlled"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelConfig": { "alias": "labelConfig"; "required": false; }; "labelTooltipConfig": { "alias": "labelTooltipConfig"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTooltipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTooltip, "wpp-tooltip-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "config": { "alias": "config"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "error": { "alias": "error"; "required": false; }; "externalClass": { "alias": "externalClass"; "required": false; }; "header": { "alias": "header"; "required": false; }; "text": { "alias": "text"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "value": { "alias": "value"; "required": false; }; "warning": { "alias": "warning"; "required": false; }; "wordBreak": { "alias": "wordBreak"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTooltip extends Components.WppTooltip {
}
export declare class WppTopbar {
    protected z: NgZone;
    protected el: HTMLWppTopbarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTopbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTopbar, "wpp-topbar-v4-3-0", never, { "nativeLink": { "alias": "nativeLink"; "required": false; }; "navigation": { "alias": "navigation"; "required": true; }; "value": { "alias": "value"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTopbar extends Components.WppTopbar {
    /**
     * Emitted when topbar item was changed, return object like { value: 'home', path: '/home', label: 'Home' }
     */
    wppChange: EventEmitter<CustomEvent<IWppTopbarTopbarChangeEventDetail>>;
}
export declare class WppTopbarItem {
    protected z: NgZone;
    protected el: HTMLWppTopbarItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTopbarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTopbarItem, "wpp-topbar-item-v4-3-0", never, { "active": { "alias": "active"; "required": false; }; "activeItems": { "alias": "activeItems"; "required": false; }; "firstLevel": { "alias": "firstLevel"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "nativeLink": { "alias": "nativeLink"; "required": false; }; "navigation": { "alias": "navigation"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTopbarItem extends Components.WppTopbarItem {
    /**
     * Emitted when topbar item was changed
     */
    wppActiveTopbarItemChange: EventEmitter<CustomEvent<IWppTopbarItemNavigationItemEventDetail>>;
    /**
     * Emitted when topbar item menu expanded state changes
     */
    wppTopbarItemMenuToggle: EventEmitter<CustomEvent<boolean>>;
}
export declare class WppTree {
    protected z: NgZone;
    protected el: HTMLWppTreeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTree, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTree, "wpp-tree-v4-3-0", never, { "data": { "alias": "data"; "required": true; }; "defaultSelectedIds": { "alias": "defaultSelectedIds"; "required": false; }; "disableOpenCloseAnimation": { "alias": "disableOpenCloseAnimation"; "required": false; }; "disableSearchHighlight": { "alias": "disableSearchHighlight"; "required": false; }; "label": { "alias": "label"; "required": false; }; "lazyConfig": { "alias": "lazyConfig"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "search": { "alias": "search"; "required": false; }; "searchConfig": { "alias": "searchConfig"; "required": false; }; "skeletonNumberItems": { "alias": "skeletonNumberItems"; "required": false; }; "withItemsTruncation": { "alias": "withItemsTruncation"; "required": false; }; "withVirtualisation": { "alias": "withVirtualisation"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTreeItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTreeItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTreeItem, "wpp-tree-item-v4-3-0", never, { "disableOpenCloseAnimation": { "alias": "disableOpenCloseAnimation"; "required": false; }; "disableSearchHighlight": { "alias": "disableSearchHighlight"; "required": false; }; "endContent": { "alias": "endContent"; "required": false; }; "highlightOptions": { "alias": "highlightOptions"; "required": false; }; "isFocused": { "alias": "isFocused"; "required": false; }; "item": { "alias": "item"; "required": false; }; "level": { "alias": "level"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "posInSet": { "alias": "posInSet"; "required": false; }; "search": { "alias": "search"; "required": false; }; "setSize": { "alias": "setSize"; "required": false; }; "text": { "alias": "text"; "required": false; }; "transformSearchQuery": { "alias": "transformSearchQuery"; "required": false; }; "withItemsTruncation": { "alias": "withItemsTruncation"; "required": false; }; }, {}, never, ["*"], true, never>;
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
    protected el: HTMLWppTypographyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppTypography, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppTypography, "wpp-typography-v4-3-0", never, { "color": { "alias": "color"; "required": false; }; "tag": { "alias": "tag"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppTypography extends Components.WppTypography {
}
export declare class WppVideoPlayer {
    protected z: NgZone;
    protected el: HTMLWppVideoPlayerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<WppVideoPlayer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WppVideoPlayer, "wpp-video-player-v4-3-0", never, { "ariaProps": { "alias": "ariaProps"; "required": false; }; "caption": { "alias": "caption"; "required": false; }; "controlPanelConfig": { "alias": "controlPanelConfig"; "required": false; }; "jumpValues": { "alias": "jumpValues"; "required": false; }; "locales": { "alias": "locales"; "required": false; }; "preload": { "alias": "preload"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "thumbnail": { "alias": "thumbnail"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface WppVideoPlayer extends Components.WppVideoPlayer {
}
