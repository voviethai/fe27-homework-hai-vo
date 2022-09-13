import TravelItem from "./TravelItem";
import "./TravelList.scss";
const travelList = [
  {
    title: "Family Safari Vacation To The Home Of The Gods",
    developer: "Norman",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    title: "Travelagent India",
    developer: "Florence Keller",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    title: "Perfect Scrambled Eggs",
    developer: "Norman",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    title: "Famous Names In Barbecue",
    developer: "Florence Keller",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
];
function TravelList(props) {
  return (
    <div className="travel-list">
      {travelList.map((item, key) => {
        return (
          <TravelItem
            key={key}
            id={key + 1}
            title={item.title}
            developer={item.developer}
            description={item.description}
          ></TravelItem>
        );
      })}
    </div>
  );
}

export default TravelList;
