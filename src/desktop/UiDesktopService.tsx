import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UiMainDesktop } from './UiMainDesktop';

/**
 * 桌面服务。
 */
export class UiDesktopService {
   /** 准备好 */
   public statusReady: boolean;
   /** 主桌面 */
   public desktop: UiMainDesktop;


   /**
    * 构造处理。
    */
   public constructor() {
      // 设置属性
   }

   /**
    * 建立页面。
    *
    * @param htmlPanel 面板
    */
   public setup(htmlPanel: any) {
      // 建立桌面
      this.desktop = ReactDOM.render(<UiMainDesktop />, htmlPanel) as UiMainDesktop;
   }

   /**
    * 激活处理。
    */
   public active() {
      // 激活整个视图，通知所有监听的视图
   }

   /**
    * 取消激活处理。
    */
   public deactive() {

   }

   /**
    * 注册页面。
    *
    * @param frame 页面
    */
   public registerFrame(frame: any) {
      this.desktop.frames.push(frame);
   }

   /**
    * 注销页面。
    *
    * @param frame 页面
    */
   public unregisterFrame(frame: any) {
      this.desktop.frames.remove(frame);
   }

   /**
    * 注册层。
    *
    * @param layer 层
    */
   public registerLayer(layer: any) {
      this.desktop.layers.push(layer);
   }

   /**
    * 注销层。
    *
    * @param layer 层
    */
   public unregisterLayer(layer: any) {
      this.desktop.layers.remove(layer);
   }

   /**
    * 注册窗口。
    *
    * @param window 窗口
    */
   public registerWindow(window: any) {
      this.desktop.windows.push(window);
   }

   /**
    * 注销窗口。
    *
    * @param window 窗口
    */
   public unregisterWindow(window: any) {
      this.desktop.windows.remove(window);
   }

   /**
    * 显示加载中。
    */
   public showLoading(): void {
      var loadingLayer = this.desktop.refs.loadingLayer;
      loadingLayer.show();
   }

   /**
    * 隐藏加载中。
    */
   public hideLoading(): void {
      var loadingLayer = this.desktop.refs.loadingLayer;
      loadingLayer.hide();
   }

   /**
    * 显示消息文本。
    *
    * @param text 文本
    * @param level 级别
    * @param parameters 参数
    */
   public showMessage(text: string, level?: string, parameters?: any) {
   }

   /**
    * 显示状态文本。
    *
    * @param text 文本
    */
   public showStatus(text: string) {
   }

   /**
    * 显示确认对话框。
    *
    *  @param title 标题
    *  @param content 内容
    *  @param successHandle 成功句柄
    *  @param failHandle 失败句柄
    *  @param successTitle 成功标题
    *  @param cancelTitle 失败标题
    *  @param closeIsCancel 关闭时执行取消操作
    */
   public showConfirm(title: string, content: string, successHandle?: any, failHandle?: any, successTitle?: string, cancelTitle?: string, closeIsCancel: boolean = true) {
   }

   /**
    * 建立页面。
    *
    * @param htmlPanel 面板
    */
   public update() {
      this.desktop.forceUpdate();
   }
}