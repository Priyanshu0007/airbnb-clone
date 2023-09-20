import { NextResponse } from "next/server";
import listingData from "../../listingsData.json"
// export async function GET(req){
//     return NextResponse.json(listingData);
// }
export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await listingData()
   
    // Props returned will be passed to the page component
    return NextResponse.json(listingData);
  }
  