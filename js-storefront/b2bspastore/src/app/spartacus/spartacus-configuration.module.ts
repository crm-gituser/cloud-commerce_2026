import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  provideConfigFactory,
  SiteContextConfig,
} from '@spartacus/core';
import { defaultB2bOccConfig } from '@spartacus/setup';
import {
  defaultCmsContentProviders,
  layoutConfigFactory,
  mediaConfig,
} from '@spartacus/storefront';
import { AuthConfig, OAuthFlow } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfigFactory(layoutConfigFactory),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          //baseUrl: 'OCC_BACKEND_BASE_URL_VALUE',
          prefix: '/occ/v2/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '221121.9',
      },
    }),
    provideConfig(defaultB2bOccConfig),


    provideConfig(<AuthConfig>{
      authentication: {
        OAuthFlow: OAuthFlow.ResourceOwnerPasswordFlow,
      },
    }),

  ],
})
export class SpartacusConfigurationModule {}
