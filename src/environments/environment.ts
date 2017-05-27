// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyA7qDA9EGMAX0d5QwfS9R8YhDrhhLi6bG0',
    authDomain: 'ng-deck.firebaseapp.com',
    databaseURL: 'https://ng-deck.firebaseio.com',
    projectId: 'ng-deck',
    storageBucket: 'ng-deck.appspot.com',
    messagingSenderId: '438051721232'
  }
};
