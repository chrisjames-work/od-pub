import { Model } from "@vuex-orm/core";

import Clip from "./Clip";

export default class Room extends Model {
  static entity = "rooms";

  static fields() {
    return {
      id: this.attr(""),
      name: this.string(""),
      ident: this.attr(""),
      live: this.attr(false),
      playlist: this.hasMany(Clip, "roomId"),
    };
  }

  get duration() {
    return this.transactions.reduce((a, t) => a + t.amount || 0, 0);
  }
}
