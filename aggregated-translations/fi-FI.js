'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fi = require('react-intl/locale-data/fi');

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  "Terra.actionHeader.back": "Takaisin",
  "Terra.actionHeader.close": "Kiinni",
  "Terra.actionHeader.maximize": "Maksimoida",
  "Terra.actionHeader.minimize": "Minimoida",
  "Terra.actionHeader.next": "Seuraava",
  "Terra.actionHeader.previous": "Edellinen",
  "Terra.ajax.error": "Tämän sisällön lataaminen epäonnistui.",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "skiiippp~~~",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.devSiteRoutingMenu.filter": "Suodattaa",
  "Terra.dialog.close": "Kiinni",
  "Terra.form.field.optional": "(valinnainen)",
  "Terra.notification.dialog.alert": "Benachrichtigung~n9KZ Pi",
  "Terra.notification.dialog.error": "Erreur~n9KZ Pi",
  "Terra.notification.dialog.info": "Informações~n9KZ Pi",
  "Terra.notification.dialog.success": "Erfolgreich~n9KZ Pi",
  "Terra.notification.dialog.warning": "Avertissement~n9KZ Pi.",
  "Terra.Overlay.loading": "Lastaus...",
  "Terra.popup.header.close": "Kiinni",
  "Terra.searchField.search": "Haku",
  "Terra.searchField.submit-search": "Lähetä Haku"
};
var areTranslationsLoaded = true;
var locale = 'fi-FI';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
