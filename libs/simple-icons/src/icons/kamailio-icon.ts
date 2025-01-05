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
  selector: 'svg[si-kamailio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kamailio</svg:title>
    <svg:path
      d="m3.647 13.643 1.113-2.62m-3.277.747 1.366-1.413H2.14L.577 12.009v-1.652H0v3.286h.577v-.953l.512-.526 1.122 1.479h.7L1.482 11.77zm11.06-.746.567 1.314h-.793l-.217.511h1.221l.334.794h.61l-1.446-3.31h-.535l-1.446 3.31h.592c.373-.88.736-1.741 1.112-2.62zm-7.783 0 .568 1.314h-.794l-.217.511H5.54l.333.794h.61l-1.445-3.31H4.5l-1.445 3.31h.591M24 11.995a1.718 1.718 0 0 0-.479-1.197 1.652 1.652 0 0 0-.54-.364 1.757 1.757 0 0 0-.694-.133 1.717 1.717 0 0 0-1.24.505 1.65 1.65 0 0 0-.356.541 1.719 1.719 0 0 0-.127.658 1.719 1.719 0 0 0 .479 1.196c.15.154.33.275.54.364.21.09.44.134.694.134a1.717 1.717 0 0 0 1.24-.505 1.65 1.65 0 0 0 .356-.542c.085-.206.127-.425.127-.657zm-.606.01c0 .16-.027.31-.082.453-.054.142-.13.265-.227.37a1.063 1.063 0 0 1-.798.34 1.076 1.076 0 0 1-.805-.347 1.151 1.151 0 0 1-.23-.373 1.25 1.25 0 0 1-.082-.453c0-.16.027-.31.082-.453.054-.142.13-.266.227-.37a1.063 1.063 0 0 1 .798-.34 1.075 1.075 0 0 1 .805.346c.099.107.176.231.23.374.055.142.082.293.082.453zm-4.14-1.648v3.286h.578v-3.286h-.578zm-2.938 3.286h2.305v-.526h-1.728v-2.76h-.577v3.286zm-1.455-3.286v3.286h.577v-3.286h-.577zm-5.163.93v2.356h.577v-3.286H9.66l-1 1.554-1-1.554h-.614v3.286h.568v-2.347l1.028 1.54h.018l1.038-1.55zm-.499-1.74c3.162-1.018 6.03-1.59 8.606-1.717 1.125-.056 2.34-.077 3.452.12.397.07.782.18 1.137.356.283.14.507.31.671.51.222-.77.045-1.333-.53-1.688-.54-.334-1.272-.413-1.889-.464-2.726-.224-6.542.737-11.447 2.882zm5.637 5.235c-3.192.918-6.077 1.4-8.656 1.447-1.126.02-2.341.003-3.446-.228a4.19 4.19 0 0 1-1.125-.391 2.014 2.014 0 0 1-.655-.53c-.246.763-.086 1.33.477 1.703.53.35 1.26.452 1.874.522 2.718.31 6.562-.532 11.53-2.523z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKamailioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#506365');
  }
}
