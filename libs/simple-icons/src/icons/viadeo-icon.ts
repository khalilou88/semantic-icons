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
  selector: 'svg[si-viadeo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Viadeo</svg:title>
    <svg:path
      d="M16.2888 13.8979c.361.884.5428 1.8423.5428 2.875 0 1.9315-.6593 3.6185-1.977 5.0626C13.537 23.2796 11.8417 24 9.7697 24c-2.0819 0-3.778-.7204-5.0973-2.1645-1.3177-1.4441-1.9786-3.1311-1.9786-5.0626 0-1.9142.6213-3.5747 1.8687-4.9791C5.9381 10.2439 7.6688 9.469 9.7673 9.469c.884 0 1.7018.1388 2.4536.4131-.2453.4808-.4659 1.0698-.5262 1.7035-.599-.2503-1.2425-.3759-1.9332-.3759-1.454 0-2.7015.5453-3.7416 1.6382-1.0409 1.0921-1.5614 2.4132-1.5614 3.963 0 .9996.2396 1.9315.7105 2.7948.4792.8642 1.1153 1.53 1.9249 2.0009.8096.4701 1.6936.7047 2.6602.7047.9666 0 1.8588-.2338 2.6602-.7047.8096-.47 1.454-1.1367 1.9249-2.0009.8345-1.4971.9618-3.465.2974-5.0386.4708-.0991 1.0491-.2949 1.6522-.6692zM20.3873.4285l-.0126-.0148c-.7574 1.6151-2.1586 1.9175-2.1586 1.9175-1.4013.3613-1.8924.8997-1.8924.8997-1.4013 1.416-.295 3.1344-.295 3.1344 3.0311-.6933 4.1374-3.186 4.1374-3.186-.1327 1.6815-3.7317 3.658-3.7317 3.658 1.1947 1.1726 2.3305 1.0325 3.0828.5826.9956-.59 1.475-1.8953 1.475-1.8953.966-2.8984-.6049-5.0961-.6049-5.0961zM7.0301 20.4729s.4278.0738.9123.0516c0 0 10.3286-7.021 7.6094-14.3148l-.0405-.118v.0074c.0339.4867-4.483 13.0613-8.4812 14.3738zm8.3828-15.1895C15.0486 1.4101 12.9327 0 12.9327 0c1.4897 2.5134 2.2995 4.7694 2.4816 5.3055 0-.0132-.0014-.0221-.0014-.0221z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViadeoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
