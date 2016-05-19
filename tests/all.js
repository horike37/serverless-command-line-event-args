'use strict';

const Serverless = require('serverless'),
      path       = require('path'),
      chai       = require('chai'),
      should     = chai.should();

let s, plugin, CmdEventPlugin, instance;

describe('ServerlessCmdEvent', function() {
  beforeEach(function(done) {
    this.timeout(0);

    s = new Serverless();

    s.init().then(function() {
      CmdEventPlugin = require('..')(s);
      plugin = new CmdEventPlugin(s);

      s.addPlugin(plugin);
      s.config.projectPath = __dirname;
      s.setProject(new s.classes.Project({
        stages: {
          dev: { regions: { 'ap-northeast-1': {} }}
        },
        variables: {
          project: 'serverless-project',
          stage: 'dev',
          region: 'ap-northeast-1'
        }
      }));
      done();
    });
  });

  describe('#getName()', function() {
    it('should return the correct name', function() {
      CmdEventPlugin.getName().should.equal('commandLineEventArgs');
    });
  });
  
  describe('#registerHooks()', function() {
    it('should register hooks', function() {
      s.hooks.functionRunPre.should.have.length(1);
      s.hooks.functionRunPre[0].name.should.equal('bound _hookPre');
    });
  });
  
  describe('#_hookPre()', function() {
    it('should set event JSON in event.data', function(done) {
      let args = { 
                   options: { 
                     region: null,
                     stage: null,
                     runDeployed: null,
                     invocationType: null,
                     log: null,
                     event: '{"aaa":"ccc"}',
                     name: undefined
                   },
                   data: {} 
                 };
                
      plugin._hookPre(args).then(function(evt) {
        evt.data.should.have.property('event');
        evt.data.event.should.have.property('aaa', 'ccc');
        done();
      });
    });
  });
});
