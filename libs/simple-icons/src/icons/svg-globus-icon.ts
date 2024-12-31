import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-globus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Globus</title>
      <path
        d="M11.9977 4.3904c-3.8248 0-7.1506 1.6949-8.7866 4.1598-.39.022-.78.041-1.1699.067-.582.041-1.32.56-1.427 1.2399l-.182 1.133c-.18 1.1249-.327 2.0109-.4259 3.1598-.033.403.065.78.262 1.01.263.312.781.386.986.41.7289.067 1.4489.126 2.1638.18 1.698 2.3018 4.9058 3.8597 8.5796 3.8597 3.6748 0 6.8837-1.5599 8.5816-3.8618.442-.034.88-.064 1.326-.104.624-.057 1.1989-.582 1.3379-1.222.18-.8209.24-1.1399.305-1.5498.025-.132.048-.282.072-.454 0-.025.017-.114.033-.229.041-.246.1-.64.149-.92l.18-1.207a1.091 1.091 0 0 0-.27-.9349c-.213-.246-.584-.419-.953-.443a159.7123 159.7123 0 0 0-1.961-.12c-1.6298-2.4728-4.9617-4.1727-8.7995-4.1727Zm0 .329c3.5938 0 6.7257 1.5479 8.3276 3.8218l-.428-.02c-.773-.98-1.8579-1.807-3.1558-2.398-.336.09-.73.173-1.148.238a13.5993 13.5993 0 0 1 1.101 2.034 50.9275 50.9275 0 0 0-.556-.014 14.0593 14.0593 0 0 0-1.096-1.945c-.8289.106-1.7728.163-2.7578.18v.294h-.433c-.02 0-.04.002-.059.004v-.299a24.8788 24.8788 0 0 1-2.8318-.172 14.0733 14.0733 0 0 0-1.09 1.932l-.28.006h-.106l.007-.108a1.5 1.5 0 0 0-.01-.255 13.9993 13.9993 0 0 1 .93-1.649 11.3495 11.3495 0 0 1-1.173-.238c-1.2829.59-2.3538 1.406-3.1198 2.373-.145.007-.29.012-.435.02 1.606-2.265 4.7298-3.8048 8.3136-3.8048Zm-.213.418c-.686.009-1.357.084-2.0029.207a11.6894 11.6894 0 0 0-.508.6479c.771.082 1.625.13 2.511.139zm.5 0v.9859a24.7418 24.7418 0 0 0 2.4399-.14c-.28-.378-.477-.608-.51-.649a12.1924 12.1924 0 0 0-1.9299-.197Zm-3.2648.37c-.337.091-.666.1889-.986.3039.213.04.443.074.681.107.107-.156.215-.295.305-.41Zm5.9667 0c.09.116.188.2559.294.4029.23-.033.453-.074.666-.107a9.3076 9.3076 0 0 0-.96-.295Zm-3.0039 1.9198h.476c.189 0 .36.09.475.247a.808.808 0 0 1 .14.607c-.024.205-.057.402-.082.608.501 0 1.01.01 1.5099.017.189 0 .362.09.477.246a.81.81 0 0 1 .138.598c-.213 1.6658-.468 3.3327-.722 5.0077-.066.435-.41.77-.78.779-.722.008-1.4529.01-2.1749.01a.603.603 0 0 1-.485-.246.813.813 0 0 1-.138-.592v-.008c.32-2.421.673-4.8438 1.01-7.2647.057 0 .106 0 .156-.008zm-5.5667.141c.18 0 .33.074.436.213.115.148.156.36.115.582-.402 2.3729-.746 4.7047-.984 7.0196-.214-.008-.42-.025-.633-.033a.65.65 0 0 1-.484-.256.777.777 0 0 1-.157-.575 92.7355 92.7355 0 0 1 1.043-6.9096c.214-.008.418-.025.631-.033.008 0 .017 0 .033-.008zm3.8838 1.329c.197 0 .362.082.477.23a.841.841 0 0 1 .13.607c-.237 1.6828-.475 3.3567-.697 5.0317-.057.435-.394.764-.763.755a97.9953 97.9953 0 0 1-2.1759-.074.658.658 0 0 1-.492-.261.779.779 0 0 1-.157-.575 119.0943 119.0943 0 0 1 .682-4.9018c.066-.427.427-.771.805-.78.73-.016 1.46-.024 2.1909-.032Zm5.5407.05c.213.009.427.008.64.016.198 0 .37.09.485.246.123.156.181.37.148.592a131.9136 131.9136 0 0 1-.625 4.2337l.871-.023c.238-1.437.45-2.8579.631-4.2618.05-.419.394-.737.7719-.72l.69.023a86.6198 86.6198 0 0 1-.846 5.5738c-.074.41-.426.755-.803.771-.73.033-1.4529.066-2.1839.09a.551.551 0 0 1-.476-.228.78.78 0 0 1-.123-.584c.303-1.921.582-3.8398.82-5.7287zm-11.6554.114a.62.62 0 0 1 .492.205.779.779 0 0 1 .123.5839c-.074.41-.14.82-.205 1.222-.304 0-.606.008-.91.008a.4.4 0 0 1-.387-.402c0-.025.033-.213.033-.213-.311.008-.69.01-1.002.017-.057.238-.4749 3.0448-.4919 3.3658.312.016.69.04 1.002.056.115-.64.165-.836.198-1.066-.041-.008-.141-.008-.182-.008-.205-.008-.384-.23-.352-.469.041-.2869.082-.5499.131-.8449H4.07c.213 0 .46.073.402.45-.09.731-.213 1.808-.361 2.6529-.082.435-.28.664-.73.672-.436 0-1.5689-.08-2.2249-.188-.197-.032-.41-.09-.541-.238-.132-.156-.172-.41-.172-.6 0-.508.27-2.6679.582-4.3178.074-.394.55-.738.935-.779a25.7508 25.7508 0 0 1 2.2249-.107Zm16.5482.04h.025c1.256.025 1.814.083 2.1419.124.19.024.402.18.508.312.123.148.181.287.157.4839-.05.353-.107.708-.165 1.069-.295 0-.59-.01-.886-.01a.416.416 0 0 1-.395-.393c0-.024 0-.057.008-.081.008-.042.025-.083.033-.124l-.894-.025c-.025.18-.131.771-.172 1.025h1.502c.189 0 .361.076.476.215.115.1479.164.2789.131.5329-.123 1.035-.237 1.56-.385 2.1019-.098.378-.468.754-.845.795-1.076.123-1.4049.133-2.2009.174a.541.541 0 0 1-.475-.207.68.68 0 0 1-.115-.557 66.0968 66.0968 0 0 0 .213-1.232c.303-.017.606-.025.91-.034.205-.008.379.165.379.387 0 .033 0 .057-.008.09 0 .041-.01.09-.018.13.296-.007.592-.024.887-.04.033-.18.14-.73.182-.984-.296.008-1.43.007-1.43.007-.197.008-.344-.032-.46-.18-.114-.147-.195-.262-.212-.492.099-.9189.31-2.0598.352-2.3878.049-.402.378-.7.756-.7zm-7.9376 1.2399c-.033.247-.484 3.3918-.533 3.7448h.918c.04-.255.486-3.3828.535-3.7438zm-3.3239.009c-.304 0-.616.007-.92.007-.041.255-.4769 3.3428-.5099 3.6958.304.008.609.007.912.015.025-.246.46-3.3568.518-3.7178zm-5.5497 5.4367.454.031c.732.822 1.691 1.521 2.8129 2.043a10.8995 10.8995 0 0 1 1.1909-.264 14.0933 14.0933 0 0 1-.9-1.613l.57.024c.29.575.6 1.09.879 1.508.862-.115 1.8469-.18 2.8648-.188v-1.25l.287.002.205-.002v1.25a23.8268 23.8268 0 0 1 2.7839.188c.279-.42.587-.935.876-1.51.19-.007.38-.01.5689-.018a14.5593 14.5593 0 0 1-.904 1.62c.443.073.838.162 1.183.269 1.137-.522 2.1089-1.226 2.8479-2.057l.443-.033c-1.664 2.093-4.6678 3.4938-8.0857 3.4938-3.4168 0-6.4137-1.4009-8.0776-3.4938zm7.8716 2.033c-.903.008-1.7729.056-2.5528.147.271.3769.485.6239.56.7149.6399.115 1.3039.189 1.9928.197zm.492 0v1.0589a12.0944 12.0944 0 0 0 1.914-.198 13.1164 13.1164 0 0 0 .5499-.705 24.7188 24.7188 0 0 0-2.4639-.156zm-3.6028.22c-.263.042-.5.085-.73.1339a9.1156 9.1156 0 0 0 1.076.336c-.099-.132-.223-.289-.346-.47Zm6.6247.01a24.5778 24.5778 0 0 1-.336.4599c.361-.09.714-.197 1.058-.328-.221-.05-.468-.09-.722-.131z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGlobusIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
