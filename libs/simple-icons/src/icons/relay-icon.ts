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
  selector: 'svg[si-relay-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Relay</title>
    <svg:path
      d="M2.26428 4.93674C1.01354 4.93674 0 5.95018 0 7.20093c0 1.25074 1.01363 2.26428 2.26437 2.26428 1.05365 0 1.9393-.71975 2.1919-1.69462h10.3387c.98764 0 1.79128.80368 1.79128 1.79146 0 .98779-.80359 1.79156-1.79128 1.79156h-5.7309c-1.67246 0-3.03319 1.36067-3.03319 3.03318 0 1.67252 1.36063 3.03301 3.0332 3.03301h10.49429c.26987.9487 1.14197 1.64346 2.17735 1.64346 1.25074 0 2.26428-1.01344 2.26428-2.26419 0-1.25074-1.01354-2.26428-2.26428-2.26428-1.0353 0-1.9074.69469-2.17735 1.64328H9.06397c-.98777 0-1.79145-.80359-1.79145-1.79128 0-.98797.80358-1.79164 1.79146-1.79164h5.7309c1.67251 0 3.033-1.36063 3.033-3.0331 0-1.67246-1.36044-3.03319-3.033-3.03319H4.42718c-.2863-.92243-1.1464-1.59212-2.1629-1.59212Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRelayIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
