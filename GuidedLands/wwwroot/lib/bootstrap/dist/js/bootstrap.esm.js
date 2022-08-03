/*!
  * Bootstrap v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
import * as Popper from '@popperjs/core';

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const toType = obj => ***REMOVED***
  if (obj === null || obj === undefined) ***REMOVED***
    return `$***REMOVED***obj***REMOVED***`;
  ***REMOVED***

  return ***REMOVED******REMOVED***.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
***REMOVED***;
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const getUID = prefix => ***REMOVED***
  do ***REMOVED***
    prefix += Math.floor(Math.random() * MAX_UID);
  ***REMOVED*** while (document.getElementById(prefix));

  return prefix;
***REMOVED***;

const getSelector = element => ***REMOVED***
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') ***REMOVED***
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) ***REMOVED***
      return null;
***REMOVED*** // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) ***REMOVED***
      hrefAttr = `#$***REMOVED***hrefAttr.split('#')[1]***REMOVED***`;
***REMOVED***

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  ***REMOVED***

  return selector;
***REMOVED***;

const getSelectorFromElement = element => ***REMOVED***
  const selector = getSelector(element);

  if (selector) ***REMOVED***
    return document.querySelector(selector) ? selector : null;
  ***REMOVED***

  return null;
***REMOVED***;

const getElementFromSelector = element => ***REMOVED***
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
***REMOVED***;

const getTransitionDurationFromElement = element => ***REMOVED***
  if (!element) ***REMOVED***
    return 0;
  ***REMOVED*** // Get transition-duration of the element


  let ***REMOVED***
    transitionDuration,
    transitionDelay
  ***REMOVED*** = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) ***REMOVED***
    return 0;
  ***REMOVED*** // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
***REMOVED***;

const triggerTransitionEnd = element => ***REMOVED***
  element.dispatchEvent(new Event(TRANSITION_END));
***REMOVED***;

const isElement = obj => ***REMOVED***
  if (!obj || typeof obj !== 'object') ***REMOVED***
    return false;
  ***REMOVED***

  if (typeof obj.jquery !== 'undefined') ***REMOVED***
    obj = obj[0];
  ***REMOVED***

  return typeof obj.nodeType !== 'undefined';
***REMOVED***;

const getElement = obj => ***REMOVED***
  if (isElement(obj)) ***REMOVED***
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  ***REMOVED***

  if (typeof obj === 'string' && obj.length > 0) ***REMOVED***
    return document.querySelector(obj);
  ***REMOVED***

  return null;
***REMOVED***;

const typeCheckConfig = (componentName, config, configTypes) => ***REMOVED***
  Object.keys(configTypes).forEach(property => ***REMOVED***
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) ***REMOVED***
      throw new TypeError(`$***REMOVED***componentName.toUpperCase()***REMOVED***: Option "$***REMOVED***property***REMOVED***" provided type "$***REMOVED***valueType***REMOVED***" but expected type "$***REMOVED***expectedTypes***REMOVED***".`);
***REMOVED***
  ***REMOVED***);
***REMOVED***;

const isVisible = element => ***REMOVED***
  if (!isElement(element) || element.getClientRects().length === 0) ***REMOVED***
    return false;
  ***REMOVED***

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
***REMOVED***;

const isDisabled = element => ***REMOVED***
  if (!element || element.nodeType !== Node.ELEMENT_NODE) ***REMOVED***
    return true;
  ***REMOVED***

  if (element.classList.contains('disabled')) ***REMOVED***
    return true;
  ***REMOVED***

  if (typeof element.disabled !== 'undefined') ***REMOVED***
    return element.disabled;
  ***REMOVED***

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
***REMOVED***;

const findShadowRoot = element => ***REMOVED***
  if (!document.documentElement.attachShadow) ***REMOVED***
    return null;
  ***REMOVED*** // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') ***REMOVED***
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  ***REMOVED***

  if (element instanceof ShadowRoot) ***REMOVED***
    return element;
  ***REMOVED*** // when we don't find a shadow root


  if (!element.parentNode) ***REMOVED***
    return null;
  ***REMOVED***

  return findShadowRoot(element.parentNode);
***REMOVED***;

const noop = () => ***REMOVED******REMOVED***;
/**
 * Trick to restart an element's animation
 *
 * @param ***REMOVED***HTMLElement***REMOVED*** element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const reflow = element => ***REMOVED***
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
***REMOVED***;

const getjQuery = () => ***REMOVED***
  const ***REMOVED***
    jQuery
  ***REMOVED*** = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) ***REMOVED***
    return jQuery;
  ***REMOVED***

  return null;
***REMOVED***;

const DOMContentLoadedCallbacks = [];

const onDOMContentLoaded = callback => ***REMOVED***
  if (document.readyState === 'loading') ***REMOVED***
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) ***REMOVED***
      document.addEventListener('DOMContentLoaded', () => ***REMOVED***
        DOMContentLoadedCallbacks.forEach(callback => callback());
  ***REMOVED***);
***REMOVED***

    DOMContentLoadedCallbacks.push(callback);
  ***REMOVED*** else ***REMOVED***
    callback();
  ***REMOVED***
***REMOVED***;

const isRTL = () => document.documentElement.dir === 'rtl';

const defineJQueryPlugin = plugin => ***REMOVED***
  onDOMContentLoaded(() => ***REMOVED***
    const $ = getjQuery();
    /* istanbul ignore if */

    if ($) ***REMOVED***
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => ***REMOVED***
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
  ***REMOVED***;
***REMOVED***
  ***REMOVED***);
***REMOVED***;

const execute = callback => ***REMOVED***
  if (typeof callback === 'function') ***REMOVED***
    callback();
  ***REMOVED***
***REMOVED***;

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => ***REMOVED***
  if (!waitForTransition) ***REMOVED***
    execute(callback);
    return;
  ***REMOVED***

  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = (***REMOVED***
    target
  ***REMOVED***) => ***REMOVED***
    if (target !== transitionElement) ***REMOVED***
      return;
***REMOVED***

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  ***REMOVED***;

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => ***REMOVED***
    if (!called) ***REMOVED***
      triggerTransitionEnd(transitionElement);
***REMOVED***
***REMOVED*** emulatedDuration);
***REMOVED***;
/**
 * Return the previous/next element of a list.
 *
 * @param ***REMOVED***array***REMOVED*** list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return ***REMOVED***Element|elem***REMOVED*** The proper element
 */


const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => ***REMOVED***
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) ***REMOVED***
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  ***REMOVED***

  const listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) ***REMOVED***
    index = (index + listLength) % listLength;
  ***REMOVED***

  return list[Math.max(0, Math.min(index, listLength - 1))];
***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = ***REMOVED******REMOVED***; // Events storage

let uidEvent = 1;
const customEvents = ***REMOVED***
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
***REMOVED***;
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) ***REMOVED***
  return uid && `$***REMOVED***uid***REMOVED***::$***REMOVED***uidEvent++***REMOVED***` || element.uidEvent || uidEvent++;
***REMOVED***

function getEvent(element) ***REMOVED***
  const uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || ***REMOVED******REMOVED***;
  return eventRegistry[uid];
***REMOVED***

function bootstrapHandler(element, fn) ***REMOVED***
  return function handler(event) ***REMOVED***
    event.delegateTarget = element;

    if (handler.oneOff) ***REMOVED***
      EventHandler.off(element, event.type, fn);
***REMOVED***

    return fn.apply(element, [event]);
  ***REMOVED***;
***REMOVED***

function bootstrapDelegationHandler(element, selector, fn) ***REMOVED***
  return function handler(event) ***REMOVED***
    const domElements = element.querySelectorAll(selector);

    for (let ***REMOVED***
      target
***REMOVED*** = event; target && target !== this; target = target.parentNode) ***REMOVED***
      for (let i = domElements.length; i--;) ***REMOVED***
        if (domElements[i] === target) ***REMOVED***
          event.delegateTarget = target;

          if (handler.oneOff) ***REMOVED***
            // eslint-disable-next-line unicorn/consistent-destructuring
            EventHandler.off(element, event.type, selector, fn);
      ***REMOVED***

          return fn.apply(target, [event]);
    ***REMOVED***
  ***REMOVED***
***REMOVED*** // To please ESLint


    return null;
  ***REMOVED***;
***REMOVED***

function findHandler(events, handler, delegationSelector = null) ***REMOVED***
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) ***REMOVED***
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) ***REMOVED***
      return event;
***REMOVED***
  ***REMOVED***

  return null;
***REMOVED***

function normalizeParams(originalTypeEvent, handler, delegationFn) ***REMOVED***
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler;
  let typeEvent = getTypeEvent(originalTypeEvent);
  const isNative = nativeEvents.has(typeEvent);

  if (!isNative) ***REMOVED***
    typeEvent = originalTypeEvent;
  ***REMOVED***

  return [delegation, originalHandler, typeEvent];
***REMOVED***

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) ***REMOVED***
  if (typeof originalTypeEvent !== 'string' || !element) ***REMOVED***
    return;
  ***REMOVED***

  if (!handler) ***REMOVED***
    handler = delegationFn;
    delegationFn = null;
  ***REMOVED*** // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) ***REMOVED***
    const wrapFn = fn => ***REMOVED***
      return function (event) ***REMOVED***
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) ***REMOVED***
          return fn.call(this, event);
    ***REMOVED***
  ***REMOVED***;
***REMOVED***;

    if (delegationFn) ***REMOVED***
      delegationFn = wrapFn(delegationFn);
***REMOVED*** else ***REMOVED***
      handler = wrapFn(handler);
***REMOVED***
  ***REMOVED***

  const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = ***REMOVED******REMOVED***);
  const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) ***REMOVED***
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  ***REMOVED***

  const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
***REMOVED***

function removeHandler(element, events, typeEvent, handler, delegationSelector) ***REMOVED***
  const fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) ***REMOVED***
    return;
  ***REMOVED***

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
***REMOVED***

function removeNamespacedHandlers(element, events, typeEvent, namespace) ***REMOVED***
  const storeElementEvent = events[typeEvent] || ***REMOVED******REMOVED***;
  Object.keys(storeElementEvent).forEach(handlerKey => ***REMOVED***
    if (handlerKey.includes(namespace)) ***REMOVED***
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
***REMOVED***
  ***REMOVED***);
***REMOVED***

function getTypeEvent(event) ***REMOVED***
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
***REMOVED***

const EventHandler = ***REMOVED***
  on(element, event, handler, delegationFn) ***REMOVED***
    addHandler(element, event, handler, delegationFn, false);
***REMOVED***

  one(element, event, handler, delegationFn) ***REMOVED***
    addHandler(element, event, handler, delegationFn, true);
***REMOVED***

  off(element, originalTypeEvent, handler, delegationFn) ***REMOVED***
    if (typeof originalTypeEvent !== 'string' || !element) ***REMOVED***
      return;
***REMOVED***

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') ***REMOVED***
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) ***REMOVED***
        return;
  ***REMOVED***

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
***REMOVED***

    if (isNamespace) ***REMOVED***
      Object.keys(events).forEach(elementEvent => ***REMOVED***
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
  ***REMOVED***);
