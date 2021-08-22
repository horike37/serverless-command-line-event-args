'use strict';
const  BbPromise = require('bluebird');

class ServerlessCommandLineEventArgs {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {
      invoke: {
        options: {
          event: {
            usage: 'Event JSON passes function (e.g. --event \'{"foo":"var"}\' or -e \'{"foo":"var"}\')',
            shortcut: 'e',
            type: 'string',
          }
        }
      },
    };

    this.hooks = {
      'before:invoke:invoke': this.setEvent.bind(this)
    }
  }

  setEvent() {
    if ( this.options.event !== undefined || this.options.event !== true ) {
      if ( this.isJson(this.options.event) ) {
        this.options.data = JSON.parse(this.options.event)
      } else {
        this.options.data = this.options.event
      }
    }
    return BbPromise.resolve(this);
  }

  isJson(arg) {
    if (typeof(arg) !== "string") {
      return false;
    }

    try {
      var arg = (!JSON) ? eval("(" + arg + ")") : JSON.parse(arg);
      return true;
    } catch(e) {
      return false;
    }
  }
}
module.exports = ServerlessCommandLineEventArgs;
