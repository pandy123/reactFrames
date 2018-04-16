import * as React from 'react';
import { UiContainer } from '../core/UiContainer';
import { UiDesktopToolbar, UiToolBarItem } from './UiDesktopToolbar';


export class UiDesktopToolbarSpace extends UiContainer {
   /** 按键集合 */
   public toolbar: UiDesktopToolbar;
   /** 历史集合 */
   public history: Array<UiDesktopToolbar>;
   /** 鼠标进入事件 */
   protected _handleMouseEnter: any;
   /** 鼠标离开事件 */
   protected _handleMouseLeave: any;

   /**
    * 构造处理。
    */
   public constructor() {
      super();
      // 设置属性
      this.toolbar = new UiDesktopToolbar();
      this.history = new Array<UiDesktopToolbar>();
   }

   /**
    * 注册一个按键。
    *
    * @param button 按键
    */
   public registerButton(button: any, order: number = 0) {
      this.toolbar.registerButton(button, order);
   }

   /**
    * 鼠标经过事件处理。
    */
   protected onMouseEnter = (event: any) => {
      var handle = this._handleMouseEnter;
      if (handle) {
         handle(event);
      }
   }

   /**
    * 鼠标经过事件处理。
    */
   protected onMouseLeave = (event: any) => {
      var handle = this._handleMouseLeave;
      if (handle) {
         handle(event);
      }
   }

   /**
    * 保存当前工具栏。
    */
   public store() {
      this.history.push(this.toolbar);
      this.toolbar = new UiDesktopToolbar()
   }

   /**
    * 恢复一个工具栏。
    */
   public restore() {
      var history = this.history;
   }

   /**
    * 渲染处理。
    */
   public render() {
      var buttons = this.toolbar.fetch();
      return (
         <div className="toolbar-panel box-shadow">
            <div className="tool-list" style={{ float: "left", height: "100%" }}>
               {buttons}
            </div>
         </div >
      )
   }
}
