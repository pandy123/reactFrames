/**
 * 桌面事件枚举。
 */
export class UiDesktopEventEnum {
   /** 激活处理 */
   public static Active: string = 'ui.desktop.active';
   /** 页面模式变更 */
   public static FrameModeChanged: string = 'ui.desktop.frame.mode.changed';
   /** 视角模式变更 */
   public static ViewModeChanged: string = 'ui.desktop.view.mode.changed';
   /** 鼠标落下 */
   public static MouseDown: string = 'ui.desktop.mouse.down';
   /** 鼠标抬起 */
   public static MouseUp: string = 'ui.desktop.mouse.up';
   /** 按键落下 */
   public static KeyboardDown: string = 'ui.desktop.keyboard.down';
   /** 按键抬起 */
   public static KeyboardUp: string = 'ui.desktop.keyboard.up';
   /** 改变大小 */
   public static Resize: string = 'ui.desktop.resize';
   /** 取消激活处理 */
   public static Deactive: string = 'ui.desktop.deactive';
} 