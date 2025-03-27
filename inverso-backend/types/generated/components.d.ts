import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutSeccionEspacios extends Struct.ComponentSchema {
  collectionName: 'components_layout_seccion_espacios';
  info: {
    description: '';
    displayName: 'SeccionEspacios';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    galleryImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageWidth: Schema.Attribute.Enumeration<['a20%', 'a30%', 'a40%', 'a50%']> &
      Schema.Attribute.DefaultTo<'a50%'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    textButton: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'TopNav';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.navlink', true>;
    Logo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    link: Schema.Attribute.String;
    LogoImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedNavlink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navlinks';
  info: {
    displayName: 'navlink';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.seccion-espacios': LayoutSeccionEspacios;
      'layout.top-nav': LayoutTopNav;
      'shared.logo-link': SharedLogoLink;
      'shared.navlink': SharedNavlink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