***REMOVED***

    const storeElementEvent = events[typeEvent] || ***REMOVED******REMOVED***;
    Object.keys(storeElementEvent).forEach(keyHandlers => ***REMOVED***
      const handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) ***REMOVED***
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
  ***REMOVED***
***REMOVED***);
***REMOVED***

  trigger(element, event, args) ***REMOVED***
    if (typeof event !== 'string' || !element) ***REMOVED***
      return null;
***REMOVED***

    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    const isNative = nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) ***REMOVED***
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
***REMOVED***

    if (isNative) ***REMOVED***
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
***REMOVED*** else ***REMOVED***
      evt = new CustomEvent(event, ***REMOVED***
        bubbles,
        cancelable: true
  ***REMOVED***);
***REMOVED*** // merge custom information in our event


    if (typeof args !== 'undefined') ***REMOVED***
      Object.keys(args).forEach(key => ***REMOVED***
        Object.defineProperty(evt, key, ***REMOVED***
          get() ***REMOVED***
            return args[key];
      ***REMOVED***

    ***REMOVED***);
  ***REMOVED***);
***REMOVED***

    if (defaultPrevented) ***REMOVED***
      evt.preventDefault();
***REMOVED***

    if (nativeDispatch) ***REMOVED***
      element.dispatchEvent(evt);
***REMOVED***

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') ***REMOVED***
      jQueryEvent.preventDefault();
***REMOVED***

    return evt;
  ***REMOVED***

***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const elementMap = new Map();
var Data = ***REMOVED***
  set(element, key, instance) ***REMOVED***
    if (!elementMap.has(element)) ***REMOVED***
      elementMap.set(element, new Map());
***REMOVED***

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) ***REMOVED***
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: $***REMOVED***Array.from(instanceMap.keys())[0]***REMOVED***.`);
      return;
***REMOVED***

    instanceMap.set(key, instance);
***REMOVED***

  get(element, key) ***REMOVED***
    if (elementMap.has(element)) ***REMOVED***
      return elementMap.get(element).get(key) || null;
***REMOVED***

    return null;
***REMOVED***

  remove(element, key) ***REMOVED***
    if (!elementMap.has(element)) ***REMOVED***
      return;
***REMOVED***

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) ***REMOVED***
      elementMap.delete(element);
***REMOVED***
  ***REMOVED***

***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION = '5.1.0';

class BaseComponent ***REMOVED***
  constructor(element) ***REMOVED***
    element = getElement(element);

    if (!element) ***REMOVED***
      return;
***REMOVED***

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  ***REMOVED***

  dispose() ***REMOVED***
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => ***REMOVED***
      this[propertyName] = null;
***REMOVED***);
  ***REMOVED***

  _queueCallback(callback, element, isAnimated = true) ***REMOVED***
    executeAfterTransition(callback, element, isAnimated);
  ***REMOVED***
  /** Static */


  static getInstance(element) ***REMOVED***
    return Data.get(getElement(element), this.DATA_KEY);
  ***REMOVED***

  static getOrCreateInstance(element, config = ***REMOVED******REMOVED***) ***REMOVED***
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  ***REMOVED***

  static get VERSION() ***REMOVED***
    return VERSION;
  ***REMOVED***

  static get NAME() ***REMOVED***
    throw new Error('You have to implement the static method "NAME", for each component!');
  ***REMOVED***

  static get DATA_KEY() ***REMOVED***
    return `bs.$***REMOVED***this.NAME***REMOVED***`;
  ***REMOVED***

  static get EVENT_KEY() ***REMOVED***
    return `.$***REMOVED***this.DATA_KEY***REMOVED***`;
  ***REMOVED***

***REMOVED***

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => ***REMOVED***
  const clickEvent = `click.dismiss$***REMOVED***component.EVENT_KEY***REMOVED***`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="$***REMOVED***name***REMOVED***"]`, function (event) ***REMOVED***
    if (['A', 'AREA'].includes(this.tagName)) ***REMOVED***
      event.preventDefault();
***REMOVED***

    if (isDisabled(this)) ***REMOVED***
      return;
***REMOVED***

    const target = getElementFromSelector(this) || this.closest(`.$***REMOVED***name***REMOVED***`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  ***REMOVED***);
***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$d = 'alert';
const DATA_KEY$c = 'bs.alert';
const EVENT_KEY$c = `.$***REMOVED***DATA_KEY$c***REMOVED***`;
const EVENT_CLOSE = `close$***REMOVED***EVENT_KEY$c***REMOVED***`;
const EVENT_CLOSED = `closed$***REMOVED***EVENT_KEY$c***REMOVED***`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Alert extends BaseComponent ***REMOVED***
  // Getters
  static get NAME() ***REMOVED***
    return NAME$d;
  ***REMOVED*** // Public


  close() ***REMOVED***
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  ***REMOVED*** // Private


  _destroyElement() ***REMOVED***
    this._element.remove();

    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') ***REMOVED***
        return;
  ***REMOVED***

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
  ***REMOVED***

      data[config](this);
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$c = 'button';
const DATA_KEY$b = 'bs.button';
const EVENT_KEY$b = `.$***REMOVED***DATA_KEY$b***REMOVED***`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click$***REMOVED***EVENT_KEY$b***REMOVED***$***REMOVED***DATA_API_KEY$7***REMOVED***`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button extends BaseComponent ***REMOVED***
  // Getters
  static get NAME() ***REMOVED***
    return NAME$c;
  ***REMOVED*** // Public


  toggle() ***REMOVED***
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Button.getOrCreateInstance(this);

      if (config === 'toggle') ***REMOVED***
        data[config]();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => ***REMOVED***
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) ***REMOVED***
  if (val === 'true') ***REMOVED***
    return true;
  ***REMOVED***

  if (val === 'false') ***REMOVED***
    return false;
  ***REMOVED***

  if (val === Number(val).toString()) ***REMOVED***
    return Number(val);
  ***REMOVED***

  if (val === '' || val === 'null') ***REMOVED***
    return null;
  ***REMOVED***

  return val;
***REMOVED***

function normalizeDataKey(key) ***REMOVED***
  return key.replace(/[A-Z]/g, chr => `-$***REMOVED***chr.toLowerCase()***REMOVED***`);
***REMOVED***

const Manipulator = ***REMOVED***
  setDataAttribute(element, key, value) ***REMOVED***
    element.setAttribute(`data-bs-$***REMOVED***normalizeDataKey(key)***REMOVED***`, value);
***REMOVED***

  removeDataAttribute(element, key) ***REMOVED***
    element.removeAttribute(`data-bs-$***REMOVED***normalizeDataKey(key)***REMOVED***`);
***REMOVED***

  getDataAttributes(element) ***REMOVED***
    if (!element) ***REMOVED***
      return ***REMOVED******REMOVED***;
***REMOVED***

    const attributes = ***REMOVED******REMOVED***;
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => ***REMOVED***
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
***REMOVED***);
    return attributes;
***REMOVED***

  getDataAttribute(element, key) ***REMOVED***
    return normalizeData(element.getAttribute(`data-bs-$***REMOVED***normalizeDataKey(key)***REMOVED***`));
***REMOVED***

  offset(element) ***REMOVED***
    const rect = element.getBoundingClientRect();
    return ***REMOVED***
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
***REMOVED***;
***REMOVED***

  position(element) ***REMOVED***
    return ***REMOVED***
      top: element.offsetTop,
      left: element.offsetLeft
***REMOVED***;
  ***REMOVED***

***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const NODE_TEXT = 3;
const SelectorEngine = ***REMOVED***
  find(selector, element = document.documentElement) ***REMOVED***
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
***REMOVED***

  findOne(selector, element = document.documentElement) ***REMOVED***
    return Element.prototype.querySelector.call(element, selector);
***REMOVED***

  children(element, selector) ***REMOVED***
    return [].concat(...element.children).filter(child => child.matches(selector));
***REMOVED***

  parents(element, selector) ***REMOVED***
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) ***REMOVED***
      if (ancestor.matches(selector)) ***REMOVED***
        parents.push(ancestor);
  ***REMOVED***

      ancestor = ancestor.parentNode;
***REMOVED***

    return parents;
***REMOVED***

  prev(element, selector) ***REMOVED***
    let previous = element.previousElementSibling;

    while (previous) ***REMOVED***
      if (previous.matches(selector)) ***REMOVED***
        return [previous];
  ***REMOVED***

      previous = previous.previousElementSibling;
***REMOVED***

    return [];
***REMOVED***

  next(element, selector) ***REMOVED***
    let next = element.nextElementSibling;

    while (next) ***REMOVED***
      if (next.matches(selector)) ***REMOVED***
        return [next];
  ***REMOVED***

      next = next.nextElementSibling;
***REMOVED***

    return [];
***REMOVED***

  focusableChildren(element) ***REMOVED***
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `$***REMOVED***selector***REMOVED***:not([tabindex^="-"])`).join(', ');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  ***REMOVED***

***REMOVED***;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$b = 'carousel';
const DATA_KEY$a = 'bs.carousel';
const EVENT_KEY$a = `.$***REMOVED***DATA_KEY$a***REMOVED***`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const SWIPE_THRESHOLD = 40;
const Default$a = ***REMOVED***
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
***REMOVED***;
const DefaultType$a = ***REMOVED***
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
***REMOVED***;
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const KEY_TO_DIRECTION = ***REMOVED***
  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY]: DIRECTION_LEFT
***REMOVED***;
const EVENT_SLIDE = `slide$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_SLID = `slid$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_KEYDOWN = `keydown$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_MOUSEENTER = `mouseenter$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_MOUSELEAVE = `mouseleave$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_TOUCHSTART = `touchstart$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_TOUCHMOVE = `touchmove$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_TOUCHEND = `touchend$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_POINTERDOWN = `pointerdown$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_POINTERUP = `pointerup$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_DRAG_START = `dragstart$***REMOVED***EVENT_KEY$a***REMOVED***`;
const EVENT_LOAD_DATA_API$2 = `load$***REMOVED***EVENT_KEY$a***REMOVED***$***REMOVED***DATA_API_KEY$6***REMOVED***`;
const EVENT_CLICK_DATA_API$5 = `click$***REMOVED***EVENT_KEY$a***REMOVED***$***REMOVED***DATA_API_KEY$6***REMOVED***`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Carousel extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$a;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$b;
  ***REMOVED*** // Public


  next() ***REMOVED***
    this._slide(ORDER_NEXT);
  ***REMOVED***

  nextWhenVisible() ***REMOVED***
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) ***REMOVED***
      this.next();
***REMOVED***
  ***REMOVED***

  prev() ***REMOVED***
    this._slide(ORDER_PREV);
  ***REMOVED***

  pause(event) ***REMOVED***
    if (!event) ***REMOVED***
      this._isPaused = true;
***REMOVED***

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) ***REMOVED***
      triggerTransitionEnd(this._element);
      this.cycle(true);
***REMOVED***

    clearInterval(this._interval);
    this._interval = null;
  ***REMOVED***

  cycle(event) ***REMOVED***
    if (!event) ***REMOVED***
      this._isPaused = false;
***REMOVED***

    if (this._interval) ***REMOVED***
      clearInterval(this._interval);
      this._interval = null;
***REMOVED***

    if (this._config && this._config.interval && !this._isPaused) ***REMOVED***
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
***REMOVED***
  ***REMOVED***

  to(index) ***REMOVED***
    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) ***REMOVED***
      return;
***REMOVED***

    if (this._isSliding) ***REMOVED***
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
***REMOVED***

    if (activeIndex === index) ***REMOVED***
      this.pause();
      this.cycle();
      return;
***REMOVED***

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, this._items[index]);
  ***REMOVED*** // Private


  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$a,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    typeCheckConfig(NAME$b, config, DefaultType$a);
    return config;
  ***REMOVED***

  _handleSwipe() ***REMOVED***
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) ***REMOVED***
      return;
***REMOVED***

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) ***REMOVED***
      return;
***REMOVED***

    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
  ***REMOVED***

  _addEventListeners() ***REMOVED***
    if (this._config.keyboard) ***REMOVED***
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
***REMOVED***

    if (this._config.pause === 'hover') ***REMOVED***
      EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
      EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
***REMOVED***

    if (this._config.touch && this._touchSupported) ***REMOVED***
      this._addTouchEventListeners();
***REMOVED***
  ***REMOVED***

  _addTouchEventListeners() ***REMOVED***
    const start = event => ***REMOVED***
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) ***REMOVED***
        this.touchStartX = event.clientX;
  ***REMOVED*** else if (!this._pointerEvent) ***REMOVED***
        this.touchStartX = event.touches[0].clientX;
  ***REMOVED***
***REMOVED***;

    const move = event => ***REMOVED***
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
***REMOVED***;

    const end = event => ***REMOVED***
      if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) ***REMOVED***
        this.touchDeltaX = event.clientX - this.touchStartX;
  ***REMOVED***

      this._handleSwipe();

      if (this._config.pause === 'hover') ***REMOVED***
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) ***REMOVED***
          clearTimeout(this.touchTimeout);
    ***REMOVED***

        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
  ***REMOVED***
***REMOVED***;

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => ***REMOVED***
      EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
***REMOVED***);

    if (this._pointerEvent) ***REMOVED***
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
***REMOVED*** else ***REMOVED***
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
***REMOVED***
  ***REMOVED***

  _keydown(event) ***REMOVED***
    if (/input|textarea/i.test(event.target.tagName)) ***REMOVED***
      return;
***REMOVED***

    const direction = KEY_TO_DIRECTION[event.key];

    if (direction) ***REMOVED***
      event.preventDefault();

      this._slide(direction);
***REMOVED***
  ***REMOVED***

  _getItemIndex(element) ***REMOVED***
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  ***REMOVED***

  _getItemByOrder(order, activeElement) ***REMOVED***
    const isNext = order === ORDER_NEXT;
    return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
  ***REMOVED***

  _triggerSlideEvent(relatedTarget, eventDirectionName) ***REMOVED***
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, ***REMOVED***
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
***REMOVED***);
  ***REMOVED***

  _setActiveIndicatorElement(element) ***REMOVED***
    if (this._indicatorsElement) ***REMOVED***
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) ***REMOVED***
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) ***REMOVED***
          indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***

  _updateInterval() ***REMOVED***
    const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) ***REMOVED***
      return;
***REMOVED***

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) ***REMOVED***
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
***REMOVED*** else ***REMOVED***
      this._config.interval = this._config.defaultInterval || this._config.interval;
***REMOVED***
  ***REMOVED***

  _slide(directionOrOrder, element) ***REMOVED***
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === ORDER_NEXT;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) ***REMOVED***
      this._isSliding = false;
      return;
***REMOVED***

    if (this._isSliding) ***REMOVED***
      return;
***REMOVED***

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    if (!activeElement || !nextElement) ***REMOVED***
      // Some weirdness is happening, so we bail
      return;
***REMOVED***

    this._isSliding = true;

    if (isCycling) ***REMOVED***
      this.pause();
***REMOVED***

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => ***REMOVED***
      EventHandler.trigger(this._element, EVENT_SLID, ***REMOVED***
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
  ***REMOVED***);
***REMOVED***;

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) ***REMOVED***
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => ***REMOVED***
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
  ***REMOVED***;

      this._queueCallback(completeCallBack, activeElement, true);
***REMOVED*** else ***REMOVED***
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
***REMOVED***

    if (isCycling) ***REMOVED***
      this.cycle();
***REMOVED***
  ***REMOVED***

  _directionToOrder(direction) ***REMOVED***
    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) ***REMOVED***
      return direction;
***REMOVED***

    if (isRTL()) ***REMOVED***
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
***REMOVED***

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  ***REMOVED***

  _orderToDirection(order) ***REMOVED***
    if (![ORDER_NEXT, ORDER_PREV].includes(order)) ***REMOVED***
      return order;
***REMOVED***

    if (isRTL()) ***REMOVED***
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
***REMOVED***

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  ***REMOVED*** // Static


  static carouselInterface(element, config) ***REMOVED***
    const data = Carousel.getOrCreateInstance(element, config);
    let ***REMOVED***
      _config
***REMOVED*** = data;

    if (typeof config === 'object') ***REMOVED***
      _config = ***REMOVED*** ..._config,
        ...config
  ***REMOVED***;
***REMOVED***

    const action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') ***REMOVED***
      data.to(config);
***REMOVED*** else if (typeof action === 'string') ***REMOVED***
      if (typeof data[action] === 'undefined') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***action***REMOVED***"`);
  ***REMOVED***

      data[action]();
