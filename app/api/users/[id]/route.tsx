import { NextRequest, NextResponse } from "next/server"

interface Props {
    params: { id: number }
}

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data
    if (params.id > 10) {
        return NextResponse.json({ error: 'User not found'}, { status: 404})
    }
    return NextResponse.json({ id: 1, name: 'Popo'})
}