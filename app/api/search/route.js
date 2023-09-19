import { NextResponse } from "next/server";
import listingData from "../../listingsData.json"
export async function GET(req){
    return NextResponse.json(listingData);
}