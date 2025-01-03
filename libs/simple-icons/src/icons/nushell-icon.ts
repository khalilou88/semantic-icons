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
  selector: 'svg[si-nushell-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Nushell</title>
    <svg:path
      d="M0 16.338h1.25v-5.7c.417-.624 1.205-1.309 2.127-1.309 1.176 0 1.34.64 1.34 2.247v4.762h1.25v-5.685c0-1.458-.67-2.32-2.202-2.32-.923 0-1.964.46-2.59 1.264l-.103-1.1H0Zm10.177-7.842h-1.25v5.698c0 1.46.745 2.307 2.263 2.307.921 0 1.889-.431 2.514-1.22l.104 1.057h1.072V8.496h-1.25v5.773c-.432.67-1.265 1.25-2.129 1.25-.907 0-1.324-.446-1.324-1.458zm8.11-.997-.61.952 5.251 3.229-5.251 3.244.669.922L24 12.32v-1.28z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNushellIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
