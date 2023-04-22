import axios from "axios";
import cheerio from "react-native-cheerio";

export const getGoldInfo = async () => {
  let response = await axios.get(`https://goldtraders.or.th`);
  let $ = cheerio.load(response.data);

  const titleGold = $(
    "#DetailPlace_uc_goldprices1_GoldPricesUpdatePanel > h3"
  ).text();

  const dateTime = $("#DetailPlace_uc_goldprices1_lblAsTime > b > font").text();

  //gold bar
  const sellOut1 = $("#DetailPlace_uc_goldprices1_lblBLSell > b > font").text();
  const buyIn1 = $("#DetailPlace_uc_goldprices1_lblBLBuy > b > font").text();
  //gold jewelry
  const sellOut2 = $("#DetailPlace_uc_goldprices1_lblOMSell > b > font").text();
  const taxBase = $("#DetailPlace_uc_goldprices1_lblOMBuy > b > font").text();

  response = await axios.get(`https://www.goldtraders.or.th/DailyPrices.aspx`);
  $ = cheerio.load(response.data);

  //today summary
  const type1 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(2) > td:nth-child(1)"
  ).text();

  const priceBuy1 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(2) > td:nth-child(3)"
  ).text();
  const priceSell1 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(2) > td:nth-child(4)"
  ).text();
  const type2 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(3) > td:nth-child(1)"
  ).text();
  const priceBuy2 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(3) > td:nth-child(3)"
  ).text();
  const priceSell2 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(3) > td:nth-child(4)"
  ).text();
  const type3 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(4) > td:nth-child(1)"
  ).text();
  const priceBuy3 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(4) > td:nth-child(3)"
  ).text();
  const priceSell3 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(4) > td:nth-child(4)"
  ).text();
  const type4 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(5) > td:nth-child(1)"
  ).text();
  const priceBuy4 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(5) > td:nth-child(3)"
  ).text();
  const priceSell4 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(5) > td:nth-child(4)"
  ).text();
  const type5 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(6) > td:nth-child(1)"
  ).text();
  const priceBuy5 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(6) > td:nth-child(3)"
  ).text();
  const priceSell5 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(6) > td:nth-child(4)"
  ).text();
  const type6 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(7) > td:nth-child(1)"
  ).text();
  const priceBuy6 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(7) > td:nth-child(3)"
  ).text();
  const priceSell6 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(7) > td:nth-child(4)"
  ).text();
  const type7 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(8) > td:nth-child(1)"
  ).text();
  const priceBuy7 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(8) > td:nth-child(3)"
  ).text();
  const priceSell7 = $(
    "#DetailPlace_MainGridView > tbody > tr:nth-child(8) > td:nth-child(4)"
  ).text();

  let prepareToday = [
    {
      type: type1,
      priceBuy: priceBuy1,
      priceSell: priceSell1,
    },
    {
      type: type2,
      priceBuy: priceBuy2,
      priceSell: priceSell2,
    },
    {
      type: type3,
      priceBuy: priceBuy3,
      priceSell: priceSell3,
    },
    {
      type: type4,
      priceBuy: priceBuy4,
      priceSell: priceSell4,
    },
    {
      type: type5,
      priceBuy: priceBuy5,
      priceSell: priceSell5,
    },
    {
      type: type6,
      priceBuy: priceBuy6,
      priceSell: priceSell6,
    },
    {
      type: type7,
      priceBuy: priceBuy7,
      priceSell: priceSell7,
    },
  ];

  let goldData = {
    summary: {
      title: titleGold,
      date: dateTime,
      goldBar: {
        sellOut: sellOut1,
        buyIn: buyIn1,
      },
      goldJewelry: {
        sellOut: sellOut2,
        tax: taxBase,
      },
    },
    today: prepareToday,
  };

  return goldData;
};

export default {
  getGoldInfo,
};
