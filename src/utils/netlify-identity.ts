import netlifyIdentity from 'netlify-identity-widget';

const APIUrl = import.meta.env.SITE + '.netlify/identity'

netlifyIdentity.init({
  locale: 'en', // defaults to 'en'
  APIUrl,
});

netlifyIdentity.on('init', (user) => {
  if (!user) {
    netlifyIdentity.on('login', () => {
      document.location.href = '/admin/';
    });
  }
});