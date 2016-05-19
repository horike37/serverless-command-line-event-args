[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Build Status](https://travis-ci.org/horike37/serverless-command-line-event-args.svg?branch=master)](https://travis-ci.org/horike37/serverless-command-line-event-args)
# Serverless CommandLine Event Args
## Overview
This module is Serverless Framework plugin. Event JSON passes a Lambda function in commandline.

## Usage
Execute your Lambda function. Add `-e '<JSON>'`.

    $ serverless function run -e '{"aaa":"ccc"}'
    
it is displayed `ccc`.

    module.exports.handler = function(event, context, cb) {
        console.log(event.aaa);
    };

## Install
Execute npm install in your Serverless project.

    $ npm install serverless-command-line-event-args
    
add the plugin to your s-project.json file

    "plugins": [
      "serverless-command-line-event-args"
    ]
