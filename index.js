'use strict';
const  BbPromise = require('bluebird');
  
module.exports = function(S) { 

  class commandLineEventArgs extends S.classes.Plugin {
    constructor() {
      super();
      this.name = 'commandLineEventArgs';
      let args = { option: 'event',
                   shortcut: 'e',
                   description: 'Event JSON passes function'};
      S.commands.function.run.options.push(args);
    }

    registerHooks() {
      S.addHook(this._hookPre.bind(this), {
        action: 'functionRun',
        event:  'pre'
      });
      return BbPromise.resolve();
    }

    _hookPre(evt) {
      return new BbPromise(function (resolve, reject) {
        if (evt.options.event !== null) {
          evt.data.event = JSON.parse(evt.options.event);
        }
        return resolve(evt);
      });
    }
  }
  return commandLineEventArgs;

};