//import moment from "moment";
import { Model } from "@vuex-orm/core";

export default class Clip extends Model {
  static entity = "clips";

  static fields() {
    return {
      id: this.attr(""),
      title: this.string(),
      roomId: this.attr(null),
      duration: this.number(0),
      component: this.attr(null),
    };
  }

  get formattedDate() {
    // return moment(this.date).format("MMM D, YYYY");
  }
}
