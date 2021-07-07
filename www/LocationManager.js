/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var exec = require('cordova/exec');
var _ = require('com.aryxe.cordova.beacon.underscorejs');
var Q = require('com.aryxe.cordova.beacon.Q');

var Regions = require('com.aryxe.cordova.beacon.Regions');
var Delegate = require('com.aryxe.cordova.beacon.Delegate');

var Region = require('com.aryxe.cordova.beacon.Region');
var CircularRegion = require('com.aryxe.cordova.beacon.CircularRegion');
var BeaconRegion = require('com.aryxe.cordova.beacon.BeaconRegion');

/**
 * Creates an instance of the plugin.
 * 
 * Important note: Creating multiple instances is expected to break the delegate
 * callback mechanism, as the native layer can only handle one  callback ID at a 
 * time.
 *
 * @constructor {LocationManager}
 */

 function LocationManager (){	
 }
 