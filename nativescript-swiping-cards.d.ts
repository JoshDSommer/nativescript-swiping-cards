import { AbsoluteLayout } from 'ui/layouts/absolute-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
export declare class Card extends StackLayout {
}
export interface ICardMap {
    panel: StackLayout;
    left?: ICardMap;
    right?: ICardMap;
}
export declare class CardContainer extends AbsoluteLayout {
    private currentPanel;
    private transitioning;
    private direction;
    private _loaded;
    private _pageWidth;
    private _loop;
    private _interval;
    private _androidTranslucentStatusBar;
    private _androidTranslucentNavBar;
    private timer_reference;
    interval: number;
    loop: boolean;
    androidTranslucentStatusBar: boolean;
    androidTranslucentNavBar: boolean;
    pageWidth: number;
    android: any;
    ios: any;
    constructor();
    constructView(): void;
    private carousel(isenabled, time);
    private rebindSlideShow();
    stopSlideshow(): void;
    startSlideshow(): void;
    nextSlide(): void;
    previousSlide(): void;
    resetAndroidTranslucentFlags(): void;
    private setupLeftPanel();
    private setupRightPanel();
    private applySwipe(pageWidth);
    private showRightSlide(panelMap, offset?);
    private showLeftSlide(panelMap, offset?);
    private buildFooter();
    private setwidthPercent(view, percentage);
    private newFooterButton(name);
    private buildSlideMap(views);
}
