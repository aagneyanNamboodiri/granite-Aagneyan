import "../stylesheets/application.scss";

require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");

var componentRequireContext = require.context("src", true);
var ReactRailsUJS = require("react_ujs");

// eslint-disable-next-line react-hooks/rules-of-hooks
ReactRailsUJS.useContext(componentRequireContext);
