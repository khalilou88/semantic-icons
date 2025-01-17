import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-openmediavault-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>openmediavault</svg:title>
    <svg:path
      d="M.945 1.045A.947.947 0 0 0 0 1.988v20.024c0 .534.436.943.945.943h22.11a.944.944 0 0 0 .945-.943V1.988a.941.941 0 0 0-.945-.943Zm.118 1.064h21.875v19.784H1.063ZM3.53 4.385c-.198 0-.361.149-.361.334v3.699c0 .185.162.334.361.334h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.333-.36-.333zm2.057.886a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.3 1.3 1.3 0 0 1-1.299-1.3 1.3 1.3 0 0 1 1.299-1.297m-.002.62a.68.68 0 0 0-.676.677.68.68 0 0 0 .678.678.68.68 0 0 0 .678-.678.68.68 0 0 0-.678-.677ZM3.53 9.816c-.198 0-.361.15-.361.334v3.702c0 .184.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.334-.36-.334zm2.057.887A1.3 1.3 0 0 1 6.885 12a1.3 1.3 0 0 1-1.297 1.299A1.3 1.3 0 0 1 4.289 12a1.3 1.3 0 0 1 1.299-1.297m-.002.62A.68.68 0 0 0 4.91 12a.68.68 0 0 0 .678.68.68.68 0 0 0 0-1.358ZM3.53 15.247c-.198 0-.361.15-.361.334v3.701c0 .185.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.699c0-.184-.161-.334-.36-.334zm2.057.887a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.298 1.3 1.3 0 0 1-1.299-1.298 1.3 1.3 0 0 1 1.299-1.297m-.002.619a.68.68 0 0 0 .002 1.358.68.68 0 0 0 0-1.358Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenmediavaultIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#5DACDF');
}