***REMOVED*** else if (_config.interval && _config.ride) ***REMOVED***
      data.pause();
      data.cycle();
***REMOVED***
  ***REMOVED***

  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      Carousel.carouselInterface(this, config);
***REMOVED***);
  ***REMOVED***

  static dataApiClickHandler(event) ***REMOVED***
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) ***REMOVED***
      return;
***REMOVED***

    const config = ***REMOVED*** ...Manipulator.getDataAttributes(target),
      ...Manipulator.getDataAttributes(this)
***REMOVED***;
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) ***REMOVED***
      config.interval = false;
***REMOVED***

    Carousel.carouselInterface(target, config);

    if (slideIndex) ***REMOVED***
      Carousel.getInstance(target).to(slideIndex);
***REMOVED***

    event.preventDefault();
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => ***REMOVED***
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) ***REMOVED***
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
  ***REMOVED***
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$a = 'collapse';
const DATA_KEY$9 = 'bs.collapse';
const EVENT_KEY$9 = `.$***REMOVED***DATA_KEY$9***REMOVED***`;
const DATA_API_KEY$5 = '.data-api';
const Default$9 = ***REMOVED***
  toggle: true,
  parent: null
***REMOVED***;
const DefaultType$9 = ***REMOVED***
  toggle: 'boolean',
  parent: '(null|element)'
***REMOVED***;
const EVENT_SHOW$5 = `show$***REMOVED***EVENT_KEY$9***REMOVED***`;
const EVENT_SHOWN$5 = `shown$***REMOVED***EVENT_KEY$9***REMOVED***`;
const EVENT_HIDE$5 = `hide$***REMOVED***EVENT_KEY$9***REMOVED***`;
const EVENT_HIDDEN$5 = `hidden$***REMOVED***EVENT_KEY$9***REMOVED***`;
const EVENT_CLICK_DATA_API$4 = `click$***REMOVED***EVENT_KEY$9***REMOVED***$***REMOVED***DATA_API_KEY$5***REMOVED***`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.show, .collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Collapse extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) ***REMOVED***
      const elem = toggleList[i];
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) ***REMOVED***
        this._selector = selector;

        this._triggerArray.push(elem);
  ***REMOVED***
***REMOVED***

    this._initializeChildren();

    if (!this._config.parent) ***REMOVED***
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
***REMOVED***

    if (this._config.toggle) ***REMOVED***
      this.toggle();
***REMOVED***
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$9;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$a;
  ***REMOVED*** // Public


  toggle() ***REMOVED***
    if (this._isShown()) ***REMOVED***
      this.hide();
***REMOVED*** else ***REMOVED***
      this.show();
***REMOVED***
  ***REMOVED***

  show() ***REMOVED***
    if (this._isTransitioning || this._isShown()) ***REMOVED***
      return;
***REMOVED***

    let actives = [];
    let activesData;

    if (this._config.parent) ***REMOVED***
      const children = SelectorEngine.find(`.$***REMOVED***CLASS_NAME_COLLAPSE***REMOVED*** .$***REMOVED***CLASS_NAME_COLLAPSE***REMOVED***`, this._config.parent);
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
***REMOVED***

    const container = SelectorEngine.findOne(this._selector);

    if (actives.length) ***REMOVED***
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

      if (activesData && activesData._isTransitioning) ***REMOVED***
        return;
  ***REMOVED***
***REMOVED***

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

    if (startEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    actives.forEach(elemActive => ***REMOVED***
      if (container !== elemActive) ***REMOVED***
        Collapse.getOrCreateInstance(elemActive, ***REMOVED***
          toggle: false
    ***REMOVED***).hide();
  ***REMOVED***

      if (!activesData) ***REMOVED***
        Data.set(elemActive, DATA_KEY$9, null);
  ***REMOVED***
***REMOVED***);

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => ***REMOVED***
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN$5);
***REMOVED***;

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll$***REMOVED***capitalizedDimension***REMOVED***`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `$***REMOVED***this._element[scrollSize]***REMOVED***px`;
  ***REMOVED***

  hide() ***REMOVED***
    if (this._isTransitioning || !this._isShown()) ***REMOVED***
      return;
***REMOVED***

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

    if (startEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    const dimension = this._getDimension();

    this._element.style[dimension] = `$***REMOVED***this._element.getBoundingClientRect()[dimension]***REMOVED***px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    for (let i = 0; i < triggerArrayLength; i++) ***REMOVED***
      const trigger = this._triggerArray[i];
      const elem = getElementFromSelector(trigger);

      if (elem && !this._isShown(elem)) ***REMOVED***
        this._addAriaAndCollapsedClass([trigger], false);
  ***REMOVED***
***REMOVED***

    this._isTransitioning = true;

    const complete = () => ***REMOVED***
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
***REMOVED***;

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  ***REMOVED***

  _isShown(element = this._element) ***REMOVED***
    return element.classList.contains(CLASS_NAME_SHOW$7);
  ***REMOVED*** // Private


  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$9,
      ...Manipulator.getDataAttributes(this._element),
      ...config
***REMOVED***;
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = getElement(config.parent);
    typeCheckConfig(NAME$a, config, DefaultType$9);
    return config;
  ***REMOVED***

  _getDimension() ***REMOVED***
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  ***REMOVED***

  _initializeChildren() ***REMOVED***
    if (!this._config.parent) ***REMOVED***
      return;
