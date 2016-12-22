const apiUtil = require ("./api_util.js");

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
