import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutAboutSeccion extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_seccions';
  info: {
    displayName: 'about-seccion';
  };
  attributes: {
    description: Schema.Attribute.Text;
    mainImageSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sideImageSrc: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBackgroundSeccion extends Struct.ComponentSchema {
  collectionName: 'components_layout_background_seccions';
  info: {
    displayName: 'background-seccion';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    body: Schema.Attribute.Text;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    subtitle: Schema.Attribute.String;
    textAlign: Schema.Attribute.Enumeration<['center', 'left', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.navlink', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    socialLinks: Schema.Attribute.Component<'shared.social-media-links', false>;
  };
}

export interface LayoutHeroSeccion extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_seccions';
  info: {
    description: '';
    displayName: 'heroSeccion';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['black', 'white']> &
      Schema.Attribute.DefaultTo<'black'>;
    body: Schema.Attribute.Text;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    imageSrc: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageWidth: Schema.Attribute.Enumeration<['a20%', 'a30%', 'a40%', 'a50%']>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutMap extends Struct.ComponentSchema {
  collectionName: 'components_layout_maps';
  info: {
    displayName: 'map';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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

export interface LayoutSpacer extends Struct.ComponentSchema {
  collectionName: 'components_layout_spacers';
  info: {
    displayName: 'spacer';
  };
  attributes: {
    height: Schema.Attribute.String;
  };
}

export interface LayoutTextSeccion extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_seccions';
  info: {
    displayName: 'text-seccion';
  };
  attributes: {
    body: Schema.Attribute.Text;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
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
    description: '';
    displayName: 'navlink';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Schema.Attribute.String;
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

export interface SharedSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    description: '';
    displayName: 'socialMediaLinks';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.navlink', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.about-seccion': LayoutAboutSeccion;
      'layout.background-seccion': LayoutBackgroundSeccion;
      'layout.footer': LayoutFooter;
      'layout.hero-seccion': LayoutHeroSeccion;
      'layout.map': LayoutMap;
      'layout.seccion-espacios': LayoutSeccionEspacios;
      'layout.spacer': LayoutSpacer;
      'layout.text-seccion': LayoutTextSeccion;
      'layout.top-nav': LayoutTopNav;
      'shared.button': SharedButton;
      'shared.logo-link': SharedLogoLink;
      'shared.navlink': SharedNavlink;
      'shared.seo': SharedSeo;
      'shared.social-media-links': SharedSocialMediaLinks;
    }
  }
}
