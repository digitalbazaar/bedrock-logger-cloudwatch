/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const config = require('bedrock').config;

config.loggers.cloudwatch = {
  // explicitly set credentials here, or allow normal AWS SDK discovery
  // awsAccessKeyId: 'accesskey',
  // awsSecretKey: 'secretkey',

  // the region must be set explicitly
  awsRegion: 'us-east-1',

  // if the AWS permissions allow, new groups and streams will be created
  logGroupName: 'bedrock-cloudwatch-group', // required
  logStreamName: 'bedrock-cloudwatch-stream', // required

  json: false,
  level: 'debug',
  silent: false, // required, otherwise only master process will log
  timestamp: true
};

config.loggers.categories.app.push('cloudwatch');