***REMOVED***

    const children = SelectorEngine.find(`.$***REMOVED***CLASS_NAME_COLLAPSE***REMOVED*** .$***REMOVED***CLASS_NAME_COLLAPSE***REMOVED***`, this._config.parent);
    SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => ***REMOVED***
      const selected = getElementFromSelector(element);

      if (selected) ***REMOVED***
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

  _addAriaAndCollapsedClass(triggerArray, isOpen) ***REMOVED***
    if (!triggerArray.length) ***REMOVED***
      return;
***REMOVED***

    triggerArray.forEach(elem => ***REMOVED***
      if (isOpen) ***REMOVED***
        elem.classList.remove(CLASS_NAME_COLLAPSED);
  ***REMOVED*** else ***REMOVED***
        elem.classList.add(CLASS_NAME_COLLAPSED);
  ***REMOVED***

      elem.setAttribute('aria-expanded', isOpen);
***REMOVED***);
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const _config = ***REMOVED******REMOVED***;

      if (typeof config === 'string' && /show|hide/.test(config)) ***REMOVED***
        _config.toggle = false;
  ***REMOVED***

      const data = Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') ***REMOVED***
        if (typeof data[config] === 'undefined') ***REMOVED***
          throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
    ***REMOVED***

        data[config]();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) ***REMOVED***
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') ***REMOVED***
    event.preventDefault();
  ***REMOVED***

  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(element => ***REMOVED***
    Collapse.getOrCreateInstance(element, ***REMOVED***
      toggle: false
***REMOVED***).toggle();
  ***REMOVED***);
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$9 = 'dropdown';
const DATA_KEY$8 = 'bs.dropdown';
const EVENT_KEY$8 = `.$***REMOVED***DATA_KEY$8***REMOVED***`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const REGEXP_KEYDOWN = new RegExp(`$***REMOVED***ARROW_UP_KEY***REMOVED***|$***REMOVED***ARROW_DOWN_KEY***REMOVED***|$***REMOVED***ESCAPE_KEY$2***REMOVED***`);
const EVENT_HIDE$4 = `hide$***REMOVED***EVENT_KEY$8***REMOVED***`;
const EVENT_HIDDEN$4 = `hidden$***REMOVED***EVENT_KEY$8***REMOVED***`;
const EVENT_SHOW$4 = `show$***REMOVED***EVENT_KEY$8***REMOVED***`;
const EVENT_SHOWN$4 = `shown$***REMOVED***EVENT_KEY$8***REMOVED***`;
const EVENT_CLICK_DATA_API$3 = `click$***REMOVED***EVENT_KEY$8***REMOVED***$***REMOVED***DATA_API_KEY$4***REMOVED***`;
const EVENT_KEYDOWN_DATA_API = `keydown$***REMOVED***EVENT_KEY$8***REMOVED***$***REMOVED***DATA_API_KEY$4***REMOVED***`;
const EVENT_KEYUP_DATA_API = `keyup$***REMOVED***EVENT_KEY$8***REMOVED***$***REMOVED***DATA_API_KEY$4***REMOVED***`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$8 = ***REMOVED***
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
***REMOVED***;
const DefaultType$8 = ***REMOVED***
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
***REMOVED***;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Dropdown extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$8;
  ***REMOVED***

  static get DefaultType() ***REMOVED***
    return DefaultType$8;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$9;
  ***REMOVED*** // Public


  toggle() ***REMOVED***
    return this._isShown() ? this.hide() : this.show();
  ***REMOVED***

  show() ***REMOVED***
    if (isDisabled(this._element) || this._isShown(this._menu)) ***REMOVED***
      return;
***REMOVED***

    const relatedTarget = ***REMOVED***
      relatedTarget: this._element
***REMOVED***;
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) ***REMOVED***
      Manipulator.setDataAttribute(this._menu, 'popper', 'none');
***REMOVED*** else ***REMOVED***
      this._createPopper(parent);
***REMOVED*** // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) ***REMOVED***
      [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
***REMOVED***

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add(CLASS_NAME_SHOW$6);

    this._element.classList.add(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
  ***REMOVED***

  hide() ***REMOVED***
    if (isDisabled(this._element) || !this._isShown(this._menu)) ***REMOVED***
      return;
***REMOVED***

    const relatedTarget = ***REMOVED***
      relatedTarget: this._element
***REMOVED***;

    this._completeHide(relatedTarget);
  ***REMOVED***

  dispose() ***REMOVED***
    if (this._popper) ***REMOVED***
      this._popper.destroy();
***REMOVED***

    super.dispose();
  ***REMOVED***

  update() ***REMOVED***
    this._inNavbar = this._detectNavbar();

    if (this._popper) ***REMOVED***
      this._popper.update();
***REMOVED***
  ***REMOVED*** // Private


  _completeHide(relatedTarget) ***REMOVED***
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED*** // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) ***REMOVED***
      [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
***REMOVED***

    if (this._popper) ***REMOVED***
      this._popper.destroy();
***REMOVED***

    this._menu.classList.remove(CLASS_NAME_SHOW$6);

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
  ***REMOVED***

  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...this.constructor.Default,
      ...Manipulator.getDataAttributes(this._element),
      ...config
***REMOVED***;
    typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') ***REMOVED***
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`$***REMOVED***NAME$9.toUpperCase()***REMOVED***: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
***REMOVED***

    return config;
  ***REMOVED***

  _createPopper(parent) ***REMOVED***
    if (typeof Popper === 'undefined') ***REMOVED***
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
***REMOVED***

    let referenceElement = this._element;

    if (this._config.reference === 'parent') ***REMOVED***
      referenceElement = parent;
***REMOVED*** else if (isElement(this._config.reference)) ***REMOVED***
      referenceElement = getElement(this._config.reference);
***REMOVED*** else if (typeof this._config.reference === 'object') ***REMOVED***
      referenceElement = this._config.reference;
***REMOVED***

    const popperConfig = this._getPopperConfig();

    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
    this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) ***REMOVED***
      Manipulator.setDataAttribute(this._menu, 'popper', 'static');
***REMOVED***
  ***REMOVED***

  _isShown(element = this._element) ***REMOVED***
    return element.classList.contains(CLASS_NAME_SHOW$6);
  ***REMOVED***

  _getMenuElement() ***REMOVED***
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  ***REMOVED***

  _getPlacement() ***REMOVED***
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) ***REMOVED***
      return PLACEMENT_RIGHT;
***REMOVED***

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) ***REMOVED***
      return PLACEMENT_LEFT;
***REMOVED*** // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) ***REMOVED***
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
***REMOVED***

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  ***REMOVED***

  _detectNavbar() ***REMOVED***
    return this._element.closest(`.$***REMOVED***CLASS_NAME_NAVBAR***REMOVED***`) !== null;
  ***REMOVED***

  _getOffset() ***REMOVED***
    const ***REMOVED***
      offset
***REMOVED*** = this._config;

    if (typeof offset === 'string') ***REMOVED***
      return offset.split(',').map(val => Number.parseInt(val, 10));
***REMOVED***

    if (typeof offset === 'function') ***REMOVED***
      return popperData => offset(popperData, this._element);
***REMOVED***

    return offset;
  ***REMOVED***

  _getPopperConfig() ***REMOVED***
    const defaultBsPopperConfig = ***REMOVED***
      placement: this._getPlacement(),
      modifiers: [***REMOVED***
        name: 'preventOverflow',
        options: ***REMOVED***
          boundary: this._config.boundary
    ***REMOVED***
    ***REMOVED*** ***REMOVED***
        name: 'offset',
        options: ***REMOVED***
          offset: this._getOffset()
    ***REMOVED***
  ***REMOVED***]
***REMOVED***; // Disable Popper if we have a static display

    if (this._config.display === 'static') ***REMOVED***
      defaultBsPopperConfig.modifiers = [***REMOVED***
        name: 'applyStyles',
        enabled: false
  ***REMOVED***];
***REMOVED***

    return ***REMOVED*** ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
***REMOVED***;
  ***REMOVED***

  _selectMenuItem(***REMOVED***
    key,
    target
  ***REMOVED***) ***REMOVED***
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

    if (!items.length) ***REMOVED***
      return;
***REMOVED*** // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') ***REMOVED***
        return;
  ***REMOVED***

      if (typeof data[config] === 'undefined') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
  ***REMOVED***

      data[config]();
***REMOVED***);
  ***REMOVED***

  static clearMenus(event) ***REMOVED***
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) ***REMOVED***
      return;
***REMOVED***

    const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) ***REMOVED***
      const context = Dropdown.getInstance(toggles[i]);

      if (!context || context._config.autoClose === false) ***REMOVED***
        continue;
  ***REMOVED***

      if (!context._isShown()) ***REMOVED***
        continue;
  ***REMOVED***

      const relatedTarget = ***REMOVED***
        relatedTarget: context._element
  ***REMOVED***;

      if (event) ***REMOVED***
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) ***REMOVED***
          continue;
    ***REMOVED*** // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) ***REMOVED***
          continue;
    ***REMOVED***

        if (event.type === 'click') ***REMOVED***
          relatedTarget.clickEvent = event;
    ***REMOVED***
  ***REMOVED***

      context._completeHide(relatedTarget);
***REMOVED***
  ***REMOVED***

  static getParentFromElement(element) ***REMOVED***
    return getElementFromSelector(element) || element.parentNode;
  ***REMOVED***

  static dataApiKeydownHandler(event) ***REMOVED***
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) ***REMOVED***
      return;
***REMOVED***

    const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

    if (!isActive && event.key === ESCAPE_KEY$2) ***REMOVED***
      return;
***REMOVED***

    event.preventDefault();
    event.stopPropagation();

    if (isDisabled(this)) ***REMOVED***
      return;
***REMOVED***

    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
    const instance = Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === ESCAPE_KEY$2) ***REMOVED***
      instance.hide();
      return;
***REMOVED***

    if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) ***REMOVED***
      if (!isActive) ***REMOVED***
        instance.show();
  ***REMOVED***

      instance._selectMenuItem(event);

      return;
***REMOVED***

    if (!isActive || event.key === SPACE_KEY) ***REMOVED***
      Dropdown.clearMenus();
***REMOVED***
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) ***REMOVED***
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';

class ScrollBarHelper ***REMOVED***
  constructor() ***REMOVED***
    this._element = document.body;
  ***REMOVED***

  getWidth() ***REMOVED***
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  ***REMOVED***

  hide() ***REMOVED***
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  ***REMOVED***

  _disableOverFlow() ***REMOVED***
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  ***REMOVED***

  _setElementAttributes(selector, styleProp, callback) ***REMOVED***
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => ***REMOVED***
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) ***REMOVED***
        return;
  ***REMOVED***

      this._saveInitialAttribute(element, styleProp);

      const calculatedValue = window.getComputedStyle(element)[styleProp];
      element.style[styleProp] = `$***REMOVED***callback(Number.parseFloat(calculatedValue))***REMOVED***px`;
***REMOVED***;

    this._applyManipulationCallback(selector, manipulationCallBack);
  ***REMOVED***

  reset() ***REMOVED***
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, 'paddingRight');

    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
  ***REMOVED***

  _saveInitialAttribute(element, styleProp) ***REMOVED***
    const actualValue = element.style[styleProp];

    if (actualValue) ***REMOVED***
      Manipulator.setDataAttribute(element, styleProp, actualValue);
***REMOVED***
  ***REMOVED***

  _resetElementAttributes(selector, styleProp) ***REMOVED***
    const manipulationCallBack = element => ***REMOVED***
      const value = Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined') ***REMOVED***
        element.style.removeProperty(styleProp);
  ***REMOVED*** else ***REMOVED***
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
  ***REMOVED***
***REMOVED***;

    this._applyManipulationCallback(selector, manipulationCallBack);
  ***REMOVED***

  _applyManipulationCallback(selector, callBack) ***REMOVED***
    if (isElement(selector)) ***REMOVED***
      callBack(selector);
***REMOVED*** else ***REMOVED***
      SelectorEngine.find(selector, this._element).forEach(callBack);
***REMOVED***
  ***REMOVED***

  isOverflowing() ***REMOVED***
    return this.getWidth() > 0;
  ***REMOVED***

***REMOVED***

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
const Default$7 = ***REMOVED***
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
***REMOVED***;
const DefaultType$7 = ***REMOVED***
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
***REMOVED***;
const NAME$8 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.$***REMOVED***NAME$8***REMOVED***`;

class Backdrop ***REMOVED***
  constructor(config) ***REMOVED***
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  ***REMOVED***

  show(callback) ***REMOVED***
    if (!this._config.isVisible) ***REMOVED***
      execute(callback);
      return;
***REMOVED***

    this._append();

    if (this._config.isAnimated) ***REMOVED***
      reflow(this._getElement());
***REMOVED***

    this._getElement().classList.add(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => ***REMOVED***
      execute(callback);
***REMOVED***);
  ***REMOVED***

  hide(callback) ***REMOVED***
    if (!this._config.isVisible) ***REMOVED***
      execute(callback);
      return;
***REMOVED***

    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => ***REMOVED***
      this.dispose();
      execute(callback);
***REMOVED***);
  ***REMOVED*** // Private


  _getElement() ***REMOVED***
    if (!this._element) ***REMOVED***
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) ***REMOVED***
        backdrop.classList.add(CLASS_NAME_FADE$4);
  ***REMOVED***

      this._element = backdrop;
***REMOVED***

    return this._element;
  ***REMOVED***

  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$7,
      ...(typeof config === 'object' ? config : ***REMOVED******REMOVED***)
***REMOVED***; // use getElement() with the default "body" to get a fresh Element on each instantiation

    config.rootElement = getElement(config.rootElement);
    typeCheckConfig(NAME$8, config, DefaultType$7);
    return config;
  ***REMOVED***

  _append() ***REMOVED***
    if (this._isAppended) ***REMOVED***
      return;
***REMOVED***

    this._config.rootElement.append(this._getElement());

    EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => ***REMOVED***
      execute(this._config.clickCallback);
***REMOVED***);
    this._isAppended = true;
  ***REMOVED***

  dispose() ***REMOVED***
    if (!this._isAppended) ***REMOVED***
      return;
