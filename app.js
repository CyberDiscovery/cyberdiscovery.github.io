import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCSnackbar} from '@material/snackbar';
import {MDCRipple} from '@material/ripple';
import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const topAppBarMenu = new MDCMenu(document.querySelector('#additional-menu'));
const discordURL = "https://discord.cyberdiscoverycommunity.uk";
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
const selector = '.mdc-button, .mdc-icon-button, .mdc-list-item';
const copyLinkBtn = document.querySelector('#copy-site-link');
const discordInvBtn = document.querySelector('#join-server-btn');
const additionalMenuBtn = document.querySelector('#additional-menu-btn');
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawerElement = document.querySelector('.mdc-drawer');
const mainContentEl = document.querySelector('.main-content');
const additionalMenuSurface = new MDCMenuSurface(document.querySelector('#additional-menu'));
const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;

  const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
  topAppBar.setScrollTarget(mainContentEl);
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  listEl.addEventListener('click', (event) => {
    drawer.open = false;
  });

  return drawer;
}

const initPermanentDrawer = () => {
  drawerElement.classList.remove("mdc-drawer--modal");
  const list = new MDCList(listEl);
  list.wrapFocus = true;
  return list;
}

let drawer = window.matchMedia("(max-width: 1200px)").matches ?
    initModalDrawer() : initPermanentDrawer();

const resizeHandler = () => {
  if (window.matchMedia("(max-width: 1200px)").matches && drawer instanceof MDCList) {
    drawer.destroy();
    drawer = initModalDrawer();
  } else if (window.matchMedia("(min-width: 1200px)").matches && drawer instanceof MDCDrawer) {
    drawer.destroy();
    drawer = initPermanentDrawer();
  }
}
window.addEventListener('resize', resizeHandler);
topAppBar.setScrollTarget(document.getElementById('main-content'));

function goToPageTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {}

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
  }, function(err) {});
}

function copySiteLinkToClipboard(){
  copyTextToClipboard(window.location.href);
  snackbar.timeoutMs = 4000;
  snackbar.labelText = "Site link copied for sharing!";
  snackbar.open();
}

function openLinkHandler(siteLink){
  const newWindow = window.open(siteLink, '_blank');
  newWindow.opener = null;
  newWindow.location = siteLink;
  newWindow.focus();
}

copyLinkBtn.addEventListener('click', function(event) {
  copySiteLinkToClipboard();
});

function displayNotYetImplemented(){
  snackbar.timeoutMs = 4000;
  snackbar.labelText = "Feature hasn't been implmented yet!";
  snackbar.open();
}

const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

discordInvBtn.addEventListener('click', function(event) {
  openLinkHandler(discordURL);
});
additionalMenuBtn.addEventListener('click', function(event) {topAppBarMenu.open = !topAppBarMenu.open;});
document.querySelector("#switchThemeMenu").addEventListener('click', function(event) {displayNotYetImplemented();});
document.querySelector("#copySiteLnkMenu").addEventListener('click', function(event) {copySiteLinkToClipboard();});
document.querySelector("#discordInvMenu").addEventListener('click', function(event) {openLinkHandler(discordURL);});
