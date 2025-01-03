import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-fmod-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FMOD</title>
    <svg:path
      d="M3.3522 10.17a.903.903 0 0 0-.903.903v4.0696H1.127v-2.8134H0v-1.318h1.1284a2.2252 2.2252 0 0 1 2.2238-2.1703H4.673v1.3222zm7.3257 1.8403a.2501.2501 0 0 0-.2378.1732l-.532 1.8348a1.564 1.564 0 0 1-3.0016 0l-.532-1.8348a.2515.2515 0 0 0-.4769 0l-.5319 1.8348a1.5723 1.5723 0 0 1-1.5118 1.123h-.3684v-1.3195h.3739a.2474.2474 0 0 0 .235-.1732l.5319-1.8348a1.5696 1.5696 0 0 1 3.0086 0l.536 1.8376a.246.246 0 0 0 .4714 0l.532-1.8349a1.5696 1.5696 0 0 1 3.0086 0l.5319 1.8349a.2474.2474 0 0 0 .235.1731h.3738v1.3195h-.3683a1.571 1.571 0 0 1-1.5119-1.123l-.5319-1.8348a.2515.2515 0 0 0-.2336-.1759zm2.6897.9058a2.2252 2.2252 0 1 1 2.2252 2.2251 2.2252 2.2252 0 0 1-2.2252-2.2251zm3.1282 0a.903.903 0 1 0-.903.903.903.903 0 0 0 .903-.903zm4.6744.4604a.962.962 0 0 0 .0673-.1237.6707.6707 0 0 1 1.2659.3079.6542.6542 0 0 1-.055.2625l-.0192.0398a2.2678 2.2678 0 0 1-2.0342 1.2755 2.2252 2.2252 0 0 1 0-4.4504h.0976a2.25 2.25 0 0 1 1.0143.2914V8.8409h1.3222v3.01a.7422.7422 0 0 1-.712.7215 1.5902 1.5902 0 0 1-1.0692-.3738.9016.9016 0 0 0-.5498-.191h-.0976a.903.903 0 1 0 .7752 1.3661zM4.2277 11.624a.7037.7037 0 0 1-.7037.7037.7037.7037 0 0 1-.7037-.7037.7037.7037 0 0 1 .7037-.7037.7037.7037 0 0 1 .7037.7037zm18.398 2.8354a.6872.6872 0 1 0 .6872-.6748.6776.6776 0 0 0-.6872.6748zm.1237 0a.5594.5594 0 1 1 .5608.5828.558.558 0 0 1-.565-.5828zm.2817.3821h.1237v-.3408h.1375l.2158.3408h.1374l-.2268-.3505a.2034.2034 0 0 0 .209-.2157c0-.1526-.0894-.2268-.275-.2268h-.3064zm.1237-.6872h.1581c.0838 0 .1746.0165.1746.121 0 .1044-.1004.1374-.209.1374h-.1292z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFmodIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}