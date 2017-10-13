/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const config = bedrock.config;
const WinstonCloudWatch = require('winston-cloudwatch');

require('./config');

bedrock.events.on('bedrock-loggers.init', () => bedrock.loggers.addTransport(
  'cloudwatch', new WinstonCloudWatch(config.loggers.cloudwatch)));