***REMOVED***

    EventHandler.off(this._element, EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  ***REMOVED***

  _emulateAnimation(callback) ***REMOVED***
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  ***REMOVED***

***REMOVED***

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
const Default$6 = ***REMOVED***
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
***REMOVED***;
const DefaultType$6 = ***REMOVED***
  trapElement: 'element',
  autofocus: 'boolean'
***REMOVED***;
const NAME$7 = 'focustrap';
const DATA_KEY$7 = 'bs.focustrap';
const EVENT_KEY$7 = `.$***REMOVED***DATA_KEY$7***REMOVED***`;
const EVENT_FOCUSIN$1 = `focusin$***REMOVED***EVENT_KEY$7***REMOVED***`;
const EVENT_KEYDOWN_TAB = `keydown.tab$***REMOVED***EVENT_KEY$7***REMOVED***`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';

class FocusTrap ***REMOVED***
  constructor(config) ***REMOVED***
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  ***REMOVED***

  activate() ***REMOVED***
    const ***REMOVED***
      trapElement,
      autofocus
***REMOVED*** = this._config;

    if (this._isActive) ***REMOVED***
      return;
***REMOVED***

    if (autofocus) ***REMOVED***
      trapElement.focus();
***REMOVED***

    EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  ***REMOVED***

  deactivate() ***REMOVED***
    if (!this._isActive) ***REMOVED***
      return;
***REMOVED***

    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$7);
  ***REMOVED*** // Private


  _handleFocusin(event) ***REMOVED***
    const ***REMOVED***
      target
***REMOVED*** = event;
    const ***REMOVED***
      trapElement
***REMOVED*** = this._config;

    if (target === document || target === trapElement || trapElement.contains(target)) ***REMOVED***
      return;
***REMOVED***

    const elements = SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) ***REMOVED***
      trapElement.focus();
***REMOVED*** else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) ***REMOVED***
      elements[elements.length - 1].focus();
***REMOVED*** else ***REMOVED***
      elements[0].focus();
***REMOVED***
  ***REMOVED***

  _handleKeydown(event) ***REMOVED***
    if (event.key !== TAB_KEY) ***REMOVED***
      return;
***REMOVED***

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  ***REMOVED***

  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$6,
      ...(typeof config === 'object' ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    typeCheckConfig(NAME$7, config, DefaultType$6);
    return config;
  ***REMOVED***

***REMOVED***

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.$***REMOVED***DATA_KEY$6***REMOVED***`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = ***REMOVED***
  backdrop: true,
  keyboard: true,
  focus: true
***REMOVED***;
const DefaultType$5 = ***REMOVED***
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
***REMOVED***;
const EVENT_HIDE$3 = `hide$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_HIDE_PREVENTED = `hidePrevented$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_HIDDEN$3 = `hidden$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_SHOW$3 = `show$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_SHOWN$3 = `shown$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_RESIZE = `resize$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_CLICK_DISMISS = `click.dismiss$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss$***REMOVED***EVENT_KEY$6***REMOVED***`;
const EVENT_CLICK_DATA_API$2 = `click$***REMOVED***EVENT_KEY$6***REMOVED***$***REMOVED***DATA_API_KEY$3***REMOVED***`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Modal extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._config = this._getConfig(config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$5;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$6;
  ***REMOVED*** // Public


  toggle(relatedTarget) ***REMOVED***
    return this._isShown ? this.hide() : this.show(relatedTarget);
  ***REMOVED***

  show(relatedTarget) ***REMOVED***
    if (this._isShown || this._isTransitioning) ***REMOVED***
      return;
***REMOVED***

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, ***REMOVED***
      relatedTarget
***REMOVED***);

    if (showEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._isShown = true;

    if (this._isAnimated()) ***REMOVED***
      this._isTransitioning = true;
***REMOVED***

    this._scrollBar.hide();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => ***REMOVED***
      EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => ***REMOVED***
        if (event.target === this._element) ***REMOVED***
          this._ignoreBackdropClick = true;
    ***REMOVED***
  ***REMOVED***);
***REMOVED***);

    this._showBackdrop(() => this._showElement(relatedTarget));
  ***REMOVED***

  hide() ***REMOVED***
    if (!this._isShown || this._isTransitioning) ***REMOVED***
      return;
***REMOVED***

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) ***REMOVED***
      this._isTransitioning = true;
***REMOVED***

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
  ***REMOVED***

  dispose() ***REMOVED***
    [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  ***REMOVED***

  handleUpdate() ***REMOVED***
    this._adjustDialog();
  ***REMOVED*** // Private


  _initializeBackDrop() ***REMOVED***
    return new Backdrop(***REMOVED***
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
***REMOVED***);
  ***REMOVED***

  _initializeFocusTrap() ***REMOVED***
    return new FocusTrap(***REMOVED***
      trapElement: this._element
***REMOVED***);
  ***REMOVED***

  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$5,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    typeCheckConfig(NAME$6, config, DefaultType$5);
    return config;
  ***REMOVED***

  _showElement(relatedTarget) ***REMOVED***
    const isAnimated = this._isAnimated();

    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) ***REMOVED***
      // Don't move modal's DOM position
      document.body.append(this._element);
***REMOVED***

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) ***REMOVED***
      modalBody.scrollTop = 0;
***REMOVED***

    if (isAnimated) ***REMOVED***
      reflow(this._element);
***REMOVED***

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const transitionComplete = () => ***REMOVED***
      if (this._config.focus) ***REMOVED***
        this._focustrap.activate();
  ***REMOVED***

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$3, ***REMOVED***
        relatedTarget
  ***REMOVED***);
***REMOVED***;

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  ***REMOVED***

  _setEscapeEvent() ***REMOVED***
    if (this._isShown) ***REMOVED***
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => ***REMOVED***
        if (this._config.keyboard && event.key === ESCAPE_KEY$1) ***REMOVED***
          event.preventDefault();
          this.hide();
    ***REMOVED*** else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) ***REMOVED***
          this._triggerBackdropTransition();
    ***REMOVED***
  ***REMOVED***);
***REMOVED*** else ***REMOVED***
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
***REMOVED***
  ***REMOVED***

  _setResizeEvent() ***REMOVED***
    if (this._isShown) ***REMOVED***
      EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
***REMOVED*** else ***REMOVED***
      EventHandler.off(window, EVENT_RESIZE);
***REMOVED***
  ***REMOVED***

  _hideModal() ***REMOVED***
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => ***REMOVED***
      document.body.classList.remove(CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
***REMOVED***);
  ***REMOVED***

  _showBackdrop(callback) ***REMOVED***
    EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => ***REMOVED***
      if (this._ignoreBackdropClick) ***REMOVED***
        this._ignoreBackdropClick = false;
        return;
  ***REMOVED***

      if (event.target !== event.currentTarget) ***REMOVED***
        return;
  ***REMOVED***

      if (this._config.backdrop === true) ***REMOVED***
        this.hide();
  ***REMOVED*** else if (this._config.backdrop === 'static') ***REMOVED***
        this._triggerBackdropTransition();
  ***REMOVED***
***REMOVED***);

    this._backdrop.show(callback);
  ***REMOVED***

  _isAnimated() ***REMOVED***
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  ***REMOVED***

  _triggerBackdropTransition() ***REMOVED***
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    const ***REMOVED***
      classList,
      scrollHeight,
      style
***REMOVED*** = this._element;
    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) ***REMOVED***
      return;
***REMOVED***

    if (!isModalOverflowing) ***REMOVED***
      style.overflowY = 'hidden';
***REMOVED***

    classList.add(CLASS_NAME_STATIC);

    this._queueCallback(() => ***REMOVED***
      classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) ***REMOVED***
        this._queueCallback(() => ***REMOVED***
          style.overflowY = '';
      ***REMOVED*** this._dialog);
  ***REMOVED***
  ***REMOVED*** this._dialog);

    this._element.focus();
  ***REMOVED*** // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() ***REMOVED***
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) ***REMOVED***
      this._element.style.paddingLeft = `$***REMOVED***scrollbarWidth***REMOVED***px`;
***REMOVED***

    if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) ***REMOVED***
      this._element.style.paddingRight = `$***REMOVED***scrollbarWidth***REMOVED***px`;
***REMOVED***
  ***REMOVED***

  _resetAdjustments() ***REMOVED***
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  ***REMOVED*** // Static


  static jQueryInterface(config, relatedTarget) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') ***REMOVED***
        return;
  ***REMOVED***

      if (typeof data[config] === 'undefined') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
  ***REMOVED***

      data[config](relatedTarget);
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) ***REMOVED***
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) ***REMOVED***
    event.preventDefault();
  ***REMOVED***

  EventHandler.one(target, EVENT_SHOW$3, showEvent => ***REMOVED***
    if (showEvent.defaultPrevented) ***REMOVED***
      // only register focus restorer if modal will actually get shown
      return;
***REMOVED***

    EventHandler.one(target, EVENT_HIDDEN$3, () => ***REMOVED***
      if (isVisible(this)) ***REMOVED***
        this.focus();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***);
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
***REMOVED***);
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.$***REMOVED***DATA_KEY$5***REMOVED***`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load$***REMOVED***EVENT_KEY$5***REMOVED***$***REMOVED***DATA_API_KEY$2***REMOVED***`;
const ESCAPE_KEY = 'Escape';
const Default$4 = ***REMOVED***
  backdrop: true,
  keyboard: true,
  scroll: false
***REMOVED***;
const DefaultType$4 = ***REMOVED***
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
***REMOVED***;
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$2 = `show$***REMOVED***EVENT_KEY$5***REMOVED***`;
const EVENT_SHOWN$2 = `shown$***REMOVED***EVENT_KEY$5***REMOVED***`;
const EVENT_HIDE$2 = `hide$***REMOVED***EVENT_KEY$5***REMOVED***`;
const EVENT_HIDDEN$2 = `hidden$***REMOVED***EVENT_KEY$5***REMOVED***`;
const EVENT_CLICK_DATA_API$1 = `click$***REMOVED***EVENT_KEY$5***REMOVED***$***REMOVED***DATA_API_KEY$2***REMOVED***`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss$***REMOVED***EVENT_KEY$5***REMOVED***`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Offcanvas extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  ***REMOVED*** // Getters


  static get NAME() ***REMOVED***
    return NAME$5;
  ***REMOVED***

  static get Default() ***REMOVED***
    return Default$4;
  ***REMOVED*** // Public


  toggle(relatedTarget) ***REMOVED***
    return this._isShown ? this.hide() : this.show(relatedTarget);
  ***REMOVED***

  show(relatedTarget) ***REMOVED***
    if (this._isShown) ***REMOVED***
      return;
***REMOVED***

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, ***REMOVED***
      relatedTarget
***REMOVED***);

    if (showEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) ***REMOVED***
      new ScrollBarHelper().hide();
