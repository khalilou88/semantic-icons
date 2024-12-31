import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-caixabank-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CaixaBank</title>
      <path
        d="M4.938 16c.183 0 .315.13.487.1.239.09.212.383.462.455.19.384.312.797.419 1.21-.077.244.129.384.056.608l.072.04a1.8 1.8 0 0 1-.114.716c.038.426-.17.78-.353 1.14-.13.083-.19.314-.372.273-.323.102-.353.584-.748.524-.25.189-.596.083-.895.09-.176-.09-.419-.067-.536-.22a3.3 3.3 0 0 1-.84-.57c-.102-.22-.333-.318-.363-.57.09-.302-.1-.576-.02-.88l-.06-.504.19-.87c.326-.171.235-.561.558-.683.2-.467.683-.566 1.059-.797.14-.03.311.05.422-.08.205-.03.394.179.577.018m1.496-3.682c.202.14.19.422.372.566l.092.622-.456.669c-.573.303-1.431.433-1.967-.054-.304-.269-.383-.664-.304-1.059l.213-.573c.122-.084.28-.103.365-.243.28-.182.645-.14.967-.213.244.08.607-.05.718.282zm14.967-9.766c-.084 1.424-1.253 2.38-1.868 3.584-.266.714-.89 1.14-1.33 1.784-.405.418-.796.87-1.134 1.334.06.333.418.424.618.667.456.27.502.786.896 1.102.232 0 .232.341.487.3.535.577.967 1.173 1.412 1.795a1.3 1.3 0 0 0 .37.607c.355.514.647 1.064 1.01 1.584.055.585.549.979.7 1.526.22.292.312.635.513.926.316.684.524 1.406.9 2.062.069.152-.023.3-.103.41-.14.114-.25-.091-.414-.06a14 14 0 0 1-2.38-1.2c-.79-.638-1.656-1.09-2.43-1.758-.304-.076-.428-.433-.71-.574-.747-.462-1.344-1.131-2.1-1.563-.341-.266-.683-.518-1.028-.79-.266-.027-.354-.331-.607-.422-.563-.342-1.08-.82-1.656-1.14-.05.077 0 .203-.05.282-.383.373-.28.949-.554 1.364-.01.595-.425 1.028-.596 1.556-.475.846-.888 1.712-1.382 2.55-.657.87-1.01 1.919-1.937 2.614-.205.253-.436.383-.686.546-.114-.03-.274-.012-.304-.152-.114-.212.03-.532-.121-.725.132-.297.05-.627.113-.95l-.053-.14c.01-.444.23-.82.14-1.272a3 3 0 0 0 .206-.91 5 5 0 0 0 .303-1.212 1.5 1.5 0 0 0 .153-.836c.098-.265.117-.576.39-.77.039-.17 0-.342.03-.524.27-.827.608-1.625.817-2.471 0-.061-.06-.08-.103-.092-.596-.03-1.15.092-1.705-.06a14 14 0 0 1-2.695-.311c-.348-.07-.774-.027-1.097-.23-.209.009-.452.05-.653-.063-.418-.2-.919-.167-1.329-.391-.315.038-.54-.16-.82-.19-.274.019-.425-.212-.615-.364v-.092c.5-.683 1.31-.876 2.038-1.139.714-.224 1.511-.243 2.26-.395.475-.08.987.05 1.465-.03.858.02 1.682.16 2.532.182.282.038.544.172.828.16l-.01-.122-.8-1.09c-.302-.705-.857-1.302-1.046-2.05-.182-.219-.012-.553-.152-.796-.011-.11.075-.19.13-.282.17-.068.363.05.535-.06.515.12.986.303 1.503.405.53.21 1.078.422 1.556.776.593.425 1.31.698 1.773 1.351.125.114.316.133.475.091.14-.019.17-.19.303-.243.627-.39 1.334-.615 1.948-1.048.255-.25.657-.28.81-.627.189-.09.36-.212.565-.265.353-.247.707-.52 1.09-.72a1.1 1.1 0 0 0 .515-.244c.627-.342 1.284-.627 1.88-1.02.13-.355.524-.27.805-.355.14.034.334.012.395.19z"
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
export class SvgCaixabankIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
