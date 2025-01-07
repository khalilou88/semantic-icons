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
  selector: 'svg[si-tsunami-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.04 14c.47-.24.68-.41 1.3-.87 2 1.48 3.07 1.39 3.79 1.32A7.471 7.471 0 0 1 8 10.5c0-1.67.54-3.21 1.47-4.46C6.41 7.52 4.3 10.46 4.04 14z"
      opacity=".3"
    />
    <svg:path
      d="M12 17.63c-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37-3.8 2.8-6.13.4-6.67 0zM19.33 12H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2.01 14.5l-.01 2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37-3.8 2.8-6.12.4-6.67 0-.9.67-.54.41-.91.63-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12zm-10.2 2.45c-.72.07-1.79.16-3.79-1.32-.62.46-.82.63-1.3.87.27-3.53 2.38-6.48 5.43-7.96A7.432 7.432 0 0 0 8 10.5c0 1.42.4 2.77 1.13 3.95z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTsunamiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
