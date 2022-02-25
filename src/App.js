import { useEffect } from "react";
import Comments from "./components/comments/Comments";
import data from "./data.json";
//* New Fetch to solve update UI issue

import { fetch_comments } from "./redux";
import { useDispatch, useSelector } from "react-redux";

const fetchData = async () => {
  const dataLs = localStorage.getItem("allData");
  if (dataLs) {
    const dataParsed = JSON.parse(dataLs);
    return dataParsed;
  } else {
    localStorage.setItem("allData", JSON.stringify(data));
    return data;
  }
};
//* END
function App() {
  const dataReady = useSelector((state) => state.newChange);
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state);
  const sortedComments = comments.sort(function (a, b) {
    return a.id - b.id;
  });

  //! come from comments
  useEffect(() => {
    // console.log("comments useEffect");
    if (!dataReady) {
      const myData = fetchData();
      myData
        .then((res) => {
          dispatch(fetch_comments(res));
        })
        .catch((err) => console.log(err));
    }
  }, [dataReady]);
  //!

  return <Comments data={sortedComments} dataReady={dataReady} />;
}

export default App;
