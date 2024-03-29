'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _sv = require('react-intl/locale-data/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_sv2.default);

var messages = {
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.application.tabs.more": "Mer",
  "Terra.application.utility.back": "Tillbaka",
  "Terra.application.utility.button": "Knappen Hjälpmedel",
  "Terra.application.utility.close": "Stäng",
  "Terra.application.utility.menu": "Menyn Hjälpmedel",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Gå till Innehåll",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Växla meny",
  "Terra.applicationLayout.utilityDefaults.about": "Om",
  "Terra.applicationLayout.utilityDefaults.appearance": "Utseende",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Byt bild",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Kom igång",
  "Terra.applicationLayout.utilityDefaults.help": "Hjälp",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logga ut",
  "Terra.applicationLayout.utilityDefaults.menu": "Meny",
  "Terra.applicationLayout.utilityDefaults.security": "Säkerhet",
  "Terra.applicationLayout.utilityDefaults.settings": "Inställningar",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Användningsvillkor",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Användaruppgifter",
  "Terra.devSiteRoutingMenu.filter": "Filtrera",
  "Terra.dialog.close": "Stäng",
  "Terra.form.field.optional": "(valfri)",
  "Terra.notification.dialog.alert": "Avisering",
  "Terra.notification.dialog.error": "Fel",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Klar",
  "Terra.notification.dialog.warning": "Varning",
  "Terra.Overlay.loading": "Läser in ...",
  "Terra.popup.header.close": "Stäng",
  "Terra.searchField.search": "Sök",
  "Terra.searchField.submit-search": "Sök"
};
var areTranslationsLoaded = true;
var locale = 'sv';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
