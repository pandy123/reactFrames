import * as React from 'react';
import { UiContainer } from '../core/UiContainer';

/**
 * 界面标题栏项目。
 */
export type UiDesktopTitleItem = {
   /** 视图 */
   view: any;
   /** 顺序 */
   order: number;
}

/**
 * 界面标题栏。
 * 
 * @author maocy
 * @history 180123
 */
export class UiDesktopTitleSpace extends UiContainer {
   /** 激活标题 */
   public activeTitle: UiDesktopTitleItem;
   /** 按键集合 */
   public titles: Array<UiDesktopTitleItem>;
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
      this.titles = new Array<UiDesktopTitleItem>();
   }

   /**
    * 注册一个按键。
    *
    * @param button 按键
    */
   public register(button: any, order: number = 0) {
      var item = new Object() as UiDesktopTitleItem;
      item.view = button;
      item.order = order;
      this.titles.push(item);
      this.activeTitle = item;
   }

   /**
    * 渲染处理。
    */
   public render() {
      // 获得标题
      var title = this.activeTitle;
      // 获得视图
      var view = null;
      if (title) {
         view = title.view;
      }
      // 生成页面
      return (
         <div className="header-panel">{view}</div >
      )
   }
}
