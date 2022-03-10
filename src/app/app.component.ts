import { Component, ChangeDetectionStrategy } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { mountRootParcel } from 'single-spa';
import { GoBackBtnProps } from '@mf-shared-library/shared-props';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'africa';
  // Works great with single-spa
  africanWildDog = assetUrl('african-wild-dog.jpeg');
  colobusMonkey = assetUrl('colobus-monkey.jpeg');
  dwarfMongoose = assetUrl('dwarf-mongoose.jpeg');

  parcelProps: GoBackBtnProps = {
    url: '/continents',
    btnText: 'Back to continents',
  };

  async config() {
    //@ts-ignore
    return window.System.import('@joaoc/mf-shared').then(
      (module: any) => module.goBackBtnParcel
    );
  }

  mountRootParcel = mountRootParcel;
}