***REMOVED***

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOW$3);

    const completeCallBack = () => ***REMOVED***
      if (!this._config.scroll) ***REMOVED***
        this._focustrap.activate();
  ***REMOVED***

      EventHandler.trigger(this._element, EVENT_SHOWN$2, ***REMOVED***
        relatedTarget
  ***REMOVED***);
***REMOVED***;

    this._queueCallback(completeCallBack, this._element, true);
  ***REMOVED***

  hide() ***REMOVED***
    if (!this._isShown) ***REMOVED***
      return;
***REMOVED***

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove(CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    const completeCallback = () => ***REMOVED***
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (!this._config.scroll) ***REMOVED***
        new ScrollBarHelper().reset();
  ***REMOVED***

      EventHandler.trigger(this._element, EVENT_HIDDEN$2);
***REMOVED***;

    this._queueCallback(completeCallback, this._element, true);
  ***REMOVED***

  dispose() ***REMOVED***
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  ***REMOVED*** // Private


  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$4,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    typeCheckConfig(NAME$5, config, DefaultType$4);
    return config;
  ***REMOVED***

  _initializeBackDrop() ***REMOVED***
    return new Backdrop(***REMOVED***
      className: CLASS_NAME_BACKDROP,
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
***REMOVED***);
  ***REMOVED***

  _initializeFocusTrap() ***REMOVED***
    return new FocusTrap(***REMOVED***
      trapElement: this._element
***REMOVED***);
  ***REMOVED***

  _addEventListeners() ***REMOVED***
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => ***REMOVED***
      if (this._config.keyboard && event.key === ESCAPE_KEY) ***REMOVED***
        this.hide();
  ***REMOVED***
***REMOVED***);
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') ***REMOVED***
        return;
  ***REMOVED***

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
  ***REMOVED***

      data[config](this);
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) ***REMOVED***
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) ***REMOVED***
    event.preventDefault();
  ***REMOVED***

  if (isDisabled(this)) ***REMOVED***
    return;
  ***REMOVED***

  EventHandler.one(target, EVENT_HIDDEN$2, () => ***REMOVED***
    // focus on trigger when it is closed
    if (isVisible(this)) ***REMOVED***
      this.focus();
***REMOVED***
  ***REMOVED***); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) ***REMOVED***
    Offcanvas.getInstance(allReadyOpen).hide();
  ***REMOVED***

  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
***REMOVED***);
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attr, allowedAttributeList) => ***REMOVED***
  const attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) ***REMOVED***
    if (uriAttrs.has(attrName)) ***REMOVED***
      return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
***REMOVED***

    return true;
  ***REMOVED***

  const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) ***REMOVED***
    if (regExp[i].test(attrName)) ***REMOVED***
      return true;
***REMOVED***
  ***REMOVED***

  return false;
***REMOVED***;

const DefaultAllowlist = ***REMOVED***
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
***REMOVED***;
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) ***REMOVED***
  if (!unsafeHtml.length) ***REMOVED***
    return unsafeHtml;
  ***REMOVED***

  if (sanitizeFn && typeof sanitizeFn === 'function') ***REMOVED***
    return sanitizeFn(unsafeHtml);
  ***REMOVED***

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const allowlistKeys = Object.keys(allowList);
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) ***REMOVED***
    const el = elements[i];
    const elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) ***REMOVED***
      el.remove();
      continue;
***REMOVED***

    const attributeList = [].concat(...el.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(attr => ***REMOVED***
      if (!allowedAttribute(attr, allowedAttributes)) ***REMOVED***
        el.removeAttribute(attr.nodeName);
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

  return createdDocument.body.innerHTML;
***REMOVED***

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.$***REMOVED***DATA_KEY$4***REMOVED***`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const DefaultType$3 = ***REMOVED***
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
***REMOVED***;
const AttachmentMap = ***REMOVED***
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
***REMOVED***;
const Default$3 = ***REMOVED***
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
***REMOVED***;
const Event$2 = ***REMOVED***
  HIDE: `hide$***REMOVED***EVENT_KEY$4***REMOVED***`,
  HIDDEN: `hidden$***REMOVED***EVENT_KEY$4***REMOVED***`,
  SHOW: `show$***REMOVED***EVENT_KEY$4***REMOVED***`,
  SHOWN: `shown$***REMOVED***EVENT_KEY$4***REMOVED***`,
  INSERTED: `inserted$***REMOVED***EVENT_KEY$4***REMOVED***`,
  CLICK: `click$***REMOVED***EVENT_KEY$4***REMOVED***`,
  FOCUSIN: `focusin$***REMOVED***EVENT_KEY$4***REMOVED***`,
  FOCUSOUT: `focusout$***REMOVED***EVENT_KEY$4***REMOVED***`,
  MOUSEENTER: `mouseenter$***REMOVED***EVENT_KEY$4***REMOVED***`,
  MOUSELEAVE: `mouseleave$***REMOVED***EVENT_KEY$4***REMOVED***`
***REMOVED***;
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.$***REMOVED***CLASS_NAME_MODAL***REMOVED***`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tooltip extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    if (typeof Popper === 'undefined') ***REMOVED***
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
***REMOVED***

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = ***REMOVED******REMOVED***;
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$3;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$4;
  ***REMOVED***

  static get Event() ***REMOVED***
    return Event$2;
  ***REMOVED***

  static get DefaultType() ***REMOVED***
    return DefaultType$3;
  ***REMOVED*** // Public


  enable() ***REMOVED***
    this._isEnabled = true;
  ***REMOVED***

  disable() ***REMOVED***
    this._isEnabled = false;
  ***REMOVED***

  toggleEnabled() ***REMOVED***
    this._isEnabled = !this._isEnabled;
  ***REMOVED***

  toggle(event) ***REMOVED***
    if (!this._isEnabled) ***REMOVED***
      return;
***REMOVED***

    if (event) ***REMOVED***
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) ***REMOVED***
        context._enter(null, context);
  ***REMOVED*** else ***REMOVED***
        context._leave(null, context);
  ***REMOVED***
***REMOVED*** else ***REMOVED***
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) ***REMOVED***
        this._leave(null, this);

        return;
  ***REMOVED***

      this._enter(null, this);
***REMOVED***
  ***REMOVED***

  dispose() ***REMOVED***
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) ***REMOVED***
      this.tip.remove();
***REMOVED***

    if (this._popper) ***REMOVED***
      this._popper.destroy();
***REMOVED***

    super.dispose();
  ***REMOVED***

  show() ***REMOVED***
    if (this._element.style.display === 'none') ***REMOVED***
      throw new Error('Please use show on visible elements');
***REMOVED***

    if (!(this.isWithContent() && this._isEnabled)) ***REMOVED***
      return;
***REMOVED***

    const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) ***REMOVED***
      return;
***REMOVED***

    const tip = this.getTipElement();
    const tipId = getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) ***REMOVED***
      tip.classList.add(CLASS_NAME_FADE$2);
***REMOVED***

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const ***REMOVED***
      container
***REMOVED*** = this._config;
    Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) ***REMOVED***
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
***REMOVED***

    if (this._popper) ***REMOVED***
      this._popper.update();
***REMOVED*** else ***REMOVED***
      this._popper = Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
***REMOVED***

    tip.classList.add(CLASS_NAME_SHOW$2);

    const customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) ***REMOVED***
      tip.classList.add(...customClass.split(' '));
***REMOVED*** // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) ***REMOVED***
      [].concat(...document.body.children).forEach(element => ***REMOVED***
        EventHandler.on(element, 'mouseover', noop);
  ***REMOVED***);
***REMOVED***

    const complete = () => ***REMOVED***
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === HOVER_STATE_OUT) ***REMOVED***
        this._leave(null, this);
  ***REMOVED***
***REMOVED***;

    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
  ***REMOVED***

  hide() ***REMOVED***
    if (!this._popper) ***REMOVED***
      return;
