import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-tumblr-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88zm-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoTumblrIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
