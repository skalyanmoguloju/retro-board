'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.actionHeader.back": "Atrás",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimimzar",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.application.tabs.more": "Más",
  "Terra.application.utility.back": "Atrás",
  "Terra.application.utility.button": "Botón de utilidades",
  "Terra.application.utility.close": "Cerrar",
  "Terra.application.utility.menu": "Menú de utilidades",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Saltar al contenido",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menú de alternancia",
  "Terra.applicationLayout.utilityDefaults.about": "Acerca de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apariencia",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Cambiar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Introducción",
  "Terra.applicationLayout.utilityDefaults.help": "Ayuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Cerrar sesión",
  "Terra.applicationLayout.utilityDefaults.menu": "Menú",
  "Terra.applicationLayout.utilityDefaults.security": "Seguridad",
  "Terra.applicationLayout.utilityDefaults.settings": "Configuración",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Condiciones de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Información de usuario",
  "Terra.devSiteRoutingMenu.filter": "Filtrar",
  "Terra.dialog.close": "Cerrar",
  "Terra.form.field.optional": "(opcional)",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Información",
  "Terra.notification.dialog.success": "Éxito",
  "Terra.notification.dialog.warning": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.popup.header.close": "Cerrar",
  "Terra.searchField.search": "Buscar",
  "Terra.searchField.submit-search": "Enviar búsqueda"
};
var areTranslationsLoaded = true;
var locale = 'es-ES';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