***REMOVED***

    const tip = this.getTipElement();

    const complete = () => ***REMOVED***
      if (this._isWithActiveTrigger()) ***REMOVED***
        return;
  ***REMOVED***

      if (this._hoverState !== HOVER_STATE_SHOW) ***REMOVED***
        tip.remove();
  ***REMOVED***

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      if (this._popper) ***REMOVED***
        this._popper.destroy();

        this._popper = null;
  ***REMOVED***
***REMOVED***;

    const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) ***REMOVED***
      [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
***REMOVED***

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
  ***REMOVED***

  update() ***REMOVED***
    if (this._popper !== null) ***REMOVED***
      this._popper.update();
***REMOVED***
  ***REMOVED*** // Protected


  isWithContent() ***REMOVED***
    return Boolean(this.getTitle());
  ***REMOVED***

  getTipElement() ***REMOVED***
    if (this.tip) ***REMOVED***
      return this.tip;
***REMOVED***

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    const tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
  ***REMOVED***

  setContent(tip) ***REMOVED***
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
  ***REMOVED***

  _sanitizeAndSetContent(template, content, selector) ***REMOVED***
    const templateElement = SelectorEngine.findOne(selector, template);

    if (!content && templateElement) ***REMOVED***
      templateElement.remove();
      return;
***REMOVED*** // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
  ***REMOVED***

  setElementContent(element, content) ***REMOVED***
    if (element === null) ***REMOVED***
      return;
***REMOVED***

    if (isElement(content)) ***REMOVED***
      content = getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) ***REMOVED***
        if (content.parentNode !== element) ***REMOVED***
          element.innerHTML = '';
          element.append(content);
    ***REMOVED***
  ***REMOVED*** else ***REMOVED***
        element.textContent = content.textContent;
  ***REMOVED***

      return;
***REMOVED***

    if (this._config.html) ***REMOVED***
      if (this._config.sanitize) ***REMOVED***
        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
  ***REMOVED***

      element.innerHTML = content;
***REMOVED*** else ***REMOVED***
      element.textContent = content;
***REMOVED***
  ***REMOVED***

  getTitle() ***REMOVED***
    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
  ***REMOVED***

  updateAttachment(attachment) ***REMOVED***
    if (attachment === 'right') ***REMOVED***
      return 'end';
***REMOVED***

    if (attachment === 'left') ***REMOVED***
      return 'start';
***REMOVED***

    return attachment;
  ***REMOVED*** // Private


  _initializeOnDelegatedTarget(event, context) ***REMOVED***
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  ***REMOVED***

  _getOffset() ***REMOVED***
    const ***REMOVED***
      offset
***REMOVED*** = this._config;

    if (typeof offset === 'string') ***REMOVED***
      return offset.split(',').map(val => Number.parseInt(val, 10));
***REMOVED***

    if (typeof offset === 'function') ***REMOVED***
      return popperData => offset(popperData, this._element);
***REMOVED***

    return offset;
  ***REMOVED***

  _resolvePossibleFunction(content) ***REMOVED***
    return typeof content === 'function' ? content.call(this._element) : content;
  ***REMOVED***

  _getPopperConfig(attachment) ***REMOVED***
    const defaultBsPopperConfig = ***REMOVED***
      placement: attachment,
      modifiers: [***REMOVED***
        name: 'flip',
        options: ***REMOVED***
          fallbackPlacements: this._config.fallbackPlacements
    ***REMOVED***
    ***REMOVED*** ***REMOVED***
        name: 'offset',
        options: ***REMOVED***
          offset: this._getOffset()
    ***REMOVED***
    ***REMOVED*** ***REMOVED***
        name: 'preventOverflow',
        options: ***REMOVED***
          boundary: this._config.boundary
    ***REMOVED***
    ***REMOVED*** ***REMOVED***
        name: 'arrow',
        options: ***REMOVED***
          element: `.$***REMOVED***this.constructor.NAME***REMOVED***-arrow`
    ***REMOVED***
    ***REMOVED*** ***REMOVED***
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
  ***REMOVED***],
      onFirstUpdate: data => ***REMOVED***
        if (data.options.placement !== data.placement) ***REMOVED***
          this._handlePopperPlacementChange(data);
    ***REMOVED***
  ***REMOVED***
***REMOVED***;
    return ***REMOVED*** ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
***REMOVED***;
  ***REMOVED***

  _addAttachmentClass(attachment) ***REMOVED***
    this.getTipElement().classList.add(`$***REMOVED***this._getBasicClassPrefix()***REMOVED***-$***REMOVED***this.updateAttachment(attachment)***REMOVED***`);
  ***REMOVED***

  _getAttachment(placement) ***REMOVED***
    return AttachmentMap[placement.toUpperCase()];
  ***REMOVED***

  _setListeners() ***REMOVED***
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => ***REMOVED***
      if (trigger === 'click') ***REMOVED***
        EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
  ***REMOVED*** else if (trigger !== TRIGGER_MANUAL) ***REMOVED***
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
  ***REMOVED***
***REMOVED***);

    this._hideModalHandler = () => ***REMOVED***
      if (this._element) ***REMOVED***
        this.hide();
  ***REMOVED***
***REMOVED***;

    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) ***REMOVED***
      this._config = ***REMOVED*** ...this._config,
        trigger: 'manual',
        selector: ''
  ***REMOVED***;
***REMOVED*** else ***REMOVED***
      this._fixTitle();
***REMOVED***
  ***REMOVED***

  _fixTitle() ***REMOVED***
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') ***REMOVED***
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) ***REMOVED***
        this._element.setAttribute('aria-label', title);
  ***REMOVED***

      this._element.setAttribute('title', '');
***REMOVED***
  ***REMOVED***

  _enter(event, context) ***REMOVED***
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) ***REMOVED***
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
***REMOVED***

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) ***REMOVED***
      context._hoverState = HOVER_STATE_SHOW;
      return;
***REMOVED***

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) ***REMOVED***
      context.show();
      return;
***REMOVED***

    context._timeout = setTimeout(() => ***REMOVED***
      if (context._hoverState === HOVER_STATE_SHOW) ***REMOVED***
        context.show();
  ***REMOVED***
  ***REMOVED*** context._config.delay.show);
  ***REMOVED***

  _leave(event, context) ***REMOVED***
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) ***REMOVED***
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
***REMOVED***

    if (context._isWithActiveTrigger()) ***REMOVED***
      return;
***REMOVED***

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) ***REMOVED***
      context.hide();
      return;
***REMOVED***

    context._timeout = setTimeout(() => ***REMOVED***
      if (context._hoverState === HOVER_STATE_OUT) ***REMOVED***
        context.hide();
  ***REMOVED***
  ***REMOVED*** context._config.delay.hide);
  ***REMOVED***

  _isWithActiveTrigger() ***REMOVED***
    for (const trigger in this._activeTrigger) ***REMOVED***
      if (this._activeTrigger[trigger]) ***REMOVED***
        return true;
  ***REMOVED***
***REMOVED***

    return false;
  ***REMOVED***

  _getConfig(config) ***REMOVED***
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => ***REMOVED***
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) ***REMOVED***
        delete dataAttributes[dataAttr];
  ***REMOVED***
***REMOVED***);
    config = ***REMOVED*** ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') ***REMOVED***
      config.delay = ***REMOVED***
        show: config.delay,
        hide: config.delay
  ***REMOVED***;
***REMOVED***

    if (typeof config.title === 'number') ***REMOVED***
      config.title = config.title.toString();
***REMOVED***

    if (typeof config.content === 'number') ***REMOVED***
      config.content = config.content.toString();
***REMOVED***

    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) ***REMOVED***
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
***REMOVED***

    return config;
  ***REMOVED***

  _getDelegateConfig() ***REMOVED***
    const config = ***REMOVED******REMOVED***;

    for (const key in this._config) ***REMOVED***
      if (this.constructor.Default[key] !== this._config[key]) ***REMOVED***
        config[key] = this._config[key];
  ***REMOVED***
***REMOVED*** // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
  ***REMOVED***

  _cleanTipClass() ***REMOVED***
    const tip = this.getTipElement();
    const basicClassPrefixRegex = new RegExp(`(^|\\s)$***REMOVED***this._getBasicClassPrefix()***REMOVED***\\S+`, 'g');
    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) ***REMOVED***
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
***REMOVED***
  ***REMOVED***

  _getBasicClassPrefix() ***REMOVED***
    return CLASS_PREFIX$1;
  ***REMOVED***

  _handlePopperPlacementChange(popperData) ***REMOVED***
    const ***REMOVED***
      state
***REMOVED*** = popperData;

    if (!state) ***REMOVED***
      return;
***REMOVED***

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Tooltip.getOrCreateInstance(this, config);

      if (typeof config === 'string') ***REMOVED***
        if (typeof data[config] === 'undefined') ***REMOVED***
          throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
    ***REMOVED***

        data[config]();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.$***REMOVED***DATA_KEY$3***REMOVED***`;
const CLASS_PREFIX = 'bs-popover';
const Default$2 = ***REMOVED*** ...Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
***REMOVED***;
const DefaultType$2 = ***REMOVED*** ...Tooltip.DefaultType,
  content: '(string|element|function)'
***REMOVED***;
const Event$1 = ***REMOVED***
  HIDE: `hide$***REMOVED***EVENT_KEY$3***REMOVED***`,
  HIDDEN: `hidden$***REMOVED***EVENT_KEY$3***REMOVED***`,
  SHOW: `show$***REMOVED***EVENT_KEY$3***REMOVED***`,
  SHOWN: `shown$***REMOVED***EVENT_KEY$3***REMOVED***`,
  INSERTED: `inserted$***REMOVED***EVENT_KEY$3***REMOVED***`,
  CLICK: `click$***REMOVED***EVENT_KEY$3***REMOVED***`,
  FOCUSIN: `focusin$***REMOVED***EVENT_KEY$3***REMOVED***`,
  FOCUSOUT: `focusout$***REMOVED***EVENT_KEY$3***REMOVED***`,
  MOUSEENTER: `mouseenter$***REMOVED***EVENT_KEY$3***REMOVED***`,
  MOUSELEAVE: `mouseleave$***REMOVED***EVENT_KEY$3***REMOVED***`
***REMOVED***;
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Popover extends Tooltip ***REMOVED***
  // Getters
  static get Default() ***REMOVED***
    return Default$2;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$3;
  ***REMOVED***

  static get Event() ***REMOVED***
    return Event$1;
  ***REMOVED***

  static get DefaultType() ***REMOVED***
    return DefaultType$2;
  ***REMOVED*** // Overrides


  isWithContent() ***REMOVED***
    return this.getTitle() || this._getContent();
  ***REMOVED***

  setContent(tip) ***REMOVED***
    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
  ***REMOVED*** // Private


  _getContent() ***REMOVED***
    return this._resolvePossibleFunction(this._config.content);
  ***REMOVED***

  _getBasicClassPrefix() ***REMOVED***
    return CLASS_PREFIX;
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Popover.getOrCreateInstance(this, config);

      if (typeof config === 'string') ***REMOVED***
        if (typeof data[config] === 'undefined') ***REMOVED***
          throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
    ***REMOVED***

        data[config]();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.$***REMOVED***DATA_KEY$2***REMOVED***`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = ***REMOVED***
  offset: 10,
  method: 'auto',
  target: ''
