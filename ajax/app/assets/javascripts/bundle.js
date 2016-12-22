/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let FollowToggle = __webpack_require__ (1);
	
	$(function() {
	  $("button.follow-toggle").each((index, element) => {
	    new FollowToggle(element);
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const apiUtil = __webpack_require__ (2);
	
	class FollowToggle {
	  constructor(el) {
	    this.$el = $(el);
	
	    this.userId = this.$el.data("user-id");
	    this.followState = this.$el.data("initial-follow-state");
	    this.render();
	
	    this.$el.on("click", event => {
	      this.handleClick(event);
	    });
	  }
	
	  render() {
	    this.$el.text(this.followState === "unfollowed" ? "Follow!" : "Unfollow!");
	  }
	
	  toggleButton() {
	    this.followState = (this.followState === "unfollowed") ? "follow" : "unfollowed";
	    this.render();
	  }
	
	  handleClick(e) {
	    e.preventDefault();
	    this.$el.text("pending");
	    this.$el.prop("disabled", true);
	    let request;
	    if (this.followState === "unfollowed") {
	      request = apiUtil.followUser(this.userId);
	    } else {
	      request = apiUtil.unfollowUser(this.userId);
	    }
	    request.then(() => {
	      this.toggleButton();
	      this.$el.prop("disabled", false);
	    });
	  }
	}
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const APIUtil = {
	  followUser: id => APIUtil.updateFollowing(id, "POST"),
	
	  unfollowUser: id => APIUtil.updateFollowing(id, "DELETE"),
	
	  updateFollowing: (id, method) => {
	    return $.ajax({
	      url: `/users/${id}/follow`,
	      dataType: "json",
	      method
	    });
	
	  }
	};
	
	
	module.exports = APIUtil;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map