/**
 * Module dependencies.
 */
const passport = require('passport-strategy')
//import util from 'util'
const util = require('util')
import { lookup } from './utils'

/*
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
export function Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  if (!verify) { throw new TypeError('WeixinStrategy requires a verify callback'); }
  
  this.id = options.idField || 'id';
  this.autoRegister = options.autoRegisterField || 'autoRegister';
  this.name = 'weixin';
  this._verify = verify;
  this._passReqToCallback = options.passReqToCallback;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the contents of a form submission.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var id = lookup(req.body, this.id) || lookup(req.query, this.id);
  var autoRegister = lookup(req.body, this.autoRegister) || lookup(req.query, this.autoRegister);
  
  if (!id) {
    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);
  }
  
  var self = this;
  
  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
  
  try {
    if (self._passReqToCallback) {
      this._verify(req, id, autoRegister, verified);
    } else {
      this._verify(id, autoRegister, verified);
    }
  } catch (ex) {
    return self.error(ex);
  }
};
