import Room from "@/models/Room";
import Clip from "@/models/Clip";

import rooms from "@/data/rooms";
import clips from "@/data/clips";

Room.insert({
  data: rooms,
});

Clip.insert({
  data: clips,
});
