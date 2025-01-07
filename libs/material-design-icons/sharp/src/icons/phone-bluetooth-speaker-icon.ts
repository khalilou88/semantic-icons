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
  selector: 'svg[si-phone-bluetooth-speaker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3.94.94-.94.94V7.21zm3 8.25-5.27-.61-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhoneBluetoothSpeakerIcon implements OnInit {
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
