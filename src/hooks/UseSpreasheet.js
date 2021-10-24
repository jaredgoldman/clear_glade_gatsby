import { useState, useEffect } from "react"
// import { GoogleSpreadsheet } from "google-spreadsheet";
// const gAPI = process.env.GATSBY_G_API
// const gCID = process.env.GATSBY_G_CLIENT_ID

// const SPREADSHEET_ID = process.env.GATSBY_G_SPREADSHEET_ID
// const SHEET_ID = process.env.GATSBY_G_SHEET_ID
// const CLIENT_EMAIL = process.env.GATSBY_G_CLIENT_EMAIL
// const PRIVATE_KEY = process.env.GATSBY_G_PRIVATE_KEY

export default function UseSpreadsheet() {
  // const [doc, setDoc] = useState()
  
  // useEffect(() => {
  //   fetchSheet();
  // }, [])

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

  // const fetchSheet = async () => {
  //   try {
  //     await doc.useServiceAccountAuth({
  //       client_email: CLIENT_EMAIL,
  //       private_key: PRIVATE_KEY,
  //     });
  //     // loads document properties and worksheets
  //     await doc.loadInfo();
  
  //     const sheet = doc.sheetsById[SHEET_ID];
  //     console.log(sheet);
  //   } catch (e) {
  //     console.error('Error: ', e);
  //   }
  // }

  return {
    'stuff': 'stuff'
  }
}
