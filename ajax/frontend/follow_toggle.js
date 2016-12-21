class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
  }

  render() {
    this.$el.text(this.followState === "unfollowed" ? "Follow!" : "Unfollow!");
  }

  toggleButton() {

    // console.log(this);
    this.followState = (this.followState === "unfollowed") ? "follow" : "unfollowed";
    this.render();
    // console.log(this.data("initial-follow-state"));
  }
}


module.exports = FollowToggle;
