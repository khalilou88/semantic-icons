import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-taking-leaf-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3086 2.75L15.5932 2.05611C15.4108 1.9813 15.2063 1.9813 15.0239 2.05611L15.3086 2.75Z"
        fill="#323544"
      />
      <path
        d="M15.3086 2.75C15.0239 2.05611 15.0239 2.05611 15.0239 2.05611L15.0227 2.05663L15.0211 2.05727L15.0173 2.05886L15.0066 2.06337L14.9735 2.07777C14.9464 2.08977 14.9094 2.10663 14.8639 2.12847C14.7731 2.1721 14.6477 2.23595 14.4991 2.32112C14.2036 2.4906 13.8084 2.74918 13.4106 3.10723C12.6158 3.82257 11.766 4.98015 11.766 6.63101C11.766 8.65116 13.3019 10.383 15.3086 10.383C17.3152 10.383 18.8511 8.65116 18.8511 6.63101C18.8511 4.98015 18.0014 3.82257 17.2066 3.10723C16.8087 2.74918 16.4136 2.4906 16.118 2.32112C15.9695 2.23595 15.8441 2.1721 15.7532 2.12847C15.7077 2.10663 15.6707 2.08977 15.6436 2.07777L15.6105 2.06337L15.5998 2.05886L15.596 2.05727L15.5945 2.05663C15.5945 2.05663 15.5932 2.05611 15.3086 2.75ZM16.2031 4.22217C16.8046 4.76347 17.3511 5.5464 17.3511 6.63101C17.3511 7.61344 16.7966 8.4007 16.0586 8.72398V6.10577C16.0586 5.69155 15.7228 5.35577 15.3086 5.35577C14.8944 5.35577 14.5586 5.69155 14.5586 6.10577V8.72398C13.8206 8.4007 13.266 7.61344 13.266 6.63101C13.266 5.5464 13.8126 4.76347 14.414 4.22217C14.7143 3.95191 15.0173 3.75313 15.2454 3.62234C15.2672 3.6098 15.2883 3.59793 15.3086 3.58672C15.3288 3.59793 15.3499 3.6098 15.3718 3.62234C15.5999 3.75313 15.9028 3.95191 16.2031 4.22217Z"
        fill="#323544"
      />
      <path
        d="M19.4266 11.084C20.0839 10.5509 21.0447 10.6312 21.6044 11.266C22.1114 11.8411 22.1317 12.6975 21.6525 13.296L17.7859 18.1246C17.4104 18.5935 16.8423 18.8663 16.2417 18.8663H10.0685C9.8825 18.8663 9.70317 18.9354 9.56527 19.0602L9.04042 19.5351C9.14503 19.8637 9.01125 20.2321 8.7004 20.4115L6.1238 21.8991C5.76508 22.1062 5.30638 21.9833 5.09928 21.6246L2.10061 16.4308C1.8935 16.072 2.01641 15.6133 2.37513 15.4062L4.95173 13.9186C5.18986 13.7812 5.47206 13.7891 5.69546 13.9149L7.38764 12.5622C7.94114 12.1197 8.64057 11.8147 9.41278 11.8112C10.2262 11.8076 11.5119 11.8795 12.6754 12.3042H15.2732C15.9345 12.3042 16.512 12.6633 16.8212 13.1972L19.4266 11.084ZM8.55886 17.9479C8.97255 17.5736 9.51056 17.3663 10.0685 17.3663H16.2417C16.3869 17.3663 16.5242 17.3004 16.615 17.187L20.4816 12.3584C20.5053 12.3288 20.5043 12.2864 20.4792 12.258C20.4515 12.2266 20.404 12.2226 20.3715 12.249L16.5205 15.3724C16.1984 15.6862 15.7583 15.8794 15.2732 15.8794H12.5383C12.1241 15.8794 11.7883 15.5437 11.7883 15.1294C11.7883 14.7152 12.1241 14.3794 12.5383 14.3794H15.2732C15.3195 14.3794 15.3633 14.3685 15.4021 14.349C15.4102 14.3419 15.4184 14.3349 15.4269 14.328L15.5 14.2687C15.5381 14.2199 15.5608 14.1585 15.5608 14.0918C15.5608 13.9329 15.432 13.8042 15.2732 13.8042H12.5912C12.4613 13.8042 12.3365 13.7796 12.222 13.736C11.296 13.383 10.1887 13.3077 9.41955 13.3112C9.04628 13.3129 8.66549 13.4611 8.32425 13.7338L6.53627 15.1632L8.2864 18.1945L8.55886 17.9479ZM3.77464 16.3303L6.02332 20.2251L7.30088 19.4875L5.05221 15.5927L3.77464 16.3303Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHandTakingLeaf1Icon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
