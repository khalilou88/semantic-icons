import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-android-old-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.77595 8.4783C4.43135 8.4783 4.13897 8.59847 3.89863 8.83881C3.65829 9.07915 3.53809 9.36755 3.53809 9.70416V14.8724C3.53809 15.2174 3.65826 15.5095 3.89863 15.7499C4.13897 15.9903 4.43135 16.1105 4.77595 16.1105C5.1203 16.1105 5.4109 15.9903 5.64752 15.7499C5.88367 15.5096 6.00206 15.2174 6.00206 14.8724V9.70416C6.00206 9.36752 5.88189 9.07915 5.64152 8.83881C5.40114 8.59847 5.11256 8.4783 4.77595 8.4783ZM14.728 3.83878L15.5814 2.26453C15.6374 2.1603 15.6175 2.08038 15.5214 2.02419C15.4171 1.97573 15.337 2.00028 15.2811 2.09611L14.4158 3.68295C13.6543 3.34631 12.849 3.17768 11.9998 3.17768C11.1504 3.17768 10.345 3.34635 9.58388 3.68295L8.71853 2.09611C8.6623 2.00028 8.5822 1.97594 8.47819 2.02419C8.38193 2.08064 8.362 2.1603 8.41823 2.26453L9.27165 3.83878C8.4063 4.28008 7.7171 4.89467 7.20431 5.6839C6.69151 6.47356 6.43501 7.33648 6.43501 8.27419H17.5525C17.5525 7.3367 17.296 6.47374 16.7832 5.6839C16.2704 4.89467 15.5852 4.28008 14.728 3.83878ZM9.79413 6.12856C9.70185 6.22107 9.59162 6.2671 9.46349 6.2671C9.33512 6.2671 9.22713 6.22107 9.13904 6.12856C9.05095 6.03649 9.0069 5.9267 9.0069 5.79814C9.0069 5.67001 9.05095 5.56 9.13904 5.46772C9.22713 5.37564 9.33537 5.32961 9.46349 5.32961C9.59162 5.32961 9.70185 5.37564 9.79413 5.46772C9.88621 5.56022 9.93246 5.67001 9.93246 5.79814C9.93221 5.92648 9.88599 6.03649 9.79413 6.12856ZM14.8601 6.12856C14.7718 6.22107 14.6636 6.2671 14.5357 6.2671C14.4073 6.2671 14.2971 6.22107 14.205 6.12856C14.1127 6.03649 14.0667 5.9267 14.0667 5.79814C14.0667 5.67001 14.1127 5.56 14.205 5.46772C14.2971 5.37564 14.4073 5.32961 14.5357 5.32961C14.6638 5.32961 14.7718 5.37564 14.8601 5.46772C14.9483 5.56022 14.9922 5.67001 14.9922 5.79814C14.9922 5.92648 14.9482 6.03649 14.8601 6.12856ZM6.48275 16.7113C6.48275 17.0803 6.61087 17.3926 6.86716 17.6488C7.12366 17.9051 7.43597 18.0333 7.80465 18.0333H8.69412L8.70631 20.7619C8.70631 21.1065 8.82648 21.3991 9.06682 21.6395C9.30716 21.8798 9.59578 22 9.93217 22C10.2766 22 10.5691 21.8798 10.8095 21.6395C11.0499 21.3991 11.17 21.1065 11.17 20.7619V18.0335H12.8286V20.7619C12.8286 21.1065 12.9488 21.3991 13.1891 21.6395C13.4295 21.8798 13.7218 22 14.0665 22C14.4108 22 14.7034 21.8798 14.9438 21.6395C15.1841 21.3991 15.3043 21.1065 15.3043 20.7619V18.0335H16.2058C16.5663 18.0335 16.8746 17.9054 17.1313 17.6491C17.3876 17.3928 17.5158 17.0805 17.5158 16.7116V8.70645H6.48275V16.7113ZM19.2232 8.4783C18.8865 8.4783 18.5982 8.5967 18.3578 8.83284C18.1175 9.06942 17.9973 9.36003 17.9973 9.70416V14.8724C17.9973 15.2174 18.1174 15.5095 18.3578 15.7499C18.5982 15.9903 18.8867 16.1105 19.2232 16.1105C19.5676 16.1105 19.8601 15.9903 20.1005 15.7499C20.3409 15.5095 20.461 15.2174 20.461 14.8724V9.70416C20.461 9.35999 20.3409 9.06942 20.1005 8.83284C19.8601 8.5967 19.5676 8.4783 19.2232 8.4783Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAndroidOldIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
