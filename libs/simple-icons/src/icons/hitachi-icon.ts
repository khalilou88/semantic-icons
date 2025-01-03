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
  selector: 'svg[si-hitachi-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Hitachi</title>
    <svg:path
      d="M17.787 11.41h-1.026a.852.852 0 00-.052-.284.714.714 0 00-.459-.427 1.417 1.417 0 00-.913.019.89.89 0 00-.535.542 2.318 2.318 0 00-.04 1.425.88.88 0 00.535.584 1.492 1.492 0 00.977.027.705.705 0 00.428-.384.976.976 0 00.08-.396h1.031a2.198 2.198 0 01-.049.351c-.09.365-.346.672-.684.814a3.254 3.254 0 01-2.251.104c-.477-.15-.89-.493-1.054-.96a2.375 2.375 0 01-.133-.788c0-.388.068-.764.254-1.077.192-.321.486-.569.842-.701a3.062 3.062 0 012.318.063 1.2 1.2 0 01.698.853c.017.076.028.156.033.235zm-3.979 2.436H12.72l-.32-.793h-1.834c-.001.001-.315.794-.319.793h-1.09l1.727-3.693c0 .002 1.199 0 1.199 0l1.725 3.693zm5.483.001h-.977s.005-3.693 0-3.693h.977v1.477h1.976c0 .005-.002-1.478 0-1.477h.979s.003 3.686 0 3.693h-.979v-1.626c0 .005-1.976 0-1.976 0 .002.007 0 1.624 0 1.626zm-18.312 0H0s.005-3.693 0-3.693h.979s-.002 1.487 0 1.477h1.976c0 .005-.004-1.478 0-1.477h.978s.004 3.686 0 3.693h-.978v-1.626c0 .005-1.976 0-1.976 0 0 .007-.002 1.625 0 1.626zm7.531-.001h-.977v-3.065H6.036s.002-.626 0-.627c.002.001 3.971 0 3.971 0v.627H8.51v3.065zm-3.801-3.692h.977v3.692h-.977v-3.692zm18.312 0H24v3.692h-.979v-3.692zm-11.537.627l-.681 1.68h1.361l-.68-1.68z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHitachiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
