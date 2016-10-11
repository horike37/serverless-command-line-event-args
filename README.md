[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
# Serverless CommandLine Event Args
## Overview
This is a Serverless Framework plugin. Event JSON passes a Lambda function in commandline when you execute `serverless invoke`.
Support to Serverless 1.0.

## Usage
Execute your Lambda function. Add `-e '<JSON>'` or `--event '<JSON>'`.

    $ serverless invoke -f YourFunction --event '{"foo":"var"}'
    
The following example are displayed `{"foo":"var"}`.

    module.exports.handler = function(event, context, cb) {
        console.log(event);
    };

## Install
Execute npm install in your Serverless project.

    $ npm install serverless-command-line-event-args
    
Add the plugin to your `serverless.yml` file

```yml
plugins:
  - serverless-command-line-event-args
```
