import * as React from 'react';
import { UiContainer } from '../core/UiContainer';
import { UiLayer } from '../core/UiLayer';
import { UiWindow } from '../core/UiWindow';


/**
 * 桌面界面。
 */
export class UiMainDesktop extends UiContainer {
   public name: string
   /** 页面集合 */
   public frames: Array<any>;
   /** 层集合 */
   public layers: Array<any>;
   /** 窗口集合 */
   public windows: Array<any>;

   /**
    * 构造处理。
    */
   public constructor() {
      super();
      // 设置属性
      this.name = 'editor.base.ui.desktop';
      this.frames = new Array<any>();
      this.layers = new Array<any>();
      this.windows = new Array<any>();
   }

   /**
    * 渲染处理。
    */
   public render() {
      var frames = this.frames;
      var layers = this.layers;
      var windows = this.windows;
      return (
         <div className='sk_desktop'>
            {frames}
            <div key='layer.float.background' className="sk_float_background"></div>
            <div key='layer.loading.background' className="sk_loading_background"></div>
            {/* <UiLoadingLayer key='layer.loading' ref='loadingLayer' identity={UiIdentityEnum.LoadingLayer} /> */}
            {layers}
            {/* <UiMessageTip key='layer.message' ref="message" identity={UiIdentityEnum.MessageTip} />
            <UiMessageBox key='layer.confirm' ref="confirm" identity={UiIdentityEnum.MessageBox} /> */}
            {windows}
         </div>
      )
   }
}