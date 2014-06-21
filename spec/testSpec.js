describe('strm.auth.service', function () {
  'use strict';

  var $rootScope
    , $http
    , $httpBackend
    , $document
    , status
    , userInfo
    , messages
    , service
    , queue;

  beforeEach(module('strm.auth.service', 'mock-templates'));

  beforeEach(inject(function(_$rootScope_, _$document_, _$httpBackend_, _$http_) {
    $rootScope = _$rootScope_;
    $document = _$document_;
    $httpBackend = _$httpBackend_;
    $http = _$http_;

    userInfo = { id: '1234567890', email: 'jo@bloggs.com', firstName: 'Jo', lastName: 'Bloggs'};
    $httpBackend.when('GET', '/user').respond(200, { user: userInfo });
  }));

  beforeEach(inject(function($injector) {
    service = $injector.get('authService');
    queue = $injector.get('authQueue');
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('isAuthenticated', function () {

    it('should return false for initial state', function () {
      service.isAuthenticated().should.be.false;
    });

    it('should return true if we have a current user', function () {
      service.currentUser = userInfo;
      service.isAuthenticated().should.be.true;
    });

  });

  describe('isAdmin', function () {

    it('should return false is no admin property', function () {
      service.isAdmin().should.be.false;
    });

    it('should return true if user.admin ===  true', function () {
      userInfo.admin = true;
      service.currentUser = userInfo;
      service.isAdmin().should.be.true;
    });

  });

  describe('showLogin', function() {

    it('should open the modal window', function () {
      service.showLogin();

      var body = $document.find('body');
      body.find('form.login-form').should.be.defined;
    });

  });

  describe('login', function () {

    it('sould send a http request to login the specified user', function () {

      $httpBackend.when('POST', '/login').respond(200, { user: userInfo });
      $httpBackend.expect('POST', '/login');

      service.login('email', 'password');
      $httpBackend.flush();

      service.currentUser.should.be.eql(userInfo);
    });

    it('should call queue.retryAll after a successful login', function () {

      $httpBackend.when('POST', '/login').respond(200, { user: userInfo });

      sinon.spy(queue, 'retryAll');

      service.showLogin();
      service.login('email', 'password');
      $httpBackend.flush();

      queue.retryAll.should.have.been.called;

      service.currentUser.should.be.eql(userInfo);
    });

    it('should not call queue.retryAll after a login failure', function () {

      $httpBackend.when('POST', '/login').respond(200, { user: null });

      sinon.spy(queue, 'retryAll');

      queue.retryAll.should.not.have.been.called;
      service.showLogin();
      service.login('email', 'password');
      $httpBackend.flush();
      queue.retryAll.should.not.have.been.called;
    });

    it('should return true to success handlers if the user is authenticated', function () {
      $httpBackend.when('POST', '/login').respond(200, { user: userInfo });
      service.login('email', 'password').then(function (loggedIn) {
        loggedIn.should.be.true;
      });
      $httpBackend.flush();
    });

    it('should return false to success handlers if the user was not authenticated', function () {
      $httpBackend.when('POST', '/login').respond(200, { user: undefined });
      service.login('email', 'password').then(function (loggedIn) {
        loggedIn.should.be.false;
      });
      $httpBackend.flush();
    });

  });

  describe('logout', function () {
    var $location;
    beforeEach(inject(function (_$location_) {
      $location = _$location_;
      sinon.spy($location, 'path');
    }));

    beforeEach(function () {
      $httpBackend.when('POST', '/logout').respond(200, {});
    });

    afterEach(function () {
      $location.path.restore();
    });

    it('should send a http post to clear the current logged in user', function () {
      $httpBackend.expect('POST', '/logout');
      service.logout();
      $httpBackend.flush();
    });

    it('should redirect to / by default', function () {
      $httpBackend.expect('POST', '/logout');
      service.logout();
      $httpBackend.flush();
      $location.path.calledWith('/');
    });

    it('should redirect to the path specified in the first parameter', function () {
      $httpBackend.expect('POST', '/logout');
      service.logout('/other/path');
      $httpBackend.flush();
      $location.path.calledWith('/other/path');
    });
  });

  describe('currentUser', function () {

    it('should be unauthenticated to begin with', function () {
      service.isAuthenticated().should.be.false;
      service.isAdmin().should.be.false;
    });

    it('should be authenticated if we update with user info', function () {
      service.currentUser = userInfo;
      service.isAuthenticated().should.be.true;
      service.isAdmin().should.be.false;
      service.currentUser.should.eql(userInfo);
    });

    it('should be admin if we update with admin user info', function () {
      userInfo.admin = true;
      service.currentUser = userInfo;
      service.isAuthenticated().should.be.true;
      service.isAdmin().should.be.true;
      service.currentUser.should.eql(userInfo);
    });

    it('should not be authenticated or admin if we clear the user', function () {
      var userInfo = { admin: true };
      service.currentUser = userInfo;
      service.isAuthenticated().should.be.true;
      service.isAdmin().should.be.true;
      service.currentUser.should.eql(userInfo);

      service.currentUser = null;
      service.isAuthenticated().should.be.false;
      service.isAdmin().should.be.false;
    });

  });

  describe('requestCurrentUser', function () {

    it('should makes a GET request to user url', function () {
      service.isAuthenticated().should.be.false;
      $httpBackend.expect('GET', '/user');
      var resolved = false;
      service.requestCurrentUser().then(function (data) {
        resolved = true;
        service.isAuthenticated().should.be.true;
        service.currentUser.should.eql(userInfo);
      });
      $httpBackend.flush();
      resolved.should.be.true;
    });

    it('returns the current user immediately if they are already authenticated', function () {
      var resolved = false;
      service.currentUser = userInfo;
      service.isAuthenticated().should.be.true;
      service.requestCurrentUser().then(function (data) {
        resolved = true;
        service.currentUser.should.eql(userInfo);
      });
      // resolved.should.be.true;
    });

  });

});
