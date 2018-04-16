import * as React from 'react';

/**
 * 事务工具栏项目。
 */
export type UiToolBarItem = {
   view: any;
   order: number;
}

export class UiDesktopToolbar {
   /** 按键集合 */
   public buttons: Array<UiToolBarItem>;

   /**
    * 构造处理。
    */
   public constructor() {
      // 设置属性
      this.buttons = new Array<UiToolBarItem>();
   }

   /**
    * 保存当前工具栏。
    *
    * @param button 按键
    */
   public store() {
   }

   /**
    * 注册一个按键。
    *
    * @param button 按键
    */
   public restore() {
   }

   /**
    * 注册一个按键。
    *
    * @param button 按键
    */
   public registerButton(button: any, order: number = 0) {
      var item = new Object() as UiToolBarItem;
      item.view = button;
      item.order = order;
      this.buttons.push(item);
   }

   /**
    * 按键排序处理。
    *
    * @param button 按键
    */
   public buttonSorter(item1: UiToolBarItem, item2: UiToolBarItem) {
      return item1.order - item2.order;
   }

   /**
    * 获得按键集合。
    */
   public fetch() {
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
      return array;
   }
}
