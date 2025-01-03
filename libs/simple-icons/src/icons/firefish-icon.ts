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
  selector: 'svg[si-firefish-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Firefish</title>
    <svg:path
      d="M16.771 0c-.68-.016-1.342.507-1.342 1.304V7.27c0 .719.582 1.301 1.3 1.301h5.967c1.16 0 1.74-1.401.92-2.22L17.65.383a1.275 1.275 0 0 0-.879-.383ZM6.573.106c-.672-.017-1.326.5-1.326 1.287v5.892c0 .71.575 1.285 1.285 1.285h5.892c1.145 0 1.718-1.384.908-2.194L7.44.484a1.259 1.259 0 0 0-.867-.379ZM1.286 10.287c-.71 0-1.286.576-1.286 1.286v11.142C0 23.425.576 24 1.286 24h11.143c.71 0 1.285-.575 1.285-1.285V11.573c0-.71-.575-1.286-1.285-1.286zm15.485 0c-.68-.017-1.342.507-1.342 1.304v5.966c0 .718.582 1.3 1.3 1.3h5.967c1.16 0 1.74-1.4.92-2.22L17.65 10.67a1.275 1.275 0 0 0-.879-.384zM3.43 17.144a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428zm4.285 0a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFirefishIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