***REMOVED***;
const DefaultType$1 = ***REMOVED***
  offset: 'number',
  method: 'string',
  target: '(string|element)'
***REMOVED***;
const EVENT_ACTIVATE = `activate$***REMOVED***EVENT_KEY$2***REMOVED***`;
const EVENT_SCROLL = `scroll$***REMOVED***EVENT_KEY$2***REMOVED***`;
const EVENT_LOAD_DATA_API = `load$***REMOVED***EVENT_KEY$2***REMOVED***$***REMOVED***DATA_API_KEY$1***REMOVED***`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `$***REMOVED***SELECTOR_NAV_LINKS***REMOVED***, $***REMOVED***SELECTOR_LIST_ITEMS***REMOVED***, .$***REMOVED***CLASS_NAME_DROPDOWN_ITEM***REMOVED***`;
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollSpy extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  ***REMOVED*** // Getters


  static get Default() ***REMOVED***
    return Default$1;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME$2;
  ***REMOVED*** // Public


  refresh() ***REMOVED***
    const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(element => ***REMOVED***
      const targetSelector = getSelectorFromElement(element);
      const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) ***REMOVED***
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) ***REMOVED***
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
    ***REMOVED***
  ***REMOVED***

      return null;
***REMOVED***).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => ***REMOVED***
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
***REMOVED***);
  ***REMOVED***

  dispose() ***REMOVED***
    EventHandler.off(this._scrollElement, EVENT_KEY$2);
    super.dispose();
  ***REMOVED*** // Private


  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default$1,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    config.target = getElement(config.target) || document.documentElement;
    typeCheckConfig(NAME$2, config, DefaultType$1);
    return config;
  ***REMOVED***

  _getScrollTop() ***REMOVED***
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  ***REMOVED***

  _getScrollHeight() ***REMOVED***
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  ***REMOVED***

  _getOffsetHeight() ***REMOVED***
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  ***REMOVED***

  _process() ***REMOVED***
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) ***REMOVED***
      this.refresh();
***REMOVED***

    if (scrollTop >= maxScroll) ***REMOVED***
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) ***REMOVED***
        this._activate(target);
  ***REMOVED***

      return;
***REMOVED***

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) ***REMOVED***
      this._activeTarget = null;

      this._clear();

      return;
***REMOVED***

    for (let i = this._offsets.length; i--;) ***REMOVED***
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) ***REMOVED***
        this._activate(this._targets[i]);
  ***REMOVED***
***REMOVED***
  ***REMOVED***

  _activate(target) ***REMOVED***
    this._activeTarget = target;

    this._clear();

    const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `$***REMOVED***selector***REMOVED***[data-bs-target="$***REMOVED***target***REMOVED***"],$***REMOVED***selector***REMOVED***[href="$***REMOVED***target***REMOVED***"]`);
    const link = SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add(CLASS_NAME_ACTIVE$1);

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) ***REMOVED***
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
***REMOVED*** else ***REMOVED***
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => ***REMOVED***
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, `$***REMOVED***SELECTOR_NAV_LINKS***REMOVED***, $***REMOVED***SELECTOR_LIST_ITEMS***REMOVED***`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => ***REMOVED***
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, ***REMOVED***
      relatedTarget: target
***REMOVED***);
  ***REMOVED***

  _clear() ***REMOVED***
    SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') ***REMOVED***
        return;
  ***REMOVED***

      if (typeof data[config] === 'undefined') ***REMOVED***
        throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
  ***REMOVED***

      data[config]();
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API, () => ***REMOVED***
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.$***REMOVED***DATA_KEY$1***REMOVED***`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide$***REMOVED***EVENT_KEY$1***REMOVED***`;
const EVENT_HIDDEN$1 = `hidden$***REMOVED***EVENT_KEY$1***REMOVED***`;
const EVENT_SHOW$1 = `show$***REMOVED***EVENT_KEY$1***REMOVED***`;
const EVENT_SHOWN$1 = `shown$***REMOVED***EVENT_KEY$1***REMOVED***`;
const EVENT_CLICK_DATA_API = `click$***REMOVED***EVENT_KEY$1***REMOVED***$***REMOVED***DATA_API_KEY***REMOVED***`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Tab extends BaseComponent ***REMOVED***
  // Getters
  static get NAME() ***REMOVED***
    return NAME$1;
  ***REMOVED*** // Public


  show() ***REMOVED***
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) ***REMOVED***
      return;
***REMOVED***

    let previous;
    const target = getElementFromSelector(this._element);

    const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

    if (listElement) ***REMOVED***
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
***REMOVED***

    const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, ***REMOVED***
      relatedTarget: this._element
***REMOVED***) : null;
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, ***REMOVED***
      relatedTarget: previous
***REMOVED***);

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._activate(this._element, listElement);

    const complete = () => ***REMOVED***
      EventHandler.trigger(previous, EVENT_HIDDEN$1, ***REMOVED***
        relatedTarget: this._element
  ***REMOVED***);
      EventHandler.trigger(this._element, EVENT_SHOWN$1, ***REMOVED***
        relatedTarget: previous
  ***REMOVED***);
***REMOVED***;

    if (target) ***REMOVED***
      this._activate(target, target.parentNode, complete);
***REMOVED*** else ***REMOVED***
      complete();
***REMOVED***
  ***REMOVED*** // Private


  _activate(element, container, callback) ***REMOVED***
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) ***REMOVED***
      active.classList.remove(CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
***REMOVED*** else ***REMOVED***
      complete();
***REMOVED***
  ***REMOVED***

  _transitionComplete(element, active, callback) ***REMOVED***
    if (active) ***REMOVED***
      active.classList.remove(CLASS_NAME_ACTIVE);
      const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) ***REMOVED***
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
  ***REMOVED***

      if (active.getAttribute('role') === 'tab') ***REMOVED***
        active.setAttribute('aria-selected', false);
  ***REMOVED***
***REMOVED***

    element.classList.add(CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') ***REMOVED***
      element.setAttribute('aria-selected', true);
***REMOVED***

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$1)) ***REMOVED***
      element.classList.add(CLASS_NAME_SHOW$1);
***REMOVED***

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') ***REMOVED***
      parent = parent.parentNode;
***REMOVED***

    if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) ***REMOVED***
      const dropdownElement = element.closest(SELECTOR_DROPDOWN);

      if (dropdownElement) ***REMOVED***
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
  ***REMOVED***

      element.setAttribute('aria-expanded', true);
***REMOVED***

    if (callback) ***REMOVED***
      callback();
***REMOVED***
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Tab.getOrCreateInstance(this);

      if (typeof config === 'string') ***REMOVED***
        if (typeof data[config] === 'undefined') ***REMOVED***
          throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
    ***REMOVED***

        data[config]();
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) ***REMOVED***
  if (['A', 'AREA'].includes(this.tagName)) ***REMOVED***
    event.preventDefault();
  ***REMOVED***

  if (isDisabled(this)) ***REMOVED***
    return;
  ***REMOVED***

  const data = Tab.getOrCreateInstance(this);
  data.show();
***REMOVED***);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.$***REMOVED***DATA_KEY***REMOVED***`;
const EVENT_MOUSEOVER = `mouseover$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_MOUSEOUT = `mouseout$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_FOCUSIN = `focusin$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_FOCUSOUT = `focusout$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_HIDE = `hide$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_HIDDEN = `hidden$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_SHOW = `show$***REMOVED***EVENT_KEY***REMOVED***`;
const EVENT_SHOWN = `shown$***REMOVED***EVENT_KEY***REMOVED***`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = ***REMOVED***
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
***REMOVED***;
const Default = ***REMOVED***
  animation: true,
  autohide: true,
  delay: 5000
***REMOVED***;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Toast extends BaseComponent ***REMOVED***
  constructor(element, config) ***REMOVED***
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  ***REMOVED*** // Getters


  static get DefaultType() ***REMOVED***
    return DefaultType;
  ***REMOVED***

  static get Default() ***REMOVED***
    return Default;
  ***REMOVED***

  static get NAME() ***REMOVED***
    return NAME;
  ***REMOVED*** // Public


  show() ***REMOVED***
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    this._clearTimeout();

    if (this._config.animation) ***REMOVED***
      this._element.classList.add(CLASS_NAME_FADE);
***REMOVED***

    const complete = () => ***REMOVED***
      this._element.classList.remove(CLASS_NAME_SHOWING);

      EventHandler.trigger(this._element, EVENT_SHOWN);

      this._maybeScheduleHide();
***REMOVED***;

    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW);

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  ***REMOVED***

  hide() ***REMOVED***
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) ***REMOVED***
      return;
***REMOVED***

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) ***REMOVED***
      return;
***REMOVED***

    const complete = () => ***REMOVED***
      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove(CLASS_NAME_SHOWING);

      this._element.classList.remove(CLASS_NAME_SHOW);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
***REMOVED***;

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  ***REMOVED***

  dispose() ***REMOVED***
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW)) ***REMOVED***
      this._element.classList.remove(CLASS_NAME_SHOW);
***REMOVED***

    super.dispose();
  ***REMOVED*** // Private


  _getConfig(config) ***REMOVED***
    config = ***REMOVED*** ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : ***REMOVED******REMOVED***)
***REMOVED***;
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  ***REMOVED***

  _maybeScheduleHide() ***REMOVED***
    if (!this._config.autohide) ***REMOVED***
      return;
***REMOVED***

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) ***REMOVED***
      return;
***REMOVED***

    this._timeout = setTimeout(() => ***REMOVED***
      this.hide();
  ***REMOVED*** this._config.delay);
  ***REMOVED***

  _onInteraction(event, isInteracting) ***REMOVED***
    switch (event.type) ***REMOVED***
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
***REMOVED***

    if (isInteracting) ***REMOVED***
      this._clearTimeout();

      return;
***REMOVED***

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) ***REMOVED***
      return;
***REMOVED***

    this._maybeScheduleHide();
  ***REMOVED***

  _setListeners() ***REMOVED***
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  ***REMOVED***

  _clearTimeout() ***REMOVED***
    clearTimeout(this._timeout);
    this._timeout = null;
  ***REMOVED*** // Static


  static jQueryInterface(config) ***REMOVED***
    return this.each(function () ***REMOVED***
      const data = Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') ***REMOVED***
        if (typeof data[config] === 'undefined') ***REMOVED***
          throw new TypeError(`No method named "$***REMOVED***config***REMOVED***"`);
    ***REMOVED***

        data[config](this);
  ***REMOVED***
***REMOVED***);
  ***REMOVED***

***REMOVED***

enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

defineJQueryPlugin(Toast);

export ***REMOVED*** Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip ***REMOVED***;
//# sourceMappingURL=bootstrap.esm.js.map
