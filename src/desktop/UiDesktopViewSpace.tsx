import * as React from 'react';
import { UiContainer } from '../core/UiContainer';

/**
 * 界面工作区项目。
 */
export type UiDesktopViewSpaceItem = {
   /** 视图 */
   view: any;
   /** 顺序 */
   order: number;
   /** 名字 */
   name: string;
   /** 状态 */
   active: boolean;
}


export class UiDesktopViewSpace extends UiContainer {
   /** 空间集合 */
   public spaces: Array<UiDesktopViewSpaceItem>;
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
      this.spaces = new Array<UiDesktopViewSpaceItem>();
   }

   /**
    * 根据名称查找一个目录。
    *
    * @param name 名称
    * @return 目录
    */
   public findByName(name: string): UiDesktopViewSpaceItem {
      var spaces = this.spaces;
      var count = spaces.length;
      for (var i = 0; i < count; i++) {
         var space = spaces[i];
         if (space.name == name) {
            return space;
         }
      }
      return null as any;
   }

   /**
    * 注册一个视图。
    *
    * @param name 名称
    * @param view 视图
    */
   public register(name: string, view: any, order: number = 0) {
      var item = new Object() as UiDesktopViewSpaceItem;
      item.name = name;
      item.view = view;
      this.spaces.push(item);

   }

   public showByName(name: string, render?: boolean) {
      var space = this.findByName(name);
      if (space) {
         space.active = true;
         if (render) {
            this.forceUpdate();
         }
      }

   }

   public showByNames(names: Array<string>, render?: boolean) {
      var count = names.length;
      for (var i = 0; i < count; i++) {
         this.showByName(names[i]);
      }
      if (render) {
         this.forceUpdate();
      }
   }

   public hideByName(name: string, render?: boolean) {
      var space = this.findByName(name);
      if (space) {
         space.active = false;
         if (render) {
            this.forceUpdate();
         }
      }

   }

   public hideByNames(names: Array<string>, render?: boolean) {
      var count = names.length;
      for (var i = 0; i < count; i++) {
         this.hideByName(names[i]);
      }
      if (render) {
         this.forceUpdate();
      }
   }

}
