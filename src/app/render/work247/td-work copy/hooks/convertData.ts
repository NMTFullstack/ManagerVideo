import { DataTypeResult } from "../interfaces";
interface entryType {
  img?: string;
  title?: string;
}
const ConvertTimeOneBlog = async (data: string[][], imgs: any) => {
  let combinedArray: any = [];
  let stt = 0;
  await data.forEach(function (title: string[], index: number) {
    let titleText: string = title[0];
    let entry: entryType = {
      title: titleText,
    };
    let nextTitle: string = "";
    if (index < data.length - 1) {
      let next = data[index + 1];
      nextTitle = next[0];
    }
    if (!nextTitle.includes(".1")) {
      entry.img = imgs[stt];
      stt++;
    }
    combinedArray.push(entry);
  });
  return combinedArray;
};
const convertTimeMiniSecond = (data: any) => {
  const newData = data.map((d: any) => (d[1] + 12) * 1000);
  return newData;
};

export const handleConvertData = async (data: DataTypeResult) => {
  if (
    data?.news_audio &&
    data?.news_audio?.length > 0 &&
    data?.time_new &&
    data?.time_new?.length > 0
  ) {
    let audio = data?.news_audio[data.news_audio.length - 1];
    let news_time_ai = JSON.parse(
      data.time_new[data.time_new.length - 1]?.news_time_ai
    );
    let values: number[] = Object.values(news_time_ai);
    let keys: any = Object.keys(news_time_ai);
    let listSlice = keys.map((key: string) => ({ title: key }));
    let listTime = await convertTimeMiniSecond(values);
    let totalTime: number = (values[values.length - 1] + 12 + 8) * 1000;

    return {
      audio: audio,
      listSlice: listSlice,
      listTime: listTime,
      totalTime: totalTime,
    };
  }
};
