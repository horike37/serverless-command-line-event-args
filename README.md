[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
# Serverless CommandLine Event Args
## Overview
This is a Serverless Framework plugin. Event JSON passes a Lambda function in commandline.
Support to Serverless 1.0 

## Usage
Execute your Lambda function. Add `-e '<JSON>'` or `--event '<JSON>'`.

    $ serverless invoke -f YourFunction --event '{"foo":"var"}'
    
it is displayed `{"foo":"var"}`.

    module.exports.handler = function(event, context, cb) {
        console.log(event);
    };

## Install
Execute npm install in your Serverless project.

    $ npm install serverless-command-line-event-args
    
add the plugin to your serverless.yml file

```yml
plugins:
  - serverless-command-line-event-args
```
