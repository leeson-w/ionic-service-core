import { App } from "./app";
import { IonicPlatform } from "./core";
import { EventEmitter } from "./events";
import { Logger } from "./logger";
import { Promise, DeferredPromise } from "./promise";
import { Request, Response, APIRequest, APIResponse } from "./request";
import { Settings } from "./settings";
import { Storage } from "./storage";
import { User } from "./user";


// Declare the window object
if (typeof Ionic === 'undefined') { window.Ionic = {}; }

// Ionic Namespace
Ionic.Core = IonicPlatform;
Ionic.User = User;

// IO Namespace
Ionic.IO = {};
Ionic.IO.App = App;
Ionic.IO.EventEmitter = EventEmitter;
Ionic.IO.Logger = Logger;
Ionic.IO.Promise = Promise;
Ionic.IO.DeferredPromise = DeferredPromise;
Ionic.IO.Request = Request;
Ionic.IO.Response = Response;
Ionic.IO.APIRequest = APIRequest;
Ionic.IO.APIResponse = APIResponse;
Ionic.IO.Storage = Storage;
Ionic.IO.Settings = Settings;



// Provider a single storage for services that have previously been registered
var serviceStorage = {};

Ionic.io = function() {
  if (typeof Ionic.IO.main === 'undefined') {
    Ionic.IO.main = new Ionic.IO.Core();
  }
  return Ionic.IO.main;
};

Ionic.getService = function(name) {
  if (typeof serviceStorage[name] === 'undefined' || !serviceStorage[name]) {
    return false;
  }
  return serviceStorage[name];
};

Ionic.addService = function(name, service, force) {
  if (service && typeof serviceStorage[name] === 'undefined') {
    serviceStorage[name] = service;
  } else if (service && force) {
    serviceStorage[name] = service;
  }
};

Ionic.removeService = function(name) {
  if (typeof serviceStorage[name] !== 'undefined') {
    delete serviceStorage[name];
  }
};
