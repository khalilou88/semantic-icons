import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-airserbia-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Air Serbia</title>
      <path
        d="m16.667 3.754-1.148.002-.455.169s-.25.062-.416.482l-.343 1.079s-.094.358-.118.903c-.018.546-.008.019-.008.019s-.026.81-.119 1.055l-.184.643c-.27.634-.546.945-.551.955l-1.032 1.193v.005l-.292.327-.287-.327.006-.006-.639-.725-.086-.104h-.004l-.32-.362c-.003-.01-.294-.343-.566-1.01l-.172-.588c-.093-.245-.12-1.055-.12-1.055s.011.527-.01-.019a4.555 4.555 0 0 0-.113-.903l-.346-1.079c-.169-.42-.415-.483-.415-.483l-.453-.168-1.15-.002-.184.268c-.205.193-.258.116-.531.158-.217.03-.294.043-.473.181-.231.188-.264.434-.264.434v.465l.014.319.262-.325c.443-.018 1.06.252 1.06.252l-.074.182c-.064.144-.063.268-.063.268s-.032.526-.095.84c-.018.092-.03.245-.085.398-.091.268-.564.793-.67.913l-.594.638c-.454-.366-1.24-.853-2.244-.891C2.312 7.81 1.275 8.27.3 9.223L0 9.521l.225.352c.034.055.833 1.292 2.274 1.57.93.181 1.946-.102 2.908-.791l-.703-.793c-.713.515-1.36.686-1.998.565-.598-.114-1.057-.487-1.325-.773.649-.526 1.303-.786 1.95-.76 1.137.041 1.942.932 1.947.94l1.685 1.948.69-.797-1.292-1.49 1.512-1.881.614-.768c.144.761.834 2.071 1.128 2.527l-1.677 1.948-.67.78-.008.01-.006.01-.713.826c-.373.394-1.675 1.679-3.203 2.497 0 0 .48.329 1.107.323.377-.008.813-.14 1.225-.533.17-.158.42-.385.667-.615 0 0-.114.274.155.781.212.386.573.62 1.073.636.777.03 1.333-.375 1.718-.845l-.554-.61s-.5.714-1.114.278c-.225-.212-.206-.57-.206-.57s-.01-.12.109-.373c.417-.705 1.56-2.19 2.236-3.058l.521-.66.747.858.002-.004.291.338-.002.006.02.018-1.303 1.61.59.667L12 12.182v.005l.004-.005 1.685 1.871.7.787.247.26.175.192c.382.42.914.767 1.627.741.5-.017.864-.25 1.075-.636.271-.506.156-.781.156-.781.247.23.493.457.665.615 1.107 1.05 2.331.21 2.331.21-1.523-.818-2.825-2.103-3.195-2.496l-.408-.47-.852.95c.41.565.394.861.394.861s.011.36-.212.571c-.607.441-1.149-.318-1.149-.318l-1.692-2.052-.005-.012-.873-1.07.017-.017.644-.742h-.004l.39-.45.173.214 1.105 1.492.778-.919-1.267-1.475-.001.003-.122-.14c.296-.457.983-1.767 1.126-2.528l.617.768 1.51 1.881-.31.358-1.268 1.468-1.1 1.26-.325.384.688.794.54-.632v.003l.064-.068.82-.947.48-.556 1.495-1.726c.008-.007.805-.898 1.947-.939.652-.026 1.302.234 1.949.76-.269.286-.724.659-1.322.773-.64.12-1.294-.056-2.008-.566l-.686.788c.962.69 1.966.978 2.902.798 1.435-.28 2.233-1.516 2.269-1.57L24 9.52l-.297-.298c-.978-.952-2.017-1.413-3.088-1.368l.001-.001c-.851.032-1.542.384-2.012.716l-.052.037c-.004.001-.012.012-.013.012-.062.046-.124.085-.173.126l-.743-.8c-.176-.213-.453-.557-.521-.75-.057-.154-.071-.307-.084-.399a8.035 8.035 0 0 1-.099-.84s0-.124-.058-.268l-.073-.182s.618-.27 1.054-.252l.27.325.004-.319v-.465s-.028-.247-.265-.434c-.178-.138-.256-.15-.47-.18-.275-.042-.32.034-.525-.159zm-7.648 8.8-.633.84.718.836.84.992 1.074 1.239.692-.794-1.37-1.573-.684-.798zm4.374 1.841-.966 1.12-1.115 1.284c-1.118 1.04-1.204 1.43-1.204 1.43-.467 1.174.15 2.017.15 2.017.089-.733.713-1.444.935-1.72l.433-.496v-.002l1.534-1.775.91-1.046zm-.41 2.709-.706.83.08.094-.002.002.43.496c.225.276.845.987.937 1.72 0 0 .613-.843.15-2.018 0 0-.07-.313-.888-1.124z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAirserbiaIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
