[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
# Serverless CommandLine Event Args
## Overview
This module is Serverless Framework plugin. Event JSON passes a Lambda function on CommandLine.

    $ serverless function run -e '{"aaa":"ccc"}'

## Install
Execute npm install in your Serverless project.

    $ npm install serverless-command-line-event-args
    
add the plugin to your s-project.json file

    "plugins": [
      "serverless-command-line-event-args"
    ]
