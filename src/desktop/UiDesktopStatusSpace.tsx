import * as React from 'react';
import { UiContainer } from '../core/UiContainer';

/**
 * 界面状态栏项目。
 */
export type UiDesktopStatusItem = {
   view: any;
   order: number;
}

/**
 * 界面状态栏。
 * 
 * @author maocy
 * @history 180123
 */
export class UiDesktopStatusSpace extends UiContainer {
   /** 按键集合 */
   public buttons: Array<UiDesktopStatusItem>;
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
      // this.buttons = DirectionEnum.Horizontal;
      this.buttons = new Array<UiDesktopStatusItem>();
   }

   /**
    * 注册一个按键。
    *
    * @param button 按键
    */
   public registerButton(button: any, order: number = 0) {
      var item = new Object() as UiDesktopStatusItem;
      item.view = button;
      item.order = order;
      this.buttons.push(item);
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

   public buttonSorter(item1: UiDesktopStatusItem, item2: UiDesktopStatusItem) {
      return item1.order - item2.order;
   }

   /**
    * 渲染处理。
    */
   public render() {
      // 获得按键集合
      var array = new Array<any>();
      var buttons = this.buttons;
      buttons.sort(this.buttonSorter);
      var count = buttons.length;
      for (var i = 0; i < count; i++) {
         var button = buttons[i];
         if (i > 0) {
            array.push(<div key={i} className='tool-spacing' />);
         }
         array.push(button.view);
      }
      // 生成页面
      return (
         <div className="toolbar-panel box-shadow">
            <div className="tool-list" style={{ float: "left", height: "100%" }}>
               {array}
            </div>
         </div >
      )
   }
}
