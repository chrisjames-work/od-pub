import { Database } from "@vuex-orm/core";

import Room from "@/models/Room";
import Clip from "@/models/Clip";

const database = new Database();

database.register(Room);
database.register(Clip);

export default database;
