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
  selector: 'svg[si-fugacloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Fuga Cloud</svg:title>
    <svg:path
      d="m19.0876 13.9765-1.1014-.6361v-2.5345l1.1013.6389 3.1738-1.8305v2.5275zm-14.1752.01h-.0067l-3.167-1.8341V9.625l3.1702 1.8284 1.0982-.6371v2.5345zm.0592-3.5472L1.7387 8.5686V5.9464l.971-.5568L11.9941 0l1.9539 1.1371 5.9567 3.4708.2013.1303 1.0303.5922.1657.095.9593.5686v2.5597l-3.1738 1.8349-1.1013-.6353V8.4341l-4.95-2.8903-1.0421-.6277-.971.5567-5.033 2.9495v1.4254l-1.0185.5883m0 4.4197 1.0184-.5805v1.2082l6.0633 3.5418.225-.1421.0473-.024 5.6725-3.3168-.0119-.4264v-.8918l1.1014.6313 3.1737-1.833v5.0193l-.9593.5568-1.196.6988-.2013.1185-5.9567 3.4826L11.994 24l-1.9302-1.1371-5.9685-3.4708-.2013-.1303-1.1842-.687-.9711-.5698v-4.6197l.0118-.3971 3.2211 1.8673"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFugacloudIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '242F4B');
  }
}
