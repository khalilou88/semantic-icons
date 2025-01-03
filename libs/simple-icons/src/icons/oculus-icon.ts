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
  selector: 'svg[si-oculus-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Oculus</title>
    <svg:path
      d="M18.135 13.949c-.319.221-.675.355-1.057.416s-.761.049-1.142.049H8.063c-.382 0-.762.014-1.145-.049-.381-.063-.734-.195-1.057-.416-.643-.451-1.027-1.17-1.027-1.951 0-.796.387-1.515 1.029-1.95.314-.225.674-.359 1.049-.42s.75-.061 1.141-.061h7.875c.375 0 .765-.014 1.14.046s.735.194 1.051.405c.645.434 1.02 1.17 1.02 1.949 0 .78-.391 1.5-1.035 1.95l.031.032zm3.174-7.555c-.845-.678-1.812-1.146-2.865-1.398-.6-.146-1.203-.211-1.822-.23-.449-.015-.899-.01-1.364-.01H8.76c-.457 0-.915-.005-1.372.01-.618.021-1.222.083-1.825.23-1.051.254-2.025.723-2.865 1.4C.99 7.761 0 9.82 0 12c0 2.182.99 4.241 2.689 5.606.846.678 1.815 1.146 2.865 1.4.603.146 1.206.211 1.823.229.45.016.9.012 1.365.012h6.496c.449 0 .914.004 1.364-.012.615-.018 1.215-.082 1.814-.229 1.05-.256 2.011-.723 2.866-1.402C23.01 16.24 24 14.18 24 12c0-2.181-.99-4.241-2.691-5.606z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOculusIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}