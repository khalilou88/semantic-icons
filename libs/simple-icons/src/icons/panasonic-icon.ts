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
  selector: 'svg[si-panasonic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Panasonic</svg:title>
    <svg:path
      d="M3.157 11.4852c.0399-.6914-.4884-1.2842-1.1798-1.324H0v3.58h1.084v-1.1h.66c.166 0 .333-.02.496-.059.497-.103.87-.52.917-1.025v-.072zm-1.081.005a.35.35 0 0 1-.337.301c-.081.007-.15.007-.23.007h-.425v-.777h.632a.36.36 0 0 1 .36.326.658.658 0 0 1 0 .143zm3.6781 1.45c0-.278-.01-.511-.01-.786a1.654 1.654 0 0 0-.057-.42.666.666 0 0 0-.332-.43 1.046 1.046 0 0 0-.316-.118 2.63 2.63 0 0 0-1.065-.02c-.1.015-.197.043-.29.082a.77.77 0 0 0-.455.5.597.597 0 0 0-.024.261.124.124 0 0 0 .014.048l.86.02a.386.386 0 0 1 .025-.153.262.262 0 0 1 .162-.162.49.49 0 0 1 .342 0 .23.23 0 0 1 .156.157.15.15 0 0 1-.02.13.22.22 0 0 1-.1.078l-.074.024c-.113.03-.228.055-.343.075a6.7928 6.7928 0 0 0-.276.05 3.2483 3.2483 0 0 0-.365.095.787.787 0 0 0-.295.173.621.621 0 0 0-.205.393.792.792 0 0 0 .012.299.71.71 0 0 0 .509.54c.277.084.574.068.841-.043a.83.83 0 0 0 .344-.248c.018.059.038.117.057.176.012.032.03.061.051.087h.948a.414.414 0 0 1-.068-.207c-.0138-.2-.0225-.4004-.026-.601zm-.956-.088a.431.431 0 0 1-.067.193.406.406 0 0 1-.182.145.627.627 0 0 1-.21.054.453.453 0 0 1-.163-.013.244.244 0 0 1-.12-.074.204.204 0 0 1-.057-.106.17.17 0 0 1 .064-.174.314.314 0 0 1 .105-.063c.095-.035.19-.066.288-.093.118-.034.232-.078.342-.131a.907.907 0 0 1 0 .262zm3.262-1.712a1.038 1.038 0 0 0-.755.054 1.662 1.662 0 0 0-.393.262l-.023-.27h-.919v2.559h.982v-1.42a.413.413 0 0 1 .06-.221.383.383 0 0 1 .482-.16c.081.032.142.1.167.183.013.043.02.087.02.131v1.484h1.01v-1.652a1.205 1.205 0 0 0-.06-.394.822.822 0 0 0-.572-.558l.001.002zm5.9501 1.25a1.076 1.076 0 0 0-.42-.231l-.106-.03a4.543 4.543 0 0 0-.58-.122 1.8502 1.8502 0 0 1-.156-.03.3.3 0 0 1-.068-.024.117.117 0 0 1-.059-.152v-.008a.222.222 0 0 1 .131-.105.491.491 0 0 1 .316 0c.107.03.178.133.17.244h.902a.9.9 0 0 0-.055-.31.551.551 0 0 0-.184-.255.848.848 0 0 0-.242-.138 1.196 1.196 0 0 0-.262-.073 2.627 2.627 0 0 0-.642-.037 2.033 2.033 0 0 0-.366.054 1.082 1.082 0 0 0-.444.211.693.693 0 0 0-.28.526.72.72 0 0 0 .052.316.675.675 0 0 0 .393.393c.09.036.183.064.278.082l.554.104c.07.01.138.028.205.051.06.018.103.07.113.131a.19.19 0 0 1-.052.176.304.304 0 0 1-.17.086.492.492 0 0 1-.262-.025.368.368 0 0 1-.105-.061.263.263 0 0 1-.089-.131.41.41 0 0 1-.02-.138h-.932v.055a.773.773 0 0 0 .256.555.99.99 0 0 0 .426.24c.329.098.676.12 1.014.065.16-.023.313-.073.455-.148a.935.935 0 0 0 .176-.118.778.778 0 0 0 .246-.852.632.632 0 0 0-.193-.302v.001zm6.1982-2.226h.957v.676h-.957v-.676zm0 1.024h.957v2.558h-.957v-2.558zm2.872 1.505a1.1666 1.1666 0 0 1-.018.154.393.393 0 0 1-.096.199.299.299 0 0 1-.185.098.364.364 0 0 1-.316-.1.53.53 0 0 1-.152-.26 1.168 1.168 0 0 1 .012-.703.41.41 0 0 1 .178-.232.36.36 0 0 1 .407.017c.092.068.153.17.17.284h.874a.78.78 0 0 0-.09-.417 1.12 1.12 0 0 0-.724-.564 1.711 1.711 0 0 0-.806-.02c-.48.094-.863.456-.984.93a1.383 1.383 0 0 0-.031.621c.023.149.075.291.152.42.095.171.227.32.385.435.189.148.416.239.655.262.18.02.36.012.538-.025a1.24 1.24 0 0 0 .685-.38.928.928 0 0 0 .263-.719h-.917zm-3.704-1.553a1.038 1.038 0 0 0-.755.054 1.656 1.656 0 0 0-.393.262l-.031-.27h-.9181v2.559h.984v-1.428a.425.425 0 0 1 .06-.221.393.393 0 0 1 .484-.16c.08.033.14.1.164.183a.453.453 0 0 1 .021.14v1.483h1.016v-1.652a1.2 1.2 0 0 0-.06-.394.822.822 0 0 0-.572-.558v.002zm-7.8792 1.8c0-.278-.01-.511-.012-.786 0-.142-.018-.283-.054-.42a.675.675 0 0 0-.333-.43 1.056 1.056 0 0 0-.315-.118 2.637 2.637 0 0 0-1.067-.02c-.1.015-.196.043-.289.082a.766.766 0 0 0-.456.5.617.617 0 0 0-.025.261.149.149 0 0 0 .015.048l.86.02a.384.384 0 0 1 .024-.153.262.262 0 0 1 .163-.162.49.49 0 0 1 .342 0 .23.23 0 0 1 .156.157.15.15 0 0 1-.021.13.213.213 0 0 1-.098.078l-.075.024c-.113.03-.228.055-.343.075a6.3141 6.3141 0 0 0-.274.05 3.2042 3.2042 0 0 0-.366.095.762.762 0 0 0-.296.173.617.617 0 0 0-.21.393.753.753 0 0 0 .012.299c.056.26.252.469.508.54.277.084.575.068.842-.043a.808.808 0 0 0 .335-.245c.017.058.036.116.057.173.01.032.029.062.052.087h.948a.418.418 0 0 1-.054-.207 13.4697 13.4697 0 0 1-.026-.601zm-.97-.084a.435.435 0 0 1-.07.189.371.371 0 0 1-.167.145.656.656 0 0 1-.205.054.466.466 0 0 1-.175-.015.248.248 0 0 1-.122-.073.214.214 0 0 1-.055-.105.172.172 0 0 1 .057-.17.344.344 0 0 1 .105-.063 4.83 4.83 0 0 1 .288-.093c.118-.035.233-.079.344-.131.01.087.01.175 0 .262zm5.483-1.72a1.858 1.858 0 0 0-.577 0 1.33 1.33 0 0 0-.747.371 1.21 1.21 0 0 0-.383.798c-.02.185-.003.372.048.551.073.278.239.522.47.693.147.117.32.197.504.235.26.055.527.055.787 0 .184-.038.359-.118.507-.235.23-.17.3961-.415.4681-.693a1.42 1.42 0 0 0 .05-.55 1.208 1.208 0 0 0-.383-.799 1.33 1.33 0 0 0-.743-.37l-.001-.001zm.06 1.814a.388.388 0 0 1-.513.193.371.371 0 0 1-.194-.193.903.903 0 0 1-.072-.246 1.42 1.42 0 0 1 .012-.515.657.657 0 0 1 .1-.247.374.374 0 0 1 .622 0 .627.627 0 0 1 .105.247c.034.17.038.344.01.515a.885.885 0 0 1-.07.246z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPanasonicIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '0049AB');
  }
}
