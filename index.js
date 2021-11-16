const fetch = require("node-fetch");
const { load } = require("protobufjs");

const STMKEY = "stm_developer_apikey";
const URL = "https://api.stm.info/pub/od/gtfs-rt/ic/v2/vehiclePositions";

async function main() {
  const schema = await load("./gtfs-realtime.proto");
  const FeedMessage = schema.lookupType("transit_realtime.FeedMessage");
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      apikey: STMKEY,
    },
  });
  const arrayBuffer = await response.arrayBuffer();
  const array = new Uint8Array(arrayBuffer);
  const decoded = FeedMessage.decode(array);
  const vehicles = decoded.entity;
  console.log(vehicles);
  console.log(decoded.header);
}

main().catch((error) => console.error(error));
